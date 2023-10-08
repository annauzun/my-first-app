import Button from "components/Button"

const Header = () => {
    return (
        <header className="bg-blue-600 py-8 text-white font-semibold flex px-20 justify-between">
            <nav className="flex justify-center gap-8 items-center">
                <div>
                    Список студентов
                </div>
                <div>
                    Контакты
                </div>
                <div>
                    Отзывы
                </div>
            </nav>
            <Button title='Связаться с нами' />
      </header>
    )
}

export default Header