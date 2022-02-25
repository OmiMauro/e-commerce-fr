import React from 'react';

const AboutUs = () => {
  return (
    <div class="container px-4 py-5" id="featured-3">
      <h2 class="pb-2 border-bottom">Sobre nosotros</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <div class="feature-icon bg-gradient">
            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
            {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#collection" /></svg> */}
          </div>
          <h2>Lorena Omiñuka</h2>
          <p>Estudié en la UBA bla bla bla.....
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur at voluptate facilis ducimus veniam molestias sapiente natus adipisci, vel reiciendis! Minus atque quae doloribus laborum aut accusantium maxime dolore fuga!
          </p>
          {/* <a href="#" class="icon-link">
            Call to action
            <svg class="bi" width="1em" height="1em"><use xlink:href="#chevron-right" /></svg>
          </a> */}
        </div>
        <div class="feature col">
          <div class="feature-icon bg-gradient">
            <i class="fa fa-tint" aria-hidden="true"></i>

            {/*  <svg class="bi" width="1em" height="1em"><use xlink:href="#people-circle" /></svg> */}
          </div>
          <h2>Diseñadora de Ropa </h2>
          <p>bla bla bla bla....
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit est voluptatum voluptatibus repellendus eum laboriosam impedit modi, nostrum sequi nam soluta doloremque facere officia, id, natus nobis? Porro, cupiditate!
          </p>
          {/*    <a href="#" class="icon-link">
            Call to action
            <svg class="bi" width="1em" height="1em"><use xlink:href="#chevron-right" /></svg>
          </a> */}
        </div>
        <div class="feature col">
          <div class="feature-icon bg-gradient">
            <i class="fa fa-tags" aria-hidden="true"></i>

            {/*    <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2" /></svg> */}
          </div>
          <h2>Confeccion de prendas </h2>
          <p>bla bla bla bla ....
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum culpa perspiciatis optio hic ea ad, impedit repellendus, corrupti sed sequi quos blanditiis id eaque aperiam perferendis libero officiis non adipisci.
          </p>
          {/*  <a href="#" class="icon-link">
            Call to action
            <svg class="bi" width="1em" height="1em"><use xlink:href="#chevron-right" /></svg>
          </a> */}
        </div>
      </div>
    </div>

  );
};

export { AboutUs }