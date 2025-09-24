import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Inicializar EmailJS
      emailjs.init("-6cMJBOviHkGei8gT");

      // Crear el objeto con los datos del formulario (nombres coinciden con el template)
      const templateParams = {
        name: formData.name,
        email: formData.email,
        asunto: formData.subject,
        mensaje: formData.message
      };

      // Enviar email usando EmailJS
      // NOTA: Verificar que el Template ID sea correcto en tu dashboard de EmailJS
      await emailjs.send(
        "service_qf8i4nj", // Service ID
        "template_XXXXX",  // Template ID correcto (diferente al Service ID)
        templateParams
      );

      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarme. Te responderé pronto.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      toast({
        title: "Error al enviar",
        description: "Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "cristianninotti03@gmail.com",
      href: "mailto:cristianninotti03@gmail.com"
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+54 341 515 5611",
      href: "tel:+543415155611"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Rosario, Santa Fe, Argentina",
      href: "https://maps.google.com"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hablemos de tu <span className="gradient-text">Proyecto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes una idea increíble? Me encantaría escucharla y ayudarte a 
            convertirla en realidad. Contáctame y empecemos a trabajar juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 scroll-reveal">
            <h3 className="text-2xl font-semibold gradient-text mb-6">
              Información de Contacto
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} variant="glass" className="p-4 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card variant="gradient" className="p-6 text-center">
              <CardContent className="p-0">
                <h4 className="font-semibold mb-2 text-primary">¿Prefieres WhatsApp?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Hablemos directamente por WhatsApp para una respuesta más rápida.
                </p>
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => window.open("https://wa.me/543415155611", '_blank')}
                >
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 scroll-reveal">
            <Card variant="gradient" className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl gradient-text">
                  Envíame un Mensaje
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-card/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-card/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="¿De qué quieres hablar?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-card/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Cuéntame sobre tu proyecto o idea..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-card/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;