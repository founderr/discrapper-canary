n.d(t, {
    O: function () {
        return v;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    l = n.n(i),
    s = n(873546),
    a = n(100527),
    o = n(906732),
    u = n(174556),
    c = n(320007),
    d = n(540059),
    h = n(141321),
    _ = n(2818),
    f = n(954551),
    E = n(208450),
    p = n(358085),
    m = n(998502),
    C = n(665149),
    S = n(300986),
    I = n(314451),
    g = n(35583),
    T = n(981631),
    R = n(176505),
    N = n(228856);
async function v() {
    if ((0, p.isMac)() && p.isPlatformEmbedded) {
        var e, t, n;
        let r = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : 'Maximize';
        'Minimize' === r ? m.ZP.minimize() : 'Maximize' === r && m.ZP.maximize();
    }
}
function x(e) {
    let { children: t, className: n, channelId: i, guildId: l, innerClassname: a, transparent: o = !1, toolbar: p, mobileToolbar: m, 'aria-label': T, 'aria-labelledby': R, scrollable: x, role: A, hideSearch: L, showDivider: b } = e,
        { hasBugReporterAccess: O } = u.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 }),
        { enabled: Z, inInbox: P } = _.Z.useExperiment({ location: 'HeaderBar' }),
        M = (0, d.Q)('HeaderBar');
    return (0, r.jsx)(C.ZP, {
        className: n,
        innerClassName: a,
        toolbar: (function () {
            if (null == p) return null;
            let e = null != i && !L;
            return s.tq
                ? m
                : (0, r.jsxs)(r.Fragment, {
                      children: [p, e ? (0, r.jsx)(E.Z, { className: N.search }, null != l ? l : i) : null, b && (0, r.jsx)(C.ZP.Divider, {}), !M && (0, r.jsx)(g.Z, {}), (0, r.jsx)(c.Z, { canShowReminder: !0 }), !M && (0, r.jsx)(h.Z, {}), Z && !P ? (0, r.jsx)(f.Z, {}) : null, !M && (O ? (0, r.jsx)(I.Z, {}) : (0, r.jsx)(S.Z, {}))]
                  });
        })(),
        transparent: o,
        onDoubleClick: v,
        'aria-label': T,
        'aria-labelledby': R,
        role: A,
        scrollable: x,
        children: t
    });
}
function A(e) {
    let { children: t, className: n, 'aria-label': i, 'aria-labelledby': l, role: s } = e;
    return (0, r.jsx)(C.ZP, {
        className: n,
        onDoubleClick: v,
        'aria-label': i,
        'aria-labelledby': l,
        role: s,
        children: t
    });
}
function L(e) {
    let { isAuthenticated: t = !0, ...n } = e,
        { analyticsLocations: i } = (0, o.ZP)(a.Z.HEADER_BAR),
        s = l()(n.className, { [N.forumOrHome]: (null != n.channelType && T.TPd.GUILD_THREADS_ONLY.has(n.channelType)) || n.channelId === R.oC.GUILD_HOME });
    return (0, r.jsx)(o.Gt, {
        value: i,
        children: t
            ? (0, r.jsx)(x, {
                  ...n,
                  className: s
              })
            : (0, r.jsx)(A, {
                  ...n,
                  className: s
              })
    });
}
(L.Title = C.ZP.Title), (L.Icon = C.ZP.Icon), (L.Divider = C.ZP.Divider), (L.Caret = C.ZP.Caret), (t.Z = L);
