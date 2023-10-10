'use client';
import React, { FC, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';

type State = 'error' | 'sent' | 'unsent';

const ContactForm: FC = () => {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const [formState, setFormState] = useState<State>('unsent');

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      name.current?.value !== '' &&
      email.current?.value !== '' &&
      message.current?.value !== ''
    ) {
      emailjs
        .send(
          'portfolio-site',
          'standard-portfolio',
          {
            name: name.current?.value,
            reply_to: email.current?.value,
            message: message.current?.value,
          },
          'mpJjTWM4jvvkzC3vl'
        )
        .then(() => setFormState('sent'));
    } else {
      setFormState('error');
    }
  };

  return (
    <form
      onSubmit={sendEmail}
      className={[
        styles.form,
        formState === 'error' ? styles.error : '',
        formState === 'sent' ? styles.sent : '',
      ].join(' ')}
    >
      <div className={styles.formBody}>
        <div className={styles.nameAndEmail}>
          <label className={styles.label}>Name *</label>
          <input type="text" name="name" ref={name} className={styles.input} />
          <label className={styles.label}>Email *</label>
          <input
            type="email"
            name="reply_to"
            ref={email}
            className={styles.input}
          />
        </div>
        <div className={styles.messageWrapper}>
          <label className={styles.label}>Message *</label>
          <textarea
            name="message"
            ref={message}
            className={[styles.messageBody, styles.input].join(' ')}
          />
        </div>
      </div>
      <p className={styles.errorText}>
        Error: Please fill out all required fields.
      </p>
      <input type="submit" value="Send" className={styles.submitButton} />
      <p className={styles.sentText}>
        Thanks for reaching out! I&apos;ll respond to you soon.
      </p>
    </form>
  );
};

export default ContactForm;
