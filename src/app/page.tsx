'use client'

import AsomedLogo from '@/components/AsomedsLogo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Phone,
  MapPin,
  Clock,
  FileText,
  Shield,
  Zap,
  Heart,
  Stethoscope,
  UserCheck,
  MessageCircle,
  Mail
} from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-sky-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <AsomedLogo size="md" />
            <div className="hidden md:flex space-x-8">
              <a href="#servicios" className="text-slate-700 hover:text-sky-600 transition-colors">Servicios</a>
              <a href="#licencias" className="text-slate-700 hover:text-sky-600 transition-colors">Licencias Online</a>
              <a href="#contacto" className="text-slate-700 hover:text-sky-600 transition-colors">Contacto</a>
            </div>
            <Button className="bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600">
              Solicitar Licencia
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 to-emerald-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
                Tu Salud, Nuestra
                <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                  {" "}Prioridad
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Centro médico moderno en Chile con <strong>licencias médicas electrónicas</strong>
                100% online. Atención profesional, rápida y segura.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white px-8 py-4 text-lg">
                  <FileText className="w-5 h-5 mr-2" />
                  Obtener Licencia Ahora
                </Button>
                <Button size="lg" variant="outline" className="border-sky-200 hover:bg-sky-50 px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Contactar
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-sky-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-slate-900">Licencia Médica Online</h3>
                    <p className="text-slate-500">Proceso 100% digital</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <UserCheck className="w-4 h-4 mr-2 text-emerald-500" />
                    Médicos certificados
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Zap className="w-4 h-4 mr-2 text-emerald-500" />
                    Resultado en minutos
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Shield className="w-4 h-4 mr-2 text-emerald-500" />
                    Validez legal garantizada
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Nuestros Servicios Médicos
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Atención médica integral con tecnología de vanguardia para tu comodidad y bienestar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-sky-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Licencias Médicas Online</CardTitle>
                <CardDescription>
                  Obtén tu licencia médica de forma rápida y 100% digital
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Proceso completamente online</li>
                  <li>• Validez legal garantizada</li>
                  <li>• Entrega inmediata por email</li>
                  <li>• Compatible con isapres y fonasa</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-sky-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Consultas Médicas</CardTitle>
                <CardDescription>
                  Atención médica profesional con especialistas certificados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Medicina general</li>
                  <li>• Especialidades médicas</li>
                  <li>• Consultas presenciales</li>
                  <li>• Planes de tratamiento</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-sky-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Certificados Médicos</CardTitle>
                <CardDescription>
                  Certificaciones médicas para diversas necesidades
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Certificados de salud</li>
                  <li>• Aptitud laboral</li>
                  <li>• Certificados deportivos</li>
                  <li>• Documentación médica oficial</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Online License Section */}
      <section id="licencias" className="py-20 bg-gradient-to-r from-sky-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Licencias Médicas Electrónicas
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              La forma más rápida y segura de obtener tu licencia médica en Chile
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                ¿Cómo funciona nuestro sistema online?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Solicita tu consulta</h4>
                    <p className="text-slate-600">Completa el formulario con tus datos y síntomas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Evaluación médica</h4>
                    <p className="text-slate-600">Nuestros médicos certificados revisan tu caso</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Recibe tu licencia</h4>
                    <p className="text-slate-600">Licencia digital enviada a tu email en minutos</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white border-sky-100 shadow-xl">
              <CardHeader>
                <CardTitle className="text-center">Solicitar Licencia Médica</CardTitle>
                <CardDescription className="text-center">
                  Completa el formulario y obtén tu licencia en minutos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Nombre completo" />
                  <Input placeholder="RUT" />
                </div>
                <Input placeholder="Email" type="email" />
                <Input placeholder="Teléfono" />
                <Textarea placeholder="Describe tus síntomas..." rows={3} />
                <Button className="w-full bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600">
                  Solicitar Licencia Ahora
                </Button>
                <p className="text-xs text-slate-500 text-center">
                  Al enviar, aceptas nuestros términos de servicio y política de privacidad
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-slate-600">
              Estamos aquí para atenderte. Comunícate con nosotros por el medio que prefieras
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-sky-100 hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Teléfono</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-2">+56 2 1234 5678</p>
                <p className="text-sm text-slate-500">Lunes a Viernes: 8:00 - 20:00</p>
                <p className="text-sm text-slate-500">Sábados: 9:00 - 14:00</p>
              </CardContent>
            </Card>

            <Card className="border-sky-100 hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <CardTitle>WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-2">+56 9 2053 5005</p>
                <Button
                  variant="outline"
                  className="border-emerald-200 hover:bg-emerald-50"
                  onClick={() => window.open('https://wa.me/56920535005', '_blank')}
                >
                  Escribir WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="border-sky-100 hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-2">contacto@asomedspa.cl</p>
                <p className="text-sm text-slate-500">Respuesta en 24 horas</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nuestra Ubicación</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-sky-600 mr-3" />
                    <span className="text-slate-700">Av. Providencia 1234, Providencia, Santiago</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-sky-600 mr-3" />
                    <span className="text-slate-700">Lun-Vie: 8:00-20:00 | Sáb: 9:00-14:00</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-slate-900 mb-4">¿Tienes alguna consulta?</h4>
                <div className="space-y-3">
                  <Input placeholder="Tu email" />
                  <Textarea placeholder="Escribe tu mensaje..." rows={3} />
                  <Button className="w-full bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600">
                    Enviar Mensaje
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <AsomedLogo className="mb-4" />
              <p className="text-slate-400 text-sm">
                Centro médico moderno en Chile, especializado en licencias médicas electrónicas y atención médica integral.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Licencias médicas online</li>
                <li>Consultas médicas</li>
                <li>Certificados médicos</li>
                <li>Especialidades médicas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>+56 2 1234 5678</li>
                <li>+56 9 2053 5005</li>
                <li>contacto@asomedspa.cl</li>
                <li>Av. Providencia 1234, Santiago</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horarios</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Lunes a Viernes: 8:00 - 20:00</li>
                <li>Sábados: 9:00 - 14:00</li>
                <li>Domingos: Cerrado</li>
                <li>Urgencias 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>© 2024 ASOMED SPA. Todos los derechos reservados. | Centro médico regulado por SEREMI de Salud</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
