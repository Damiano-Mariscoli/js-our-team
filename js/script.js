const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
  
];
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (const member of teamMembers) {
  const card = `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card d-flex flex-row gap-2 bg-black" >
        <div class="p-1"><img src="${member.img}" alt="" class="" style="width: 100px; height: 100px;"></div>
        <div class="d-flex flex-column gap-2 p-2" style="line-height: 5px;">
          <div>
            <h5>${member.name}</h5>
          </div>
          <div>
            <p>${member.role}</p>
          </div>
          <div>
            <a style="font-size: 12px" href="">${member.email}</a>
          </div>
        </div>
      </div>
    </div>
  `;

  document.querySelector(".row-cols-3").innerHTML += card;
}



//variabili bottoni
const buttonMember = document.getElementById('btnElement')
const formMember = document.getElementById('form-member')
const btnReset = document.getElementById('btn-reset')


//condizioni sui bottoni

//condizione sul bottone "diventa un membro del team"
buttonMember.addEventListener('click', function(){
  formMember.classList.remove('d-none')
  buttonMember.classList.add('d-none')
})

//condizione sul bottone annulla
btnReset.addEventListener('click', function(){
  location.reload();
})

//condizione sul bottone di invio del form
formMember.addEventListener('submit', function(event){
  event.preventDefault();
  const newName = document.getElementById("name")
  const newRole = document.getElementById("role")
  const newEmail = document.getElementById("email")
  const newMember = {
    name : newName.value,
    role : newRole.value,
    email : newEmail.value,
    img: `https://picsum.photos/200/300?random=${getRandomInt(1, 300)}`,
  };
  teamMembers.push(newMember);

  
  const card = `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card d-flex flex-row gap-2 bg-black" >
        <div class="p-1"><img src="${newMember.img}" alt="" class="" style="width: 100px; height: 100px;"></div>
        <div class="d-flex flex-column gap-2 p-2" style="line-height: 5px;">
          <div>
            <h5>${newMember.name}</h5>
          </div>
          <div>
            <p>${newMember.role}</p>
          </div>
          <div>
            <a style="font-size: 12px" href="">${newMember.email}</a>
          </div>
        </div>
      </div>
    </div>
  `;

  document.querySelector(".row-cols-3").innerHTML += card;
  formMember.classList.add('d-none')
  buttonMember.classList.remove('d-none')
  formMember.reset();
})
