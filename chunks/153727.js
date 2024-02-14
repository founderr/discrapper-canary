"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("881410");
var r = n("37983");
n("884691");
var i = n("414456"),
  a = n.n(i),
  u = n("454589"),
  l = n("642906"),
  o = n("85336"),
  s = n("696034");

function c(e) {
  let {
    className: t,
    isEligibleForTrial: n = !1
  } = e, {
    step: i,
    breadcrumbs: c,
    startedPaymentFlowWithPaymentSourcesRef: d
  } = (0, l.usePaymentContext)();
  if (null == c || 0 === c.length) return null;
  let E = c.flatMap(e => {
    let t = e.useBreadcrumbLabel();
    return null != t ? {
      id: e.id,
      label: t
    } : []
  });
  return 0 === E.length ? null : (E = E.filter(e => {
    let t = e.id !== o.Step.ADD_PAYMENT_STEPS,
      r = e.id === o.Step.ADD_PAYMENT_STEPS && !d.current;
    return !n || n && (t || r)
  }), (0, r.jsx)("div", {
    className: a("breadcrumb", s.wrapper, t),
    children: (0, r.jsx)(u.default, {
      activeId: i,
      breadcrumbs: E
    })
  }))
}