const mbImage = document.querySelector(".image");
const mbName = document.querySelector(".name");
const groupName = document.querySelector(".group");
const randomBtn = document.querySelector("#randomBtn");
const groupsAvailable = document.querySelector("ul");

const members = mbList;
const groups = groupList;

const chooseMember = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

const showMember = (member) => {
  const { name, img, group, gen } = member;
  mbName.textContent = name;
  mbImage.setAttribute("src", img);
  groupName.textContent = group;
};

const randomize = () => showMember(chooseMember(members));

const listGroup = (groups) => {
  groups.forEach((group) => {
    const item = document.createElement("li");
    item.textContent = group;
    groupsAvailable.appendChild(item);
  });
};
listGroup(groups);

randomBtn.addEventListener("click", randomize);
