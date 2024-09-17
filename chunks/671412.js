n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(899007),
    u = n(825801),
    c = n(215105),
    d = n(429974),
    _ = n(228168),
    E = n(8621);
function f(e) {
    let { user: t, displayProfile: n, guildId: a, channelId: l, profileType: f, interactionType: h, interactionSource: p, onInteraction: I, setInteractionToastShown: m, setInteractionTypeSent: T, children: S } = e,
        g = f === _.y0.FULL_SIZE ? (0, d.z)(t.id, null == n ? void 0 : n.guildId) : void 0,
        A = i.useRef(null),
        N = i.useRef(null),
        O = h === _.P.REPLY && p === _.n_.AVATAR,
        [R, v] = i.useState(!1),
        C = () => {
            v(!0);
        },
        y = () => {
            v(!1);
        },
        L = () => {
            var e;
            null === (e = N.current) || void 0 === e || e.focus();
        },
        D = s()(E.avatar, {
            [E.hoisted]: p === _.n_.AVATAR || p === _.n_.STATUS,
            [E.biteSize]: f === _.y0.BITE_SIZE,
            [E.fullSize]: f === _.y0.FULL_SIZE,
            [E.panel]: f === _.y0.PANEL
        });
    return (0, r.jsxs)('div', {
        className: D,
        onMouseOver: C,
        onMouseLeave: y,
        onFocus: (e) => {
            (e.target === A.current || e.target === N.current) && C();
        },
        onBlur: (e) => {
            e.relatedTarget !== A.current && e.relatedTarget !== N.current && y();
        },
        children: [
            (0, r.jsx)(o.Popout, {
                renderPopout: (e) => {
                    let { setPopoutRef: n } = e;
                    return (0, r.jsx)(c.Z, {
                        user: t,
                        guildId: a,
                        channelId: l,
                        profileType: f,
                        sourceType: _.n_.AVATAR,
                        modalKey: g,
                        setPopoutRef: n,
                        onInteraction: I,
                        setInteractionToastShown: m,
                        setInteractionTypeSent: T,
                        onClose: L
                    });
                },
                onRequestClose: () =>
                    null == I
                        ? void 0
                        : I({
                              interactionType: null,
                              interactionSourceType: null
                          }),
                animationPosition: 'top',
                position: 'bottom',
                align: f === _.y0.FULL_SIZE ? 'center' : 'left',
                shouldShow: O,
                children: S
            }),
            (0, r.jsx)(u.ZP, {
                user: t,
                sourceType: _.n_.AVATAR,
                isVisible: R && null == h && null == p,
                isExpandable: !1,
                onInteraction: I,
                setInteractionToastShown: m,
                setInteractionTypeSent: T,
                reactButtonRef: A,
                replyButtonRef: N,
                onClose: y
            })
        ]
    });
}
function h(e) {
    let { animateOnHover: t, onOpenProfile: n, ...i } = e;
    return (0, r.jsx)(f, {
        ...i,
        children: () =>
            (0, r.jsx)(l.Z, {
                animateOnHover: t,
                onOpenProfile: n,
                className: E.withReactReply,
                ...i
            })
    });
}
