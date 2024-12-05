n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    m = n(821849),
    g = n(15640),
    h = n(314684),
    p = n(899667),
    x = n(853872),
    T = n(78839),
    S = n(783739),
    _ = n(981631),
    E = n(688738);
function C() {
    s.useEffect(() => {
        c.Z.wait(() => {
            d.jg(), d.tZ(), (0, u.X8)(), (0, m.Y2)(null, null, _.JjL.DISCOVERY), (0, u.tH)(!0);
        });
    }, []);
    let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, a.cj)([T.ZP], () => ({
            hasFetchedSubscriptions: T.ZP.hasFetchedSubscriptions(),
            premiumSubscription: T.ZP.getPremiumTypeSubscription()
        })),
        n = (0, g.V)(),
        r = (0, a.e7)([x.Z], () => x.Z.hasFetchedPaymentSources),
        C = (0, a.e7)([p.Z], () => p.Z.isFetchingCurrentUserAppliedBoosts);
    return ((0, h.JR)(), e && n && r && !C)
        ? (0, i.jsxs)('div', {
              className: E.container,
              children: [
                  (0, i.jsx)('div', { className: E.background }),
                  (0, i.jsx)('div', {
                      className: E.content,
                      children: (0, i.jsx)(S.Z, { premiumSubscription: t })
                  })
              ]
          })
        : (0, i.jsx)('div', {
              className: l()(E.container, E.loading),
              children: (0, i.jsx)(o.Spinner, {})
          });
}
