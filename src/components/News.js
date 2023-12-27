import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articals = [
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Javier Marquez",
      title:
        "Apple no ha conseguido frenar la prohibición de los Apple Watch Series 9 y Ultra 2 en EEUU. Es un problema millonario",
      description:
        "Apple ha dejado de vender los Apple Watch Series 9 y Apple Watch Ultra 2 en Estados Unidos. No estamos hablando de productos discontinuados, si no de dos de los elementos estrella del catálogo de la compañía de Cupertino. ¿Qué ha pasado entonces? La Comisión …",
      url: "https://www.xataka.com/empresas-y-economia/apple-no-ha-conseguido-frenar-prohibicion-apple-watch-series-9-ultra-2-eeuu-problema-millonario",
      urlToImage:
        "https://i.blogs.es/9141be/apple-watch-s9-hero-230912/840_560.jpeg",
      publishedAt: "2023-12-27T01:27:22Z",
      content:
        "Apple ha dejado de vender los Apple Watch Series 9 y Apple Watch Ultra 2 en Estados Unidos. No estamos hablando de productos discontinuados, si no de dos de los elementos estrella del catálogo de la … [+2871 chars]",
    },
    {
      source: {
        id: null,
        name: "Tinhte.vn",
      },
      author: "no-reply@tinhte.vn (Trần Hoàng Long.), Trần Hoàng Long.",
      title:
        "Toàn cảnh Watch Ultra 2 và Series 9 bị cấm bán tại Mỹ: Cái giá khi Apple vi phạm bằng sáng chế",
      description:
        "Vụ lùm xùm Apple bị cấm bán Apple Watch tại Mỹ xuất hiện cũng cả 2 tuần rồi nhưng thông tin hơi rời rạc và thiếu sót nên mình viết bài tổng hợp lại những gì mình biết cho anh em tiện theo dõi và cập nhật.\n \n1.",
      url: "https://tinhte.vn/thread/toan-canh-watch-ultra-2-va-series-9-bi-cam-ban-tai-my-cai-gia-khi-apple-vi-pham-bang-sang-che.3751857/",
      urlToImage:
        "https://photo2.tinhte.vn/data/attachment-files/2023/12/8224974_tinhte-apple-vs-masimo-8.jpg",
      publishedAt: "2023-12-27T03:23:22Z",
      content:
        "Apple hin ang b cm bán Apple Watch Ultra 2 và Apple Watch Series 9, vì ây là 2 sn phm có tính nng o nng oxy trong máu mà Apple hin ang bán ch thc t thì Apple ã vi phm trên nhng th h Apple Watch Serie… [+839 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Trevor Mogg",
      title: "Apple’s iPhone design chief jumps ship to work with Jony Ive",
      description:
        "Apple’s iPhone and Apple Watch design chief is leaving the tech giant to work with Jony Ive, the man who led Apple’s design decisions until 2019.",
      url: "https://www.digitaltrends.com/mobile/apples-iphone-design-chief-jumps-ship-to-work-with-jony-ive/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2023/05/artificial-intelligence-1.jpeg?resize=1200%2C630&p=1",
      publishedAt: "2023-12-27T01:55:11Z",
      content:
        "Apple’s iPhone and Watch design chief is leaving the company to work with Jony Ive, the man who led Apple’s design decisions until 2019 and who was key in creating the look of some of its most iconic… [+1919 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title:
        "Japan prepares regulation requiring Apple to allow sideloading in iOS",
      description:
        "As the Digital Markets Act antitrust law passed in the European Union, Apple has until March 2024 to let users in Europe install iOS apps outside the App Store. Although Apple is yet to say a word about how it will do this, regulators around the world have al…",
      url: "https://9to5mac.com/2023/12/26/japan-regulation-apple-sideloading-ios/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-faces-new-legal-requirements.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-12-27T01:46:31Z",
      content:
        "As the Digital Markets Act antitrust law passed in the European Union, Apple has until March 2024 to let users in Europe install iOS apps outside the App Store. Although Apple is yet to say a word ab… [+2379 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Chance Miller",
      title:
        "Apple’s iPhone design chief headed to LoveFrom to work with Jony Ive on AI devices",
      description:
        "Earlier this month, Bloomberg reported that Tang Tan, Apple’s chief iPhone and Apple Watch designer is leaving the company in February. Now, more details have emerged to reveal that Tan is headed to LoveFrom to be reunited with Jony Ive. \n\n\n\n more…",
      url: "https://9to5mac.com/2023/12/26/iphone-design-chief-lovefrom-ai-devices/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/07/Jony-Ive-Apple-consultant.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-12-27T00:22:42Z",
      content:
        "Earlier this month, Bloomberg reported that Tang Tan, Apple’s chief iPhone and Apple Watch designer is leaving the company in February. Now, more details have emerged to reveal that Tan is headed to … [+1266 chars]",
    },
    {
      source: {
        id: null,
        name: "Techmeme.com",
      },
      author: null,
      title:
        "Sources: Japan is preparing regulations requiring Apple, Google, and others to allow third-party app stores and payment systems on their mobile platforms (Nikkei Asia)",
      description:
        "Nikkei Asia:\nSources: Japan is preparing regulations requiring Apple, Google, and others to allow third-party app stores and payment systems on their mobile platforms  —  Antitrust curbs to require tech giants to allow third-party app platforms and billing  —…",
      url: "https://www.techmeme.com/231226/p14",
      urlToImage:
        "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fcms-image-bucket-production-ap-northeast-1-a7d2.s3.ap-northeast-1.amazonaws.com%2Fimages%2F3%2F1%2F7%2F6%2F47046713-5-eng-GB%2FCropped-1703599096photo.JPG?width=1260&height=630&fit=cover&gravity=faces&source=nar-cms",
      publishedAt: "2023-12-27T02:35:22Z",
      content:
        "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 9:35 PM ET, December 26, 2023.\r\nThe most current version of the site as always is available at our home page.\r\nTo … [+71 chars]",
    },
    {
      source: {
        id: null,
        name: "Ifanr.com",
      },
      author: "莫崇宇",
      title:
        "早报 | 雷军称小米第一辆车「有点贵」/ 46.98 万起，华为问界 M9 大定突破 1 万 / 微信 AI 下月亮相",
      description:
        "· 微软悄然推出 Copilot Android 版应用\n· 龟梨和也石原里美合作新剧\n· 消息称 PC 端鸿蒙操作系统已接近完成\n#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
      url: "https://www.ifanr.com/1571704",
      urlToImage:
        "https://s3.ifanr.com/images/ep/cover-images/zai_qi_cai_zhong_tou_lan_cover.jpg",
      publishedAt: "2023-12-27T01:03:36Z",
      content:
        "M9 \r\n iPhone 17 Wi-Fi \r\n 2024 PRO AI \r\n L7 \r\n Ace3\r\n PC \r\n Copilot Android \r\n 2083 \r\n ·F· x UNIQLO UT 90 \r\n 13DE MARZO UGG \r\n 2023 \r\n 2\r\nM9 \r\n12 26 M9 M9 \r\n M9 1045mm 1060mm 950mm 2725mm\r\n HarmonyOS … [+1130 chars]",
    },
    {
      source: {
        id: null,
        name: "01net.com",
      },
      author: "Mickaël Bazoge",
      title:
        "Jony Ive, l’ex-chef du design d’Apple, pioche les talents chez son ancien employeur pour créer un appareil IA",
      description:
        "Jony Ive, l'ancien designer vedette d'Apple, est petit à petit en train de reconstituer sa garde rapprochée au sein de LoveFrom, le studio de design fondé après son départ de Cupertino. Et un des projets sur lesquels planche cette équipe pourrait bien concurr…",
      url: "https://www.01net.com/actualites/jony-ive-pioche-les-talents-chez-apple-pour-creer-son-appareil-ia-avec-sam-altman.html",
      urlToImage:
        "https://www.01net.com/app/uploads/2022/07/Jonathan-Ive-Tim-Cook.jpg",
      publishedAt: "2023-12-27T05:30:31Z",
      content:
        "Jony Ive, l’ancien designer vedette d’Apple, est petit à petit en train de reconstituer sa garde rapprochée au sein de LoveFrom, le studio de design fondé après son départ de Cupertino. Et un des pro… [+2545 chars]",
    },
  ];
  constructor() {
    super();
    console.log("this is constructor from news component");
    this.state = {
      articals: this.articals,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row ">
          {this.state.articals.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  
                  title={element.title.slice(0,45)}
                  description={element.description.slice(0,80)}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
