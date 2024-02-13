const cardData =[
    {
        number: '01',
        heading: 'Flexible Learning Schedule',
        body: 'Fit your coursework around your existing commitments and obligations.',
        icon:`<img src="image/Icon (3).svg" alt="">`
    },
    {
        number: '02',
        heading: 'Flexible Learning Schedule',
        body: 'Fit your coursework around your existing commitments and obligations.',
        icon:`<img src="image/Icon (3).svg" alt="">`
    },    {
        number: '03',
        heading: 'Flexible Learning Schedule',
        body: 'Fit your coursework around your existing commitments and obligations.',
        icon:`<img src="image/Icon (3).svg" alt="">`
    },    {
        number: '04',
        heading: 'Flexible Learning Schedule',
        body: 'Fit your coursework around your existing commitments and obligations.',
        icon:`<img src="image/Icon (3).svg" alt="">`
    },    {
        number: '05',
        heading: 'Flexible Learning Schedule',
        body: 'Fit your coursework around your existing commitments and obligations.',
        icon:`<img src="image/Icon (3).svg" alt="">`
    },    {
        number: '06',
        heading: 'Flexible Learning Schedule',
        body: 'Fit your coursework around your existing commitments and obligations.',
        icon:`<img src="image/Icon (3).svg" alt="">`
    },
]
const postCard = document.querySelector('.cardContainer');
const postMethod = ()=> {
    cardData.map((postData) => {
        console.log(postData)
        const postElement = document.createElement('div');
        postElement.classList.add('cardEle');
        postElement.innerHTML = `
        <div class="cardOne" >${postData.number}</div>
        <div class="cardBody" >
            <div class="title" >${postData.heading}</div>
            <div class="text">${postData.body}</div>
        </div>
        <div class="cardFooter" >
           <div class="iconestyle" >
             ${postData.icon}
           </div> 
        </div>  `
        postCard.appendChild(postElement)
    })
}
postMethod()

const cardData1 =[
    {
        icons: `<img src="image/Image.svg" alt="">`,
        period: '4 Weeks',
        type:'Beginner',
       creator:'By John Smith',
        heading: 'Mobile App Development',
        body: 'Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin..',
        button:'<div class="Now">Get it Now</div>',
    },
    {
        icons: `<img src="image/Image (2).svg" alt="">`,
        period: '6 Weeks',
        type:'Intermediate',
          creator:'By Emily Johnson',
        heading: 'UI/UX Design',
        body: 'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.',
        button:'<div class="Now">Get it Now</div>',
    },
    {
        icons: `<img src="image/Image (3).svg" alt="">`,
        period: '10 Weeks',
        type:'Beginner',
        creator:'By David Brown',
        heading: 'Mobile App Development',
        body: 'Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.',
        button:'<div class="Now">Get it Now</div>',
    }, {
        icons: `<img src="image/Image (4).svg" alt="">`,
        period: '10 Weeks',
        type:'Beginner',
          creator:'By Sarah Thompson',
        heading: 'Graphic Design for Beginners',
        body: 'Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.',
        button:'<div class="Now">Get it Now</div>',
    },
    {
        icons: `<img src="image/Image (5).svg" alt="">`,
        period: '10 Weeks',
        type:'Intermediate',
          creator:'By Michael Adams',
        heading: 'Front-End Web Development',
        body: 'Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.',
        button:'<div class="Now">Get it Now</div>',
    },
    {
        icons: `<img src="image/Image (6).svg" alt="">`,
        period: '6 Weeks',
        type:'Advance',
        creator:'By Jennifer Wilson',
        heading: 'Advanced JavaScript',
        body: 'Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.',
        button:'<div class="Now">Get it Now</div>',
    }
   
]
const postCard1 = document.querySelector('.cardContainerOne');
const postMethod1 = ()=> {
    cardData1.map((postData1) => {
        console.log(postData1)
        const postElement1 = document.createElement('div');
        postElement1.classList.add('cardEle1');
        postElement1.innerHTML = `
        <div class="cardimge">${postData1.icons}</div>
        <div class="cardData">
           <div class="card-Btns">
               <button class="period">${postData1.period}</button>
               <button class="type">${postData1.type}</button>
             
            </div>
            <span class="creator">${postData1.creator}</span>
           
        </div>
        <div class="cardtext">
           <div class="title">${postData1.heading}</div>
           <div class="text">${postData1.body}</div>
        </div>
   
       <div class="borderButton" >
           <div class="Now">${postData1.button}</div>
       </div>
      `
        postCard1.appendChild(postElement1)
    })
}
postMethod1()
// 
const cardData2 =[
    {
        

     body3:'The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!',
        icons3: ` <img  class="imag" src="image/Image (7).svg" />`,
        type3:'Sarah L',
        button3:'<div class="Now">Read Full Story</div>',
    },
    {
        body3:'The UI/UX design course exceeded my expectations. The instructors expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!',
        icons3: ` <img  class="imag" src="image/Image (1).svg" />`,
        type3:'Jason M',
        button3:'<div class="Now">Read Full Story</div>',
    },{
        

        body3:'The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I am now building my own app. Great course!',
           icons3: ` <img  class="imag" src="image/Image (8).svg" />`,
           type3:'Emily R',
           button3:'<div class="Now">Read Full Story</div>',
       },
       {
           body3:'I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructors guidance and feedback improved my design abilities significantly I am grateful for this course!',
           icons3: ` <img  class="imag" src="image/Image (9).svg" />`,
           type3:'Michael K',
           button3:'<div class="Now">Read Full Story</div>',
       }
   
]
const postCard2 = document.querySelector('.cardContainerTwo');
const postMethod2 = ()=> {
    cardData2.map((postData2) => {
        console.log(postData2)
        const postElement2= document.createElement('div');
        postElement2.classList.add('cardEle2');
        postElement2.innerHTML = `
        <div class="design">
        <div class="designParagraph" >${postData2.body3}</div>
    </div>
    <div class="rolle" ></div>
    <div class="borderCard">
        <div class="borderImage" >
        ${postData2.icons3}
            <div class="rowImage">${postData2.type3}</div>
        </div>
        <div class="borderFullStory" >
            <div class="fullStory" >${postData2.button3}</div>
        </div>
    </div>
</div>
      `
        postCard2.appendChild(postElement2)
    })
}
postMethod2()

