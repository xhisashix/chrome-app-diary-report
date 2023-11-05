class diaryClass {
  /**
   * @param {string} task_report
   * @param {string} status_report
   */
  createReportMail(
    to: string,
    cc: string,
    task_report: string,
    status_report: string
  ) {
    // 引数をもとにGmailの下書きを作成する
    const date = new Date();
    const today =
      date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    const subject = today + " " + "日報 - " + "名前";
    const body = this.template(task_report, status_report);

    const parsedBody = this.encodePlainText(body);
    const baseUrl = "https://mail.google.com/mail/?view=cm";
    const url = `${baseUrl}&to=${to}&cc=${cc}&su=${subject}&body=${parsedBody}`;
    chrome.tabs.create({ url: url }, (tab) => {
      console.log("tab", tab);
    });
  }

  /**
   * encode body to base64
   * @param {string} body
   * @return {string}
   */
  encodePlainText(body: string) {
    const encodedBody = encodeURIComponent(body);
    return encodedBody;
  }

  template(task_report: string, status_report: string) {
    const report = `【進捗状況】\n${status_report}\n\n【タスク状況】\n${task_report}`;

    return report;
  }
}

export default diaryClass;
