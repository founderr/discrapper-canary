n.d(t, {
    Z: function () {
        return b;
    },
    b: function () {
        return T;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(866442),
    l = n(442837),
    u = n(692547),
    c = n(481060),
    d = n(220082),
    f = n(583405),
    _ = n(313201),
    h = n(279745),
    p = n(695346),
    m = n(451478),
    g = n(768581),
    E = n(28660),
    v = n(462997),
    I = n(520309);
let S = (e) => {
    let { size: t, stroke: n } = (0, c.getAvatarSpecs)(e);
    return t / 2 + n;
};
function T(e) {
    var t;
    let { user: n, displayProfile: a, guildId: v, pendingBanner: T, children: b, className: y, avatarSize: A, avatarOffsetX: N, avatarOffsetY: C, bannerWidth: R, bannerHeight: O, themePadding: D, animateOnHover: L = !1 } = e,
        x = (0, _.Dt)(),
        [w, M] = i.useState(!1),
        P = (0, l.e7)([m.Z], () => m.Z.isFocused()),
        k = p.QK.getSetting(),
        { bannerSrc: U, status: G } = (0, E.Z)({
            displayProfile: a,
            pendingBanner: T,
            size: R,
            canAnimate: L || !k ? w : P
        }),
        B = (0, c.useToken)(u.Z.unsafe_rawColors.PRIMARY_800).hex(),
        Z = n.getAvatarURL(v, (0, c.getAvatarSize)(A)),
        F = (0, o._i)((0, d.ZP)(Z, B, !1)),
        V = (0, f.Z)(null !== (t = null == a ? void 0 : a.primaryColor) && void 0 !== t ? t : F).hex,
        H = S(A),
        j = O - C - D;
    return (0, r.jsxs)('svg', {
        className: I.mask,
        viewBox: '0 0 '.concat(R, ' ').concat(O),
        style: {
            minWidth: R,
            minHeight: O
        },
        children: [
            (0, r.jsxs)('mask', {
                id: x,
                children: [
                    (0, r.jsx)('rect', {
                        fill: 'white',
                        x: '0',
                        y: '0',
                        width: '100%',
                        height: '100%'
                    }),
                    (0, r.jsx)('circle', {
                        fill: 'black',
                        cx: H + N - D,
                        cy: j,
                        r: H
                    })
                ]
            }),
            (0, r.jsxs)('foreignObject', {
                x: '0',
                y: '0',
                width: '100%',
                height: '100%',
                overflow: 'visible',
                mask: 'url(#'.concat(x, ')'),
                children: [
                    b,
                    (0, r.jsxs)('div', {
                        className: s()(I.banner, y),
                        onMouseMove: () => M(!0),
                        onMouseLeave: () => M(!1),
                        style: {
                            height: O,
                            minHeight: O,
                            backgroundImage: null != U ? 'url('.concat(U, ')') : void 0,
                            backgroundColor: 'COMPLETE' !== G ? u.Z.unsafe_rawColors.PRIMARY_800.css : V
                        },
                        children: [!k && (0, g.F8)(U) && (0, r.jsx)(h.Z, { className: I.gifTag }), b]
                    })
                ]
            })
        ]
    });
}
function b(e) {
    let { profileType: t, displayProfile: n, canUsePremiumProfileCustomization: i = !1, ...a } = e,
        s = v.q[t],
        o = i || (null == n ? void 0 : n.canUsePremiumProfileCustomization) || !1;
    return (0, r.jsx)(T, {
        ...a,
        ...s,
        displayProfile: n,
        themePadding: o ? s.themePadding : 0
    });
}
