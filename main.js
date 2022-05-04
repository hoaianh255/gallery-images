(() => {
  const images = [
    {
      src: './img/bua_an_toi_cuoi_cung.jpg',
      col: 2,
      row: 1
    },
    {
      src: './img/chan_dung_khong_rau_cua_vincent_van_gogh.jpg',
      col: 1,
      row: 2
    },
    {
      src: '/img/dem_day_sao.jpg',
      col: 2,
      row: 1
    },
    {
      src: './img/mona_lisa.jpg',
      col: 1,
      row: 2
    },
    {
      src: '/img/thieu_nu_deo_hoa_tai_ngoc_trai.jpg',
      col: 1,
      row: 2
    },
    {
      src: './img/guernica.jpg',
      col: 2,
      row: 1
    },
    {
      src: './img/tuan_tra_dem.jpg',
      col: 2,
      row: 1
    },
   
    {
      src: './img/sang_tao_cua_adam.jpg',
      col: 2,
      row: 2
    },
    {
      src: './img/su_dai_dang_cua_ky_uc.jpg',
      col: 2,
      row: 2
    },
    
    {
      src: './img/tieng_thet.jpg',
      col: 1,
      row: 2
    }
  ];
  const galleria = document.querySelector('.galleria');


  for (let i = 0; i < images.length; i++) {
    let divimg = document.createElement('div');
    divimg.style.backgroundImage = `url(${images[i].src})`;
    if (images[i].col > 1) {
      divimg.classList.add(`img-col-${images[i].col}`)
    }
    if (images[i].row > 1) {
      divimg.classList.add(`img-row-${images[i].row}`)
    }
    galleria.append(divimg)
  }


})()