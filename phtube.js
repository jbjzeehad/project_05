// console.log("checking the file");
const loadpage = async (searchcategory) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${searchcategory}`);
    const data = await response.json();
    const phdata = data.data;
    console.log(data.data);
    if (phdata == false) {
        console.log('No data found');
        noDatafound(phdata);
    }
    else {
        phTubeVideoCard(phdata);
    }
};
const phTubeVideoCard = phVideos => {
    const videoShowCard = document.getElementById('videoCard');
    videoShowCard.textContent = "";
    phVideos.forEach(showvideo => {
        // console.log(showvideo);
        const videocard = document.createElement('div');
        videocard.classList = `card card-compact border border-red-500 grid grid-cols-1`;
        videocard.innerHTML = `
        <div class="1 border">
            <figure class="w-30" ><img  src="${showvideo.thumbnail}" alt="videoThumnail"/></figure>
        </div>
        <div class="border card-body grid grid-cols-2">
            <div class ="border prfl-img ">
                <img class="border rounded-full w-10 h-10" src="${showvideo.authors[0].profile_picture}" alt="prf" />
            </div>
            <div class="border txt-cont">
                <h2 class="border card-title">${showvideo.title}</h2>
                <div class="border 3 grid grid-cols-2" >
                <p>${showvideo.authors[0].profile_name}</p>
                <p>*</p>
                </div>
                <p class="border">${showvideo.others.views} views</p>
            </div>
        </div>
    `;
        videoShowCard.appendChild(videocard);
    })
};
const noDatafound = phVideos => {
    const videoShowCard = document.getElementById('videoCard');
    videoShowCard.textContent = "";
    // console.log(showvideo);
    const videocard = document.createElement('div');
    videocard.classList = `border border-red-500 grid grid-cols-1 my-28 text-center`;
    videocard.innerHTML = `
        <img class="w-28 md:justify" src="Icon.png" alt="">
        <p>Oops!! Sorry, There is no content here</p>
    `;
    videoShowCard.appendChild(videocard);
};

// const videoCategory = async () => {
//     const read = await fetch('https://openapi.programming-hero.com/api/videos/categories');
//     const data = await read.json();
//     const cat = data.data;
//     console.log(cat);
// }

// const selectCategory = vidCat => {
//     vidCat.forEach(c => {
//         if ()
//     })
// }

function categorybutton(catid) {
    loadpage(catid);
}
loadpage('1000');



// videoCategory();

// loadpage();




// category : 'https://openapi.programming-hero.com/api/videos/categories'

// no data found message : 'https://openapi.programming-hero.com/api/videos/category/$%7Bid%7D'

// 