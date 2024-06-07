    "use strict";
    a.r(t);
    var d = a("735250");
    a("470079");
    var n = a("613828"),
      c = a("442837"),
      i = a("353926"),
      o = a("314897"),
      r = a("981631");
    t.default = c.default.connectStores([i.default, o.default], () => {
      let e = o.default.getToken();
      return {
        token: e,
        hasLoadedExperiments: null != e || i.default.hasLoadedExperiments
      }
    })(e => {
      let {
        hasLoadedExperiments: t,
        token: a
      } = e;
      return null != a ? (0, d.jsx)(n.Redirect, {
        to: r.Routes.APP
      }) : t ? (0, d.jsx)(n.Redirect, {
        to: r.Routes.DEFAULT_LOGGED_OUT
      }) : null
    })