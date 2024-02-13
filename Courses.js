const cardData =[
    {
        icon: `<img src="image/Image (10).svg" />`,
        icon2: `<img src="image/Image (11).svg" />`,
        icon3: `<img src="image/Image (12).svg" />`,
        period: '4 Weeks',
        type:'Beginner',
        creator: 'By John Smith',
        heading:'Curriculum',
        number: '01',

        body: 'Introduction to HTML.',
        number2: '02',

        body2: 'Styling with CSS',
        number3: '03',

        body3: 'Introduction to Responsive Design',
        number4 :'04',

        body4: 'Design Principles for Web',
        number5: '05',

        body5: 'Building a Basic Website',
     
    },
]
const postCard = document.querySelector('.rowTx');
const postMethod = ()=> {
    cardData.map((postData) => {
        console.log(postData)
        const postElement = document.createElement('div');
        postElement.classList.add('cardElems');
        postElement.innerHTML = `
        <div class="borderImg">
        ${postData.icon}
        ${postData.icon2}
        ${postData.icon3}
        </div>
        
        <div class="rowName" >
            <div class="borderName" >
                <div class="rowBeginner" >
                    <div class="btnBeginner" >   ${postData.period}</div>
                </div>
                <div class="rowBeginner" >
                    <div class="btnBeginner" >   ${postData.type}</div>
                </div>
            </div>
            <div class="btnName"> ${postData.creator}</div>
        </div>
        <div class="borderCurriculum">
        <div class="rowCurriculum">
            <div class="curriculum">   ${postData.heading}</div>
        </div>
    
        <div class="rowOnes" >
            <div class="borderIntroduction" >
                <div class="BorderOne" >   ${postData.number}</div>
                <div class="Introduction" >   ${postData.body}</div>
            </div>

            <div class="borderIntroduction" >
                <div class="BorderOne" > ${postData.number2}</div>
                <div class="Introduction" >${postData.body}</div>
            </div>
          
            <div class="borderIntroduction" >
                <div class="BorderOne" > ${postData.number3}</div>
                <div class="Introduction" >${postData.body3}</div>
            </div>
            <div class="borderIntroduction" >
                <div class="BorderOne" > ${postData.number4}</div>
                <div class="Introduction" >${postData.body4}</div>
         
           
                </div>
            <div class="borderIntroduction" >
                
                <div class="BorderOne" > ${postData.number5}</div>
                <div class="Introduction" >${postData.body5}</div>
            </div>
        </div>
        </div> `
        postCard.appendChild(postElement)
    })
}
postMethod()
const cardData2 =[
    {
        icon: `<img src="image/Image (15).svg" />`,
        icon2: `<img src="image/Image (14).svg" />`,
        icon3: `<img src="image/Image (13).svg" />`,
        period: '6 Weeks',
        type:'Intermediate',
        creator: 'By Emily Johnson',
        heading:'Curriculum',
        number: '01',

        body: 'Introduction to UI/UX Design',
        number2: '02',

        body2: 'User Research and Personas',
        number3: '03',

        body3: 'Wireframing and Prototyping',
        number4 :'04',

        body4: 'Visual Design and Branding',
        number5: '05',

        body5: 'Usability Testing and Iteration',
     
    },
]
const postCard2 = document.querySelector('.rowTxOne');
const postMethod2 = ()=> {
    cardData2.map((postData2) => {
        console.log(postData2)
        const postElement2 = document.createElement('div');
        postElement2.classList.add('cardElems1');
        postElement2.innerHTML = `
        <div class="borderImg">
        ${postData2.icon}
        ${postData2.icon2}
        ${postData2.icon3}
        </div>
        
        <div class="rowName" >
        <div class="borderName" >
            <div class="rowBeginner" >
                <div class="btnBeginner" >   ${postData2.period}</div>
            </div>
            <div class="rowBeginner" >
                <div class="btnBeginner" >   ${postData2.type}</div>
            </div>
        </div>
        <div class="btnName"> ${postData2.creator}</div>
    </div>
    <div class="borderCurriculum">
    <div class="rowCurriculum">
        <div class="curriculum">   ${postData2.heading}</div>
    </div>

    <div class="rowOnes" >
        <div class="borderIntroduction" >
            <div class="BorderOne" >   ${postData2.number}</div>
            <div class="Introduction" >   ${postData2.body}</div>
        </div>

        <div class="borderIntroduction" >
            <div class="BorderOne" > ${postData2.number2}</div>
            <div class="Introduction" >${postData2.body}</div>
        </div>
      
        <div class="borderIntroduction" >
            <div class="BorderOne" > ${postData2.number3}</div>
            <div class="Introduction" >${postData2.body3}</div>
        </div>
        <div class="borderIntroduction" >
            <div class="BorderOne" > ${postData2.number4}</div>
            <div class="Introduction" >${postData2.body4}</div>
     
       
            </div>
        <div class="borderIntroduction" >
            
            <div class="BorderOne" > ${postData2.number5}</div>
            <div class="Introduction" >${postData2.body5}</div>
        </div>
    </div>
    </div> `
        postCard2.appendChild(postElement2)
    })
}
postMethod2();

