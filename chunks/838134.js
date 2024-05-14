"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250"),
  s = n("470079"),
  i = n("613828"),
  l = n("608787"),
  r = n("765717"),
  o = n("981631");
let u = s.lazy(() => (0, l.importWithRetry)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("56630"), n.e("6380"), n.e("4970"), n.e("81539"), n.e("18101"), n.e("11256"), n.e("27128"), n.e("22321")]).then(n.bind(n, "753450")),
    webpackId: "753450"
  })),
  d = s.lazy(() => (0, l.importWithRetry)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("56630"), n.e("6380"), n.e("4970"), n.e("18101"), n.e("27128"), n.e("14339")]).then(n.bind(n, "74438")),
    webpackId: "74438"
  })),
  c = s.lazy(() => (0, l.importWithRetry)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("56630"), n.e("6380"), n.e("4970"), n.e("18101"), n.e("27128"), n.e("98067")]).then(n.bind(n, "675869")),
    webpackId: "675869"
  }));

function f() {
  return (0, a.jsxs)(i.Switch, {
    children: [(0, a.jsx)(r.default, {
      path: o.Routes.APPLICATION_DIRECTORY,
      exact: !0,
      component: d
    }), (0, a.jsx)(r.default, {
      path: o.Routes.APPLICATION_DIRECTORY_SEARCH,
      component: c
    }), (0, a.jsx)(r.default, {
      path: o.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(":applicationId", ":section?"),
      component: u
    })]
  })
}