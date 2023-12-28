import React from 'react';
import Layout from '../components/layout';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import AnimatedStars from '../components/AnimatedStars';
import '../components/bulma/css/bulma.css';
import MediaQuery from 'react-responsive';
import '../components/MainContainer_styling.css';
import ReactTyped from 'react-typed-component';
import { graphql } from 'gatsby';
import { get } from 'lodash';
import '../components/typing.css';
import P5Overlay from '../components/P5Overlay';





// ... (other imports)

const AboutIndex = ({ data }) => {
   const stuff = get(data, 'allContentfulPerson.nodes[0].about.raw', '');
   const parsedStuff = JSON.parse(stuff);
   const textContent = parsedStuff.content[0].content[0].value;
   const words = textContent.split(' ');
 
   return (
     <motion.div
       animate={{ opacity: 1 }}
       initial={{ opacity: 0 }}
       transition={{ duration: 1.5 }}
     >
       <Layout>
         <div style={{ height: '80vh', width: '90vw', margin: 'auto' }}>
           <Canvas>
             <color attach="background" args={['#000117']} />
            
             <AnimatedStars />
             <OrbitControls />
             <>
               <Html position={[-6, 1, 0]}>
               <P5Overlay 
               words = {words}/>  
               </Html>
             </>
           </Canvas>
         </div>
       </Layout>
     </motion.div>
   );
 };
 
 export default AboutIndex;
 
 // ... (remaining code)
 

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        about {
          raw
        }
      }
    }
  }
`;
