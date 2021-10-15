import { useState, useEffect } from "react";

function List({ todos }) {
      const [checked, setChecked] = useState(true);

      useEffect(() => {
            console.log("change");
      }, [checked]);

      return (
            <section className="main">
                  <input className="toggle-all" type="checkbox" />
                  <label htmlFor="toggle-all"> Mark all as complete </label>

                  <ul className="todo-list">
                        {/* <li className="completed">
                              <div className="view">
                                    <input className="toggle" type="checkbox" />
                                    <label>Learn JavaScript</label>
                                    <button className="destroy"></button>
                              </div>
                        </li>
                        <li>
                              <div className="view">
                                    <input className="toggle" type="checkbox" />
                                    <label>Learn React</label>
                                    <button className="destroy"></button>
                              </div>
                        </li>
                        <li>
                              <div className="view">
                                    <input className="toggle" type="checkbox" />
                                    <label>Have a life!</label>
                                    <button className="destroy"></button>
                              </div>
                        </li> */}
                        {todos.map((x, i) => (
                              <li className="completed" key={i}>
                                    <div className="view">
                                          <input
                                                id="inputCheck"
                                                onClick={() => {
                                                      setChecked(!checked);
                                                      console.log(i);
                                                }}
                                                className="toggle"
                                                type="checkbox"
                                          />

                                          <label> {x.value} </label>
                                          <button className="destroy"></button>
                                    </div>
                              </li>
                        ))}
                  </ul>
            </section>
      );
}

export default List;
