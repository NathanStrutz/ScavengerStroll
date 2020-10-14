const ScavengerItem = Vue.component("ScavengerItem", {
  template: `
    <div :class="classes" @click="select(item)">
      <img v-if="item.image" :src="'images/'+item.image" @click="imageClick" />
      <span v-else class="no-image"></span>
      <input type="checkbox" v-model="item.completed" :class="{completed: item.completed}" />
      <span :class="{completed: item.completed}">{{ item.name }}</span>
    </div>
  `,
  props: {
    item: Object,
  },
  computed: {
    classes() {
      return `list-group-item item ${this.item.completed ? "completed" : "incomplete"}`;
    },
  },
  methods: {
    select() {
      this.item.completed = !this.item.completed;
    },
    /**
     * Image click event handler
     * @param {Event} e Window click event
     */
    imageClick(e) {
      e.stopPropagation();
    },
  },
});

const ScavengerItemsMixin = {
  data: function () {
    return {
      items: [],
      numberToShow: 9,
    };
  },
  computed: {
    randomItems() {
      let randomItems = [];
      for (let i = 0; i <= this.numberToShow; i++) {
        let itemIndex = Math.floor(Math.random() * this.items.length);
        let item = this.items.splice(itemIndex, 1);
        randomItems.push(item[0]);
      }
      return randomItems;
    },
  },
};

const ParkScavengerItems = Vue.component("ParkScavengerItems", {
  template: `
    <div>
      <scavenger-item v-for="item in randomItems" :item="item" :key="item.name" />
    </div>
    `,
  mixins: [ScavengerItemsMixin],
  components: { ScavengerItem },
  data: function () {
    return {
      items: [
        { name: "Bikes", image: "IMG_5618.JPG", completed: false },
        { name: "Playground", image: "IMG_5628.JPG", completed: false },
        { name: "Trash can", image: "IMG_1618.JPEG", completed: false },
        { name: "Wanamaker Oak", image: "IMG_5442.JPG", completed: false },
        { name: "Park Center sign ", image: "IMG_5619.JPG", completed: false },
        { name: "Vollyball net", image: "IMG_5603.JPG", completed: false },
        { name: "Sprinkler", image: "IMG_1528.JPG", completed: false },
        { name: "Map sign", image: "IMG_5544.JPG", completed: false },
        { name: "Grill", image: "IMG_1530.JPEG", completed: false },
        { name: "Magnolia shelter", image: "IMG_1541.JPEG", completed: false },
        { name: "Picnic table", image: "IMG_1531.JPEG", completed: false },
        { name: "Boat", image: "IMG_5445.JPG", completed: false },
        { name: "Bench", image: "IMG_5566.JPG", completed: false },
        { name: "Dimond trail sign (any color)", image: "IMG_5559.JPG", completed: false },
        { name: "Pavillon", image: "IMG_5606.JPG", completed: false },
        { name: "Restrooms", image: "IMG_5613.JPG", completed: false },
        { name: "Big hill", image: "IMG_5630.JPG", completed: false },
        { name: "Cypress Hall", image: "IMG_5597.JPG", completed: false },
        { name: "Bench swing", image: "IMG_5617.JPG", completed: false },
      ],
    };
  },
});

const NatureScavengerItems = Vue.component("NatureScavengerItems", {
  template: `
    <div>
      <scavenger-item v-for="item in randomItems" :item="item" :key="item.name" />
    </div>
    `,
  mixins: [ScavengerItemsMixin],
  components: { ScavengerItem },
  data: function () {
    return {
      items: [
        { name: "Bird (cardinal, falcon, etc.)", image: "IMG_1621.JPG", completed: false },
        { name: "Fallen tree", image: "IMG_5535.JPG", completed: false },
        { name: "Spider (banana spider, black widow, etc.)", image: "IMG_5632.JPG", completed: false },
        { name: "Reptile (turtle, alligator, etc.)", image: "IMG_4896.JPG", completed: false },
        { name: "Mammal (deer, raccoon, etc.)", image: "IMG_1536.JPG", completed: false },
        { name: "Creek", image: "IMG_5501.JPG", completed: false },
        { name: "Hole in a tree", image: "IMG_5553.JPG", completed: false },
        { name: "Split tree", image: "IMG_5538.JPG", completed: false },
        { name: "Tree vine", image: "IMG_1597.JPEG", completed: false },
        { name: "Spanish moss", image: "IMG_5503.JPG", completed: false },
        { name: "Bird's nest", image: "IMG_1557.JPG", completed: false },
        { name: "Insect (dragonfly, mosquito, etc.)", image: "IMG_5438.JPG", completed: false },
        { name: "Algea", image: "IMG_5006.JPG", completed: false },
        { name: "Tree", image: "IMG_5591.JPG", completed: false },
        { name: "Rock", image: "IMG_5578.JPG", completed: false },
        { name: "Cyprus knees", image: "IMG_5571.JPG", completed: false },
        { name: "Tree stump", image: "IMG_5574.JPG", completed: false },
        { name: "Lake", image: "IMG_5615.JPG", completed: false },
      ],
    };
  },
});

new Vue({
  el: "#app",
  template: `
    <component :is="pageComponent" />
  `,
  components: {
    ParkScavengerItems,
    NatureScavengerItems,
  },
  computed: {
    pageComponent() {
      if (location.href.indexOf("park") >= 0) {
        return ParkScavengerItems;
      } else {
        return NatureScavengerItems;
      }
    },
  },
  methods: {
    select(item) {
      item.completed = !item.completed;
    },
  },
});
