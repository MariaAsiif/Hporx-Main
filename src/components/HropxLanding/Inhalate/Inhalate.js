import React from "react";
import { ViewMoreBtn } from "../Header/Globals";
import InhalateSlick from "./InhalateSlick";
import {
  InhalateButtonContainer,
  InhalateMainContainer,
  InhalateTextContainer,
} from "./StyledInhalate";
const Inhalate = ({ id }) => {


  return (
    <div className="bscontainer-fluid" id={id}>

      <InhalateMainContainer>
        <InhalateTextContainer>
          <div className="accordion-item bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="headingTwo">
              <button className="
        accordion-button
        collapsed
        relative
        flex
        lg:grid
        md:grid
        items-center
        w-full
        py-4
        px-4
        text-base text-gray-800
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" style={{ justifyContent: 'inherit' }} data-bs-target="#collapseTwo" aria-expanded="false"
                aria-controls="collapseTwo">
                <h2 className='lg:text-[3rem] md:text-[2rem] text-[1.5rem] font-medium text-black'> Inhalate</h2>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div className="accordion-body py-4 px-5">
                <p   >
                  Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in
                  hendrerit orci malesuada eu. Morbi feugiat et ligula maximus
                  aliquet. Quisque aliquet luctus elit, in hendrerit orci malesuada
                  eu. Morbi feugiat et ligula maximus aliquet
                </p>
              </div>
            </div>
          </div>



        </InhalateTextContainer>
        <InhalateSlick />
        <InhalateButtonContainer>
          <ViewMoreBtn  >View More</ViewMoreBtn>
        </InhalateButtonContainer>
      </InhalateMainContainer>
    </div >
  );
};

export default Inhalate;
