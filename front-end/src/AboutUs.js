import { useState, useEffect } from 'react';
import axios from 'axios';
import './Messages.css';

/**
 * A React component that shows a form the user can use to create a new message, as well as a list of any pre-existing messages.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  const [content, setContent] = useState([]); 

  const fetchContent = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about-us`) // Ensure this path matches your back-end route
      .then(response => {
        // axios bundles up all response data in response.data property
        const aboutContent = response.data;
        setContent(aboutContent);
      })
      .catch(error => {
        console.error('Error fetching about data:', error);
      });
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <>
      <p>{content.paragraph}</p>
      {content.imageUrl && <img width='150' src={content.imageUrl} alt="About Us" />}
    </>
  );
};

// Make this component available to be imported into any other file
export default AboutUs;


