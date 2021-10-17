import React from "react";

function List({ todos }) {
      const inputDoing = document.getElementsByName("inputDoing");

      function inputControl() {
            inputDoing.forEach((x, i) => {
                  if (x.checked) {
                        inputDoing[i].parentNode.parentNode.classList.add("completed");
                  } else {
                        inputDoing[i].parentNode.parentNode.classList.remove("completed");
                  }
            });
      }

      function destroyToDo(i) {
            console.log("clicked", i);

            inputDoing[i].parentNode.parentNode.classList.add("destroy-display");
      }

      return (
            <div>
                  <section className="main">
                        <input className="toggle-all" type="checkbox" />
                        <label htmlFor="toggle-all"> Mark all as complete </label>

                        <ul className="todo-list">
                              {todos.map((x, i) => (
                                    <li key={i} id={i}>
                                          <div className="view">
                                                <input
                                                      id="inputCheck"
                                                      name="inputDoing"
                                                      onClick={() => inputControl()}
                                                      className="toggle"
                                                      type="checkbox"
                                                />

                                                <label> {x.value} </label>
                                                <button className="destroy" onClick={() => destroyToDo(i)}></button>
                                          </div>
                                    </li>
                              ))}
                        </ul>
                  </section>

                  <footer className="footer">
                        <span className="todo-count">
                              <strong>0 </strong>
                              yapılacak iş
                        </span>

                        <ul className="filters">
                              <li>
                                    <a href="!#" className="[if(activeFilter = 'all', 'selected')]">
                                          All
                                    </a>
                              </li>
                              <li>
                                    <a href="!#" className="[if(activeFilter = 'active', 'selected')]">
                                          Active
                                    </a>
                              </li>
                              <li>
                                    <a href="!#" className="[if(activeFilter = 'completed', 'selected')]">
                                          Completed
                                    </a>
                              </li>
                        </ul>

                        <button hidden="[todoDone = 0]" className="clear-completed" mv-action="delete(todo where done)">
                              Clear completed
                        </button>
                  </footer>
            </div>
      );
}

export default List;
