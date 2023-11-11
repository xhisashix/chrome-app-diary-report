import diaryClass from "../diaryClass";
import storageClass from "../storageClass";

const diary = new diaryClass();
const storage = new storageClass();

// import your function here if it's in a different file
// import { encodePlainText } from './yourFunctionFile';

describe('encodePlainText', () => {
  it('should correctly encode a plain text string', () => {
    const input = 'Hello World';
    const expectedOutput = 'Hello%20World';
    expect(diary.encodePlainText(input)).toBe(expectedOutput);
  });

  it('should handle special characters correctly', () => {
    const input = 'こんにちは';
    const expectedOutput = '%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF';
    expect(diary.encodePlainText(input)).toBe(expectedOutput);
  });

  it('should return an empty string for empty input', () => {
    const input = '';
    const expectedOutput = '';
    expect(diary.encodePlainText(input)).toBe(expectedOutput);
  });

  it('should correctly encode a string with spaces and special characters', () => {
    const input = 'Hello 世界!';
    const expectedOutput = 'Hello%20%E4%B8%96%E7%95%8C!';
    expect(diary.encodePlainText(input)).toBe(expectedOutput);
  });
});

describe('createSubject', () => {
  const realDateNow = Date.now;

  beforeAll(() => {
    // モックされた日付をセットアップする
    const mockDate = new Date('2023-11-11T12:00:00Z').getTime();
    jest.spyOn(Date, 'now').mockImplementation(() => mockDate);
  });

  afterAll(() => {
    // モックをリセットする
    Date.now = realDateNow;
  });

  it('should create a subject with the correct date and name', () => {
    const name = '山田';
    const expectedSubject = '2023/11/11  日報 - 山田';
    expect(diary.createSubject(name)).toBe(expectedSubject);
  });

  it('should create a subject with the correct date and name', () => {
    const name = '田中';
    const expectedSubject = '2023/11/11  日報 - 田中';
    expect(diary.createSubject(name)).toBe(expectedSubject);
  });
});
