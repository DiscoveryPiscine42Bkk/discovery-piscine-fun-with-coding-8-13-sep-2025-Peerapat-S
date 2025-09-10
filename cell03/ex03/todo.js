window.onload = function() {
      let saved = getCookie("todos");
      if (saved) {
        let todos = JSON.parse(saved);
        todos.forEach(text => addTodo(text, false));
      }
    };

document.getElementById("newBtn").addEventListener("click", function() {
      let text = prompt("Enter new TO DO:");
      if (text && text.trim() !== "") {
        addTodo(text.trim(), true);
      }
    });

function addTodo(text, save) {
      let ft_list = document.getElementById("ft_list");
      let div = document.createElement("div");
      div.className = "todo";
      div.textContent = text;

      div.onclick = function() {
        if (confirm("Do you want to remove this TO DO?")) {
          ft_list.removeChild(div);
          saveTodos();
        }
      };

      ft_list.insertBefore(div, ft_list.firstChild);

      if (save) saveTodos();
    }

    function saveTodos() {
      let ft_list = document.getElementById("ft_list");
      let todos = [];
      for (let child of ft_list.children) {
        todos.push(child.textContent);
      }
      setCookie("todos", JSON.stringify(todos), 7);
    }

    function setCookie(name, value, days) {
      let d = new Date();
      d.setTime(d.getTime() + (days*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
      let cname = name + "=";
      let decoded = decodeURIComponent(document.cookie);
      let ca = decoded.split(';');
      for(let c of ca) {
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(cname) === 0) {
          return c.substring(cname.length, c.length);
        }
      }
      return "";
    }