"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Activity, Calendar, User, CheckCircle, AlertCircle, Info } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import { 
  fadeIn, 
  staggerContainer,
  scaleIn,
  viewportConfig 
} from '@/lib/animations';

const CondicionesComunes = () => {
  const commonConditions = [
    {
      id: 1,
      title: 'Cálculos Renales (Nefrolitiasis)',
      prevalence: '10% de la población panameña',
      severity: 'Moderada a Alta',
      icon: AlertCircle,
      color: 'text-orange-600',
      description: 'Los cálculos renales son depósitos duros de minerales y sales que se forman dentro de los riñones.',
      symptoms: [
        'Dolor severo en la espalda o costado',
        'Dolor que se irradia hacia la ingle',
        'Dolor al orinar',
        'Orina rosada, roja o marrón',
        'Náuseas y vómitos',
        'Urgencia urinaria persistente'
      ],
      causes: [
        'Deshidratación crónica',
        'Dieta alta en sodio y proteína',
        'Obesidad',
        'Historia familiar',
        'Ciertas condiciones médicas',
        'Algunos medicamentos'
      ],
      treatment: [
        'Hidratación intensa',
        'Medicamentos para el dolor',
        'Alfa-bloqueadores para facilitar el paso',
        'Litotricia extracorpórea (ondas de choque)',
        'Ureteroscopia',
        'Nefrolitotomía percutánea'
      ]
    },
    {
      id: 2,
      title: 'Infecciones del Tracto Urinario (ITU)',
      prevalence: '25% de mujeres, 5% de hombres anualmente',
      severity: 'Leve a Moderada',
      icon: Activity,
      color: 'text-red-600',
      description: 'Infecciones bacterianas que afectan cualquier parte del sistema urinario: riñones, uréteres, vejiga y uretra.',
      symptoms: [
        'Ardor intenso al orinar',
        'Urgencia urinaria frecuente',
        'Dolor suprapúbico o pélvico',
        'Orina turbia o con olor fuerte',
        'Fiebre y escalofríos (pielonefritis)',
        'Dolor en flancos (infección renal)'
      ],
      causes: [
        'Bacterias E. coli (80% de casos)',
        'Higiene inadecuada',
        'Actividad sexual',
        'Retención urinaria',
        'Sistemas inmunes comprometidos',
        'Catéteres urinarios'
      ],
      treatment: [
        'Antibióticos específicos según cultivo',
        'Hidratación abundante',
        'Analgésicos para el dolor',
        'Probióticos para restaurar flora',
        'Seguimiento con urocultivo',
        'Evaluación urológica si es recurrente'
      ]
    },
    {
      id: 3,
      title: 'Hiperplasia Prostática Benigna (HPB)',
      prevalence: '50% de hombres >50 años, 90% >80 años',
      severity: 'Leve a Moderada',
      icon: Info,
      color: 'text-blue-600',
      description: 'Agrandamiento no canceroso de la glándula prostática que puede obstruir el flujo urinario.',
      symptoms: [
        'Dificultad para iniciar la micción',
        'Chorro urinario débil o interrumpido',
        'Goteo post-miccional',
        'Sensación de vaciado incompleto',
        'Urgencia urinaria, especialmente nocturna',
        'Incontinencia por rebosamiento'
      ],
      causes: [
        'Envejecimiento natural',
        'Cambios hormonales (DHT)',
        'Historia familiar',
        'Diabetes y enfermedades cardíacas',
        'Obesidad',
        'Estilo de vida sedentario'
      ],
      treatment: [
        'Alfa-bloqueadores (tamsulosina, doxazosina)',
        'Inhibidores de 5-alfa-reductasa (finasterida)',
        'Terapia combinada',
        'Procedimientos mínimamente invasivos',
        'Resección transuretral (TURP)',
        'Enucleación prostática con láser'
      ]
    }
  ];

  const getSeverityColor = (severity: string) => {
    if (severity.includes('Alta')) return 'bg-red-100 text-red-800 border-red-200';
    if (severity.includes('Moderada')) return 'bg-orange-100 text-orange-800 border-orange-200';
    return 'bg-yellow-100 text-yellow-800 border-yellow-200';
  };

  return (
    <>
      <main>
        {/* Breadcrumb */}
        <motion.section 
          className="section-padding-sm bg-muted/30"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="section-container">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Inicio</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span className="text-foreground">Condiciones Comunes</span>
            </nav>
          </div>
        </motion.section>

        {/* Hero Section */}
        <motion.section 
          id="hero"
          className="section-padding bg-gradient-to-r from-blue-50 to-cyan-50"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="section-container">
            <div className="max-w-4xl">
              <motion.div 
                className="flex items-center gap-2 mb-4"
                variants={fadeIn}
                transition={{ delay: 0.1 }}
              >
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/blog" className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Volver al Blog
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 mb-4"
                variants={fadeIn}
                transition={{ delay: 0.2 }}
              >
                <Activity className="w-8 h-8 text-blue-600" />
                <span className="text-blue-600 font-semibold">Educación Médica</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                variants={scaleIn}
              >
                Condiciones Urológicas Comunes en Panamá
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
                variants={fadeIn}
                transition={{ delay: 0.3 }}
              >
                Información detallada sobre las condiciones urológicas más frecuentes que atendemos en nuestra práctica. 
                Conoce los síntomas, causas y opciones de tratamiento disponibles.
              </motion.p>
              <motion.div 
                className="flex items-center gap-4 text-sm text-muted-foreground"
                variants={fadeIn}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Dr. Javier del Rosario
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Actualizado Oct 2025
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Conditions Grid */}
        <motion.section 
          className="section-padding"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          <div className="section-container">
            <motion.div 
              className="text-center mb-12"
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Las 3 Condiciones Más Frecuentes
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Estas condiciones representan el 70% de las consultas urológicas en Panamá. Un diagnóstico temprano mejora significativamente los resultados del tratamiento.
              </p>
            </motion.div>

            <div className="space-y-12">
              {commonConditions.map((condition, index) => {
                const IconComponent = condition.icon;
                return (
                  <motion.div
                    key={condition.id}
                    variants={fadeIn}
                    custom={index}
                    className="medical-card border-l-4 border-l-blue-500"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 ${condition.color.replace('text-', 'border-')}`}>
                            <IconComponent className={`w-6 h-6 ${condition.color}`} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">
                              {condition.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              {condition.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 mb-4 lg:mb-0">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(condition.severity)}`}>
                          {condition.severity}
                        </span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {condition.prevalence}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-red-600" />
                          Síntomas Principales
                        </h4>
                        <ul className="space-y-2">
                          {condition.symptoms.map((symptom, idx) => (
                            <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Info className="w-4 h-4 text-blue-600" />
                          Causas Frecuentes
                        </h4>
                        <ul className="space-y-2">
                          {condition.causes.map((cause, idx) => (
                            <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                              {cause}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          Opciones de Tratamiento
                        </h4>
                        <ul className="space-y-2">
                          {condition.treatment.map((treatment, idx) => (
                            <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                              {treatment}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Early Detection Section */}
            <motion.div 
              className="mt-16"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div className="medical-card bg-green-50 border border-green-200">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  La Importancia de la Detección Temprana
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Beneficios del Diagnóstico Precoz</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Tratamientos menos invasivos y más efectivos</li>
                      <li>• Menor riesgo de complicaciones</li>
                      <li>• Recuperación más rápida</li>
                      <li>• Preservación de la función renal y sexual</li>
                      <li>• Menor costo del tratamiento</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Cuándo Consultar</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Síntomas urinarios persistentes por más de 2 semanas</li>
                      <li>• Dolor al orinar o sangre en la orina</li>
                      <li>• Cambios en el patrón urinario</li>
                      <li>• Historia familiar de condiciones urológicas</li>
                      <li>• Chequeos preventivos después de los 40 años</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="mt-16 text-center"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div className="medical-card bg-primary/5">
                <Activity className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  ¿Reconoces alguno de estos síntomas?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  No esperes a que los síntomas empeoren. Una evaluación temprana puede prevenir complicaciones 
                  y ofrecerte las mejores opciones de tratamiento.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/contacto">
                      Agendar Evaluación
                    </Link>
                  </Button>
                  <WhatsAppButton message="Hola Dr. del Rosario, tengo síntomas urológicos y me gustaría agendar una consulta.">
                    Consultar por WhatsApp
                  </WhatsAppButton>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default CondicionesComunes;