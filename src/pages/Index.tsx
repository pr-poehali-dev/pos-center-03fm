import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'
import { useToast } from '@/hooks/use-toast'

const Index = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    })
    setFormData({ name: '', phone: '', company: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <Badge className="w-fit text-sm px-4 py-1.5 bg-accent/20 text-accent-foreground border-accent/30">
                Соответствует 54-ФЗ
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                POScenter-03ФМ
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                Компактное решение для современного бизнеса
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform" onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}>
                  Заказать консультацию
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-transform" onClick={() => document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' })}>
                  Характеристики
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 blur-3xl rounded-full" />
              <img 
                src="https://cdn.poehali.dev/projects/07ff2b81-e660-4140-8ac1-08d579c4402a/files/e3e77206-d475-40df-8fd8-5ff083bb8b97.jpg"
                alt="POScenter-03ФМ"
                className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 animate-fade-in">
            Ключевые преимущества
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "TrendingDown",
                title: "Низкая цена",
                description: "Самое доступное решение в линейке для малого бизнеса"
              },
              {
                icon: "Maximize2",
                title: "Компактность",
                description: "Минимальные габариты — идеально для ограниченного пространства"
              },
              {
                icon: "Wifi",
                title: "WiFi и Bluetooth",
                description: "Встроенные модули беспроводной связи для гибкого подключения"
              },
              {
                icon: "Shield",
                title: "54-ФЗ",
                description: "Полное соответствие требованиям законодательства РФ"
              },
              {
                icon: "Zap",
                title: "Простота обслуживания",
                description: "Лёгкий доступ к фискальному накопителю"
              },
              {
                icon: "Link",
                title: "Совместимость",
                description: "Работает с денежными ящиками любых производителей"
              }
            ].map((feature, idx) => (
              <Card 
                key={idx}
                className="p-8 hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur border-border/50 hover:border-primary/50 group animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-4 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name={feature.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="specs" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 animate-fade-in">
            Технические характеристики
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-card/80 backdrop-blur border-border/50 animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Icon name="Settings" className="text-primary" size={28} />
                Основные параметры
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex justify-between pb-3 border-b border-border/30">
                  <span>Ширина ленты</span>
                  <span className="font-medium text-foreground">57 мм</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-border/30">
                  <span>Диаметр рулона</span>
                  <span className="font-medium text-foreground">до 60 мм</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-border/30">
                  <span>Интерфейсы</span>
                  <span className="font-medium text-foreground">USB/RS232/LAN</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-border/30">
                  <span>Формат ФФД</span>
                  <span className="font-medium text-foreground">1.2</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/80 backdrop-blur border-border/50 animate-slide-in-right">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Icon name="Radio" className="text-accent" size={28} />
                Беспроводные модули
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex justify-between pb-3 border-b border-border/30">
                  <span>WiFi</span>
                  <span className="font-medium text-foreground flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={20} />
                    Встроенный
                  </span>
                </div>
                <div className="flex justify-between pb-3 border-b border-border/30">
                  <span>Bluetooth</span>
                  <span className="font-medium text-foreground flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={20} />
                    Встроенный
                  </span>
                </div>
                <div className="flex justify-between pb-3 border-b border-border/30">
                  <span>Протокол</span>
                  <span className="font-medium text-foreground">ШТРИХ-М</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-border/30">
                  <span>Денежный ящик</span>
                  <span className="font-medium text-foreground flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={20} />
                    Поддержка
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4 animate-fade-in">
            Для кого подходит
          </h2>
          <p className="text-center text-muted-foreground text-xl mb-16 max-w-3xl mx-auto">
            Идеальное решение для предприятий с небольшим потоком клиентов
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "Scissors", title: "Салоны красоты", desc: "Мастерские, барбершопы" },
              { icon: "ShoppingBag", title: "Минимаркеты", desc: "Бутики, цветочные" },
              { icon: "Coffee", title: "Кафе навынос", desc: "Напитки и еда" },
              { icon: "Package", title: "Пункты выдачи", desc: "СДЭК, Boxberry" }
            ].map((target, idx) => (
              <Card 
                key={idx}
                className="p-6 text-center hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur border-border/50 hover:border-accent/50 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Icon name={target.icon} size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{target.title}</h3>
                <p className="text-muted-foreground text-sm">{target.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-8 lg:p-12 bg-gradient-to-br from-card to-card/50 backdrop-blur border-border/50 animate-scale-in">
            <div className="text-center mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Получить консультацию
              </h2>
              <p className="text-muted-foreground text-lg">
                Оставьте заявку, и мы подберём оптимальное решение для вашего бизнеса
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Ваше имя</label>
                <Input 
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="h-12 text-lg"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Телефон</label>
                <Input 
                  type="tel"
                  placeholder="+7 (900) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="h-12 text-lg"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Название компании (необязательно)</label>
                <Input 
                  placeholder="ООО «Ромашка»"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="h-12 text-lg"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full text-lg h-14 hover:scale-105 transition-transform">
                Отправить заявку
                <Icon name="Send" className="ml-2" size={20} />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 bg-card/30 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p className="text-lg mb-2">POScenter-03ФМ — надёжное решение для вашего бизнеса</p>
            <p className="text-sm">Официальный дистрибьютор контрольно-кассовой техники</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
