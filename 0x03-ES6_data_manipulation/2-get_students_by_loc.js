export default function getStudentsByLocation(ids, city) {
  return (ids.filter(ids => ids.location === city));
}
