n.d(t, {
    Z: function () {
        return N;
    },
    b: function () {
        return v;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(866442),
    u = n(442837),
    c = n(692547),
    d = n(481060),
    _ = n(220082),
    E = n(583405),
    f = n(313201),
    h = n(279745),
    p = n(695346),
    m = n(451478),
    I = n(768581),
    T = n(28660),
    g = n(462997),
    S = n(431405);
let A = (e) => {
    let { size: t, stroke: n } = (0, d.getAvatarSpecs)(e);
    return t / 2 + n;
};
function v(e) {
    var t;
    let { user: n, displayProfile: r, guildId: o, pendingBanner: g, children: v, className: N, avatarSize: O, avatarOffsetX: R, avatarOffsetY: C, bannerWidth: y, bannerHeight: b, themePadding: L, animateOnHover: D = !1 } = e,
        M = (0, f.Dt)(),
        [P, U] = a.useState(!1),
        w = (0, u.e7)([m.Z], () => m.Z.isFocused()),
        x = p.QK.getSetting(),
        { bannerSrc: G, status: k } = (0, T.Z)({
            displayProfile: r,
            pendingBanner: g,
            size: y,
            canAnimate: D || !x ? P : w
        }),
        B = (0, d.useToken)(c.Z.unsafe_rawColors.PRIMARY_800).hex(),
        F = n.getAvatarURL(o, (0, d.getAvatarSize)(O)),
        Z = (0, l._i)((0, _.ZP)(F, B, !1)),
        V = (0, E.Z)(null !== (t = null == r ? void 0 : r.primaryColor) && void 0 !== t ? t : Z).hex,
        H = A(O),
        Y = H + R - L,
        j = b - C - L;
    return (0, i.jsxs)('svg', {
        className: S.mask,
        viewBox: '0 0 '.concat(y, ' ').concat(b),
        style: {
            minWidth: y,
            minHeight: b
        },
        children: [
            (0, i.jsxs)('mask', {
                id: M,
                children: [
                    (0, i.jsx)('rect', {
                        fill: 'white',
                        x: '0',
                        y: '0',
                        width: '100%',
                        height: '100%'
                    }),
                    (0, i.jsx)('circle', {
                        fill: 'black',
                        cx: Y,
                        cy: j,
                        r: H
                    })
                ]
            }),
            (0, i.jsxs)('foreignObject', {
                x: '0',
                y: '0',
                width: '100%',
                height: '100%',
                overflow: 'visible',
                mask: 'url(#'.concat(M, ')'),
                children: [
                    v,
                    (0, i.jsxs)('div', {
                        className: s()(S.banner, N),
                        onMouseMove: () => U(!0),
                        onMouseLeave: () => U(!1),
                        style: {
                            height: b,
                            minHeight: b,
                            backgroundImage: null != G ? 'url('.concat(G, ')') : void 0,
                            backgroundColor: 'COMPLETE' !== k ? c.Z.unsafe_rawColors.PRIMARY_800.css : V
                        },
                        children: [!x && (0, I.F8)(G) && (0, i.jsx)(h.Z, { className: S.gifTag }), v]
                    })
                ]
            })
        ]
    });
}
function N(e) {
    let { profileType: t, displayProfile: n, canUsePremiumProfileCustomization: r = !1, ...a } = e,
        o = g.q[t],
        s = r || (null == n ? void 0 : n.canUsePremiumProfileCustomization) || !1;
    return (0, i.jsx)(v, {
        ...a,
        ...o,
        displayProfile: n,
        themePadding: s ? o.themePadding : 0
    });
}
