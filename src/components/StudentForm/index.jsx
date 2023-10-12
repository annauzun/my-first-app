import Button from "components/Button"
import { useState } from "react"


const courses = ['Рисование', 'Программирование', 'Информатика', 'Математика', 'Дизайн', 'Психология']

const StudentForm = ({addStudent}) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [course, setCourse] = useState(courses[1]) 

    const handleClick = event => {
        event.preventDefault()
        const student = {
            firstName,
            lastName,
            age,
            course
        }

        addStudent(student)
        setFirstName('')
        setLastName('')
        setAge('')
        setCourse(courses[1]) 
    }

    
    return (
        <div>
            <form className="max-w-sm mx-10 my-10 gap-y-4 flex flex-col">
                <h2 className="font-bold text-xl">Добавить нового студента</h2>
                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Имя</label>
                    <input 
                        onChange={(event) => setFirstName(event.target.value)}
                        value={firstName} 
                        name="firstName" 
                        type="text" 
                        className="col-span-2 border border-solid border-gray-400 rounded"/>
                </div>
                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Фамилия</label>
                    <input 
                        onChange={(event) => setLastName(event.target.value)}
                        value={lastName}
                        name="lastName" 
                        type="text" 
                        className="col-span-2 border border-solid border-gray-400 rounded"/>
                </div>
                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Возраст</label>
                    <input 
                        onChange={(event) => setAge(event.target.value)}
                        value={age}
                        name="age" 
                        type="text" 
                        className="col-span-2 border border-solid border-gray-400 rounded"/>
                </div>
                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Курс</label>
                    <select 
                        value={course} 
                        onChange={(event) => setCourse(event.target.value)}
                        className="col-span-2 border border-solid border-gray-400 rounded">
                        {courses.map(course => {
                            return (
                                <option key={course}>{course}</option>
                            )
                        })}
                        {/*courses.map(course => (
                                <option>{course}</option>
                            )
                        )*/}
                    </select>
                </div>
                <Button title='Добавить студента' handleClick={handleClick} type="submit" />
            </form>    
        </div>
    )
}

export default StudentForm