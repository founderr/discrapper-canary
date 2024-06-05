"use strict";
l.r(t), l.d(t, {
  IFRAME_EMBED_PROVIDERS: function() {
    return c
  },
  default: function() {
    return h
  }
});
var n = l("735250");
l("470079");
var r = l("120356"),
  s = l.n(r),
  i = l("729594"),
  a = l("689938"),
  o = l("242002");
let d = "sessionshare.sp-int.playstation.com",
  u = (e, t) => "https://".concat(d, "/embed/").concat(e, "?locale=").concat(t),
  c = ["PlayStation"],
  m = (e, t) => {
    let {
      host: l,
      pathname: n
    } = t, r = [];
    switch (null != n && (r = n.split("/")), e) {
      case "PlayStation":
        if (l !== d || 2 !== r.length) break;
        return {
          embedUrl: u(r[1], a.default.getLocale()), style: {
            width: 400,
            height: 300,
            borderRadius: 6
          }
        }
    }
    return null
  };

function h(e) {
  var t;
  let l = e.embed.url,
    r = null === (t = e.embed.provider) || void 0 === t ? void 0 : t.name;
  if (null == l || null == r) return null;
  let a = null;
  try {
    a = i.parse(l, !0)
  } catch (e) {
    return null
  }
  let d = m(r, a);
  return null == d ? null : (0, n.jsx)("iframe", {
    src: d.embedUrl,
    className: s()(o.embedIFrame, e.className),
    style: d.style,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}