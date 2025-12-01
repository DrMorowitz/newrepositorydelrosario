"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Award, Users, MapPin, GraduationCap, Globe2, Heart, Stethoscope, BookOpen, Trophy, Calendar, Clock, Star } from 'lucide-react';

export default function AboutPage() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Dr. Javier Antonio del Rosario Gibbs - Especialista en Urología",
      subtitle: "Cirujano Urólogo con Excelencia Académica Comprobada",
      timeline: {
        title: "Mi Trayectoria",
        events: [
          { year: "1993", title: "Doctor en Medicina", desc: "I Puesto de Honor - Universidad de Panamá", icon: "Trophy" },
          { year: "1996-2000", title: "Especialización Urología", desc: "Hospital Dr. Arnulfo Arias Madrid", icon: "GraduationCap" },
          { year: "1999-2000", title: "Jefe de Residentes", desc: "Servicio de Urología", icon: "Award" },
          { year: "2000-Presente", title: "Urólogo y Docente", desc: "Hospital y Universidad de Panamá", icon: "Stethoscope" }
        ]
      },
      philosophy: {
        title: "Mi Filosofía",
        content: "Cada consulta es una oportunidad para educar y acompañar al paciente con tratamientos basados en evidencia científica.",
      },
      achievements: {
        title: "Logros Destacados",
        items: [
          { icon: "Trophy", title: "I Puesto de Honor", desc: "Universidad de Panamá 1993" },
          { icon: "BookOpen", title: "15+ Publicaciones", desc: "Investigación internacional" },
          { icon: "Globe2", title: "50+ Congresos", desc: "Participación mundial" },
          { icon: "Award", title: "Jefe de Residentes", desc: "Servicio Urología 1999-2000" }
        ]
      },
      stats: {
        title: "Experiencia y Logros",
        items: [
          { number: "24+", label: "Años de Experiencia" },
          { number: "15+", label: "Publicaciones Científicas" },
          { number: "50+", label: "Congresos Internacionales" },
          { number: "2000+", label: "Pacientes Atendidos" },
        ],
      },
      specialties: {
        title: "Áreas de Especialización",
        items: [
          "Cirugía Endoscópica Urológica Avanzada",
          "Tratamiento de Cáncer de Próstata y Urológico",
          "Litotripsia Extracorpórea por Ondas de Choque",
          "Cirugía Laparoscópica y Percutánea",
          "Incontinencia Urinaria y Disfunción Eréctil",
          "Urodinamia y Diagnóstico Urológico",
          "Investigación en Oncología Urológica",
          "Técnicas con Láser Holmium y Greenlight",
        ],
      },
      education: {
        title: "Formación Académica",
        items: [
          "Doctor en Medicina - Universidad de Panamá (1987-1993) - I Puesto de Honor",
          "Especialidad en Urología - Complejo Hospitalario Dr. Arnulfo Arias Madrid (1996-2000)",
          "Jefe de Médicos Residentes - Servicio de Urología (1999-2000)",
          "Internado - Complejo Hospitalario Dr. Arnulfo Arias Madrid y Manuel Amador Guerrero",
        ],
      },
      societies: {
        title: "Afiliaciones Profesionales",
        items: [
          { name: "American Urological Association (AUA)", role: "Miembro Electivo", icon: "Globe2" },
          { name: "Confederación Americana de Urología", role: "Miembro Activo", icon: "Award" },
          { name: "Sociedad Panameña de Urología", role: "Junta Directiva 2002-presente", icon: "Users" },
          { name: "Asociación Urológica de Centroamérica y el Caribe (AUCA)", role: "Miembro", icon: "MapPin" }
        ]
      },
      research: {
        title: "Investigación y Publicaciones Destacadas",
        items: [
          { title: "Estudio Fase 3 - Cáncer de Próstata", desc: "Tasquinimod en cáncer metastásico resistente a castración (2011-2015)", icon: "BookOpen" },
          { title: "Manejo Actual del Trauma", desc: "Coautor - Capítulo 30: Trauma Vesical (2009)", icon: "Award" },
          { title: "Archivos Españoles de Urología", desc: "Dolor Pélvico Crónico - Cistouretropexia (2006)", icon: "Globe2" },
          { title: "Revista Confederación Americana", desc: "Remanente del Conducto Müller - Caso clínico (1999)", icon: "Stethoscope" }
        ]
      },
      experience: {
        title: "Experiencia Clínica Actual",
        positions: [
          { title: "Urólogo Principal", place: "Hospital Dr. Arnulfo Arias Madrid", years: "2000 - Presente", desc: "Servicio de Urología" },
          { title: "Asistente Clínico", place: "Universidad de Panamá", years: "2000 - Presente", desc: "Cátedra de Urología" },
          { title: "Profesor Asistente", place: "Universidad de Panamá", years: "2002 - Presente", desc: "Diplomado de Urgencias" },
          { title: "Ex-Jefe de Sección", place: "ANCEC (Asociación Nacional Contra el Cáncer)", years: "2000 - 2011", desc: "Sección de Urología" }
        ]
      },
      conferences: {
        title: "Participación Internacional",
        subtitle: "Presencia activa en congresos médicos de prestigio mundial",
        highlights: [
          { event: "American Urological Association", years: "2025, 2023, 2018, 2017, 2015, 2013, 2009, 2006, 2004, 2003, 2002, 2001, 1999", icon: "Globe2" },
          { event: "European Association of Urology", years: "2012 - París", icon: "Award" },
          { event: "Confederación Americana de Urología", years: "2015, 2013 - New Orleans, San Diego", icon: "Users" },
          { event: "Congresos Nacionales de Urología", years: "17 participaciones (2021-2024)", icon: "MapPin" }
        ]
      },
      patientCare: {
        title: "Enfoque de Atención al Paciente",
        principles: [
          { title: "Educación Médica", desc: "Explicaciones claras como clase universitaria", icon: "BookOpen" },
          { title: "Seguimiento Integral", desc: "Acompañamiento más allá de la consulta inicial", icon: "Heart" },
          { title: "Evidencia Científica", desc: "Tratamientos basados en investigación actualizada", icon: "Award" },
          { title: "Experiencia Comprobada", desc: "24 años de práctica especializada", icon: "Clock" }
        ]
      },
      cta: "Conoce mis servicios",
    },
    en: {
      title: "Dr. Javier Antonio del Rosario Gibbs - Urology Specialist",
      subtitle: "Urologist Surgeon with Proven Academic Excellence",
      timeline: {
        title: "My Journey",
        events: [
          { year: "1993", title: "Doctor of Medicine", desc: "First Place Honors - University of Panama", icon: "Trophy" },
          { year: "1996-2000", title: "Urology Specialization", desc: "Dr. Arnulfo Arias Madrid Hospital", icon: "GraduationCap" },
          { year: "1999-2000", title: "Chief of Residents", desc: "Urology Service", icon: "Award" },
          { year: "2000-Present", title: "Urologist & Professor", desc: "Hospital and University of Panama", icon: "Stethoscope" }
        ]
      },
      philosophy: {
        title: "My Philosophy",
        content: "Each consultation is an opportunity to educate and accompany patients with evidence-based treatments.",
      },
      achievements: {
        title: "Key Achievements",
        items: [
          { icon: "Trophy", title: "First Place Honors", desc: "University of Panama 1993" },
          { icon: "BookOpen", title: "15+ Publications", desc: "International research" },
          { icon: "Globe2", title: "50+ Conferences", desc: "Global participation" },
          { icon: "Award", title: "Chief of Residents", desc: "Urology Service 1999-2000" }
        ]
      },
      stats: {
        title: "Experience and Achievements",
        items: [
          { number: "24+", label: "Years of Experience" },
          { number: "15+", label: "Scientific Publications" },
          { number: "50+", label: "International Conferences" },
          { number: "2000+", label: "Patients Treated" },
        ],
      },
      specialties: {
        title: "Specialization Areas",
        items: [
          "Advanced Endoscopic Urological Surgery",
          "Prostate and Urological Cancer Treatment",
          "Extracorporeal Shock Wave Lithotripsy",
          "Laparoscopic and Percutaneous Surgery",
          "Urinary Incontinence and Erectile Dysfunction",
          "Urodynamics and Urological Diagnosis",
          "Urological Oncology Research",
          "Holmium and Greenlight Laser Techniques",
        ],
      },
      education: {
        title: "Academic Background",
        items: [
          "Doctor of Medicine - University of Panama (1987-1993) - First Place Honors",
          "Urology Specialization - Dr. Arnulfo Arias Madrid Hospital Complex (1996-2000)",
          "Chief of Medical Residents - Urology Service (1999-2000)",
          "Internship - Dr. Arnulfo Arias Madrid and Manuel Amador Guerrero Hospital Complexes",
        ],
      },
      societies: {
        title: "Professional Affiliations",
        items: [
          { name: "American Urological Association (AUA)", role: "Elective Member", icon: "Globe2" },
          { name: "Confederación Americana de Urología", role: "Active Member", icon: "Award" },
          { name: "Panamanian Urology Society", role: "Board Member 2002-present", icon: "Users" },
          { name: "Central America and Caribbean Urological Association (AUCA)", role: "Member", icon: "MapPin" }
        ]
      },
      research: {
        title: "Research & Notable Publications",
        items: [
          { title: "Phase 3 Study - Prostate Cancer", desc: "Tasquinimod in castration-resistant metastatic cancer (2011-2015)", icon: "BookOpen" },
          { title: "Current Trauma Management", desc: "Co-author - Chapter 30: Bladder Trauma (2009)", icon: "Award" },
          { title: "Spanish Archives of Urology", desc: "Chronic Pelvic Pain - Cystourethropexy (2006)", icon: "Globe2" },
          { title: "American Confederation Journal", desc: "Müller Duct Remnant - Clinical case (1999)", icon: "Stethoscope" }
        ]
      },
      experience: {
        title: "Current Clinical Experience",
        positions: [
          { title: "Principal Urologist", place: "Dr. Arnulfo Arias Madrid Hospital", years: "2000 - Present", desc: "Urology Service" },
          { title: "Clinical Assistant", place: "University of Panama", years: "2000 - Present", desc: "Urology Department" },
          { title: "Assistant Professor", place: "University of Panama", years: "2002 - Present", desc: "Emergency Diploma" },
          { title: "Former Section Chief", place: "ANCEC (National Cancer Association)", years: "2000 - 2011", desc: "Urology Section" }
        ]
      },
      conferences: {
        title: "International Participation",
        subtitle: "Active presence at prestigious worldwide medical conferences",
        highlights: [
          { event: "American Urological Association", years: "2025, 2023, 2018, 2017, 2015, 2013, 2009, 2006, 2004, 2003, 2002, 2001, 1999", icon: "Globe2" },
          { event: "European Association of Urology", years: "2012 - Paris", icon: "Award" },
          { event: "American Confederation of Urology", years: "2015, 2013 - New Orleans, San Diego", icon: "Users" },
          { event: "National Urology Conferences", years: "17 participations (2021-2024)", icon: "MapPin" }
        ]
      },
      patientCare: {
        title: "Patient Care Approach",
        principles: [
          { title: "Medical Education", desc: "Clear explanations like university classes", icon: "BookOpen" },
          { title: "Comprehensive Follow-up", desc: "Support beyond initial consultation", icon: "Heart" },
          { title: "Scientific Evidence", desc: "Treatments based on updated research", icon: "Award" },
          { title: "Proven Experience", desc: "24 years of specialized practice", icon: "Clock" }
        ]
      },
      cta: "Learn about my services",
    },
  };

  const currentContent = content[language];

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-blue-50/50 to-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="section-container relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {currentContent.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {currentContent.subtitle}
                </p>
                <Link href="/servicios">
                  <Button className="btn-primary">
                    {currentContent.cta}
                  </Button>
                </Link>
              </div>
              
              {/* Professional Framed Portrait */}
              <div className="flex justify-center">
                <div className="group relative">
                  {/* Photo Frame - Outer frame like a desk photo */}
                  <div className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-4 md:p-6 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform rotate-1 hover:rotate-0">
                    
                    {/* Inner white matting */}
                    <div className="relative bg-white p-3 md:p-4 shadow-inner">
                      
                      {/* Photo container */}
                      <div className="relative w-64 md:w-80 h-64 md:h-96 overflow-hidden bg-gray-100">
                        <img 
                          src="https://res.cloudinary.com/dp3gvxyft/image/upload/v1764619624/DelRosario_Portrait_x2o5do.png"
                          alt="Dr. Javier Antonio del Rosario Gibbs - Especialista en Urología"
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        
                        {/* Subtle overlay to maintain text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      </div>
                      
                      {/* Photo nameplate/plaque at bottom of frame */}
                      <div className="absolute bottom-1 md:bottom-2 left-3 md:left-4 right-3 md:right-4">
                        <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 p-2 md:p-3 text-center text-white shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                          <h3 className="font-bold text-xs md:text-sm mb-1">Dr. Javier del Rosario</h3>
                          <p className="text-xs opacity-90">Especialista en Urología</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Achievement Icons outside the frame */}
                    <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 animate-pulse">
                      <div className="bg-yellow-500 rounded-full p-2 md:p-3 shadow-lg border-2 border-white hover:bg-yellow-400 transition-all duration-300">
                        <Trophy className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 animate-pulse delay-1000">
                      <div className="bg-blue-600 rounded-full p-2 md:p-3 shadow-lg border-2 border-white hover:bg-blue-500 transition-all duration-300">
                        <Stethoscope className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Professional credentials badge */}
                    <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3">
                      <div className="bg-green-600 rounded-full p-2 md:p-3 shadow-lg border-2 border-white hover:bg-green-500 transition-all duration-300">
                        <Award className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Experience badge */}
                    <div className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3">
                      <div className="bg-purple-600 rounded-full p-2 md:p-3 shadow-lg border-2 border-white hover:bg-purple-500 transition-all duration-300">
                        <Calendar className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Information card that appears next to the frame */}
                  <div className="absolute top-4 -right-20 md:-right-32 bg-white p-3 md:p-4 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 z-10 hidden lg:block">
                    <div className="text-sm space-y-2">
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        <span className="text-gray-700 font-medium">I Puesto de Honor</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-700 font-medium">24+ Años</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 font-medium">15+ Publicaciones</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Timeline Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                {currentContent.timeline.title}
              </h2>
              
              {/* Desktop Timeline (hidden on mobile) */}
              <div className="relative hidden md:block">
                <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>
                <div className="space-y-12">
                  {currentContent.timeline.events.map((event, index) => {
                    const IconComponent = {
                      Trophy: Trophy,
                      GraduationCap: GraduationCap,
                      Award: Award,
                      Stethoscope: Stethoscope
                    }[event.icon] || Award;
                    
                    return (
                      <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-primary/10">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className={`w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center ${index % 2 !== 0 ? 'order-2' : ''}`}>
                                <IconComponent className="w-5 h-5 text-primary" />
                              </div>
                              <div className={`${index % 2 !== 0 ? 'order-1 text-right' : ''}`}>
                                <span className="text-primary font-bold text-lg">{event.year}</span>
                              </div>
                            </div>
                            <h3 className="font-bold text-lg text-foreground mb-2">{event.title}</h3>
                            <p className="text-muted-foreground">{event.desc}</p>
                          </div>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Timeline (visible only on mobile) */}
              <div className="relative md:hidden">
                <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>
                <div className="space-y-8">
                  {currentContent.timeline.events.map((event, index) => {
                    const IconComponent = {
                      Trophy: Trophy,
                      GraduationCap: GraduationCap,
                      Award: Award,
                      Stethoscope: Stethoscope
                    }[event.icon] || Award;
                    
                    return (
                      <div key={index} className="relative flex flex-col items-center">
                        {/* Center Circle */}
                        <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-20 mb-4"></div>
                        
                        {/* Card Above Line */}
                        <div className="w-full max-w-sm px-4">
                          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-primary/10">
                            <div className="flex items-center justify-center space-x-3 mb-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center">
                                <IconComponent className="w-6 h-6 text-primary" />
                              </div>
                              <div className="text-center">
                                <span className="text-primary font-bold text-xl">{event.year}</span>
                              </div>
                            </div>
                            <h3 className="font-bold text-xl text-foreground mb-3 text-center">{event.title}</h3>
                            <p className="text-muted-foreground text-center leading-relaxed">{event.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Combined Stats, Philosophy & Achievements Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-blue-50/30 to-primary/5">
          <div className="section-container">
            {/* Stats */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                {currentContent.stats.title}
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {currentContent.stats.items.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300">
                      <div className="stat-number text-primary">{stat.number}</div>
                      <p className="text-muted-foreground font-medium mt-1 text-sm">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="mb-16">
              <div className="max-w-3xl mx-auto text-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary/10">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {currentContent.philosophy.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed italic">
                    "{currentContent.philosophy.content}"
                  </p>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                {currentContent.achievements.title}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {currentContent.achievements.items.map((achievement, index) => {
                  const IconComponent = {
                    Trophy: Trophy,
                    BookOpen: BookOpen,
                    Globe2: Globe2,
                    Award: Award
                  }[achievement.icon] || Award;
                  
                  return (
                    <div key={index} className="text-center">
                      <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-sm text-foreground mb-1 leading-tight">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {achievement.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Consolidated Professional Background Section */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              
              {/* Specialties */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                  {currentContent.specialties.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {currentContent.specialties.items.slice(0, 6).map((item, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Award className="w-3 h-3 text-primary" />
                        </div>
                        <p className="text-muted-foreground text-sm font-medium">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Experience */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Education */}
                <div>
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-6 h-6 text-primary mr-2" />
                    <h3 className="text-xl font-bold text-foreground">{currentContent.education.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {currentContent.education.items.slice(0, 3).map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <p className="text-muted-foreground text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Current Experience */}
                <div>
                  <div className="flex items-center mb-4">
                    <Stethoscope className="w-6 h-6 text-green-600 mr-2" />
                    <h3 className="text-xl font-bold text-foreground">{currentContent.experience.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {currentContent.experience.positions.slice(0, 3).map((position, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-foreground text-sm">{position.title}</h4>
                          <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                            {position.years.split(' - ')[1] || position.years}
                          </span>
                        </div>
                        <p className="text-primary text-sm font-medium mb-1">{position.place}</p>
                        <p className="text-muted-foreground text-xs">{position.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Research & Memberships */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Research Highlights */}
                <div>
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-6 h-6 text-purple-600 mr-2" />
                    <h3 className="text-xl font-bold text-foreground">Investigación Destacada</h3>
                  </div>
                  <div className="space-y-3">
                    {currentContent.research.items.slice(0, 3).map((research, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <h4 className="font-semibold text-foreground text-sm mb-2">{research.title}</h4>
                        <p className="text-muted-foreground text-xs leading-relaxed">{research.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professional Societies */}
                <div>
                  <div className="flex items-center mb-4">
                    <Globe2 className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-bold text-foreground">Membresías Profesionales</h3>
                  </div>
                  <div className="space-y-3">
                    {currentContent.societies.items.map((society, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <h4 className="font-semibold text-foreground text-sm mb-1">{society.name}</h4>
                        <p className="text-blue-600 text-xs font-medium">{society.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Simplified CTA Section */}
        <section className="section-padding bg-primary/5">
          <div className="section-container text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                ¿Listo para tu Consulta?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Experiencia comprobada con 24+ años de dedicación a la urología
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto">
                  <Button className="btn-primary px-6 py-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    Agendar Consulta
                  </Button>
                </Link>
                <Link href="/servicios">
                  <Button variant="outline" className="btn-secondary px-6 py-3">
                    <Star className="w-4 h-4 mr-2" />
                    Ver Servicios
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}