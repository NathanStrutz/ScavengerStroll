new Vue({
  el: "#app",
  data: {
    items: {
      park: [
        { completed: false, name: "Gazebo", description: "A big white gazebo" },
        { completed: false, name: "Bird", description: "A bird" },
        { completed: false, name: "Tree", description: "A big tree" },
        { completed: false, name: "Grass", description: "A big patch of grass" },
      ],
      trail: [
        { completed: false, name: "Bird", description: "A bird" },
        { completed: false, name: "Tree", description: "A big tree" },
      ],
    },
  },
});
