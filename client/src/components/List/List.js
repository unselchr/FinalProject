import React from "react";
import "./List.css";
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';

export const List = ({ children }) => {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        {children}
      </ul>
    </div>
    
    // <Accordion openMulti={true}>
    //   <AccordionPanel heading='First Title'>
    //     <Paragraph>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //     </Paragraph>
    //   </AccordionPanel>
    //   <AccordionPanel heading='Second Title'>
    //     <Paragraph>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //     </Paragraph>
    //   </AccordionPanel>
    //   <AccordionPanel heading='Third Title'>
    //     <Paragraph>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //     </Paragraph>
    //   </AccordionPanel>
    // </Accordion>
  );
};
