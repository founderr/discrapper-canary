t.d(a, {
    Z: function () {
        return u;
    }
}),
    t(390547);
var n = t(735250);
t(470079);
var s = t(120356),
    r = t.n(s),
    l = t(481060),
    o = t(598),
    i = t(409813),
    c = t(548458);
function u(e) {
    let { className: a, isEligibleForTrial: t = !1 } = e,
        { step: s, breadcrumbs: u, startedPaymentFlowWithPaymentSourcesRef: d } = (0, o.usePaymentContext)();
    if (null == u || 0 === u.length) return null;
    let E = u.flatMap((e) => {
        let a = e.useBreadcrumbLabel(t);
        return null != a
            ? {
                  id: e.id,
                  label: a
              }
            : [];
    });
    return 0 === E.length
        ? null
        : ((E = E.filter((e) => {
              let a = e.id !== i.h8.ADD_PAYMENT_STEPS,
                  n = e.id === i.h8.ADD_PAYMENT_STEPS && !d.current;
              return !t || (t && (a || n));
          })),
          (0, n.jsx)('div', {
              className: r()('breadcrumb', c.wrapper, a),
              children: (0, n.jsx)(l.Breadcrumbs, {
                  activeId: s,
                  breadcrumbs: E
              })
          }));
}
