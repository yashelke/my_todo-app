import React from 'react'
import {useState,useEffect} from 'react'
import './Todo.css' // Assuming you have a CSS file for styling

function Todo() {
    const [toggle,setToggle]=useState(false);
    const [tasks,setTasks]=useState([]);
    const [newTask,setNewTask]=useState("");
    const [editingTask, setEditingTask] = useState(null);
    const [editText, setEditText] = useState("");
    const [notification, setNotification] = useState({
  show: false,
  message: '',
  type: '' // 'success' or 'error'
});


      useEffect(() => {
      const body = document.body;
      if (toggle) {
        body.classList.add('dark-mode');
      } else {
        body.classList.remove('dark-mode');
      }
    }, [toggle]);


    // Functions of CRUD
const addTask = () => {
  if (newTask.trim() === "") {
    setNotification({
      show: true,
      message: 'Please add a task!',
      type: 'error'
    });
    setTimeout(() => setNotification({...notification, show: false}), 3000);
    return;
  }
  
  
  setTasks([...tasks, {
    id: Date.now(),
    text: newTask,
    completed: false,
    createdAt: new Date(),
    completedAt: null
  }]);
  setNewTask("");
  
  setNotification({
    show: true,
    message: 'Task added successfully!',
    type: 'success'
  });
  setTimeout(() => setNotification({...notification, show: false}), 3000);
};

      // Toggle task completion
   const toggleTask = (id) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { 
        ...task, 
        completed: !task.completed,
        completedAt: task.completed ? null : new Date()  // Add this line
      } : task
    )
  );
};
      // Delete a task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Open up an edit modal

    const openEditModal = (task) =>
    {
        setEditingTask(task);
        setEditText(task.text);
        
    }
     // Save edited task
    const saveEditedTask = () => {
        if (editText.trim() !== '') {
            setTasks(
                tasks.map((task) =>
                    task.id === editingTask.id ? { ...task, text: editText } : task
                )
            );
            setEditingTask(null);
            setEditText('');
        }
    };
  
    // Mark task as completed
      const completeTask = (id) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

//   TimeStamp
const formatDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};
const formatTimeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    if (interval >= 1) {
      return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`;
    }
  }
  
  return 'just now';
};

    // Stats Calculation 

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;
    const activeTasks = totalTasks - completedTasks;

  return (
    <>
    <header className="nav-container">
        <h1 className ="app-heading">TaskFlow</h1>
        <button className="toggle-btn" onClick={() => setToggle(!toggle)}>{toggle ? 'Light Mode' : 'Dark Mode'}</button>
    </header>

    <section className="stats-section">
        <div className="stats-cards">
            <div className='card1'>
                <h2 className='card-title'>Total Tasks</h2>
                <p className='card-value total'><span>{totalTasks}</span></p>
            </div>
               <div className='card2'>
                <h2 className='card-title'>Active</h2>
                <p className='card-value active'><span>{activeTasks}</span></p>
            </div>
             <div className='card3'>
                <h2 className='card-title'>Completed</h2>
                <p className='card-value completed'><span>{completedTasks}</span></p>
            </div>
            </div>
    </section>

    <section className="todo-section">

            <div className="task-input-container">
                <input
                type="text"
                placeholder="Add a new task"    
                value={newTask}
                onChange ={(e) => setNewTask(e.target.value)}
                onKeyPress ={(e) => e.key === 'Enter' && addTask()}
                />

                <button className="add-btn" onClick={addTask}>+Add Task</button>
            </div>

             <div className="task-list">
                    {tasks.length === 0 ? (
                        <p className="empty-message">No tasks yet. Add one above!</p>
                    ) : (
                        tasks.map((task) => (
                          <div className={`task-item ${task.completed ? 'completed' : ''}`}>
  <button 
    className={`tick-btn ${task.completed ? 'completed' : ''}`}
    onClick={() => toggleTask(task.id)}
    aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
  >
    {task.completed ? '✓' : ''}
  </button>

  <div className="task-content">
    <span
      className="task-text"
      onClick={() => toggleTask(task.id)}
    >
      {task.text}
    </span>
    
    <div className="task-meta">
      <span className="timestamp">
        Created: {formatTimeAgo(task.createdAt)}
      </span>
      {task.completed && (
        <span className="timestamp completed">
          Completed: {formatTimeAgo(task.completedAt)}
        </span>
      )}
    </div>
  </div>

  <div className="task-actions">
    <button
      className="edit-btn"
      onClick={() => openEditModal(task)}
    >
      Edit
    </button>
    <button
      className="delete-btn"
      onClick={() => deleteTask(task.id)}
    >
      Delete
    </button>
  </div>
</div>
                        ))
                    )}
                </div>
        </section>
        {/* Edit Task Modal */}
            {editingTask && (
                <div className="modal-overlay">
                    <div className="edit-modal">
                        <h3>Edit Task</h3>
                        <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && saveEditedTask()}
                        />
                        <div className="modal-actions">
                            <button className="cancel-btn" onClick={() => setEditingTask(null)}>
                                Cancel
                            </button>
                            <button className="save-btn" onClick={saveEditedTask}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

                          {/* Notfication */}
                          {notification.show && (
                    <div className={`notification-center ${notification.type}`}>
                      <div className="notification-content">
                        {notification.type === 'success' ? (
                          <div className="notification-icon">✓</div>
                        ) : (
                          <div className="notification-icon">!</div>
                        )}
                        <p>{notification.message}</p>
                        <div className="notification-progress">
                          <div className="notification-progress-bar"></div>
                        </div>
                      </div>
                    </div>
                  )}
    </>
  )
}

export default Todo; 