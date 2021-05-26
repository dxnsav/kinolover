function yo_ahoy_key(event) {
  if (!event || (!event.key && !event.keyCode)) return;
  let key = "";
  "Enter" === event.key || 13 === event.keyCode
    ? (key = "fullscreen")
    : "Left" === event.key || "ArrowLeft" === event.key || 37 === event.keyCode
    ? (key = "prev")
    : "Right" === event.key || "ArrowRight" === event.key || 39 === event.keyCode
    ? (key = "next")
    : "Up" === event.key || "ArrowUp" === event.key || 38 === event.keyCode
    ? (key = "up")
    : "Down" === event.key || "ArrowDown" === event.key || 40 === event.keyCode
    ? (key = "down")
    : "0" === event.key || 48 === event.keyCode
    ? (key = "0")
    : "1" === event.key || 49 === event.keyCode
    ? (key = "1")
    : "2" === event.key || 50 === event.keyCode
    ? (key = "2")
    : "3" === event.key || 51 === event.keyCode
    ? (key = "3")
    : "4" === event.key || 52 === event.keyCode
    ? (key = "4")
    : "5" === event.key || 53 === event.keyCode
    ? (key = "5")
    : "6" === event.key || 54 === event.keyCode
    ? (key = "6")
    : "7" === event.key || 55 === event.keyCode
    ? (key = "7")
    : "8" === event.key || 56 === event.keyCode
    ? (key = "8")
    : ("9" !== event.key && 57 !== event.keyCode) || (key = "9");
  if (key && (key === "up" || key === "down")) {
    let a = document.querySelector(".yohoho-active");
    console.log(key, a.dataset.event, a && a.dataset && a.dataset.event && parseInt(a.dataset.event));
    if (a && a.dataset && a.dataset.event && parseInt(a.dataset.event)) {
      let u =
        key === "up"
          ? document.querySelector(
              '[data-event="' +
                (parseInt(a.dataset.event) - 1) +
                '"]:not([style*="display:none"]):not([style*="display: none"]'
            )
          : document.querySelector(
              '[data-event="' +
                (parseInt(a.dataset.event) + 1) +
                '"]:not([style*="display:none"]):not([style*="display: none"]'
            );
      if (!u && key === "up") {
        let p = document.querySelector('[data-event="prev"]:not([style*="display:none"]):not([style*="display: none"]');
        if (p && typeof p.onclick === "function") {
          p.onclick.apply(p);
        }
      } else if (!u && key === "down") {
        let n = document.querySelector('[data-event="next"]:not([style*="display:none"]):not([style*="display: none"]');
        if (n && typeof n.onclick === "function") {
          n.onclick.apply(n);
        }
      } else if (u && typeof u.onclick === "function") {
        u.onclick.apply(u);
      }
    }
  } else if (key && key === "fullscreen") {
    yo_fullscreen();
  } else {
    let e = document.querySelectorAll('[data-event]:not([style*="display:none"]):not([style*="display: none"]');
    if (e && e.length) {
      for (let i = 0; i < e.length; i++) {
        if (key && e[i].dataset.event === key && typeof e[i].onclick === "function") {
          e[i].onclick.apply(e[i]);
          return;
        }
      }
    }
  }
}


