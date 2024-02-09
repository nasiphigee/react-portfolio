import React from "react";
/* Example: src/styles/styles.css */
import '~@fortawesome/fontawesome-free/css/all.css';
import { facalendar } from '@fortawesome/free-solid-svg-icons';
import "./about.css";
export const About = () => {
  return (
    <div class="row">
        <div class="col-lg-6">
          <h3 class="resume-title">About Me</h3>
          <div class="resume-item pb-0">
            <h4>I'm Nasiphi Gwija</h4>
            <p><em> I'm a software developer with a passion for crafting digital experiences that are not only functional but also delightful.
                    My coding journey began with the excitement of creating my first 'Hello World' program, and it has since evolved into a love
                     affair with both front-end and back-end technologies.</em></p>
          <h3 class="resume-title">Education</h3>
          <i class="fa-solid fa-calendar-days"></i>
          <h5>2014-2017</h5>
          <div class="resume-item">
            <h4>BSc in IT @ Richield Graduate Institute of technology</h4>
            <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
            <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
          </div>
          <div class="resume-item">
            <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
            <h5>2010 - 2014</h5>
            <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
            <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
          </div>
        </div>
        <div class="col-lg-6">
          <h3 class="resume-title">Professional Experience</h3>
          <div class="resume-item">
            <h4>Senior graphic design specialist</h4>
            <h5>2019 - Present</h5>
            <p><em>Experion, New York, NY </em></p>
            <p>
            <ul>
              <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
              <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
              <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
              <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
            </ul>
            </p>
          </div>
          <div class="resume-item">
            <h4>Graphic design specialist</h4>
            <h5>2017 - 2018</h5>
            <p><em>Stepping Stone Advertising, New York, NY</em></p>
            <p>
            <ul>
              <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
              <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
              <li>Recommended and consulted with clients on the most appropriate graphic design</li>
              <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
            </ul>
            </p>
          </div>
        </div>
        </div>
        </div>
  );
};

export default About