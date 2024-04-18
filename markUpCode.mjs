/*
all HTML and CSS as JS string
*/

export default class MarkUpCode {

	// helper
	static getHtmlTemplate(source) {
		const t = document.createElement('template')
		t.innerHTML = source
		return t.content
	}

  static html() {
    return `
    <link  href="./redist/ecl/ecl-eu.css" rel="stylesheet"/>

    <div id="bg" style="display: none;
      position: fixed;
      z-index: 1;
      padding-top: 100px;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4);">
    </div>


<div class="ecl-message ecl-message--info" data-ecl-message="" role="alert" id="main" style="
	display:none;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index:10;">

  <span style="display:flex;">

    <svg class="ecl-icon ecl-icon--m ecl-message__icon" focusable="false" aria-hidden="true" >
      <use xlink:href="./redist/ecl/icons.svg#information"></use>
    </svg>
    <div class="ecl-message__content">
      <button class="ecl-button ecl-button--ghost ecl-message__close" type="button" data-ecl-message-close id="button">
        <span id="close" class="ecl-button__container" style="display:flex;">
          <span class="ecl-button__label" data-ecl-label="true">Close</span>
          <svg class="ecl-icon ecl-icon--s ecl-button__icon ecl-button__icon--after" focusable="false" aria-hidden="true" data-ecl-icon>
            <use xlink:href="./redist/ecl/icons.svg#close-filled"></use>
          </svg>
        </span>
      </button>
      <div class="ecl-message__title" id="header">Information message</div>
      <div class="ecl-message__description" id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan semper lorem, ac mollis lacus tincidunt eu. Duis scelerisque diam eu tempus fringilla.</div>
    </div>

  <span>

  </div>


    `
  }

 

  static css() {
    return `
    <style>
    </style>   
    `
  }

}
