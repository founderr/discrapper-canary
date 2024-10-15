n.d(t, {
    O: function () {
        return R;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(873546),
    l = n(100527),
    o = n(906732),
    c = n(174556),
    u = n(320007),
    d = n(540059),
    _ = n(141321),
    E = n(2818),
    I = n(954551),
    m = n(208450),
    T = n(358085),
    h = n(998502),
    N = n(665149),
    f = n(300986),
    C = n(314451),
    p = n(35583),
    g = n(981631),
    A = n(176505),
    S = n(228856);
async function R() {
    if ((0, T.isMac)() && T.isPlatformEmbedded) {
        var e, t, n;
        let i = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : 'Maximize';
        'Minimize' === i ? h.ZP.minimize() : 'Maximize' === i && h.ZP.maximize();
    }
}
function x(e) {
    let { children: t, className: n, channelId: a, guildId: s, innerClassname: l, transparent: o = !1, toolbar: T, mobileToolbar: h, 'aria-label': g, 'aria-labelledby': A, scrollable: x, role: O, hideSearch: M, showDivider: v } = e,
        { hasBugReporterAccess: L } = c.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 }),
        { enabled: Z, inInbox: P } = E.Z.useExperiment({ location: 'HeaderBar' }),
        b = (0, d.Q)('HeaderBar');
    return (0, i.jsx)(N.ZP, {
        className: n,
        innerClassName: l,
        toolbar: (function () {
            if (null == T) return null;
            let e = null != a && !M;
            return r.tq
                ? h
                : (0, i.jsxs)(i.Fragment, {
                      children: [T, e ? (0, i.jsx)(m.Z, { className: S.search }, null != s ? s : a) : null, v && (0, i.jsx)(N.ZP.Divider, {}), !b && (0, i.jsx)(p.Z, {}), (0, i.jsx)(u.Z, { canShowReminder: !0 }), !b && (0, i.jsx)(_.Z, {}), Z && !P ? (0, i.jsx)(I.Z, {}) : null, !b && (L ? (0, i.jsx)(C.Z, {}) : (0, i.jsx)(f.Z, {}))]
                  });
        })(),
        transparent: o,
        onDoubleClick: R,
        'aria-label': g,
        'aria-labelledby': A,
        role: O,
        scrollable: x,
        children: t
    });
}
function O(e) {
    let { children: t, className: n, 'aria-label': a, 'aria-labelledby': s, role: r } = e;
    return (0, i.jsx)(N.ZP, {
        className: n,
        onDoubleClick: R,
        'aria-label': a,
        'aria-labelledby': s,
        role: r,
        children: t
    });
}
function M(e) {
    let { isAuthenticated: t = !0, ...n } = e,
        { analyticsLocations: a } = (0, o.ZP)(l.Z.HEADER_BAR),
        r = s()(n.className, { [S.forumOrHome]: (null != n.channelType && g.TPd.GUILD_THREADS_ONLY.has(n.channelType)) || n.channelId === A.oC.GUILD_HOME });
    return (0, i.jsx)(o.Gt, {
        value: a,
        children: t
            ? (0, i.jsx)(x, {
                  ...n,
                  className: r
              })
            : (0, i.jsx)(O, {
                  ...n,
                  className: r
              })
    });
}
(M.Title = N.ZP.Title), (M.Icon = N.ZP.Icon), (M.Divider = N.ZP.Divider), (M.Caret = N.ZP.Caret), (t.Z = M);
