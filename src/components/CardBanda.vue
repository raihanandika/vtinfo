<template>
  <div
    class="shadow"
    style="
      background-image: linear-gradient(to right top, #ee5253, #54a0ff);
      padding-left: 40px;
      padding-right: 40px;
    "
  >
    <div class="d-none d-md-block">
      <center>
        <!-- <br /> -->
        <h1>{{ kota }}, Indonesia</h1>
        <hr width="40%" />

        <div class="row">
          <div class="col-md-6">
            <div class="row float-right">
              <b-icon-clock class="mt-3 h1"></b-icon-clock>

              <!-- <h1 class="mt-2">{{ hours }}:{{ minutes }}:{{ seconds }} WIB</h1> -->
              <h1 class="mt-2 ml-3 clock">
                {{ hours }}:{{ minutes }}:{{ seconds }} WIB
              </h1>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row">
              <b-icon-calendar class="mt-3 h1"></b-icon-calendar> &nbsp; &nbsp;
              <h1 class="mt-2">{{ getDay(hari) }} {{ ymd }}</h1>
            </div>
          </div>
          <!-- <p>{{ ymd }}</p> -->
        </div>
        <hr width="70%" />
      </center>
      <div class="row mx-2">
        <div class="col-md-3">
          <div class="row aqi shadow" :style="lhk.bg">
            <img
              :src="lhk.img"
              width="80px"
              style="margin-left: 8px; object-fit: contain"
            />
            <!-- style="background-color: #ffeaa7; border-radius: 15px" -->
            <!-- style="background-color: #b8e994; border-radius: 15px" -->
            <!-- style="background-color: #E26F6F; border-radius: 15px" -->
            <!-- style="background-color: #AB8CBC; border-radius: 15px" -->
            <!-- style="background-color: #B9919C; border-radius: 15px" -->
            <div class="col" :style="lhk.bgket + ';border-radius: 15px'">
              <center>
                <!-- <h3>{{ pollution.aqius }}</h3>
                <h3>{{ note }}</h3>
                <h3>US AQI</h3> -->
                <h4>ISPU</h4>
                <h1>{{ lhk.ispu }}</h1>
                <h4>{{ lhk.ket }}</h4>
              </center>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="col polutan shadow" style="padding-top: 10%">
            <center>
              <h4>PM2.5 &micro;g/m<sup>3</sup></h4>
              <h1>{{ lhk.pm25 }}</h1>
            </center>
          </div>
        </div>
        <div class="col-md-3">
          <div
            class="row temp shadow justify-content-center"
            style="padding-top: 15%"
          >
            <!-- <b-icon-cloud class="mr-4 h1" style="color: black"></b-icon-cloud> -->
            <h1>{{ weather.tp }} C&deg;</h1>
          </div>
        </div>

        <div class="col-md-3">
          <div class="col shadow humidity">
            <center style="padding-top: 13%">
              <h5>Kelembaban</h5>
              <h1>{{ weather.hu }} %</h1>
            </center>
          </div>
          <!-- <center class="mt-3">
            
          </center> -->
        </div>
        <p style="margin-top: 20px">Source : &nbsp;</p>
        <img
          src="../assets/iqair.png"
          width="60"
          style="object-fit: contain; margin-top: 8px"
        />
        <img
          src="../assets/lhk.png"
          width="40"
          style="object-fit: contain; margin-top: 8px; margin-left: 15px"
        />
        <p style="margin-top: 25px; margin-left: 15px; font-size: 9px">
          Kementerian Lingkungan Hidup Dan Kehutanan
        </p>
        <!-- <h1>{{ componentKey }}</h1> -->
      </div>
      <hr />
      <center><h1>Jadwal Sholat</h1></center>
      <hr width="30%" />

      <div class="row">
        <!-- <div class="col-md-4" v-for="(hs, index) in headerSholat" :key="hs.id">
          <center class="content-jadwal shadow">
            <h4>{{ hs.toLocaleUpperCase() }}</h4>
            <h4 :id="'jam - ' + index" :style="text">
              {{ jadwalSholat[index] }}
            </h4>
          </center>
        </div> -->
        <div class="col-md-4" v-for="hs in headerSholat" :key="hs.id">
          <center class="content-jadwal shadow">
            <h4>{{ hs.toLocaleUpperCase() }}</h4>
            <!-- <h4 :id="'jam - ' + index" :style="text">
              {{ jadwalSholat[index] }}
            </h4> -->
          </center>
        </div>
      </div>
      <hr />
      <br />
    </div>
    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <center>
        <p style="color: white; text-shadow: 2px 2px black; font-size: 80px">
          <strong> {{ kota }} </strong>
        </p>
        <div class="row justify-content-center">
          <p style="color: white; text-shadow: 2px 2px black; font-size: 50px">
            <strong> {{ getDay(hari) }} {{ ymd }} </strong>
          </p>
        </div>
        <hr
          style="
            margin-top: -1px;

            height: 2px;
            background-color: white;
            border: none;
            box-shadow: 0 1px 4px 1px black;
          "
        />
        <!-- <div class="row justify-content-center">
            <b-icon-clock class="mt-1"></b-icon-clock>
            <h3 class="">{{ hours }}:{{ minutes }}:{{ seconds }} WIB</h3>
          </div> -->

        <div class="col-md-3 mt-4 aqi-mobile-banda current-time shadow">
          <!-- <div class="row justify-content-center" style="height: 20px">
              <p>{{ newHeaderSholat.toLocaleUpperCase() }}</p>
            </div> -->
          <div class="row justify-content-center">
            <p style="font-size: 80px; margin-top: 8px; color: white">
              <strong>{{ hours }}:{{ minutes }}:{{ seconds }} WIB</strong>
            </p>
          </div>
        </div>

        <div class="col-md-3 mt-3">
          <div class="row aqi-mobile-banda shadow" :style="lhk.bg">
            <img
              :src="lhk.img"
              width="80px"
              style="margin-left: 8px; object-fit: contain"
            />
            <div
              class="col"
              :style="lhk.bgket + ';border-radius: 15px;height: 145px;'"
            >
              <!-- <div class="row">
                <div class="col" style="width: 100px">
                  <p style="font-size: 50px; margin-top: 40px">ISPU</p>
                </div>
                <div class="col" style="width: 100px">
                  <p style="font-size: 100px">
                    <strong>{{ lhk.ispu }}</strong>
                  </p>
                </div>
                <div class="col">
                  <p style="font-size: 50px; height: 1px; margin-top: 40px">
                    {{ lhk.ket }}
                  </p>
                </div>
              </div> -->
              <!-- <div class="row" style="height: 90px">
                <div class="col" style="width: 100px">
                  <p style="font-size: 50px">ISPU</p>
                </div>
                <div class="col" style="width: 100px">
                  <p style="font-size: 60px">
                    <strong>{{ lhk.ispu }}</strong>
                  </p>
                </div>
                <div class="col">
                  <p style="font-size: 50px; height: 1px">
                    {{ lhk.ket }}
                  </p>
                </div>
              </div> -->
              <div class="row">
                <marquee-text :duration="150" :reverse="false" :repeat="1"
                  ><span style="font-size: 18px; color: blue">
                    data
                  </span></marquee-text
                >

                <!-- <marquee-text>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                </marquee-text> -->
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3 mt-3 aqi-mobile-banda pm25 shadow">
          <div class="row justify-content-center" style="height: 30px">
            <p style="font-size: 40px">PM2.5 &micro;g/m<sup>3</sup></p>
          </div>
          <div class="row justify-content-center" style="height: 25px">
            <p style="font-size: 90px">
              <strong>{{ lhk.pm25 }}</strong>
            </p>
          </div>
        </div>

        <div
          class="col-md-3 mt-3 aqi-mobile-banda shadow"
          style="background-image: linear-gradient(to right, #54a0ff, #54a0ff)"
        >
          <div class="row">
            <div class="col">
              <p style="height: 30px; font-size: 50px; color: white">Suhu</p>
              <p style="font-weight: bold; font-size: 70px; color: white">
                {{ weather.temp }} C&deg;
              </p>
            </div>
            <div class="col">
              <p style="height: 30px; font-size: 50px; color: white">
                Kelembaban
              </p>
              <p style="font-weight: bold; font-size: 70px; color: white">
                <strong>{{ weather.humidity }} %</strong>
              </p>
            </div>
          </div>
          <!-- <div class="row justify-content-center" style="height: 18px">
                <p>Suhu</p>
              </div>
              <div class="row justify-content-center" style="height: 20px">
                <p style="font-weight: bold; font-size: 20px">
                  {{ weather.tp }} C&deg;
                </p>
              </div> -->
        </div>

        <!-- <div class="col-md-3 mt-1 aqi-mobile shadow">
              <div class="row justify-content-center" style="height: 20px">
                <p>Kelembaban</p>
              </div>
              <div class="row justify-content-center" style="height: 25px">
                <p style="font-size: 20px">
                  <strong>{{ weather.hu }} %</strong>
                </p>
              </div>
            </div> -->

        <!-- <h4 class="mt-2"><strong> Jadwal Sholat</strong></h4> -->
        <!-- <hr style="margin-top: -5px" /> -->

        <div class="col-md-3 mt-3 aqi-mobile-banda time-sholat shadow">
          <div class="row justify-content-center" style="height: 40px">
            <p style="font-size: 50px">
              {{ newHeaderSholat.toLocaleUpperCase() }}
            </p>
          </div>
          <div class="row justify-content-center" style="height: 25px">
            <p style="font-size: 70px">
              <strong>{{ newtimesholat }}</strong>
            </p>
          </div>
        </div>

        <!-- <div class="row px-2">
            <div
              class="col shadow mr-1"
              style="border-radius: 15px; height: 45px"
            >
              <p style="height: 5px; font-size: 13px">SUBUH</p>
              <p style="height: 10px; font-weight: bold">
                {{ jadwalSholat[0] }} WIB
              </p>
            </div>
            <div
              class="col shadow ml-1"
              style="border-radius: 15px; height: 45px"
            >
              <p style="height: 5px; font-size: 13px">SYURUQ</p>
              <p style="height: 10px; font-weight: bold">
                {{ jadwalSholat[1] }} WIB
              </p>
            </div>
          </div> -->

        <!-- <div class="row px-2 mt-2">
            <div
              class="col shadow mr-1"
              style="border-radius: 15px; height: 45px"
            >
              <p style="height: 5px; font-size: 13px">DZUHUR</p>
              <p style="height: 10px; font-weight: bold">
                {{ jadwalSholat[2] }} WIB
              </p>
            </div>
            <div
              class="col shadow ml-1"
              style="border-radius: 15px; height: 45px"
            >
              <p style="height: 5px; font-size: 13px">ASHAR</p>
              <p style="height: 10px; font-weight: bold">
                {{ jadwalSholat[3] }} WIB
              </p>
            </div>
          </div> -->
        <!--         
          <div class="row px-2 mt-2">
            <div
              class="col shadow mr-1"
              style="border-radius: 15px; height: 45px"
            >
              <p style="height: 5px; font-size: 13px">MAGHRIB</p>
              <p style="height: 10px; font-weight: bold">
                {{ jadwalSholat[4] }} WIB
              </p>
            </div>
            <div
              class="col shadow ml-1"
              style="border-radius: 15px; height: 45px"
            >
              <p style="height: 5px; font-size: 13px">ISYA</p>
              <p style="height: 10px; font-weight: bold">
                {{ jadwalSholat[5] }} WIB
              </p>
            </div>
          </div> -->

        <div class="row mt-4" style="background: white">
          <p style="font-size: 20px; margin-top: 5px; margin-left: 10px">
            Powered By : &nbsp;
          </p>
          <img
            src="../assets/iqair.png"
            width="120"
            style="object-fit: contain"
          />
          <img
            src="../assets/lhk.png"
            width="40"
            style="object-fit: contain; margin-left: 15px"
          />
          <img
            src="../assets/szy.png"
            width="200"
            style="object-fit: contain; margin-left: 15px"
          />
        </div>

        <!-- <div class="col-md-3">
              <div class="row aqi shadow" :style="lhk.bg">
                <img
                  :src="lhk.img"
                  width="0px"
                  style="margin-left: 8px; object-fit: contain"
                />
                <div class="col" :style="lhk.bgket + ';border-radius: 15px'">
                  <h6>PM2.5 &micro;g/m<sup>3</sup></h6>
                  <h6>{{ lhk.pm25 }}</h6>
                </div>
              </div>
            </div> -->
      </center>
    </div>
  </div>
</template>

<script>
import { jdwSholat, airCondition } from "../services/index";
// import json from "../assets/jadwalsholat/bandaaceh/01.json";
import json from "../../public/assets/jadwalsholat/bandaaceh/01.json";
import MarqueeText from "vue-marquee-text-component";
import DynamicMarquee from "vue-dynamic-marquee";

export default {
  name: "CardBanda",
  props: ["kota", "hari", "ymd", "sholat", "lhk", "lhkket"],
  components: {
    MarqueeText,
    DynamicMarquee,
  },
  data: () => ({
    show: true,
    jadwalSholat: [],
    // headerSholat: [
    //   "imsak",
    //   "subuh",
    //   "syuruq",
    //   "dhuha",
    //   "dzuhur",
    //   "ashar",
    //   "maghrib",
    //   "isya",
    // ],
    // headerSholat: ["subuh", "dzuhur", "ashar", "maghrib", "isya"],
    headerSholat: ["subuh", "syuruq", "dzuhur", "ashar", "maghrib", "isya"],
    pollution: {},
    weather: {},
    lhkpollinfo: {},
    note: "",
    img: "",
    bg: "",

    hours: 0,
    minutes: 0,
    seconds: 0,

    hours2: 0,
    minutes2: 0,
    seconds2: 0,

    newHeaderSholat: "",
    newtimesholat: "",
  }),
  created() {
    console.log(this.lhkket);
  },
  mounted() {
    console.log("card banda");

    // console.log("data");
    // console.log(this.hours);
    // console.log(this.minutes);
    this.getJadwalSholat();
    this.getAirCondition();
    // this.getRes();
    setInterval(() => this.setTime(), 1000);
    setInterval(() => this.setTime2(), 5000);
  },

  methods: {
    setTime() {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours;
      minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes;
      seconds = seconds <= 9 ? `${seconds}`.padStart(2, 0) : seconds;
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
      //   console.log(typeof this.hours);
      //   console.log(typeof this.minutes);
      //   var data = this.jadwalSholat[0];
      //   var data2 = data.substring(0, 2);
      //   var data3 = parseInt(data2);
      //   console.log(data3);
    },
    setTime2() {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours;
      minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes;
      seconds = seconds <= 9 ? `${seconds}`.padStart(2, 0) : seconds;
      this.hours2 = hours;
      this.minutes2 = minutes;
      this.seconds2 = seconds;
      //   console.log(typeof this.hours);
      //   console.log(typeof this.minutes);
      //   var data = this.jadwalSholat[0];
      //   var data2 = data.substring(0, 2);
      //   var data3 = parseInt(data2);

      var data = parseInt(this.hours2);
      //   console.log(data3);

      for (let index = 0; index < this.jadwalSholat.length; index++) {
        const element = this.jadwalSholat[index];
        // console.log(element);
        var el1 = element.substring(0, 2);

        var el2 = parseInt(el1);
        // console.log(el2);
        // console.log(data);

        if (data < el2 + 0.75) {
          this.newHeaderSholat = this.headerSholat[index];
          this.newtimesholat = this.jadwalSholat[index] + " WIB";
          // console.log(this.jadwalSholat[index]);
          // console.log(this.headerSholat[index]);
          break;
        }

        // console.log();
        // if (data3 >= el2) {
        //   console.log(el1);
        // }
      }
      // console.log("=========================");
    },
    getDay(value) {
      let nameDay = "Senin, ";

      if (value == 1) {
        nameDay = "Senin ";
      } else if (value == 2) {
        nameDay = "Selasa ";
      } else if (value == 3) {
        nameDay = "Rabu ";
      } else if (value == 4) {
        nameDay = "Kamis ";
      } else if (value == 5) {
        nameDay = "Jum'at ";
      } else if (value == 6) {
        nameDay = "Sabtu ";
      } else if (value == 7) {
        nameDay = "Minggu ";
      }
      return nameDay;
    },

    getJadwalSholat() {
      // const today = new Date();
      // const yyyy = today.getFullYear();
      // let mm = today.getMonth() + 1; // Months start at 0!
      // let dd = today.getDate();
      // if (dd < 10) dd = "0" + dd;
      // if (mm < 10) mm = "0" + mm;
      // const formattedToday = yyyy + "-" + mm + "-" + dd;
      // let obj = json.find((val) => val.tanggal === formattedToday);
      // this.jadwalSholat.push(obj.shubuh);
      // this.jadwalSholat.push(obj.terbit);
      // this.jadwalSholat.push(obj.dzuhur);
      // this.jadwalSholat.push(obj.ashr);
      // this.jadwalSholat.push(obj.magrib);
      // this.jadwalSholat.push(obj.isya);
      jdwSholat(119)
        .then((res) => {
          // console.log(res);
          if (res.status == 200 && res.statusText == "") {
            // console.log(res.data.data.jadwal);
            // this.jadwalSholat.push(res.data.jadwal.imsak);
            this.jadwalSholat.push(res.data.results[0].subuh);
            this.jadwalSholat.push(res.data.results[0].terbit);
            // this.jadwalSholat.push(res.data.jadwal.dhuha);
            this.jadwalSholat.push(res.data.results[0].dzuhur);
            this.jadwalSholat.push(res.data.results[0].ashar);
            this.jadwalSholat.push(res.data.results[0].magrib);
            this.jadwalSholat.push(res.data.results[0].isya);
            // console.log(this.jadwalSholat);
          }
          // console.log(this.jadwalSholat);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getAirCondition() {
      airCondition(this.kota)
        .then((res) => {
          // console.log("Data");
          // console.log(res);
          if (res.status == 200 && res.statusText == "") {
            this.pollution = res.data.results.current.pollution;
            this.weather = res.data.results.current.weather;
            // console.log(this.weather);
            // this.getRes();
          } else {
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getRes() {
      // if (this.pollution.aqius >= 0 && this.pollution.aqius <= 50) {
      //   this.note = "Baik";
      //   this.bg = "background-color:#abd25f";
      //   this.img = "../assets/images/good.png";
      // } else if (this.pollution.aqius >= 51 && this.pollution.aqius <= 100) {
      //   this.note = "Sedang";
      //   this.bg = "background-color:#fdd748";
      //   this.img = "../assets/images/moderate.png";
      // } else if (this.pollution.aqius >= 101 && this.pollution.aqius <= 150) {
      //   this.note = "Tidak sehat untuk kelompok sensitif";
      //   this.bg = "background-color:#f79c56";
      //   this.img = "../assets/images/moderate.png";
      // } else if (this.pollution.aqius >= 151 && this.pollution.aqius <= 200) {
      //   this.note = "Tidak sehat";
      //   this.bg = "background-color:#f6676b";
      //   this.img = "../assets/images/unhealty.png";
      // } else if (this.pollution.aqius >= 201 && this.pollution.aqius <= 300) {
      //   this.note = "Sangat tidak sehat";
      //   this.bg = "background-color:#a37db8";
      //   this.img = "../assets/images/vu.png";
      // } else {
      //   this.note = "Berbahaya";
      //   this.bg = "background-color:#a07682";
      //   this.img = "../assets/images/hazardouse.png";
      // }
      // console.log(this.city);
      // console.log(this.lhk);
      if (this.lhk.ispu >= 0 && this.lhk.ispu <= 50) {
        this.note = this.lhk.ket;
        this.bg = "background-color:#abd25f";
        this.img = "../assets/images/good.png";
      } else if (this.lhk.ispu >= 51 && this.lhk.ispu <= 100) {
        this.note = this.lhk.ket;
        this.bg = "background-color:#fdd748";
        this.img = "../assets/images/moderate.png";
      } else if (this.lhk.ispu >= 101 && this.lhk.ispu <= 200) {
        this.note = this.lhk.ket;
        this.bg = "background-color:#f6676b";
        this.img = "../assets/images/unhealty.png";
      } else if (this.lhk.ispu >= 201 && this.lhk.ispu <= 300) {
        this.note = this.lhk.ket;
        this.bg = "background-color:#a37db8";
        this.img = "../assets/images/vu.png";
      } else if (this.lhk.ispu >= 301) {
        this.note = this.lhk.ket;
        this.bg = "background-color:#a07682";
        this.img = "../assets/images/hazardouse.png";
      }
    },
  },
};
</script>

<style scoped>
.col-md-3 {
  border-radius: 15px;
}

.aqi {
  border-radius: 15px;
  margin-right: 1px;
}

.aqi-mobile {
  border-radius: 15px;
  /* margin-right: 1px; */
  height: 50px;
}

.aqi-mobile-banda {
  border-radius: 15px;
  /* margin-right: 1px; */
  height: 145px;
}

.pm25 {
  background-color: #ffe4d4;
  /* background-image: radial-gradient(
      circle at 12.5% 12.5%,
      #ffe4d4 0,
      #ffd9cf 12.5%,
      #f4cec8 25%,
      #dfc1bf 37.5%,
      #c8b4b4 50%,
      #b1a7a7 62.5%,
      #9c9b9b 75%,
      #8a9190 87.5%,
      #7b8884 100%
    ); */
}

.aqi p {
  font-size: 20px;
}

.polutan {
  height: 125px;
  border-radius: 15px;
  background-color: whitesmoke;
}

.polutan:hover {
  background-color: #e3dbdb;
  cursor: pointer;
}

.temp {
  height: 125px;
  border-radius: 15px;
  /* background-color: whitesmoke; */
  background-image: linear-gradient(to right, #ee5253, #54a0ff);
}

.temp:hover {
  background-image: linear-gradient(to right, #54a0ff, #ee5253);
  /* background-image: whitesmoke; */
  cursor: pointer;
}

.humidity {
  border-radius: 15px;
  background-color: whitesmoke;
  height: 125px;
}

.humidity:hover {
  background-color: #e3dbdb;
  cursor: pointer;
}

.content-jadwal {
  background-color: whitesmoke;
  margin-top: 10px;
  border-radius: 15px;
}

.content-jadwal:hover {
  background-color: #e3dbdb;
}

.clock {
  margin-right: 80px;
}

.time-sholat {
  background-image: radial-gradient(
    circle at 12.5% 12.5%,
    #c1f575 0,
    #abef71 16.67%,
    #90e66b 33.33%,
    #6fda63 50%,
    #47ce5d 66.67%,
    #00c55b 83.33%,
    #00bd5d 100%
  );
}
.current-time {
  background-color: rgb(88, 88, 88);
}
</style>
