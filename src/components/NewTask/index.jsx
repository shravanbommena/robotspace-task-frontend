/* eslint-disable react/prop-types */

import TaskModal from "../TaskModal";

const NewTask = (props) => {
  const { modalIsOpen, openModal, closeModal, onSubmitTask } = props;
  return (
    <div className="p-4">
      <div className="flex justify-center items-center mt-6 gap-2">
        <h2 className="text-xl md:text-3xl">New Task</h2>
        <button
          type="button"
          className="border-slate-600 bg-slate-400 size-9 text-xl md:text-3xl outline-none"
          onClick={openModal}
        >
          +
        </button>
        <TaskModal
          modalIsOpen={modalIsOpen}
          openModal={openModal}
          closeModal={closeModal}
          onSubmitTask={onSubmitTask}
        />
      </div>
    </div>
  );
};

export default NewTask;
