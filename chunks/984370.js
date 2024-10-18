n.d(t, {
    O: function () {
        return x;
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
    f = n(998502),
    h = n(665149),
    N = n(300986),
    p = n(314451),
    C = n(35583),
    g = n(981631),
    S = n(176505),
    A = n(228856);
async function x() {
    if ((0, T.isMac)() && T.isPlatformEmbedded) {
        var e, t, n;
        let i = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : 'Maximize';
        'Minimize' === i ? f.ZP.minimize() : 'Maximize' === i && f.ZP.maximize();
    }
}
function R(e) {
    let { children: t, className: n, channelId: a, guildId: s, innerClassname: l, transparent: o = !1, toolbar: T, mobileToolbar: f, 'aria-label': g, 'aria-labelledby': S, scrollable: R, role: O, hideSearch: v, showDivider: M } = e,
        { hasBugReporterAccess: L } = c.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 }),
        { enabled: Z, inInbox: P } = E.Z.useExperiment({ location: 'HeaderBar' }),
        b = (0, d.Q)('HeaderBar');
    return (0, i.jsx)(h.ZP, {
        className: n,
        innerClassName: l,
        toolbar: (function () {
            if (null == T) return null;
            let e = null != a && !v;
            return r.tq
                ? f
                : (0, i.jsxs)(i.Fragment, {
                      children: [T, e ? (0, i.jsx)(m.Z, { className: A.search }, null != s ? s : a) : null, M && (0, i.jsx)(h.ZP.Divider, {}), !b && (0, i.jsx)(C.Z, {}), (0, i.jsx)(u.Z, { canShowReminder: !0 }), !b && (0, i.jsx)(_.Z, {}), Z && !P ? (0, i.jsx)(I.Z, {}) : null, !b && (L ? (0, i.jsx)(p.Z, {}) : (0, i.jsx)(N.Z, {}))]
                  });
        })(),
        transparent: o,
        onDoubleClick: x,
        'aria-label': g,
        'aria-labelledby': S,
        role: O,
        scrollable: R,
        children: t
    });
}
function O(e) {
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
function v(e) {
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
            : (0, i.jsx)(O, {
                  ...n,
                  className: r
              })
    });
}
(v.Title = h.ZP.Title), (v.Icon = h.ZP.Icon), (v.Divider = h.ZP.Divider), (v.Caret = h.ZP.Caret), (t.Z = v);
