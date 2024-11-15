n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(367907),
    c = n(739566),
    d = n(623292),
    f = n(703656),
    _ = n(665906),
    p = n(488131),
    h = n(375954),
    m = n(962293),
    g = n(981631),
    E = n(388032),
    v = n(486522);
function b(e) {
    let { channel: t, message: n, replyChainLength: a } = e;
    return (
        i.useEffect(() => {
            (0, u.yw)(g.rMx.THREAD_NUDGE_SHOWN, {
                type: 'Reply Chain ('.concat(3, ')'),
                reply_chain_length: a + 1,
                channel_id: t.id,
                guild_id: t.guild_id
            });
        }, [t]),
        (0, r.jsxs)(l.Clickable, {
            onClick: function () {
                (0, d.A6)(t.id), (0, p.R6)(t, n, 'Reply Chain Nudge');
            },
            className: v.threadSuggestionBar,
            focusProps: {
                offset: {
                    right: -4,
                    left: -4
                }
            },
            children: [
                (0, r.jsx)(l.Text, {
                    color: 'header-secondary',
                    className: v.text,
                    variant: 'text-sm/normal',
                    children: E.intl.format(E.t.B3V0FB, { count: Math.min(10, a + 1) })
                }),
                (0, r.jsx)(l.Text, {
                    color: 'text-link',
                    className: v.createThreadButton,
                    variant: 'text-sm/semibold',
                    children: E.intl.string(E.t.rBIGBA)
                })
            ]
        })
    );
}
function I(e) {
    let { reply: t, chatInputType: n } = e,
        { channel: i, message: a, shouldMention: u, showMentionToggle: p } = t,
        { nick: I, colorString: S, colorRoleName: T } = (0, c.ZP)(a),
        y = (function (e, t) {
            let n = e.id,
                r = t.id;
            return (0, o.e7)(
                [h.Z],
                () => {
                    let e = r;
                    for (let t = 0; t < 10; t++) {
                        let r = h.Z.getMessage(n, e);
                        if ((null == r ? void 0 : r.type) !== g.uaV.REPLY || null == r.messageReference) return t;
                        e = r.messageReference.message_id;
                    }
                    return 10;
                },
                [n, r]
            );
        })(i, a),
        A = (0, _.NE)(i, a),
        N = n.showThreadPromptOnReply && y >= 2 && A;
    function C(e) {
        e.stopPropagation(), (0, d.qx)(i.id, !u);
    }
    return (0, r.jsx)('div', {
        className: v.clipContainer,
        children: (0, r.jsxs)('div', {
            className: v.container,
            children: [
                (0, r.jsxs)('div', {
                    className: v.replyBar,
                    children: [
                        (0, r.jsx)(l.Clickable, {
                            onClick: () => (0, f.uL)(g.Z5c.CHANNEL(i.getGuildId(), i.id, a.id)),
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
                                className: s()(v.text, v.replyLabel),
                                variant: 'text-sm/normal',
                                children: E.intl.format(E.t['8E4Gxc'], {
                                    userHook: (e, t) =>
                                        (0, r.jsx)(
                                            l.NameWithRole,
                                            {
                                                className: v.name,
                                                name: I,
                                                color: S,
                                                roleName: T
                                            },
                                            t
                                        )
                                })
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: v.actions,
                            children: [
                                p &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(l.Tooltip, {
                                                text: u ? E.intl.string(E.t.DH2o6e) : E.intl.string(E.t.utGGIS),
                                                children: (e) => {
                                                    let { onMouseEnter: t, onMouseLeave: n, onFocus: i, onBlur: a } = e;
                                                    return (0, r.jsx)(l.Clickable, {
                                                        role: 'switch',
                                                        'aria-checked': u,
                                                        onClick: C,
                                                        onMouseEnter: t,
                                                        onMouseLeave: n,
                                                        onFocus: i,
                                                        onBlur: a,
                                                        children: (0, r.jsxs)(l.Text, {
                                                            variant: 'text-sm/bold',
                                                            color: u ? 'text-link' : 'text-muted',
                                                            className: v.mentionButton,
                                                            children: [
                                                                (0, r.jsx)(l.AtIcon, {
                                                                    size: 'md',
                                                                    color: 'currentColor',
                                                                    'aria-label': E.intl.string(E.t.P8tvKC),
                                                                    className: v.mentionIcon
                                                                }),
                                                                u ? E.intl.string(E.t.p9jC2t) : E.intl.string(E.t.U7f3bG)
                                                            ]
                                                        })
                                                    });
                                                }
                                            }),
                                            (0, r.jsx)('div', {
                                                className: v.separator,
                                                'aria-hidden': !0
                                            })
                                        ]
                                    }),
                                (0, r.jsx)(m.B, {
                                    onClick: function (e) {
                                        e.stopPropagation(), (0, d.A6)(i.id);
                                    }
                                })
                            ]
                        })
                    ]
                }),
                N &&
                    (0, r.jsx)(b, {
                        channel: i,
                        message: a,
                        replyChainLength: y
                    })
            ]
        })
    });
}
