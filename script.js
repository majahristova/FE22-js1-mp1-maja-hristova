//Picture one

const rname = ['Rad 1', 'Rad 2', 'Rad 3', 'Rad 4', 'Rad 5',];
console.log(rname);


for (let i = 0; i < rname.length; i++) {
  const elline = document.createElement('h1');
  document.body.appendChild(elline);
  elline.innerText = rname[i];
  elline.style.textAlign = "center";
  elline.style.fontSize = i + "9px";
  elline.style.color ='mediumpurple';
  elline.style.backgroundColor = `hsl(${110+i*20}, 100% ,50%)`;

}



//Picture two


//Main container 
const maincontainer = document.createElement('div');
document.body.appendChild(maincontainer);

maincontainer.style.margin = '100px 0 0 0';
maincontainer.style.border = '3px solid black';
maincontainer.style.display = 'flex';
maincontainer.style.justifyContent = 'space-around';

//Three smaller containers 

const boxone = document.createElement('div');
maincontainer.appendChild(boxone);
boxone.style.border = '20px solid mediumpurple';
boxone.style.width = '90px';
boxone.style.margin = '40px 0 40px 0';

const boxtwo = document.createElement('div');
maincontainer.appendChild(boxtwo);
boxtwo.style.border = '20px solid mediumpurple';
boxtwo.style.width = '90px';
boxtwo.style.margin = '40px 0 40px 0';

const boxthree = document.createElement('div');
maincontainer.appendChild(boxthree);
boxthree.style.border = '20px solid mediumpurple';
boxthree.style.width = '90px';
boxthree.style.margin = '40px 0 40px 0';





//FIRST LOOP
for (let i = 0; i < 10; i++) {
  const listone = document.createElement('h2');
  boxone.appendChild(listone);
  listone.innerText = [i];
  listone.style.textAlign = 'left';
  listone.style.margin= '0';

  if (i === 4) {
    listone.style.backgroundColor = 'mediumpurple';
    listone.style.color = 'white';
  }
  else if (i % 2 === 0) {
    listone.style.backgroundColor = 'black';
    listone.style.color = 'white';
  }
}

// SECOND LOOP

for (let m = 9; m >= 0; m--) {
  const listtwo = document.createElement('h2');
  boxtwo.appendChild(listtwo);
  listtwo.innerText = [m];
  listtwo.style.textAlign = 'center';
  listtwo.style.margin= '0';

  if (m === 8) {
    listtwo.style.backgroundColor = 'mediumpurple';
    listtwo.style.color = 'white';
  }
  else if (m % 2 === 0) {
    listtwo.style.backgroundColor = 'black';
    listtwo.style.color = 'white';
  }
}
//THIRD LOOP
const afname = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio',];
console.log(afname);

for (let d = 0; d < 10; d++) {

  const listthree = document.createElement('h2');
  boxthree.appendChild(listthree);
  listthree.innerText = afname[d];
  listthree.style.textAlign = 'right';
  listthree.style.margin= '0';

  if (d === 5) {
    listthree.style.backgroundColor = 'mediumpurple';
    listthree.style.color = 'black';

  }
  else if (d % 2 === 0) {
    listthree.style.backgroundColor = 'black';
    listthree.style.color = 'white';
  }

}

