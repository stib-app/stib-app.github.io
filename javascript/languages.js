//  Vietnamese
var db_vn = [

    { "header": ["TẢI XUỐNG", "TẠI SAO StiB?", "LIÊN HỆ"] },
    {
        "title":
            [
                "Giao Dịch (mua/bán + cho vay/mượn) P2P trên Hợp Đồng Thông Minh StiB",
                "Miễn phí Giao Dịch",
                "Bảo Vệ Pháp Lý",
                "Chia Sẻ Lợi Nhuận",
                "Đơn giản và đẹp mắt với các tính năng tuyệt vời",
                "Hướng dẫn",
                "Có phiên bản cho Android!",
                "Có phiên bản cho iOS!"]
    },
    {
        "about":
            ["Giới thiệu StiB Apps",
                "THIẾT KẾ, PHÁT TRIỂN SÀN PHI TẬP TRUNG CHO MỌI NGƯỜI VỚI NHỮNG TÍNH NĂNG ĐỘC NHẤT",

                "StiB P2P",
                "Giao dịch và vay cũng như bảo hiểm và đầu tư với global P2P networks của chúng tôi",
                "Stib CHARITY",
                "Mục tiêu của chúng tôi là xây dựng một mô hình tự cung và tự cấp trong một cộng đồng được nhân rộng trên toàn cầu",
                "StiB REWARDS",
                "Tặng cho đối tác mã giảm giá và những phần thưởng qua những giao dịch như cho vay, vay, đầu tư, bảo hiểm...",
                "StiB AI",
                "Chúng tôi sẽ bắt đầu sử dụng Trí Tuệ Nhân Tạo với AI Chat để hỗ trợ giao dịch và cho vay", "TÌM HIỂU THÊM"]
    },
    {
        "why":
            ["Tại Sao Nên Giao Dịch Trên Hợp Đồng Thông Minh StiB?", "KHÔNG PHÍ GIAO DỊCH",
                "Luôn luôn miễn phí giao dịch với Hợp Đồng Thông Minh StiB vì những rủi ro sẽ thuộc về bạn và những người khác!",
                "CHIA SẺ LỢI NHUẬN", "Chúng tôi chia sẻ lợi nhuận cũng như tiền lãi với StiB Reserves thông qua đối tác.",
                "BẢO VỆ PHÁP LÝ", "Bảo vệ người giao dịch/khách hàng với StiB Legals bao gồm luật sư trong nước và quốc tế.",
                "TIỆN LỢI", "Dễ sử dụng, giao diện đẹp mắt và có mặt trên 200 quốc gia với hơn 10 ngôn ngữ phổ biến."]
    },
    {
        "step":
            ["MUA/BÁN P2P", "Bước", " Người bán gửi đến Hợp Đồng Thông Minh StiB", " Người mua gửi tiền",
                " Người bán giải phóng", "CHO VAY/MƯỢN P2P", " Người vay gửi tiền đến Hợp Đồng Thông Minh StiB",
                " Người cho vay gửi khoản vay", " Người vay trả tiền vay", " Người cho vay giải phóng",
                "LIÊN HỆ", "ĐIỀU KHOẢN", "BẢO MẬT"]
    },
    {
        "video": ["huongdantai-androi", "trade-vn", "loan-vn"]

    }, {
        "image": ["taixuong-androi", "taixuong-androi-hover"]
    }, {
        "contact": ["(+84) 906 097 525", "Saigon, Vietnam", "https://t.me/StiBvietnam", "https://www.facebook.com/stibvietnam?fref=search&__tn__=%2Cd%2CP-R&eid=ARDUostO1lX8WAmIX_-jqEmkdeKpmCP-hnOIR-wgLeb83JPqLUNby9UdwP0q8OW4BcGqduupN7HsM9xe"]
    }];
