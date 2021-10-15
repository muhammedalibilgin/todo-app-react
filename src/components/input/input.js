import { useState, useEffect } from "react";

function Input({ todos, addTodos }) {
      const [value, setValue] = useState({ value: "" });

      useEffect(() => {
            setValue({ value: "" });
      }, [todos]);

      const onSubmit = (e) => {
            e.preventDefault();
            // console.log(e.target.value);
            // console.log("value", value);

            if (value.value === "") {
                  return false;
            }

            addTodos([...todos, value]);
      };

      return (
            <header className="header">
                  <form className="frm" onClick={onSubmit}>
                        <input
                              id="inputNeeds"
                              value={value.value}
                              onChange={(e) => {
                                    // console.log("onchange", e.target.value);
                                    setValue({ ...value, value: e.target.value });
                                    // console.log(value);
                              }}
                              className="new-todo"
                              placeholder="Yapılacak iş ekle"
                              autoFocus
                        />
                        <button>Ekle</button>
                  </form>
            </header>
      );
}

export default Input;
