"use strict";
r.r(l), r.d(l, {
  default: function() {
    return c
  }
}), r("390547");
var n = r("735250");
r("470079");
var t = r("120356"),
  s = r.n(t),
  a = r("481060"),
  o = r("598"),
  i = r("409813"),
  d = r("524158");

function c(e) {
  let {
    className: l,
    isEligibleForTrial: r = !1
  } = e, {
    step: t,
    breadcrumbs: c,
    startedPaymentFlowWithPaymentSourcesRef: u
  } = (0, o.usePaymentContext)();
  if (null == c || 0 === c.length) return null;
  let p = c.flatMap(e => {
    let l = e.useBreadcrumbLabel(r);
    return null != l ? {
      id: e.id,
      label: l
    } : []
  });
  return 0 === p.length ? null : (p = p.filter(e => {
    let l = e.id !== i.Step.ADD_PAYMENT_STEPS,
      n = e.id === i.Step.ADD_PAYMENT_STEPS && !u.current;
    return !r || r && (l || n)
  }), (0, n.jsx)("div", {
    className: s()("breadcrumb", d.wrapper, l),
    children: (0, n.jsx)(a.Breadcrumbs, {
      activeId: t,
      breadcrumbs: p
    })
  }))
}