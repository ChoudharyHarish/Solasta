import React from "react";
import registerHero from "../assets/EventsBanner.jpeg";
import "../components/styles/Ticket.css";

export default function Register() {
  const ins1 = `Solasta Pass Discounted Price for Full Three Day Entry: ₹500

  Benefits of this pass:
  1.	Access to attend all events
  2.	Access to participate in all cultural and non-technical events
  3.	Access to attend Pronites (Celebrity Night, Rock Night, Fashion Show, DJ Night)

  Charges for Participating in technical events (Outside IIITDM Kurnool Students):
  1.	Hackathon- ₹100
  2.	Coding Challenge- ₹50
  3.	Design Quest- ₹75
  4.	Drone Race- ₹100
  5.	RC Car Racing on rally track- ₹75
  6.	Micro-maze- ₹75
  `;

  const ins3 = `Solasta Pass Discounted Price for One Day Entry: ₹200

  Benefits of this pass:
  1.	Access to attend all events
  2.	Access to participate in all cultural and non-technical events
  3.	Access to attend Pronites (Celebrity Night, Rock Night, Fashion Show, DJ Night)

  Charges for Participating in technical events (Outside IIITDM Kurnool Students):
  1.	Hackathon- ₹100
  2.	Coding Challenge- ₹50
  3.	Design Quest- ₹75
  4.	Drone Race- ₹100
  5.	RC Car Racing on rally track- ₹75
  6.	Micro-maze- ₹75
  `;

  const ins2 = `Solasta Pass for IIITDM Kurnool Students:\n Solasta’24 Official Merch (T-shirt) is compulsory for attending the events in Solasta.
 
  Benefits of this pass:
  1.	Access to attend all events
  2.	Access to participate in all events
  3.	Access to attend Pronites (Celebrity Night, Rock Night,Fashion Show, DJ Night)
`;

  return (
    <div className="RegisterPage">
      <div className="register-section ">
        <img className="hero-background-sign" src={registerHero} alt="" />
        <div className="below-register flex flex-col gap-8">
          <p className="register-head ">
            EARLY BIRD REGISTERATION BUY NOW AND GET 50% OFF!
          </p>
          <div className="register-form">
            <p style={{ whiteSpace: "pre-line" }}>{ins1}</p>
            <button className="submit-btn">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSda--XmXb30n94VlHDZtgPvoEo5DCvFi6k7qUgs9SJTQ5p-8w/formrestricted">
                Buy Now
              </a>
            </button>
          </div>
          <div className="register-form">
            <p style={{ whiteSpace: "pre-line" }}>{ins3}</p>
            <button className="submit-btn">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSda--XmXb30n94VlHDZtgPvoEo5DCvFi6k7qUgs9SJTQ5p-8w/formrestricted">
                Buy Now
              </a>
            </button>
          </div>
          {/* <div className="register-form">
            <p style={{ whiteSpace: "pre-line" }}>{ins2}</p>
            <button  className="submit-btn">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSda--XmXb30n94VlHDZtgPvoEo5DCvFi6k7qUgs9SJTQ5p-8w/formrestricted">
                Buy Now
              </a>
            </button>
  
          </div> */}
        </div>
      </div>
    </div>
  );
}
