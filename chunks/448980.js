n.d(t, {
  Z: function() {
return u;
  }
}), n(627341);
var r = n(735250);
n(470079);
var i = n(278074),
  a = n(876215),
  s = n(297781),
  o = n(16779),
  l = n(981631);

function u(e) {
  let {
activity: t,
entry: n,
className: u
  } = e, c = (0, i.EQ)(t).with({
type: l.IIU.PLAYING
  }, () => [
o.ho,
o.Xh
  ]).with({
type: l.IIU.WATCHING
  }, () => [
o.ho,
o.Rg
  ]).otherwise(() => []);
  return 0 === c.length ? null : (0, r.jsxs)(s.Gk, {
location: s.Gt.USER_PROFILE,
className: u,
children: [
  c.map((e, n) => (0, r.jsx)(e, {
    activity: t
  }, 'activity-'.concat(n))),
  (0, i.EQ)(n).with({
    content_type: a.s.PLAYED_GAME
  }, e => [
    s.U9,
    s.gj,
    s.f,
    s.n8,
    s.v1,
    s.pQ
  ].map((t, n) => (0, r.jsx)(t, {
    entry: e
  }, 'entry-'.concat(n)))).with({
    content_type: a.s.TOP_GAME
  }, e => [s.E6].map((t, n) => (0, r.jsx)(t, {
    entry: e
  }, 'entry-'.concat(n)))).with({
    content_type: a.s.TOP_ARTIST
  }, e => [s.An].map((t, n) => (0, r.jsx)(t, {
    entry: e
  }, 'entry-'.concat(n)))).otherwise(() => [])
]
  });
}