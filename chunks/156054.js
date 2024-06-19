n.d(l, {
  Z: function() {
    return d
  }
});
var t = n(735250);
n(470079);
var r = n(120356),
  i = n.n(r),
  s = n(729594),
  a = n(140061);
let o = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)");

function u(e) {
  let l = null,
    n = null,
    t = null;
  try {
    l = (t = s.parse(e, !0)).host, n = t.pathname
  } catch (e) {
    return null
  }
  return null != t && o.test(null != l ? l : "") && null != n ? t : null
}

function d(e) {
  let {
    className: l,
    embed: {
      url: n,
      thumbnail: r
    }
  } = e;
  if (null == n || null == r) return null;
  let s = u(n);
  if (null == s) return null;
  let o = s.query.iframe_url;
  if (null == o || Array.isArray(o) || null == u(o)) return null;
  let {
    width: d,
    height: h
  } = r, c = d, m = h;
  return (d > 500 || h > 400) && (d > h ? (c = 500, m = 500 * h / d) : (c = 400 * d / h, m = 400)), (0, t.jsx)("iframe", {
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