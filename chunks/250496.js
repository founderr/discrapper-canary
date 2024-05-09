"use strict";
l.r(t), l.d(t, {
  SupportedEmbedIFrame: function() {
    return r
  },
  default: function() {
    return h
  }
});
var n, r, s = l("735250"),
  i = l("470079"),
  a = l("729594"),
  o = l("214607");

function d(e) {
  let {
    autoMute: t,
    ...l
  } = e, n = i.useRef(null), r = i.useCallback(e => {
    if (e.data["x-tiktok-embed"] && "https://www.tiktok.com" === e.origin && "onPlayerReady" === e.data.type) {
      var l, r, s, i;
      t && (null === (i = n.current) || void 0 === i || null === (s = i.contentWindow) || void 0 === s || s.postMessage({
        type: "mute",
        "x-tiktok-embed": !0
      }, e.origin)), null === (r = n.current) || void 0 === r || null === (l = r.contentWindow) || void 0 === l || l.postMessage({
        type: "play",
        "x-tiktok-embed": !0
      }, e.origin)
    }
  }, [t]);
  return i.useEffect(() => (window.addEventListener("message", r), () => window.removeEventListener("message", r)), [r]), (0, s.jsx)(c, {
    ref: n,
    ...l
  })
}

function u(e) {
  let {
    src: t,
    autoMute: l,
    ...n
  } = e, r = a.parse(null != t ? t : "", !0);
  r.query = {
    ...r.query,
    autoplay: "1",
    auto_play: "1"
  }, l && (r.query.mute = "1"), r.search = null;
  let i = a.format(r);
  return (0, s.jsx)(c, {
    src: i,
    ...n
  })
}
let c = i.forwardRef(function(e, t) {
  return (0, s.jsx)("iframe", {
    ref: t,
    className: o.embedIframe,
    allow: "autoplay",
    frameBorder: 0,
    scrolling: "no",
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
    ...e
  })
});

function h(e) {
  switch (e.provider) {
    case "YouTube":
      return (0, s.jsx)(u, {
        ...e
      });
    case "TikTok":
      return (0, s.jsx)(d, {
        ...e
      });
    default:
      return (0, s.jsx)(c, {
        ...e
      })
  }
}(n = r || (r = {})).YOUTUBE = "YouTube", n.TIKTOK = "TikTok"