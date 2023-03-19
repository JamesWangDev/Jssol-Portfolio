import {
  FaGithub,
  FaLinkedin,
  FaAngellist,
  FaTwitter,
  FaMediumM,
} from 'react-icons/fa';

const socialLinks = [
  {
    label: 'Link to my GitHub profile',
    icon: <FaGithub />,
    link: 'https://github.com/jssol',
  },
  {
    label: 'Link to my LinkedIn profile',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/jsivahera/',
  },
  {
    label: 'Link to my RemoteOK profile',
    icon: 'OK',
    link: 'https://remoteok.com/@jsivahera',
  },
  {
    label: 'Link to my AngelList profile',
    icon: <FaAngellist />,
    link: 'https://angel.co/u/jsivahera',
  },
  {
    label: 'Link to my Twitter profile',
    icon: <FaTwitter />,
    link: 'https://twitter.com/jsivahera',
  },
  {
    label: 'Link to my Medium profile',
    icon: <FaMediumM />,
    link: 'https://medium.com/@josivahera',
  },
];

export default socialLinks;
