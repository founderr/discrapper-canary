n.d(t, {
    Z: function () {
        return v;
    },
    _: function () {
        return N;
    }
}),
    n(627341);
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(278074),
    o = n(442837),
    l = n(481060),
    u = n(951394),
    c = n(907040),
    d = n(210887),
    _ = n(314897),
    E = n(823379),
    f = n(51144),
    h = n(785717),
    p = n(837411),
    I = n(448197),
    m = n(698305),
    T = n(228168),
    S = n(185923),
    g = n(689938),
    A = n(374729);
let N = 1800,
    O = (e) => {
        let { emoji: t, username: n, sourceType: r, sourceDetails: i } = e,
            a = ':'.concat(t.name, ':');
        switch (r) {
            case T.n_.ACTIVITY:
                let s = g.Z.Messages.USER_PROFILE_REACTED_TO_ACTIVITY.format({ username: n });
                return '> -# *'.concat(s, '*\n').concat(a);
            case T.n_.AVATAR:
                let o = g.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format({ username: n });
                return '> -# *'.concat(o, '*\n').concat(a);
            case T.n_.STATUS:
                let l = g.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format({ username: n });
                return null != i ? '> -# *'.concat(l, '*').concat('\n > '.concat(i), '\n').concat(a) : '> -# *'.concat(l, '*\n').concat(a);
            default:
                (0, E.vE)(r);
        }
    },
    R = (e, t) =>
        (0, s.EQ)({
            interactionType: e,
            sourceType: t
        })
            .with(
                {
                    interactionType: T.P.REPLY,
                    sourceType: T.n_.AVATAR
                },
                () => g.Z.Messages.USER_PROFILE_REPLY_TO_AVATAR_A11Y_LABEL
            )
            .with(
                {
                    interactionType: T.P.REACT,
                    sourceType: T.n_.AVATAR
                },
                () => g.Z.Messages.USER_PROFILE_REACT_TO_AVATAR_A11Y_LABEL
            )
            .with(
                {
                    interactionType: T.P.REPLY,
                    sourceType: T.n_.STATUS
                },
                () => g.Z.Messages.USER_PROFILE_REPLY_TO_STATUS_A11Y_LABEL
            )
            .with(
                {
                    interactionType: T.P.REACT,
                    sourceType: T.n_.STATUS
                },
                () => g.Z.Messages.USER_PROFILE_REACT_TO_STATUS_A11Y_LABEL
            )
            .with(
                {
                    interactionType: T.P.REPLY,
                    sourceType: T.n_.ACTIVITY
                },
                () => g.Z.Messages.USER_PROFILE_REPLY_TO_ACTIVITY_A11Y_LABEL
            )
            .with(
                {
                    interactionType: T.P.REACT,
                    sourceType: T.n_.ACTIVITY
                },
                () => g.Z.Messages.USER_PROFILE_REACT_TO_ACTIVITY_A11Y_LABEL
            )
            .exhaustive();
function v(e) {
    let { user: t, channel: n, sourceType: i, sourceDetails: s, isVisible: E, isExpandable: v, onInteraction: C, setInteractionToastShown: y, setInteractionSent: L, setIsReplyInteraction: D, onClose: b } = e,
        { trackUserProfileAction: M } = (0, h.KZ)(),
        P = (0, o.e7)([d.Z], () => d.Z.theme),
        { sendReact: U, pressReact: w, pressReply: x } = (0, I.Q)(i),
        G = (0, o.e7)([_.default], () => _.default.getId() === t.id),
        k = (0, p.Z)(t.id);
    if (t.bot || G || !k) return null;
    let B = async (e) => {
        if (null == e) return;
        M({ action: U });
        let n = O({
            emoji: e,
            username: f.ZP.getName(t),
            sourceType: i,
            sourceDetails: s
        });
        D(!1), L(!1), y(!0);
        try {
            await (0, m.Z)({
                userId: t.id,
                content: n,
                location: 'UserProfileReactReplyBar',
                openChannel: !1,
                whenReady: !1
            });
        } catch (e) {}
        L(!0),
            setTimeout(() => {
                y(!1);
            }, N);
    };
    return (0, r.jsxs)(u.ZP, {
        className: a()(A.popover, {
            [A.visible]: E,
            [A.expandable]: v,
            [A.statusPopover]: i === T.n_.STATUS,
            [A.avatarPopover]: i === T.n_.AVATAR
        }),
        children: [
            (0, r.jsx)(l.TooltipContainer, {
                text: g.Z.Messages.USER_PROFILE_SEND_REACTION,
                delay: 0,
                'aria-label': !1,
                children: (0, r.jsx)(l.Popout, {
                    onRequestClose: () => {
                        null == C ||
                            C({
                                interactionType: null,
                                interactionSourceType: null
                            });
                    },
                    onRequestOpen: () => {
                        null == C ||
                            C({
                                interactionType: T.P.REACT,
                                interactionSourceType: i
                            });
                    },
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(l.ThemeProvider, {
                            theme: P,
                            children: (e) =>
                                (0, r.jsx)(c.Z, {
                                    guildId: null == n ? void 0 : n.guild_id,
                                    closePopout: t,
                                    onSelectEmoji: async (e, n) => {
                                        await B(e), n && (t(), null == b || b());
                                    },
                                    pickerIntention: S.Hz.PROFILE,
                                    channel: n,
                                    className: e,
                                    headerClassName: e,
                                    listHeaderClassName: e,
                                    categoryListClassName: e
                                })
                        });
                    },
                    position: 'left',
                    animation: l.Popout.Animation.NONE,
                    align: 'top',
                    children: (e) =>
                        (0, r.jsx)(u.zx, {
                            ...e,
                            onClick: (t) => {
                                M({ action: w }), e.onClick(t);
                            },
                            className: a()(A.button, A.left),
                            'aria-label': R(T.P.REACT, i),
                            children: (0, r.jsx)(l.ReactionIcon, {
                                size: 'xs',
                                className: A.icon
                            })
                        })
                })
            }),
            (0, r.jsx)(l.TooltipContainer, {
                text: g.Z.Messages.USER_PROFILE_REPLY,
                delay: 0,
                'aria-label': !1,
                children: (0, r.jsx)(u.zx, {
                    onClick: () => {
                        M({ action: x }),
                            null == C ||
                                C({
                                    interactionType: T.P.REPLY,
                                    interactionSourceType: i
                                });
                    },
                    className: a()(A.button, A.right),
                    'aria-label': R(T.P.REPLY, i),
                    children: (0, r.jsx)(l.ArrowAngleLeftUpIcon, {
                        size: 'xs',
                        className: A.icon
                    })
                })
            })
        ]
    });
}
