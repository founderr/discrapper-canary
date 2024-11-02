i.r(t),
    i.d(t, {
        default: function () {
            return v;
        }
    });
var e = i(200651);
i(192379);
var l = i(442837),
    a = i(481060),
    r = i(239091),
    d = i(812206),
    u = i(731646),
    c = i(283595),
    o = i(499502),
    s = i(955809),
    I = i(332845),
    b = i(78874),
    f = i(350758),
    h = i(149835),
    p = i(38346),
    Z = i(683609),
    g = i(679879),
    A = i(981631),
    T = i(388032);
function x(n) {
    let { application: t, libraryApplication: i, analyticsContext: l, onSelect: d } = n,
        u = {
            ...(null != l ? l.location : null),
            object: A.qAy.CONTEXT_MENU
        },
        c = (0, b.Z)(i, u),
        x = (0, f.Z)(i),
        v = (0, p.Z)(i),
        E = (0, g.Z)(i),
        m = (0, Z.Z)(i),
        _ = (0, I.Z)(i, t),
        L = (0, h.Z)(i, t),
        S = (0, o.Z)(i, t),
        M = (0, s.Z)(t);
    return (0, e.jsxs)(a.Menu, {
        navId: 'game-context',
        onClose: r.Zy,
        'aria-label': T.intl.string(T.t.tKobzc),
        onSelect: d,
        children: [c, x, v, E, m, _, L, (0, e.jsx)(a.MenuGroup, { children: S }), (0, e.jsx)(a.MenuGroup, { children: M })]
    });
}
function v(n) {
    let { applicationId: t, branchId: i } = n,
        a = (0, l.e7)([d.Z], () => d.Z.getApplication(t), [t]),
        r = (0, l.e7)([c.Z], () => (null != i ? c.Z.getLibraryApplication(t, i) : c.Z.getActiveLibraryApplication(t)), [t, i]);
    return null == a || null == r
        ? (0, e.jsx)(u.default, {
              ...n,
              id: t,
              label: T.intl.string(T.t['FfCL+/'])
          })
        : (0, e.jsx)(x, {
              ...n,
              application: a,
              libraryApplication: r
          });
}
