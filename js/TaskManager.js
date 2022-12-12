const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
  const html = `
    <li class="list-group-item">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge badge-danger">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
        </div>
        <p>${description}</p>
    </li>`;
  return html;
};

class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  addTask({ name, description, assignedTo, dueDate }) {
    const task = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: "TODO",
    };
    this.tasks.push(task);
  }

  render() {
    let tasksHtmlList = [];
    
    this.tasks.forEach(task => {
      const date = new Date(task.dueDate);
      const formattedDate = date.toLocaleDateString();
      const taskHtml = createTaskHtml(
        task.name, 
        task.description, 
        task.assignedTo, 
        formattedDate, 
        task.status);
      tasksHtmlList.push(taskHtml);
    });

    const tasksHtml = tasksHtmlList.join('\n');
    document.getElementById("tasklist").innerHTML = tasksHtml;
  }
}
