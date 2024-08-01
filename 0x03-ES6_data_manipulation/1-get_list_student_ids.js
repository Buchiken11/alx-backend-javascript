export default function getListStudentIds(ids) {
  if (!Array.isArray(ids)) {
    return [];
  } else {
    return (ids.map(ids => ids.id));
  }
}
