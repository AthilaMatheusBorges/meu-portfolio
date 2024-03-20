import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
// import { FaLinkedinIn } from 'react-icons/fa'
// import { FaGithub } from 'react-icons/fa'
// import { FaInstagram } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'
 

const socialNetworks = [
    { name: 'linkedin', icon: <FaLinkedinIn /> , link :'https://www.linkedin.com/in/matheus-borges-09292216b/'},
    { name: 'github', icon: <FaGithub /> , link :'https://github.com/AthilaMatheusBorges'},
    { name: 'instagram', icon: <FaInstagram /> , link :'https://www.instagram.com/matheus_borges04/'}
  ]


const SocialNetworks = () => {
 
  return (
    <section id="social-networks">
      {socialNetworks.map(network => (
        <a href={network.link} target='_blank' className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export { SocialNetworks }
