n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    g = n(821849),
    m = n(232567),
    p = n(497321),
    f = n(100527),
    _ = n(906732),
    h = n(211242),
    E = n(15640),
    b = n(89057),
    x = n(464824),
    C = n(214852),
    v = n(621853),
    T = n(246946),
    N = n(594174),
    S = n(78839),
    I = n(626135),
    R = n(111361),
    A = n(357355),
    j = n(937579),
    P = n(471309),
    Z = n(91802),
    B = n(104494),
    M = n(639119),
    O = n(2359),
    w = n(132547),
    y = n(474936),
    k = n(981631),
    L = n(579521);
t.Z = function (e) {
    let { entrypoint: t = y.EZ.UserSettings } = e;
    (0, C.z)(x.X);
    let n = (0, h.Q)(),
        { sourceAnalyticsLocations: a, analyticsLocations: U } = (0, _.ZP)(f.Z.PREMIUM_MARKETING),
        D = (0, l.e7)([S.ZP], () => S.ZP.hasFetchedSubscriptions()),
        H = (0, l.e7)([N.default], () => N.default.getCurrentUser()),
        V = null == H ? void 0 : H.id,
        G = (0, M.N)(),
        F = (0, B.Ng)(),
        W = (0, E.V)(),
        [z, Y] = r.useState(!0),
        K = r.useRef(0),
        Q = (0, R.M5)(H, y.p9.TIER_2),
        J = (0, Z.n)(),
        q = null == J ? void 0 : J.countryCode,
        { enabled: X } = (0, P.Z)(),
        $ = (0, l.e7)([v.Z], () => (null != H ? v.Z.getUserProfile(H.id) : null)),
        ee = (0, l.e7)([A.Z], () => A.Z.hasFetched);
    if (
        (r.useEffect(() => {
            !ee && d.MH();
        }, [ee]),
        r.useEffect(() => {
            c.Z.wait(async () => {
                let e = Date.now();
                await Promise.all([d.jg(), (0, u.X8)(), d.tZ(), (0, g.Y2)(q, null, k.JjL.DISCOVERY), null != V && X && Q && (0, m.In)(V)]), (K.current = Date.now() - e), Y(!1);
            });
        }, [q, V, X, Q]),
        r.useEffect(() => {
            n && (null != G || null != F) && (0, j.a)(G, F);
        }, [n, G, F]),
        r.useEffect(() => {
            !z &&
                I.default.track(k.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: a,
                    load_duration_ms: K.current
                });
        }, [a, z]),
        (0, l.e7)([T.Z], () => T.Z.enabled))
    )
        return (0, i.jsx)(p.Z, {});
    if (n) return (0, i.jsx)(b.c8, {});
    if (t === y.EZ.ApplicationStoreHome && Q)
        return X && null == $
            ? (0, i.jsx)('div', {
                  className: s()(L.container, L.loading),
                  children: (0, i.jsx)(o.Spinner, {})
              })
            : (0, i.jsx)(_.Gt, {
                  value: U,
                  children: (0, i.jsx)(w.Z, {})
              });
    return D && W && !z
        ? (0, i.jsx)(_.Gt, {
              value: U,
              children: (0, i.jsx)(O.Z, { entrypoint: t })
          })
        : (0, i.jsx)('div', {
              className: s()(L.container, L.loading),
              children: (0, i.jsx)(o.Spinner, {})
          });
};
