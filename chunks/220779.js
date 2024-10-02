n.d(t, {
    A7: function () {
        return g;
    },
    dE: function () {
        return C;
    }
}),
    n(47120);
var l = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    s = n(481060),
    o = n(410030),
    u = n(541716),
    c = n(752305),
    d = n(893718),
    h = n(318766),
    m = n(931651),
    x = n(131704),
    v = n(142550),
    E = n(981631),
    _ = n(689938),
    p = n(793834);
let f = (0, x.kt)({
        id: '1',
        type: E.d4z.DM
    }),
    T = a.forwardRef(function (e, t) {
        let { placeholder: n, headerText: a, onEnter: i, showPopout: u, children: c, body: d, hide: h } = e,
            m = (0, o.ZP)();
        return (0, l.jsx)(s.Popout, {
            align: 'right',
            position: 'bottom',
            shouldShow: u,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, l.jsx)(s.ThemeProvider, {
                    theme: m,
                    children: (e) =>
                        (0, l.jsx)('div', {
                            className: r()([p.reply, e]),
                            ref: t,
                            children: (0, l.jsx)(s.FocusLock, {
                                containerRef: t,
                                children: (0, l.jsxs)('div', {
                                    children: [
                                        (0, l.jsx)(s.Text, {
                                            variant: 'text-xs/bold',
                                            className: p.replyHeader,
                                            children: null != a ? a : _.Z.Messages.CHAT
                                        }),
                                        d,
                                        (0, l.jsx)(g, {
                                            onEnter: (e) => {
                                                i(e), h();
                                            },
                                            placeholder: null != n ? n : _.Z.Messages.CHAT
                                        })
                                    ]
                                })
                            })
                        })
                }),
            children: () => c
        });
    });
function g(e) {
    let { placeholder: t, onEnter: n, setEditorRef: i, showEmojiButton: s = !1, renderAttachButton: o, autoFocus: h = !0, onFocus: m, channel: x, className: E } = e,
        [_, T] = a.useState(''),
        [g, I] = a.useState((0, c.JM)('')),
        C = () => {
            T(''), I((0, c.JM)(''));
        },
        N = u.I.ATOMIC_REACTOR_REPLY_INPUT,
        P = a.useRef(null);
    return (0, l.jsx)(d.Z, {
        ref: P,
        placeholder: t,
        editorClassName: E,
        className: r()(p.replyInput, E),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: v.z,
        channel: null != x ? x : f,
        onChange: (e, t, n) => {
            T(t), I(n);
        },
        type: s
            ? {
                  ...N,
                  emojis: { button: !0 }
              }
            : N,
        textValue: _,
        richValue: g,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > v.z
                ? Promise.resolve({
                      shouldClear: !1,
                      shouldRefocus: !0
                  })
                : (n(t),
                  C(),
                  Promise.resolve({
                      shouldClear: !0,
                      shouldRefocus: !1
                  }));
        },
        setEditorRef: i,
        focused: h,
        onFocus: m,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (() => {
            if (null == P.current) return 'top';
            let e = P.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? 'bottom' : 'top';
        })(),
        renderAttachButton: o
    });
}
let I = (e, t) => {
        a.useEffect(() => {
            let n = (t) => {
                    'Escape' === t.key && e();
                },
                l = (n) => {
                    var l;
                    null != n.target && !(null == t ? void 0 : null === (l = t.current) || void 0 === l ? void 0 : l.contains(null == n ? void 0 : n.target)) && e();
                };
            return (
                document.addEventListener('keydown', n),
                document.addEventListener('mousedown', l),
                () => {
                    document.removeEventListener('keydown', n), document.removeEventListener('mousedown', l);
                }
            );
        }, [e, t]);
    },
    C = (e) => {
        let { onSelectEmoji: t, onClick: n } = e,
            i = (0, o.ZP)(),
            [r, u] = a.useState(!1),
            c = a.useRef(null);
        return (
            I(() => u(!1), c),
            (0, l.jsx)(s.Popout, {
                align: 'right',
                position: 'top',
                shouldShow: r,
                disablePointerEvents: !1,
                renderPopout: () =>
                    (0, l.jsx)(s.ThemeProvider, {
                        theme: i,
                        children: (e) =>
                            (0, l.jsx)('div', {
                                className: e,
                                ref: c,
                                children: (0, l.jsx)(m.$, {
                                    messageId: E.lds,
                                    channel: f,
                                    closePopout: () => {
                                        u(!1);
                                    },
                                    onSelectEmoji: (e, n, l) => {
                                        null != e && (t(e, n, l), u(!1));
                                    }
                                })
                            })
                    }),
                children: () =>
                    (0, l.jsx)(s.Tooltip, {
                        text: _.Z.Messages.ADD_REACTION,
                        children: (e) =>
                            (0, l.jsx)('div', {
                                ...e,
                                className: p.reaction,
                                children: (0, l.jsx)(h.Z, {
                                    active: !1,
                                    tabIndex: 0,
                                    onClick: () => {
                                        null == n || n(), u(!0);
                                    }
                                })
                            })
                    })
            })
        );
    };
t.ZP = (e) => {
    let { onInteraction: t, showReact: n = !0, showReply: i = !0, popoutProps: o = {} } = e,
        { replyHeaderText: u, replyPlaceholder: c, popoutBody: d } = o,
        [h, m] = a.useState(!1),
        x = a.useRef(null);
    return (
        I(() => m(!1), x),
        (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)('div', {
                className: p.reactions,
                children: [
                    n &&
                        (0, l.jsx)(C, {
                            onSelectEmoji: (e) => {
                                null != e &&
                                    t({
                                        interactionType: v.L.ReactSubmit,
                                        emoji: e,
                                        reply: null
                                    });
                            },
                            onClick: () => {
                                t({
                                    interactionType: v.L.ReactBegin,
                                    emoji: null,
                                    reply: null
                                }),
                                    m(!1);
                            }
                        }),
                    i &&
                        (0, l.jsx)(T, {
                            hide: () => m(!1),
                            ref: x,
                            headerText: u,
                            placeholder: c,
                            showPopout: h,
                            body: d,
                            onEnter: (e) => {
                                t({
                                    interactionType: v.L.ReplySubmit,
                                    emoji: null,
                                    reply: e
                                });
                            },
                            children: (0, l.jsx)(s.Tooltip, {
                                text: _.Z.Messages.MESSAGE_ACTION_REPLY,
                                children: (e) =>
                                    (0, l.jsx)('button', {
                                        ...e,
                                        className: r()(p.reaction, p.emojiButton),
                                        onClick: () => {
                                            t({
                                                interactionType: v.L.ReplyBegin,
                                                emoji: null,
                                                reply: null
                                            }),
                                                m(!0);
                                        },
                                        children: (0, l.jsx)(s.ArrowAngleLeftUpIcon, {})
                                    })
                            })
                        })
                ]
            })
        })
    );
};
