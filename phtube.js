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
        const publishtime = showvideo.others.posted_date;
        console.log(typeof (publishtime));
        // convert second to day hours minute
        const postedDate = convertsecondtodhm(publishtime);
        console.log(postedDate);

        const videocard = document.createElement('div');
        videocard.classList = `card card-compact border grid grid-rows-1`;
        videocard.innerHTML = `
        <div class="1 px-3">
            <figure><img  src="${showvideo.thumbnail}" alt="videoThumnail"/></figure>
        </div>
        <div class="grid card-body grid-cols-5">
            <div class =" prfl-img ">
                <img class=" rounded-full w-8 h-8" src="${showvideo.authors[0].profile_picture}" alt="prf" />
            </div>
            <div class=" txt-cont col-span-4">
                <h2 class=" card-title text-base text-black font-bold">${showvideo.title}</h2>
                        <p class=" col-span-2 text-sm font-normal">${showvideo.authors[0].profile_name} ${showvideo.authors[0].verified}<img class="w-3" src="icon2.png"/></p>
                <p>${showvideo.others.views} views</p>
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
    videocard.classList = `grid col-span-4  justify-items-center p-5 my-16`;
    videocard.innerHTML = `
        <img class="w-28 " src="Icon.png" alt="">
        <p class='font-bold text-center text-xl md:text-2xl lg:text-3xl text-neutral-900 p-1 md:p-2 lg:p-3'>Oops!! Sorry, There is no content here</p>
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

function convertsecondtodhm(seconds) {
    const second = parseInt(seconds);
    // console.log(second);
    // console.log(typeof (second));
    const day = Math.floor(second / 86400);
    console.log(day);
    const hour = Math.floor((second % 86400) / 3600);
    console.log(hour);
    const minute = Math.floor(((second % 86400) % 3600) / 60);
    console.log(minute);
    if (day > 0) {
        return `${day}day ${hour}hrs ${minute} min ago`;

    }
    else if (hour > 0) {
        return `${hour}hrs ${minute} min ago`;

    }
    else if (minute > 0) {
        return `${minute} min ago`;
    }
    else {
        return "";
    }
}




function categorybutton(catid) {
    loadpage(catid);
}
loadpage('1000');



// videoCategory();

// loadpage();




// category : 'https://openapi.programming-hero.com/api/videos/categories'

// no data found message : 'https://openapi.programming-hero.com/api/videos/category/$%7Bid%7D'

// 