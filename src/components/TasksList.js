import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/tasksSlice";

function TasksList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-5/6">
      <header className="text-center pb-44 ">
        <h1 className="text-5xl pb-5">To do list app</h1>
        <h1 className="text-4xl">You have {tasks.length} tasks listed.</h1>
      </header>
      <p className="text-2xl pb-3">
        Start adding your tasks:{' '}
        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-xl shadow-sm"
        >
          Create Task
        </Link>
      </p>

      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          <div className="bg-neutral-800 p-4 rounded-md" key={task.id}>
            <header className="flex justify-between">
              <h3 className="text-lg font-bold">{task.title}</h3>
              <div className="flex gap-x-2">
                <Link
                  to={`/edit-task/${task.id}`}
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md self-center"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md"
                >
                  delete
                </button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TasksList;
