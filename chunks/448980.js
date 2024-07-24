n.d(t, {
  Z: function() {
return f;
  }
}), n(627341);
var r = n(735250);
n(470079);
var i = n(278074),
  a = n(876215),
  s = n(442837),
  o = n(719247),
  l = n(297781),
  u = n(16779),
  c = n(981631);

function d(e) {
  let {
entry: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
children: [
  l.U9,
  l.gj,
  l.f,
  l.n8,
  l.v1,
  l.pQ
].map((e, n) => (0, r.jsx)(e, {
  entry: t
}, 'entry-'.concat(n)))
  });
}

function _(e) {
  let {
entry: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
children: [l.E6].map((e, n) => (0, r.jsx)(e, {
  entry: t
}, 'entry-'.concat(n)))
  });
}

function E(e) {
  let {
entry: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
children: [l.An].map((e, n) => (0, r.jsx)(e, {
  entry: t
}, 'entry-'.concat(n)))
  });
}

function f(e) {
  let {
user: t,
activity: n,
className: f
  } = e, h = (0, s.e7)([o.ZP], () => o.ZP.getMatchingOutboxEntry(n, t.id)), p = (0, i.EQ)(n).with({
type: c.IIU.PLAYING
  }, () => [
u.ho,
u.Xh
  ]).with({
type: c.IIU.WATCHING
  }, () => [
u.ho,
u.Rg
  ]).otherwise(() => []);
  return 0 === p.length ? null : (0, r.jsxs)(l.Gk, {
location: l.Gt.USER_PROFILE,
className: f,
children: [
  p.map((e, t) => (0, r.jsx)(e, {
    activity: n
  }, 'activity-'.concat(t))),
  (0, i.EQ)(h).with({
    content_type: a.s.PLAYED_GAME
  }, e => (0, r.jsx)(d, {
    entry: e
  })).with({
    content_type: a.s.TOP_GAME
  }, e => (0, r.jsx)(_, {
    entry: e
  })).with({
    content_type: a.s.TOP_ARTIST
  }, e => (0, r.jsx)(E, {
    entry: e
  })).otherwise(() => null)
]
  });
}