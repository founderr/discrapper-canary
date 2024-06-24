t.d(l, {
  ZP: function() {
    return c
  },
  pn: function() {
    return r
  }
});
var n, r, i = t(735250),
  s = t(470079),
  a = t(729594),
  o = t(140061);

function d(e) {
  let {
    autoMute: l,
    ...t
  } = e, n = s.useRef(null), r = s.useCallback(e => {
    if (!!e.data["x-tiktok-embed"] && "https://www.tiktok.com" === e.origin) {
      if ("onPlayerReady" === e.data.type) {
        var t, r, i, s;
        l && (null === (s = n.current) || void 0 === s || null === (i = s.contentWindow) || void 0 === i || i.postMessage({
          type: "mute",
          "x-tiktok-embed": !0
        }, e.origin)), null === (r = n.current) || void 0 === r || null === (t = r.contentWindow) || void 0 === t || t.postMessage({
          type: "play",
          "x-tiktok-embed": !0
        }, e.origin)
      }
    }
  }, [l]);
  return s.useEffect(() => (window.addEventListener("message", r), () => window.removeEventListener("message", r)), [r]), (0, i.jsx)(h, {
    ref: n,
    ...t
  })
}

function u(e) {
  let {
    src: l,
    autoMute: t,
    ...n
  } = e, r = a.parse(null != l ? l : "", !0);
  r.query = {
    ...r.query,
    autoplay: "1",
    auto_play: "1"
  }, t && (r.query.mute = "1"), r.search = null;
  let s = a.format(r);
  return (0, i.jsx)(h, {
    src: s,
    ...n
  })
}
let h = s.forwardRef(function(e, l) {
  return (0, i.jsx)("iframe", {
    ref: l,
    className: o.embedIframe,
    allow: "autoplay",
    frameBorder: 0,
    scrolling: "no",
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
    ...e
  })
});

function c(e) {
  switch (e.provider) {
    case "YouTube":
      return (0, i.jsx)(u, {
        ...e
      });
    case "TikTok":
      return (0, i.jsx)(d, {
        ...e
      });
    default:
      return (0, i.jsx)(h, {
        ...e
      })
  }
}(n = r || (r = {})).YOUTUBE = "YouTube", n.TIKTOK = "TikTok"