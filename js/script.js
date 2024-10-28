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


for (const member of teamMembers) {
  const card = `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card d-flex flex-row gap-2 bg-black" >
        <div class="p-1"><img src="${member.img}" alt="" class="" style="width: 100px; height: 100px;"></div>
        <div class="d-flex flex-column gap-2 p-2" style="line-height: 5px;">
          <div style="white-space: nowrap;">
            <h4>${member.name}</h4>
          </div>
          <div style="white-space: nowrap;">
            <p>${member.role}</p>
          </div>
          <div style="white-space: nowrap;">
            <a style="font-size: 12px" href="">${member.email}</a>
          </div>
        </div>
      </div>
    </div>
  `;

  document.querySelector(".row-cols-3").innerHTML += card;
}

