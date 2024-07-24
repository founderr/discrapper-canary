n.d(t, {
  Z: function() {
return l;
  }
});
var r = n(735250);
n(470079);
var i = n(763472),
  a = n(49012),
  s = n(591759),
  o = n(475413);

function l(e) {
  let {
user: t,
activity: n,
onClick: l
  } = e;
  if ((null == n ? void 0 : n.buttons) == null || n.buttons.length < 1)
return null;
  let u = async e => {
try {
  let r = await (0, i.sd)(n, t.id);
  if (r.button_urls.length <= e)
    return;
  let o = r.button_urls[e];
  if ('string' != typeof o)
    return;
  let l = s.Z.safeParseWithQuery(o);
  if (null == l || null == l.protocol || null == l.hostname)
    return;
  (0, a.q)({
    href: s.Z.format(l),
    trusted: !1
  });
} catch (e) {}
  };
  return (0, r.jsx)(r.Fragment, {
children: n.buttons.map((e, t) => (0, r.jsx)(o.tG, {
  text: e,
  fullWidth: !0,
  onClick: e => {
    null == l || l(e), u(t);
  }
}, t))
  });
}