n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(214135),
    u = n(510659),
    c = n(899007),
    d = n(511341),
    _ = n(825801),
    E = n(215105),
    f = n(429974),
    h = n(228168),
    p = n(8621);
function I(e) {
    let { user: t, displayProfile: n, guildId: a, channelId: c, profileType: I, children: m } = e,
        { interactionType: T, interactionSourceType: S, resetInteraction: g } = (0, u.X)(),
        A = I === h.y0.FULL_SIZE ? (0, f.z)(t.id, null == n ? void 0 : n.guildId) : void 0,
        N = i.useRef(null),
        O = i.useRef(null),
        R = S === h.n_.AVATAR && T === h.P.REACT,
        v = S === h.n_.AVATAR && T === h.P.REPLY,
        C = R || v,
        [y, L] = i.useState(!1),
        D = () => {
            L(!0);
        },
        b = () => {
            L(!1);
        },
        M = s()(p.avatar, {
            [p.hoisted]: S === h.n_.AVATAR || S === h.n_.STATUS,
            [p.biteSize]: I === h.y0.BITE_SIZE,
            [p.fullSize]: I === h.y0.FULL_SIZE,
            [p.panel]: I === h.y0.PANEL
        });
    return (0, r.jsxs)('div', {
        className: M,
        onMouseOver: D,
        onMouseLeave: b,
        onFocus: (e) => {
            (e.target === N.current || e.target === O.current) && D();
        },
        onBlur: (e) => {
            e.relatedTarget !== N.current && e.relatedTarget !== O.current && b();
        },
        children: [
            (0, r.jsx)(o.Popout, {
                renderPopout: (e) => {
                    let { setPopoutRef: n } = e,
                        i = R ? d.Z : E.Z;
                    return (0, r.jsx)(i, {
                        user: t,
                        guildId: a,
                        channelId: c,
                        profileType: I,
                        sourceType: h.n_.AVATAR,
                        modalKey: A,
                        setPopoutRef: n
                    });
                },
                onRequestClose: g,
                shouldShow: C,
                ...(0, l.Z)(T, I),
                children: m
            }),
            (0, r.jsx)(_.ZP, {
                user: t,
                sourceType: h.n_.AVATAR,
                isVisible: y && !C,
                isExpandable: !1,
                reactButtonRef: N,
                replyButtonRef: O
            })
        ]
    });
}
function m(e) {
    let { animateOnHover: t, onOpenProfile: n, ...i } = e;
    return (0, r.jsx)(I, {
        ...i,
        children: () =>
            (0, r.jsx)(c.Z, {
                animateOnHover: t,
                onOpenProfile: n,
                className: p.withReactReply,
                ...i
            })
    });
}
