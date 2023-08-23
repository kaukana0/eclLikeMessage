import MarkUpCode from  "./markUpCode.mjs"		// keep this file html/css free


class Element extends HTMLElement {
	constructor() {	
		super()	
		this.attachShadow({mode: 'open'})
		const tmp = MarkUpCode.getHtmlTemplate(MarkUpCode.html()).cloneNode(true)
		this.shadowRoot.appendChild(tmp)
		this.shadowRoot.getElementById("button").addEventListener("click", e=> {
			this.hide()
		})
	}

	setText(val) {
		this.shadowRoot.getElementById("text").innerHTML=val
	}
	setHeader(val) {
		this.shadowRoot.getElementById("header").innerHTML=val
	}
	show() {
		this.shadowRoot.getElementById("main").style.display="block"
		setTimeout(()=>this.hide(), 7000)
	}
	hide() {
		this.shadowRoot.getElementById("main").style.display="none"
	}


}

window.customElements.define('ecl-like-message', Element)
