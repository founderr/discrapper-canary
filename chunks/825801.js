n.d(t, {
    Z: function () {
        return N;
    },
    _: function () {
        return S;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(951394),
    u = n(907040),
    c = n(314897),
    d = n(823379),
    _ = n(51144),
    E = n(785717),
    f = n(505737),
    h = n(790286),
    p = n(485216),
    I = n(228168),
    m = n(185923),
    T = n(689938),
    g = n(951768);
let S = 1200,
    A = (e) => {
        let { emoji: t, username: n, sourceType: r, sourceDetails: i } = e,
            a = ':'.concat(t.name, ':');
        switch (r) {
            case I.n_.ACTIVITY:
                let s = T.Z.Messages.USER_PROFILE_REACTED_TO_ACTIVITY.format({ username: n });
                return '> -# *'.concat(s, '*\n').concat(a);
            case I.n_.AVATAR:
                let o = T.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format({ username: n });
                return '> -# *'.concat(o, '*\n').concat(a);
            case I.n_.STATUS:
                let l = T.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format({ username: n });
                return null != i ? '> -# *'.concat(l, '*').concat('\n > '.concat(i), '\n').concat(a) : '> -# *'.concat(l, '*\n').concat(a);
            default:
                (0, d.vE)(r);
        }
    };
function N(e) {
    let { user: t, channel: n, sourceType: i, sourceDetails: d, isVisible: N, isExpandable: O, onInteraction: R, setInteractionToastShown: v, setInteractionSent: C, setIsReplyInteraction: y, onClose: D } = e,
        { trackUserProfileAction: L } = (0, E.KZ)(),
        { sendReact: b, pressReact: M, pressReply: P } = (0, h.Q)(i),
        U = (0, s.e7)([c.default], () => c.default.getId() === t.id),
        w = (0, f.Z)(t.id);
    if (t.bot || U || !w) return null;
    let x = async (e) => {
        if (null == e) return;
        L({ action: b });
        let n = A({
            emoji: e,
            username: _.ZP.getName(t),
            sourceType: i,
            sourceDetails: d
        });
        y(!1),
            C(!1),
            v(!0),
            await (0, p.Z)({
                userId: t.id,
                content: n,
                location: 'UserProfileReactReplyBar',
                openChannel: !1,
                whenReady: !1
            }),
            C(!0),
            setTimeout(() => {
                v(!1);
            }, S);
    };
    return (0, r.jsxs)(l.ZP, {
        className: a()(g.popover, {
            [g.visible]: N,
            [g.expandable]: O,
            [g.statusPopover]: i === I.n_.STATUS,
            [g.avatarPopover]: i === I.n_.AVATAR
        }),
        children: [
            (0, r.jsx)(o.TooltipContainer, {
                text: T.Z.Messages.USER_PROFILE_SEND_REACTION,
                shouldShow: N,
                delay: 0,
                'aria-label': !1,
                children: (0, r.jsx)(o.Popout, {
                    onRequestClose: () => {
                        null == R ||
                            R({
                                interactionType: null,
                                interactionSourceType: null
                            });
                    },
                    onRequestOpen: () => {
                        null == R ||
                            R({
                                interactionType: I.P.REACT,
                                interactionSourceType: i
                            });
                    },
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(u.Z, {
                            guildId: null == n ? void 0 : n.guild_id,
                            closePopout: t,
                            onSelectEmoji: (e, n) => {
                                x(e), n && (t(), null == D || D());
                            },
                            pickerIntention: m.Hz.PROFILE,
                            channel: n
                        });
                    },
                    position: 'left',
                    animation: o.Popout.Animation.NONE,
                    align: 'top',
                    children: (e) =>
                        (0, r.jsx)(l.zx, {
                            ...e,
                            onClick: (t) => {
                                L({ action: M }), e.onClick(t);
                            },
                            className: a()(g.button, g.left),
                            'aria-label': T.Z.Messages.USER_PROFILE_SEND_REACTION,
                            children: (0, r.jsx)(o.ReactionIcon, {
                                size: 'xs',
                                className: g.icon
                            })
                        })
                })
            }),
            (0, r.jsx)(o.TooltipContainer, {
                text: T.Z.Messages.USER_PROFILE_REPLY,
                shouldShow: N,
                delay: 0,
                'aria-label': !1,
                children: (0, r.jsx)(l.zx, {
                    onClick: () => {
                        L({ action: P }),
                            null == R ||
                                R({
                                    interactionType: I.P.REPLY,
                                    interactionSourceType: i
                                });
                    },
                    className: a()(g.button, g.right),
                    'aria-label': T.Z.Messages.USER_PROFILE_REPLY,
                    children: (0, r.jsx)(o.ArrowAngleLeftUpIcon, {
                        size: 'xs',
                        className: g.icon
                    })
                })
            })
        ]
    });
}
