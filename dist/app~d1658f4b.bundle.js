(()=>{"use strict";var n,A={756:(n,A,t)=>{t.d(A,{Z:()=>p});var i=t(537),e=t.n(i),r=t(645),o=t.n(r),a=t(667),C=t.n(a),l=new URL(t(880),t.b),s=o()(e()),d=C()(l);s.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody, html {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: sans-serif;\n  font-size: 12px;\n  color: #424242;\n}\n\na{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  min-width: 44px;\n  min-height: 44px;\n  text-decoration: none;\n    }\n\n/* Header */\n\n.header {\n  min-height: 56px;\n  transition: min height 0.3s;\n}\n\n.menumob{\n  background-color: black;\n  color: white !important;\n  width: 100%;\n  display: flex;\n  font-weight: 600;\n  font-size: 20px;\n  padding: 10px;\n  justify-content: space-between;\n}\n\n.navmob {\n  background-color: black;\n  width: 100%;\n  display: flex;\n  font-weight: 600;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\n.navlistmob {\nwidth: 60%;\npadding: 0;\nmargin: 0;\ntext-align: left;\n}\n\n.navitemsmob {\nbox-sizing: border-box;\ndisplay: inline-block;\ntext-align: right;\nline-height: 24px;\ntext-transform: uppercase;\ncolor: white !important;\n}\n\n\n.navmob a {\ndisplay: inline-block;\npadding: 1.3em;\ntext-decoration: none;\n}\n\n.nav {\n  background-color: black;\n  width: 100%;\n  display: flex;\n  font-weight: 600;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\n.navlist {\n  width: 80%;\n  padding: 0;\n  margin: 0;\n  text-align: right;\n}\n\n.navitems {\n  box-sizing: border-box;\n  display: inline-block;\n  text-align: right;\n  line-height: 24px;\n  text-transform: uppercase;\n}\n\n.nav a {\n  display: inline-block;\n  padding: 1.3em;\n  text-decoration: none;\n  color: white;\n}\n\n.logo {\nwidth: 20%;\npadding: 0;\nmargin: 0;\ntext-align: left;\nbox-sizing: border-box;\ndisplay: inline-block;\nline-height: 24px;\n}\n\n.nav a:hover {\n  text-decoration: none;\n}\n\n/* Jombotron */\n\n.hero {\n  display: flex;\n  align-items: center;\n  min-height: 380px;\n  width: 100%;\n  text-align: center;\n  background-image: url("+d+");\n  background-position: center;\n\n}\n\n.hero_inner {\n  margin: 0 auto;\n  max-width: 800px;\n}\n\n.hero_title {\n  color: white;\n  font-weight: 500;\n  font-size: 36px;\n  \n}\n\n.hero_tagline {\n  color: #D3DEDC;\n  margin-top: 16px;\n  font-size: 18px;\n  font-weight: 300;\n}\nmain {\nwidth: 100%;\nmargin: 0 auto\n}\n.content {\npadding: 32px\n}\n.latest {\nwidth: 100%;\nmargin-top: 30px;\nmargin-bottom: 50px;\ntext-align: center\n}\n.latest h1 {\nfont-weight: 700;\nfont-size: 2em;\nmargin-bottom: 50px\n}\n.list {\nmargin: 32px auto auto;\ntext-align: left;\ndisplay: grid;\ngrid-row-gap: 16px\n}\n.list_item {\nbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\nwidth: 100%;\nborder-radius: 5px;\noverflow: hidden;\nposition: relative\n}\n.list_item_favorite {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 300px;\n  margin-bottom: 5%;\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n  }\n.city {\nposition: absolute;\ntop: 8px;\nleft: 16px;\nborder-radius: 5px;\nbackground-color: black;\npadding: 5px 10px 5px;\ncolor: white;\nfont-weight: 500\n}\n.list_item_content {\npadding: 16px\n}\n.list_item_thumb {\nwidth: 100%;\nmax-height: 200px\n}\n.list_item_rating {\n  display: flex;\n  align-items: center;\nfont-size: 12px;\ntext-transform: uppercase;\ncolor: white;\nfont-weight: 500;\nbackground-color: black;\nwidth: fit-content;\npadding: 5px;\nborder-radius: 5px;\n}\n.list_item_rating_value {\n    font-size: 12px;\n    text-transform: uppercase;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-weight: 500;\n    background-color: black;\n    min-width: 44px;\n    min-height: 44px;\n    padding: 5px;\n    border-radius: 5px;\n}\nimg.lazyloaded {\n  width: 100%;\n  height: 200px;\n}\n.list_item_title {\nfont-weight: 500;\nfont-size: 16px;\nmargin-top: 10px;\ntransition: 0.3s opacity\n}\n.list_item_title:hover {\nopacity: 0.5\n}\n.list_item_title a {\n  text-decoration: none;\n  color: inherit;\n  display: block;\n  margin-bottom: 3%;\n}\n\n.list_item_desc {\nmargin-top: -30px;\nfont-size: 12px;\nline-height: 1.5em\n}\n\nmain {\n\tpadding: 32px;\n\tflex: 1;\n  }\n  \n  .content {\n\tmargin: 0 auto;\n\tmin-height: 100%;\n  }\n  \n  .content .content__heading {\n\tfont-weight: normal;\n  }\n\n.restaurants {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: 16px;\n\tmargin: 32px 0;\n  }\n\n.restaurant {\n\tmargin: 0 auto;\n\twidth: 100%;\n\tmax-width: 800px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: 18px 16px;\n  }\n  \n  .restaurant .restaurant__poster {\n\twidth: 100%;\n\tmax-width: 400px;\n  }\n  \n  .restaurant .restaurant__info h4 {\n\tmargin: 8px 0;\n  }\n\n  #likeButtonContainer {\n    display: grid;\n    justify-content: end;\n    margin-top:5%;\n  }\n\n  .like{\n    /* display: grid; */\n    min-width: 44px;\n    min-height: 44px;\n    background-color: black;\n    border: none;\n    border-radius: 50%;\n  }\n\n  .like i{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n  }\n\nfooter {\nbackground-color: black;\ncolor: white;\nfont-size: 14px;\npadding: 2em;\nwidth: 100%;\ntext-align: center\n}\n.skip-link {\nposition: absolute;\ntop: -100px;\nleft: 0;\nbackground-color: #bf1722;\ncolor: white;\npadding: 10px;\nfont-size: 20px;\nz-index: 100;\ntext-decoration: none\n}\n.skip-link:focus {\ntop: 100px\n}","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,qBAAqB;IACnB;;AAEJ,WAAW;;AAEX;EACE,gBAAgB;EAChB,2BAA2B;AAC7B;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;EACX,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;AACA,UAAU;AACV,UAAU;AACV,SAAS;AACT,gBAAgB;AAChB;;AAEA;AACA,sBAAsB;AACtB,qBAAqB;AACrB,iBAAiB;AACjB,iBAAiB;AACjB,yBAAyB;AACzB,uBAAuB;AACvB;;;AAGA;AACA,qBAAqB;AACrB,cAAc;AACd,qBAAqB;AACrB;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,UAAU;EACV,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,qBAAqB;EACrB,YAAY;AACd;;AAEA;AACA,UAAU;AACV,UAAU;AACV,SAAS;AACT,gBAAgB;AAChB,sBAAsB;AACtB,qBAAqB;AACrB,iBAAiB;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA,cAAc;;AAEd;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,yDAAgE;EAChE,2BAA2B;;AAE7B;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,eAAe;;AAEjB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;AACA;AACA,WAAW;AACX;AACA;AACA;AACA;AACA;AACA;AACA,WAAW;AACX,gBAAgB;AAChB,mBAAmB;AACnB;AACA;AACA;AACA,gBAAgB;AAChB,cAAc;AACd;AACA;AACA;AACA,sBAAsB;AACtB,gBAAgB;AAChB,aAAa;AACb;AACA;AACA;AACA,0CAA0C;AAC1C,WAAW;AACX,kBAAkB;AAClB,gBAAgB;AAChB;AACA;AACA;EACE,0CAA0C;EAC1C,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB;AACF;AACA,kBAAkB;AAClB,QAAQ;AACR,UAAU;AACV,kBAAkB;AAClB,uBAAuB;AACvB,qBAAqB;AACrB,YAAY;AACZ;AACA;AACA;AACA;AACA;AACA;AACA,WAAW;AACX;AACA;AACA;EACE,aAAa;EACb,mBAAmB;AACrB,eAAe;AACf,yBAAyB;AACzB,YAAY;AACZ,gBAAgB;AAChB,uBAAuB;AACvB,kBAAkB;AAClB,YAAY;AACZ,kBAAkB;AAClB;AACA;IACI,eAAe;IACf,yBAAyB;IACzB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;IACvB,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;AACtB;AACA;EACE,WAAW;EACX,aAAa;AACf;AACA;AACA,gBAAgB;AAChB,eAAe;AACf,gBAAgB;AAChB;AACA;AACA;AACA;AACA;AACA;EACE,qBAAqB;EACrB,cAAc;EACd,cAAc;EACd,iBAAiB;AACnB;;AAEA;AACA,iBAAiB;AACjB,eAAe;AACf;AACA;;AAEA;CACC,aAAa;CACb,OAAO;EACN;;EAEA;CACD,cAAc;CACd,gBAAgB;EACf;;EAEA;CACD,mBAAmB;EAClB;;AAEF;CACC,aAAa;CACb,0BAA0B;CAC1B,SAAS;CACT,cAAc;EACb;;AAEF;CACC,cAAc;CACd,WAAW;CACX,gBAAgB;CAChB,aAAa;CACb,0BAA0B;CAC1B,cAAc;EACb;;EAEA;CACD,WAAW;CACX,gBAAgB;EACf;;EAEA;CACD,aAAa;EACZ;;EAEA;IACE,aAAa;IACb,oBAAoB;IACpB,aAAa;EACf;;EAEA;IACE,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;EACd;;AAEF;AACA,uBAAuB;AACvB,YAAY;AACZ,eAAe;AACf,YAAY;AACZ,WAAW;AACX;AACA;AACA;AACA,kBAAkB;AAClB,WAAW;AACX,OAAO;AACP,yBAAyB;AACzB,YAAY;AACZ,aAAa;AACb,eAAe;AACf,YAAY;AACZ;AACA;AACA;AACA;AACA",sourcesContent:['* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody, html {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: sans-serif;\n  font-size: 12px;\n  color: #424242;\n}\n\na{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  min-width: 44px;\n  min-height: 44px;\n  text-decoration: none;\n    }\n\n/* Header */\n\n.header {\n  min-height: 56px;\n  transition: min height 0.3s;\n}\n\n.menumob{\n  background-color: black;\n  color: white !important;\n  width: 100%;\n  display: flex;\n  font-weight: 600;\n  font-size: 20px;\n  padding: 10px;\n  justify-content: space-between;\n}\n\n.navmob {\n  background-color: black;\n  width: 100%;\n  display: flex;\n  font-weight: 600;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\n.navlistmob {\nwidth: 60%;\npadding: 0;\nmargin: 0;\ntext-align: left;\n}\n\n.navitemsmob {\nbox-sizing: border-box;\ndisplay: inline-block;\ntext-align: right;\nline-height: 24px;\ntext-transform: uppercase;\ncolor: white !important;\n}\n\n\n.navmob a {\ndisplay: inline-block;\npadding: 1.3em;\ntext-decoration: none;\n}\n\n.nav {\n  background-color: black;\n  width: 100%;\n  display: flex;\n  font-weight: 600;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\n.navlist {\n  width: 80%;\n  padding: 0;\n  margin: 0;\n  text-align: right;\n}\n\n.navitems {\n  box-sizing: border-box;\n  display: inline-block;\n  text-align: right;\n  line-height: 24px;\n  text-transform: uppercase;\n}\n\n.nav a {\n  display: inline-block;\n  padding: 1.3em;\n  text-decoration: none;\n  color: white;\n}\n\n.logo {\nwidth: 20%;\npadding: 0;\nmargin: 0;\ntext-align: left;\nbox-sizing: border-box;\ndisplay: inline-block;\nline-height: 24px;\n}\n\n.nav a:hover {\n  text-decoration: none;\n}\n\n/* Jombotron */\n\n.hero {\n  display: flex;\n  align-items: center;\n  min-height: 380px;\n  width: 100%;\n  text-align: center;\n  background-image: url("../public/images/heros/hero-image_1.jpg");\n  background-position: center;\n\n}\n\n.hero_inner {\n  margin: 0 auto;\n  max-width: 800px;\n}\n\n.hero_title {\n  color: white;\n  font-weight: 500;\n  font-size: 36px;\n  \n}\n\n.hero_tagline {\n  color: #D3DEDC;\n  margin-top: 16px;\n  font-size: 18px;\n  font-weight: 300;\n}\nmain {\nwidth: 100%;\nmargin: 0 auto\n}\n.content {\npadding: 32px\n}\n.latest {\nwidth: 100%;\nmargin-top: 30px;\nmargin-bottom: 50px;\ntext-align: center\n}\n.latest h1 {\nfont-weight: 700;\nfont-size: 2em;\nmargin-bottom: 50px\n}\n.list {\nmargin: 32px auto auto;\ntext-align: left;\ndisplay: grid;\ngrid-row-gap: 16px\n}\n.list_item {\nbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\nwidth: 100%;\nborder-radius: 5px;\noverflow: hidden;\nposition: relative\n}\n.list_item_favorite {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 300px;\n  margin-bottom: 5%;\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n  }\n.city {\nposition: absolute;\ntop: 8px;\nleft: 16px;\nborder-radius: 5px;\nbackground-color: black;\npadding: 5px 10px 5px;\ncolor: white;\nfont-weight: 500\n}\n.list_item_content {\npadding: 16px\n}\n.list_item_thumb {\nwidth: 100%;\nmax-height: 200px\n}\n.list_item_rating {\n  display: flex;\n  align-items: center;\nfont-size: 12px;\ntext-transform: uppercase;\ncolor: white;\nfont-weight: 500;\nbackground-color: black;\nwidth: fit-content;\npadding: 5px;\nborder-radius: 5px;\n}\n.list_item_rating_value {\n    font-size: 12px;\n    text-transform: uppercase;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-weight: 500;\n    background-color: black;\n    min-width: 44px;\n    min-height: 44px;\n    padding: 5px;\n    border-radius: 5px;\n}\nimg.lazyloaded {\n  width: 100%;\n  height: 200px;\n}\n.list_item_title {\nfont-weight: 500;\nfont-size: 16px;\nmargin-top: 10px;\ntransition: 0.3s opacity\n}\n.list_item_title:hover {\nopacity: 0.5\n}\n.list_item_title a {\n  text-decoration: none;\n  color: inherit;\n  display: block;\n  margin-bottom: 3%;\n}\n\n.list_item_desc {\nmargin-top: -30px;\nfont-size: 12px;\nline-height: 1.5em\n}\n\nmain {\n\tpadding: 32px;\n\tflex: 1;\n  }\n  \n  .content {\n\tmargin: 0 auto;\n\tmin-height: 100%;\n  }\n  \n  .content .content__heading {\n\tfont-weight: normal;\n  }\n\n.restaurants {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: 16px;\n\tmargin: 32px 0;\n  }\n\n.restaurant {\n\tmargin: 0 auto;\n\twidth: 100%;\n\tmax-width: 800px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: 18px 16px;\n  }\n  \n  .restaurant .restaurant__poster {\n\twidth: 100%;\n\tmax-width: 400px;\n  }\n  \n  .restaurant .restaurant__info h4 {\n\tmargin: 8px 0;\n  }\n\n  #likeButtonContainer {\n    display: grid;\n    justify-content: end;\n    margin-top:5%;\n  }\n\n  .like{\n    /* display: grid; */\n    min-width: 44px;\n    min-height: 44px;\n    background-color: black;\n    border: none;\n    border-radius: 50%;\n  }\n\n  .like i{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n  }\n\nfooter {\nbackground-color: black;\ncolor: white;\nfont-size: 14px;\npadding: 2em;\nwidth: 100%;\ntext-align: center\n}\n.skip-link {\nposition: absolute;\ntop: -100px;\nleft: 0;\nbackground-color: #bf1722;\ncolor: white;\npadding: 10px;\nfont-size: 20px;\nz-index: 100;\ntext-decoration: none\n}\n.skip-link:focus {\ntop: 100px\n}'],sourceRoot:""}]);const p=s},948:(n,A,t)=>{t.d(A,{Z:()=>a});var i=t(537),e=t.n(i),r=t(645),o=t.n(r)()(e());o.push([n.id,"@media screen and (min-width: 500px) {\r\n\t.menumob {\r\n\t\tdisplay: none\r\n\t}\r\n\t.navmob {\r\n\t\tdisplay: none\r\n\t}\r\n}\r\n@media screen and (max-width: 499px) {\r\n\t.nav {\r\n\t\tdisplay: none\r\n\t}\r\n\t.navmob {\r\n\t\tz-index: 10;\r\n\t\tbackground-color: #fff;\r\n\t\twidth: 100%;\r\n\t\tposition: absolute;\r\n\t\t-webkit-transform: translate(-100%, 0);\r\n\t\ttransform: translate(-100%, 0);\r\n\t\ttransition: transform 0.3s ease\r\n\t}\r\n\t.open {\r\n\t\t-webkit-transform: translate(0, 0);\r\n\t\ttransform: translate(0, 0)\r\n\t}\r\n\t.navitemsmob {\r\n\t\tdisplay: list-item;\r\n\t\tcolor: black !important;\r\n\t\twidth: 100%;\r\n\t\ttext-align: left\r\n\t}\r\n\r\n    a, .logomob{\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        position: relative;\r\n        min-width: 44px;\r\n        min-height: 44px;\r\n        text-decoration: none;\r\n    }\r\n\r\n    .iconmenu a{\r\n        color: white;\r\n\r\n    }\r\n}\r\n@media screen and (min-width: 650px) {\r\n\t.list_item_content {\r\n\t\tpadding: 16px 32px 32px 32px\r\n\t}\r\n\t.list_item_title {\r\n\t\tfont-size: 18px\r\n\t}\r\n\t.list_item_desc {\r\n\t\tfont-size: 14px\r\n\t}\r\n}\r\n@media screen and (min-width: 700px) {\r\n\t.list {\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: 1fr 1fr;\r\n\t\tgrid-column-gap: 10px;\r\n\t\tgrid-row-gap: 16px\r\n\t}\r\n}\r\n@media screen and (min-width: 900px) {\r\n\t.list {\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: 1fr 1fr 1fr\r\n\t}\r\n}\r\n@media screen and (min-width: 1200px) {\r\n\tmain {\r\n\t\tmax-width: 1200px\r\n\t}\r\n}","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;CACC;EACC;CACD;CACA;EACC;CACD;AACD;AACA;CACC;EACC;CACD;CACA;EACC,WAAW;EACX,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,sCAAsC;EACtC,8BAA8B;EAC9B;CACD;CACA;EACC,kCAAkC;EAClC;CACD;CACA;EACC,kBAAkB;EAClB,uBAAuB;EACvB,WAAW;EACX;CACD;;IAEG;QACI,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,kBAAkB;QAClB,eAAe;QACf,gBAAgB;QAChB,qBAAqB;IACzB;;IAEA;QACI,YAAY;;IAEhB;AACJ;AACA;CACC;EACC;CACD;CACA;EACC;CACD;CACA;EACC;CACD;AACD;AACA;CACC;EACC,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB;CACD;AACD;AACA;CACC;EACC,aAAa;EACb;CACD;AACD;AACA;CACC;EACC;CACD;AACD",sourcesContent:["@media screen and (min-width: 500px) {\r\n\t.menumob {\r\n\t\tdisplay: none\r\n\t}\r\n\t.navmob {\r\n\t\tdisplay: none\r\n\t}\r\n}\r\n@media screen and (max-width: 499px) {\r\n\t.nav {\r\n\t\tdisplay: none\r\n\t}\r\n\t.navmob {\r\n\t\tz-index: 10;\r\n\t\tbackground-color: #fff;\r\n\t\twidth: 100%;\r\n\t\tposition: absolute;\r\n\t\t-webkit-transform: translate(-100%, 0);\r\n\t\ttransform: translate(-100%, 0);\r\n\t\ttransition: transform 0.3s ease\r\n\t}\r\n\t.open {\r\n\t\t-webkit-transform: translate(0, 0);\r\n\t\ttransform: translate(0, 0)\r\n\t}\r\n\t.navitemsmob {\r\n\t\tdisplay: list-item;\r\n\t\tcolor: black !important;\r\n\t\twidth: 100%;\r\n\t\ttext-align: left\r\n\t}\r\n\r\n    a, .logomob{\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        position: relative;\r\n        min-width: 44px;\r\n        min-height: 44px;\r\n        text-decoration: none;\r\n    }\r\n\r\n    .iconmenu a{\r\n        color: white;\r\n\r\n    }\r\n}\r\n@media screen and (min-width: 650px) {\r\n\t.list_item_content {\r\n\t\tpadding: 16px 32px 32px 32px\r\n\t}\r\n\t.list_item_title {\r\n\t\tfont-size: 18px\r\n\t}\r\n\t.list_item_desc {\r\n\t\tfont-size: 14px\r\n\t}\r\n}\r\n@media screen and (min-width: 700px) {\r\n\t.list {\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: 1fr 1fr;\r\n\t\tgrid-column-gap: 10px;\r\n\t\tgrid-row-gap: 16px\r\n\t}\r\n}\r\n@media screen and (min-width: 900px) {\r\n\t.list {\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: 1fr 1fr 1fr\r\n\t}\r\n}\r\n@media screen and (min-width: 1200px) {\r\n\tmain {\r\n\t\tmax-width: 1200px\r\n\t}\r\n}"],sourceRoot:""}]);const a=o},46:(n,A,t)=>{var i=t(379),e=t.n(i),r=t(795),o=t.n(r),a=t(569),C=t.n(a),l=t(565),s=t.n(l),d=t(216),p=t.n(d),B=t(589),g=t.n(B),c=t(756),m={};m.styleTagTransform=g(),m.setAttributes=s(),m.insert=C().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=p(),e()(c.Z,m),c.Z&&c.Z.locals&&c.Z.locals},362:(n,A,t)=>{var i=t(379),e=t.n(i),r=t(795),o=t.n(r),a=t(569),C=t.n(a),l=t(565),s=t.n(l),d=t(216),p=t.n(d),B=t(589),g=t.n(B),c=t(948),m={};m.styleTagTransform=g(),m.setAttributes=s(),m.insert=C().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=p(),e()(c.Z,m),c.Z&&c.Z.locals&&c.Z.locals}},t={};function i(n){var e=t[n];if(void 0!==e)return e.exports;var r=t[n]={id:n,exports:{}};return A[n](r,r.exports,i),r.exports}i.m=A,n=[],i.O=(A,t,e,r)=>{if(!t){var o=1/0;for(s=0;s<n.length;s++){for(var[t,e,r]=n[s],a=!0,C=0;C<t.length;C++)(!1&r||o>=r)&&Object.keys(i.O).every((n=>i.O[n](t[C])))?t.splice(C--,1):(a=!1,r<o&&(o=r));if(a){n.splice(s--,1);var l=e();void 0!==l&&(A=l)}}return A}r=r||0;for(var s=n.length;s>0&&n[s-1][2]>r;s--)n[s]=n[s-1];n[s]=[t,e,r]},i.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return i.d(A,{a:A}),A},i.d=(n,A)=>{for(var t in A)i.o(A,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:A[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n;i.g.importScripts&&(n=i.g.location+"");var A=i.g.document;if(!n&&A&&(A.currentScript&&(n=A.currentScript.src),!n)){var t=A.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=n})(),(()=>{i.b=document.baseURI||self.location.href;var n={954:0};i.O.j=A=>0===n[A];var A=(A,t)=>{var e,r,[o,a,C]=t,l=0;if(o.some((A=>0!==n[A]))){for(e in a)i.o(a,e)&&(i.m[e]=a[e]);if(C)var s=C(i)}for(A&&A(t);l<o.length;l++)r=o[l],i.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return i.O(s)},t=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];t.forEach(A.bind(null,0)),t.push=A.bind(null,t.push.bind(t))})(),i.nc=void 0;var e=i.O(void 0,[192,2,193,337,268],(()=>i(253)));e=i.O(e)})();
//# sourceMappingURL=app~d1658f4b.bundle.js.map