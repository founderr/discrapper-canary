n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    _ = n(355467),
    d = n(179360),
    E = n(821849),
    u = n(232567),
    T = n(497321),
    I = n(100527),
    R = n(906732),
    g = n(211242),
    N = n(15640),
    m = n(89057),
    C = n(433811),
    A = n(214852),
    f = n(621853),
    p = n(246946),
    M = n(594174),
    S = n(78839),
    h = n(626135),
    x = n(111361),
    b = n(357355),
    O = n(937579),
    P = n(471309),
    v = n(91802),
    L = n(104494),
    Z = n(639119),
    D = n(2359),
    U = n(132547),
    B = n(474936),
    j = n(981631),
    G = n(700199);
t.Z = function (e) {
    let { entrypoint: t = B.EZ.UserSettings } = e;
    (0, A.z)(C.X);
    let n = (0, g.Q)(),
        { sourceAnalyticsLocations: r, analyticsLocations: w } = (0, R.ZP)(I.Z.PREMIUM_MARKETING),
        H = (0, l.e7)([S.ZP], () => S.ZP.hasFetchedSubscriptions()),
        y = (0, l.e7)([M.default], () => M.default.getCurrentUser()),
        k = (0, Z.N)(),
        F = (0, L.Ng)(),
        V = (0, N.V)(),
        [W, K] = a.useState(!0),
        Y = a.useRef(0),
        z = (0, x.M5)(y, B.p9.TIER_2),
        Q = (0, v.n)(),
        J = null == Q ? void 0 : Q.countryCode,
        { enabled: X } = (0, P.Z)(),
        q = (0, l.e7)([f.Z], () => (null != y ? f.Z.getUserProfile(y.id) : null)),
        $ = (0, l.e7)([b.Z], () => b.Z.hasFetched);
    if (
        (a.useEffect(() => {
            !$ && _.MH();
        }, [$]),
        a.useEffect(() => {
            c.Z.wait(async () => {
                let e = Date.now();
                await Promise.all([_.jg(), (0, d.X8)(), _.tZ(), (0, E.Y2)(J, null, j.JjL.DISCOVERY), null != y && X && z && (0, u.In)(y.id)]), (Y.current = Date.now() - e), K(!1);
            });
        }, [J, y, X, z]),
        a.useEffect(() => {
            n && (null != k || null != F) && (0, O.a)(k, F);
        }, [n, k, F]),
        a.useEffect(() => {
            !W &&
                h.default.track(j.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: r,
                    load_duration_ms: Y.current
                });
        }, [r, W]),
        (0, l.e7)([p.Z], () => p.Z.enabled))
    )
        return (0, s.jsx)(T.Z, {});
    if (n) return (0, s.jsx)(m.c8, {});
    if (t === B.EZ.ApplicationStoreHome && z)
        return X && null == q
            ? (0, s.jsx)('div', {
                  className: i()(G.container, G.loading),
                  children: (0, s.jsx)(o.Spinner, {})
              })
            : (0, s.jsx)(R.Gt, {
                  value: w,
                  children: (0, s.jsx)(U.Z, {})
              });
    return H && V && !W
        ? (0, s.jsx)(R.Gt, {
              value: w,
              children: (0, s.jsx)(D.Z, { entrypoint: t })
          })
        : (0, s.jsx)('div', {
              className: i()(G.container, G.loading),
              children: (0, s.jsx)(o.Spinner, {})
          });
};
