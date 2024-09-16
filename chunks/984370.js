n.d(t, {
    O: function () {
        return A;
    }
});
var i = n(735250);
n(470079);
var s = n(120356),
    a = n.n(s),
    r = n(873546),
    l = n(100527),
    o = n(906732),
    c = n(174556),
    u = n(320007),
    d = n(141321),
    _ = n(2818),
    E = n(954551),
    I = n(208450),
    m = n(358085),
    T = n(998502),
    N = n(665149),
    h = n(300986),
    C = n(314451),
    f = n(35583),
    p = n(981631),
    g = n(176505),
    S = n(228856);
async function A() {
    if ((0, m.isMac)() && m.isPlatformEmbedded) {
        var e, t, n;
        let i = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : 'Maximize';
        'Minimize' === i ? T.ZP.minimize() : 'Maximize' === i && T.ZP.maximize();
    }
}
function R(e) {
    let { children: t, className: n, channelId: s, guildId: a, innerClassname: l, transparent: o = !1, toolbar: m, mobileToolbar: T, 'aria-label': p, 'aria-labelledby': g, scrollable: R, role: O, hideSearch: x, showDivider: M } = e,
        { hasBugReporterAccess: v } = c.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 }),
        { enabled: L, inInbox: Z } = _.Z.useExperiment({ location: 'HeaderBar' });
    return (0, i.jsx)(N.ZP, {
        className: n,
        innerClassName: l,
        toolbar: (function () {
            if (null == m) return null;
            let e = null != s && !x;
            return r.tq
                ? T
                : (0, i.jsxs)(i.Fragment, {
                      children: [m, e ? (0, i.jsx)(I.Z, { className: S.search }, null != a ? a : s) : null, M && (0, i.jsx)(N.ZP.Divider, {}), (0, i.jsx)(f.Z, {}), (0, i.jsx)(u.Z, { canShowReminder: !0 }), (0, i.jsx)(d.Z, {}), L && !Z ? (0, i.jsx)(E.Z, {}) : null, v ? (0, i.jsx)(C.Z, {}) : (0, i.jsx)(h.Z, {})]
                  });
        })(),
        transparent: o,
        onDoubleClick: A,
        'aria-label': p,
        'aria-labelledby': g,
        role: O,
        scrollable: R,
        children: t
    });
}
function O(e) {
    let { children: t, className: n, 'aria-label': s, 'aria-labelledby': a, role: r } = e;
    return (0, i.jsx)(N.ZP, {
        className: n,
        onDoubleClick: A,
        'aria-label': s,
        'aria-labelledby': a,
        role: r,
        children: t
    });
}
function x(e) {
    let { isAuthenticated: t = !0, ...n } = e,
        { analyticsLocations: s } = (0, o.ZP)(l.Z.HEADER_BAR),
        r = a()(n.className, { [S.forumOrHome]: (null != n.channelType && p.TPd.GUILD_THREADS_ONLY.has(n.channelType)) || n.channelId === g.oC.GUILD_HOME });
    return (0, i.jsx)(o.Gt, {
        value: s,
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
(x.Title = N.ZP.Title), (x.Icon = N.ZP.Icon), (x.Divider = N.ZP.Divider), (x.Caret = N.ZP.Caret), (t.Z = x);
