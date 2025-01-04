'use client'

import { useState, FormEvent } from 'react'
import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required('Le nom est requis'),
  prenom: yup.string().required('Le prénom est requis'),
  email: yup.string().email('Email invalide').required('L\'email est requis'),
  message: yup.string().required('Le message est requis'),
});

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    prenom: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await schema.validate(formData, { abortEarly: false });

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi');

      setSubmitStatus('success');
      setFormData({ name: '', prenom: '', email: '', message: '' });
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const validationErrors: {[key: string]: string} = {};
        err.inner.forEach((error) => {
          if (error.path) validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      } else {
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg ml-12">
      <div className="mb-4">
        <label htmlFor="name" className="block font-open-sans text-2xl text-[#0d0000]">
          Nom:*
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full max-w-[70%] rounded-2xl p-2 border ${
            errors.name ? 'text-[#f3b705]' : 'border-[#A68A72]'
          }`}
          placeholder="Votre nom"
        />
        {errors.name && <p className="text-[#f3b705] text-sm mt-1">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="prenom" className="block font-open-sans text-2xl text-[#0d0000]">
          Prénom:*
        </label>
        <input
          type="text"
          id="prenom"
          value={formData.prenom}
          onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
          className={`w-full max-w-[70%] rounded-2xl p-2 border ${
            errors.prenom ? 'border-[#f3b705]' : 'border-[#A68A72]'
          }`}
          placeholder="Votre prénom"
        />
        {errors.prenom && <p className="text-[#f3b705] text-sm mt-1">{errors.prenom}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-open-sans text-2xl text-[#0d0000]">
          Email:*
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`w-full max-w-[70%] rounded-2xl p-2 border ${
            errors.email ? 'text-[#f3b705]' : 'border-[#A68A72]'
          }`}
          placeholder="Votre email"
        />
        {errors.email && <p className="text-[#f3b705] text-sm mt-1">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block font-open-sans text-2xl text-[#0d0000]">
          Message:*
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full max-w-[70%] rounded-2xl p-2 border ${
            errors.message ? 'border-[#f3b705]' : 'border-[#A68A72]'
          } h-40 resize-none`}
          placeholder="Votre message"
        />
        {errors.message && <p className="text-[#f3b705] text-sm mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`bg-[#A68A72] text-[#f3b705] px-5 py-2 rounded-full 
          hover:bg-[#975d2a] w-[70%] max-w-[70%] 
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-colors duration-200`}
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
      </button>

      {submitStatus === 'success' && (
        <div className="mt-4 p-4 bg-[#A68A72] text-[#f3b705] rounded-lg">
          Message envoyé avec succès!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mt-4 p-4 bg-[#A68A72] text-[#f3b705] rounded-lg">
          Une erreur est survenue lors de l&apos;envoi. Veuillez réessayer.
        </div>
      )}
    </form>
  );
}