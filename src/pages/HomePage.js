import React from "react";
import front from "./../images/front.jpg";
import entry from "./../images/entry.png";
import machine from "./../images/machine.png";
import cigarettesPack from "./../images/cigarettes-pack.png";

export default function HomePage() {
  return (
    <div>
      {/* HEADER */}
      <div className="Home-Header">
        <img className="Front" src={front} alt="front" />
        <h1 className="Principal-Title">
          Royal Cigarette Factory "La Honradez"
        </h1>
        <h3>CATALOG OF CIGARRTTE PACKS</h3>
        <div className="Paragraph">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
            doloremque dicta. Totam numquam consectetur eum quos. Illum porro
            voluptas hic et eum fugit nobis? Animi praesentium commodi ex
            provident sit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Obcaecati voluptate molestias explicabo beatae corrupti? Culpa
            praesentium ducimus, vel illo doloribus modi perspiciatis
            necessitatibus autem, molestiae enim iusto doloremque maiores
            reprehenderit. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
      </div>

      {/* BODY */}
      <div>
        {/* TEXT-SECTIONS */}
        <div className="Home-Body">
          <div>
            <div className="Text-Cards">
              <img className="Image-Text-Card" src={entry} alt="entry" />
              <div>
                <h3>A visit to the Factory</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Esse, doloremque dicta. Totam numquam consectetur eum quos.
                  Illum porro voluptas hic et eum fugit nobis? Animi praesentium
                  commodi ex provident sit. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Obcaecati voluptate molestias
                  explicabo beatae corrupti? Culpa praesentium ducimus, vel illo
                  doloribus modi perspiciatis necessitatibus autem, molestiae
                  enim iusto doloremque maiores reprehenderit. Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Blanditiis ex,
                  mollitia aspernatur sit atque totam recipisicing elit.
                  Obcaecati voluptate molestias explicabo beatae corrupti? Culpa
                  praesentium ducimus, vel illo doloribus modi perspiciatis
                  necessitatibus autem, molestiae enim iusto doloremque maiores
                  reprehenderit. Lorem ipsum, dolor sit amet consectetur
                  adipisicingusandae necessitatibus, deleniti excepturi dicta
                  nulla neque fugiat ipsam voluptas voluptate, odio dignissimos.
                  Repellendus, deserunt.
                </p>
              </div>
            </div>
            <div className="Text-Cards">
              <img className="Image-Text-Card" src={machine} alt="machine" />
              <div>
                <h3>An Industrial Development Model</h3>
                <p>
                  Sipsum dolor, sit amet consectetur adipisicing elit. Esse,
                  doloremque dicta. Totam numquam consectetur eum quos. Illum
                  porro voluptas hic et eum fugit nobis? Animi praesentium
                  commodi ex provident sit. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Obcaecati voluptate molestias
                  explicabo beatae corrupti? Culpa praesentium ducimus, vel illo
                  doloribus modi perspiciatis necessitatibus autem, molestiae
                  enim iusto doloremque maiores reprehenderit. Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Blanditiis ex,
                  mollitia aspernatur sit atque totam recusandae necessitatibus,
                  deleniti excepturi dicta nulla neque fugiat ipsam voluptas
                  voluptate, odio dignissimos. Repellendus, deserunt.
                </p>
              </div>
            </div>
            <div className="Text-Cards">
              <img
                className="Image-Text-Card"
                src={cigarettesPack}
                alt="cigarettesPack"
              />
              <div>
                <h3>The collectibles: An Advertising Strategy</h3>
                <p>
                  Sipsum dolor, sit amet consectetur adipisicing elit. Esse,
                  doloremque dicta. Totam numquam consectetur eum quos. Illum
                  porro voluptas hic et eum fugit nobis? Animi praesentium
                  commodi ex provident sit. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Obcaecati voluptate molestias
                  explicabo beatae corrupti? Culpa praesentium ducimus, vel illo
                  doloribus modi perspiciatis necessitatibus autem, molestiae
                  enim iusto doloremque maiores reprehenderit. Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Blanditiis ex,
                  mollitia aspernatur sit atque totam recusandae necessitatibus,
                  deleniti excepturi dicta nulla neque fugiat ipsam voluptas
                  voluptate, odio dignissimos. Repellendus, deserunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="Video">
        <video src={video}/>
      </div>*/}
    </div>
  );
}
