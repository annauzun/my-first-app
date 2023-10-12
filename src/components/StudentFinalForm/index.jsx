import Button from "components/Button"
import { Form, Field } from "react-final-form"


const courses = ['Рисование', 'Программирование', 'Информатика', 'Математика', 'Дизайн', 'Психология']

const StudentForm = ({addStudent}) => {
    const handleClick = async (values) => {
        addStudent(values)
    }

    
    return (
        <div>
            <Form
                onSubmit={handleClick}
                render={({ handleSubmit }) => (
                    <form className="max-w-sm mx-10 my-10 gap-y-4 flex flex-col">
                        <h2 className="font-bold text-xl">Добавить нового студента</h2>
                        <div className="grid grid-cols-3 gap-y-4">
                            <label className="col-span-1">Имя</label>
                            <Field
                                name="firstName"
                                component="input"
                                type="text"
                                className="col-span-2 border border-solid border-gray-400 rounded"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-y-4">
                            <label className="col-span-1">Фамилия</label>
                            <Field
                                name="lastName"
                                component="input"
                                type="text" 
                                className="col-span-2 border border-solid border-gray-400 rounded"/>
                        </div>
                        <div className="grid grid-cols-3 gap-y-4">
                            <label className="col-span-1">Возраст</label>
                            <Field 
                                name="age" 
                                component="input"
                                type="text" 
                                className="col-span-2 border border-solid border-gray-400 rounded"/>
                        </div>
                        <div className="grid grid-cols-3 gap-y-4">
                            <label className="col-span-1">Курс</label>
                            <Field 
                                name="course"
                                component="select"
                                type="text" 
                                className="col-span-2 border border-solid border-gray-400 rounded"
                                >
                                {courses.map(course => {
                                    return (
                                        <option key={course}>{course}</option>
                                    )
                                })}
                                {/*courses.map(course => (
                                        <option>{course}</option>
                                    )
                                )*/}
                            </Field>
                        </div>
                        <Button title='Добавить студента' type="submit" />
                    </form>
                )}
            />            
        </div>
    )
}

export default StudentForm