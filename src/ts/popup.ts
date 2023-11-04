import diaryClass from "./diaryClass";

const diary = new diaryClass();

const createBtn = document.getElementById("createBtn") as HTMLButtonElement;

createBtn.addEventListener("click", () => {
  const task_report = document.getElementById("taskReport") as HTMLInputElement;
  const status_report = document.getElementById("statusReport") as HTMLInputElement;

  diary.createReportMail(task_report.value, status_report.value);
});