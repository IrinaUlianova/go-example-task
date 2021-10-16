// import SearchForm from "components/Modal/SearchForm";
import React, { Component } from "react";
import PokemonForm from "components/PokemonForm";
import { ToastContainer } from "react-toastify";
import PokemonInfo from "components/PokemonInfo";
// import shortid from "shortid";
// import ColorPicker from './components/ColorPicker';
// import Counter from './components/Counter';
// import Container from "./components/Container";
// import TodoList from "./components/TodoList";
// import TodoEditor from "./components/TodoEditor";
// import Filter from "./components/Filter";
// import Form from './components/Form';
// import initialTodos from "./todos.json";
// // import Modal from "./components/Modal";
// class App extends Component {
//   state = {
//     todos: initialTodos,
//     filter: "",
//     showModal: false,
//   };

// addTodo = (text) => {
//   const todo = {
//     id: shortid.generate(),
//     text,
//     completed: false,
//   };

//   this.setState(({ todos }) => ({
//     todos: [todo, ...todos],
//   }));
// };

// deleteTodo = (todoId) => {
//   this.setState((prevState) => ({
//     todos: prevState.todos.filter((todo) => todo.id !== todoId),
//   }));
// };

// toggleCompleted = (todoId) => {
//   // this.setState(prevState => ({
//   //   todos: prevState.todos.map(todo => {
//   //     if (todo.id === todoId) {
//   //       return {
//   //         ...todo,
//   //         completed: !todo.completed,
//   //       };
//   //     }

//   //     return todo;
//   //   }),
//   // }));

//   this.setState(({ todos }) => ({
//     todos: todos.map((todo) =>
//       todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
//     ),
//   }));
// };

// changeFilter = (e) => {
//   this.setState({ filter: e.currentTarget.value });
// };

// getVisibleTodos = () => {
//   const { filter, todos } = this.state;
//   const normalizedFilter = filter.toLowerCase();

//   return todos.filter((todo) =>
//     todo.text.toLowerCase().includes(normalizedFilter)
//   );
// };

// calculateCompletedTodos = () => {
//   const { todos } = this.state;

//   return todos.reduce(
//     (total, todo) => (todo.completed ? total + 1 : total),
//     0
//   );
// };

// componentDidMount() {
//   console.log("App componentDidMount");
//   const todos = localStorage.getItem("todos");
//   const parsedTodos = JSON.parse(todos);
//   if (parsedTodos) {
//     this.setState({ todos: parsedTodos });
//   }
// }
// componentDidUpdate(prevProps, prevState) {
//   console.log("App componentDidUpdate");
//   if (this.state.todos !== prevState.todos) {
//     console.log("Update");
//     localStorage.setItem("todos", JSON.stringify(this.state.todos));
//   }
//   console.log(prevState);
//   console.log(this.state);
// }
// toggleModal = () => {
//   this.setState(({ showModal }) => ({
//     showModal: !showModal,
//   }));
// };
export default class App extends Component {
  state = {
    pokemonName: "",
  };
  handleFormSubmit = (pokemonName) => {
    this.setState({ pokemonName });
  };

  render() {
    // const { todos, filter, showModal } = this.state;
    // const { showModal } = this.state;
    // const totalTodoCount = todos.length;
    // const completedTodoCount = this.calculateCompletedTodos();
    // const visibleTodos = this.getVisibleTodos();

    return (
      <div style={{ maxwidth: 1170, margin: "0auto", padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo Po />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
// <Container>

//   {/* <button type="button" onClick={this.toggleModal}>
//     {" "}
//     Open Modal
//   </button>
//   {showModal && (
//     <Modal onClose={this.toggleModal}>
//       <h1>Hello is content for children</h1>
//       <p>for children</p>
//       <button type="button" onClick={this.toggleModal}>
//         Close
//       </button>
//     </Modal>
//   )} */}

//   {/* TODO: вынести в отдельный компонент */}
//   {/* <div>
//     <p>Всего заметок: {totalTodoCount}</p>
//     <p>Выполнено: {completedTodoCount}</p>
//   </div> */}
//   {/*
//   <TodoEditor onSubmit={this.addTodo} />

//   <Filter value={filter} onChange={this.changeFilter} />

//   <TodoList
//     todos={visibleTodos}
//     onDeleteTodo={this.deleteTodo}
//     onToggleCompleted={this.toggleCompleted} */}
//   {/* /> */}
// {/* </Container> */}

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
