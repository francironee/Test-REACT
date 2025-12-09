# App-Test REACT 📝

Testeo de desarrollo en **ReactJS**. Aplicación simple para gestionar tareas pendientes.

## 🚀 Funcionalidades
* **Agregar Tareas:** Permite ingresar nuevas tareas a una lista.
* **Check Tareas:** Checkbox para tachar/marcar tareas terminadas.
* **Persistencia de Datos:** Uso de `localStorage` para guardar las tareas en el navegador. (si refresheas la página, tus tareas siguen ahí)

## 💻 Tecnologías y Conceptos Aplicados
Creado con `create-react-app` y utiliza Hooks de React:
* `useState`: Para el manejo del estado de la lista de tareas.
* `useRef`: Para capturar el valor del input sin renderizados innecesarios.
* `useEffect`: Para sincronizar el estado de las tareas con el almacenamiento local (LocalStorage).

## 📂 Estructura
* `App.jsx`: Componente principal que maneja la lógica de negocio y el estado.
* `ToDoList.jsx`: Renderiza la lista de tareas.
* `ToDoItem.jsx`: Representa cada tarea individual.
