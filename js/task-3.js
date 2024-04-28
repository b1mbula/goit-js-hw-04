const profile = {
  username: "Jacob",
  playTime: 300,
  getInfo() {
    console.log(`${profile.username} has ${profile.playTime} active hours`);
  },
  changeUsername(newName) {
    profile.username = newName;
  },
  updatePlayTime(hours) {
    profile.playTime += hours;
  },
};

console.log(profile.getInfo());

profile.changeUsername("Marco");
console.log(profile.getInfo());

profile.updatePlayTime(20);
console.log(profile.getInfo());
