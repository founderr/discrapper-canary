e.d(t, {
    YG: function () {
        return E;
    },
    pV: function () {
        return g;
    },
    rf: function () {
        return i;
    }
});
var l,
    i,
    r = e(200651);
e(192379);
var u = e(860911),
    a = e(481060),
    o = e(100527),
    s = e(906732),
    c = e(887706),
    d = e(929011),
    f = e(703656),
    p = e(626135),
    v = e(937615),
    m = e(110742),
    h = e(981631),
    I = e(388032),
    S = e(962083);
((l = i || (i = {}))[(l.AVAILABLE = 0)] = 'AVAILABLE'), (l[(l.LOADING = 1)] = 'LOADING'), (l[(l.UPCOMING_PLAN = 2)] = 'UPCOMING_PLAN'), (l[(l.SUBSCRIBED = 3)] = 'SUBSCRIBED'), (l[(l.UNAVAILABLE = 4)] = 'UNAVAILABLE');
function g(n) {
    let { appId: t, className: e, onClick: l, onHasClicked: i, skuId: u, subscriptionPlan: a, icon: o, state: s = 0 } = n,
        c = null != a ? (0, v.xg)(a) : null,
        d = 1 === s;
    return 0 === s || d
        ? (0, r.jsx)(A, {
              appId: t,
              skuId: u,
              onClick: (n) => {
                  l(n), null == i || i();
              },
              className: e,
              submitting: d,
              children: (0, r.jsxs)('div', {
                  className: S.btnContent,
                  children: [o, null != c ? I.intl.formatToPlainString(I.t.i4T8v7, { rate: c }) : I.intl.string(I.t.uuzaAA)]
              })
          })
        : (0, r.jsx)(N, {
              className: e,
              children: (function (n, t) {
                  switch (n) {
                      case 2:
                          return I.intl.formatToPlainString(I.t.k1ew5O, { rate: t });
                      case 3:
                          return I.intl.formatToPlainString(I.t['Hs3Y+P'], { rate: t });
                      case 4:
                          return I.intl.string(I.t.DLAKbm);
                  }
              })(s, null != c ? c : '')
          });
}
function E(n) {
    let { appId: t, className: e, onClick: l, onHasClicked: i, sku: u, icon: a } = n,
        { analyticsLocations: c } = (0, s.ZP)(o.Z.APP_STOREFRONT),
        f = () => {
            (0, d.r)({
                appId: t,
                skuId: u.id,
                analyticsLocations: c
            });
        },
        p = (0, m.M)(u.id),
        g = u.type === h.epS.DURABLE && p,
        { price: E } = u;
    return null == E
        ? null
        : g
          ? (0, r.jsx)(N, {
                className: e,
                children: I.intl.string(I.t['/bUsx8'])
            })
          : (0, r.jsx)(A, {
                appId: t,
                skuId: u.id,
                onClick: (n) => {
                    (null != l ? l : f)(n), null == i || i();
                },
                className: e,
                children: (0, r.jsxs)('div', {
                    className: S.btnContent,
                    children: [a, I.intl.format(I.t.Xp5WTk, { price: (0, v.T4)(E.amount, E.currency) })]
                })
            });
}
function A(n) {
    let { appId: t, skuId: e, onClick: l, ...i } = n,
        o = (0, c.Z)();
    return (0, r.jsx)(a.Button, {
        ...i,
        onClick: (n) => {
            if (
                (p.default.track(h.rMx.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: t,
                    sku_id: e
                }),
                !o)
            ) {
                n.preventDefault(), n.stopPropagation();
                let l = h.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, e),
                    i = (0, u.Ui)(l, !1);
                (0, f.uL)(i);
                return;
            }
            null == l || l(n);
        }
    });
}
function N(n) {
    let { className: t, children: e } = n;
    return (0, r.jsx)(a.Button, {
        disabled: !0,
        className: t,
        look: a.Button.Looks.OUTLINED,
        color: a.Button.Colors.PRIMARY,
        children: e
    });
}
