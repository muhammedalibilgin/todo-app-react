import { useState, useEffect } from "react";

import Input from "./input/input";
import List from "./list/list";

import "./styles.css";

function ToDoMain() {
      const [todos, setTodos] = useState([{ value: "React öğren" }, { value: "JavaScript Öğren" }, { value: "Patikayı Tamamla" }]);

      useEffect(() => {
            // console.log("todos değişti", todos);
      }, [todos]);

      return (
            <section className="todoapp">
                  <h1>yapılacaklar</h1>
                  <Input addTodos={setTodos} todos={todos} />
                  <hr />
                  <List todos={todos} />
            </section>
      );
}

export default ToDoMain;
