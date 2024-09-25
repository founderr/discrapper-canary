n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    o = n(442837),
    l = n(481060),
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
    f = n(621853),
    A = n(246946),
    S = n(594174),
    M = n(78839),
    h = n(626135),
    x = n(111361),
    b = n(357355),
    O = n(937579),
    P = n(471309),
    v = n(91802),
    L = n(104494),
    Z = n(639119),
    D = n(2359),
    B = n(132547),
    U = n(474936),
    j = n(981631),
    G = n(700199);
t.Z = function (e) {
    let { entrypoint: t = U.EZ.UserSettings } = e;
    (0, p.z)(C.X);
    let n = (0, m.Q)(),
        { sourceAnalyticsLocations: r, analyticsLocations: w } = (0, R.ZP)(I.Z.PREMIUM_MARKETING),
        y = (0, o.e7)([M.ZP], () => M.ZP.hasFetchedSubscriptions()),
        H = (0, o.e7)([S.default], () => S.default.getCurrentUser()),
        k = (0, Z.N)(),
        F = (0, L.Ng)(),
        V = (0, g.V)(),
        [W, K] = a.useState(!0),
        Y = a.useRef(0),
        z = (0, x.M5)(H, U.p9.TIER_2),
        Q = (0, v.n)(),
        q = null == Q ? void 0 : Q.countryCode,
        { enabled: X } = (0, P.Z)(),
        J = (0, o.e7)([f.Z], () => (null != H ? f.Z.getUserProfile(H.id) : null)),
        $ = (0, o.e7)([b.Z], () => b.Z.hasFetched);
    if (
        (a.useEffect(() => {
            !$ && d.MH();
        }, [$]),
        a.useEffect(() => {
            c.Z.wait(async () => {
                let e = Date.now();
                await Promise.all([d.jg(), (0, _.X8)(), d.tZ(), (0, u.Y2)(q, null, j.JjL.DISCOVERY), null != H && X && z && (0, E.In)(H.id)]), (Y.current = Date.now() - e), K(!1);
            });
        }, [q, H, X, z]),
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
        (0, o.e7)([A.Z], () => A.Z.enabled))
    )
        return (0, s.jsx)(T.Z, {});
    if (n) return (0, s.jsx)(N.c8, {});
    if (t === U.EZ.ApplicationStoreHome && z)
        return X && null == J
            ? (0, s.jsx)('div', {
                  className: i()(G.container, G.loading),
                  children: (0, s.jsx)(l.Spinner, {})
              })
            : (0, s.jsx)(R.Gt, {
                  value: w,
                  children: (0, s.jsx)(B.Z, {})
              });
    return y && V && !W
        ? (0, s.jsx)(R.Gt, {
              value: w,
              children: (0, s.jsx)(D.Z, { entrypoint: t })
          })
        : (0, s.jsx)('div', {
              className: i()(G.container, G.loading),
              children: (0, s.jsx)(l.Spinner, {})
          });
};
