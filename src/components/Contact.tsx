import React, { useContext, useEffect } from 'react';
import {
  Formik, Field, ErrorMessage, Form,
} from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import styles from '@/styles/Contact.module.scss';
import autoVisibilityToggler from '@/utils/autoVisibilityToggler';
import { NavContext } from './NavContext';
import BreakpointToggle from './BreakpointToggle';
import VisibilityToggle from './VisibilityToggle';
import TextAnimation from './TextAnimation';
import Title from './Title';

interface Props {
  componentRef: React.RefObject<HTMLElement>;
  variant: string;
  isVisible: boolean;
}

const Contact: React.FC<Props> = ({ componentRef, variant, isVisible }) => {
  const { isNavOpen } = useContext(NavContext);

  useEffect(() => {
    autoVisibilityToggler(isVisible, 'contact');
  }, [isVisible]);

  const initialValues = { name: '', email: '', message: '' };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required').max(500, 'Max characters reached'),
  });

  const onSubmit = async (values: object, { resetForm }: any) => {
    const response = await fetch('https://formspree.io/f/xknazazq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      resetForm();
      toast.error('Message sent!');
    } else {
      toast.error('Something went wrong :( Try again!');
    }
  };

  return (
    <section ref={componentRef} id="contact" className={`${styles.container} ${isNavOpen && styles.hidden}`}>
      <TextAnimation type="fade_right" delay={0} className={styles.title_container}>
        <Title index='04' title='Get started' subtitle="Interested in collaborating?" variant={variant} className={styles.title} />
      </TextAnimation>
      <TextAnimation type="fade_down" delay={0} className={styles.text}>
        <p>
          Thanks for visiting!
          I am excited about us working together and bringing your ideas to life.
          Do you have a project in mind? Or do you want to chat about potential collaborations?
          I would love to hear from you.
          <br />
          Don&#39;t hesitate to reach out - let&#39;s make something cool together!
        </p>
      </TextAnimation>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.input_container}>
              <label className={styles.label} htmlFor="name">Your name</label>
              <Field type="text" id="name" name="name" className={styles.input} />
              <span className={styles.error}>
                <ErrorMessage name="name" />
              </span>
            </div>
            <div className={styles.input_container}>
              <label className={styles.label} htmlFor="email">Your email</label>
              <Field type="email" id="email" name="email" className={styles.input} />
              <span className={styles.error}>
                <ErrorMessage name="email" />
              </span>
            </div>
            <div className={styles.area_container}>
              <label className={styles.label} htmlFor="message">Your message</label>
              <Field as="textarea" id="message" name="message" className={styles.textarea} maxLength="501" />
              <span className={styles.error}>
                <ErrorMessage name="message" />
              </span>
            </div>
            <button className={`button ${styles.button}`} type="submit" disabled={isSubmitting}>Send</button>
          </Form>
        )}
      </Formik>
      <ToastContainer
        position="bottom-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="dark"
        toastClassName={styles.toast}
      />
      <TextAnimation type="fade_left" className="blob" delay={0} />
    </section>
  );
};

export default VisibilityToggle(BreakpointToggle(Contact));
