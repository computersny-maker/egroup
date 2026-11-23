/**
 * Contenido editable del sitio.
 * Un administrador puede modificar fácilmente estos datos sin tocar los componentes.
 */

export const contact = {
  phones: ['718-424-6945', '929-235-0596', '347-891-2378'],
  foundedYear: 2008,
}

export type GedSubject = {
  id: string
  name: string
  description: string
}

export const gedSubjects: GedSubject[] = [
  {
    id: 'matematicas',
    name: 'Matemáticas',
    description:
      'Fortalece tus conocimientos y desarrolla las habilidades necesarias para resolver problemas matemáticos.',
  },
  {
    id: 'artes-lenguaje',
    name: 'Razonamiento a través de las Artes del Lenguaje',
    description:
      'Desarrolla comprensión de lectura, escritura y razonamiento.',
  },
  {
    id: 'ciencias',
    name: 'Ciencias',
    description:
      'Prepárate para comprender y analizar conceptos científicos.',
  },
  {
    id: 'estudios-sociales',
    name: 'Estudios Sociales',
    description:
      'Conoce historia, geografía, civismo y otros conceptos fundamentales.',
  },
]

export type ClassOffering = {
  id: string
  subject: string
  days: string
  time: string
  modality: string
  status: string
}

export const upcomingClasses: ClassOffering[] = [
  {
    id: 'estudios-sociales-lm',
    subject: 'Estudios Sociales',
    days: 'Lunes y miércoles',
    time: '7:00 PM – 9:45 PM',
    modality: 'Online',
    status: 'Cupos disponibles',
  },
  {
    id: 'matematicas-mj',
    subject: 'Matemáticas / Aritmética',
    days: 'Martes y jueves',
    time: '7:00 PM – 9:45 PM',
    modality: 'Online',
    status: 'Cupos disponibles',
  },
]

export type Testimonial = {
  quote: string
  name: string
  borough: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Soy madre de familia, y ésta es una gran oportunidad para lograr completar mi sueño y tener mi Diploma de Secundaria.',
    name: 'Esther Marquez',
    borough: 'Queens',
  },
  {
    quote:
      'Llegué a USA hace muy poco de la República Dominicana y me faltaron meses para terminar el colegio en mi país. Gracias a E-Group estoy tomando las clases de Estudios Sociales para conocer de la historia y geografía de Estados Unidos y dar el examen.',
    name: 'Yideirys Hernández',
    borough: 'Bronx',
  },
  {
    quote:
      'Pasé por varias escuelas, finalmente encontré instructores con el conocimiento y paciencia para enseñar.',
    name: 'Servando Claute',
    borough: 'Brooklyn',
  },
  {
    quote:
      'Es loable ver el compromiso de estos instructores con la comunidad y su afán por buscar el beneficio de la ciudadanía.',
    name: 'Pastor Henry García',
    borough: 'Queens',
  },
]

export type Faq = {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: '¿Qué es el GED?',
    answer:
      'El GED es un examen que permite obtener un diploma de equivalencia de la escuela secundaria. Es una alternativa reconocida para adultos que no completaron sus estudios y desean continuar su formación educativa o laboral.',
  },
  {
    question: '¿Las clases son completamente en español?',
    answer:
      'Sí. Nuestras clases de preparación se imparten en español para que puedas aprender con comodidad y aprovechar al máximo el apoyo de nuestros instructores.',
  },
  {
    question: '¿Las clases son virtuales?',
    answer:
      'Sí. Ofrecemos clases virtuales a través de Zoom, para que puedas estudiar desde donde estés.',
  },
  {
    question: '¿Cuántos estudiantes hay por clase?',
    answer:
      'Trabajamos con grupos pequeños de hasta doce estudiantes para brindar una atención más personalizada.',
  },
  {
    question: '¿Qué materias se ofrecen?',
    answer:
      'Ofrecemos preparación en Matemáticas, Razonamiento a través de las Artes del Lenguaje, Ciencias y Estudios Sociales.',
  },
  {
    question: '¿Cómo puedo registrarme?',
    answer:
      'Puedes completar el formulario de solicitud de información en este sitio o comunicarte directamente con nosotros por teléfono. Nuestro equipo te guiará en los siguientes pasos.',
  },
  {
    question: '¿Cuándo comienzan las próximas clases?',
    answer:
      'Los horarios y cursos disponibles pueden variar. Comunícate con E-Group para confirmar la información actual.',
  },
  {
    question: '¿Necesito experiencia previa?',
    answer:
      'No necesitas experiencia previa. Nuestros instructores te acompañarán desde el punto en el que te encuentres para ayudarte a alcanzar tu meta.',
  },
]

export type ProgressStep = {
  number: string
  title: string
}

export const progressSteps: ProgressStep[] = [
  { number: '01', title: 'Solicita información' },
  { number: '02', title: 'Elige tu clase' },
  { number: '03', title: 'Prepárate' },
  { number: '04', title: 'Presenta tu examen' },
  { number: '05', title: 'Alcanza tu meta' },
]

export const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#ged', label: 'GED' },
  { href: '#cursos', label: 'Cursos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
]
