const astronaut = {
  name: "Neil",
  mission: "Moon",

  introduce() {
    console.log(this.name);
    console.log(this.mission);
  }
};

astronaut.introduce();

/*
Explanation:
- 'this' refers to the astronaut object.
- this.name = "Neil"
- this.mission = "Moon"
*/