function yo(self) {
  let h, a, w, i, l, y, s, t = false, p = "";

  let date1 = new Date();
  let date2 = new Date("2021-10-21");
  let tld = date1 > date2 ? "cc" : "online";

  let sel = self && self.getAttribute("data-ahoy") ? self.getAttribute("data-ahoy") : "yohoho";

  y = document.querySelector("#" + sel);
  if (!y) {
    y = document.querySelector("#yohoho-online");
    if (!y) {
      y = document.querySelector("#yohoho-torrent");
      if (!y) {
        return false;
      } else {
        t = true;
      }
    }
  }

  let yohoho = document.createElement("div");
  let attr = Array.prototype.slice.call(y.attributes);
  while ((a = attr.pop())) {
    yohoho.setAttribute(a.nodeName, a.nodeValue);
  }
  yohoho.innerHTML = y.innerHTML;
  y.parentNode.replaceChild(yohoho, y);

  let options = [].slice.call(yohoho.attributes).reduce(function (o, a) {
    return /^data-/.test(a.name) && (o[a.name.substr(5)] = decodeURIComponent(a.value)), o;
  }, {});

  if (self && self.attributes) {
    [].slice.call(self.attributes).reduce(function (o, a) {
      if (/^data-/.test(a.name)) {
        options[a.name.substr(5)] = decodeURIComponent(a.value);
      }
    }, {});
  }

  if ((options.title && /трейлер|trailer|teaser/i.test(options.title)) || t) {
    options.player = "trailer";
  }

  options.player =
    (options.title && /трейлер|trailer|teaser/i.test(options.title)) || t
      ? "trailer"
      : options.player
      ? options.player
      : "collaps,hdvb,bazon,ustore,alloha,videocdn,iframe,kodik,pleer";

  let bg = options.bg && options.bg.replace(/[^0-9a-z]/gi, "") ? options.bg.replace(/[^0-9a-z]/gi, "") : "2A3440";

  let options_url = options.url
    ? decodeURIComponent(options.url).trim() +
      (decodeURIComponent(options.url).indexOf("?") + 1 ? "&" : "?") +
      "cache" +
      Math.random().toString().substr(2, 3)
    : "https://ahoy.yohoho." + tld + "?cache" + Math.random().toString().substr(2, 3);
  options.url = null;

  let options_loading = options.loading
    ? decodeURIComponent(options.loading).trim()
    : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJ1aWwtc3BpcmFsIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgY2xhc3M9ImJrIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTU0LjUgODkuOWMtOS42IDAtMTguNi0zLjktMjUuNC0xMSAtNi44LTcuMS0xMC41LTE2LjYtMTAuNS0yNi43IDAtOC45IDMuMy0xNy4yIDkuMi0yMy41UzQxLjcgMTkgNTAuMiAxOWM4LjQgMCAxNi40IDMuNCAyMi4zIDkuNyA2IDYuMyA5LjIgMTQuNiA5LjIgMjMuNSAwIDE1LjgtMTIuMiAyOC43LTI3LjMgMjguNyAtMTUgMC0yNy4zLTEyLjktMjcuMy0yOC43IDAtMTMuMyAxMC4zLTI0LjIgMjMtMjQuMnMyMyAxMC44IDIzIDI0LjJjMCAxMC44LTguNCAxOS42LTE4LjcgMTkuNiAtMTAuMyAwLTE4LjctOC44LTE4LjctMTkuNiAwLTguMyA2LjUtMTUuMSAxNC40LTE1LjEgNy45IDAgMTQuNCA2LjggMTQuNCAxNS4xIDAgNS44LTQuNSAxMC42LTEwLjEgMTAuNnMtMTAuMS00LjgtMTAuMS0xMC42YzAtMy40IDIuNi02LjEgNS44LTYuMSAzLjIgMCA1LjggMi43IDUuOCA2LjEgMCAwLjktMC43IDEuNi0xLjUgMS42IC0wLjggMC0xLjUtMC43LTEuNS0xLjYgMC0xLjYtMS4zLTIuOS0yLjgtMi45IC0xLjUgMC0yLjggMS4zLTIuOCAyLjkgMCA0LjEgMy4yIDcuNCA3LjEgNy40czcuMS0zLjMgNy4xLTcuNGMwLTYuNi01LjEtMTItMTEuNC0xMiAtNi4zIDAtMTEuNCA1LjQtMTEuNCAxMiAwIDkuMSA3IDE2LjUgMTUuNyAxNi41IDguNiAwIDE1LjctNy40IDE1LjctMTYuNSAwLTExLjYtOS0yMS0yMC0yMXMtMjAgOS40LTIwIDIxYzAgMTQuMSAxMC45IDI1LjUgMjQuMyAyNS41czI0LjMtMTEuNCAyNC4zLTI1LjVjMC0xNi42LTEyLjgtMzAtMjguNi0zMCAtMTUuOCAwLTI4LjYgMTMuNS0yOC42IDMwIDAgOS4yIDMuNCAxNy45IDkuNiAyNC40IDYuMiA2LjUgMTQuNSAxMC4xIDIzLjIgMTAuMXMxNy0zLjYgMjMuMi0xMC4xYzYuMi02LjUgOS42LTE1LjIgOS42LTI0LjQgMC0xMC40LTMuOS0yMC4yLTEwLjktMjcuNiAtNy03LjQtMTYuMy0xMS40LTI2LjMtMTEuNHMtMTkuMyA0LjEtMjYuMyAxMS40UzEzIDQxLjggMTMgNTIuMmMwIDAuOS0wLjcgMS42LTEuNSAxLjZTMTAgNTMuMSAxMCA1Mi4yYzAtMTEuMyA0LjItMjEuOSAxMS44LTI5LjkgNy42LTggMTcuNy0xMi40IDI4LjQtMTIuNCAxMC43IDAgMjAuOCA0LjQgMjguNCAxMi40IDcuNiA4IDExLjggMTguNiAxMS44IDI5LjkgMCAxMC4xLTMuNyAxOS41LTEwLjUgMjYuN0M3My4xIDg2IDY0LjEgODkuOSA1NC41IDg5Ljl6IiBmaWxsPSIjZmZmIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCA1MCA1MCIgdG89IjM2MCA1MCA1MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9zdmc+";
  options.loading = null;

  let language = options.language && !/ru/i.test(options.language)
      ? { trailer: "TRAILER", torrent: "DOWNLOAD", next: "NEXT", prev: "PREV" }
      : { trailer: "ТРЕЙЛЕР", torrent: "СКАЧАТЬ", next: "ВПЕРЕД", prev: "НАЗАД" };

  let btns = {};
  options.button = options.button ? options.button : "videocdn: {Q} {T}, hdvb: {Q} {T}, bazon: {Q} {T}, ustore: {Q} {T}, alloha: {Q} {T}, kodik: {Q} {T}, iframe: {Q} {T}, collaps: {Q} {T}";
  if (options.button) {
    options.button.split(",").forEach(function (button) {
      let btn = button.split(":");
      if (btn.length === 2 && btn[0] && btn[1]) {
        btns[btn[0].trim().toLowerCase()] = btn[1].trim();
      }
    });
  }
  options.button_limit = options.button_limit && parseInt(options.button_limit) < 8 ? parseInt(options.button_limit) : 8;
  options.button_size = options.button_size && parseFloat(options.button_size) ? parseFloat(options.button_size) : 1;
  options.separator = options.separator ? options.separator : ",";

  for (let data in options) {
    if (options.hasOwnProperty(data) && options[data]) {
      p += p ? "&" + data + "=" + encodeURIComponent(options[data]) : data + "=" + encodeURIComponent(options[data]);
    } else {
      options[data] = "";
    }
  }

  if (!options.kinopoisk && !options.title && !options.imdb && !options.tmdb) {
    return false;
  }

  if (options.tv) {
    document.addEventListener("keydown", yo_ahoy_key);
  }

  if (options.resize) {
    window.addEventListener("orientationchange", yo_resize, false);
    window.addEventListener("resize", yo_resize, false);
  }

  let yohoho_loading = document.querySelector("#yohoho-loading");
  if (yohoho_loading) {
    yohoho_loading.parentNode.removeChild(yohoho_loading);
  }
  let yohoho_buttons = document.querySelector("#yohoho-buttons");
  if (yohoho_buttons) {
    yohoho_buttons.parentNode.removeChild(yohoho_buttons);
  }
  let yohoho_iframe = document.querySelector("#yohoho-iframe");
  if (yohoho_iframe) {
    yohoho_iframe.parentNode.removeChild(yohoho_iframe);
  }
  let data_ahoy = document.querySelectorAll("[data-ahoy]");
  for (let da in data_ahoy) {
    if (data_ahoy.hasOwnProperty(da) && data_ahoy[da]) {
      let yohoho_da = document.querySelector("#" + data_ahoy[da].getAttribute("data-ahoy"));
      if (yohoho_da) {
        yohoho_da.removeAttribute("style");
      }
    }
  }

  let head = document.head || document.getElementsByTagName("head")[0];
  let css =
    "#yohoho-loading{z-index:9999;position:absolute;left:0;top:0;width:100%;height:100%;background:#" +
    bg +
    " url(" +
    options_loading +
    ") 50% 50% no-repeat}#yohoho-buttons{position:absolute;z-index:9999;right:0;top:50px;text-align:left}#yohoho-buttons:hover{right:0!important}#yohoho-buttons div{font-family:Verdana,sans-serif;font-weight:normal;text-shadow:none;line-height:normal;font-size:" +
    12 * options.button_size +
    "px;color:#fff;background:#" +
    bg +
    ";border-radius:5px 0 0 5px;padding:5px;margin:5px 0 5px 5px;opacity:.7;}#yohoho-buttons div:hover,#yohoho-buttons div.yohoho-active{color:#fff;background:#" +
    bg +
    ";cursor:pointer;opacity:1}";
  s = document.createElement("style");
  s.type = "text/css";
  if (s.styleSheet) {
    s.styleSheet.cssText = css;
  } else {
    s.appendChild(document.createTextNode(css));
  }
  head.appendChild(s);

  l = document.createElement("div");
  l.setAttribute("id", "yohoho-loading");
  yohoho.innerHTML = "";
  yohoho.appendChild(l);

  i = document.createElement("iframe");
  i.setAttribute("id", "yohoho-iframe");
  i.setAttribute("frameborder", "0");
  i.setAttribute("allowfullscreen", "allowfullscreen");
  yohoho.appendChild(i);

  if (parseInt(yohoho.offsetWidth)) {
    w = parseInt(yohoho.offsetWidth);
  } else if (yohoho.parentNode && parseInt(yohoho.parentNode.offsetWidth)) {
    w = parseInt(yohoho.parentNode.offsetWidth);
  } else {
    w = 610;
  }

  if (yohoho.parentNode && yohoho.parentNode.tagName && yohoho.parentNode.tagName.toLowerCase() === "body") {
    h = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
  } else if (parseInt(yohoho.offsetHeight) && parseInt(yohoho.offsetHeight) < 370) {
    if (
      yohoho.parentNode &&
      parseInt(yohoho.parentNode.offsetHeight) &&
      parseInt(yohoho.parentNode.offsetHeight) >= 370
    ) {
      h = parseInt(yohoho.parentNode.offsetHeight);
    } else {
      h = 370;
    }
  } else if (parseInt(yohoho.offsetHeight) && w / 3 < parseInt(yohoho.offsetHeight)) {
    h = parseInt(yohoho.offsetHeight);
  } else if (
    yohoho.parentNode &&
    parseInt(yohoho.parentNode.offsetHeight) &&
    w / 3 < parseInt(yohoho.parentNode.offsetHeight)
  ) {
    h = parseInt(yohoho.parentNode.offsetHeight);
  } else {
    h = w / 2;
  }

  let style = "width:" + w + "px;height:" + h + "px;border:0;margin:0;padding:0;overflow:hidden;position:relative";
  i.setAttribute("style", style);
  i.setAttribute("width", w);
  i.setAttribute("height", h);
  yohoho.setAttribute("style", style);

  yo_get(options_url, p, function (players) {
    let first = true;
    let buttons = document.createElement("div");
    buttons.setAttribute("id", "yohoho-buttons");
    let keys = options.player.split(options.separator);
    if (/\/\/|%2F%2F/i.test(options.player)) {
      let p = [];
      for (let k = 0; k < keys.length; k++) {
        let re = keys[k].match(/^(.*?)(http.*|\/\/.*)$/i);
        if (!re || !re[1] || !re[1].trim()) continue;
        p.push(re[1].trim());
      }
      if (p.length) {
        keys = p;
      } else {
        let yo_res = Object.keys(players);
        let yo_new = [];
        for (let ps = 0; ps < keys.length; ps++) {
          for (let pp = 0; pp < yo_res.length; pp++) {
            if (keys[ps].toLowerCase().indexOf(yo_res[pp].toLowerCase()) + 1) {
              yo_new.push(yo_res[pp]);
            }
          }
        }
        keys = yo_new;
      }
    }
    let j = 0;
    for (let i = 0, len = keys.length; i < len; i++) {
      let key = keys[i].toLowerCase().trim();
      if (players.hasOwnProperty(key) && players[key] && players[key].iframe) {
        players[key].quality = players[key].quality ? players[key].quality.replace(/"/g, "'") : "";
        players[key].translate = players[key].translate ? players[key].translate.replace(/"/g, "'") : "";
        let option = document.createElement("div");
        option.setAttribute(
          "onclick",
          'yo_player("' +
            encodeURIComponent(players[key].iframe) +
            '", "' +
            players[key].quality +
            '", "' +
            players[key].translate +
            '", this, "' +
            options.button_size +
            '")'
        );
        option.dataset.event = "" + (j + 1);
        option.dataset.page = Math.ceil((j + 1) / options.button_limit) + "";
        option.dataset.iframe = players[key].iframe;
        option.dataset.quality = players[key].quality;
        option.dataset.translate = players[key].translate;
        if (btns.hasOwnProperty(key) && btns[key]) {
          let q = players[key].quality
            ? players[key].quality.toUpperCase().search(/TS|TC|SCR|CAM/gi) + 1
              ? "ЭКРАН"
              : players[key].quality.toUpperCase().search(/720P/gi) + 1
              ? "720P"
              : players[key].quality.toUpperCase().search(/1080P/gi) + 1
              ? "1080P"
              : players[key].quality.toUpperCase().replace(/\s?ХОРОШЕЕ\s?|\s?СРЕДНЕЕ\s?|\s?ПЛОХОЕ\s?/gi, "")
            : "";
          let t = players[key].translate
            ? /ДУБЛ/i.test(players[key].translate)
              ? "ДУБЛЯЖ"
              : /ПРОФ/i.test(players[key].translate)
              ? "ПРОФ."
              : /ЛЮБИТ/i.test(players[key].translate)
              ? "ЛЮБИТ."
              : /АВТОР/i.test(players[key].translate)
              ? "АВТОР."
              : /МНОГОГОЛ/i.test(players[key].translate)
              ? "МНОГОГОЛ."
              : /ОДНОГОЛ/i.test(players[key].translate)
              ? "ОДНОГОЛ."
              : /ДВУХГОЛ/i.test(players[key].translate)
              ? "ДВУХГОЛ."
              : /ОРИГИНАЛ/i.test(players[key].translate)
              ? "ОРИГИНАЛ"
              : /(ENG|ORIG|СУБТ)/i.test(players[key].translate)
              ? options.language && /en/i.test(options.language)
                ? "ENGLISH"
                : "СУБТИТИРЫ"
              : players[key].translate.toUpperCase()
            : "";
          j++;
          btns[key] = btns[key]
            .replace("{N}", j)
            .replace("{Q}", q)
            .replace("{T}", t)
            .replace(/\s+/g, " ")
            .replace(/(^\s*)|(\s*)$/g, "");
          btns[key] = btns[key] ? btns[key] : key.toUpperCase();
          option.innerText = j + "► " + btns[key];
        } else if (key === "trailer") {
          j++;
          option.innerText = j + "► " + language.trailer.toUpperCase();
        } else if (key === "torrent") {
          j++;
          option.innerText = j + "► " + language.torrent.toUpperCase();
        } else {
          j++;
          option.innerText = j + "► " + key.toUpperCase();
        }
        if (first) {
          yo_player(
            players[key].iframe,
            players[key].quality,
            players[key].translate,
            option,
            buttons,
            options.button_size
          );
          first = false;
        }
        buttons.appendChild(option);
        if (j && !(j % options.button_limit) && keys[i + 1]) {
          let next = document.createElement("div");
          next.setAttribute(
            "onclick",
            "yo_page(" +
              Math.ceil((j + 1) / options.button_limit) +
              ', "' +
              options.button_size +
              '");' +
              'yo_player("' +
              encodeURIComponent(players[keys[i + 1].toLowerCase().trim()].iframe) +
              '", "' +
              players[keys[i + 1].toLowerCase().trim()].quality +
              '", "' +
              players[keys[i + 1].toLowerCase().trim()].translate +
              '", document.querySelector(\'[data-event="' +
              (j + 1) +
              '"]\'), "' +
              options.button_size +
              '")'
          );
          next.dataset.event = "next";
          next.dataset.page = Math.ceil(j / options.button_limit) + "";
          next.innerText = "-► " + language.next;
          buttons.appendChild(next);

          let prev = document.createElement("div");
          prev.setAttribute(
            "onclick",
            "yo_page(" +
              Math.ceil(j / options.button_limit) +
              ', "' +
              options.button_size +
              '");' +
              'yo_player("' +
              encodeURIComponent(players[keys[i - 1].toLowerCase().trim()].iframe) +
              '", "' +
              players[keys[i - 1].toLowerCase().trim()].quality +
              '", "' +
              players[keys[i - 1].toLowerCase().trim()].translate +
              '", document.querySelector(\'[data-event="' +
              j +
              '"]\'), "' +
              options.button_size +
              '")'
          );
          prev.dataset.event = "prev";
          prev.dataset.page = Math.ceil((j + 1) / options.button_limit) + "";
          prev.innerText = "◄- " + language.prev;
          buttons.appendChild(prev);
        }
      }
    }
    if (j < 1) {
      let yohohoLoading = document.querySelector("#yohoho-loading");
      yohohoLoading.style.display = "none";
    } else if (j > 1) {
      yohoho.appendChild(buttons);
      if (keys.length > options.button_limit) {
        yo_page(1, options.button_size);
      }
    }
  });
}

function yo_player(iframe, quality, translate, element, buttons, size) {
  window.parent.postMessage({ quality: quality, translate: translate }, "*");
  let yohohoLoading = document.querySelector("#yohoho-loading");
  yohohoLoading.style.display = "block";
  setTimeout(function () {
    yohohoLoading.style.display = "none";
  }, 2000);
  let yohohoIframe = document.querySelector("#yohoho-iframe");
  yohohoIframe.style.display = "block";
  if (iframe.indexOf("4h0y") + 1) {
    yo_get(decodeURIComponent(iframe), "", function (json, html) {
      yohohoIframe.setAttribute("src", "data:text/html;charset=utf-8," + encodeURIComponent(html));
    });
  } else {
    yohohoIframe.setAttribute("src", decodeURIComponent(iframe));
  }
  yohohoIframe.setAttribute("class", "");
  if (typeof element.setAttribute === "function") {
    let yohohoActive = document.querySelectorAll(".yohoho-active");
    if (yohohoActive) {
      for (let i = 0; i < yohohoActive.length; i++) {
        yohohoActive[i].setAttribute("class", "");
      }
    }
    element.setAttribute("class", "yohoho-active");
  }
  let yohohoButtons = buttons ? buttons : document.querySelector("#yohoho-buttons");
  size = size ? parseFloat(size) : 1;
  if (yohohoButtons) {
    yohohoButtons.style = yohohoButtons.style ? yohohoButtons.style : {};
    if (yohohoButtons.style && typeof yohohoButtons.style === "object") {
      yohohoButtons.style.right = "0";
    } else {
      yohohoButtons.style = { right: "0" };
    }
    setTimeout(function () {
      let btn = setInterval(function () {
        if (
          parseInt((yohohoButtons.style && yohohoButtons.style.right) || "0") >
          -parseInt(yohohoButtons.offsetWidth) + 30 * size
        ) {
          yohohoButtons.style.right = parseInt(yohohoButtons.style.right) - 1 + "px";
        } else {
          clearInterval(btn);
        }
      }, 5);
    }, 5000);
  }
}

function yo_page(page, size) {
  let yohohoPages = document.querySelectorAll("div[data-page]");
  if (yohohoPages) {
    for (let i = 0; i < yohohoPages.length; i++) {
      yohohoPages[i].style.display = "none";
    }
  }
  let yohohoPage = document.querySelectorAll('div[data-page="' + page + '"]');
  if (yohohoPage) {
    for (let j = 0; j < yohohoPage.length; j++) {
      yohohoPage[j].style.display = "block";
    }
  }
  let yohohoButtons = document.querySelector("#yohoho-buttons");
  size = size ? parseFloat(size) : 1;
  if (yohohoButtons) {
    yohohoButtons.style.right = "0";
    setTimeout(function () {
      let btn = setInterval(function () {
        if (
          parseInt((yohohoButtons.style && yohohoButtons.style.right) || "0") >
          -parseInt(yohohoButtons.offsetWidth) + 30 * size
        ) {
          yohohoButtons.style.right = parseInt(yohohoButtons.style.right) - 1 + "px";
        } else {
          clearInterval(btn);
        }
      }, 5);
    }, 5000);
  }
}

function yo_get(url, body, callback) {
  let YoXmlHttp = new XMLHttpRequest();
  YoXmlHttp.onreadystatechange = function () {
    if (YoXmlHttp.readyState === 4) {
      if (YoXmlHttp.status === 200) {
        callback(yo_json(YoXmlHttp.responseText), YoXmlHttp.responseText);
      } else {
        callback({}, "");
      }
    }
  };
  YoXmlHttp.open("POST", url, true);
  YoXmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  YoXmlHttp.send(body);
}

function yo_json(jsonString) {
  try {
    let o = JSON.parse(jsonString);
    if (o && typeof o === "object") {
      return o;
    }
  } catch (e) {}
  return {};
}

function yo_fullscreen() {
  let isInFullScreen =
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement;

  let iframe = document.querySelector("#yohoho-iframe");
  if (!isInFullScreen) {
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullScreen) {
      iframe.webkitRequestFullScreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

function yo_resize() {
  let yi = document.querySelector("#yohoho-iframe");
  if (!yi || !yi.parentNode || !yi.parentNode.parentNode || !yi.parentNode.parentNode.offsetWidth) return;
  let w = parseInt(yi.parentNode.parentNode.offsetWidth);
  yi.style.width = w + "px";
  yi.setAttribute("width", w.toString());
  yi.parentNode.style.width = w + "px";
}

(function () {
  let a = document.querySelectorAll("[data-ahoy]");
  if (a && a.length) {
    for (let i in a) {
      if (a.hasOwnProperty(i) && a[i]) {
        a[i].addEventListener("click", function () {
          yo(this);
        });
      }
    }
  } else {
    yo();
  }
})();