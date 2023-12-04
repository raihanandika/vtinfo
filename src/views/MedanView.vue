<template>
  <div class="mdn">
    <!-- <h1>Medan Work</h1> -->
    <!-- <Card
      :kota="namakota"
      :hari="hari"
      :ymd="ymd"
      :time="time"
      :sholat="paramsSholat"
      :lhk="lhkinfo"
    /> -->
    <NewCard
      :kota="namakota"
      :hari="hari"
      :ymd="ymd"
      :sholat="paramsSholat"
      :lhk="lhkinfo"
    />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import NewCard from "../components/NewCard.vue";

import { ispumedan } from "../services/index";

export default {
  name: "Medan",
  components: {
    Card,
    NewCard,
  },
  data: () => ({
    namakota: "Medan",
    paramsSholat:
      "/0228/" +
      new Date().getFullYear() +
      "/" +
      (new Date().getMonth() + 1) +
      "/" +
      new Date().getDate(),
    hari: new Date().getDay(),
    hari: new Date().getDay(),
    ymd:
      new Date().getDate() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getFullYear(),
    // time:
    //   new Date().getHours() +
    //   ":" +
    //   new Date().getMinutes() +
    //   ":" +
    //   new Date().getSeconds(),
    lhkinfo: {},
  }),
  mounted() {
    this.getlhk();
    var delay = 60 * 60 * 1000;
    setInterval(() => {
      location.reload();
    }, delay); //
  },
  methods: {
    getlhk() {
      ispumedan()
        .then((res) => {
          if (res.status == 200 && res.statusText == "OK") {
            // console.log(res.data.rows);

            this.lhkinfo.ispu = parseInt(res.data.rows[0].val);
            this.lhkinfo.ket = res.data.rows[0].cat;
            this.lhkinfo.pm25 = res.data.rows[0].pm25;

            if (
              parseInt(res.data.rows[0].val) >= 0 &&
              parseInt(res.data.rows[0].val) <= 50
            ) {
              this.lhkinfo.bg = "background-color:#abd25f";
              this.lhkinfo.bgket = "background-color:#b8e994";
              this.lhkinfo.img = "../assets/images/good.png";
            } else if (
              parseInt(res.data.rows[0].val) >= 51 &&
              parseInt(res.data.rows[0].val) <= 100
            ) {
              this.lhkinfo.bg = "background-color:#fdd748";
              this.lhkinfo.bgket = "background-color:#ffeaa7";
              this.lhkinfo.img = "../assets/images/moderate.png";
            } else if (
              parseInt(res.data.rows[0].val) >= 101 &&
              parseInt(res.data.rows[0].val) <= 200
            ) {
              this.lhkinfo.bg = "background-color:#f6676b";
              this.lhkinfo.bgket = "background-color:#EB7C7C";
              this.lhkinfo.img = "../assets/images/unhealty.png";
            } else if (
              parseInt(res.data.rows[0].val) >= 201 &&
              parseInt(res.data.rows[0].val) <= 300
            ) {
              this.lhkinfo.bg = "background-color:#a37db8";
              this.lhkinfo.bgket = "background-color:#BA94CE";
              this.lhkinfo.img = "../assets/images/vu.png";
            } else if (parseInt(res.data.rows[0].val) >= 301) {
              this.lhkinfo.bg = "background-color:#a07682";
              this.lhkinfo.bgket = "background-color:#B9919C";
              this.lhkinfo.img = "../assets/images/hazardouse.png";
            }
          }
          // console.log(this.lhkinfo);
        })
        .catch((err) => {
          console.log(res);
        });
    },
  },
};
</script>

<style></style>
