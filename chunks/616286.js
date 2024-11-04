n.d(t, {
    T: function () {
        return E;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(392711),
    o = n(442837),
    c = n(475179),
    d = n(358221),
    u = n(306680),
    h = n(944486),
    p = n(111583),
    m = n(459273),
    f = n(880831),
    g = n(774168),
    C = n(871499),
    x = n(981631),
    v = n(388032);
function _(e) {
    let t = (0, o.e7)([p.Z], () => !(0, s.isEmpty)(p.Z.getTypingUsers(e)), [e]),
        n = (0, o.e7)([h.Z], () => h.Z.getVoiceChannelId() === e, [e]),
        { unreadCount: i, mentionCount: l } = (0, o.cj)(
            [u.ZP],
            () => ({
                unreadCount: u.ZP.getUnreadCount(e),
                mentionCount: u.ZP.getMentionCount(e)
            }),
            [e]
        );
    return {
        unreadCount: i,
        mentionCount: l,
        voiceChannelIsSelected: n,
        isTyping: t
    };
}
function I(e) {
    let { className: t, channelId: n } = e,
        { unreadCount: l, mentionCount: a, isTyping: r, voiceChannelIsSelected: s } = _(n);
    return (0, i.jsx)(g.Z, {
        className: t,
        unreadCount: l,
        mentionCount: a,
        isTyping: r,
        canBadge: s
    });
}
function E(e) {
    let t,
        { channelId: n, className: a, showingClassName: s, onClick: u, inPopout: h, showRequestToSpeakSidebar: p, toggleRequestToSpeakSidebar: g, ...E } = e,
        { disabled: b } = E,
        N = l.useRef(null),
        Z = (0, o.e7)([d.Z], () => d.Z.getChatOpen(n), [n]),
        {
            isShowing: T,
            unreadCount: S,
            mentionCount: j
        } = (function (e) {
            let { unreadCount: t, mentionCount: n, isTyping: i } = _(e),
                [a, r] = l.useState(!1);
            return (
                l.useEffect(() => {
                    r(t > 0);
                    let e = setTimeout(() => {
                        r(!1);
                    }, f.z);
                    return () => {
                        clearTimeout(e), r(!1);
                    };
                }, [t]),
                {
                    isShowing: a || n > 0 || i,
                    unreadCount: t,
                    mentionCount: n
                }
            );
        })(n),
        A = l.useCallback(() => {
            null == u || u(), !Z && p && (null == g || g()), c.Z.updateChatOpen(n, !Z);
        }, [n, Z, u, p, g]),
        y = l.useCallback(
            (e) => {
                let { className: t } = e;
                return (0, i.jsx)(I, {
                    className: t,
                    channelId: n
                });
            },
            [n]
        ),
        P = l.useCallback(() => {
            var e;
            null === (e = N.current) || void 0 === e || e.focus();
        }, []);
    (0, m.yp)({
        event: x.CkL.FOCUS_CHAT_BUTTON,
        handler: b ? null : P
    });
    let [M, R] = l.useState(!1),
        L = l.useCallback(() => {
            h && R(!0);
        }, [h]);
    (0, m.yp)({
        event: x.CkL.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
        handler: L
    }),
        l.useEffect(() => {
            let e;
            return (
                M &&
                    (e = setTimeout(() => {
                        R(!1);
                    }, 3000)),
                () => {
                    clearTimeout(e);
                }
            );
        }, [M]);
    let k = [(t = h && b ? v.intl.string(v.t.DPgc5u) : Z ? v.intl.string(v.t.nthdxM) : v.intl.string(v.t['5KxXrK']))];
    return (
        j > 0 && k.push(v.intl.formatToPlainString(v.t['3l1GOz'], { mentionCount: j })),
        S > 0 && k.push(v.intl.string(v.t.x5zAGR)),
        (0, i.jsx)(C.Z, {
            buttonRef: N,
            onClick: A,
            label: t,
            'aria-label': k.join(', '),
            iconComponent: y,
            tooltipPosition: 'bottom',
            wrapperClassName: r()(a, null != s && { [s]: T }),
            forceTooltipOpen: M,
            ...E
        })
    );
}
