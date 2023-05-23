let mahasiswa = {
    nama: "Amelia Siregar",
    nim: "01022111011",
    email: "ameliasiregaramel@gmail.com",
  };
  
  console.log(
    "Nama : " +
      mahasiswa.nama +
      "\nNIM : " +
      mahasiswa.nim +
      "\nEmail : " +
      mahasiswa.email
  );
  
  const teman1 = ["Lili", "Alya"];
  const teman2 = ["Tri", "Suci"];
  const teman3 = ["Maul", "Bunga"];
  
  const freinds = [...teman1, ...teman2, ...teman3];
  console.log(freinds);
  