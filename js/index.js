// heart icon functionality
const heartIcons = document.getElementsByClassName('heart-icon');

for(const heartIcon of heartIcons){
  heartIcon.addEventListener('click', function(){
    const heartCount = Number(document.getElementById('heart-count').innerText);
    let totalHeartCount = heartCount + 1;
    document.getElementById('heart-count').innerText = totalHeartCount;
  })
}