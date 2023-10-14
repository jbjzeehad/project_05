// console.log("checking the file");

const loadpage = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await response.json();
    const phdata = data.data;
    // console.log(data.data);
    phTubeVideoCard(phdata);
};

const phTubeVideoCard = phVideos => {

    const videoShowCard = document.getElementById('videoCard');



    phVideos.forEach(showvideo => {
        console.log(showvideo);
        const videocard = document.createElement('div');
        videocard.classList = `card card-compact bg-gray-100 shadow-xl`;
        videocard.innerHTML = `
        <figure><img src="${showvideo.thumbnail}" alt="videoThumnail" /></figure>
        <div class="card-body">
        <h2 class="card-title">${showvideo.title}</h2>
        <p></p >
    <div class="card-actions justify-end">
    </div>
        </div >
    `;
        videoShowCard.appendChild(videocard);
    })

};

loadpage();