const cardData2 =[
    {
        icons3: `<img src="image/Objects & Tools (2).svg" alt="">`,
       
        type3:'Trusted by Thousands',
     body3:'We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.',
  
    },
    {
     
        icons3:`<img src="image/medal.fill (1).svg" alt="">`,
        type3:'Award-Winning Courses',
        body3:'Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.',

     
    },{
     
        icons3: `<img src="image/objects.svg" alt="">`,
        type3:'Positive Student Feedback',
        body3:'We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.',
       
       },
    {
        icons3: `<img src="image/Objects & Tools (3).svg" alt="">`,
       
        type3:'Industry Partnerships',
           body3:'We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies',
         
       }
   
]
const postCard2 = document.querySelector('.cardContainerTwo');
const postMethod2 = ()=> {
    cardData2.map((postData2) => {
        console.log(postData2)
        const postElement2= document.createElement('div');
        postElement2.classList.add('cardEle2');
        postElement2.innerHTML = `
        <div class="designs">
        <div class="borderCards">
        <div class=",">
        ${postData2.icons3}
        </div>
        <div class="borderImages" >
       
            <div class="rowImages">${postData2.type3}</div>
        </div>
        <div class="designParagraphs" >${postData2.body3}</div>
    </div>

    
       
    </div>
</div>
      `;
        postCard2.appendChild(postElement2)
    })
}
postMethod2()

const cardData =[
    {
        icons3: `<img src="image/backpack.fill.svg" alt="">`,
       
        type3:'Provide Practical Skills',
     body3:'We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.',
  
    },
    {
        icons3: `<img src="image/Objects & Tools (4).svg" alt="">`,
       
        type3:'Foster Creative Problem-Solving',
        body3:'We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation',

     
    },{
        icons3: `<img src="image/Objects & Tools (5).svg" alt="">`,
       
        type3:'Promote Collaboration and Community',
        body3:'We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.',
       
       },
    {
        icons3: `<img src="image/Objects & Tools (6).svg" alt="">`,
       
        type3:'Stay Ahead of the Curve',
           body3:'The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.',

           
       
   
       }
   
]
const postCard = document.querySelector('.cardContainerFour');
const postMethod = ()=> {
    cardData.map((postData) => {
        console.log(postData)
        const postElement= document.createElement('div');
        postElement.classList.add('cardEle2');
        postElement.innerHTML = `
        <div class="designs">
        <div class="borderCards">
        <div class="icone">
        ${postData.icons3}
        </div>
        <div class="borderImages" >
       
            <div class="rowImages">${postData.type3}</div>
        </div>
        <div class="designParagraphs" >${postData.body3}</div>
    </div>

    
       
    </div>
</div>
      `
        postCard.appendChild(postElement)
    })
}
postMethod()
