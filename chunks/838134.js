"use strict";
i.r(t), i.d(t, {
  default: function() {
    return l
  }
});
var a = i("735250"),
  n = i("470079"),
  o = i("613828"),
  r = i("608787"),
  c = i("765717"),
  s = i("981631");
let p = n.lazy(() => (0, r.importWithRetry)({
    createPromise: () => Promise.all([i.e("49237"), i.e("99387"), i.e("29549"), i.e("31605"), i.e("56630"), i.e("6380"), i.e("81539"), i.e("4970"), i.e("18101"), i.e("11256"), i.e("74840"), i.e("22321")]).then(i.bind(i, "753450")),
    webpackId: "753450"
  })),
  d = n.lazy(() => (0, r.importWithRetry)({
    createPromise: () => Promise.all([i.e("49237"), i.e("99387"), i.e("56630"), i.e("6380"), i.e("4970"), i.e("18101"), i.e("74840"), i.e("14339")]).then(i.bind(i, "74438")),
    webpackId: "74438"
  })),
  h = n.lazy(() => (0, r.importWithRetry)({
    createPromise: () => Promise.all([i.e("49237"), i.e("99387"), i.e("56630"), i.e("6380"), i.e("4970"), i.e("18101"), i.e("74840"), i.e("98067")]).then(i.bind(i, "675869")),
    webpackId: "675869"
  }));

function l() {
  return (0, a.jsxs)(o.Switch, {
    children: [(0, a.jsx)(c.default, {
      path: s.Routes.APPLICATION_DIRECTORY,
      exact: !0,
      component: d
    }), (0, a.jsx)(c.default, {
      path: s.Routes.APPLICATION_DIRECTORY_SEARCH,
      component: h
    }), (0, a.jsx)(c.default, {
      path: s.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(":applicationId", ":section?"),
      component: p
    })]
  })
}