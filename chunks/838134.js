n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n(735250),
  s = n(470079),
  l = n(266067),
  a = n(608787),
  r = n(765717),
  o = n(981631);
let c = s.lazy(() => (0, a.wE)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("29549"), n.e("31605"), n.e("6380"), n.e("65840"), n.e("77172"), n.e("18101"), n.e("81539"), n.e("11256"), n.e("27128"), n.e("89131"), n.e("9159")]).then(n.bind(n, 753450)),
    webpackId: 753450
  })),
  u = s.lazy(() => (0, a.wE)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("6380"), n.e("65840"), n.e("18101"), n.e("27128"), n.e("14339")]).then(n.bind(n, 74438)),
    webpackId: 74438
  })),
  d = s.lazy(() => (0, a.wE)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("6380"), n.e("65840"), n.e("18101"), n.e("27128"), n.e("98067")]).then(n.bind(n, 675869)),
    webpackId: 675869
  }));

function E() {
  return (0, i.jsxs)(l.rs, {
    children: [(0, i.jsx)(r.Z, {
      path: o.Z5c.APPLICATION_DIRECTORY,
      exact: !0,
      component: u
    }), (0, i.jsx)(r.Z, {
      path: o.Z5c.APPLICATION_DIRECTORY_SEARCH,
      component: d
    }), (0, i.jsx)(r.Z, {
      path: o.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(":applicationId", ":section?"),
      component: c
    })]
  })
}