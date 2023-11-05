import storageClass from "./storageClass";

const storage = new storageClass();

const to = document.getElementById("to") as HTMLInputElement;
const cc = document.getElementById("cc") as HTMLInputElement;
const save = document.getElementById("save") as HTMLButtonElement;

storage.getReportFromStorage("to", (value) => {
  to.value = value || "";
});

storage.getReportFromStorage("cc", (value) => {
  cc.value = value || "";
});

save.onclick = () => {
  storage.saveReportToStorage("to", to.value);
  storage.saveReportToStorage("cc", cc.value);

  // 保存完了メッセージ
  const message = document.getElementById("message") as HTMLDivElement;
  message.classList.remove("hidden");
};
