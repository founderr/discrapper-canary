n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(390547);
var a = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    i = n(481060),
    s = n(563132),
    o = n(409813),
    c = n(548458);
function u(e) {
    let { className: t, isEligibleForTrial: n = !1 } = e,
        { step: r, breadcrumbs: u, startedPaymentFlowWithPaymentSourcesRef: d } = (0, s.usePaymentContext)();
    if (null == u || 0 === u.length) return null;
    let m = u.flatMap((e) => {
        let t = e.useBreadcrumbLabel(n);
        return null != t
            ? {
                  id: e.id,
                  label: t
              }
            : [];
    });
    return 0 === m.length
        ? null
        : ((m = m.filter((e) => {
              let t = e.id !== o.h8.ADD_PAYMENT_STEPS,
                  a = e.id === o.h8.ADD_PAYMENT_STEPS && !d.current;
              return !n || (n && (t || a));
          })),
          (0, a.jsx)('div', {
              className: l()('breadcrumb', c.wrapper, t),
              children: (0, a.jsx)(i.Breadcrumbs, {
                  activeId: r,
                  breadcrumbs: m
              })
          }));
}
