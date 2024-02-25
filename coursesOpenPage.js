const cardData = [
  {
    number: "01",
    heading: "Introduction to UI/UX Design",
    body: "1 Hour",
    body2: "45 Minutes",
    span: "lesson 01",
    span2: "lesson 02",
    span3: "lesson 03",
    Headers: "Understanding UI/UX Design Principles",
    Headers1: "Importance of User-Centered Design",
    Headers2: "The Role of UI/UX Design in Product Developmentd",
    icon: `<img src="image/Vector (2).svg" alt="">`,
  },
];
const postCard = document.querySelector(".cardContainerOne");
const postMethod = () => {
  cardData.map((postData) => {
    console.log(postData);
    const postElement = document.createElement("div");
    postElement.classList.add("cardEle1");
    postElement.innerHTML = `
        <div class="cardOne" >${postData.number}</div>
        <div class="cardBody" >
        
 
    
            <div class="title" >${postData.heading}</div>
            
        </div>
      <div class="cardsOne">
     
        <div class="cardRow">
          
            <div class="Access">${postData.Headers}</div>
            
                <button class="type">     ${postData.icon}${postData.body2}</button>
                <span>${postData.span}</span>
        </div>
        
        <div class="cardRow">
           
            <div class="Access">
            ${postData.Headers1}
            </div>
            <button class="type">     ${postData.icon}${postData.body}</button>
     <span>${postData.span2}</span>

        </div>
       
       
        
        <div class="cardRow">
        
            <div class="Access">
            ${postData.Headers2}
            </div>
            <button class="type">     ${postData.icon}${postData.body2}</button>
            <span>${postData.span3}</span>
        </div>
    </div>
          `;
    postCard.appendChild(postElement);
  });
};
postMethod();
//

const cardData1 = [
  {
    number: "02",
    heading: "User Research and Analysis",
    body: "1 Hour",
    body2: "45 Minutes",
    span: "lesson 01",
    span2: "lesson 02",
    span3: "lesson 03",
    Headers: "Conducting User Research and Interviews",
    Headers1: "Analyzing User Needs and Behavior",
    Headers2: "Analyzing User Needs and Behavior",
    icon: `<img src="image/Vector (2).svg" alt="">`,
  },
];
const postCard1 = document.querySelector(".cardContainerOne");
const postMethod1 = () => {
  cardData1.map((postData1) => {
    console.log(postData1);
    const postElement1 = document.createElement("div");
    postElement1.classList.add("cardEle1");
    postElement1.innerHTML = `
        <div class="cardOne" >${postData1.number}</div>
        <div class="cardBody" >
        
 
    
            <div class="title" >${postData1.heading}</div>
            
        </div>
      <div class="cardsOne">
     
        <div class="cardRow">
          
            <div class="Access">${postData1.Headers}</div>
            
                <button class="type">     ${postData1.icon}${postData1.body}</button>
                <span>${postData1.span}</span>
        </div>
        
        <div class="cardRow">
           
            <div class="Access">
            ${postData1.Headers1}
            </div>
            <button class="type">     ${postData1.icon}${postData1.body}</button>
     <span>${postData1.span2}</span>

        </div>
        <div class="cardRow">
        
            <div class="Access">
            ${postData1.Headers2}
            </div>
            <button class="type">     ${postData1.icon}${postData1.body2}</button>
            <span>${postData1.span3}</span>
        </div>
    </div>
          `;
    postCard1.appendChild(postElement1);
  });
};
postMethod1();

