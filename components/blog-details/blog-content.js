import React from "react";
import blogDetailsImage from "../../assets/images/blog/image.png";

const BlogContent = () => {
  return (
    <div>
      <div className="blog-card__image">
        <img src={blogDetailsImage} alt="" />
        <div className="blog-card__date">7 Mar 2021</div>
      </div>
      <span
        style={{
          fontSize: ".9rem",
          lineHeight: "1.5",
          display: "inline-block",
          textAlign: "center",
          marginBottom: "20px",
          marginTop: "10px",
        }}
      >
        Mr. Kenneth Egejuru (first left); Pastor Nse Emmanuel, Lagos state
        coordinator (middle); Pastor Atoyebi Kayode, Lagos state Director of
        Programmes (fifth left); Apostle Ekwere Angel, African President, Divine
        Era Foundation (first right standing behind); Princewill Awah,
        Secretary-General (second left standing behind) and others at the event
        recently.
      </span>
      <div className="blog-card__meta d-flex justify-content-start mt-0 mb-0">
        <a href="news-details.html">
          <i className="far fa-user-circle"></i> Chinyere Abiaziem
        </a>
        {/* <a href="news-details.html">
          <i className="far fa-comments"></i> 2 Comments
        </a> */}
      </div>
      <h3>Our donation is hope for poor childrens</h3>
      <p>
        <strong>LAGOS</strong> - Apostle Ekwere Angel, African President of
        Divine Era Foundation, a non- governmental organisation (NGO), has
        called on the attention of churches, government, firms, and individuals
        to the plight of the downtrodden in the society.
      </p>
      <p>
        Angel, made the call at the inauguration of its state executives on
        Sunday, February 28, 2021, where he stressed the paucity of attention
        from the authority to the less privileged and most vulnerable as the
        reason behind formation of the foundation.
      </p>
      <p>
        He said the foundation which caters for widows, retirees, and orphans
        stands to be a voice for the voiceless, hope for the hopeless in
        providing clothing, food, vocational training, scholarship and some
        non-refundable loans to begin business drawing support from some foreign
        humanitarian partners.
      </p>
      <p>
        The General Overseer of Christ Arena of Favour Ministry Inc., added that
        the NGO is presently visible in over 20 states in Nigeria and well over
        10 African nations are gearing up to be inaugurated also.
      </p>
      <p>
        Prophetess Marion Jones, Vice President of the Foundation, who virtually
        gave her address from Chicago USA, reiterated commitment of the NGO in
        securing better life for individuals.
      </p>
      <p>
        Princewill Awah, Secretary-General, Divine Era Foundation, Africa,
        charged individuals to follow after Jesus Christ in demonstrating love,
        care and readiness to lift others. He emphasized that no one gets to
        succeed without receiving help.
      </p>
      <p>
        The inauguration witnessed the official unveiling of the foundation's
        Logo by the African President with firework and other national officials
        present including Mr. Franklyn Oyobio, the foundation's consultant.
      </p>
      <p>
        The grand finale was however the inauguration of Lagos state executive
        for convenience of administration. This session was interpreted in the
        Yoruba language for as many in attendance that had such need.
      </p>
      <p>
        Mr. Nse Emmanuel was inducted and presented as the Lagos state
        coordinator of the foundation, Mrs. Ngozi Okafor as the Assistant
        Coordinator, Pastor Ayotebi Kayode as the State Programme Director while
        Mr. Kenneth Egejuru was presented as the state secretary.
      </p>
      <p>
        The foundation unveiled the maiden edition of the magazine reporting the
        mission work of charity.
      </p>
      <p>
        Also, the newly inaugurated executives were charged on working
        effectively in line with the foundation's vision.
      </p>
      <p>
        Concluding, Mrs. Caroline Lifu, thanked all in attendance and promised
        continuity with bringing succour to humanity.
      </p>
      <hr />
      <p style={{ color: "red" }}>
        <span
          style={{
            textDecoration: "underline",
            textUnderlinePosition: "under",
          }}
        >
          1, Olaonipekun Avenue, Mobil B/stop, Oke-ira, Ogba, Lagos - Nigeria,
          Eko, Nigeria
        </span>
        <br />
        07034992296
      </p>
      {/* <div className="blog-details__meta">
        <ul className="list-unstyled blog-details__category">
          <li>
            <span>Tags:</span>
          </li>
          <li>
            <a href="#">charity</a>
          </li>
          <li>
            <a href="#">donations</a>
          </li>
          <li>
            <a href="#">savelives</a>
          </li>
        </ul>
        <ul className="list-unstyled blog-details__category">
          <li>
            <span>Category:</span>
          </li>
          <li>
            <a href="#">charity</a>
          </li>
          <li>
            <a href="#">childrens</a>
          </li>
        </ul>
      </div> */}
      {/* <div className="blog-navigations">
        <a href="#">Our donation is hope for poor childrens</a>
        <a href="#">Fundrising for Early Childhood Rise</a>
      </div> */}
    </div>
  );
};

export default BlogContent;
