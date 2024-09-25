t.d(s, {
    Z: function () {
        return g;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(570140),
    d = t(355467),
    _ = t(179360),
    u = t(821849),
    E = t(15640),
    T = t(314684),
    S = t(899667),
    I = t(853872),
    N = t(78839),
    A = t(783739),
    C = t(981631),
    m = t(589104);
function g() {
    a.useEffect(() => {
        c.Z.wait(() => {
            d.jg(), d.tZ(), (0, _.X8)(), (0, u.Y2)(null, null, C.JjL.DISCOVERY), (0, _.tH)(!0);
        });
    }, []);
    let { hasFetchedSubscriptions: e, premiumSubscription: s } = (0, o.cj)([N.ZP], () => ({
            hasFetchedSubscriptions: N.ZP.hasFetchedSubscriptions(),
            premiumSubscription: N.ZP.getPremiumTypeSubscription()
        })),
        t = (0, E.V)(),
        i = (0, o.e7)([I.Z], () => I.Z.hasFetchedPaymentSources),
        g = (0, o.e7)([S.Z], () => S.Z.isFetchingCurrentUserAppliedBoosts);
    return ((0, T.JR)(), e && t && i && !g)
        ? (0, n.jsxs)('div', {
              className: m.container,
              children: [
                  (0, n.jsx)('div', { className: m.background }),
                  (0, n.jsx)('div', {
                      className: m.content,
                      children: (0, n.jsx)(A.Z, { premiumSubscription: s })
                  })
              ]
          })
        : (0, n.jsx)('div', {
              className: r()(m.container, m.loading),
              children: (0, n.jsx)(l.Spinner, {})
          });
}
