n.d(r, {
    Z: function () {
        return d;
    }
}),
    n(390547);
var o = n(735250);
n(470079);
var l = n(120356),
    s = n.n(l),
    c = n(481060),
    a = n(598),
    t = n(409813),
    i = n(548458);
function d(e) {
    let { className: r, isEligibleForTrial: n = !1 } = e,
        { step: l, breadcrumbs: d, startedPaymentFlowWithPaymentSourcesRef: u } = (0, a.usePaymentContext)();
    if (null == d || 0 === d.length) return null;
    let p = d.flatMap((e) => {
        let r = e.useBreadcrumbLabel(n);
        return null != r
            ? {
                  id: e.id,
                  label: r
              }
            : [];
    });
    return 0 === p.length
        ? null
        : ((p = p.filter((e) => {
              let r = e.id !== t.h8.ADD_PAYMENT_STEPS,
                  o = e.id === t.h8.ADD_PAYMENT_STEPS && !u.current;
              return !n || (n && (r || o));
          })),
          (0, o.jsx)('div', {
              className: s()('breadcrumb', i.wrapper, r),
              children: (0, o.jsx)(c.Breadcrumbs, {
                  activeId: l,
                  breadcrumbs: p
              })
          }));
}
