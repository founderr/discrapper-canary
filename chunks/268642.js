"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
}), l("757143");
var n = l("735250");
l("470079");
var r = l("120356"),
  s = l.n(r),
  i = l("729594"),
  a = l("785992"),
  o = l("616922"),
  d = l("214607");

function u(e) {
  let {
    className: t,
    embed: {
      url: l
    }
  } = e;
  if (null == l) return null;
  let r = null,
    u = null;
  try {
    let e = i.parse(l.replace(/intl-[^/]+\//, ""), !0);
    r = e.host, u = e.pathname
  } catch (e) {
    return null
  }
  if ((0, a.isSpotifySpecialEmbedHost)(r) || null == u) return null;
  let c = u.split("/"),
    m = null != c[1] ? c[1].toLowerCase() : null,
    h = null != c[3] ? c[3].toLowerCase() : null,
    p = c[4];
  if (!["track", "playlist", "album", "artist", "user", "show", "episode"].includes(null != m ? m : "") || "user" === m && "playlist" !== h) return null;
  "user" === m && "playlist" === h && null != p && (u = "/playlist/".concat(p));
  let f = 352;
  return "track" === m ? f = 80 : ("episode" === m || "show" === m) && (f = 232), (0, n.jsx)("iframe", {
    className: s()(d.embedSpotify, t),
    src: o.SpotifyEndpoints.EMBED(u),
    style: {
      width: 400,
      height: f
    },
    frameBorder: 0,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}