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
	show(showClose=true, timeout=7000) {
		this.shadowRoot.getElementById("close").style.display=showClose?"block":"none"
		this.shadowRoot.getElementById("bg").style.display="block"
		this.shadowRoot.getElementById("main").style.display="block"
		if(timeout) {	setTimeout(()=>this.hide(), timeout) }
	}
	hide() {
		this.shadowRoot.getElementById("main").style.display="none"
		this.shadowRoot.getElementById("bg").style.display="none"
	}


}

window.customElements.define('ecl-like-message', Element)
