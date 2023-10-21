document.querySelector('#angle-down').addEventListener('click', () => {
  document.querySelector('#accordion-content').classList.toggle('hidden');
  document.querySelector('.fa-solid').classList.toggle('fa-angle-up');
});
document.querySelector('#angle-down2').addEventListener('click', () => {
  document.querySelector('#accordion-content2').classList.toggle('hidden');
  document.querySelector('.fa2').classList.toggle('fa-angle-up');
});
document.querySelector('#angle-down3').addEventListener('click', () => {
  document.querySelector('#accordion-content3').classList.toggle('hidden');
  document.querySelector('.fa3').classList.toggle('fa-angle-up');
});

const team1 = document.querySelector('#team1');
const team2 = document.querySelector('#team2');
const liMountain1 = [document.querySelector('#liMountain1'), document.querySelector('#liMountain3')];
const liMountain2 = [document.querySelector('#liMountain2'), document.querySelector('#liMountain4')];
const mountain1 = [document.querySelector('#mountain1'), document.querySelector('#mountain3')];
const mountain2 = [document.querySelector('#mountain2'), document.querySelector('#mountain4')];
mountain1.forEach((item) => {
  item.addEventListener('click', () => {
    if(team1.classList.contains('hidden')) team1.classList.toggle('hidden');
    if(!team2.classList.contains('hidden')) team2.classList.toggle('hidden');

    liMountain1.forEach((li) => {
      if(!li.classList.contains('active')) li.classList.toggle('active');
    });
    
    liMountain2.forEach((li) => {
      if(li.classList.contains('active')) li.classList.toggle('active');
    });
  });
});
mountain2.forEach((item) => {
  item.addEventListener('click', () => {
    if(team2.classList.contains('hidden')) team2.classList.toggle('hidden');
    if(!team1.classList.contains('hidden')) team1.classList.toggle('hidden');

    liMountain2.forEach((li) => {
      if(!li.classList.contains('active')) li.classList.toggle('active');
    });
    
    liMountain1.forEach((li) => {
      if(li.classList.contains('active')) li.classList.toggle('active');
    });
  });
});