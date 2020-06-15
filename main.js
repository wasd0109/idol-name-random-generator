const mbImage = document.querySelector(".image");
const mbName = document.querySelector(".name");
const groupName = document.querySelector(".group");
const randomBtn = document.querySelector("#randomBtn");

const mbList = list;

const chooseMember = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

const showMember = (member) => {
  const { name, img, group, gen } = member;
  mbName.textContent = name;
  mbImage.setAttribute("src", img);
  groupName.textContent = group;
};

const randomize = () => showMember(chooseMember(list));

randomBtn.addEventListener("click", randomize);
