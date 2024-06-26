"use strict";
let i, r;
n.r(t), n.d(t, {
  AnalyticsActionHandlers: function() {
    return f.X
  },
  Impression: function() {
    return S.Impression
  },
  ImpressionGroups: function() {
    return S.A
  },
  ImpressionNames: function() {
    return N.z
  },
  ImpressionSchema: function() {
    return N.ImpressionSchema
  },
  ImpressionTypes: function() {
    return S.n
  },
  NetworkActionNames: function() {
    return N.a
  },
  StandardAnalyticsLocation: function() {
    return S.StandardAnalyticsLocation
  },
  StandardAnalyticsSchemaNameMap: function() {
    return N.StandardAnalyticsSchemaNameMap
  },
  TypedEventProperties: function() {
    return S.TypedEventProperties
  },
  analyticsTrackingStoreMaker: function() {
    return f.l
  },
  encodeProperties: function() {
    return h.Z
  },
  extendSuperProperties: function() {
    return y
  },
  getCampaignParams: function() {
    return v
  },
  getDevice: function() {
    return D
  },
  getOS: function() {
    return L
  },
  getSuperProperties: function() {
    return b
  },
  getSuperPropertiesBase64: function() {
    return G
  },
  isThrottled: function() {
    return P
  },
  trackMaker: function() {
    return U
  }
}), n(757143), n(47120);
var s, o = n(348327),
  a = n.n(o),
  l = n(512722),
  u = n.n(l),
  _ = n(264344),
  c = n.n(_),
  d = n(627420),
  E = n(433517),
  I = n(298444),
  T = n(979675),
  h = n(947486),
  f = n(699407),
  S = n(20281),
  N = n(525769);
let A = "deviceProperties",
  m = "referralProperties",
  O = {},
  p = {},
  R = window.DiscordNative;
if (null != R) {
  let e;
  let t = R.remoteApp.getVersion(),
    n = R.process.platform,
    r = R.os.release,
    o = R.os.arch,
    a = R.os.appArch,
    l = R.remoteApp.getReleaseChannel(),
    u = (0, d.qf)();
  switch (n) {
    case "win32":
      e = "Windows";
      break;
    case "darwin":
      e = "Mac OS X";
      break;
    case "linux":
      e = "Linux";
      break;
    default:
      e = n
  }
  if (i = {
      os: e,
      browser: "Discord Client",
      release_channel: l || "unknown",
      client_version: t,
      os_version: r,
      os_arch: o,
      app_arch: a,
      system_locale: u
    }, (null === (s = c().name) || void 0 === s ? void 0 : s.toLocaleLowerCase()) === "electron" && (i.browser_user_agent = c().ua || "", i.browser_version = c().version || ""), "linux" === n) {
    let e = R.crashReporter.getMetadata();
    i.window_manager = e.wm, i.distro = e.distro
  }
}
let g = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");

function C(e, t) {
  if (null == e) return "";
  t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
  let n = new RegExp("[\\?&]".concat(t, "=([^&#]*)")).exec(e);
  return null === n || "string" != typeof n[1] && n[1].length ? "" : decodeURIComponent(n[1]).replace(/\+/g, " ")
}

function v(e) {
  let t = {};
  return g.forEach(n => {
    let i = C(e, n);
    i.length > 0 && (t[n] = i)
  }), t
}

function L() {
  let {
    userAgent: e
  } = window.navigator;
  if (/Windows/i.test(e)) return /Phone/.test(e) ? "Windows Mobile" : "Windows";
  if (/(iPhone|iPad|iPod)/.test(e)) return "iOS";
  if (/Android/.test(e)) return "Android";
  else if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
  else if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "iOS" : "Mac OS X";
  else if (/Linux/i.test(e)) return "Linux";
  else return ""
}

function D() {
  let {
    userAgent: e
  } = window.navigator;
  if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
  if (/Windows Phone/i.test(e)) return "Windows Phone";
  if (/Android/.test(e)) return "Android";
  else if (/iPhone/.test(e)) return "iPhone";
  else if (/iPad/.test(e)) return "iPad";
  else return ""
}