//
const cardData3 = [
  {
    number: "03",
    heading: "  Wireframing and Prototyping",
    body: "1 Hour",
    span: "lesson 01",
    span2: "lesson 02",
    span3: "lesson 03",
    Headers: "Introduction to Wireframing Tools and Techniques",
    Headers1: "Creating Low-Fidelity Wireframes",
    Headers2: "Prototyping and Interactive Mockups",
    icon: `<img src="image/Vector (2).svg" alt="">`,
  },
];
const postCard3 = document.querySelector(".cardContainerOne");
const postMethod3 = () => {
  cardData3.map((postData3) => {
    console.log(postData3);
    const postElement3 = document.createElement("div");
    postElement3.classList.add("cardEle1");
    postElement3.innerHTML = `
        <div class="cardOne" >${postData3.number}</div>
        <div class="cardBody" >
        
 
    
            <div class="title" >${postData3.heading}</div>
            
        </div>
      <div class="cardsOne">
     
        <div class="cardRow">
          
            <div class="Access">${postData3.Headers}</div>
                <button class="type">     ${postData3.icon}${postData3.body}</button>
                <span>${postData3.span}</span>
        </div>
        
        <div class="cardRow">
           
            <div class="Access">
            ${postData3.Headers1}
            </div>
            <button class="type">     ${postData3.icon}${postData3.body}</button>
     <span>${postData3.span2}</span>

        </div>
       
       
        
        <div class="cardRow">
        
            <div class="Access">
            ${postData3.Headers2}
            </div>
            <button class="type">     ${postData3.icon}${postData3.body}</button>
            <span>${postData3.span3}</span>
        </div>
    </div>
          `;
    postCard3.appendChild(postElement3);
  });
};
postMethod3();
//
const cardData4 = [
  {
    number: "04",
    heading: "Visual Design and Branding",
    body: "1 Hour",
    body2: "45 Minutes",
    span: "lesson 01",
    span2: "lesson 02",
    span3: "lesson 03",
    Headers: "Color Theory and Typography in UI Design",
    Headers1: "Visual Hierarchy and Layout Design",
    Headers2: "Creating a Strong Brand Identity",
    icon: `<img src="image/Vector (2).svg" alt="">`,
  },
];
const postCard4 = document.querySelector(".cardContainerOne");
const postMethod4 = () => {
  cardData4.map((postData4) => {
    console.log(postData4);
    const postElement4 = document.createElement("div");
    postElement4.classList.add("cardEle1");
    postElement4.innerHTML = `
        <div class="cardOne" >${postData4.number}</div>
        <div class="cardBody" >
        
 
    
            <div class="title" >${postData4.heading}</div>
            
        </div>
      <div class="cardsOne">
     
        <div class="cardRow">
          
            <div class="Access">${postData4.Headers}</div>
            
                <button class="type">     ${postData4.icon}${postData4.body}</button>
                <span>${postData4.span}</span>
        </div>
        
        <div class="cardRow">
           
            <div class="Access">
            ${postData4.Headers1}
            </div>
            <button class="type">${postData4.icon}${postData4.body}</button>
     <span>${postData4.span2}</span>

        </div>
       
       
        
        <div class="cardRow">
        
            <div class="Access">
            ${postData4.Headers2}
            </div>
            <button class="type">${postData4.icon}${postData4.body2}</button>
            <span>${postData4.span3}</span>
        </div>
    </div>
          `;
    postCard4.appendChild(postElement4);
  });
};
postMethod4();
//
const cardData5 = [
  {
    number: "05",
    heading: "Usability Testing and Iteration",
    body: "1 Hour",
    body2: "45 Minutes",
    span: "lesson 01",
    span2: "lesson 02",
    span3: "lesson 03",
    Headers: "Usability Testing Methods and Techniques",
    Headers1: "Analyzing Usability Test Results",
    Headers2: "Iterating and Improving UX Designs",
    icon: `<img src="image/Vector (2).svg" alt="">`,
  },
];
const postCard5 = document.querySelector(".cardContainerOne");
const postMethod5 = () => {
  cardData5.map((postData5) => {
    console.log(postData5);
    const postElement5 = document.createElement("div");
    postElement5.classList.add("cardEle1");
    postElement5.innerHTML = `
        <div class="cardOne" >${postData5.number}</div>
        <div class="cardBody" >
        
 
    
            <div class="title" >${postData5.heading}</div>
            
        </div>
      <div class="cardsOne">
     
        <div class="cardRow">
          
            <div class="Access">${postData5.Headers}</div>
            
                <button class="type">         ${postData5.icon}${postData5.body}</button>
                <span>${postData5.span}</span>
        </div>
        
        <div class="cardRow">
           
            <div class="Access">
            ${postData5.Headers1}
            </div>
            <button class="type"> ${postData5.icon}${postData5.body2}</button>
     <span>${postData5.span2}</span>

        </div>
       
       
        
        <div class="cardRow">
        
            <div class="Access">
            ${postData5.Headers2}
            </div>
            <button class="type">${postData5.icon}${postData5.body2}</button>
            <span>${postData5.span3}</span>
        </div>
    </div>
          `;
    postCard5.appendChild(postElement5);
  });
};
postMethod5();
