const template = document.createElement('template');
template.innerHTML = `
  <style>
    .student-info {
      width: 250px;
    }
    .student-info h2{
      color: violet;
      margin : 0;
    }
  </style>
  <div class="student-info">
      <h2></h2>
      <div class="details">
        <p><slot name="id"/></p>
        <p><slot name="class"/></p>
      </div>
  </div>`;
    
class StudentInfo extends HTMLElement{
  constructor(){
      super();
      this.attachShadow({ mode: 'open'});
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name');
  } 

  connectedCallback(){
    this.h2 = this.getAttribute("name")
    this.render();
  }

  render(){
    this.h2;
  }
}
customElements.define('student-info', StudentInfo);