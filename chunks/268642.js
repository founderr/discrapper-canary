n.d(l, {
  Z: function() {
    return d
  }
}), n(757143);
var t = n(735250);
n(470079);
var r = n(120356),
  i = n.n(r),
  s = n(729594),
  a = n(785992),
  o = n(616922),
  u = n(140061);

function d(e) {
  let {
    className: l,
    embed: {
      url: n
    }
  } = e;
  if (null == n) return null;
  let r = null,
    d = null;
  try {
    let e = s.parse(n.replace(/intl-[^/]+\//, ""), !0);
    r = e.host, d = e.pathname
  } catch (e) {
    return null
  }
  if (!(0, a.E)(r) || null == d) return null;
  let h = d.split("/"),
    c = null != h[1] ? h[1].toLowerCase() : null,
    m = null != h[3] ? h[3].toLowerCase() : null,
    p = h[4];
  if (!["track", "playlist", "album", "artist", "user", "show", "episode"].includes(null != c ? c : "") || "user" === c && "playlist" !== m) return null;
  "user" === c && "playlist" === m && null != p && (d = "/playlist/".concat(p));
  let g = 352;
  return "track" === c ? g = 80 : ("episode" === c || "show" === c) && (g = 232), (0, t.jsx)("iframe", {
    className: i()(u.embedSpotify, l),
    src: o.C7.EMBED(d),
    style: {
      width: 400,
      height: g
    },
    frameBorder: 0,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}