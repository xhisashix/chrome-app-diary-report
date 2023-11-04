class storageClass {
  /**
   * @param {string} key - Key to save settings under
   * @param {string} value - Value to save settings under
   * @return {void}
   */
  saveReportToStorage(key: string, value: string) {
    chrome.storage.local.set({ [key]: value }),
      () => {
        console.log("Value is set to " + value);
      };
  }
}
