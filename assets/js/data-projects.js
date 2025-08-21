const projectsData = [
    // Company
    {
      category: "company",
      url: "https://cool-compass.mycool.id/login",
      img: "assets/images/portfolio/company1.png",
      imgAlt: "Dashboard Admin Cool App",
      title: "Full Stack Developer on Cool App",
      desc: "Company Project"
    },
    {
      category: "company",
      url: "https://sys.riderunner.my/login",
      img: "assets/images/portfolio/company2.png",
      imgAlt: "Dashboard admin Ride Runner",
      title: "Full Stack Developer on RideRunner",
      desc: "Company Project"
    },
    {
      category: "company",
      url: "https://braingem.lcpsolution.com",
      img: "assets/images/portfolio/company3.png",
      imgAlt: "Dashboard Admin BrainGem",
      title: "Full Stack Developer on BrainGem",
      desc: "Company Project"
    },
    {
      category: "company",
      url: "https://xxlspaceshare.com/login",
      img: "assets/images/portfolio/company4.png",
      imgAlt: "Dashboard XXL SpaceShare",
      title: "Full Stack Developer on XXL SpaceShare",
      desc: "Company Project"
    },
    {
      category: "company",
      url: "https://econframe.com",
      img: "assets/images/portfolio/company5.png",
      imgAlt: "Dashboard Econframe",
      title: "Full Stack Developer on Econframe",
      desc: "Company Project"
    },
    {
      category: "company",
      url: "https://www.mig.co.id",
      img: "assets/images/portfolio/company6.png",
      imgAlt: "Landing Page MIG",
      title: "Full Stack Developer for MIG Website",
      desc: "Company Project"
    },
    {
      category: "company",
      url: "https://old.bpd.web.id",
      img: "assets/images/portfolio/company7.png",
      imgAlt: "Landing Page BPD",
      title: "Full Stack Developer for BPD Website",
      desc: "Company Project"
    },
    {
      category: "company",
      url: "https://nastah.com.my",
      img: "assets/images/portfolio/company8.jpg",
      imgAlt: "Landing Page Nastah Industries",
      title: "Full Stack Developer for Nastah Industries Dashboard",
      desc: "Company Project"
    },
    {
      category: "company",
      url: "https://budidana.id/?fbclid=PAZXh0bgNhZW0CMTEAAad6CUX1iR0zl8VGT6Trtw1xQqqflCLMmbIcfywExG7yVOVc_4eMrF-L4j8u7A_aem_2MnsvsgnA5nRAm3G0fgfeg",
      img: "assets/images/portfolio/company9.png",
      imgAlt: "Budidana Website",
      title: "Backend Developer for Budidana",
      desc: "Company Project"
    },
    // Personal
    {
      category: "personal",
      url: "https://github.com/zidniahmeed/moonton?tab=readme-ov-file",
      img: "assets/images/portfolio/personal1.png",
      imgAlt: "MoontoN App, Streaming Application",
      title: "MoontoN App, Streaming Application",
      desc: "Personal Project"
    },
    {
      category: "personal",
      url: "https://github.com/zidniahmeed/Rest-api-express",
      img: "assets/images/portfolio/personal2.png",
      imgAlt: "REST API ExpressJS",
      title: "REST API ExpressJS",
      desc: "Personal Project"
    },
    {
      category: "personal",
      url: "https://github.com/zidniahmeed/absensi_guru",
      img: "assets/images/portfolio/personal4.png",
      imgAlt: "Absensi Guru with Photo & Geo Location",
      title: "Absensi Guru with Photo & Geo Location",
      desc: "Personal Project"
    },
    {
      category: "personal",
      url: "https://mashlahah.roudlotussalam.com",
      img: "assets/images/portfolio/personal3.png",
      imgAlt: "Maslahah Website Sedekah Masjid",
      title: "Maslahah Website Sedekah Masjid",
      desc: "Personal Project"
    },
    {
      category: "personal",
      url: "https://github.com/zidniahmeed/absensi_karyawan_barcode",
      img: "assets/images/portfolio/personal5.png",
      imgAlt: "Absensi Karyawan with QR Code & GPS",
      title: "Absensi Karyawan with QR Code & GPS",
      desc: "Personal Project"
    },
    {
      category: "personal",
      url: "https://github.com/zidniahmeed/aplikasi_absensi_karyawan",
      img: "assets/images/portfolio/personal6.png",
      imgAlt: "Absensi Karyawan Mobile View",
      title: "Absensi Karyawan Mobile View",
      desc: "Personal Project"
    },
    // Freelance
    {
      category: "freelance",
      url: "https://ci4pendaftaranseminar.jokifigma.cloud",
      img: "assets/images/portfolio/freelance1.png",
      imgAlt: "Website Seminar",
      title: "Website Seminar",
      desc: "Freelance"
    },
    {
      category: "freelance",
      url: "https://laravelpertaminatukarpoin.jokifigma.cloud/home",
      img: "assets/images/portfolio/freelance2.png",
      imgAlt: "Website Pertamina Tukar Point",
      title: "Website Pertamina Tukar Point",
      desc: "Freelance"
    },
    {
      category: "freelance",
      url: "https://laravellaporanpertamina.my.id",
      img: "assets/images/portfolio/freelance3.png",
      imgAlt: "Agen Reporting Hub Pertamina",
      title: "Agen Reporting Hub Pertamina",
      desc: "Freelance"
    },
    {
      category: "freelance",
      url: "https://ci3inventorieoq.jokifigma.cloud",
      img: "assets/images/portfolio/freelance4.png",
      imgAlt: "Website Untuk Inventory Gudang Menggunakan CI4",
      title: "Website Untuk Inventory Gudang Menggunakan CI4",
      desc: "Freelance"
    },
    {
      category: "freelance",
      url: "https://sipkk.jokifigma.cloud",
      img: "assets/images/portfolio/freelance5.png",
      imgAlt: "Website Untuk Informasi PKK",
      title: "Website Untuk Informasi PKK",
      desc: "Freelance"
    },
    {
      category: "freelance",
      url: "https://laravellaporanpertamina.my.id",
      img: "assets/images/portfolio/freelance6.png",
      imgAlt: "Website Kasir Kecantikan",
      title: "Website Kasir Kecantikan",
      desc: "Freelance"
    },
    {
      category: "freelance",
      url: "https://ci4seminarproposal.jokifigma.cloud",
      img: "assets/images/portfolio/freelance7.png",
      imgAlt: "Website Untuk Mengajukan Permohonan Proposal Mahasiswa",
      title: "Website Untuk Mengajukan Permohonan Proposal Mahasiswa",
      desc: "Freelance"
    },
    {
      category: "freelance",
      url: "https://pengajuankaryawan.jokifigma.cloud/",
      img: "assets/images/portfolio/freelance8.png",
      imgAlt: "Website Untuk Mengajukan Permohonan Karyawan",
      title: "Website Untuk Mengajukan Permohonan Karyawan",
      desc: "Freelance"
    },
    {
      category: "freelance",
      url: "https://honorarium.jokifigma.cloud/index.php/home",
      img: "assets/images/portfolio/freelance9.png",
      imgAlt: "Website Untuk Mengajukan Honor Dosen",
      title: "Website Untuk Mengajukan Honor Dosen",
      desc: "Freelance"
    },
    
  ];