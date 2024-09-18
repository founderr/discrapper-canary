n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(214135),
    u = n(899007),
    c = n(511341),
    d = n(825801),
    _ = n(215105),
    E = n(429974),
    f = n(228168),
    h = n(8621);
function p(e) {
    let { user: t, displayProfile: n, guildId: a, channelId: u, profileType: p, interactionType: I, interactionSource: m, onInteraction: T, setInteractionToastShown: S, setInteractionTypeSent: g, children: A } = e,
        N = p === f.y0.FULL_SIZE ? (0, E.z)(t.id, null == n ? void 0 : n.guildId) : void 0,
        O = i.useRef(null),
        R = i.useRef(null),
        v = m === f.n_.AVATAR && I === f.P.REACT,
        C = m === f.n_.AVATAR && I === f.P.REPLY,
        y = v || C,
        [L, D] = i.useState(!1),
        b = () => {
            D(!0);
        },
        M = () => {
            D(!1);
        },
        P = s()(h.avatar, {
            [h.hoisted]: m === f.n_.AVATAR || m === f.n_.STATUS,
            [h.biteSize]: p === f.y0.BITE_SIZE,
            [h.fullSize]: p === f.y0.FULL_SIZE,
            [h.panel]: p === f.y0.PANEL
        });
    return (0, r.jsxs)('div', {
        className: P,
        onMouseOver: b,
        onMouseLeave: M,
        onFocus: (e) => {
            (e.target === O.current || e.target === R.current) && b();
        },
        onBlur: (e) => {
            e.relatedTarget !== O.current && e.relatedTarget !== R.current && M();
        },
        children: [
            (0, r.jsx)(o.Popout, {
                renderPopout: (e) => {
                    let { setPopoutRef: n } = e,
                        i = v ? c.Z : _.Z;
                    return (0, r.jsx)(i, {
                        user: t,
                        guildId: a,
                        channelId: u,
                        profileType: p,
                        sourceType: f.n_.AVATAR,
                        modalKey: N,
                        setPopoutRef: n,
                        onInteraction: T,
                        setInteractionToastShown: S,
                        setInteractionTypeSent: g
                    });
                },
                onRequestClose: () =>
                    null == T
                        ? void 0
                        : T({
                              interactionType: null,
                              interactionSourceType: null
                          }),
                shouldShow: y,
                ...(0, l.Z)(I, p),
                children: A
            }),
            (0, r.jsx)(d.ZP, {
                user: t,
                sourceType: f.n_.AVATAR,
                isVisible: L && !y,
                isExpandable: !1,
                onInteraction: T,
                reactButtonRef: O,
                replyButtonRef: R
            })
        ]
    });
}
function I(e) {
    let { animateOnHover: t, onOpenProfile: n, ...i } = e;
    return (0, r.jsx)(p, {
        ...i,
        children: () =>
            (0, r.jsx)(u.Z, {
                animateOnHover: t,
                onOpenProfile: n,
                className: h.withReactReply,
                ...i
            })
    });
}
