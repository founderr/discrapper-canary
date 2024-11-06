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
    u = n(320007),
    d = n(540059),
    m = n(141321),
    h = n(2818),
    f = n(954551),
    p = n(208450),
    g = n(358085),
    _ = n(998502),
    C = n(665149),
    E = n(300986),
    I = n(314451),
    x = n(35583),
    v = n(981631),
    N = n(176505),
    T = n(228856);
async function S() {
    if ((0, g.isMac)() && g.isPlatformEmbedded) {
        var e, t, n;
        let i = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : 'Maximize';
        'Minimize' === i ? _.ZP.minimize() : 'Maximize' === i && _.ZP.maximize();
    }
}
function b(e) {
    let { children: t, className: n, channelId: r, guildId: l, innerClassname: o, transparent: s = !1, toolbar: g, mobileToolbar: _, 'aria-label': v, 'aria-labelledby': N, scrollable: b, role: A, hideSearch: j, showDivider: Z } = e,
        { hasBugReporterAccess: R } = c.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 }),
        { enabled: P, inInbox: y } = h.Z.useExperiment({ location: 'HeaderBar' }),
        L = (0, d.Q)('HeaderBar');
    return (0, i.jsx)(C.ZP, {
        className: n,
        innerClassName: o,
        toolbar: (function () {
            if (null == g) return null;
            let e = null != r && !j;
            return a.tq
                ? _
                : (0, i.jsxs)(i.Fragment, {
                      children: [g, e ? (0, i.jsx)(p.Z, { className: T.search }, null != l ? l : r) : null, Z && (0, i.jsx)(C.ZP.Divider, {}), !L && (0, i.jsx)(x.Z, {}), (0, i.jsx)(u.Z, { canShowReminder: !0 }), !L && (0, i.jsx)(m.Z, {}), P && !y ? (0, i.jsx)(f.Z, {}) : null, !L && (R ? (0, i.jsx)(I.Z, {}) : (0, i.jsx)(E.Z, {}))]
                  });
        })(),
        transparent: s,
        onDoubleClick: S,
        'aria-label': v,
        'aria-labelledby': N,
        role: A,
        scrollable: b,
        children: t
    });
}
function A(e) {
    let { children: t, className: n, 'aria-label': r, 'aria-labelledby': l, role: a } = e;
    return (0, i.jsx)(C.ZP, {
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
        a = l()(n.className, { [T.forumOrHome]: (null != n.channelType && v.TPd.GUILD_THREADS_ONLY.has(n.channelType)) || n.channelId === N.oC.GUILD_HOME });
    return (0, i.jsx)(s.Gt, {
        value: r,
        children: t
            ? (0, i.jsx)(b, {
                  ...n,
                  className: a
              })
            : (0, i.jsx)(A, {
                  ...n,
                  className: a
              })
    });
}
(j.Title = C.ZP.Title), (j.Icon = C.ZP.Icon), (j.Divider = C.ZP.Divider), (j.Caret = C.ZP.Caret), (t.Z = j);