//
const cardData3 =[
    {
        icon: `<img src="image/Image (16).svg" />`,
        icon2: `<img src="image/Image (17).svg" />`,
        icon3: `<img src="image/Image (18).svg" />`,
        period: '4 Weeks',
        type:'Beginner',
        creator: 'By John Smith',
        heading:'Curriculum',
        number: '01',

        body: 'Introduction to HTML.',
        number2: '02',

        body2: 'Styling with CSS',
        number3: '03',

        body3: 'Introduction to Responsive Design',
        number4 :'04',

        body4: 'Design Principles for Web',
        number5: '05',

        body5: 'Building a Basic Website',
     
    },
]
const postCard3 = document.querySelector('.rowTxTwo');
const postMethod3 = ()=> {
    cardData3.map((postData3) => {
        console.log(postData3)
        const postElement3 = document.createElement('div');
        postElement3.classList.add('cardElems1');
        postElement3.innerHTML = `
        <div class="borderImg">
        ${postData3.icon}
        ${postData3.icon2}
        ${postData3.icon3}
        </div>
        
        <div class="rowName" >
        <div class="borderName" >
            <div class="rowBeginner" >
                <div class="btnBeginner" >   ${postData3.period}</div>
            </div>
            <div class="rowBeginner" >
                <div class="btnBeginner" >   ${postData3.type}</div>
            </div>
        </div>
        <div class="btnName"> ${postData3.creator}</div>
    </div>
    <div class="borderCurriculum">
    <div class="rowCurriculum">
        <div class="curriculum">   ${postData3.heading}</div>
    </div>

    <div class="rowOnes" >
        <div class="borderIntroduction" >
            <div class="BorderOne" >   ${postData3.number}</div>
            <div class="Introduction" >   ${postData3.body}</div>
        </div>

        <div class="borderIntroduction" >
            <div class="BorderOne" > ${postData3.number2}</div>
            <div class="Introduction" >${postData3.body}</div>
        </div>
      
        <div class="borderIntroduction" >
            <div class="BorderOne" > ${postData3.number3}</div>
            <div class="Introduction" >${postData3.body3}</div>
        </div>
        <div class="borderIntroduction" >
            <div class="BorderOne" > ${postData3.number4}</div>
            <div class="Introduction" >${postData3.body4}</div>
     
       
            </div>
        <div class="borderIntroduction" >
            
            <div class="BorderOne" > ${postData3.number5}</div>
            <div class="Introduction" >${postData3.body5}</div>
        </div>
    </div>
    </div> `
        postCard3.appendChild(postElement3)
    })
}
postMethod3();
//
const cardData4 =[
    {
        icon: `<img src="image/Image (24).svg" />`,
        icon2: `<img src="image/Image (23).svg" />`,
        icon3: `<img src="image/Image (19).svg" />`,
        period: '4 Weeks',
        type:'Beginner',
        creator: 'By John Smith',
        heading:'Curriculum',
        number: '01',

        body: 'Introduction to HTML.',
        number2: '02',

        body2: 'Styling with CSS',
        number3: '03',

        body3: 'Introduction to Responsive Design',
        number4 :'04',

        body4: 'Design Principles for Web',
        number5: '05',

        body5: 'Building a Basic Website',
     
    },
]
const postCard4 = document.querySelector('.rowTx3');
const postMethod4 = ()=> {
    cardData4.map((postData4) => {
        console.log(postData4)
        const postElement4 = document.createElement('div');
        postElement4.classList.add('cardElems1');
        postElement4.innerHTML = `
        <div class="borderImg">
        ${postData4.icon}
        ${postData4.icon2}
        ${postData4.icon3}
        </div>
        
        <div class="rowName" >
        <div class="borderName" >
            <div class="rowBeginner" >
                <div class="btnBeginner" >   ${postData4.period}</div>
            </div>
            <div class="rowBeginner" >
                <div class="btnBeginner" >   ${postData4.type}</div>
            </div>
        </div>
        <div class="btnName"> ${postData4.creator}</div>
    </div>
    <div class="borderCurriculum">
    <div class="rowCurriculum">
        <div class="curriculum">   ${postData4.heading}</div>
    </div>

    <div class="rowOnes" >
        <div class="borderIntroduction" >
            <div class="BorderOne" >   ${postData4.number}</div>
            <div class="Introduction" >   ${postData4.body}</div>
        </div>

        <div class="borderIntroduction" >
            <div class="BorderOne" > ${postData4.number2}</div>
            <div class="Introduction" >${postData4.body}</div>
        </div>
      
        <div class="borderIntroduction" >
            <div class="BorderOne" > ${postData4.number3}</div>
            <div class="Introduction" >${postData4.body3}</div>
        </div>
        <div class="borderIntroduction" >
            <div class="BorderOne" > ${postData4.number4}</div>
            <div class="Introduction" >${postData4.body4}</div>
     
       
            </div>
        <div class="borderIntroduction" >
            
            <div class="BorderOne" > ${postData4.number5}</div>
            <div class="Introduction" >${postData4.body5}</div>
        </div>
    </div>
    </div> `
        postCard4.appendChild(postElement4)
    })
}
postMethod4();

