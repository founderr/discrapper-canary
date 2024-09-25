n.d(t, {
    Z: function () {
        return N;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    u = n(367907),
    c = n(739566),
    d = n(623292),
    _ = n(703656),
    E = n(665906),
    f = n(488131),
    h = n(375954),
    p = n(962293),
    m = n(981631),
    I = n(689938),
    T = n(486522);
let g = 2,
    S = 10;
function A(e, t) {
    let n = e.id,
        r = t.id;
    return (0, s.e7)(
        [h.Z],
        () => {
            let e = r;
            for (let t = 0; t < S; t++) {
                let r = h.Z.getMessage(n, e);
                if ((null == r ? void 0 : r.type) !== m.uaV.REPLY || null == r.messageReference) return t;
                e = r.messageReference.message_id;
            }
            return S;
        },
        [n, r]
    );
}
function v(e) {
    let { channel: t, message: n, replyChainLength: a } = e;
    function o() {
        (0, d.A6)(t.id), (0, f.R6)(t, n, 'Reply Chain Nudge');
    }
    return (
        i.useEffect(() => {
            (0, u.yw)(m.rMx.THREAD_NUDGE_SHOWN, {
                type: 'Reply Chain ('.concat(g + 1, ')'),
                reply_chain_length: a + 1,
                channel_id: t.id,
                guild_id: t.guild_id
            });
        }, [t]),
        (0, r.jsxs)(l.Clickable, {
            onClick: o,
            className: T.threadSuggestionBar,
            focusProps: {
                offset: {
                    right: -4,
                    left: -4
                }
            },
            children: [
                (0, r.jsx)(l.Text, {
                    color: 'header-secondary',
                    className: T.text,
                    variant: 'text-sm/normal',
                    children: I.Z.Messages.THREAD_REPLY_SUGGESTION.format({ count: Math.min(S, a + 1) })
                }),
                (0, r.jsx)(l.Text, {
                    color: 'text-link',
                    className: T.createThreadButton,
                    variant: 'text-sm/semibold',
                    children: I.Z.Messages.CREATE_THREAD
                })
            ]
        })
    );
}
function N(e) {
    let { reply: t, chatInputType: n } = e,
        { channel: i, message: a, shouldMention: s, showMentionToggle: u } = t,
        { nick: f, colorString: h, colorRoleName: S } = (0, c.ZP)(a),
        N = A(i, a),
        O = (0, E.NE)(i, a),
        R = n.showThreadPromptOnReply && N >= g && O,
        C = () => (0, _.uL)(m.Z5c.CHANNEL(i.getGuildId(), i.id, a.id));
    function y(e) {
        e.stopPropagation(), (0, d.qx)(i.id, !s);
    }
    function b(e) {
        e.stopPropagation(), (0, d.A6)(i.id);
    }
    return (0, r.jsx)('div', {
        className: T.clipContainer,
        children: (0, r.jsxs)('div', {
            className: T.container,
            children: [
                (0, r.jsxs)('div', {
                    className: T.replyBar,
                    children: [
                        (0, r.jsx)(l.Clickable, {
                            onClick: C,
                            focusProps: {
                                offset: {
                                    top: -8,
                                    right: -4,
                                    bottom: -8,
                                    left: -4
                                }
                            },
                            children: (0, r.jsx)(l.Text, {
                                color: 'header-secondary',
                                className: o()(T.text, T.replyLabel),
                                variant: 'text-sm/normal',
                                children: I.Z.Messages.REPLYING_TO.format({
                                    userHook: (e, t) =>
                                        (0, r.jsx)(
                                            l.NameWithRole,
                                            {
                                                className: T.name,
                                                name: f,
                                                color: h,
                                                roleName: S
                                            },
                                            t
                                        )
                                })
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: T.actions,
                            children: [
                                u &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(l.Tooltip, {
                                                text: s ? I.Z.Messages.REPLY_MENTION_ON_TOOLTIP : I.Z.Messages.REPLY_MENTION_OFF_TOOLTIP,
                                                children: (e) => {
                                                    let { onMouseEnter: t, onMouseLeave: n, onFocus: i, onBlur: a } = e;
                                                    return (0, r.jsx)(l.Clickable, {
                                                        role: 'switch',
                                                        'aria-checked': s,
                                                        onClick: y,
                                                        onMouseEnter: t,
                                                        onMouseLeave: n,
                                                        onFocus: i,
                                                        onBlur: a,
                                                        children: (0, r.jsxs)(l.Text, {
                                                            variant: 'text-sm/bold',
                                                            color: s ? 'text-link' : 'text-muted',
                                                            className: T.mentionButton,
                                                            children: [
                                                                (0, r.jsx)(l.AtIcon, {
                                                                    size: 'md',
                                                                    color: 'currentColor',
                                                                    'aria-label': I.Z.Messages.MENTION,
                                                                    className: T.mentionIcon
                                                                }),
                                                                s ? I.Z.Messages.REPLY_MENTION_ON : I.Z.Messages.REPLY_MENTION_OFF
                                                            ]
                                                        })
                                                    });
                                                }
                                            }),
                                            (0, r.jsx)('div', {
                                                className: T.separator,
                                                'aria-hidden': !0
                                            })
                                        ]
                                    }),
                                (0, r.jsx)(p.B, { onClick: b })
                            ]
                        })
                    ]
                }),
                R &&
                    (0, r.jsx)(v, {
                        channel: i,
                        message: a,
                        replyChainLength: N
                    })
            ]
        })
    });
}
