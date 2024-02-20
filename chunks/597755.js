e = n.nmd(e), n("781738"), n("424973"), n("843762"), (function() {
  "use strict";
  var r = {
      function: !0,
      object: !0
    },
    a = r[typeof window] && window || this,
    o = r[typeof t] && t,
    i = r[typeof e] && e && !e.nodeType && e,
    s = o && i && "object" == typeof n.g && n.g;
  s && (s.global === s || s.window === s || s.self === s) && (a = s);
  var c = 9007199254740991,
    l = /\bOpera/,
    u = Object.prototype,
    d = u.hasOwnProperty,
    p = u.toString;

  function f(e) {
    return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
  }

  function h(e) {
    return e = b(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : f(e)
  }

  function m(e, t) {
    for (var n in e) d.call(e, n) && t(e[n], n, e)
  }

  function v(e) {
    return null == e ? f(e) : p.call(e).slice(8, -1)
  }

  function g(e) {
    return String(e).replace(/([ -])(?!$)/g, "$1?")
  }

  function y(e, t) {
    var n = null;
    return ! function(e, t) {
      var n = -1,
        r = e ? e.length : 0;
      if ("number" == typeof r && r > -1 && r <= c)
        for (; ++n < r;) t(e[n], n, e);
      else m(e, t)
    }(e, function(r, a) {
      n = t(n, r, a, e)
    }), n
  }

  function b(e) {
    return String(e).replace(/^ +| +$/g, "")
  }
  var x = function e(t) {
    var n, r, o, i, s, c = a,
      u = t && "object" == typeof t && "String" != v(t);
    u && (c = t, t = null);
    var d = c.navigator || {},
      f = d.userAgent || "";
    t || (t = f);
    var x = u ? !!d.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(p.toString()),
      S = "Object",
      w = u ? S : "ScriptBridgingProxyObject",
      D = u ? S : "Environment",
      C = u && c.java ? "JavaPackage" : v(c.java),
      k = u ? S : "RuntimeObject",
      P = /\bJava/.test(C) && c.java,
      E = P && v(c.environment) == D,
      T = c.document || {},
      M = c.operamini || c.opera,
      R = l.test(R = u && M ? M["[[Class]]"] : v(M)) ? R : M = null,
      O = t,
      I = [],
      A = null,
      L = t == f,
      N = L && M && "function" == typeof M.version && M.version(),
      j = function(e) {
        return y(e, function(e, n) {
          return e || RegExp("\\b" + (n.pattern || g(n)) + "\\b", "i").exec(t) && (n.label || n)
        })
      }([{
        label: "EdgeHTML",
        pattern: "Edge"
      }, "Trident", {
        label: "WebKit",
        pattern: "AppleWebKit"
      }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
      F = function(e) {
        return y(e, function(e, n) {
          return e || RegExp("\\b" + (n.pattern || g(n)) + "\\b", "i").exec(t) && (n.label || n)
        })
      }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
        label: "Microsoft Edge",
        pattern: "Edge"
      }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
        label: "Samsung Internet",
        pattern: "SamsungBrowser"
      }, "SeaMonkey", {
        label: "Silk",
        pattern: "(?:Cloud9|Silk-Accelerated)"
      }, "Sleipnir", "SlimBrowser", {
        label: "SRWare Iron",
        pattern: "Iron"
      }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
        label: "Opera Mini",
        pattern: "OPiOS"
      }, "Opera", {
        label: "Opera",
        pattern: "OPR"
      }, "Chrome", {
        label: "Chrome Mobile",
        pattern: "(?:CriOS|CrMo)"
      }, {
        label: "Firefox",
        pattern: "(?:Firefox|Minefield)"
      }, {
        label: "Firefox for iOS",
        pattern: "FxiOS"
      }, {
        label: "IE",
        pattern: "IEMobile"
      }, {
        label: "IE",
        pattern: "MSIE"
      }, "Safari"]),
      K = z([{
        label: "BlackBerry",
        pattern: "BB10"
      }, "BlackBerry", {
        label: "Galaxy S",
        pattern: "GT-I9000"
      }, {
        label: "Galaxy S2",
        pattern: "GT-I9100"
      }, {
        label: "Galaxy S3",
        pattern: "GT-I9300"
      }, {
        label: "Galaxy S4",
        pattern: "GT-I9500"
      }, {
        label: "Galaxy S5",
        pattern: "SM-G900"
      }, {
        label: "Galaxy S6",
        pattern: "SM-G920"
      }, {
        label: "Galaxy S6 Edge",
        pattern: "SM-G925"
      }, {
        label: "Galaxy S7",
        pattern: "SM-G930"
      }, {
        label: "Galaxy S7 Edge",
        pattern: "SM-G935"
      }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
        label: "Kindle Fire",
        pattern: "(?:Cloud9|Silk-Accelerated)"
      }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
        label: "Wii U",
        pattern: "WiiU"
      }, "Wii", "Xbox One", {
        label: "Xbox 360",
        pattern: "Xbox"
      }, "Xoom"]),
      _ = function(e) {
        return y(e, function(e, n, r) {
          return e || (n[K] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(K)] || RegExp("\\b" + g(r) + "(?:\\b|\\w*\\d)", "i").exec(t)) && r
        })
      }({
        Apple: {
          iPad: 1,
          iPhone: 1,
          iPod: 1
        },
        Archos: {},
        Amazon: {
          Kindle: 1,
          "Kindle Fire": 1
        },
        Asus: {
          Transformer: 1
        },
        "Barnes & Noble": {
          Nook: 1
        },
        BlackBerry: {
          PlayBook: 1
        },
        Google: {
          "Google TV": 1,
          Nexus: 1
        },
        HP: {
          TouchPad: 1
        },
        HTC: {},
        LG: {},
        Microsoft: {
          Xbox: 1,
          "Xbox One": 1
        },
        Motorola: {
          Xoom: 1
        },
        Nintendo: {
          "Wii U": 1,
          Wii: 1
        },
        Nokia: {
          Lumia: 1
        },
        Samsung: {
          "Galaxy S": 1,
          "Galaxy S2": 1,
          "Galaxy S3": 1,
          "Galaxy S4": 1
        },
        Sony: {
          PlayStation: 1,
          "PlayStation Vita": 1
        }
      }),
      V = function(e) {
        return y(e, function(e, n) {
          var r, a, o, i, s = n.pattern || g(n);
          if (!e && (e = RegExp("\\b" + s + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t))) {
            ;
            r = e, a = s, o = n.label || n, i = {
              "10.0": "10",
              "6.4": "10 Technical Preview",
              "6.3": "8.1",
              "6.2": "8",
              "6.1": "Server 2008 R2 / 7",
              "6.0": "Server 2008 / Vista",
              "5.2": "Server 2003 / XP 64-bit",
              "5.1": "XP",
              "5.01": "2000 SP1",
              "5.0": "2000",
              "4.0": "NT",
              "4.90": "ME"
            }, a && o && /^Win/i.test(r) && !/^Windows Phone /i.test(r) && (i = i[/[\d.]+$/.exec(r)]) && (r = "Windows " + i), r = String(r), a && o && (r = r.replace(RegExp(a, "i"), o)), e = r = h(r.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
          }
          return e
        })
      }(["Windows Phone", "Android", "CentOS", {
        label: "Chrome OS",
        pattern: "CrOS"
      }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

    function z(e) {
      return y(e, function(e, n) {
        var r = n.pattern || g(n);
        return !e && (e = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(t) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) && ((e = String(n.label && !RegExp(r, "i").test(n.label) ? n.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), n = n.label || n, e = h(e[0].replace(RegExp(r, "i"), n).replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ").replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
      })
    }
    if (j && (j = [j]), _ && !K && (K = z([_])), (i = /\bGoogle TV\b/.exec(K)) && (K = i[0]), /\bSimulator\b/i.test(t) && (K = (K ? K + " " : "") + "Simulator"), "Opera Mini" == F && /\bOPiOS\b/.test(t) && I.push("running in Turbo/Uncompressed mode"), "IE" == F && /\blike iPhone OS\b/.test(t) ? (_ = (i = e(t.replace(/like iPhone OS/, ""))).manufacturer, K = i.product) : /^iP/.test(K) ? (F || (F = "Safari"), V = "iOS" + ((i = / OS ([\d_]+)/i.exec(t)) ? " " + i[1].replace(/_/g, ".") : "")) : "Konqueror" != F || /buntu/i.test(V) ? _ && "Google" != _ && (/Chrome/.test(F) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test(K)) || /\bAndroid\b/.test(V) && /^Chrome/.test(F) && /\bVersion\//i.test(t) ? (F = "Android Browser", V = /\bAndroid\b/.test(V) ? V : "Android") : "Silk" == F ? (!/\bMobi/i.test(t) && (V = "Android", I.unshift("desktop mode")), /Accelerated *= *true/i.test(t) && I.unshift("accelerated")) : "PaleMoon" == F && (i = /\bFirefox\/([\d.]+)\b/.exec(t)) ? I.push("identifying as Firefox " + i[1]) : "Firefox" == F && (i = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (V || (V = "Firefox OS"), K || (K = i[1])) : !F || (i = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(F)) ? (F && !K && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(i + "/") + 8)) && (F = null), (i = K || _ || V) && (K || _ || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(V)) && (F = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(V) ? V : i) + " Browser")) : "Electron" == F && (i = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && I.push("Chromium " + i) : V = "Kubuntu", !N) N = y(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", g(F), "(?:Firefox|Minefield|NetFront)"], function(e, n) {
      return e || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null
    });
    if ((i = "iCab" == j && parseFloat(N) > 3 && "WebKit" || /\bOpera\b/.test(F) && (/\bOPR\b/.test(t) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(j) && "WebKit" || !j && /\bMSIE\b/i.test(t) && ("Mac OS" == V ? "Tasman" : "Trident") || "WebKit" == j && /\bPlayStation\b(?! Vita\b)/i.test(F) && "NetFront") && (j = [i]), "IE" == F && (i = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (F += " Mobile", V = "Windows Phone " + (/\+$/.test(i) ? i : i + ".x"), I.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t) ? (F = "IE Mobile", V = "Windows Phone 8.x", I.unshift("desktop mode"), N || (N = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : "IE" != F && "Trident" == j && (i = /\brv:([\d.]+)/.exec(t)) && (F && I.push("identifying as " + F + (N ? " " + N : "")), F = "IE", N = i[1]), L) {
      ;
      if (r = "global", o = null != (n = c) ? typeof n[r] : "number", /^(?:boolean|number|string|undefined)$/.test(o) || "object" == o && !n[r]) v(i = c.runtime) == w ? (F = "Adobe AIR", V = i.flash.system.Capabilities.os) : v(i = c.phantom) == k ? (F = "PhantomJS", N = (i = i.version || null) && i.major + "." + i.minor + "." + i.patch) : "number" == typeof T.documentMode && (i = /\bTrident\/(\d+)/i.exec(t)) ? (N = [N, T.documentMode], (i = +i[1] + 4) != N[1] && (I.push("IE " + N[1] + " mode"), j && (j[1] = ""), N[1] = i), N = "IE" == F ? String(N[1].toFixed(1)) : N[0]) : "number" == typeof T.documentMode && /^(?:Chrome|Firefox)\b/.test(F) && (I.push("masking as " + F + " " + N), F = "IE", N = "11.0", j = ["Trident"], V = "Windows");
      else if (P && (O = (i = P.lang.System).getProperty("os.arch"), V = V || i.getProperty("os.name") + " " + i.getProperty("os.version")), E) {
        try {
          N = c.require("ringo/engine").version.join("."), F = "RingoJS"
        } catch (e) {
          (i = c.system) && i.global.system == c.system && (F = "Narwhal", V || (V = i[0].os || null))
        }!F && (F = "Rhino")
      } else "object" == typeof c.process && !c.process.browser && (i = c.process) && ("object" == typeof i.versions && ("string" == typeof i.versions.electron ? (I.push("Node " + i.versions.node), F = "Electron", N = i.versions.electron) : "string" == typeof i.versions.nw && (I.push("Chromium " + N, "Node " + i.versions.node), F = "NW.js", N = i.versions.nw)), !F && (F = "Node.js", O = i.arch, V = i.platform, N = (N = /[\d.]+/.exec(i.version)) ? N[0] : null));
      V = V && h(V)
    }
    if (N && (i = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(N) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (L && d.appMinorVersion)) || /\bMinefield\b/i.test(t) && "a") && (A = /b/i.test(i) ? "beta" : "alpha", N = N.replace(RegExp(i + "\\+?$"), "") + ("beta" == A ? P ? "b" : "β" : P ? "a" : "α") + (/\d+\+?/.exec(i) || "")), "Fennec" == F || "Firefox" == F && /\b(?:Android|Firefox OS)\b/.test(V)) F = "Firefox Mobile";
    else if ("Maxthon" == F && N) N = N.replace(/\.[\d.]+/, ".x");
    else if (/\bXbox\b/i.test(K)) "Xbox 360" == K && (V = null), "Xbox 360" == K && /\bIEMobile\b/.test(t) && I.unshift("mobile mode");
    else if ((/^(?:Chrome|IE|Opera)$/.test(F) || F && !K && !/Browser|Mobi/.test(F)) && ("Windows CE" == V || /Mobi/i.test(t))) F += " Mobile";
    else if ("IE" == F && L) try {
      null === c.external && I.unshift("platform preview")
    } catch (e) {
      I.unshift("embedded")
    } else(/\bBlackBerry\b/.test(K) || /\bBB10\b/.test(t)) && (i = (RegExp(K.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || N) ? (V = ((i = [i, /BB10/.test(t)])[1] ? (K = null, _ = "BlackBerry") : "Device Software") + " " + i[0], N = null) : this != m && "Wii" != K && (L && M || /Opera/.test(F) && /\b(?:MSIE|Firefox)\b/i.test(t) || "Firefox" == F && /\bOS X (?:\d+\.){2,}/.test(V) || "IE" == F && (V && !/^Win/.test(V) && N > 5.5 || /\bWindows XP\b/.test(V) && N > 8 || 8 == N && !/\bTrident\b/.test(t))) && !l.test(i = e.call(m, t.replace(l, "") + ";")) && i.name && (i = "ing as " + i.name + ((i = i.version) ? " " + i : ""), l.test(F) ? (/\bIE\b/.test(i) && "Mac OS" == V && (V = null), i = "identify" + i) : (i = "mask" + i, F = R ? h(R.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(i) && (V = null), !L && (N = null)), j = ["Presto"], I.push(i));
    (i = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && (i = [parseFloat(i.replace(/\.(\d)$/, ".0$1")), i], "Safari" == F && "+" == i[1].slice(-1) ? (F = "WebKit Nightly", A = "alpha", N = i[1].slice(0, -1)) : (N == i[1] || N == (i[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1])) && (N = null), i[1] = (/\bChrome\/([\d.]+)/i.exec(t) || 0)[1], 537.36 == i[0] && 537.36 == i[2] && parseFloat(i[1]) >= 28 && "WebKit" == j && (j = ["Blink"]), L && (x || i[1]) ? (j && (j[1] = "like Chrome"), i = i[1] || ((i = i[0]) < 530 ? 1 : i < 532 ? 2 : i < 532.05 ? 3 : i < 533 ? 4 : i < 534.03 ? 5 : i < 534.07 ? 6 : i < 534.1 ? 7 : i < 534.13 ? 8 : i < 534.16 ? 9 : i < 534.24 ? 10 : i < 534.3 ? 11 : i < 535.01 ? 12 : i < 535.02 ? "13+" : i < 535.07 ? 15 : i < 535.11 ? 16 : i < 535.19 ? 17 : i < 536.05 ? 18 : i < 536.1 ? 19 : i < 537.01 ? 20 : i < 537.11 ? "21+" : i < 537.13 ? 23 : i < 537.18 ? 24 : i < 537.24 ? 25 : i < 537.36 ? 26 : "Blink" != j ? "27" : "28")) : (j && (j[1] = "like Safari"), i = (i = i[0]) < 400 ? 1 : i < 500 ? 2 : i < 526 ? 3 : i < 533 ? 4 : i < 534 ? "4+" : i < 535 ? 5 : i < 537 ? 6 : i < 538 ? 7 : i < 601 ? 8 : "8"), j && (j[1] += " " + (i += "number" == typeof i ? ".x" : /[.+]/.test(i) ? "" : "+")), "Safari" == F && (!N || parseInt(N) > 45) && (N = i)), "Opera" == F && (i = /\bzbov|zvav$/.exec(V)) ? (F += " ", I.unshift("desktop mode"), "zvav" == i ? (F += "Mini", N = null) : F += "Mobile", V = V.replace(RegExp(" *" + i + "$"), "")) : "Safari" == F && /\bChrome\b/.exec(j && j[1]) && (I.unshift("desktop mode"), F = "Chrome Mobile", N = null, /\bOS X\b/.test(V) ? (_ = "Apple", V = "iOS 4.3+") : V = null), N && 0 == N.indexOf(i = /[\d.]+$/.exec(V)) && t.indexOf("/" + i + "-") > -1 && (V = b(V.replace(i, ""))), j && !/\b(?:Avant|Nook)\b/.test(F) && (/Browser|Lunascape|Maxthon/.test(F) || "Safari" != F && /^iOS/.test(V) && /\bSafari\b/.test(j[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(F) && j[1]) && (i = j[j.length - 1]) && I.push(i), I.length && (I = ["(" + I.join("; ") + ")"]), _ && K && 0 > K.indexOf(_) && I.push("on " + _), K && I.push((/^on /.test(I[I.length - 1]) ? "" : "on ") + K), V && (s = (i = / ([\d.+]+)$/.exec(V)) && "/" == V.charAt(V.length - i[0].length - 1), V = {
      architecture: 32,
      family: i && !s ? V.replace(i[0], "") : V,
      version: i ? i[1] : null,
      toString: function() {
        var e = this.version;
        return this.family + (e && !s ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
      }
    }), (i = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(O)) && !/\bi686\b/i.test(O) ? (V && (V.architecture = 64, V.family = V.family.replace(RegExp(" *" + i), "")), F && (/\bWOW64\b/i.test(t) || L && /\w(?:86|32)$/.test(d.cpuClass || d.platform) && !/\bWin64; x64\b/i.test(t)) && I.unshift("32-bit")) : V && /^OS X/.test(V.family) && "Chrome" == F && parseFloat(N) >= 39 && (V.architecture = 64), t || (t = null);
    var B = {};
    return B.description = t, B.layout = j && j[0], B.manufacturer = _, B.name = F, B.prerelease = A, B.product = K, B.ua = t, B.version = F && N, B.os = V || {
      architecture: null,
      family: null,
      version: null,
      toString: function() {
        return "null"
      }
    }, B.parse = e, B.toString = function() {
      return this.description || ""
    }, B.version && I.unshift(N), B.name && I.unshift(F), V && F && !(V == String(V).split(" ")[0] && (V == F.split(" ")[0] || K)) && I.push(K ? "(" + V + ")" : "on " + V), I.length && (B.description = I.join(" ")), B
  }();
  "function" == typeof define && "object" == typeof define.amd && define.amd ? (a.platform = x, define(function() {
    return x
  })) : o && i ? m(x, function(e, t) {
    o[t] = e
  }) : a.platform = x
}).call(this)