import {
  BarChart3,
  Calendar,
  CheckCircle,
  ChevronDown,
  Clock,
  Database,
  Github,
  Play,
  Shield,
  Smartphone,
  Star,
  Timer,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// SEO Metadata
export const metadata: Metadata = {
  title: "ClinicAgenda - Sistema de Agendamento Clínico Moderno",
  description:
    "Solução completa para gerenciamento de agendamentos em clínicas e consultórios. Simplifique sua rotina com nossa plataforma moderna e intuitiva.",
  keywords: [
    "agendamento clínico",
    "gestão clínica",
    "sistema médico",
    "consultório",
    "NextJS",
    "TypeScript",
  ],
  authors: [{ name: "ClinicAgenda Team" }],
  openGraph: {
    title: "ClinicAgenda - Sistema de Agendamento Clínico",
    description:
      "Transforme o gerenciamento da sua clínica com nossa solução moderna",
    type: "website",
    locale: "pt_BR",
  },
};

export default function HomePage() {
  const features = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Agendamento Inteligente",
      description:
        "Sistema completo de agendamento com calendário intuitivo e gestão de horários",
      highlight: "IA Integrada",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Gestão de Pacientes",
      description:
        "Cadastro e acompanhamento completo do histórico de pacientes",
      highlight: "Histórico Completo",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Controle de Horários",
      description:
        "Definição de horários de funcionamento e disponibilidade dos profissionais",
      highlight: "Automático",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Confirmação Automática",
      description:
        "Sistema automatizado de confirmação e lembrete de consultas",
      highlight: "SMS & Email",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Interface Moderna",
      description:
        "Design responsivo e intuitivo para uma experiência excepcional",
      highlight: "UX Premium",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "100% Responsivo",
      description:
        "Acesse de qualquer dispositivo - desktop, tablet ou smartphone",
      highlight: "PWA Ready",
    },
  ];

  const technologies = [
    { name: "Next.js 15", description: "App Router", color: "bg-black" },
    { name: "TypeScript", description: "Type Safety", color: "bg-blue-600" },
    { name: "Tailwind CSS", description: "Styling", color: "bg-cyan-500" },
    { name: "shadcn/ui", description: "UI Components", color: "bg-zinc-900" },
    { name: "React Hook Form", description: "Forms", color: "bg-pink-500" },
    { name: "Zod", description: "Validation", color: "bg-blue-700" },
    {
      name: "BetterAuth",
      description: "Authentication",
      color: "bg-green-600",
    },
    { name: "PostgreSQL", description: "Database", color: "bg-blue-800" },
    { name: "Drizzle ORM", description: "Database ORM", color: "bg-green-500" },
    { name: "Dayjs", description: "Date Management", color: "bg-orange-500" },
    {
      name: "Next Safe Action",
      description: "Server Actions",
      color: "bg-purple-600",
    },
    {
      name: "React Number Format",
      description: "Input Masks",
      color: "bg-red-500",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Ana Silva",
      role: "Dermatologista",
      avatar: "/api/placeholder/40/40",
      content:
        "O ClinicAgenda revolucionou meu consultório. Reduziu em 70% o tempo gasto com agendamentos e meus pacientes adoram a praticidade.",
      rating: 5,
    },
    {
      name: "Dr. Carlos Santos",
      role: "Cardiologista",
      avatar: "/api/placeholder/40/40",
      content:
        "Interface intuitiva e funcionalidades completas. Minha equipe se adaptou rapidamente e nossa produtividade aumentou significativamente.",
      rating: 5,
    },
    {
      name: "Dra. Marina Costa",
      role: "Pediatra",
      avatar: "/api/placeholder/40/40",
      content:
        "Excelente sistema! Os lembretes automáticos reduziram drasticamente as faltas dos pacientes. Recomendo para todos os colegas.",
      rating: 5,
    },
  ];

  const stats = [
    {
      icon: <UserCheck className="h-8 w-8" />,
      value: "10,000+",
      label: "Agendamentos",
      description: "Processados mensalmente",
    },
    {
      icon: <Timer className="h-8 w-8" />,
      value: "85%",
      label: "Tempo Economizado",
      description: "Em tarefas administrativas",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "98%",
      label: "Satisfação",
      description: "Dos nossos usuários",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      value: "45%",
      label: "Aumento",
      description: "Na eficiência operacional",
    },
  ];

  const faqs = [
    {
      question: "Como funciona o sistema de agendamento?",
      answer:
        "O ClinicAgenda oferece um calendário intuitivo onde você pode definir horários disponíveis, gerenciar consultas e receber confirmações automáticas. Os pacientes podem agendar online através de um link personalizado.",
    },
    {
      question: "Como é feita a segurança dos dados?",
      answer:
        "Utilizamos criptografia de ponta a ponta, autenticação segura com BetterAuth e seguimos todas as normas da LGPD. Seus dados e de seus pacientes estão totalmente protegidos.",
    },
    {
      question: "Qual o custo do sistema?",
      answer:
        "Oferecemos planos flexíveis a partir de R$ 59/mês para consultórios pequenos, com escalabilidade para clínicas maiores.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 scroll-smooth">
      {/* Hero Section with Animation */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10" />

        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 px-4 py-2 animate-pulse">
              🚀 Sistema de Agendamento Clínico
            </Badge>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade-in-up delay-100">
            <span className="text-blue-600">Clinic</span>Agenda
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Uma solução completa e moderna para gerenciamento de agendamentos em
            clínicas e consultórios. Simplifique sua rotina, otimize seu tempo e
            ofereça a melhor experiência para seus pacientes.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Link href="/dashboard" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="px-8 group hover:scale-105 transition-all duration-300">
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Ver Demo
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="px-8 hover:scale-105 transition-all duration-300"
              asChild>
              <Link
                href="https://github.com/Kadockh/projeto-clinica-agendamentos"
                target="_blank">
                <Github className="mr-2 h-4 w-4" />
                Código Fonte
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section Enhanced */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Funcionalidades Principais
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Tudo que você precisa para gerenciar sua clínica de forma
              eficiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="relative">
                  <Badge
                    className="absolute top-2 right-2 text-xs"
                    variant="secondary">
                    {feature.highlight}
                  </Badge>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot/Demo Section */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Veja o Sistema em Ação
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Interface moderna e intuitiva que seus pacientes vão adorar
            </p>
          </div>

          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="calendar">Calendário</TabsTrigger>
              <TabsTrigger value="patients">Pacientes</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-4">
              <Card className="h-96 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="text-center text-white">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    Dashboard Completo
                  </h3>
                  <p className="text-blue-100">
                    Métricas em tempo real e insights valiosos
                  </p>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="calendar" className="space-y-4">
              <Card className="h-96 flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600">
                <div className="text-center text-white">
                  <Calendar className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    Calendário Inteligente
                  </h3>
                  <p className="text-green-100">
                    Agendamentos visuais e intuitivos
                  </p>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="patients" className="space-y-4">
              <Card className="h-96 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-600">
                <div className="text-center text-white">
                  <Users className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    Gestão de Pacientes
                  </h3>
                  <p className="text-orange-100">
                    Histórico completo e organizado
                  </p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              O que nossos usuários dizem
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Depoimentos reais de profissionais que transformaram suas clínicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section Enhanced */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Database className="h-6 w-6 text-blue-400" />
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Tecnologias Utilizadas
              </h2>
            </div>
            <p className="mt-4 text-lg text-gray-300">
              Stack moderna e robusta para máxima performance e escalabilidade
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 text-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <div
                      className={`w-3 h-3 rounded-full ${tech.color} mx-auto mb-3`}
                    />
                    <h3 className="font-semibold text-white">{tech.name}</h3>
                    <p className="text-sm text-gray-400">{tech.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiter Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 border-emerald-300">
              👨‍💻 Para Recrutadores & Tech Leaders
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Desenvolvedor Full Stack Junior
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Este projeto demonstra meu aprendizado em desenvolvimento web
              moderno, paixão por código limpo e potencial para crescer em
              soluções robustas e escaláveis. Busco oportunidades para evoluir e
              contribuir com equipes de alto nível.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Technical Excellence */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">
                    Competências Técnicas
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      React & Component Architecture
                    </span>
                    <Badge variant="secondary">Intermediário</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      TypeScript & Type Safety
                    </span>
                    <Badge variant="secondary">Intermediário</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Next.js 15 & Modern React
                    </span>
                    <Badge variant="secondary">Aprendendo</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Database & ORM (Drizzle)
                    </span>
                    <Badge variant="secondary">Básico</Badge>
                  </div>
                </div>
                <Separator />
                <div className="pt-2">
                  <p className="text-sm text-gray-600">
                    Focado em aprender boas práticas, código limpo e padrões
                    modernos de desenvolvimento.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Business Impact */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-emerald-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">
                    Potencial & Crescimento
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-emerald-50 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">
                      100%
                    </div>
                    <div className="text-xs text-emerald-700">Dedicação</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">5+</div>
                    <div className="text-xs text-blue-700">
                      Projetos Concluídos
                    </div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      24/7
                    </div>
                    <div className="text-xs text-purple-700">
                      Disponibilidade
                    </div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">
                      Rápido
                    </div>
                    <div className="text-xs text-orange-700">Aprendizado</div>
                  </div>
                </div>
                <Separator />
                <p className="text-sm text-gray-600 pt-2">
                  Proativo, curioso e sempre em busca de aprender tecnologias e
                  boas práticas para entregar valor.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Código de Qualidade
                </h3>
                <p className="text-sm text-gray-600">
                  Aprendendo a desenvolver sistemas limpos, seguros e bem
                  estruturados com foco em boas práticas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Trabalho em Equipe
                </h3>
                <p className="text-sm text-gray-600">
                  Colaborativo, receptivo a feedback e ansioso para aprender com
                  desenvolvedores mais experientes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Aprendizado Contínuo
                </h3>
                <p className="text-sm text-gray-600">
                  Sempre estudando novas tecnologias, metodologias ágeis e
                  práticas modernas de desenvolvimento.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tech Stack Showcase */}
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-gray-900 to-gray-800 text-white mb-16">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  Stack Tecnológico Atual
                </h3>
                <p className="text-gray-300">
                  Sempre atualizado com as tecnologias mais modernas e
                  demandadas pelo mercado
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  {
                    name: "React",
                    level: "Intermediário",
                    color: "bg-blue-500",
                  },
                  { name: "Next.js", level: "Aprendendo", color: "bg-black" },
                  {
                    name: "TypeScript",
                    level: "Intermediário",
                    color: "bg-blue-600",
                  },
                  { name: "Node.js", level: "Básico", color: "bg-green-600" },
                  {
                    name: "PostgreSQL",
                    level: "Básico",
                    color: "bg-blue-800",
                  },
                  {
                    name: "Tailwind",
                    level: "Intermediário",
                    color: "bg-cyan-500",
                  },
                ].map((tech, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`w-12 h-12 ${tech.color} rounded-lg mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg`}>
                      {tech.name.charAt(0)}
                    </div>
                    <div className="text-sm font-medium">{tech.name}</div>
                    <div className="text-xs text-gray-400">{tech.level}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA for Recruiters */}
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center">
            <CardContent className="p-12">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-4">
                  Pronto para Começar!
                </h3>
                <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
                  Busco oportunidades para crescer como desenvolvedor e
                  contribuir com projetos incríveis ao lado de profissionais
                  experientes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-8 hover:scale-105 transition-all duration-300"
                  asChild>
                  <Link
                    href="https://www.linkedin.com/in/andrey-rocha-kadoch-63907b235/"
                    target="_blank">
                    <Users className="mr-2 h-4 w-4" />
                    Ver Perfil LinkedIn
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 border-white text-white hover:bg-white hover:text-emerald-600 hover:scale-105 transition-all duration-300"
                  asChild>
                  <Link href="mailto:andreykadoch20@gmail.com">
                    <Calendar className="mr-2 h-4 w-4" />
                    Agendar Conversa
                  </Link>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-emerald-200">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  Primeira oportunidade
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  Remoto ou presencial
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  Crescimento rápido
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Esclareça suas dúvidas sobre o ClinicAgenda
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="cursor-pointer" role="button">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-left">
                      {faq.question}
                    </CardTitle>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Enhanced */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]" />
            <CardContent className="p-12 text-center relative">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Shield className="h-8 w-8 animate-pulse" />
                <h2 className="text-3xl font-bold">
                  Pronto para Revolucionar sua Clínica?
                </h2>
              </div>

              <p className="text-xl mb-8 text-blue-100">
                Experimente o ClinicAgenda e descubra como simplificar o
                gerenciamento da sua clínica pode transformar sua rotina de
                trabalho.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <Link
                  href="/dashboard"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="px-8 group hover:scale-105 transition-all duration-300">
                    <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Começar Agora
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300"
                  asChild>
                  <Link
                    href="https://github.com/Kadockh/projeto-clinica-agendamentos"
                    target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    Ver Código
                  </Link>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-blue-200">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  Suporte 24/7
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  Cancele quando quiser
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer Enhanced */}
      <footer className="py-12 px-6 lg:px-8 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-blue-400">Clinic</span>Agenda
              </h3>
              <p className="text-gray-400">
                Transformando a gestão de clínicas com tecnologia moderna e
                intuitiva.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Funcionalidades
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Preços
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Demo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentação
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tutoriais
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-gray-700 mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400">
              © 2025 Andrey Kadoch. Desenvolvido com ❤️ usando as melhores
              tecnologias do mercado.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link
                href="https://github.com/Kadockh/projeto-clinica-agendamentos/"
                className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Badge
                variant="outline"
                className="border-green-500 text-green-500">
                Online
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
