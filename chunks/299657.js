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
    f = n(497321),
    p = n(100527),
    _ = n(906732),
    h = n(211242),
    x = n(15640),
    E = n(89057),
    b = n(433811),
    C = n(214852),
    v = n(621853),
    T = n(246946),
    N = n(594174),
    I = n(78839),
    S = n(626135),
    R = n(111361),
    A = n(357355),
    j = n(937579),
    P = n(471309),
    O = n(91802),
    Z = n(104494),
    M = n(639119),
    w = n(2359),
    B = n(132547),
    y = n(474936),
    k = n(981631),
    L = n(700199);
t.Z = function (e) {
    let { entrypoint: t = y.EZ.UserSettings } = e;
    (0, C.z)(b.X);
    let n = (0, h.Q)(),
        { sourceAnalyticsLocations: a, analyticsLocations: U } = (0, _.ZP)(p.Z.PREMIUM_MARKETING),
        D = (0, l.e7)([I.ZP], () => I.ZP.hasFetchedSubscriptions()),
        G = (0, l.e7)([N.default], () => N.default.getCurrentUser()),
        H = (0, M.N)(),
        V = (0, Z.Ng)(),
        F = (0, x.V)(),
        [W, z] = r.useState(!0),
        Y = r.useRef(0),
        K = (0, R.M5)(G, y.p9.TIER_2),
        Q = (0, O.n)(),
        J = null == Q ? void 0 : Q.countryCode,
        { enabled: q } = (0, P.Z)(),
        X = (0, l.e7)([v.Z], () => (null != G ? v.Z.getUserProfile(G.id) : null)),
        $ = (0, l.e7)([A.Z], () => A.Z.hasFetched);
    if (
        (r.useEffect(() => {
            !$ && d.MH();
        }, [$]),
        r.useEffect(() => {
            c.Z.wait(async () => {
                let e = Date.now();
                await Promise.all([d.jg(), (0, u.X8)(), d.tZ(), (0, g.Y2)(J, null, k.JjL.DISCOVERY), null != G && q && K && (0, m.In)(G.id)]), (Y.current = Date.now() - e), z(!1);
            });
        }, [J, G, q, K]),
        r.useEffect(() => {
            n && (null != H || null != V) && (0, j.a)(H, V);
        }, [n, H, V]),
        r.useEffect(() => {
            !W &&
                S.default.track(k.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: a,
                    load_duration_ms: Y.current
                });
        }, [a, W]),
        (0, l.e7)([T.Z], () => T.Z.enabled))
    )
        return (0, i.jsx)(f.Z, {});
    if (n) return (0, i.jsx)(E.c8, {});
    if (t === y.EZ.ApplicationStoreHome && K)
        return q && null == X
            ? (0, i.jsx)('div', {
                  className: s()(L.container, L.loading),
                  children: (0, i.jsx)(o.Spinner, {})
              })
            : (0, i.jsx)(_.Gt, {
                  value: U,
                  children: (0, i.jsx)(B.Z, {})
              });
    return D && F && !W
        ? (0, i.jsx)(_.Gt, {
              value: U,
              children: (0, i.jsx)(w.Z, { entrypoint: t })
          })
        : (0, i.jsx)('div', {
              className: s()(L.container, L.loading),
              children: (0, i.jsx)(o.Spinner, {})
          });
};
