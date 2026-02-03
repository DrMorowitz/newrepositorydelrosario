import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contacto - Dr. Javier del Rosario Urólogo",
  description: "Agenda tu consulta en nuestras 4 ubicaciones: The Panama Clinic, Consultorios Médicos Costa Pacífico-Coronado, Consultorios Médicos La Chorrera, Centro Médico del Caribe-Colón",
  keywords: "contacto urólogo panamá, agendar consulta urología, panama clinic, coronado, colón, cliniweb",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}