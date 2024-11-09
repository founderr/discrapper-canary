n.d(t, {
    O: function () {
        return S;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(873546),
    o = n(100527),
    s = n(906732),
    c = n(174556),
    d = n(320007),
    u = n(540059),
    m = n(141321),
    h = n(2818),
    f = n(954551),
    p = n(208450),
    _ = n(358085),
    g = n(998502),
    E = n(665149),
    C = n(300986),
    I = n(314451),
    x = n(35583),
    N = n(981631),
    v = n(176505),
    T = n(228856);
async function S() {
    if ((0, _.isMac)() && _.isPlatformEmbedded) {
        var e, t, n;
        let i = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : 'Maximize';
        'Minimize' === i ? g.ZP.minimize() : 'Maximize' === i && g.ZP.maximize();
    }
}
function A(e) {
    let { children: t, className: n, channelId: r, guildId: l, innerClassname: o, transparent: s = !1, toolbar: _, mobileToolbar: g, 'aria-label': N, 'aria-labelledby': v, scrollable: A, role: b, hideSearch: j, showDivider: Z } = e,
        { hasBugReporterAccess: R } = c.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 }),
        { enabled: L, inInbox: P } = h.Z.useExperiment({ location: 'HeaderBar' }),
        y = (0, u.Q)('HeaderBar');
    return (0, i.jsx)(E.ZP, {
        className: n,
        innerClassName: o,
        toolbar: (function () {
            if (null == _) return null;
            let e = null != r && !j;
            return a.tq
                ? g
                : (0, i.jsxs)(i.Fragment, {
                      children: [_, e ? (0, i.jsx)(p.Z, { className: T.search }, null != l ? l : r) : null, Z && (0, i.jsx)(E.ZP.Divider, {}), !y && (0, i.jsx)(x.Z, {}), (0, i.jsx)(d.Z, { canShowReminder: !0 }), !y && (0, i.jsx)(m.Z, {}), L && !P ? (0, i.jsx)(f.Z, {}) : null, !y && (R ? (0, i.jsx)(I.Z, {}) : (0, i.jsx)(C.Z, {}))]
                  });
        })(),
        transparent: s,
        onDoubleClick: S,
        'aria-label': N,
        'aria-labelledby': v,
        role: b,
        scrollable: A,
        children: t
    });
}
function b(e) {
    let { children: t, className: n, 'aria-label': r, 'aria-labelledby': l, role: a } = e;
    return (0, i.jsx)(E.ZP, {
        className: n,
        onDoubleClick: S,
        'aria-label': r,
        'aria-labelledby': l,
        role: a,
        children: t
    });
}
function j(e) {
    let { isAuthenticated: t = !0, ...n } = e,
        { analyticsLocations: r } = (0, s.ZP)(o.Z.HEADER_BAR),
        a = l()(n.className, { [T.forumOrHome]: (null != n.channelType && N.TPd.GUILD_THREADS_ONLY.has(n.channelType)) || n.channelId === v.oC.GUILD_HOME });
    return (0, i.jsx)(s.Gt, {
        value: r,
        children: t
            ? (0, i.jsx)(A, {
                  ...n,
                  className: a
              })
            : (0, i.jsx)(b, {
                  ...n,
                  className: a
              })
    });
}
(j.Title = E.ZP.Title), (j.Icon = E.ZP.Icon), (j.Divider = E.ZP.Divider), (j.Caret = E.ZP.Caret), (t.Z = j);
