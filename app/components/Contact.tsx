'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Particles from './utils/Particles';
import GradientText from './utils/GradientText';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus(data.success ? 'Message sent!' : 'Failed to send message.');
      console.log(status)
      toast.success('Message sent!')
    } catch (error) {
      console.error(error);
      setStatus('Error occurred while sending message.');
      toast.error('Error occurred while sending message.')
    }
  };

  return (
    <div className="w-full h-screen relative overflow-hidden" id="contact">
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="mb-8">
          <GradientText
            colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
            animationSpeed={3}
            showBorder={false}
            className="text-5xl font-bold font-sans text-shadow-sm text-shadow-amber-20"
          >
            Contact Me
          </GradientText>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 space-y-4 w-full px-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition"
          >
            Send Message
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Contact;
