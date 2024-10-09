n.d(t, {
    O: function () {
        return x;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    l = n.n(i),
    s = n(873546),
    a = n(100527),
    o = n(906732),
    c = n(174556),
    u = n(320007),
    d = n(540059),
    h = n(141321),
    _ = n(2818),
    f = n(954551),
    E = n(208450),
    p = n(358085),
    m = n(998502),
    I = n(665149),
    C = n(300986),
    S = n(314451),
    g = n(35583),
    R = n(981631),
    T = n(176505),
    N = n(228856);
async function x() {
    if ((0, p.isMac)() && p.isPlatformEmbedded) {
        var e, t, n;
        let r = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : 'Maximize';
        'Minimize' === r ? m.ZP.minimize() : 'Maximize' === r && m.ZP.maximize();
    }
}
function v(e) {
    let { children: t, className: n, channelId: i, guildId: l, innerClassname: a, transparent: o = !1, toolbar: p, mobileToolbar: m, 'aria-label': R, 'aria-labelledby': T, scrollable: v, role: b, hideSearch: L, showDivider: O } = e,
        { hasBugReporterAccess: A } = c.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 }),
        { enabled: P, inInbox: Z } = _.Z.useExperiment({ location: 'HeaderBar' }),
        y = (0, d.Q)('HeaderBar');
    return (0, r.jsx)(I.ZP, {
        className: n,
        innerClassName: a,
        toolbar: (function () {
            if (null == p) return null;
            let e = null != i && !L;
            return s.tq
                ? m
                : (0, r.jsxs)(r.Fragment, {
                      children: [p, e ? (0, r.jsx)(E.Z, { className: N.search }, null != l ? l : i) : null, O && (0, r.jsx)(I.ZP.Divider, {}), !y && (0, r.jsx)(g.Z, {}), (0, r.jsx)(u.Z, { canShowReminder: !0 }), !y && (0, r.jsx)(h.Z, {}), P && !Z ? (0, r.jsx)(f.Z, {}) : null, !y && (A ? (0, r.jsx)(S.Z, {}) : (0, r.jsx)(C.Z, {}))]
                  });
        })(),
        transparent: o,
        onDoubleClick: x,
        'aria-label': R,
        'aria-labelledby': T,
        role: b,
        scrollable: v,
        children: t
    });
}
function b(e) {
    let { children: t, className: n, 'aria-label': i, 'aria-labelledby': l, role: s } = e;
    return (0, r.jsx)(I.ZP, {
        className: n,
        onDoubleClick: x,
        'aria-label': i,
        'aria-labelledby': l,
        role: s,
        children: t
    });
}
function L(e) {
    let { isAuthenticated: t = !0, ...n } = e,
        { analyticsLocations: i } = (0, o.ZP)(a.Z.HEADER_BAR),
        s = l()(n.className, { [N.forumOrHome]: (null != n.channelType && R.TPd.GUILD_THREADS_ONLY.has(n.channelType)) || n.channelId === T.oC.GUILD_HOME });
    return (0, r.jsx)(o.Gt, {
        value: i,
        children: t
            ? (0, r.jsx)(v, {
                  ...n,
                  className: s
              })
            : (0, r.jsx)(b, {
                  ...n,
                  className: s
              })
    });
}
(L.Title = I.ZP.Title), (L.Icon = I.ZP.Icon), (L.Divider = I.ZP.Divider), (L.Caret = I.ZP.Caret), (t.Z = L);
