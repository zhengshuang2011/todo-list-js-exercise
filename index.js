function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,

    logTaskState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },
    markCompleted: function () {
      this.complete = true;
    },
  };
  return task;
}

const task1 = newTask("Clean Cat", "Take all the shit");
const task2 = newTask("Do laundry", "Cloth");
const tasks = [task1, task2];
// logTaskState(task1);
// logTaskState(task2);
// completeTask(task1);
// logTaskState(task1);
task1.logTaskState();
task2.logTaskState();
task1.markCompleted();
task1.logTaskState();

console.log(tasks);
