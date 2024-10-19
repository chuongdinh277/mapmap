new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/haumap1.jpg",
          img2: "images/haumap2.jpg",
          img3: "images/haumap3.jpg",
          title: "HAU VA MAP",
          isOpen: false,
        },
        {
          img1: "images/mapmap7.jpg",
          img2: "images/mapmap8.jpg",
          img3: "images/mapmap1.jpg",
          title: "CUTE",
          isOpen: false,
        },
        {
          img1: "images/mapmap2.jpg",
          img2: "images/mapmap3.jpg",
          img3: "images/mapmap4.jpg",
          title: "BE IU",
          isOpen: false,
        },
        {
          img1: "images/mapmap5.jpg",
          img2: "images/mapmap6.jpg",
          img3: "images/mapmap9.jpg",
          title: "XINH GAI",
          isOpen: false,
        },
        {
          img1: "images/mapmap10.jpg",
          img2: "images/mapmap11.jpg",
          img3: "images/mapmap12.jpg",
          title: "CUC CUNG",
          isOpen: false,
        },
        
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
