    "use strict";
    t.r(a);
    var d = t("735250");
    t("470079");
    var c = t("613828"),
      n = t("442837"),
      i = t("314897"),
      f = t("828695"),
      o = t("981631");
    a.default = n.default.connectStores([f.default, i.default], () => {
      let e = i.default.getToken();
      return {
        token: e,
        hasLoadedExperiments: null != e || f.default.hasLoadedExperiments
      }
    })(e => {
      let {
        hasLoadedExperiments: a,
        token: t
      } = e;
      return null != t ? (0, d.jsx)(c.Redirect, {
        to: o.Routes.APP
      }) : a ? (0, d.jsx)(c.Redirect, {
        to: o.Routes.DEFAULT_LOGGED_OUT
      }) : null
    })