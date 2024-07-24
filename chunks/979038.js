n.d(t, {
  Z: function() {
return N;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(620662),
  s = n(841784),
  o = n(503438),
  l = n(834353),
  u = n(802856),
  c = n(420660),
  d = n(199902),
  _ = n(374129),
  E = n(639351),
  f = n(966463),
  h = n(103479),
  p = n(191764),
  m = n(238607),
  I = n(414402),
  T = n(934393),
  g = n(778783),
  S = n(715547),
  A = n(981631);

function N(e) {
  let {
user: t,
currentUser: n,
activity: N,
onAction: v,
onClose: O
  } = e, R = (0, i.e7)([d.Z], () => d.Z.getAnyStreamForUser(t.id));
  return (0, u.Z)(N) ? (0, r.jsx)(T.Z, {
platformType: A.ABu.XBOX,
icon: () => (0, r.jsx)(E.Z, {}),
onClick: v
  }) : (0, l.Z)(N) ? (0, r.jsx)(T.Z, {
platformType: A.ABu.PLAYSTATION,
icon: () => (0, r.jsx)(_.Z, {}),
onClick: v
  }) : (0, o.Z)(N) ? (0, r.jsx)(g.Z, {
user: t,
activity: N,
onClick: v
  }) : (0, c.Z)(N) ? (0, r.jsx)(S.Z, {
activity: N,
onClick: v
  }) : null != R ? (0, r.jsx)(f.Z, {
stream: R,
onClick: v,
onClose: O
  }) : (0, a.Z)(N, A.xjy.JOIN) || (0, s.Z)(N) ? (0, r.jsx)(m.Z, {
user: t,
currentUser: n,
activity: N,
onClick: v,
onClose: O
  }) : (null == N ? void 0 : N.type) === A.IIU.HANG_STATUS ? (0, r.jsx)(p.Z, {
user: t,
activity: N,
onClick: v,
onClose: O
  }) : (null == N ? void 0 : N.buttons) != null && (null == N ? void 0 : N.buttons.length) >= 1 ? (0, r.jsx)(h.Z, {
user: t,
activity: N,
onClick: v
  }) : (0, a.Z)(N, A.xjy.INSTANCE) ? (0, r.jsx)(I.Z, {
user: t,
activity: N,
onClick: v
  }) : null;
}