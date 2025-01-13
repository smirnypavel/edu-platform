// src/app/page.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/layouts/header";
import {
  Code,
  Brain,
  Target,
  MessageSquare,
  Star,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Header />

      {/* Hero секция */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-accent/20 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary mb-6 text-sm font-medium">
                Старт нового потока 15 февраля
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Современное IT образование с поддержкой AI
              </h1>
              <p className="text-xl mb-8 text-foreground/80">
                Интерактивная платформа с персонализированным обучением,
                автоматической проверкой кода и AI-ассистентом. Начните свой
                путь в IT с экспертной поддержкой.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses">
                  <Button size="lg" className="w-full sm:w-auto">
                    Начать обучение
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Попробовать демо
                  </Button>
                </Link>
              </div>
            </div>
            {/* Анимированная иллюстрация */}
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
              <div className="absolute h-full w-full bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl animate-pulse" />
              <div className="relative">
                {/* Здесь можно добавить SVG иллюстрацию */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-12 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Особенности платформы */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Инновационная платформа обучения
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Наша платформа объединяет современные технологии и методики обучения
            для максимальной эффективности
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-accent hover:border-primary/50 
                transition-colors group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-возможности */}
      <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            AI-powered обучение
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Искусственный интеллект помогает на каждом этапе вашего обучения
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-accent hover:bg-accent/5 
                transition-colors relative group"
              >
                <div
                  className="absolute top-4 right-4 text-primary opacity-0 group-hover:opacity-100 
                transition-opacity"
                >
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm text-foreground/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Пример интерактивного редактора */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Интерактивный редактор кода
              </h2>
              <ul className="space-y-4">
                {codeEditorFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">{feature.title}</h3>
                      <p className="text-sm text-foreground/70">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-accent bg-background p-4">
              {/* Здесь можно добавить демо-версию редактора или его изображение */}
              <div className="aspect-video bg-accent/10 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Путь обучения */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Ваш путь в IT</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Структурированный подход к обучению с поддержкой на каждом этапе
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {learningPath.map((step, index) => (
              <div
                key={index}
                className="relative p-6 rounded-xl bg-background border border-accent"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center 
                  text-primary font-bold"
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>
                <p className="text-sm text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Отзывы выпускников
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-accent"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/50" />
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-foreground/70">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-foreground/70">{testimonial.text}</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готовы начать свой путь в IT?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам студентов, которые уже изменили свою жизнь
            с нашей помощью
          </p>
          <Link href="/register">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/90"
            >
              Начать бесплатно
            </Button>
          </Link>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-accent/20 border-t border-accent">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">О нас</h3>
              <p className="text-sm text-foreground/70">
                Мы помогаем людям освоить современные технологии и найти работу
                мечты.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Курсы</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/courses/programming"
                    className="text-sm hover:text-primary"
                  >
                    Программирование
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/design"
                    className="text-sm hover:text-primary"
                  >
                    Дизайн
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/management"
                    className="text-sm hover:text-primary"
                  >
                    Управление проектами
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="text-sm hover:text-primary">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm hover:text-primary">
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-sm hover:text-primary">
                    Помощь
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="text-sm">Email: info@eduportal.com</li>
                <li className="text-sm">Тел: +3 (999) 123-45-67</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-accent text-center text-sm text-foreground/70">
            © 2024 EduPortal. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}

const stats = [
  { value: "500+", label: "Интерактивных уроков" },
  { value: "50k+", label: "Активных студентов" },
  { value: "98%", label: "Успешных выпускников" },
  { value: "24/7", label: "AI поддержка" },
];

const features = [
  {
    title: "Интерактивное обучение",
    description:
      "Практические задания с автоматической проверкой кода и мгновенной обратной связью",
    icon: Code,
  },
  {
    title: "AI-ассистент",
    description:
      "Персональный помощник, который адаптирует материал под ваш уровень и отвечает на вопросы",
    icon: Brain,
  },
  {
    title: "Гибкая система",
    description:
      "Учитесь в своем темпе с автоматической адаптацией сложности материала",
    icon: Target,
  },
];

const aiFeatures = [
  {
    title: "Умная проверка кода",
    description:
      "AI анализирует ваш код и предлагает улучшения в реальном времени",
    icon: Code,
  },
  {
    title: "Персонализированные тесты",
    description: "Автоматическая генерация тестов на основе вашего прогресса",
    icon: Brain,
  },
  {
    title: "Адаптивная сложность",
    description: "Система подстраивается под ваш уровень знаний",
    icon: Target,
  },
  {
    title: "Code Review",
    description:
      "Получайте профессиональные рекомендации от AI по улучшению кода",
    icon: MessageSquare,
  },
];

const codeEditorFeatures = [
  {
    title: "Множество языков программирования",
    description: "Поддержка всех популярных языков с подсветкой синтаксиса",
  },
  {
    title: "Автодополнение кода",
    description:
      "Интеллектуальные подсказки и автозаполнение на основе контекста",
  },
  {
    title: "Проверка в реальном времени",
    description: "Мгновенная обратная связь и подсветка ошибок",
  },
  {
    title: "Интеграция с AI",
    description: "Умные подсказки и рекомендации по улучшению кода",
  },
];

const learningPath = [
  {
    title: "Основы",
    description:
      "Изучите фундаментальные концепции с помощью интерактивных уроков и практических заданий",
  },
  {
    title: "Практика",
    description:
      "Работайте над реальными проектами с поддержкой AI-ассистента и код-ревью",
  },
  {
    title: "Продвинутый уровень",
    description:
      "Углубите свои знания и подготовьтесь к работе над сложными проектами",
  },
];

const testimonials = [
  {
    name: "Александр Петров",
    position: "Frontend Developer в Yota-X",
    text: "Благодаря платформе я смог быстро освоить современный стек технологий и найти работу мечты. AI-ассистент и система практических заданий - это именно то, чего мне не хватало в других курсах.",
  },
  {
    name: "Мария Иванова",
    position: "Full-stack разработчик",
    text: "Удобная система обучения, которая подстраивается под тебя. Особенно понравилась возможность получать мгновенную обратную связь от AI по моему коду.",
  },
  {
    name: "Дмитрий Сидоров",
    position: "Python Developer в SoftSerf",
    text: "Отличная платформа для изучения программирования. AI-ассистент помогает разобраться в сложных темах, а практические задания максимально приближены к реальным задачам.",
  },
];
