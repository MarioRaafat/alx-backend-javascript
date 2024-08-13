/**
 * Retrieves ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns
 */
export default function getListStudentIds (arr) {
  if (arr instanceof Array) {
    return arr.map((student) => student.id);
  }
  return [];
}
