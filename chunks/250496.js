n.d(l, {
  ZP: function() {
    return c
  },
  pn: function() {
    return r
  }
});
var t, r, i = n(735250),
  s = n(470079),
  a = n(729594),
  o = n(140061);

function u(e) {
  let {
    autoMute: l,
    ...n
  } = e, t = s.useRef(null), r = s.useCallback(e => {
    if (!!e.data["x-tiktok-embed"] && "https://www.tiktok.com" === e.origin) {
      if ("onPlayerReady" === e.data.type) {
        var n, r, i, s;
        l && (null === (s = t.current) || void 0 === s || null === (i = s.contentWindow) || void 0 === i || i.postMessage({
          type: "mute",
          "x-tiktok-embed": !0
        }, e.origin)), null === (r = t.current) || void 0 === r || null === (n = r.contentWindow) || void 0 === n || n.postMessage({
          type: "play",
          "x-tiktok-embed": !0
        }, e.origin)
      }
    }
  }, [l]);
  return s.useEffect(() => (window.addEventListener("message", r), () => window.removeEventListener("message", r)), [r]), (0, i.jsx)(h, {
    ref: t,
    ...n
  })
}

function d(e) {
  let {
    src: l,
    autoMute: n,
    ...t
  } = e, r = a.parse(null != l ? l : "", !0);
  r.query = {
    ...r.query,
    autoplay: "1",
    auto_play: "1"
  }, n && (r.query.mute = "1"), r.search = null;
  let s = a.format(r);
  return (0, i.jsx)(h, {
    src: s,
    ...t
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
      return (0, i.jsx)(d, {
        ...e
      });
    case "TikTok":
      return (0, i.jsx)(u, {
        ...e
      });
    default:
      return (0, i.jsx)(h, {
        ...e
      })
  }
}(t = r || (r = {})).YOUTUBE = "YouTube", t.TIKTOK = "TikTok"