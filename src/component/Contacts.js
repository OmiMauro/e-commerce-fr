import React from 'react';

const Contacts = () => {
  return (
    <>
      <div class="px-4 py-5 my-5 text-center">
        <img class="d-block mx-auto mb-4" src="assets/bootstrap-logo.svg" alt="" width="72" height="57" />
        <h1 class="display-5 fw-bold">Donde Estoy</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Link to google maps</button>
          </div>
        </div>
      </div>

      <div class="b-example-divider"></div>

      <div class="px-4 pt-5 my-5 text-center border-bottom">
        <h1 class="display-4 fw-bold">Medios de contacto</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
          </div>
        </div>
        <div class="overflow-hidden" style={{ 'max-height': '30vh' }}>
          <div class="container px-5">
            <img src="assets/bootstrap-docs.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
          </div>
        </div>
      </div>
    </>
  );
};

export { Contacts };