n.d(t, {
  Z: function() {
return _;
  }
});
var r = n(735250);
n(470079);
var i = n(763472),
  a = n(394821),
  s = n(49012),
  o = n(591759),
  l = n(652853),
  u = n(475413),
  c = n(228168),
  d = n(689938);

function _(e) {
  let {
user: t,
activity: n,
onClick: _
  } = e, {
profileType: E
  } = (0, l.z)();
  if ((null == n ? void 0 : n.buttons) == null || n.buttons.length < 1)
return null;
  let f = async e => {
try {
  let r = await (0, i.sd)(n, t.id);
  if (r.button_urls.length <= e)
    return;
  let a = r.button_urls[e];
  if ('string' != typeof a)
    return;
  let l = o.Z.safeParseWithQuery(a);
  if (null == l || null == l.protocol || null == l.hostname)
    return;
  (0, s.q)({
    href: o.Z.format(l),
    trusted: !1
  });
} catch (e) {}
  };
  return (0, r.jsx)(r.Fragment, {
children: n.buttons.map((e, t) => (0, r.jsx)(u.tG, {
  text: (0, a.Z)(n) ? d.Z.Messages.WATCH : e,
  fullWidth: !0,
  themeColor: E === c.y0.FULL_SIZE ? 'secondary' : 'primary',
  onClick: e => {
    null == _ || _(e), f(t);
  }
}, t))
  });
}