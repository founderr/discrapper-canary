n.d(t, {
    T: function () {
        return x;
    }
}),
    n(47120),
    n(653041);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(392711),
    o = n(442837),
    c = n(475179),
    u = n(358221),
    d = n(306680),
    h = n(944486),
    p = n(111583),
    m = n(459273),
    _ = n(880831),
    f = n(774168),
    E = n(871499),
    g = n(981631),
    C = n(689938);
function I(e) {
    let t = (0, o.e7)([p.Z], () => !(0, r.isEmpty)(p.Z.getTypingUsers(e)), [e]),
        n = (0, o.e7)([h.Z], () => h.Z.getVoiceChannelId() === e, [e]),
        { unreadCount: i, mentionCount: s } = (0, o.cj)(
            [d.ZP],
            () => ({
                unreadCount: d.ZP.getUnreadCount(e),
                mentionCount: d.ZP.getMentionCount(e)
            }),
            [e]
        );
    return {
        unreadCount: i,
        mentionCount: s,
        voiceChannelIsSelected: n,
        isTyping: t
    };
}
function T(e) {
    let { className: t, channelId: n } = e,
        { unreadCount: s, mentionCount: a, isTyping: l, voiceChannelIsSelected: r } = I(n);
    return (0, i.jsx)(f.Z, {
        className: t,
        unreadCount: s,
        mentionCount: a,
        isTyping: l,
        canBadge: r
    });
}
function x(e) {
    let t,
        { channelId: n, className: a, showingClassName: r, onClick: d, inPopout: h, showRequestToSpeakSidebar: p, toggleRequestToSpeakSidebar: f, ...x } = e,
        { disabled: v } = x,
        S = s.useRef(null),
        N = (0, o.e7)([u.Z], () => u.Z.getChatOpen(n), [n]),
        {
            isShowing: A,
            unreadCount: Z,
            mentionCount: M
        } = (function (e) {
            let { unreadCount: t, mentionCount: n, isTyping: i } = I(e),
                [a, l] = s.useState(!1);
            return (
                s.useEffect(() => {
                    l(t > 0);
                    let e = setTimeout(() => {
                        l(!1);
                    }, _.z);
                    return () => {
                        clearTimeout(e), l(!1);
                    };
                }, [t]),
                {
                    isShowing: a || n > 0 || i,
                    unreadCount: t,
                    mentionCount: n
                }
            );
        })(n),
        b = s.useCallback(() => {
            null == d || d(), !N && p && (null == f || f()), c.Z.updateChatOpen(n, !N);
        }, [n, N, d, p, f]),
        R = s.useCallback(
            (e) => {
                let { className: t } = e;
                return (0, i.jsx)(T, {
                    className: t,
                    channelId: n
                });
            },
            [n]
        ),
        L = s.useCallback(() => {
            var e;
            null === (e = S.current) || void 0 === e || e.focus();
        }, []);
    (0, m.yp)({
        event: g.CkL.FOCUS_CHAT_BUTTON,
        handler: v ? null : L
    });
    let [j, P] = s.useState(!1),
        O = s.useCallback(() => {
            h && P(!0);
        }, [h]);
    (0, m.yp)({
        event: g.CkL.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
        handler: O
    }),
        s.useEffect(() => {
            let e;
            return (
                j &&
                    (e = setTimeout(() => {
                        P(!1);
                    }, 3000)),
                () => {
                    clearTimeout(e);
                }
            );
        }, [j]);
    let y = [(t = h && v ? C.Z.Messages.TEXT_IN_VOICE_POPOUT_DISABLED : N ? C.Z.Messages.VIDEO_CALL_HIDE_CHAT : C.Z.Messages.VIDEO_CALL_SHOW_CHAT)];
    return (
        M > 0 && y.push(C.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({ mentionCount: M })),
        Z > 0 && y.push(C.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD),
        (0, i.jsx)(E.Z, {
            buttonRef: S,
            onClick: b,
            label: t,
            'aria-label': y.join(', '),
            iconComponent: R,
            tooltipPosition: 'bottom',
            wrapperClassName: l()(a, null != r && { [r]: A }),
            forceTooltipOpen: j,
            ...x
        })
    );
}
