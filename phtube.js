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
    // cheking the views
    const a = [];
    const videoShowCard = document.getElementById('videoCard');
    videoShowCard.textContent = "";
    phVideos.forEach(showvideo => {
        const vdview = showvideo.others.views;
        console.log(vdview);
        a.push(vdview.replace("K", ""));
        const publishtime = showvideo.others.posted_date;
        const postedDate = convertsecondtodhm(publishtime);
        console.log(postedDate);
        let num = 0;
        if (showvideo.authors[0].verified == true) {
            num = 1;
        }


        const videocard = document.createElement('div');
        videocard.classList = `border card card-compact grid grid-rows-1`;
        videocard.innerHTML = `
        <div class="relative px-3">
            <img src="${showvideo.thumbnail}">${postedDate}
        </div>
        <div class="grid card-body grid-cols-5">
            <div class =" prfl-img ">
                <img class=" rounded-full w-7 h-7" src="${showvideo.authors[0].profile_picture}" alt="prf" />
            </div>
            <div class="col-span-4">
                <h2 class="card-title text-base text-black font-bold">${showvideo.title}</h2>
                <p class="text-sm font-normal flex gap-2">${showvideo.authors[0].profile_name}${bluebadge(num)}
                </p>    
                <p>${showvideo.others.views} views</p>
            </div>
        </div>
    `;
        videoShowCard.appendChild(videocard);
    })
    console.log(a);
};
const noDatafound = phVideos => {
    const videoShowCard = document.getElementById('videoCard');
    videoShowCard.textContent = "";
    // console.log(showvideo);
    const videocard = document.createElement('div');
    videocard.classList = `grid col-span-4  justify-items-center p-4 my-16`;
    videocard.innerHTML = `
        <img class="w-28 " src="Icon.png" alt="">
        <p class='font-bold text-center text-xl md:text-2xl lg:text-3xl text-neutral-900 p-1 md:p-2 lg:p-3'>Oops!! Sorry, There is no content here</p>
    `;
    videoShowCard.appendChild(videocard);
};

function bluebadge(value) {
    const badge = value;
    if (badge === 1) {
        return `<img class="w-4 h-4" src="https://img.icons8.com/color/48/instagram-verification-badge.png"/>`
    }
    else {
        return "";
    }
}

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
        const pubtime = `${day}day ${hour}hrs ${minute} min ago`;
        return `<div class="thumbtext p-1 absolute rounded-md text-xs bg-neutral-900">${pubtime}</div>`

    }
    else if (hour > 0) {
        const pubtime = `${hour}hrs ${minute} min ago`;
        return `<div class="thumbtext p-1 absolute rounded-md text-xs bg-neutral-900">${pubtime}</div>`

    }
    else if (minute > 0) {
        const pubtime = `${minute} min ago`;
        return `<div class="thumbtext p-1 absolute rounded-md text-xs bg-neutral-900">${pubtime}</div>`
    }
    else {
        return '';
    }
}


function categorybutton(catid) {
    loadpage(catid);
}
loadpage('1000');





// category : 'https://openapi.programming-hero.com/api/videos/categories'

// no data found message : 'https://openapi.programming-hero.com/api/videos/category/$%7Bid%7D'

// 