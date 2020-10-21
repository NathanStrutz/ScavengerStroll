// An individual scavenger item - image, checkbox, text
const ScavengerItem = Vue.component("ScavengerItem", {
  template: `
    <div :class="itemClasses" @click="select">
      <a v-if="item.image" :href="'images/fullsize/'+item.image"><img :src="'images/thumbnails/'+item.image" @click="imageClick" /></a>
      <span v-else class="no-image"></span>
      <input type="checkbox" :checked="item.completed" :class="{complete: item.completed}" />
      <span :class="{complete: item.completed}">{{ item.name }}</span>
    </div>
  `,
  props: {
    item: Object,
  },
  computed: {
    itemClasses() {
      return `list-group-item item ${this.item.completed ? "complete" : "incomplete"}`;
    },
  },
  methods: {
    select() {
      Vue.set(this.item, "completed", !this.item.completed);
      this.$emit("selected", this.item);
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

// A mix-in used by the collection of scavenger items
const ScavengerItemsMixin = {
  data: function () {
    return {
      numberToShow: 10,
    };
  },
  computed: {
    randomItems() {
      let randomItems = [];
      for (let i = 0; i < this.numberToShow; i++) {
        let itemIndex = Math.floor(Math.random() * this.items.length);
        let item = this.items.splice(itemIndex, 1);
        randomItems.push(item[0]);
      }
      return randomItems;
    },
    isFinished() {
      return this.randomItems.reduce((a, v) => a && v.completed, true);
    },
  },
  methods: {
    selectedItem(item) {
      if (this.isFinished) {
        this.$emit("completed");
      } else {
        this.$emit("notCompleted");
      }
    },
  },
};

const ParkScavengerItems = Vue.component("ParkScavengerItems", {
  template: `
    <div>
      <scavenger-item v-for="item in randomItems" :item="item" :key="item.name" @selected="selectedItem" />
    </div>
    `,
  mixins: [ScavengerItemsMixin],
  components: { ScavengerItem },
  data: function () {
    return {
      items: [
        { name: "Bikes", image: "IMG_5618.jpg", completed: false },
        { name: "Playground", image: "IMG_5628.jpg", completed: false },
        { name: "Trash can", image: "IMG_1618.jpg", completed: false },
        { name: "Wanamaker Oak", image: "IMG_5442.jpg", completed: false },
        { name: "Park Center sign ", image: "IMG_5619.jpg", completed: false },
        { name: "Vollyball net", image: "IMG_5603.jpg", completed: false },
        { name: "Sprinkler", image: "IMG_1528.jpg", completed: false },
        { name: "Map sign", image: "IMG_5544.jpg", completed: false },
        { name: "Grill", image: "IMG_1530.jpg", completed: false },
        { name: "Magnolia shelter", image: "IMG_1541.jpg", completed: false },
        { name: "Picnic table", image: "IMG_1531.jpg", completed: false },
        { name: "Boat", image: "IMG_5445.jpg", completed: false },
        { name: "Bench", image: "IMG_5566.jpg", completed: false },
        { name: "Dimond trail sign (any color)", image: "IMG_5559.jpg", completed: false },
        { name: "Pavillon", image: "IMG_5606.jpg", completed: false },
        { name: "Restrooms", image: "IMG_5613.jpg", completed: false },
        { name: "Big hill", image: "IMG_5630.jpg", completed: false },
        { name: "Cypress Hall", image: "IMG_5597.jpg", completed: false },
        { name: "Bench swing", image: "IMG_5617.jpg", completed: false },
      ],
    };
  },
});

const NatureScavengerItems = Vue.component("NatureScavengerItems", {
  template: `
    <div>
      <scavenger-item v-for="item in randomItems" :item="item" :key="item.name" @selected="selectedItem" />
    </div>
    `,
  mixins: [ScavengerItemsMixin],
  components: { ScavengerItem },
  data: function () {
    return {
      items: [
        { name: "Bird (cardinal, falcon, etc.)", image: "IMG_1621.jpg", completed: false },
        { name: "Fallen tree", image: "IMG_5535.jpg", completed: false },
        { name: "Spider (banana, black widow, etc.)", image: "IMG_5632.jpg", completed: false },
        { name: "Reptile (turtle, alligator, etc.)", image: "IMG_4896.jpg", completed: false },
        { name: "Mammal (deer, raccoon, etc.)", image: "IMG_1536.jpg", completed: false },
        { name: "Creek", image: "IMG_5501.jpg", completed: false },
        { name: "Hole in a tree", image: "IMG_5553.jpg", completed: false },
        { name: "Split tree", image: "IMG_5538.jpg", completed: false },
        { name: "Tree vine", image: "IMG_1597.jpg", completed: false },
        { name: "Spanish moss", image: "IMG_5503.jpg", completed: false },
        { name: "Bird's nest", image: "IMG_1557.jpg", completed: false },
        { name: "Insect (dragonfly, fly, etc.)", image: "IMG_5438.jpg", completed: false },
        { name: "Algea", image: "IMG_5006.jpg", completed: false },
        { name: "Tree", image: "IMG_5591.jpg", completed: false },
        { name: "Rock", image: "IMG_5578.jpg", completed: false },
        { name: "Cyprus knees", image: "IMG_5571.jpg", completed: false },
        { name: "Tree stump", image: "IMG_5574.jpg", completed: false },
        { name: "Lake", image: "IMG_5615.jpg", completed: false },
      ],
    };
  },
});

new Vue({
  el: "#app",
  template: `
    <div>
      <component :is="pageComponent" @notCompleted="itsNotPartyTime" @completed="itsPartyTime" />
      <firework-party :party-time="isPartyTime" />
    </div>
  `,
  components: {
    ParkScavengerItems,
    NatureScavengerItems,
    FireworkParty,
  },
  data() {
    return {
      isPartyTime: false,
    };
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
    itsPartyTime() {
      // this.isPartyTime = true;
      console.log("Celebrate");
    },
    itsNotPartyTime() {
      // this.isPartyTime = false;
    },
  },
});
