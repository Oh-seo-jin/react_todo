import Student from "./Student";

export default function StudentList() {
  return (
    <>
      <Student name="김종인" age={30} isStudent={true} />
      <Student name="오세훈" age={30} isStudent={true} />
      <Student name="김민석" age={30} isStudent={true} />
      <Student/>
    </>
  );
}
