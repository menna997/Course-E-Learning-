const cardData =[
    {
        
        number: '01',
        heading: 'Introduction to UI/UX Design',
        body: 'Fit your coursework around your existing commitments and obligations.',
    
    },
    {
        number: '02',
        heading: 'User Research and Analysis',
        body: 'Fit your coursework around your existing commitments and obligations.',
  
    },    {
        number: '03',
        heading: '  Wireframing and Prototyping',
        body: 'Fit your coursework around your existing commitments and obligations.',

    },    {
        number: '04',
        heading: ' Visual Design and Brandon',
        body: 'Fit your coursework around your existing commitments and obligations.',

    },    {
        number: '05',
        heading: 'Usability Testing and Iteration',
        body: 'Fit your coursework around your existing commitments and obligations.',

    }
]
const postCard = document.querySelector('.cardContainerOne');
const postMethod = ()=> {
    cardData.map((postData) => {
        console.log(postData)
        const postElement = document.createElement('div');
        postElement.classList.add('cardEle1');
        postElement.innerHTML = `
        <div class="cardOne" >${postData.number}</div>
        <div class="cardBody" >
        
 
    
            <div class="title" >${postData.heading}</div>
            
        </div>
      <div class="cardsOne">
     
        <div class="cardRow">
          
            <div class="Access">Access to selected
                free courses.</div>
                <button class="type">1 Hour</button>
                <span>lesson 01</span>
        </div>
        <div class="cardRow">
           
            <div class="Access">
                Limited course materials and
                resources.
            </div>
            <button class="type">1 Hour</button>
     <span>lesson 01</span>

        </div>
       
       
        
        <div class="cardRow">
        
            <div class="Access">
                Early access to new courses and
                updates.
            </div>
            <button class="type">1 Hour</button>
            <span>lesson 01</span>
        </div>
    </div>
          `
        postCard.appendChild(postElement)
    })
}
postMethod()
