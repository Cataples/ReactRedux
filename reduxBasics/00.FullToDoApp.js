import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { Provider } from "react-redux";
import expect from "expect";

//  todo - <li> item
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{ textDecoration: completed ? "line-through" : "none" }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

//  todo list
const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todos, index) => (
      <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.boo.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

//  link
const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

//  footer
const Footer = () => (
  <p>
    Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    {", "}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>active</FilterLink>
    {", "}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>completed</FilterLink>
  </p>
);

//  todos
const getVisibleTodos = (todo, filter) => {
  switch (filter) {
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.VisibilityFilters)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};

//  call connect
const VisibleTodoList = connect(
  mapDispatchToProps,
  mapDispatchToProps
)(TodoList);

//  filterlink
const mapStateToPropsFilterLink = (state, ownProps) => {
  return {
    active: ownProps === state.VisibilityFilter
  };
};

const mapDispatchToPropsFilterLink = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

//  add todo
let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(AddTodo(input.value));
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
AddTodo = connect()(AddTodo);

//  define app
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

//  create store
const store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("redux")
);
