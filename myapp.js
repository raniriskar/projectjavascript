//silahkan isi nama kamu, lalu untuk memulai game pilih mata pelajaran favorit kamu, 
//mata pelajaran yg tersedia diantaranya: inggris, sejarah, dan IPA

var nama=prompt('Silahkan isi Nama Kamu:');
alert('Hai '+nama+' selamat Datang di Game TEBAK SOAL');

var object=prompt('Silahkan Pilih Mata Pelajaran untuk memulai game');
alert('Selamat datang di Pelajaran '+object);

var jawaban;
var nilai;
var nilai2;
var nilai3;
var nilai4;
var nilai5;
var total;

if(object=='inggris' || object=='Inggris'){
  jawaban=prompt('No 1. What is the Anthonym of Thin ?');
    if(jawaban=='Fat' || jawab=='fat'){
      nilai=20;
      alert('That\'s Correct \n You got '+nilai);
    } else{
      nilai=0;
      alert('That\'s Incorrect. Your point is '+nilai);
    }
  
 jawaban=prompt('No 2. Arrange this words !\n Sandi - name - is - His');
    if(jawaban=='His name is sandi' || jawab=='his name is sandi'){
      nilai2= 20;
      alert('That\'s Correct \n You got score '+nilai2);
    } else{
      nilai2= 0;
      alert('That\'s Incorrect. Your score is 0');
    }
 jawaban=prompt('No 3. We ..... students');
    if(jawaban=='are' || jawab=='Are'){
     nilai3= 20;
      alert('That\'s Correct \n You got score '+nilai3);
    } else{
      nilai3= 0;
      alert('That\'s Incorrect. Your score is 0');
    }
 jawaban=prompt('No 4. We mush have ... Before going to school');
    if(jawaban=='Breakfast' || jawab=='breakfast'){
     nilai4= 20;
      alert('That\'s Correct \n You got score '+nilai4);
    } else{
      nilai4= 0;
      alert('That\'s Incorrect. Your score is 0');
    }
 jawaban=prompt('No 5. We put the clothes inside the ...');
    if(jawaban=='Wardrobe' || jawab=='wardrobe'){
     nilai5= 20;
     total= nilai+nilai2+nilai3+nilai4+nilai5;
      alert('That\'s Correct \n You got score '+nilai5);
      console.log('Your Total Score is '+total);
    } else{
      nilai5= 0;
      total= nilai+nilai2+nilai3+nilai4;
      alert('That\'s Incorrect. Your total score is '+nilai5);
      console.log('Your Total Score is '+total);
    }
  
}else if (object=='sejarah' || object=='Sejarah'){
 jawaban=prompt('Soal ke-1. Suku Osing berasal dari ...?');
    if(jawaban=='Madura' || jawab=='madura'){
      nilai=20;
      alert('Jawaban kamu benar \n kamu mendapat nilai '+nilai);
    } else{
      nilai=0;
      alert('jawaban kamu salah nilai kamu '+nilai);
    }
 jawaban=prompt('Soal ke-2. Dataran yang terbentuk dari endapan lumpur sungai di muara disebut ...?');
    if(jawaban=='Delta' || jawab=='delta'){
      nilai2=20;
      alert('Jawaban kamu benar \n kamu mendapat nilai '+nilai2);
    } else{
      nilai2=0;
      alert('jawaban kamu salah nilai kamu '+nilai2);
    }
 jawaban=prompt('Soal ke-3. Laut yang menjorok ke daratan disebut...?');
    if(jawaban=='Teluk' || jawab=='teluk'){
      nilai3=20;
      alert('Jawaban kamu benar \n kamu mendapat nilai '+nilai3);
    } else{
      nilai3=0;
      alert('jawaban kamu salah nilai kamu '+nilai3);
    }
 jawaban=prompt('Soal ke-4. Warna kuning pada peta melambangkan permukaan bumi...?');
    if(jawaban=='Dataran tinggi' || jawab=='dataran tinggi'){
      nilai4=20;
      alert('Jawaban kamu benar \n kamu mendapat nilai '+nilai4);
    } else{
      nilai4=0;
      alert('jawaban kamu salah nilai kamu '+nilai4);
    }
 jawaban=prompt('Soal ke-5. Kitab Sutasoma dikarang oleh...?');
    if(jawaban=='Mpu Tantular' || jawab=='mpu tantular'){
      nilai5=20;
      total= nilai+nilai2+nilai3+nilai4+nilai5;
      alert('Jawaban kamu benar \n kamu mendapat nilai '+nilai5);
      console.log('Total nilai kamu adalah '+total);
    } else{
      nilai5=0;
      total= nilai+nilai2+nilai3+nilai4;
      alert('jawaban kamu salah nilai kamu '+nilai5);
      console.log('Total nilai kamu adalah '+total);
    }
  
  }else if (object=='IPA' || object=='ipa'){
jawaban=prompt('Soal ke-1. Pengikisan tanah akibat terjangan air disebut...?');
    if(jawaban=='Erosi' || jawab=='erosi'){
      nilai=20;
      alert('Jawaban kamu benar \n kamu mendapat nilai '+nilai);
    } else{
      nilai=0;
      alert('jawaban kamu salah nilai kamu '+nilai);
    }
jawaban=prompt('Soal ke-2. Alat untuk mengukur gaya adalah...?');
    if(jawaban=='Dinamometer' || jawab=='dinamometer'){
      nilai2=20;
      alert('Jawaban kamu benar \n kamu mendapat nilai '+nilai2);
    } else{
      nilai2=0;
      alert('jawaban kamu salah nilai kamu '+nilai2);
    }
jawaban=prompt('Soal ke-3. Anak panah meleset dari busurnya karena pengaruh gaya...?');
    if(jawaban=='Pegas' || jawab=='pegas'){
      nilai3=20;
      alert('Jawaban kamu benar \n kamu mendapat nilai '+nilai3);
    } else{
      nilai3=0;
      alert('jawaban kamu salah nilai kamu '+nilai3);
    }
jawaban=prompt('Soal ke-4. Satuan gaya adalah...?');
    if(jawaban=='Newton' || jawab=='newton'){
      nilai4=20;
      alert('Jawaban kamu benar \n kamu mendapat nilai '+nilai4);
    } else{
      nilai4=0;
      alert('jawaban kamu salah nilai kamu '+nilai4);
    }
jawaban=prompt('Soal ke-5. Perpindahan panas melalui suatu zat tanpa disertai perpindahan partikel zat disebut....?');
    if(jawaban=='Konduksi' || jawab=='konduksi'){
      nilai5=20;
      total= nilai+nilai2+nilai3+nilai4+nilai5;
      alert('Jawaban kamu benar \n kamu mendapat nilai '+nilai5);
      console.log('Total nilai kamu adalah '+total);
    } else{
      nilai5=0;
      total= nilai+nilai2+nilai3+nilai4;
      alert('jawaban kamu salah nilai kamu '+nilai5);
      console.log('Total nilai kamu adalah '+total);
    }
}

if (total==100){
console.log('CONGRATULATION '+nama+' YOU ARE WIN');
}
else if(total==80){
console.log('Congratulation '+nama+' You almost perfect');
}
else{
console.log('Upss..You are LOSE...');
}

