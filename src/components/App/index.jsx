import Header from "components/Header";
import Student from "components/Student";
import Footer from "components/Footer";
import StudentForm from "components/StudentForm";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      firstName: 'Анна',
      lastName: 'Иванова',
      age: 12,
      course: 'Рисование'
    }, 
    {
      id: 2,
      firstName: 'Олег',
      lastName: 'Петров',
      age: 32,
      course: 'Программирование'
    },
    {
      id: 3,
      firstName: 'Ирина',
      lastName: 'Семенова',
      age: 28,
      course: 'Программирование'
    },
    {
      id: 4,
      firstName: 'Екатерина',
      lastName: 'Степанова',
      age: 30,
      course: 'Психология'
    }
  ])

  const deleteStudent = (id) => {
    const filteredStudents = students.filter(student => student.id !== id)
    setStudents(filteredStudents)
  } 
  
  const addStudent = (student) => {
    const newStudents = [...students, student]
    setStudents(newStudents)
    /* setStudents = [...students, student]*/  
  }

  return (
    <div>
      <Header />
      <StudentForm addStudent={addStudent} />
      <div className="max-w-screen-lg mx-auto min-h-screen">
        {students.length === 0 && (
        <div className="mt-20 text-center text-7xl text-gray-400 font-thin">Нет студентов</div>
        )}
        {students.length > 0 && students.map((student) => {
          return (
            <Student key={student.id} student={student} deleteStudent={deleteStudent}/>
          )
      })}
      </div>  
      <Footer />
    </div>
  );
}

export default App;
