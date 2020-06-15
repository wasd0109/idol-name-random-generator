const mbImage = document.querySelector(".image");
const mbName = document.querySelector(".name");
const groupName = document.querySelector(".group");
const randomBtn = document.querySelector("#randomBtn");
const groupsAvailable = document.querySelector(".groups");
const keywordsSuggestion = document.querySelector(".searchKeywords");

const members = mbList;
const groups = groupList;
const keywords = keywordList;

const chooseMember = (members) => {
  return members[Math.floor(Math.random() * members.length)];
};

const showMember = (member) => {
  const { name, img, group, gen } = member;
  mbName.textContent = name;
  mbImage.setAttribute("src", img);
  groupName.textContent = group;
  updateKeywords(name, keywords);
};

const randomize = () => showMember(chooseMember(members));

const listGroup = (groups) => {
  groups.forEach((group) => {
    const item = document.createElement("li");
    item.textContent = group;
    groupsAvailable.appendChild(item);
  });
};

const generateKeywords = (name, keywords) => {
  const mbKeywords = keywords.map((keyword) => {
    return `${name} ${keyword}`;
  });
  return mbKeywords;
};

const createKeywordElement = (mbKeywords) => {
  keywordsSuggestion.textContent = "";
  mbKeywords.forEach((keyword) => {
    link = document.createElement("a");
    link.textContent = keyword;
    link.setAttribute("target", "_blank");
    link.setAttribute("href", `https://www.google.com/search?q=${keyword}`);
    keywordsSuggestion.appendChild(link);
  });
};

const updateKeywords = (name, keywords) =>
  createKeywordElement(generateKeywords(name, keywords));

listGroup(groups);
randomBtn.addEventListener("click", randomize);
