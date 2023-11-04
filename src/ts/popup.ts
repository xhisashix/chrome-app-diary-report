import diaryClass from "./diaryClass";
import storageClass from "./storageClass";

const diary = new diaryClass();
const storage = new storageClass();

const createBtn = document.getElementById("createBtn") as HTMLButtonElement;
const task_report = document.getElementById("taskReport") as HTMLInputElement;
const status_report = document.getElementById(
  "statusReport"
) as HTMLInputElement;

createBtn.addEventListener("click", () => {
  diary.createReportMail(task_report.value, status_report.value);
});

/**
 * キー入力時にストレージに保存する
 */
document.addEventListener("DOMContentLoaded", () => {
  var timeoutId: number;

  // キー入力時の処理
  task_report.addEventListener("keyup", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      storage.saveReportToStorage("task_report", task_report.value);
    }, 500);
  });

  status_report.addEventListener("keyup", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      storage.saveReportToStorage("status_report", status_report.value);
    }, 500);
  });
});

/**
 * ストレージから値を取得して表示する
 */
document.addEventListener("DOMContentLoaded", () => {
  storage.getReportFromStorage("task_report", (result) => {
    task_report.value = result;
  });

  storage.getReportFromStorage("status_report", (result) => {
    status_report.value = result;
  });
});