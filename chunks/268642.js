t.d(l, {
  Z: function() {
    return u
  }
}), t(757143);
var n = t(735250);
t(470079);
var r = t(120356),
  i = t.n(r),
  s = t(729594),
  a = t(785992),
  o = t(616922),
  d = t(140061);

function u(e) {
  let {
    className: l,
    embed: {
      url: t
    }
  } = e;
  if (null == t) return null;
  let r = null,
    u = null;
  try {
    let e = s.parse(t.replace(/intl-[^/]+\//, ""), !0);
    r = e.host, u = e.pathname
  } catch (e) {
    return null
  }
  if (!(0, a.E)(r) || null == u) return null;
  let h = u.split("/"),
    c = null != h[1] ? h[1].toLowerCase() : null,
    m = null != h[3] ? h[3].toLowerCase() : null,
    p = h[4];
  if (!["track", "playlist", "album", "artist", "user", "show", "episode"].includes(null != c ? c : "") || "user" === c && "playlist" !== m) return null;
  "user" === c && "playlist" === m && null != p && (u = "/playlist/".concat(p));
  let g = 352;
  return "track" === c ? g = 80 : ("episode" === c || "show" === c) && (g = 232), (0, n.jsx)("iframe", {
    className: i()(d.embedSpotify, l),
    src: o.C7.EMBED(u),
    style: {
      width: 400,
      height: g
    },
    frameBorder: 0,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}