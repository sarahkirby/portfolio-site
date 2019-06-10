import React from 'react'

const SocialIcons = props => (
  <div className="social-icons">
    <a
      href="https://github.com/sarahkirby"
      aria-label="Link to Sarah Kirby's Github account"
			target="_blank"
			rel="noopener noreferrer"
		>
			<i className="fab fa-github" />
    </a>
    <a
      href="https://www.linkedin.com/in/sarah-kirby"
      aria-label="Link to Sarah Kirby's Linkedin account"
			target="_blank"
			rel="noopener noreferrer"
		>
			<i className="fab fa-linkedin-in" />
		</a>
		<a
      href="https://www.instagram.com/__sarahkirby"
      aria-label="Link to Sarah Kirby's Instagram account"
			target="_blank"
			rel="noopener noreferrer"
		>
			<i className="fab fa-instagram" />
		</a>
  </div>
)

export default SocialIcons