function Student(props) {
  return (
    <>
      <p>Họ tên: {props.name}</p>
      <p>Tuổi: {props.age}</p>
      <p>Lớp: {props.className}</p>
      <h1>Ăn Tết Vui Quá! {props.happy}</h1>
    </>
  );
}
export default Student;
