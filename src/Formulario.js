import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './estilos/Contacto.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { pink } from '@mui/material/colors';

const Formulario = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mmd1dbb', 'template_hmymyg6', form.current, {
        publicKey: '8Z-YcQAl-XUzXlrpg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='container-fluid mt-2'>
      <div className='row ci p-2'>
        <div className='col-lg-6 col-sm-12 mb-4 '>
          <h1>Ponte en contacto</h1>
          <div className="d-flex align-items-center mb-3">
            <FacebookIcon sx={{ fontSize: 48, marginRight: 8, color: '#3b5998' }} />
            <button className='btn  btn-lg'>Miguel Izar</button>
          </div>
          <div className="d-flex align-items-center mb-3">
            <InstagramIcon sx={{ fontSize: 48, marginRight: 8, color: pink[500] }} />
            <button className='btn  btn-lg'>Miguel Izar</button>
          </div>
          <div className="d-flex align-items-center mb-3">
            <XIcon sx={{ fontSize: 48, marginRight: 8 }} />
            <button className='btn  btn-lg'>Miguel Izar</button>
          </div>
          <div className="d-flex align-items-center">
            <WhatsAppIcon sx={{ fontSize: 48, marginRight: 8, color: '#25d366' }} />
            <button className='btn  btn-lg'>3318925607</button>
          </div>
        </div>
        <div className='col-lg-6 col-sm-12 mt-4'>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Tu nombre" name="from_name" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Tu correo" name="correo" />
            </div>
            <div className="mb-3">
              <input type="number" className="form-control" placeholder="Tu número de contacto" name="telefono" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" placeholder="Déjanos tu pregunta/opinión" name="mensaje"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
