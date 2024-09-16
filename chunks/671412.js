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
    let { user: t, displayProfile: n, guildId: a, channelId: l, profileType: f, isInteractionSource: h, onInteraction: p, showReplyPopout: I = !1, setInteractionToastShown: m, setInteractionSent: T, setIsReplyInteraction: S, children: g } = e,
        A = f === _.y0.FULL_SIZE ? (0, d.z)(t.id, null == n ? void 0 : n.guildId) : void 0,
        N = i.useRef(null),
        O = i.useRef(null),
        [R, v] = i.useState(!1),
        C = () => {
            v(!0);
        },
        y = () => {
            v(!1);
        },
        L = s()(E.avatar, {
            [E.hoisted]: h,
            [E.biteSize]: f === _.y0.BITE_SIZE,
            [E.fullSize]: f === _.y0.FULL_SIZE,
            [E.panel]: f === _.y0.PANEL
        });
    return (0, r.jsxs)('div', {
        className: L,
        onMouseOver: C,
        onMouseLeave: y,
        onFocus: (e) => {
            (e.target === N.current || e.target === O.current) && C();
        },
        onBlur: (e) => {
            e.relatedTarget !== N.current && e.relatedTarget !== O.current && y();
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
                        modalKey: A,
                        setPopoutRef: n,
                        onInteraction: p,
                        setInteractionToastShown: m,
                        setInteractionSent: T,
                        setIsReplyInteraction: S,
                        onClose: y
                    });
                },
                onRequestClose: () =>
                    null == p
                        ? void 0
                        : p({
                              interactionType: null,
                              interactionSourceType: null
                          }),
                animationPosition: 'top',
                position: 'bottom',
                align: f === _.y0.FULL_SIZE ? 'center' : 'left',
                shouldShow: I,
                children: g
            }),
            !I &&
                (0, r.jsx)(u.ZP, {
                    user: t,
                    sourceType: _.n_.AVATAR,
                    isVisible: R,
                    isExpandable: !1,
                    onInteraction: p,
                    setInteractionToastShown: m,
                    setInteractionSent: T,
                    setIsReplyInteraction: S,
                    reactButtonRef: N,
                    replyButtonRef: O,
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
