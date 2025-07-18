import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-warm-cream">
      {/* Header */}
      <header className="bg-warm-cream border-b border-warm-orange/20 px-4 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="ChefHat" className="text-warm-orange" size={32} />
            <span className="text-2xl font-bold text-warm-brown">Pizza Masterclass</span>
          </div>
          <Button className="bg-warm-orange hover:bg-warm-brown text-white">
            Записаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-warm-brown leading-tight">
                Мастер-класс по приготовлению пиццы
              </h1>
              <p className="text-lg text-warm-darkBrown leading-relaxed">
                Погрузитесь в атмосферу итальянской кухни и научитесь готовить настоящую пиццу
                от профессионального шеф-повара. Уютная домашняя обстановка и секреты
                идеального теста ждут вас!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-warm-orange hover:bg-warm-brown text-white px-8">
                  Забронировать место
                </Button>
                <Button variant="outline" size="lg" className="border-warm-orange text-warm-brown hover:bg-warm-orange hover:text-white">
                  Узнать больше
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" className="text-warm-orange" size={20} />
                  <span className="text-warm-darkBrown">3 часа</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" className="text-warm-orange" size={20} />
                  <span className="text-warm-darkBrown">До 8 человек</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Star" className="text-warm-orange" size={20} />
                  <span className="text-warm-darkBrown">4.9 рейтинг</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/5588d158-9b9f-4ae0-8ee0-a81a25500aa2.jpg" 
                alt="Шеф-повар готовит пиццу" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-warm-brown font-semibold">Следующий мастер-класс:</p>
                <p className="text-warm-orange font-bold">25 января, 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* О шеф-поваре */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-warm-brown">О шеф-поваре</h2>
              <h3 className="text-2xl text-warm-orange font-semibold">Марко Россини</h3>
              <p className="text-warm-darkBrown leading-relaxed">
                Профессиональный шеф-повар с 15-летним опытом работы в лучших ресторанах 
                Италии и России. Марко изучал кулинарное искусство в Неаполе и является 
                сертифицированным мастером по приготовлению аутентичной итальянской пиццы.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Award" className="text-warm-orange" size={20} />
                  <span className="text-warm-darkBrown">Сертификат Associazione Verace Pizza Napoletana</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Trophy" className="text-warm-orange" size={20} />
                  <span className="text-warm-darkBrown">Победитель конкурса "Лучшая пицца Москвы 2023"</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="BookOpen" className="text-warm-orange" size={20} />
                  <span className="text-warm-darkBrown">Автор книги "Секреты итальянской кухни"</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-warm-orange/10 p-8 rounded-lg">
                <blockquote className="text-warm-brown italic text-lg">
                  "Пицца - это не просто еда, это искусство, которое объединяет людей. 
                  Я с радостью поделюсь с вами традициями, которые передавались в моей 
                  семье из поколения в поколение."
                </blockquote>
                <p className="mt-4 text-warm-orange font-semibold">- Марко Россини</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Программа мастер-класса */}
      <section className="py-20 px-4 bg-warm-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-warm-brown text-center mb-12">
            Программа мастер-класса
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-warm-orange/20">
              <CardHeader>
                <CardTitle className="text-warm-brown flex items-center">
                  <Icon name="Clock" className="text-warm-orange mr-2" size={20} />
                  Первый час
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="Circle" className="text-warm-orange mt-1" size={12} />
                  <span className="text-warm-darkBrown">Знакомство с ингредиентами</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Circle" className="text-warm-orange mt-1" size={12} />
                  <span className="text-warm-darkBrown">Приготовление теста</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Circle" className="text-warm-orange mt-1" size={12} />
                  <span className="text-warm-darkBrown">Секреты идеальной консистенции</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-warm-orange/20">
              <CardHeader>
                <CardTitle className="text-warm-brown flex items-center">
                  <Icon name="Clock" className="text-warm-orange mr-2" size={20} />
                  Второй час
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="Circle" className="text-warm-orange mt-1" size={12} />
                  <span className="text-warm-darkBrown">Приготовление соусов</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Circle" className="text-warm-orange mt-1" size={12} />
                  <span className="text-warm-darkBrown">Раскатывание теста</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Circle" className="text-warm-orange mt-1" size={12} />
                  <span className="text-warm-darkBrown">Выбор и подготовка топингов</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-warm-orange/20">
              <CardHeader>
                <CardTitle className="text-warm-brown flex items-center">
                  <Icon name="Clock" className="text-warm-orange mr-2" size={20} />
                  Третий час
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="Circle" className="text-warm-orange mt-1" size={12} />
                  <span className="text-warm-darkBrown">Сборка и выпечка пиццы</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Circle" className="text-warm-orange mt-1" size={12} />
                  <span className="text-warm-darkBrown">Дегустация готовых блюд</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Circle" className="text-warm-orange mt-1" size={12} />
                  <span className="text-warm-darkBrown">Советы по домашнему приготовлению</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-warm-orange text-white">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="Gift" className="text-white mr-2" size={20} />
                  Бонусы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="Circle" className="text-white mt-1" size={12} />
                  <span className="text-white">Рецепты для домашнего использования</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Circle" className="text-white mt-1" size={12} />
                  <span className="text-white">Сертификат участника</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Circle" className="text-white mt-1" size={12} />
                  <span className="text-white">Фотосессия с готовой пиццей</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-warm-brown text-center mb-12">
            Готовые блюда и процесс
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="/img/29dbd153-431e-4ce4-bc06-11499f8030b5.jpg" 
                alt="Готовая пицца" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-warm-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="/img/e35f8f44-e174-4d18-a82a-c89efbdd022e.jpg" 
                alt="Процесс приготовления" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-warm-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="/img/5588d158-9b9f-4ae0-8ee0-a81a25500aa2.jpg" 
                alt="Шеф-повар за работой" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-warm-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Форма записи */}
      <section className="py-20 px-4 bg-warm-cream">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-warm-brown mb-4">
              Записаться на мастер-класс
            </h2>
            <p className="text-warm-darkBrown text-lg">
              Места ограничены! Забронируйте свое место уже сегодня
            </p>
          </div>
          
          <Card className="bg-white border-warm-orange/20 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-warm-brown">Стоимость: 4500 ₽</CardTitle>
              <CardDescription className="text-warm-darkBrown">
                Включает все ингредиенты, напитки и сертификат
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-warm-brown">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" className="border-warm-orange/30 focus:border-warm-orange" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-warm-brown">Телефон</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" className="border-warm-orange/30 focus:border-warm-orange" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-warm-brown">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="border-warm-orange/30 focus:border-warm-orange" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date" className="text-warm-brown">Выберите дату</Label>
                <select className="w-full p-3 border border-warm-orange/30 rounded-md focus:border-warm-orange">
                  <option>25 января 2025, 18:00</option>
                  <option>1 февраля 2025, 18:00</option>
                  <option>8 февраля 2025, 18:00</option>
                  <option>15 февраля 2025, 18:00</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="comment" className="text-warm-brown">Комментарий</Label>
                <Textarea 
                  id="comment" 
                  placeholder="Особые пожелания или вопросы..."
                  className="border-warm-orange/30 focus:border-warm-orange"
                />
              </div>
              
              <Button className="w-full bg-warm-orange hover:bg-warm-brown text-white py-3 text-lg">
                Забронировать место
              </Button>
              
              <p className="text-sm text-warm-darkBrown text-center">
                После отправки формы мы свяжемся с вами в течение 30 минут
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-brown text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="ChefHat" className="text-warm-orange" size={24} />
                <span className="text-xl font-bold">Pizza Masterclass</span>
              </div>
              <p className="text-warm-cream">
                Уютная кулинарная школа для любителей итальянской кухни
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@pizzamaster.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>ул. Кулинарная, 15</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={20} className="cursor-pointer hover:text-warm-orange" />
                <Icon name="Facebook" size={20} className="cursor-pointer hover:text-warm-orange" />
                <Icon name="Youtube" size={20} className="cursor-pointer hover:text-warm-orange" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-warm-orange/20 mt-8 pt-8 text-center">
            <p className="text-warm-cream">&copy; 2025 Pizza Masterclass. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}