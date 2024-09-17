n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    _ = n(179360),
    u = n(821849),
    E = n(232567),
    T = n(497321),
    I = n(100527),
    R = n(906732),
    m = n(211242),
    g = n(15640),
    N = n(89057),
    C = n(433811),
    p = n(214852),
    A = n(621853),
    f = n(246946),
    h = n(594174),
    S = n(78839),
    M = n(626135),
    x = n(111361),
    b = n(357355),
    O = n(937579),
    v = n(471309),
    P = n(827686),
    L = n(91802),
    Z = n(104494),
    D = n(639119),
    B = n(2359),
    U = n(132547),
    j = n(474936),
    G = n(981631),
    w = n(700199);
t.Z = function (e) {
    let { entrypoint: t = j.EZ.UserSettings } = e;
    (0, p.z)(C.X);
    let n = (0, m.Q)(),
        { sourceAnalyticsLocations: r, analyticsLocations: y } = (0, R.ZP)(I.Z.PREMIUM_MARKETING),
        H = (0, l.e7)([S.ZP], () => S.ZP.hasFetchedSubscriptions()),
        k = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        F = (0, D.N)(),
        V = (0, Z.Ng)(),
        W = (0, g.V)(),
        [K, Y] = a.useState(!0),
        z = a.useRef(0),
        Q = (0, x.M5)(k, j.p9.TIER_2),
        q = (0, L.n)(),
        X = null == q ? void 0 : q.countryCode,
        { enabled: J } = (0, v.Z)(),
        { enabled: $ } = (0, P.Z)(),
        ee = J && $,
        et = (0, l.e7)([A.Z], () => (null != k ? A.Z.getUserProfile(k.id) : null)),
        en = (0, l.e7)([b.Z], () => b.Z.hasFetched);
    if (
        (a.useEffect(() => {
            !en && d.MH();
        }, [en]),
        a.useEffect(() => {
            c.Z.wait(async () => {
                let e = Date.now();
                await Promise.all([d.jg(), (0, _.X8)(), d.tZ(), (0, u.Y2)(X, null, G.JjL.DISCOVERY), null != k && ee && Q && (0, E.In)(k.id)]), (z.current = Date.now() - e), Y(!1);
            });
        }, [X, k, ee, Q]),
        a.useEffect(() => {
            n && (null != F || null != V) && (0, O.a)(F, V);
        }, [n, F, V]),
        a.useEffect(() => {
            !K &&
                M.default.track(G.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: r,
                    load_duration_ms: z.current
                });
        }, [r, K]),
        (0, l.e7)([f.Z], () => f.Z.enabled))
    )
        return (0, s.jsx)(T.Z, {});
    if (n) return (0, s.jsx)(N.c8, {});
    if (t === j.EZ.ApplicationStoreHome && Q)
        return ee && null == et
            ? (0, s.jsx)('div', {
                  className: i()(w.container, w.loading),
                  children: (0, s.jsx)(o.Spinner, {})
              })
            : (0, s.jsx)(R.Gt, {
                  value: y,
                  children: (0, s.jsx)(U.Z, {})
              });
    return H && W && !K
        ? (0, s.jsx)(R.Gt, {
              value: y,
              children: (0, s.jsx)(B.Z, { entrypoint: t })
          })
        : (0, s.jsx)('div', {
              className: i()(w.container, w.loading),
              children: (0, s.jsx)(o.Spinner, {})
          });
};
