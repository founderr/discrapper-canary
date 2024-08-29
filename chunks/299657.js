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
    E = n(497321),
    T = n(100527),
    I = n(906732),
    R = n(211242),
    C = n(15640),
    g = n(89057),
    N = n(433811),
    p = n(214852),
    m = n(246946),
    A = n(594174),
    f = n(78839),
    S = n(626135),
    h = n(111361),
    M = n(357355),
    x = n(937579),
    O = n(91802),
    b = n(104494),
    P = n(639119),
    v = n(2359),
    L = n(132547),
    Z = n(474936),
    D = n(981631),
    B = n(874296);
t.Z = function (e) {
    let { entrypoint: t = Z.EZ.UserSettings } = e;
    (0, p.z)(N.X);
    let n = (0, R.Q)(),
        { sourceAnalyticsLocations: r, analyticsLocations: j } = (0, I.ZP)(T.Z.PREMIUM_MARKETING),
        U = (0, l.e7)([f.ZP], () => f.ZP.hasFetchedSubscriptions()),
        G = (0, l.e7)([A.default], () => A.default.getCurrentUser()),
        y = (0, P.N)(),
        k = (0, b.Ng)(),
        H = (0, C.V)(),
        [w, F] = a.useState(!0),
        V = a.useRef(0),
        W = (0, h.M5)(G, Z.p9.TIER_2),
        K = (0, O.n)(),
        Y = null == K ? void 0 : K.countryCode,
        z = (0, l.e7)([M.Z], () => M.Z.hasFetched);
    return (a.useEffect(() => {
        !z && d.MH();
    }, [z]),
    a.useEffect(() => {
        c.Z.wait(async () => {
            let e = Date.now();
            await Promise.all([d.jg(), (0, _.X8)(), d.tZ(), (0, u.Y2)(Y, null, D.JjL.DISCOVERY)]), (V.current = Date.now() - e), F(!1);
        });
    }, [Y]),
    a.useEffect(() => {
        n && (null != y || null != k) && (0, x.a)(y, k);
    }, [n, y, k]),
    a.useEffect(() => {
        !w &&
            S.default.track(D.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                location_stack: r,
                load_duration_ms: V.current
            });
    }, [r, w]),
    (0, l.e7)([m.Z], () => m.Z.enabled))
        ? (0, s.jsx)(E.Z, {})
        : n
          ? (0, s.jsx)(g.c8, {})
          : t === Z.EZ.ApplicationStoreHome && W
            ? (0, s.jsx)(I.Gt, {
                  value: j,
                  children: (0, s.jsx)(L.Z, {})
              })
            : U && H && !w
              ? (0, s.jsx)(I.Gt, {
                    value: j,
                    children: (0, s.jsx)(v.Z, { entrypoint: t })
                })
              : (0, s.jsx)('div', {
                    className: i()(B.container, B.loading),
                    children: (0, s.jsx)(o.Spinner, {})
                });
};
