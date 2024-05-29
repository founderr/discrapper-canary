"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("47120");
var r = n("470079");

function u(e) {
  var t;
  let {
    stepConfigs: n,
    breadcrumbs: u
  } = e, [i, l] = r.useState(null === (t = n[0]) || void 0 === t ? void 0 : t.key), a = n.map(e => e.key).filter(e => null != e);
  return {
    steps: a,
    step: i,
    setStep: l,
    breadcrumbsData: n.filter(e => {
      var t;
      return null != e.key && (null == e ? void 0 : null === (t = e.options) || void 0 === t ? void 0 : t.useBreadcrumbLabel) != null
    }).map(e => ({
      id: e.key,
      useBreadcrumbLabel: e.options.useBreadcrumbLabel
    })).sort((e, t) => null != u ? u.indexOf(e.id) - u.indexOf(t.id) : 0)
  }
}