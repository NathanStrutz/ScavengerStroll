const SingleFirework = Vue.component("SingleFirework", {
  props: {
    delay: { type: Number, default: 0 },
  },
  computed: {
    randomLocation() {
      const rand = (m) => Math.floor(Math.random() * m);
      return {
        x: rand(window.innerHeight),
        y: rand(window.innerWidth),
      };
    },
  },
});

const FireworkParty = Vue.component("FireworkParty", {
  template: `
    <div v-if="partyTime">
      <img src="images/firework.gif" style="z-index: 5; position:absolute; top: 100px; left: 20px;" />
    </div>
    <!-- Preload the firework image, and hide it in the background -->
    <img v-else src="images/firework.gif" style="left: 1000px; top: 1000px; height: 1px; width: 1px;" />
  `,
  props: {
    partyTime: { type: Boolean, default: false },
  },
  data: function () {
    return {};
  },
  computed: {
    abc() {},
  },
  methods: {},
});

const fireworks = function () {
  const gif = "/images/firework.gif";
  window.createElement("img", { src: gif });

  const randomLocation = function () {
    const rand = (m) => Math.floor(Math.random() * m);
    return {
      x: rand(window.innerHeight),
      y: rand(window.innerWidth),
    };
  };

  const pop = (location) => {
    // explode at the given location
  };

  const randomPop = () => {};

  return {
    start: function () {
      for (let index = 0; index < 10; index++) {
        setTimeout(randomPop, 250 * index);
      }
    },
  };
};
