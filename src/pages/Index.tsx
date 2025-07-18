import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-warm-cream">
      {/* Header */}
      <header className="bg-warm-cream/95 backdrop-blur-sm border-b border-warm-orange/20 px-4 py-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="ChefHat" className="text-warm-orange" size={36} />
            <div>
              <h1 className="text-2xl font-bold text-warm-brown">Пицца Мастер</h1>
              <p className="text-sm text-warm-darkBrown/80">Кулинарная школа</p>
            </div>
          </div>
          <Button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-warm-orange hover:bg-warm-brown text-white font-semibold px-6 py-3"
          >
            Записаться сейчас
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-warm-cream via-warm-cream/90 to-warm-orange/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block bg-warm-orange/20 text-warm-brown font-semibold px-4 py-2 rounded-full text-sm">
                  🍕 Мастер-класс по пицце
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-warm-brown leading-tight">
                  Научитесь готовить 
                  <span className="text-warm-orange block">идеальную пиццу</span>
                </h1>
                <p className="text-xl text-warm-darkBrown leading-relaxed">
                  Откройте секреты итальянской кухни! Присоединяйтесь к нашему мастер-классу 
                  и создайте свою первую авторскую пиццу под руководством профессионального шеф-повара.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-warm-orange hover:bg-warm-brown text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Забронировать место
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-warm-orange text-warm-brown hover:bg-warm-orange hover:text-white px-8 py-4 text-lg"
                >
                  Узнать программу
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Icon name="Clock" className="text-warm-orange" size={24} />
                  </div>
                  <p className="text-sm text-warm-darkBrown/80">Продолжительность</p>
                  <p className="font-semibold text-warm-brown">3 часа</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Icon name="Users" className="text-warm-orange" size={24} />
                  </div>
                  <p className="text-sm text-warm-darkBrown/80">Участников</p>
                  <p className="font-semibold text-warm-brown">До 8 человек</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Icon name="Star" className="text-warm-orange" size={24} />
                  </div>
                  <p className="text-sm text-warm-darkBrown/80">Рейтинг</p>
                  <p className="font-semibold text-warm-brown">4.9/5</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Icon name="Award" className="text-warm-orange" size={24} />
                  </div>
                  <p className="text-sm text-warm-darkBrown/80">Сертификат</p>
                  <p className="font-semibold text-warm-brown">Включен</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/ff6d47b1-28c4-423f-a0ec-7bbdedabab63.jpg" 
                  alt="Шеф-повар готовит пиццу" 
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-lg z-20">
                <div className="text-center">
                  <p className="text-warm-brown font-semibold mb-1">Следующий класс</p>
                  <p className="text-warm-orange font-bold text-lg">28 января</p>
                  <p className="text-warm-darkBrown text-sm">18:00 - 21:00</p>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-warm-orange text-white p-4 rounded-full shadow-lg z-20">
                <Icon name="ChefHat" size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Почему выбирают нас */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-warm-brown mb-4">
              Почему выбирают наш мастер-класс?
            </h2>
            <p className="text-xl text-warm-darkBrown max-w-2xl mx-auto">
              Мы создали уникальную программу для всех, кто хочет освоить искусство приготовления пиццы
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-warm-orange/20 hover:shadow-lg transition-shadow bg-warm-cream/30">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-warm-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-warm-orange" size={32} />
                </div>
                <CardTitle className="text-warm-brown">Опытный шеф-повар</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-warm-darkBrown">
                  Учитесь у профессионала с 15-летним опытом работы в итальянских ресторанах
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-warm-orange/20 hover:shadow-lg transition-shadow bg-warm-cream/30">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-warm-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" className="text-warm-orange" size={32} />
                </div>
                <CardTitle className="text-warm-brown">Домашняя атмосфера</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-warm-darkBrown">
                  Уютная кухня-студия, где каждый чувствует себя как дома
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-warm-orange/20 hover:shadow-lg transition-shadow bg-warm-cream/30">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-warm-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gift" className="text-warm-orange" size={32} />
                </div>
                <CardTitle className="text-warm-brown">Всё включено</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-warm-darkBrown">
                  Ингредиенты, напитки, рецепты и сертификат - всё в стоимости
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* О шеф-поваре */}
      <section className="py-20 px-4 bg-warm-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-warm-brown">Познакомьтесь с мастером</h2>
                <h3 className="text-3xl text-warm-orange font-semibold">Антонио Марсело</h3>
                <p className="text-lg text-warm-darkBrown leading-relaxed">
                  Родился в семье пекарей в Неаполе. Более 15 лет изучал традиции итальянской кухни, 
                  работал в лучших ресторанах Италии и получил сертификат мастера по приготовлению 
                  неаполитанской пиццы.
                </p>
                <p className="text-lg text-warm-darkBrown leading-relaxed">
                  Теперь в Москве Антонио делится своими знаниями и помогает людям открыть для себя 
                  настоящий вкус Италии.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Icon name="Award" className="text-warm-orange mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-warm-brown">Сертификат AVPN</h4>
                    <p className="text-warm-darkBrown">Associazione Verace Pizza Napoletana</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Trophy" className="text-warm-orange mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-warm-brown">Победитель конкурса</h4>
                    <p className="text-warm-darkBrown">"Лучшая пицца Москвы 2024"</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="BookOpen" className="text-warm-orange mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-warm-brown">Автор книги</h4>
                    <p className="text-warm-darkBrown">"Неаполитанская пицца: традиции и секреты"</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-warm-orange/10 p-8 rounded-2xl">
                <blockquote className="text-warm-brown italic text-xl leading-relaxed">
                  "Пицца - это не просто блюдо, это традиция, которая объединяет семьи и друзей. 
                  Каждый кусочек должен рассказывать историю о любви к еде и уважении к продуктам."
                </blockquote>
                <div className="mt-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-warm-orange rounded-full flex items-center justify-center">
                    <Icon name="Quote" className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-warm-orange font-bold">Антонио Марсело</p>
                    <p className="text-warm-darkBrown text-sm">Шеф-повар, основатель школы</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Программа мастер-класса */}
      <section id="program" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-warm-brown mb-4">
              Программа мастер-класса
            </h2>
            <p className="text-xl text-warm-darkBrown max-w-2xl mx-auto">
              Пошаговое обучение от подготовки ингредиентов до дегустации готовой пиццы
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-warm-cream border-warm-orange/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-warm-brown flex items-center text-xl">
                  <Icon name="Clock" className="text-warm-orange mr-3" size={24} />
                  Первый час: Основы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-warm-orange rounded-full mt-2"></div>
                  <span className="text-warm-darkBrown">Знакомство с ингредиентами и их качеством</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-warm-orange rounded-full mt-2"></div>
                  <span className="text-warm-darkBrown">Приготовление правильного теста</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-warm-orange rounded-full mt-2"></div>
                  <span className="text-warm-darkBrown">Секреты идеальной эластичности</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-warm-orange rounded-full mt-2"></div>
                  <span className="text-warm-darkBrown">Техника замешивания и время созревания</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-warm-cream border-warm-orange/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-warm-brown flex items-center text-xl">
                  <Icon name="Clock" className="text-warm-orange mr-3" size={24} />
                  Второй час: Подготовка
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-warm-orange rounded-full mt-2"></div>
                  <span className="text-warm-darkBrown">Приготовление томатного соуса</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-warm-orange rounded-full mt-2"></div>
                  <span className="text-warm-darkBrown">Правильное раскатывание теста</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-warm-orange rounded-full mt-2"></div>
                  <span className="text-warm-darkBrown">Выбор и подготовка топпингов</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-warm-orange rounded-full mt-2"></div>
                  <span className="text-warm-darkBrown">Секреты равномерного распределения</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-warm-cream border-warm-orange/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-warm-brown flex items-center text-xl">
                  <Icon name="Clock" className="text-warm-orange mr-3" size={24} />
                  Третий час: Мастерство
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-warm-orange rounded-full mt-2"></div>
                  <span className="text-warm-darkBrown">Сборка и оформление пиццы</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-warm-orange rounded-full mt-2"></div>
                  <span className="text-warm-darkBrown">Выпечка в профессиональной печи</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-warm-orange rounded-full mt-2"></div>
                  <span className="text-warm-darkBrown">Дегустация и оценка результата</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-warm-orange rounded-full mt-2"></div>
                  <span className="text-warm-darkBrown">Советы для домашнего приготовления</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-warm-orange text-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-white flex items-center text-xl">
                  <Icon name="Gift" className="text-white mr-3" size={24} />
                  Бонусы и подарки
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span className="text-white">Книга рецептов от шеф-повара</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span className="text-white">Именной сертификат участника</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span className="text-white">Профессиональная фотосессия</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span className="text-white">Фирменный фартук в подарок</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section className="py-20 px-4 bg-warm-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-warm-brown mb-4">
              Атмосфера наших мастер-классов
            </h2>
            <p className="text-xl text-warm-darkBrown max-w-2xl mx-auto">
              Посмотрите, как проходят наши занятия и какие результаты получают участники
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img 
                src="/img/fcbe7b4f-d3df-44ab-b0b7-947bf1719f75.jpg" 
                alt="Готовая пицца" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-warm-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Результат мастер-класса</span>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img 
                src="/img/e56837bc-b674-48ec-879b-420d5419830d.jpg" 
                alt="Процесс обучения" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-warm-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Процесс обучения</span>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img 
                src="/img/ff6d47b1-28c4-423f-a0ec-7bbdedabab63.jpg" 
                alt="Шеф-повар за работой" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-warm-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Мастер показывает технику</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Форма записи */}
      <section id="booking" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-warm-brown mb-4">
              Запишитесь на мастер-класс
            </h2>
            <p className="text-xl text-warm-darkBrown max-w-2xl mx-auto">
              Места ограничены! Не упустите возможность научиться готовить настоящую итальянскую пиццу
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="bg-warm-orange text-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">Стоимость: 5 500 ₽</CardTitle>
                  <CardDescription className="text-white/90 text-lg">
                    Всё включено: ингредиенты, напитки, рецепты, сертификат
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-warm-brown">Что входит в стоимость:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Check" className="text-warm-orange mt-1" size={20} />
                    <span className="text-warm-darkBrown">Все ингредиенты премиум-качества</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Check" className="text-warm-orange mt-1" size={20} />
                    <span className="text-warm-darkBrown">Напитки и лёгкие закуски</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Check" className="text-warm-orange mt-1" size={20} />
                    <span className="text-warm-darkBrown">Книга рецептов с авторскими секретами</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Check" className="text-warm-orange mt-1" size={20} />
                    <span className="text-warm-darkBrown">Именной сертификат участника</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Check" className="text-warm-orange mt-1" size={20} />
                    <span className="text-warm-darkBrown">Фирменный фартук в подарок</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Check" className="text-warm-orange mt-1" size={20} />
                    <span className="text-warm-darkBrown">Фотосессия с готовой пиццей</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-warm-cream border-warm-orange/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-warm-brown text-center text-xl">
                  Форма записи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-warm-brown font-semibold">
                        Ваше имя *
                      </Label>
                      <Input 
                        id="name"
                        required
                        placeholder="Введите ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="border-warm-orange/30 focus:border-warm-orange"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-warm-brown font-semibold">
                        Телефон *
                      </Label>
                      <Input 
                        id="phone"
                        required
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="border-warm-orange/30 focus:border-warm-orange"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-warm-brown font-semibold">
                      Email *
                    </Label>
                    <Input 
                      id="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="border-warm-orange/30 focus:border-warm-orange"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-warm-brown font-semibold">
                      Выберите дату *
                    </Label>
                    <select 
                      id="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full p-3 border border-warm-orange/30 rounded-md focus:border-warm-orange bg-white"
                    >
                      <option value="">Выберите дату</option>
                      <option value="2025-01-28">28 января 2025, 18:00-21:00</option>
                      <option value="2025-02-04">4 февраля 2025, 18:00-21:00</option>
                      <option value="2025-02-11">11 февраля 2025, 18:00-21:00</option>
                      <option value="2025-02-18">18 февраля 2025, 18:00-21:00</option>
                      <option value="2025-02-25">25 февраля 2025, 18:00-21:00</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="comment" className="text-warm-brown font-semibold">
                      Комментарий
                    </Label>
                    <Textarea 
                      id="comment"
                      placeholder="Особые пожелания, диетические ограничения или вопросы..."
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                      className="border-warm-orange/30 focus:border-warm-orange"
                      rows={3}
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-warm-orange hover:bg-warm-brown text-white py-4 text-lg font-semibold"
                  >
                    Забронировать место за 5 500 ₽
                  </Button>
                  
                  <p className="text-sm text-warm-darkBrown text-center">
                    * После отправки формы наш администратор свяжется с вами в течение 15 минут для подтверждения записи
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-brown text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="ChefHat" className="text-warm-orange" size={32} />
                <div>
                  <span className="text-xl font-bold">Пицца Мастер</span>
                  <p className="text-sm text-warm-cream">Кулинарная школа</p>
                </div>
              </div>
              <p className="text-warm-cream">
                Мы учим готовить настоящую итальянскую пиццу в уютной атмосфере домашней кухни
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Контакты</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={18} className="text-warm-orange" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={18} className="text-warm-orange" />
                  <span>info@pizzamaster.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={18} className="text-warm-orange" />
                  <span>ул. Итальянская, 42</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Время работы</h4>
              <div className="space-y-2 text-warm-cream">
                <p>Пн-Пт: 10:00 - 22:00</p>
                <p>Сб-Вс: 11:00 - 23:00</p>
                <p className="text-warm-orange font-semibold">Мастер-классы: 18:00 - 21:00</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="cursor-pointer hover:text-warm-orange transition-colors" />
                <Icon name="Facebook" size={24} className="cursor-pointer hover:text-warm-orange transition-colors" />
                <Icon name="Youtube" size={24} className="cursor-pointer hover:text-warm-orange transition-colors" />
              </div>
              <p className="text-warm-cream text-sm">
                Подписывайтесь на наши соцсети для получения новых рецептов и анонсов мастер-классов
              </p>
            </div>
          </div>
          
          <div className="border-t border-warm-orange/20 mt-12 pt-8 text-center">
            <p className="text-warm-cream">
              &copy; 2025 Пицца Мастер. Все права защищены. 
              <span className="text-warm-orange"> Сделано с ❤️ для любителей итальянской кухни</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}