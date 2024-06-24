t.d(l, {
  Z: function() {
    return u
  }
});
var n = t(735250);
t(470079);
var r = t(120356),
  i = t.n(r),
  s = t(729594),
  a = t(140061);
let o = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)");

function d(e) {
  let l = null,
    t = null,
    n = null;
  try {
    l = (n = s.parse(e, !0)).host, t = n.pathname
  } catch (e) {
    return null
  }
  return null != n && o.test(null != l ? l : "") && null != t ? n : null
}

function u(e) {
  let {
    className: l,
    embed: {
      url: t,
      thumbnail: r
    }
  } = e;
  if (null == t || null == r) return null;
  let s = d(t);
  if (null == s) return null;
  let o = s.query.iframe_url;
  if (null == o || Array.isArray(o) || null == d(o)) return null;
  let {
    width: u,
    height: h
  } = r, c = u, m = h;
  return (u > 500 || h > 400) && (u > h ? (c = 500, m = 500 * h / u) : (c = 400 * u / h, m = 400)), (0, n.jsx)("iframe", {
    className: i()(a.embedAmazonMusic, l),
    src: o,
    style: {
      width: c,
      height: m
    },
    frameBorder: 0,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}