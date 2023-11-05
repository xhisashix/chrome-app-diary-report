import storageClass from "./storageClass";

const storage = new storageClass();

const to = document.getElementById("to") as HTMLInputElement;
const cc = document.getElementById("cc") as HTMLInputElement;
const name = document.getElementById("name") as HTMLInputElement;
const report_head = document.getElementById("report_head") as HTMLInputElement;
const save = document.getElementById("save") as HTMLButtonElement;

storage.getReportFromStorage("to", (value) => {
  to.value = value || "";
});

storage.getReportFromStorage("cc", (value) => {
  cc.value = value || "";
});

storage.getReportFromStorage("name", (value) => {
  name.value = value || "";
});

storage.getReportFromStorage("report_head", (value) => {
  report_head.value = value || "";
});

save.onclick = () => {
  storage.saveReportToStorage("to", to.value);
  storage.saveReportToStorage("cc", cc.value);
  storage.saveReportToStorage("report_head", report_head.value);
  storage.saveReportToStorage("name", name.value);

  // 保存完了メッセージ
  const message = document.getElementById("message") as HTMLDivElement;
  message.classList.remove("hidden");

  setTimeout(() => {
    message.classList.add("hidden");
  }, 1000);
};
