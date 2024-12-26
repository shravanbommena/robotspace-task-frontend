import { useState } from "react";
import NewTask from "./components/NewTask";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement(document.getElementById("root"));

const App = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  const [taskList, setTaskList] = useState([]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const openDeleteModal = () => {
    setDeleteModalIsOpen(true);
  };
  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
  };

  const onSubmitTask = (task) => {
    setTaskList((prev) => {
      const tasks = [...prev, task];
      return tasks;
    });
    closeModal();
  };

  console.log(taskList);
  return (
    <div className="min-h-screen w-full">
      <nav className="h-28 px-4 py-2 flex justify-center items-center w-full border-b">
        <div className="flex justify-center items-center">
          <h1 className="text-center text-2xl md:text-4xl">Tasks</h1>
        </div>
      </nav>
      {/* Modal for New Task */}
      <NewTask
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
        onSubmitTask={onSubmitTask}
      />
      {/* Task Display */}
      <div className="p-4">
        <ul className="flex flex-col gap-2">
          {taskList.length > 0 &&
            taskList.map((task) => (
              <li
                className="flex border rounded-md justify-between gap-2 p-2"
                key={task.id}
              >
                <div className="flex gap-2 justify-between items-center flex-grow">
                  <p className="text-lg font-medium flex-grow">{task.name}</p>
                  <p className="text-lg flex-grow">{task.description}</p>
                  <p className="flex-grow">{task.dueDate}</p>
                  <p className="flex-grow">{task.status}</p>
                  <p className="flex-grow">{task.priority}</p>
                </div>
                <div className="flex gap-2">
                  <button className="h-9 px-3 border bg-slate-700 text-white font-bold ">
                    Edit
                  </button>
                  <button
                    className="h-9 px-3 border bg-red-600 text-white font-bold "
                    onClick={openDeleteModal}
                  >
                    Delete
                  </button>
                </div>
                <Modal
                  isOpen={deleteModalIsOpen}
                  onRequestClose={closeDeleteModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <h2 className="text-lg font-medium text-center">
                    Delete Task
                  </h2>
                  <div className="flex gap-1 mt-2">
                    <button
                      type="button"
                      className=" rounded h-9 px-4 bg-red-500 text-white font-semibold "
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className=" rounded h-9 px-4 bg-slate-500 text-white font-semibold "
                      onClick={closeDeleteModal}
                    >
                      Close
                    </button>
                  </div>
                </Modal>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
