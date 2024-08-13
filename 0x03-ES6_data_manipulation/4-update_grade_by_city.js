/**
 * Updates the grades of a list of students in a given city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {*} city - The city of students.
 * @param {{
 *   studentId: Number,
 *   grade: Number,
 * }[]} newGrades - The new grades to be given to a student.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function updateStudentGradeByCity (arr, city, obj) {
  if (arr instanceof Array) {
    arr
    .filter((student) => student.location === city)
    .map((student) => {
      const g = obj.filter((grade) => grade.studentId === student.id);
      if (g.length > 0) {
        student.grade = g[0].grade;
      } else {
        student.grade = 'N/A';
      }
      return student;
    });
    return arr;
  }
  return [];
} 
