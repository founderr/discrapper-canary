n.d(l, {
  Z: function() {
    return m
  },
  j: function() {
    return h
  }
});
var t = n(735250);
n(470079);
var r = n(120356),
  i = n.n(r),
  s = n(729594),
  a = n(689938),
  o = n(156230);
let u = "sessionshare.sp-int.playstation.com",
  d = (e, l) => "https://".concat(u, "/embed/").concat(e, "?locale=").concat(l),
  h = ["PlayStation"],
  c = (e, l) => {
    let {
      host: n,
      pathname: t
    } = l, r = [];
    switch (null != t && (r = t.split("/")), e) {
      case "PlayStation":
        if (n !== u || 2 !== r.length) break;
        return {
          embedUrl: d(r[1], a.Z.getLocale()), style: {
            width: 400,
            height: 300,
            borderRadius: 6
          }
        }
    }
    return null
  };

function m(e) {
  var l;
  let n = e.embed.url,
    r = null === (l = e.embed.provider) || void 0 === l ? void 0 : l.name;
  if (null == n || null == r) return null;
  let a = null;
  try {
    a = s.parse(n, !0)
  } catch (e) {
    return null
  }
  let u = c(r, a);
  return null == u ? null : (0, t.jsx)("iframe", {
    src: u.embedUrl,
    className: i()(o.embedIFrame, e.className),
    style: u.style,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}