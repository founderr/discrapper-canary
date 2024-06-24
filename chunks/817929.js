t.d(l, {
  Z: function() {
    return m
  },
  j: function() {
    return h
  }
});
var n = t(735250);
t(470079);
var r = t(120356),
  i = t.n(r),
  s = t(729594),
  a = t(689938),
  o = t(156230);
let d = "sessionshare.sp-int.playstation.com",
  u = (e, l) => "https://".concat(d, "/embed/").concat(e, "?locale=").concat(l),
  h = ["PlayStation"],
  c = (e, l) => {
    let {
      host: t,
      pathname: n
    } = l, r = [];
    switch (null != n && (r = n.split("/")), e) {
      case "PlayStation":
        if (t !== d || 2 !== r.length) break;
        return {
          embedUrl: u(r[1], a.Z.getLocale()), style: {
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
  let t = e.embed.url,
    r = null === (l = e.embed.provider) || void 0 === l ? void 0 : l.name;
  if (null == t || null == r) return null;
  let a = null;
  try {
    a = s.parse(t, !0)
  } catch (e) {
    return null
  }
  let d = c(r, a);
  return null == d ? null : (0, n.jsx)("iframe", {
    src: d.embedUrl,
    className: i()(o.embedIFrame, e.className),
    style: d.style,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}