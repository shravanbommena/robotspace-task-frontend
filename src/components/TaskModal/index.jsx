/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "react-modal";
import { v4 as uuidV4 } from "uuid";

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

const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Add leading zero
  const day = String(today.getDate()).padStart(2, "0"); // Add leading zero
  return `${year}-${month}-${day}`;
};

Modal.setAppElement(document.getElementById("root"));

const TaskModal = (props) => {
  const today = getTodayDate();

  const { modalIsOpen, closeModal, onSubmitTask } = props;

  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(today);
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Pending");

  const onChangeTaskName = (event) => {
    setTaskName(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onChangeDueDate = (event) => {
    setDueDate(event.target.value);
  };
  const onChangePriority = (event) => {
    setPriority(event.target.value);
  };

  const onChangeStatus = (event) => {
    setStatus(event.target.vlaue);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    event.preventDefault();
    const newTask = {
      id: uuidV4(),
      name: taskName,
      description,
      dueDate,
      priority,
      status,
    };
    onSubmitTask(newTask);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 className="border-b text-xl font-medium text-center">Create Task</h2>

      <form className="mt-3" onSubmit={onSubmitForm}>
        <div className="flex flex-col mb-3 gap-2">
          <label className="text-lg ">Task Name:</label>
          <input
            onChange={onChangeTaskName}
            type="text"
            className="h-9 w-full border border-gray-300 rounded px-2 py-1 outline-none "
          />
        </div>
        <div className="flex flex-col mb-3 gap-2">
          <label className="text-lg ">Description:</label>
          <input
            onChange={onChangeDescription}
            type="text"
            className="h-9 w-full border border-gray-300 rounded px-2 py-1 outline-none "
          />
        </div>
        <div className="flex flex-col mb-3 gap-2">
          <label className="text-lg ">Due Date</label>
          <input
            onChange={onChangeDueDate}
            type="date"
            min={today}
            value={dueDate}
            className="h-9 w-full border border-gray-300 rounded px-2 py-1 outline-none "
          />
        </div>
        <div className="flex flex-col mb-3 gap-2">
          <label className="text-lg ">Status</label>
          <select
            className="h-9 w-full border border-gray-300 rounded px-2 py-1 outline-none "
            onChange={onChangeStatus}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>
        <div className="flex flex-col mb-3 gap-2">
          <label className="text-lg ">Priority</label>
          <select
            className="h-9 w-full border border-gray-300 rounded px-2 py-1 outline-none "
            onChange={onChangePriority}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <div className="flex justify-center gap-2">
          <button
            className="h-9 w-32 bg-blue-700 rounded-md  text-white font-bold"
            type="submit"
          >
            Submit
          </button>
          <button
            className="h-9 w-32 bg-red-500 rounded-md text-white font-bold"
            type="button"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default TaskModal;
