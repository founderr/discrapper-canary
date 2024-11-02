n.d(t, {
    O: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
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
    f = n(358085),
    T = n(998502),
    h = n(665149),
    N = n(300986),
    p = n(314451),
    C = n(35583),
    g = n(981631),
    S = n(176505),
    A = n(228856);
async function x() {
    if ((0, f.isMac)() && f.isPlatformEmbedded) {
        var e, t, n;
        let i = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : 'Maximize';
        'Minimize' === i ? T.ZP.minimize() : 'Maximize' === i && T.ZP.maximize();
    }
}
function R(e) {
    let { children: t, className: n, channelId: a, guildId: s, innerClassname: l, transparent: o = !1, toolbar: f, mobileToolbar: T, 'aria-label': g, 'aria-labelledby': S, scrollable: R, role: v, hideSearch: M, showDivider: O } = e,
        { hasBugReporterAccess: L } = c.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 }),
        { enabled: Z, inInbox: b } = E.Z.useExperiment({ location: 'HeaderBar' }),
        P = (0, d.Q)('HeaderBar');
    return (0, i.jsx)(h.ZP, {
        className: n,
        innerClassName: l,
        toolbar: (function () {
            if (null == f) return null;
            let e = null != a && !M;
            return r.tq
                ? T
                : (0, i.jsxs)(i.Fragment, {
                      children: [f, e ? (0, i.jsx)(m.Z, { className: A.search }, null != s ? s : a) : null, O && (0, i.jsx)(h.ZP.Divider, {}), !P && (0, i.jsx)(C.Z, {}), (0, i.jsx)(u.Z, { canShowReminder: !0 }), !P && (0, i.jsx)(_.Z, {}), Z && !b ? (0, i.jsx)(I.Z, {}) : null, !P && (L ? (0, i.jsx)(p.Z, {}) : (0, i.jsx)(N.Z, {}))]
                  });
        })(),
        transparent: o,
        onDoubleClick: x,
        'aria-label': g,
        'aria-labelledby': S,
        role: v,
        scrollable: R,
        children: t
    });
}
function v(e) {
    let { children: t, className: n, 'aria-label': a, 'aria-labelledby': s, role: r } = e;
    return (0, i.jsx)(h.ZP, {
        className: n,
        onDoubleClick: x,
        'aria-label': a,
        'aria-labelledby': s,
        role: r,
        children: t
    });
}
function M(e) {
    let { isAuthenticated: t = !0, ...n } = e,
        { analyticsLocations: a } = (0, o.ZP)(l.Z.HEADER_BAR),
        r = s()(n.className, { [A.forumOrHome]: (null != n.channelType && g.TPd.GUILD_THREADS_ONLY.has(n.channelType)) || n.channelId === S.oC.GUILD_HOME });
    return (0, i.jsx)(o.Gt, {
        value: a,
        children: t
            ? (0, i.jsx)(R, {
                  ...n,
                  className: r
              })
            : (0, i.jsx)(v, {
                  ...n,
                  className: r
              })
    });
}
(M.Title = h.ZP.Title), (M.Icon = h.ZP.Icon), (M.Divider = h.ZP.Divider), (M.Caret = h.ZP.Caret), (t.Z = M);
