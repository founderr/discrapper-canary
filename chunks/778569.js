n.d(t, {
  Z: function() {
return a;
  }
}), n(47120);
var r = n(470079),
  o = n(81063);
let s = [
  'embedded_cover',
  'embedded_background'
];

function a(e) {
  let {
applicationId: t,
size: n,
names: a = s
  } = e, [u, i] = r.useState(null), [c, l] = r.useState(!0), d = (0, o.getAssetImage)(t, u, n);
  return r.useEffect(() => {
(0, o.getAssets)(t).then(e => {
  for (let [t, n] of(l(!1), Object.entries(e)))
    if (null != n && '' !== n.id && a.includes(n.name)) {
      i(n.id);
      return;
    }
});
  }, [t]), {
url: d,
state: c ? 'loading' : null != d ? 'fetched' : 'not-found'
  };
}