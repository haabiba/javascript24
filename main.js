console.log('test')
let hh = document.querySelector('h1')
hh.style.textAlign = 'center'


for (i = 0; i <= 100; i++) {

  let p1 = document.createElement('div');

  {
    if (i % 2 == 0) {

      p1.className = 'wrapper'
      p1.style.fontSize = '25px'
      p1.style.backgroundColor = '#91E537'
      p1.textContent = i;
      p1.style.padding = '55px'
      p1.style.margin = '1px'
      p1.style.textAlign = 'center'
      p1.style.width = '20px'
      document.body.appendChild(p1);
    } else {
      p1.className = 'wrapper'
      p1.style.fontSize = '25px'
      p1.textContent = i;
      p1.style.backgroundColor = '#E5D037'
      p1.style.padding = '55px'
      p1.style.margin = '1px'
      p1.style.textAlign = 'center'
      p1.style.width = '20px'
      document.body.appendChild(p1);
    }
  }
  if (i >= 2) {
    let flag = 0;
    for (j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    
    if (flag == 0) {
      p1.className = 'wrapper'
      p1.style.fontSize = '25px'
      p1.style.backgroundColor = '#E55137'
      p1.textContent = i;
      p1.style.padding = '55px'
      p1.style.margin = '1px'
      p1.style.textAlign = 'center'
      p1.style.width = '20px'
      document.body.appendChild(p1);

    }
  }
}
