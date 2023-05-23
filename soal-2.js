const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const gabungHewan = [...hewanBuas, ...hewanJinak];

const gabung = () => console.log(gabungHewan);

const makananKesukaan = () => {
    let ikan, wortel, bijBijian;
    [ikan, wortel, bijiBijian] = hewanJinak;
    console.log("Ikan : " + ikan);
    console.log("Wortel : " + wortel);
    console.log("Biji-bijian : " + bijiBijian);
  };


console.log(makananKesukaan());

const cetak = new Promise((a) => {
    setTimeout(() => {
      a(gabung());
    }, 5000);
  });