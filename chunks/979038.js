n.d(t, {
  Z: function() {
return S;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(620662),
  s = n(841784),
  o = n(834353),
  l = n(802856),
  u = n(420660),
  c = n(199902),
  d = n(374129),
  _ = n(639351),
  E = n(966463),
  f = n(103479),
  h = n(191764),
  p = n(238607),
  m = n(414402),
  I = n(934393),
  T = n(715547),
  g = n(981631);

function S(e) {
  let {
user: t,
currentUser: n,
activity: S,
onAction: A,
onClose: N
  } = e, v = (0, i.e7)([c.Z], () => c.Z.getAnyStreamForUser(t.id));
  return (0, l.Z)(S) ? (0, r.jsx)(I.Z, {
platformType: g.ABu.XBOX,
icon: () => (0, r.jsx)(_.Z, {}),
onClick: A
  }) : (0, o.Z)(S) ? (0, r.jsx)(I.Z, {
platformType: g.ABu.PLAYSTATION,
icon: () => (0, r.jsx)(d.Z, {}),
onClick: A
  }) : (0, u.Z)(S) ? (0, r.jsx)(T.Z, {
activity: S,
onClick: A
  }) : null != v ? (0, r.jsx)(E.Z, {
stream: v,
onClick: A,
onClose: N
  }) : (0, a.Z)(S, g.xjy.JOIN) || (0, s.Z)(S) ? (0, r.jsx)(p.Z, {
user: t,
currentUser: n,
activity: S,
onClick: A,
onClose: N
  }) : (null == S ? void 0 : S.type) === g.IIU.HANG_STATUS ? (0, r.jsx)(h.Z, {
user: t,
activity: S,
onClick: A,
onClose: N
  }) : (null == S ? void 0 : S.buttons) != null && (null == S ? void 0 : S.buttons.length) >= 1 ? (0, r.jsx)(f.Z, {
user: t,
activity: S,
onClick: A
  }) : (0, a.Z)(S, g.xjy.INSTANCE) ? (0, r.jsx)(m.Z, {
user: t,
activity: S,
onClick: A
  }) : null;
}