//
const cardData5 =[
    {
        icon: `<img src="image/Image (25).svg" />`,
        icon2: `<img src="image/Image (21).svg" />`,
        icon3: `<img src="image/Image (12).svg" />`,
        period: '4 Weeks',
        type:'Beginner',
        creator: 'By John Smith',
        heading:'Curriculum',
        number: '01',

        body: 'Introduction to HTML.',
        number2: '02',

        body2: 'Styling with CSS',
        number3: '03',

        body3: 'Introduction to Responsive Design',
        number4 :'04',

        body4: 'Design Principles for Web',
        number5: '05',

        body5: 'Building a Basic Website',
     
    },
]
const postCard5 = document.querySelector('.rowTx4');
const postMethod5 = ()=> {
    cardData5.map((postData5) => {
        console.log(postData5)
        const postElement5 = document.createElement('div');
        postElement5.classList.add('cardElems1');
        postElement5.innerHTML = `
        <div class="borderImg">
        ${postData5.icon}
        ${postData5.icon2}
        ${postData5.icon3}
        </div>
        
        <div class="rowName" >
        <div class="borderName" >
            <div class="rowBeginner" >
                <div class="btnBeginner" >   ${postData5.period}</div>
            </div>
            <div class="rowBeginner" >
                <div class="btnBeginner" >   ${postData5.type}</div>
            </div>
        </div>
        <div class="btnName"> ${postData5.creator}</div>
    </div>
    <div class="borderCurriculum">
    <div class="rowCurriculum">
        <div class="curriculum">   ${postData5.heading}</div>
    </div>

    <div class="rowOnes" >
        <div class="borderIntroduction" >
            <div class="BorderOne" >   ${postData5.number}</div>
            <div class="Introduction" >   ${postData5.body}</div>
        </div>

        <div class="borderIntroduction" >
            <div class="BorderOne" > ${postData5.number2}</div>
            <div class="Introduction" >${postData5.body}</div>
        </div>
      
        <div class="borderIntroduction" >
            <div class="BorderOne" > ${postData5.number3}</div>
            <div class="Introduction" >${postData5.body3}</div>
        </div>
        <div class="borderIntroduction" >
            <div class="BorderOne" > ${postData5.number4}</div>
            <div class="Introduction" >${postData5.body4}</div>
     
       
            </div>
        <div class="borderIntroduction" >
            
            <div class="BorderOne" > ${postData5.number5}</div>
            <div class="Introduction" >${postData5.body5}</div>
        </div>
    </div>
    </div> `
        postCard5.appendChild(postElement5)
    })
}
postMethod5();