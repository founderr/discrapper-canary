t = r.nmd(t), r("781738"), r("424973"), r("843762"), (function() {
  "use strict";
  var n = {
      function: !0,
      object: !0
    },
    o = n[typeof window] && window || this,
    i = n[typeof e] && e,
    a = n[typeof t] && t && !t.nodeType && t,
    u = i && a && "object" == typeof r.g && r.g;
  u && (u.global === u || u.window === u || u.self === u) && (o = u);
  var l = 9007199254740991,
    s = /\bOpera/,
    c = Object.prototype,
    p = c.hasOwnProperty,
    f = c.toString;

  function y(t) {
    return (t = String(t)).charAt(0).toUpperCase() + t.slice(1)
  }

  function h(t) {
    return t = m(t), /^(?:webOS|i(?:OS|P))/.test(t) ? t : y(t)
  }

  function d(t, e) {
    for (var r in t) p.call(t, r) && e(t[r], r, t)
  }

  function b(t) {
    return null == t ? y(t) : f.call(t).slice(8, -1)
  }

  function g(t) {
    return String(t).replace(/([ -])(?!$)/g, "$1?")
  }

  function v(t, e) {
    var r = null;
    return ! function(t, e) {
      var r = -1,
        n = t ? t.length : 0;
      if ("number" == typeof n && n > -1 && n <= l)
        for (; ++r < n;) e(t[r], r, t);
      else d(t, e)
    }(t, function(n, o) {
      r = e(r, n, o, t)
    }), r
  }

  function m(t) {
    return String(t).replace(/^ +| +$/g, "")
  }
  var S = function t(e) {
    var r, n, i, a, u, l = o,
      c = e && "object" == typeof e && "String" != b(e);
    c && (l = e, e = null);
    var p = l.navigator || {},
      y = p.userAgent || "";
    e || (e = y);
    var S = c ? !!p.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(f.toString()),
      x = "Object",
      A = c ? x : "ScriptBridgingProxyObject",
      w = c ? x : "Environment",
      O = c && l.java ? "JavaPackage" : b(l.java),
      P = c ? x : "RuntimeObject",
      j = /\bJava/.test(O) && l.java,
      E = j && b(l.environment) == w,
      k = l.document || {},
      I = l.operamini || l.opera,
      M = s.test(M = c && I ? I["[[Class]]"] : b(I)) ? M : I = null,
      F = e,
      R = [],
      B = null,
      T = e == y,
      C = T && I && "function" == typeof I.version && I.version(),
      U = function(t) {
        return v(t, function(t, r) {
          return t || RegExp("\\b" + (r.pattern || g(r)) + "\\b", "i").exec(e) && (r.label || r)
        })
      }([{
        label: "EdgeHTML",
        pattern: "Edge"
      }, "Trident", {
        label: "WebKit",
        pattern: "AppleWebKit"
      }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
      _ = function(t) {
        return v(t, function(t, r) {
          return t || RegExp("\\b" + (r.pattern || g(r)) + "\\b", "i").exec(e) && (r.label || r)
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
      W = D([{
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
      N = function(t) {
        return v(t, function(t, r, n) {
          return t || (r[W] || r[/^[a-z]+(?: +[a-z]+\b)*/i.exec(W)] || RegExp("\\b" + g(n) + "(?:\\b|\\w*\\d)", "i").exec(e)) && n
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
      G = function(t) {
        return v(t, function(t, r) {
          var n, o, i, a, u = r.pattern || g(r);
          if (!t && (t = RegExp("\\b" + u + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e))) {
            ;
            n = t, o = u, i = r.label || r, a = {
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
            }, o && i && /^Win/i.test(n) && !/^Windows Phone /i.test(n) && (a = a[/[\d.]+$/.exec(n)]) && (n = "Windows " + a), n = String(n), o && i && (n = n.replace(RegExp(o, "i"), i)), t = n = h(n.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
          }
          return t
        })
      }(["Windows Phone", "Android", "CentOS", {
        label: "Chrome OS",
        pattern: "CrOS"
      }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

    function D(t) {
      return v(t, function(t, r) {
        var n = r.pattern || g(r);
        return !t && (t = RegExp("\\b" + n + " *\\d+[.\\w_]*", "i").exec(e) || RegExp("\\b" + n + " *\\w+-[\\w]*", "i").exec(e) || RegExp("\\b" + n + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e)) && ((t = String(r.label && !RegExp(n, "i").test(r.label) ? r.label : t).split("/"))[1] && !/[\d.]+/.test(t[0]) && (t[0] += " " + t[1]), r = r.label || r, t = h(t[0].replace(RegExp(n, "i"), r).replace(RegExp("; *(?:" + r + "[_-])?", "i"), " ").replace(RegExp("(" + r + ")[-_.]?(\\w)", "i"), "$1 $2"))), t
      })
    }
    if (U && (U = [U]), N && !W && (W = D([N])), (a = /\bGoogle TV\b/.exec(W)) && (W = a[0]), /\bSimulator\b/i.test(e) && (W = (W ? W + " " : "") + "Simulator"), "Opera Mini" == _ && /\bOPiOS\b/.test(e) && R.push("running in Turbo/Uncompressed mode"), "IE" == _ && /\blike iPhone OS\b/.test(e) ? (N = (a = t(e.replace(/like iPhone OS/, ""))).manufacturer, W = a.product) : /^iP/.test(W) ? (_ || (_ = "Safari"), G = "iOS" + ((a = / OS ([\d_]+)/i.exec(e)) ? " " + a[1].replace(/_/g, ".") : "")) : "Konqueror" != _ || /buntu/i.test(G) ? N && "Google" != N && (/Chrome/.test(_) && !/\bMobile Safari\b/i.test(e) || /\bVita\b/.test(W)) || /\bAndroid\b/.test(G) && /^Chrome/.test(_) && /\bVersion\//i.test(e) ? (_ = "Android Browser", G = /\bAndroid\b/.test(G) ? G : "Android") : "Silk" == _ ? (!/\bMobi/i.test(e) && (G = "Android", R.unshift("desktop mode")), /Accelerated *= *true/i.test(e) && R.unshift("accelerated")) : "PaleMoon" == _ && (a = /\bFirefox\/([\d.]+)\b/.exec(e)) ? R.push("identifying as Firefox " + a[1]) : "Firefox" == _ && (a = /\b(Mobile|Tablet|TV)\b/i.exec(e)) ? (G || (G = "Firefox OS"), W || (W = a[1])) : !_ || (a = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(_)) ? (_ && !W && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(a + "/") + 8)) && (_ = null), (a = W || N || G) && (W || N || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(G)) && (_ = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(G) ? G : a) + " Browser")) : "Electron" == _ && (a = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) && R.push("Chromium " + a) : G = "Kubuntu", !C) C = v(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", g(_), "(?:Firefox|Minefield|NetFront)"], function(t, r) {
      return t || (RegExp(r + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] || null
    });
    if ((a = "iCab" == U && parseFloat(C) > 3 && "WebKit" || /\bOpera\b/.test(_) && (/\bOPR\b/.test(e) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(U) && "WebKit" || !U && /\bMSIE\b/i.test(e) && ("Mac OS" == G ? "Tasman" : "Trident") || "WebKit" == U && /\bPlayStation\b(?! Vita\b)/i.test(_) && "NetFront") && (U = [a]), "IE" == _ && (a = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1]) ? (_ += " Mobile", G = "Windows Phone " + (/\+$/.test(a) ? a : a + ".x"), R.unshift("desktop mode")) : /\bWPDesktop\b/i.test(e) ? (_ = "IE Mobile", G = "Windows Phone 8.x", R.unshift("desktop mode"), C || (C = (/\brv:([\d.]+)/.exec(e) || 0)[1])) : "IE" != _ && "Trident" == U && (a = /\brv:([\d.]+)/.exec(e)) && (_ && R.push("identifying as " + _ + (C ? " " + C : "")), _ = "IE", C = a[1]), T) {
      ;
      if (n = "global", i = null != (r = l) ? typeof r[n] : "number", /^(?:boolean|number|string|undefined)$/.test(i) || "object" == i && !r[n]) b(a = l.runtime) == A ? (_ = "Adobe AIR", G = a.flash.system.Capabilities.os) : b(a = l.phantom) == P ? (_ = "PhantomJS", C = (a = a.version || null) && a.major + "." + a.minor + "." + a.patch) : "number" == typeof k.documentMode && (a = /\bTrident\/(\d+)/i.exec(e)) ? (C = [C, k.documentMode], (a = +a[1] + 4) != C[1] && (R.push("IE " + C[1] + " mode"), U && (U[1] = ""), C[1] = a), C = "IE" == _ ? String(C[1].toFixed(1)) : C[0]) : "number" == typeof k.documentMode && /^(?:Chrome|Firefox)\b/.test(_) && (R.push("masking as " + _ + " " + C), _ = "IE", C = "11.0", U = ["Trident"], G = "Windows");
      else if (j && (F = (a = j.lang.System).getProperty("os.arch"), G = G || a.getProperty("os.name") + " " + a.getProperty("os.version")), E) {
        try {
          C = l.require("ringo/engine").version.join("."), _ = "RingoJS"
        } catch (t) {
          (a = l.system) && a.global.system == l.system && (_ = "Narwhal", G || (G = a[0].os || null))
        }!_ && (_ = "Rhino")
      } else "object" == typeof l.process && !l.process.browser && (a = l.process) && ("object" == typeof a.versions && ("string" == typeof a.versions.electron ? (R.push("Node " + a.versions.node), _ = "Electron", C = a.versions.electron) : "string" == typeof a.versions.nw && (R.push("Chromium " + C, "Node " + a.versions.node), _ = "NW.js", C = a.versions.nw)), !_ && (_ = "Node.js", F = a.arch, G = a.platform, C = (C = /[\d.]+/.exec(a.version)) ? C[0] : null));
      G = G && h(G)
    }
    if (C && (a = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(C) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (T && p.appMinorVersion)) || /\bMinefield\b/i.test(e) && "a") && (B = /b/i.test(a) ? "beta" : "alpha", C = C.replace(RegExp(a + "\\+?$"), "") + ("beta" == B ? j ? "b" : "β" : j ? "a" : "α") + (/\d+\+?/.exec(a) || "")), "Fennec" == _ || "Firefox" == _ && /\b(?:Android|Firefox OS)\b/.test(G)) _ = "Firefox Mobile";
    else if ("Maxthon" == _ && C) C = C.replace(/\.[\d.]+/, ".x");
    else if (/\bXbox\b/i.test(W)) "Xbox 360" == W && (G = null), "Xbox 360" == W && /\bIEMobile\b/.test(e) && R.unshift("mobile mode");
    else if ((/^(?:Chrome|IE|Opera)$/.test(_) || _ && !W && !/Browser|Mobi/.test(_)) && ("Windows CE" == G || /Mobi/i.test(e))) _ += " Mobile";
    else if ("IE" == _ && T) try {
      null === l.external && R.unshift("platform preview")
    } catch (t) {
      R.unshift("embedded")
    } else(/\bBlackBerry\b/.test(W) || /\bBB10\b/.test(e)) && (a = (RegExp(W.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || C) ? (G = ((a = [a, /BB10/.test(e)])[1] ? (W = null, N = "BlackBerry") : "Device Software") + " " + a[0], C = null) : this != d && "Wii" != W && (T && I || /Opera/.test(_) && /\b(?:MSIE|Firefox)\b/i.test(e) || "Firefox" == _ && /\bOS X (?:\d+\.){2,}/.test(G) || "IE" == _ && (G && !/^Win/.test(G) && C > 5.5 || /\bWindows XP\b/.test(G) && C > 8 || 8 == C && !/\bTrident\b/.test(e))) && !s.test(a = t.call(d, e.replace(s, "") + ";")) && a.name && (a = "ing as " + a.name + ((a = a.version) ? " " + a : ""), s.test(_) ? (/\bIE\b/.test(a) && "Mac OS" == G && (G = null), a = "identify" + a) : (a = "mask" + a, _ = M ? h(M.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(a) && (G = null), !T && (C = null)), U = ["Presto"], R.push(a));
    (a = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) && (a = [parseFloat(a.replace(/\.(\d)$/, ".0$1")), a], "Safari" == _ && "+" == a[1].slice(-1) ? (_ = "WebKit Nightly", B = "alpha", C = a[1].slice(0, -1)) : (C == a[1] || C == (a[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) && (C = null), a[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1], 537.36 == a[0] && 537.36 == a[2] && parseFloat(a[1]) >= 28 && "WebKit" == U && (U = ["Blink"]), T && (S || a[1]) ? (U && (U[1] = "like Chrome"), a = a[1] || ((a = a[0]) < 530 ? 1 : a < 532 ? 2 : a < 532.05 ? 3 : a < 533 ? 4 : a < 534.03 ? 5 : a < 534.07 ? 6 : a < 534.1 ? 7 : a < 534.13 ? 8 : a < 534.16 ? 9 : a < 534.24 ? 10 : a < 534.3 ? 11 : a < 535.01 ? 12 : a < 535.02 ? "13+" : a < 535.07 ? 15 : a < 535.11 ? 16 : a < 535.19 ? 17 : a < 536.05 ? 18 : a < 536.1 ? 19 : a < 537.01 ? 20 : a < 537.11 ? "21+" : a < 537.13 ? 23 : a < 537.18 ? 24 : a < 537.24 ? 25 : a < 537.36 ? 26 : "Blink" != U ? "27" : "28")) : (U && (U[1] = "like Safari"), a = (a = a[0]) < 400 ? 1 : a < 500 ? 2 : a < 526 ? 3 : a < 533 ? 4 : a < 534 ? "4+" : a < 535 ? 5 : a < 537 ? 6 : a < 538 ? 7 : a < 601 ? 8 : "8"), U && (U[1] += " " + (a += "number" == typeof a ? ".x" : /[.+]/.test(a) ? "" : "+")), "Safari" == _ && (!C || parseInt(C) > 45) && (C = a)), "Opera" == _ && (a = /\bzbov|zvav$/.exec(G)) ? (_ += " ", R.unshift("desktop mode"), "zvav" == a ? (_ += "Mini", C = null) : _ += "Mobile", G = G.replace(RegExp(" *" + a + "$"), "")) : "Safari" == _ && /\bChrome\b/.exec(U && U[1]) && (R.unshift("desktop mode"), _ = "Chrome Mobile", C = null, /\bOS X\b/.test(G) ? (N = "Apple", G = "iOS 4.3+") : G = null), C && 0 == C.indexOf(a = /[\d.]+$/.exec(G)) && e.indexOf("/" + a + "-") > -1 && (G = m(G.replace(a, ""))), U && !/\b(?:Avant|Nook)\b/.test(_) && (/Browser|Lunascape|Maxthon/.test(_) || "Safari" != _ && /^iOS/.test(G) && /\bSafari\b/.test(U[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(_) && U[1]) && (a = U[U.length - 1]) && R.push(a), R.length && (R = ["(" + R.join("; ") + ")"]), N && W && 0 > W.indexOf(N) && R.push("on " + N), W && R.push((/^on /.test(R[R.length - 1]) ? "" : "on ") + W), G && (u = (a = / ([\d.+]+)$/.exec(G)) && "/" == G.charAt(G.length - a[0].length - 1), G = {
      architecture: 32,
      family: a && !u ? G.replace(a[0], "") : G,
      version: a ? a[1] : null,
      toString: function() {
        var t = this.version;
        return this.family + (t && !u ? " " + t : "") + (64 == this.architecture ? " 64-bit" : "")
      }
    }), (a = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(F)) && !/\bi686\b/i.test(F) ? (G && (G.architecture = 64, G.family = G.family.replace(RegExp(" *" + a), "")), _ && (/\bWOW64\b/i.test(e) || T && /\w(?:86|32)$/.test(p.cpuClass || p.platform) && !/\bWin64; x64\b/i.test(e)) && R.unshift("32-bit")) : G && /^OS X/.test(G.family) && "Chrome" == _ && parseFloat(C) >= 39 && (G.architecture = 64), e || (e = null);
    var $ = {};
    return $.description = e, $.layout = U && U[0], $.manufacturer = N, $.name = _, $.prerelease = B, $.product = W, $.ua = e, $.version = _ && C, $.os = G || {
      architecture: null,
      family: null,
      version: null,
      toString: function() {
        return "null"
      }
    }, $.parse = t, $.toString = function() {
      return this.description || ""
    }, $.version && R.unshift(C), $.name && R.unshift(_), G && _ && !(G == String(G).split(" ")[0] && (G == _.split(" ")[0] || W)) && R.push(W ? "(" + G + ")" : "on " + G), R.length && ($.description = R.join(" ")), $
  }();
  "function" == typeof define && "object" == typeof define.amd && define.amd ? (o.platform = S, define(function() {
    return S
  })) : i && a ? d(S, function(t, e) {
    i[e] = t
  }) : o.platform = S
}).call(this)