//  english
var db_en = [

    { "header": ["DOWNLOAD", "WHY StiB?", "CONTACT US"] },
    {
        "title":
            [
                "Trading/Lending P2P on StiB's smart contracts",
                "Commissions FREE",
                "Legal Protections",
                "Profit Sharing",
                "Simple & beautiful with amazing features.",
                "Instructions",
                "Also available on Android!",
                "Also available on iOS!"]
    },
    {
        "about":
            ["About StiB Apps",
                "DESIGNED, DEVELOPED AND DECENTRALIZED FOR EVERYONE WITH UNIQUE FEATURES",

                "StiB P2P",
                "For trading and lending as well as insuring and investing with our global P2P networks",
                "Stib CHARITY",
                "The goal is to build a self-sustainable and self-sufficient model of an amazing community to be replicated globally",
                "StiB REWARDS",
                "For spending at our partners on deep discounts and earn rewards through your trading, lending, investing, insuring, etc ...",
                "StiB AI",
                "We will initially begin Artificial Intelligence with AI Chat to assist with trading and lending",
                "LEARN MORE"]
    },
    {
        "why":
            ["WHY TRADING/LENDING WITH StiB'S SMART CONTRACTS ?",
                "COMMISSIONS FREE",
                "Always commissions free Escrow with StiB's Smart Contracts since the risks will be on you with other peers!",
                "PROFIT SHARING",
                "We are sharing the profits as well as interests with StiB Reserves.",
                "LEGAL PROTECTIONS",
                "Protect traders/clients with StiB Legals comprised of local lawyers internationally",
                "CONVENIENCE",
                "Easy to use, beautiful UI/UX & available 200+ countries + 10 most popular languages"]
    },
    {
        "step":
            ["TRADING P2P", "Step", " Seller Deposits to StiB's Smart Contracts", " Buyer Marks as paid",
                " Seller Releases.", "LENDING P2P", " Borrower Deposits to StiB's Smart Contracts",
                " Lender Sends the loan.", " Borrower Repays the loan.", " Lender Releases.",
                "CONTACT US", "ToS", "PRIVACY"]
    }, {
        "video": ["Instruction", "trade-en", "loan-en"]

    }, {
        "image": ["google", "app-store-android"]
    }, {
        "contact": ["(+1)(617) 863-7286", "Boston, MA, USA", "https://t.me/StiBenglish", "https://www.facebook.com/StiBLabs/"]
    }];

//  get Ip location Viet Nam to set languages

    
    

fetch('https://ipinfo.io/')
.then(res => res.json())
.then(json => {
    console.log(json)
})
.catch(err => {
    console.log(err);
    $("#body_content").empty().html(body(db_en))
    $(".btn-current-lang").html("EN <i class='fas fa-greater-than'></i>");
    $(".btnEngLang").addClass("lang-active");
})


