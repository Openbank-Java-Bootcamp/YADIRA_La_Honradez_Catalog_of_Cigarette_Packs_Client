import React from "react";
import front from "./../images/front.jpg";
import entry from "./../images/entry.png";
import machine from "./../images/machine.png";
import cigarettesPack from "./../images/cigarettes-pack.png";
import ReactPlayer from "react-player";

export default function HomePage() {
  return (
    <div>
      {/* HEADER */}
      <div className="HomeHeader">
        <div className="Front">
          <img className="FrontImage" src={front} alt="front" />
        </div>

        <div className="PrincipalTitleContainer"></div>
        <h1 className="PrincipalTitle">
          Royal Cigarette Factory "La Honradez"
        </h1>
        <h3>CATALOG OF CIGARETTE PACKS</h3>
        <div className="Paragraph">
          <p>
            The origin of collecting tobacco and cigarette labels dates back,
            mainly, to the 19th century, due to the boom in tobacco production
            at that time and the development of lithographic art based on the
            marketing of these products. A great promoter of the habit of
            collecting was the Cuban cigarette factory La Honradez, a pioneer in
            the production of colorful cigarette wrappers known today as
            "marquillas cigrreras". Through cute and sometimes satirical
            drawings, these wrappers reflect the customs of their time.
          </p>
          <p>
            This catalog is a compilation of some of those few pieces that are
            still preserved today, treasured, mainly, in collections in Cuba and
            Spain.
          </p>
        </div>
      </div>

      {/* VIDEO */}
      <div className="DescriptionWebSite">
        <h4>
          Let's talk a little more about "La Honradez" and "marquillas
          cigarreras" !!!
        </h4>
        <p>
          If you want to know a little more about the cigarette mask factory, La
          Honradez, its collections, you can register on this site and have
          access to more detailed information. In any case, if you prefer to at
          least have a general idea of this knowledge, you can review the
          following topics on this page:
        </p>
        <a className="TopicLink" href="#visit">
          <p className="SubTitle">
            <strong>A visit to the Factory</strong>
          </p>
        </a>
        <a className="TopicLink" href="#industry">
          <p className="SubTitle">
            <strong>An Industrial Development Model</strong>
          </p>
        </a>
        <a className="TopicLink" href="#marquillas">
          <p className="SubTitle">
            <strong>The collectibles: An Advertising Strategy</strong>
          </p>
        </a>
      </div>
      <div className="Video">
        <ReactPlayer
          width="100%"
          height="400px"
          url="https://youtu.be/KtAlk7YSnCY"
          playing
        />
      </div>

      {/* BODY */}
      <div>
        {/* TEXT-SECTIONS */}
        <div className="TextCards">
          <div className="ImageTitleContainer">
            <img id="visit" className="ImageTextCard" src={entry} alt="entry" />
            <h3>A visit to the Factory</h3>
          </div>
          <div>
            <p>
              Like a living museum, the La Honradez factory opened its doors to
              all visitors interested in learning about the manufacturing
              process of cigarettes and their wrappers. One of the series of
              labels produced by the factory itself shows these routes. The
              series "A visit to the La Honradez factory" allows us to
              appreciate the different departments, the machinery used for
              production. It is curious to see in these images that the main
              employees were Chinese immigrants who lived inside the buildings
              themselves, and that each visitor, who was asked for their name
              when entering, was given a personalized cigarette pack when
              leaving.
            </p>
          </div>
        </div>

        <div className="TextCards">
          <div className="ImageTitleContainer">
            <img
              id="industry"
              className="ImageTextCard"
              src={machine}
              alt="machine"
            />
            <h3>An Industrial Development Model</h3>
          </div>
          <div>
            <p>
              The application of scientific and technological advances based on
              cigarette production favored La Honradez became an industrial
              model of reference universal. The use of steam as a driving force
              made it possible to mechanize the activities of sift the pit, cut
              the paper and saw the wood for barrels and boxes. Also, it allowed
              innovatively automated cigarette rolling. Susini, the owner of the
              factory, invented his own machine to roll them. This invention was
              exhibited at the Universal Exhibition in Paris in 1867.
            </p>
            <p>
              Although the first public electric lighting system in Havana has
              been attributed to the Spanish engineer José Dalmau, who in 1877
              made a failed attempt when he did not have a steam engine with
              sufficient power,18 it is very revealing that La Honradez
              premiered the night of October 29, 1865 a lighting system similar
              to those recently approved by the Ministry of Public Works in
              France. In addition to lighting their own workshops, that electric
              light covered the Plazuela de Santa Clara in Havana intramuros,
              where the factory was located.
            </p>
          </div>
        </div>

        <div className="TextCards">
          <div className="ImageTitleContainer">
            <img
              id="marquillas"
              className="ImageTextCard"
              src={cigarettesPack}
              alt="cigarettesPack"
            />
            <h3>The collectibles: An Advertising Strategy</h3>
          </div>
          <div>
            <p>
              As an advertising strategy and as functional packaging, the
              colorful luxury boxes emerged, today known as cigarette labels.
              These measured 12 x 8.5 cm. and contained between 20 and 25
              cigarettes. this rolled up was fixed with glue, so that the upper
              side would be sealed with folds, while by the cigarettes could be
              removed from the bottom. As to its graphic design, the labels are
              made up of three sections: border, emblem and scene. L-shaped, the
              border occupies the upper and lower fringes. left, full of
              different allegories that are usually related to the series to
              which the label belongs. The emblem, on the right, has the company
              data: brand, logo, slogan, factory location and names of the
              owners. Occupying the center of the pack is the scene, which
              usually represents an action, story or event. As for the
              iconography, present drawings, sometimes caricatures, and recreate
              a wide range of topics related to everyday life, emphasizing the
              expressions of popular roots: religious, artistic, sports,
              commercial or simply mundane.
            </p>
            <p>
              Collecting arises as a purpose of the production of packs
              themselves, since these were made in continuous series, whose
              pieces in many cases narrated stories of daily events, or
              completed knowledge on a specific topic. In addition, the company
              itself sold albums for the collection of the pieces. Some of these
              collections are kept in holdings of institutions such as the
              Colonial Museum and the Archive Historical, both from the Office
              of the Historian of La Havana (OHH), and in the National Library
              of Spain, in Madrid. Within these funds, the predominant the
              labels of the La Honradez factory, above of other trademarks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
