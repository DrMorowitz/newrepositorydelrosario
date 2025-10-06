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
      research: {
        title: "Research and Publications",
        content: "My commitment to the advancement of urology is reflected in my participation in international clinical research, including Phase 3 studies for the treatment of metastatic prostate cancer. I have co-authored the book 'Current Trauma Management' and have presented multiple papers at national and international conferences, contributing to medical knowledge in areas such as bladder trauma, prostate cancer, and advanced urological techniques.",
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
              
              {/* Interactive Professional Card */}
              <div className="flex justify-center">
                <div className="group relative w-80 h-96 bg-gradient-to-br from-primary/20 via-primary/30 to-primary/40 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/20 to-transparent group-hover:from-primary/50 transition-all duration-500"></div>
                  
                  {/* Floating Icons */}
                  <div className="absolute top-4 right-4 animate-pulse">
                    <div className="bg-white/30 backdrop-blur-sm rounded-full p-3 hover:bg-white/40 transition-all duration-300">
                      <Stethoscope className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 animate-pulse delay-1000">
                    <div className="bg-white/30 backdrop-blur-sm rounded-full p-3 hover:bg-white/40 transition-all duration-300">
                      <Heart className="w-6 h-6 text-red-200" />
                    </div>
                  </div>
                  
                  {/* Center Achievement Badge */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-8 group-hover:scale-110 transition-all duration-300">
                      <Trophy className="w-16 h-16 text-yellow-300 animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Bottom Info Card */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/20">
                      <h3 className="font-bold text-xl mb-2">Dr. Javier del Rosario</h3>
                      <p className="text-sm opacity-90 mb-2">Especialista en Urología</p>
                      <div className="flex items-center justify-center space-x-2 text-xs opacity-80">
                        <Trophy className="w-4 h-4 text-yellow-300" />
                        <span>I Puesto de Honor</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-xs opacity-80 mt-1">
                        <Calendar className="w-4 h-4" />
                        <span>24+ Años de Experiencia</span>
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
              <div className="relative">
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
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-r from-primary/5 via-muted/30 to-primary/5">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              {currentContent.stats.title}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {currentContent.stats.items.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="stat-number text-primary group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                    <p className="text-muted-foreground font-medium mt-2">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="section-padding bg-gradient-to-r from-primary/5 to-blue-50/50">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-primary/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-50/30"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    {currentContent.philosophy.title}
                  </h2>
                  <p className="text-2xl text-muted-foreground leading-relaxed font-light italic">
                    "{currentContent.philosophy.content}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Achievements Section */}
        <section className="section-padding bg-gradient-to-br from-blue-50 to-primary/5">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                {currentContent.achievements.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentContent.achievements.items.map((achievement, index) => {
                  const IconComponent = {
                    Trophy: Trophy,
                    BookOpen: BookOpen,
                    Globe2: Globe2,
                    Award: Award
                  }[achievement.icon] || Award;
                  
                  return (
                    <div key={index} className="group">
                      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gradient-to-br from-primary/10 to-blue-100/50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
                        <div className="relative z-10">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-8 h-8 text-primary" />
                          </div>
                          <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {achievement.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {achievement.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                {currentContent.specialties.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentContent.specialties.items.map((item, index) => (
                  <div key={index} className="group medical-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-muted-foreground font-medium leading-relaxed">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="section-padding bg-muted/30">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-12">
                <GraduationCap className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-foreground">
                  {currentContent.education.title}
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {currentContent.education.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 medical-card bg-background p-6 rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <GraduationCap className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Current Clinical Experience */}
        <section className="section-padding bg-gradient-to-br from-green-50/50 to-blue-50/30">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Stethoscope className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {currentContent.experience.title}
                </h2>
                <p className="text-muted-foreground text-lg">Posiciones actuales y responsabilidades profesionales</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentContent.experience.positions.map((position, index) => (
                  <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Stethoscope className="w-6 h-6 text-green-600" />
                      </div>
                      <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {position.years}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{position.title}</h3>
                    <p className="text-primary font-semibold mb-2">{position.place}</p>
                    <p className="text-muted-foreground">{position.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Professional Societies */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Globe2 className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {currentContent.societies.title}
                </h2>
                <p className="text-muted-foreground text-lg">Membresías en organizaciones médicas prestigiosas</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentContent.societies.items.map((society, index) => {
                  const IconComponent = {
                    Globe2: Globe2,
                    Award: Award,
                    Users: Users,
                    MapPin: MapPin
                  }[society.icon] || Globe2;
                  
                  return (
                    <div key={index} className="group bg-gradient-to-r from-white to-blue-50/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100/50 hover:border-blue-200">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {society.name}
                          </h3>
                          <p className="text-blue-600 font-semibold text-sm">{society.role}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Research & Publications */}
        <section className="section-padding bg-gradient-to-br from-purple-50/50 to-pink-50/30">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {currentContent.research.title}
                </h2>
                <p className="text-muted-foreground text-lg">Contribuciones significativas al conocimiento urológico</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentContent.research.items.map((research, index) => {
                  const IconComponent = {
                    BookOpen: BookOpen,
                    Award: Award,
                    Globe2: Globe2,
                    Stethoscope: Stethoscope
                  }[research.icon] || BookOpen;
                  
                  return (
                    <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-purple-100/50 hover:border-purple-200 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-100/30 to-transparent rounded-bl-full"></div>
                      <div className="relative z-10">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-7 h-7 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-purple-600 transition-colors duration-300">
                              {research.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {research.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* International Conferences */}
        <section className="section-padding bg-gradient-to-br from-indigo-50/50 to-purple-50/30">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                  <Globe2 className="w-8 h-8 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {currentContent.conferences.title}
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {currentContent.conferences.subtitle}
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {currentContent.conferences.highlights.map((conference, index) => {
                  const IconComponent = {
                    Globe2: Globe2,
                    Award: Award,
                    Users: Users,
                    MapPin: MapPin
                  }[conference.icon] || Globe2;
                  
                  return (
                    <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-indigo-100/50 hover:border-indigo-200 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-100/20 to-transparent rounded-bl-full"></div>
                      <div className="relative z-10">
                        <div className="flex items-start space-x-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-8 h-8 text-indigo-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                              {conference.event}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              <span className="font-semibold text-indigo-600">Participaciones:</span> {conference.years}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Patient Care Philosophy */}
        <section className="section-padding bg-gradient-to-r from-cyan-50/50 to-teal-50/30">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-4">
                  <Heart className="w-8 h-8 text-cyan-600" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {currentContent.patientCare.title}
                </h2>
                <p className="text-muted-foreground text-lg">Principios fundamentales de mi práctica médica</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentContent.patientCare.principles.map((principle, index) => {
                  const IconComponent = {
                    BookOpen: BookOpen,
                    Heart: Heart,
                    Award: Award,
                    Clock: Clock
                  }[principle.icon] || Heart;
                  
                  return (
                    <div key={index} className="group text-center">
                      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-cyan-100/50 hover:border-cyan-200 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 via-transparent to-teal-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                          <div className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-10 h-10 text-cyan-600" />
                          </div>
                          <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                            {principle.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {principle.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary/10 via-primary/5 to-blue-50/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="section-container text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-primary mr-3 animate-pulse" />
                <h2 className="text-4xl font-bold text-foreground">
                  ¿Listo para tu Consulta?
                </h2>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Experiencia comprobada con 24+ años de dedicación a la urología
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/contacto">
                  <Button className="btn-primary group relative overflow-hidden px-8 py-4 text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <span className="relative z-10 flex items-center space-x-2">
                      <Calendar className="w-5 h-5" />
                      <span>Agendar Consulta</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </Link>
                <Link href="/servicios">
                  <Button variant="outline" className="btn-secondary group px-8 py-4 text-lg border-2 hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <span className="flex items-center space-x-2">
                      <Star className="w-5 h-5 group-hover:text-yellow-500 transition-colors duration-300" />
                      <span>Ver Servicios</span>
                    </span>
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span>I Puesto de Honor</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  <span>15+ Publicaciones</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-green-500" />
                  <span>2000+ Pacientes</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}