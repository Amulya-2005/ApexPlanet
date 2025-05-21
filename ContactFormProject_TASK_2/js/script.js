document.getElementById('addTaskBtn').addEventListener('click', function () {
  const taskInput = document.getElementById('taskInput');
  const taskValue = taskInput.value.trim();

  if (taskValue !== '') {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskValue;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('removeBtn');

    removeBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = '';
  }
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent = 'Form submitted successfully!';
});
