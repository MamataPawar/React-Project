import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  const [curOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setIsOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}

      <AccordionItem
        curOpen={curOpen}
        onOpen={setIsOpen}
        title="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
        num={22}
        key="test1"
      >
        <p>Quisque rhoncus nunc id ornare volutpat.</p>
        <ul>
          <li>Pellentesque vitae neque accumsan ligula mollis posuere.</li>
          <li>Donec auctor leo sed sem tincidunt accumsan.</li>
          <li>
            Nulla rutrum lectus quis mauris auctor, auctor fermentum odio
            ultricies.
          </li>
        </ul>
      </AccordionItem>
    </div>
  );
}