//  set languages
function body(db) {
    var body_vn =
        `<div class="header" id="header">
    <div class="container_header  d-flex flex-row align-items-center justify-content-space-between ">
        <div class="logo" id="logo-header">
            <a href="https://stib.co/" >  <img src="images/svg/logo.svg" style="width: auto; height: 27px" />  </a>
            <div class="btn-current-lang lang-active" id="btn-current-lang" style="cursor: pointer;font-size: 10px; ; "> </div>

                <div class="dual-lang" style="display: none">
                <div class="lang-option d-flex flex-column" >
                <a  href="#" class="vn lang btnVnLang ">VN <i class="fas fa-check"></i> </a>
                <a  href="#" class="eng lang btnEngLang "> EN <i class="fas fa-check"></i></a>	
                </div>
                </div>
              
                
          
        </div>
        <div></div>
        <!-- icon for reponsive mobile open menu -->
        <div id="icon_menu">
            <i class="fas fa-bars fa-2x" style="color: #ff9f1a; font-size: 20px;" id="icon_menu1"></i>
        </div>
        <div id="icon_menu_close">
            <img src="images/svg/cross-out.svg" alt="" class="img-fluid" style="max-width: 80%;">
        </div>
        <!-- menu -->
        <div class="sub_menu" id="change-color">
            <ul>
                <li><a href="#" id="n1">`+ db[0].header[0] + `</a> </li>
                <li><a href="#" id="n2">`+ db[0].header[1] + `</a></li>
                <li><a href="#" id="n3">`+ db[0].header[2] + `</a></li>
            </ul>
        </div>
    </div>
</div>
<!-- end of header -->
<!-- /////////////////////////////////////////////////////////// -->
<!-- introduce StiB APP -->
<div id="downloadId" class="main_app d-flex flex-row justify-content-center align-items-center">

    <div class="container">
        <div class="box row">
            <div class="app_sub col-lg-6 col-md-6 col-12">
                <div class="circle d-flex justify-content-center">
                    <div class="circle1">
                    <img src="images/svg/logo.svg" alt="">
                    <div class="btn-current-lang lang-active" id="btn-current-lang" style="cursor: pointer"> </div>
                    <div class="dual-lang" style="display: none">
               
                          <div class="lang-option d-flex flex-column" >
                           <a href="#" class="vn lang btnVnLang">VN <i class="fas fa-check"></i> </a>
                           <a  href="#" class="eng lang btnEngLang"> EN <i class="fas fa-check"></i></a>
                          </div>	
                    </div>
                    </div>                 
                </div>
                <h1 class="line-after">Simply a better digital
                    exchange</h1>
                <p class="sub-title" style="color: #333; font-style: italic; font-weight: bold;">`+ db[1].title[0] + `</p>
                <ul class="list-service">
                    <li><i class="fas fa-check"></i> <span>`+ db[1].title[1] + `</span></li>
                    <li><i class="fas fa-check"></i> <span>`+ db[1].title[2] + `</span></li>
                    <li><i class="fas fa-check"></i> <span>`+ db[1].title[3] + `</span></li>
                    <li><i class="fas fa-check"></i> <span>`+ db[1].title[4] + `</span></li>
                </ul>
                <div class="store d-flex flex-column">
                    <div class="androi" style="margin-bottom: 60px">
                        <div class="wrapper-link-android">                          
                            <div class="wrapper-link-android">                          
                        <div class="wrapper-link-android">                          
                            <a
                            href="https://play.google.com/store/apps/details?id=com.StiBLabs.StiBp2p" target="_blank" >
                            <img class="btn-android" width="200" height="auto"
                            src="images/background/`+ db[6].image[0] + `.png"> 
                           <img class="btn-android-hover" width="200" height="auto"
                           src="images/background/`+ db[6].image[1] + `.png">
                               
                        </a>
                            <div class="wrapper btn-video">
                                <button type="button" class="video-btn rounded-circle" data-toggle="modal"
                                    data-target="#modelId">
                                    <i class="fas fa-play"></i>
                                    <div>
                                        <p class="tooltip-video">`+ db[1].title[5] + `</p>
                                    </div>
                                </button>
                            </div>
                           <div class="qr-wrapper">
                                <img src="images/background/apk.png" alt="" class="img-fluid">
                            </div> 
                                </div> 
                            </div> 
                        </div>
                        <div class="wrapper-link-ios" style="position: relative;">
                            <a
                                href="#">
                                <img class="btn-ios" width="200" height="auto"
                                    src="images/background/apk-ios.png">
                                <img class="btn-ios-hover" width="200" height="auto"
                                    src="images/background/apk-ios-hover.png">
                            </a>
                            <div class="wrapper btn-video">
                                <button type="button" class="video-btn rounded-circle" data-toggle="modal"
                                    data-target="#modelId">
                                    <i class="fas fa-play"></i>
                                    <div>
                                        <p class="tooltip-video">`+ db[1].title[5] + `</p>
                                    </div>
                                </button>
                            </div>
                            <div class="qr-wrapper" style="z-index:2; background-color: white" >
                                <img src="images/background/coming-soon-PNG.png" alt="" class="img-fluid">
                            </div>
                        </div>
                        <!-- Modal -->
                        <div class="modal fade" id="modelId" tabindex="-1" role="dialog"
                            aria-labelledby="modelTitleId" aria-hidden="true">
                                <div class="modal-dialog d-flex align-items-center" role="document">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <div class="wrapper-video-tut">
                                                <!-- <iframe id="source-video" width="310" height="676"
                                                    src="https://www.youtube.com/embed/33-3rpzB29s?playlist=33-3rpzB29s&controls=0&mute=1&autoplay=1&loop=1&modestbranding=1&rel=0"
                                                    frameborder="0"
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                    allowfullscreen></iframe> -->
                                                    <video id="video-tut" autoplay muted="muted" loop playsinline >
                                                  <source src="images/video/`+ db[5].video[0] + `.mp4" type = "video/mp4"> 
                                                    This browser doesn't support video tag.
                                                </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a  href="https://play.google.com/store/apps/details?id=com.StiBLabs.StiBp2p" >
                   
                    <div class="available-ios">
                        <p >`+ db[1].title[6] + `</p>
                    </div>
                    </a>
                    <div class="available-android">
                        <p>`+ db[1].title[7] + `</p>
                    </div>
                    
                </div>
            </div>
            <div class="app_photo col-lg-6 col-md-6 col-12">
                <!-- <img src="images/background/phone.png" style="width:60% ; height: 60%" /> -->
                <div class="wrapper-animation-banner">
                    <div class="background-animation">
                        <img id="android-mockup-img" src="images/background/android-mockup.png"
                            style="width:270px; height: auto;" />
                        <img id="iphone-mockup-img" src="images/background/iphone-mockup.png"
                            style="width:270px; height: auto;" />
                    </div>
                    <div class="wrapper-content-animation">
                        <div class="wrapper-slide android-animation">
                            <div id="slideItemBanner" class="carousel slide" data-ride="carousel"
                                data-interval="2000">
                                <div class="carousel-inner" role="listbox">
                                    <div class="carousel-item active">
                                        <img src="images/background/1.jpg" class="img-fluid" alt="First slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/background/2.jpg" class="img-fluid" alt="Second slide">
                                    </div>
                                    <div class="carousel-item last-item-carousel">
                                        <img src="images/background/3.jpg" class="img-fluid" alt="Third slide">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end of Stib APP -->
<!-- //////////////////////////////////////////////////////////////////// -->
<!-- about app -->
<div class="about_app">
    <div class="section-title">
        <span class="subtitle line-after">`+ db[2].about[0] + `</span>
        <h1 class="title">`+ db[2].about[1] + `</h1>
    </div>
    <div class="content d-flex justify-content-center container">
        <ul class="row  ">
            <li class="col-md-6 col-lg-3">
                <div class="icon">
                    <img src="images/background/p2p.png" />
                </div>
                <div>
                    <h4>S<span style="text-transform: lowercase!important;">ti</span>B P2P</h4>
                    <p>`+ db[2].about[3] + `<br>&emsp;</p>
                </div>
                <div class="learn-more">
                    <a href="#" target="_blank"> `+ db[2].about[10] + `</a>
                </div>
            </li>
            <li class="col-md-6 col-lg-3">
                <div class="icon">
                    <img src="images/background/charity (1).png" />
                </div>
                <div>
                    <h4>S<span style="text-transform: lowercase!important;">ti</span>B Charity</h4>
                    <p>`+ db[2].about[5] + `</p>
                </div>
                <div class="learn-more">
                    <a href="http://charity.stib.co" target="_blank"> `+ db[2].about[10] + `</a>
                </div>
            </li>
            <li class="col-md-6 col-lg-3">
                <div class="icon">
                    <img src="images/background/12.png" />
                </div>
                <div>
                    <h4>S<span style="text-transform: lowercase!important;">ti</span>B Rewards</h4>
                    <p>`+ db[2].about[7] + `</p>
                </div>
                <div class="learn-more">
              
                    <a href="" style=" cursor: not-allowed" title="Coming Soon"> `+ db[2].about[10] + `</a>
                </div>
            </li>
            <li class="col-md-6 col-lg-3">
                <div class="icon">
                    <img src="images/background/AI.png" />
                </div>
                <div>
                    <h4>S<span style="text-transform: lowercase!important;">ti</span>B AI</h4>
                    <p>`+ db[2].about[9] + `<br>&emsp;</p>
                </div>
                <div class="learn-more" title="Coming Soon" >
                    <a href=""  style="cursor: not-allowed" > `+ db[2].about[10] + `</a>
                </div>
            </li>
        </ul>
    </div>
</div>
<!-- why choose Stib App -->
<div class="app_provide " id="show">
    <div class="section-title">
        <span class="subtitle line-after">"We decentralize and leave no one behind!"</span>
        <h1 class="title">`+ db[3].why[0] + `</h1>
    </div>
    <div class=" container ">
        <div class="app_reason row ">
            <div class="reason_one col-xl-4 col-md-12">
                <div class="detail detail2">
                    <div class="icon">
                        <img src="images/background/exchange.png" />
                    </div>
                    <div class="content">
                        <h3>`+ db[3].why[1] + `</h3>
                        <h4>`+ db[3].why[2] + `</h4>
                    </div>
                </div>
                <div class="detail detail3">
                    <div class="icon">
                        <img src="images/background/money.png" />
                    </div>
                    <div class="content">
                        <h3>`+ db[3].why[3] + `</h3>
                        <h4>`+ db[3].why[4] + `
                        </h4>
                    </div>
                </div>
            </div>
            <div class="photo d-flex align-items-center justify-content-center col-xl-4 col-md-9"
                id="photo_animation">
                <img src="images/background/phone2.png" />
            </div>
            <div class="reason_two col-xl-4 col-md-12">
                <div class="detail detail2">
                    <div class="icon">
                        <img src="images/background/law.png" />
                    </div>
                    <div class="content">
                        <h3>`+ db[3].why[5] + `</h3>
                        <h4>`+ db[3].why[6] + `<br>
                            &nbsp
                        </h4>
                    </div>
                </div>
                <div class="detail detail3">
                    <div class="icon">
                        <img src="images/background/global.png" />
                    </div>
                    <div class="content">
                        <h3>`+ db[3].why[7] + `</h3>
                        <h4>`+ db[3].why[8] + `
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end of choose Stib app -->
<!-- download -->
<div class="dowload">
    <!-- how to use app -->
    <!-- /////////////////////////////////////////////////////////////// -->
    <div>
        <!-- page 1 -->
        <div class="container">
            <div class="page1 row align-items-center justify-content-center" id="page1">
                <div class="title col-lg-6 col-md-12">
                    <h1 class="line-after">`+ db[4].step[0] + `</h1>
                    <ul>
                        <li>
                            <span class="text-page"><span style="font-weight: bold;">`+ db[4].step[1] + `
                                    1:</span> ` + db[4].step[2] + `</span>
                            <span class="check-icon"><i class="fas fa-check"></i></span>
                        </li>
                        <li>
                            <span class="text-page"><span style="font-weight: bold;">`+ db[4].step[1] + `
                                    2:</span>` + db[4].step[3] + `</span>
                            <span class="check-icon"><i class="fas fa-check"></i></span>
                        </li>
                        <li>
                            <span class="text-page"><span style="font-weight: bold;">`+ db[4].step[1] + `
                                    3:</span>` + db[4].step[4] + `</span>
                            <span class="check-icon"><i class="fas fa-check"></i></span>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="wrapper-video-trading">
                        <div class="modal-dialog d-flex align-items-center">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <div class="wrapper-video-tut">
                                        <!-- <iframe id="source-video" width="310" height="676"
                                            src="https://www.youtube.com/embed/39i75VxFFh0?playlist=39i75VxFFh0&controls=0&mute=1&autoplay=1&loop=1&modestbranding=1&rel=0"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen></iframe> -->
                                        <video id="video-trade" muted="muted" loop playsinline autoplay >
                                        <source src="images/video/buy-apk.mp4" type = "video/mp4">
                                            <source src="images/video/sell-apk.ogg" type = "video/ogg">
                                            <source src="images/video/sell-apk.webm" type = "video/webm">
                                            This browser doesn't support video tag.
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end page 1 -->
        <!-- ............................. -->
        <!-- page 2 -->
        <div id="page2Id" style="background-color: #191919;">
            <div class="container">
                <div class="page2 row d-flex flex-row justify-content-center align-items-center" id="page2">
                    <div class="col-lg-6 col-md-12">
                        <div class="wrapper-video-trading">
                            <div class="modal-dialog d-flex align-items-center">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <div class="wrapper-video-tut">
                                            <!-- <iframe id="source-video" width="310" height="676"
                                                src="https://www.youtube.com/embed/9uH_2BiTBIo?playlist=9uH_2BiTBIo&controls=0&mute=1&autoplay=1&loop=1&modestbranding=1&rel=0"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen></iframe> -->
                                            <video id="video-lend" muted="muted" loop playsinline autoplay >
                                            <source src="images/video/loan-apk.mp4" type = "video/mp4">
                                            <source src="images/video/borrow-apk.mp4" type = "video/mp4">
                                                This browser doesn't support video tag.
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="title col-lg-6 col-md-12 text-left">
                        <h1 class="line-after2">`+ db[4].step[5] + `</h1>
                        <ul>
                            <li>
                                <span class="check-icon"><i class="fas fa-check"></i></span>
                                <span class="text-page"><span style="font-weight: bold;">`+ db[4].step[1] + `
                                        1:</span>` + db[4].step[6] + `</span>
                            </li>
                            <li>
                                <span class="check-icon"><i class="fas fa-check"></i></span>
                                <span class="text-page"><span style="font-weight: bold;">`+ db[4].step[1] + `
                                        2:</span> ` + db[4].step[7] + `</span>
                            </li>
                            <li>
                                <span class="check-icon"><i class="fas fa-check"></i></span>
                                <span class="text-page"><span style="font-weight: bold;">`+ db[4].step[1] + `
                                        3:</span>` + db[4].step[8] + `</span>
                            </li>
                            <li>
                                <span class="check-icon"><i class="fas fa-check"></i></span>
                                <span class="text-page"><span style="font-weight: bold;">`+ db[4].step[1] + `
                                        4:</span>` + db[4].step[9] + `</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- end of page 2 -->
    </div>
    <!-- end of how to use app -->
</div>
<!-- end of how app work -->
<div id="contact-us" class="pt-5 pb-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-12">
                <h1 class="line-after">`+ db[4].step[10] + `</h1>
            </div>
            <div class="col-lg-8 col-md-8 col-12">
                <div class="wrapper-content-contact d-flex align-items-center">
                    <div class="row w-100 mx-auto">
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="info-contact">
                                <img src="images/svg/phone-call.svg" alt="lostimg" class="icon-contact">
                                <span style="color: #333;">`+ db[7].contact[0] + `</span>
                            </div>
                            <div class="info-contact mb-0">
                                <img src="images/svg/envelope.svg" alt="lostimg" class="icon-contact">
                                <span>Support AT StiB.co</span>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="info-contact">
                                <img src="images/svg/world.svg" alt="lostimg" class="icon-contact">
                                <span><a href="https://stib.co/" class="link-contact" target="_blank">
                                        StiB.co</a></span>
                            </div>
                            <div class="info-contact mb-0">
                                <img src="images/svg/address.svg" alt="lostimg" class="icon-contact">
                                <span>`+ db[7].contact[1] + `</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- //////////////////////////////////////////////////////////////////////// -->
<div class="bottom">
    <ul>
        <li><a href="`+ db[7].contact[3] + `" class="facebook" target="_blank">
            </a></li>
        <li> <a href="https://twitter.com/StiBLabs" class="twitter" target="_blank"></a> </li>
        <li><a href="https://www.linkedin.com/company/stib-labs" class="linkedin" target="_blank"></a>
        </li>
        <li><a href="`+ db[7].contact[2] + `" class="telegram" target="_blank"></a></li>
    </ul>
    <div class="bt_title">
        <span style="border: none">© StiB Labs 2014-2140, All Rights Reserved</span>
        <span> <a href="https://stib.co/index.php?showpage=terms">`+ db[4].step[11] + `</a> </span>
        <span> <a href="https://stib.co/index.php?showpage=privacy">`+ db[4].step[12] + `</a> </span>
    </div>
</div>`;
    // /////////////////////////////////////////////////////////////////////////////////////////////
    //  index.js after 
    $(document).ready(function () {
        function getDeviceName() {
            var deviceName = '';

            var isMobile = {
                Android: function () {
                    return navigator.userAgent.match(/Android/i);
                },
                Datalogic: function () {
                    return navigator.userAgent.match(/DL-AXIS/i);
                },
                Bluebird: function () {
                    return navigator.userAgent.match(/EF500/i);
                },
                Honeywell: function () {
                    return navigator.userAgent.match(/CT50/i);
                },
                Zebra: function () {
                    return navigator.userAgent.match(/TC70|TC55/i);
                },
                BlackBerry: function () {
                    return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function () {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                },
                Windows: function () {
                    return navigator.userAgent.match(/IEMobile/i);
                },
                any: function () {
                    return (isMobile.Datalogic() || isMobile.Bluebird() || isMobile.Honeywell() || isMobile.Zebra() || isMobile.BlackBerry() || isMobile.Android() || isMobile.iOS() || isMobile.Windows());
                }
            };

            if (isMobile.Datalogic())
                deviceName = 'Datalogic';
            else if (isMobile.Bluebird())
                deviceName = 'Bluebird'; // android
            else if (isMobile.Honeywell())
                deviceName = 'Honeywell'; // android
            else if (isMobile.Zebra())
                deviceName = 'Zebra'; // android
            else if (isMobile.BlackBerry())
                deviceName = 'BlackBerry'; // android
            else if (isMobile.iOS())
                deviceName = 'iOS';
            else if ((deviceName == '') && (isMobile.Android()))
                deviceName = 'Android';
            else if ((deviceName == '') && (isMobile.Windows()))
                deviceName = 'Windows';

            return deviceName;
        }

        function setDisplay() {
            var device = getDeviceName();
            // console.log(getDeviceName());
            // var device = 'iOS';
            // var device = 'Android';
            // var device = 'PC'
            if (device == 'iOS') { // tren iOS
                $('#android-mockup-img').css({ "display": "none" });
                $('#iphone-mockup-img').css({ "display": "inline" });
                $('.wrapper-content-animation').addClass('ios-display');

                $('.available-ios').addClass('ios-display');
                $('.wrapper-link-ios').addClass('ios-display');
                $('.wrapper-link-android').addClass('ios-display');
                for (let index = 0; index < $('.modal-body').length; index++) {
                    $('.modal-body').eq(index).addClass('ios-display');
                }
                for (let index = 0; index < $('.wrapper-video-tut').length; index++) {
                    $('.wrapper-video-tut').eq(index).addClass('ios-display');
                }
                for (let index = 0; index < $('iframe').length; index++) {
                    $('iframe').eq(index).addClass('ios-display');
                }
            }
            else if (device == 'Android') { // tren Android
                $('#android-mockup-img').css({ "display": "inline" });
                $('#iphone-mockup-img').css({ "display": "none" });

                $('.available-android').addClass('android-display');
                $('.wrapper-link-android').addClass('android-display');
                $('.wrapper-link-ios').addClass('android-display');
            }
            else { // tren PC, mac dinh hien thi ca hai
                $('#android-mockup-img').css({ "display": "inline" });
                $('#iphone-mockup-img').css({ "display": "none" });
            }
        }
        setDisplay();
        var flag_show_lang = true;
        var flag;

        $(".btn-current-lang").click(function () {
            if (flag_show_lang == true) {
                $(".fa-greater-than").addClass("rotatory");
                flag_show_lang = false;
            } else {
                $(".fa-greater-than").removeClass("rotatory");
                flag_show_lang = true;
            }
            $(".dual-lang").slideToggle("slow");
        })

        $(".btnEngLang").click(function (event) {
            event.preventDefault();
            $("#body_content").empty().html(body(db_en));
            $(".btnVnLang").removeClass("lang-active");
            $(".btnEngLang").addClass("lang-active");
            $(".btn-current-lang").html("EN <i class='fas fa-greater-than'></i>");
            setDisplay();
        });
        $(".btnVnLang").click(function () {
            event.preventDefault();
            $("#body_content").empty().html(body(db_vn));
            $(".btnEngLang").removeClass("lang-active");
            $(".btnVnLang").addClass("lang-active");
            $(".btn-current-lang").html("VN <i class='fas fa-greater-than'></i>");
            setDisplay();
        });

        // var media = $('.video-tut').get(0);
        // $('#modelId').on('hide.bs.modal', function () {
        //     var videoAttr = $('#source-video').attr("src");
        //     $('#source-video').attr("src", "");
        //     $('#source-video').attr("src", videoAttr);
        // })
        var videoTut = document.getElementById('video-tut');
        $('#modelId').on('hide.bs.modal', function () {
            videoTut.pause();
            // videoTut.currentTime = 0;
        })
        $('.video-btn').click(function () {
            videoTut.play();
        })
        var header_top = $('#header').offset().top + 60;

        if (header_top > 60) {
            $("#change-color ul li a").css("color", "#f39c12")

        }
        var videoTrade = document.getElementById('video-trade');

        $(window).scroll(function () {
            var header_top = $('#header').offset().top + 60;

            var vitrihientai = window.pageYOffset;
            var circle1 = $(".circle1").offset().top + $(".circle1").outerHeight(true);
            var page1 = $('#page1').offset().top;
            var page2 = page1 + $("#page1").outerHeight(true);
            var distance = $('#show').offset().top;
            var distance3 = distance + 250;
            var header_top = $('#header').offset().top + 60;

            if (vitrihientai > circle1 + 60) {
                $('#header').addClass('bg-active');
                $('#logo-header').addClass('active');
            }
            else {
                $('#header').removeClass('bg-active');
                $('#logo-header').removeClass('active');
            }
            if (vitrihientai > 300) {
                $('#to-top').addClass('active');
            }
            else {
                $('#to-top').removeClass('active');
            }

            // //////////////////////////////////////////////
            var videoTrade = document.getElementById('video-trade');
            var videoLend = document.getElementById('video-lend');
            if (vitrihientai > $('.dowload').offset().top - 300) {

                if (flag == true) {
                    videoTrade.play();
                    flag = false;
                }
            }
            else {
                videoTrade.pause();
                videoTrade.currentTime = 0;
            }

            if (vitrihientai > $('#page2Id').offset().top - 300) {

                if (flag == true) {
                    videoLend.play();
                    flag = false;
                }
            }
            else {
                videoLend.pause();
                videoLend.currentTime = 0;
            }
            // ////////////////////////////////////// animation
            if (header_top >= distance && header_top < distance3) {
                $("#photo_animation").css("animation-play-state", "running");
                $(".app_provide .detail2").css("animation-play-state", "running");
            } else if (header_top >= distance3) {
                $(".app_provide .detail3").css("animation-play-state", "running");

            } else {
                $("#photo_animation").css("animation-play-state", "paused");
            }
        });
        // //////////////////////////////////////////////////////////////
        //  bottom to top
        $("#to-top").click(function () {
            $("html, body").animate({ scrollTop: 0 }, 500);
        })
        // video play
        $("#show_video_download").click(function () {
            $("#video").show();
        });

        $('#icon_menu').click(function (event) {
            event.preventDefault();
            $("#menu_show").fadeToggle("slow");
            $('.container_header .sub_menu').addClass('active');
            $('#icon_menu_close').addClass('active');
        })

        $('#icon_menu_close').click(function (event) {
            event.preventDefault();
            $('.container_header .sub_menu').removeClass('active');
            $('#icon_menu_close').removeClass('active');
        })

        $('#n1').click(function (event) {
            event.preventDefault();
            if ($('.sub_menu, #icon_menu_close').hasClass('active')) {

                $('.sub_menu, #icon_menu_close').removeClass('active');
            }

            $('html, body').animate({ scrollTop: $('#downloadId').offset().top }, 500);
        })
        $('#n2').click(function (event) {
            event.preventDefault();
            if ($('.sub_menu, #icon_menu_close').hasClass('active')) {
                $('.sub_menu, #icon_menu_close').removeClass('active');
            }

            $('html, body').animate({ scrollTop: $('#show').offset().top - 60 }, 500);
        })
        $('#n3').click(function (event) {
            event.preventDefault();
            if ($('.sub_menu, #icon_menu_close').hasClass('active')) {
                $('.sub_menu, #icon_menu_close').removeClass('active');
            }
            $('html,body').animate({ scrollTop: $('#contact-us').offset().top - 60 }, 500);
        })
    });
    return body_vn;
};





