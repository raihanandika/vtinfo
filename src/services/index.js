import axios from "axios";

// const urlSholat = "https://api.myquran.com/v1/sholat/jadwal/";
const urlSholat = "https://ssam.suzuyagroup.com/api/sholat";
const urlAir = "https://ssam.suzuyagroup.com/api/data/iqair";

const urlIspuMedan =
  "https://ispu.menlhk.go.id/apimobile/v1/getDetail/stasiun/DLH_MEDAN_02";

const urlIspuAceh =
  "https://ispu.menlhk.go.id/apimobile/v1/getDetail/stasiun/ACEH";

const urlBmkg = "https://ssam.suzuyagroup.com/api/data/bmkg";

// const urlAirMedan =
//   "https://api.airvisual.com/v2/city?city=Medan&state=North%20Sumatra&country=Indonesia&key=9f373c46-a5e1-4836-a1ea-12b40d56bb92";

// const urlAirAceh =
//   "http://api.airvisual.com/v2/city?city=Banda%20Aceh&state=Aceh&country=Indonesia&key=9f373c46-a5e1-4836-a1ea-12b40d56bb92";

// https://ispu.menlhk.go.id/webv4/#/

// ispu aceh = "https://ispu.menlhk.go.id/apimobile/v1/getDetail/stasiun/ACEH";
// ispu medan = "https://ispu.menlhk.go.id/apimobile/v1/getDetail/stasiun/DLH_MEDAN_02";

export async function infoBmkg(city) {
  const response = await axios.post(urlBmkg, {
    city: city,
  });
  return response;
}

// export async function jdwSholat(date) {
//   // console.log(urlSholat + date);
//   const response = await axios.get(urlSholat + date);
//   return response;
// }

export async function jdwSholat(id) {
  const response = await axios.post(urlSholat, {
    idkota: id,
  });
  return response;
}

export async function airCondition(city) {
  const response = await axios.post(urlAir, {
    city: city,
  });
  // console.log(response);
  return response;
}

export async function ispumedan() {
  const response = await axios.get(urlIspuMedan);
  return response;
}

export async function ispuaceh() {
  const response = await axios.get(urlIspuAceh);
  return response;
}

// export async function jdwSholat(date) {
//   const response = await axios.get("http://localhost:3004/data");
//   return response;
// }

// export async function airCondition() {
//   const response = await axios.get(urlAir);
//   return response;
// }