function M() {
  let e = {};
  return e.referrer = document.referrer, e.referring_domain = function() {
    let e = document.referrer.split("/");
    return e.length >= 3 ? e[2] : ""
  }(), e = {
    ...e,
    ...v(window.location.href),
    ... function() {
      let e = {},
        t = document.referrer,
        n = function() {
          let e = document.referrer;
          if (0 === e.search("https?://(.*)google.([^/?]*)")) return "google";
          if (0 === e.search("https?://(.*)bing.com")) return "bing";
          if (0 === e.search("https?://(.*)yahoo.com")) return "yahoo";
          else if (0 === e.search("https?://(.*)duckduckgo.com")) return "duckduckgo";
          else return null
        }();
      if (null != n) {
        e.search_engine = n;
        let i = C(t, "yahoo" !== n ? "q" : "p");
        i.length > 0 && (e.mp_keyword = i)
      }
      return e
    }()
  }
}

function P(e) {
  return null != O[e] && O[e] > Date.now()
}
if (null == i) try {
  let e, t, n;
  e = E.K.get(A), null == e && (e = function() {
    let e = {},
      t = L();
    return e.os = t, e.browser = function() {
      let {
        userAgent: e,
        vendor: t = ""
      } = window.navigator, {
        opera: n
      } = window;
      if (n) return /Mini/.test(e) ? "Opera Mini" : "Opera";
      if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
      if (/FBIOS/.test(e)) return "Facebook Mobile";
      else if (/CriOS/.test(e)) return "Chrome iOS";
      else if (/Apple/.test(t)) return /Mobile/.test(e) || null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "Mobile Safari" : "Safari";
      else if (/Android/.test(e)) return /Chrome/.test(e) ? "Android Chrome" : "Android Mobile";
      else if (/Edge/.test(e)) return "Edge";
      else if (/Chrome/.test(e)) return "Chrome";
      else if (/Konqueror/.test(e)) return "Konqueror";
      else if (/Firefox/.test(e)) return "Firefox";
      else if (/MSIE|Trident\//.test(e)) return "Internet Explorer";
      else if (/Gecko/.test(e)) return "Mozilla";
      else return ""
    }(), e.device = D(), e.system_locale = (0, d.qf)(), e
  }(), E.K.set(A, e)), t = E.K.get(m), null == t && (t = M(), E.K.set(m, t)), n = I.x.get(m), null == n && (n = function(e, t) {
    let n = {};
    return Object.keys(e).map(i => n["".concat(i).concat(t)] = e[i]), n
  }(M(), "_current"), I.x.set(m, n)), i = {
    ...e,
    ... function() {
      var e, t;
      let n = {
        browser_user_agent: window.navigator.userAgent || "",
        browser_version: c().version || ""
      };
      return {
        ...n,
        os_version: null !== (t = null === c() || void 0 === c() ? void 0 : null === (e = c().os) || void 0 === e ? void 0 : e.version) && void 0 !== t ? t : ""
      }
    }(),
    ...t,
    ...n
  }
} catch (e) {
  i = {}
}

function y(e) {
  i = {
    ...i,
    ...e
  }, r = (0, h.Z)(i)
}
y(function() {
  var e, t, n;
  let i = {},
    r = window.GLOBAL_ENV.RELEASE_CHANNEL;
  r && (i.release_channel = r.split("-")[0]);
  let s = parseInt((n = "305146", "305146"), 10);
  !isNaN(s) && (i.client_build_number = s);
  let o = null == R ? void 0 : null === (e = (t = R.remoteApp).getBuildNumber) || void 0 === e ? void 0 : e.call(t);
  return !isNaN(o) && (i.native_build_number = o), i.client_event_source = function() {
    try {
      if (__OVERLAY__) return "OVERLAY"
    } catch (e) {}
    return null
  }(), i
}());
let U = e => {
  let {
    analyticEventConfigs: t,
    dispatcher: i,
    TRACK_ACTION_NAME: r
  } = e, s = (0, T.$)(i, r);
  return function(e, i) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (null != n.g.isServerRendering && !0 === n.g.isServerRendering) return Promise.resolve();
    let o = null != i ? i : {},
      l = t[e];
    if (null != l) {
      if ("throttlePeriod" in l) {
        let t = [e, ...l.throttleKeys(o)].join("_");
        if (P(t)) return Promise.resolve();
        if ("number" == typeof l.throttlePercent && Math.random() > l.throttlePercent) return Promise.resolve();
        if (l.deduplicate) {
          let e = p[t];
          if (a()(e, o)) return Promise.resolve();
          p[t] = o
        }
        O[t] = Date.now() + l.throttlePeriod
      } else if ("throttlePercent" in l) {
        if (Math.random() > l.throttlePercent) return Promise.resolve()
      } else u()(!1, "Unsupported analytics event config: ".concat(l))
    }
    return s(e, i, r)
  }
};

function b() {
  return i
}

function G() {
  return r
}