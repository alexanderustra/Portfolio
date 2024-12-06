import { useState } from "react";
//import emailjs from 'emailjs-com';

interface ContactProps {
  language: string
}
const textEs = {
  title:'Contacto',
  texarea: 'Mensaje',
  button: 'Enviar'
}
const textEn = {
  title:'Contact',
  texarea: 'Mesagge',
  button: 'Send'
}

export const Contact: React.FC<ContactProps> = ({language}) => {

  const textToUse = language === 'Es' ? textEs : textEn

    const [formData, setFormData] = useState({
        email: '',
        message: ''
      });
    
      const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      
      /*
      const handleSubmit = (e:any) => {
        e.preventDefault();
    
        emailjs
          .send(
            'service_ulrlgd4', 
            'template_u8kous9',  
            {
              email: formData.email,
              message: formData.message,
            },
            'lE9hec2Lnx1B-4Kqt'
          )
          .then(
            (result) => {
              console.log('Correo enviado con éxito:', result.text);
              alert('Mensaje enviado con éxito');
            },
            (error) => {
              console.log('Error al enviar el correo:', error.text);
              alert('Hubo un error al enviar el mensaje');
            }
          );
      };
    */
      return (
        <form>
          <h1>{textToUse.title}</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            id="message"
            placeholder={textToUse.texarea}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">{textToUse.button}</button>
        </form>
      );
}