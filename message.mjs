import MarkUpCode from  "./markUpCode.mjs"		// keep this file html/css free


class Element extends HTMLElement {
	constructor() {	
		super()	
		this.attachShadow({mode: 'open'})
		const tmp = MarkUpCode.getHtmlTemplate(MarkUpCode.html()).cloneNode(true)
		this.shadowRoot.appendChild(tmp)

		this.shadowRoot.getElementById("close").addEventListener("click", e=> {this.hide()})
		this.shadowRoot.getElementById("close").addEventListener("keydown", e=> {if(e.key=="Enter" || e.key=="Escape") {this.hide()}} )
	}

	setText(val) {
		this.shadowRoot.getElementById("text").innerHTML=val
	}
	setHeader(val) {
		this.shadowRoot.getElementById("header").innerHTML=val
	}
	show(showClose=true, timeout=7000) {
		this.shadowRoot.getElementById("close").style.display=showClose?"flex":"none"
		this.shadowRoot.getElementById("bg").style.display="block"
		this.shadowRoot.getElementById("main").style.display="block"
		if(timeout) {	setTimeout(()=>this.hide(), timeout) }
		this.shadowRoot.getElementById("close").focus()
	}
	hide() {
		this.shadowRoot.getElementById("main").style.display="none"
		this.shadowRoot.getElementById("bg").style.display="none"
	}


}

window.customElements.define('ecl-like-message', Element)
