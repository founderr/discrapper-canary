e.d(t, {
  tS: function() {
return f;
  },
  x3: function() {
return S;
  }
}), e(47120);
var r = e(735250),
  u = e(470079),
  i = e(120356),
  o = e.n(i),
  E = e(442837),
  l = e(846519),
  a = e(481060),
  T = e(607070),
  _ = e(706454),
  c = e(506071),
  s = e(561308),
  d = e(377329);

function f(n, t) {
  let [e, r] = u.useState(Date.now()), i = (0, c.n)(), o = (0, E.e7)([T.Z], () => T.Z.useReducedMotion), a = u.useMemo(() => {
let {
  hours: t
} = (0, s.JY)(n, e);
return t > 0 ? 300000 : 1000;
  }, [
n,
e
  ]);
  return u.useEffect(() => {
let n = new l.Xp();
return n.start(a, () => {
  r(Date.now());
}), (!i || o && !t) && n.stop(), () => n.stop();
  }, [
a,
i,
o,
t
  ]), e;
}
let S = n => {
  let {
entry: t,
inline: e = !1,
textColor: i,
hovered: E = !1,
bold: l = !1
  } = n, T = f(t, E), _ = u.useMemo(() => (0, s.T_)(t, T), [
t,
T
  ]);
  return (0, r.jsx)(a.Text, {
className: o()(d.timestamp, {
  [d.inlineTimestamp]: e,
  [d.bold]: l
}),
variant: 'text-xs/medium',
tabularNumbers: !0,
color: i,
children: _
  });
};
t.ZP = n => {
  let {
entry: t,
textColor: e,
hovered: u = !1,
bold: i = !1
  } = n, o = (0, s.kr)(t), l = (0, E.e7)([_.default], () => _.default.locale);
  return o ? (0, r.jsx)(S, {
entry: t,
textColor: e,
hovered: u,
bold: i
  }) : (0, r.jsx)(a.Text, {
variant: 'text-xs/normal',
color: e,
lineClamp: 1,
children: (0, s.GL)(t, l)
  });
};