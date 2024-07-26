n.d(t, {
  Z: function() {
return c;
  }
});
var r = n(735250);
n(470079);
var i = n(763472),
  a = n(394821),
  s = n(49012),
  o = n(591759),
  l = n(475413),
  u = n(689938);

function c(e) {
  let {
user: t,
activity: n,
onClick: c
  } = e;
  if ((null == n ? void 0 : n.buttons) == null || n.buttons.length < 1)
return null;
  let d = async e => {
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
children: n.buttons.map((e, t) => (0, r.jsx)(l.tG, {
  text: (0, a.Z)(n) ? u.Z.Messages.WATCH : e,
  fullWidth: !0,
  onClick: e => {
    null == c || c(e), d(t);
  }
}, t))
  });
}