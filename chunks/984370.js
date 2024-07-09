n.d(t, {
    O: function () {
        return S;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), r = n(873546), l = n(442837), o = n(100527), c = n(906732), d = n(320007), u = n(141321), _ = n(208450), E = n(594174), I = n(502568), m = n(358085), T = n(998502), h = n(300986), N = n(314451), p = n(35583), f = n(981631), C = n(176505), g = n(139715);
async function S() {
    if ((0, m.isMac)() && m.isPlatformEmbedded) {
        var e, t, n;
        let i = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : 'Maximize';
        'Minimize' === i ? T.ZP.minimize() : 'Maximize' === i && T.ZP.maximize();
    }
}
function A(e) {
    let {
            children: t,
            className: n,
            channelId: a,
            guildId: s,
            innerClassname: o,
            transparent: c = !1,
            toolbar: m,
            mobileToolbar: T,
            'aria-label': f,
            'aria-labelledby': C,
            scrollable: A,
            role: x,
            hideSearch: R,
            showDivider: O
        } = e, M = (0, l.e7)([E.default], () => E.default.getCurrentUser()), v = (null == M ? void 0 : M.isStaff()) || (null == M ? void 0 : M.isStaffPersonal()) || !1;
    return (0, i.jsx)(I.ZP, {
        className: n,
        innerClassName: o,
        toolbar: function () {
            if (null == m)
                return null;
            let e = null != a && !R;
            return r.tq ? T : (0, i.jsxs)(i.Fragment, {
                children: [
                    m,
                    e ? (0, i.jsx)(_.Z, { className: g.search }, null != s ? s : a) : null,
                    O && (0, i.jsx)(I.ZP.Divider, {}),
                    (0, i.jsx)(p.Z, {}),
                    (0, i.jsx)(d.Z, { canShowReminder: !0 }),
                    (0, i.jsx)(u.Z, {}),
                    v ? (0, i.jsx)(N.Z, {}) : (0, i.jsx)(h.Z, {})
                ]
            });
        }(),
        transparent: c,
        onDoubleClick: S,
        'aria-label': f,
        'aria-labelledby': C,
        role: x,
        scrollable: A,
        children: t
    });
}
function x(e) {
    let {
        children: t,
        className: n,
        'aria-label': a,
        'aria-labelledby': s,
        role: r
    } = e;
    return (0, i.jsx)(I.ZP, {
        className: n,
        onDoubleClick: S,
        'aria-label': a,
        'aria-labelledby': s,
        role: r,
        children: t
    });
}
function R(e) {
    let {
            isAuthenticated: t = !0,
            ...n
        } = e, {analyticsLocations: a} = (0, c.ZP)(o.Z.HEADER_BAR), r = s()(n.className, { [g.forumOrHome]: null != n.channelType && f.TPd.GUILD_THREADS_ONLY.has(n.channelType) || n.channelId === C.oC.GUILD_HOME });
    return (0, i.jsx)(c.Gt, {
        value: a,
        children: t ? (0, i.jsx)(A, {
            ...n,
            className: r
        }) : (0, i.jsx)(x, {
            ...n,
            className: r
        })
    });
}
R.Title = I.ZP.Title, R.Icon = I.ZP.Icon, R.Divider = I.ZP.Divider, R.Caret = I.ZP.Caret, t.Z = R;
