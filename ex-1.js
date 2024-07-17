function findStudentIndex(students, searchStudent) {
  let left = 0;
  let right = students.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (students[mid] < searchStudent) {
      left = mid + 1;
	}
    else if (students[mid] > searchStudent) {
      right = mid - 1;
    }else {
		return mid;
	}
  }
  return -1;
}

let students = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];
let searchStudent = "Jasmine";

console.log(findStudentIndex(students, searchStudent));
// ตอบคำถามตรงนี้จ้า
//Binary Search O(log(n)) ในการวน loop แต่ละครั้ง จะตัดตัวที่ไม่ต้องหาออกครึ่งหนึ่งของ array 
