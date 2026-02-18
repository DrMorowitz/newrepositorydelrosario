'use client'

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, MessageCircle, Shield } from 'lucide-react';

const ContactPage = () => {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Contacto - Dr. Javier del Rosario Urólogo",
      subtitle: "Agenda tu consulta en nuestras 4 ubicaciones: The Panama Clinic Torre B Piso 23, Consultorios Médicos Costa Pacífico-Coronado, Consultorios Médicos La Chorrera, Centro Médico del Caribe-Colón",
      locations: {
        title: "Nuestras Ubicaciones",
        panama: {
          name: "The Panama Clinic Torre B Piso 23",
          address: "Torre B Piso 23 Consultorio 2304\nCiudad de Panamá",
          schedule: "Lunes a Viernes: 8:00 AM - 5:00 PM"
        },
        coronado: {
          name: "Consultorios Médicos Costa Pacífico-Coronado",
          address: "Consultorios Médicos Costa Pacífico\nCentro Comercial The Village\nCoronado",
          schedule: "Martes y Jueves: 2:00 PM - 6:00 PM"
        },
        colon: {
          name: "Centro Médico del Caribe-Colón",
          address: "Colón\nCalle Principal, Colón",
          schedule: "Miércoles y Viernes: 9:00 AM - 1:00 PM"
        },
        chorrera: {
          name: "Consultorios Médicos La Chorrera",
          address: "Avenida Las Américas, La Chorrera",
          schedule: "Citas según disponibilidad"
        }
      },
      contact: {
        title: "Información de Contacto",
        phone: {
          panama: "+507 6591-1501",
          coronado: "+507 6591-1501",
          colon: "+507 6591-1501",
          chorrera: "+507 6591-1501",
          whatsapp: "+507 6591-1501"
        }
      },
      insurance: {
        title: "Seguros Aceptados",
        note: "Trabajamos con los principales seguros médicos de Panamá"
      }
    },
    en: {
      title: "Contact - Dr. Javier del Rosario Urologist", 
      subtitle: "Schedule your consultation at our 4 locations: The Panama Clinic Torre B Piso 23, Consultorios Médicos Costa Pacífico-Coronado, Consultorios Médicos La Chorrera, Centro Médico del Caribe-Colón",
      locations: {
        title: "Our Locations",
        panama: {
          name: "The Panama Clinic Torre B Piso 23",
          address: "Torre B Floor 23 Office 2304\nPanama City",
          schedule: "Monday to Friday: 8:00 AM - 5:00 PM"
        },
        coronado: {
          name: "Consultorios Médicos Costa Pacífico-Coronado",
          address: "Consultorios Médicos Costa Pacífico\nThe Village Shopping Center\nCoronado",
          schedule: "Tuesday and Thursday: 2:00 PM - 6:00 PM"
        },
        colon: {
          name: "Centro Médico del Caribe-Colón",
          address: "Colón\nMain Street, Colón",
          schedule: "Wednesday and Friday: 9:00 AM - 1:00 PM"
        },
        chorrera: {
          name: "Consultorios Médicos La Chorrera",
          address: "Avenida Las Américas, La Chorrera",
          schedule: "By appointment"
        }
      },
      contact: {
        title: "Contact Information",
        phone: {
          panama: "+507 6591-1501",
          coronado: "+507 6591-1501",
          colon: "+507 6591-1501",
          chorrera: "+507 6591-1501",
          whatsapp: "+507 6591-1501"
        }
      },
      insurance: {
        title: "Accepted Insurance",
        note: "We work with major medical insurance providers in Panama"
      }
    }
  };

  const currentContent = content[language];

  const handleWhatsApp = (location: string) => {
    const message = encodeURIComponent(
      `Hola Dr. del Rosario, me gustaría agendar una consulta en ${location}.`
    );
    window.open(`https://wa.me/50765911501?text=${message}`, '_blank');
  };


  const insuranceProviders = [
    "Assa Compañía de Seguros",
    "Seguros Suramericana",
    "Mapfre Panamá",
    "Seguros Fedpa", 
    "Pan-American Life Insurance",
    "Seguros Vivir"
  ];

  return (
    <>
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="section-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {currentContent.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {currentContent.subtitle}
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Locations */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  {currentContent.locations.title}
                </h2>
                
                <div className="space-y-8">
                  {/* Panama Clinic - Primary Location */}
                  <div className="medical-card border-l-4 border-l-primary">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-foreground">
                            {currentContent.locations.panama.name}
                          </h3>
                          <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                            Principal
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-3 whitespace-pre-line">
                          {currentContent.locations.panama.address}
                        </p>
                        <div className="flex items-center space-x-2 mb-4">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {currentContent.locations.panama.schedule}
                          </span>
                        </div>
                        <div className="flex space-x-3">
                          <Button
                            size="sm"
                            className="btn-whatsapp"
                            onClick={() => handleWhatsApp('The Panama Clinic')}
                          >
                            <MessageCircle className="w-4 h-4 mr-1" />
                            WhatsApp
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a href="https://wa.me/50765911501" target="_blank" rel="noopener noreferrer" className="underline">
                              <Phone className="w-4 h-4 mr-1" />
                              {currentContent.contact.phone.panama}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Coronado Location */}
                  <div className="medical-card">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {currentContent.locations.coronado.name}
                        </h3>
                        <p className="text-muted-foreground mb-3 whitespace-pre-line">
                          {currentContent.locations.coronado.address}
                        </p>
                        <div className="flex items-center space-x-2 mb-4">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {currentContent.locations.coronado.schedule}
                          </span>
                        </div>
                        <div className="flex space-x-3">
                          <Button
                            size="sm"
                            className="btn-whatsapp"
                            onClick={() => handleWhatsApp('Consultorios Médicos Costa Pacífico-Coronado')}
                          >
                            <MessageCircle className="w-4 h-4 mr-1" />
                            WhatsApp
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a href="https://wa.me/50765911501" target="_blank" rel="noopener noreferrer" className="underline">
                              <Phone className="w-4 h-4 mr-1" />
                              {currentContent.contact.phone.coronado}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Colón Location */}
                  <div className="medical-card">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {currentContent.locations.colon.name}
                        </h3>
                        <p className="text-muted-foreground mb-3 whitespace-pre-line">
                          {currentContent.locations.colon.address}
                        </p>
                        <div className="flex items-center space-x-2 mb-4">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {currentContent.locations.colon.schedule}
                          </span>
                        </div>
                        <div className="flex space-x-3">
                          <Button
                            size="sm"
                            className="btn-whatsapp"
                            onClick={() => handleWhatsApp('Centro Médico del Caribe-Colón')}
                          >
                            <MessageCircle className="w-4 h-4 mr-1" />
                            WhatsApp
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a href="https://wa.me/50765911501" target="_blank" rel="noopener noreferrer" className="underline">
                              <Phone className="w-4 h-4 mr-1" />
                              {currentContent.contact.phone.colon}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* La Chorrera Location */}
                  <div className="medical-card">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {currentContent.locations.chorrera.name}
                        </h3>
                        <p className="text-muted-foreground mb-3 whitespace-pre-line">
                          {currentContent.locations.chorrera.address}
                        </p>
                        <div className="flex items-center space-x-2 mb-4">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {currentContent.locations.chorrera.schedule}
                          </span>
                        </div>
                        <div className="flex space-x-3">
                          <Button
                            size="sm"
                            className="btn-whatsapp"
                            onClick={() => handleWhatsApp('Consultorios Médicos La Chorrera')}
                          >
                            <MessageCircle className="w-4 h-4 mr-1" />
                            WhatsApp
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a href="https://wa.me/50765911501" target="_blank" rel="noopener noreferrer" className="underline">
                              <Phone className="w-4 h-4 mr-1" />
                              {currentContent.contact.phone.chorrera}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Section */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Ubicación Principal - The Panama Clinic
                </h2>
                
                <div className="medical-card">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Visítanos en The Panama Clinic - Torre B Piso 23
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Ubicación principal para consultas y procedimientos especializados
                    </p>
                    
                    {/* WhatsApp CTA */}
                    <Button 
                      className="btn-whatsapp w-full mb-4" 
                      onClick={() => handleWhatsApp('The Panama Clinic')}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Agendar por WhatsApp
                    </Button>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="mt-8">
                  <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-border">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.9317598921625!2d-79.51397932557653!3d8.978426991080939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca9340cdda0c1%3A0x6e857350dc9807c0!2sTHE%20PANAM%C3%81%20CLINIC%20TORRE%20B!5e0!3m2!1sen!2spa!4v1764624677769!5m2!1sen!2spa" 
                      width="100%" 
                      height="400" 
                      style={{border: 0}} 
                      allowFullScreen
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                    />
                  </div>
                  
                  {/* Map Info */}
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      📍 The Panama Clinic Torre B Piso 23 Consultorio 2304 - Ciudad de Panamá
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Haz clic en el mapa para ver direcciones detalladas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Insurance Section */}
        <section className="section-padding bg-muted/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {currentContent.insurance.title}
              </h2>
              <p className="text-muted-foreground">
                {currentContent.insurance.note}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {insuranceProviders.map((provider, index) => (
                <div key={index} className="medical-card text-center p-4">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium text-muted-foreground">
                    {provider}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;