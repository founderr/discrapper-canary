n.d(t, {
    A7: function () {
        return g;
    },
    dE: function () {
        return N;
    }
}),
    n(47120);
var a = n(735250),
    l = n(470079),
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
    E = n(142550),
    v = n(981631),
    _ = n(689938),
    f = n(793834);
let T = (0, x.kt)({
        id: '1',
        type: v.d4z.DM
    }),
    p = l.forwardRef(function (e, t) {
        let { placeholder: n, headerText: l, onEnter: i, showPopout: u, children: c, body: d, hide: h } = e,
            m = (0, o.ZP)();
        return (0, a.jsx)(s.Popout, {
            align: 'right',
            position: 'bottom',
            shouldShow: u,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, a.jsx)(s.ThemeProvider, {
                    theme: m,
                    children: (e) =>
                        (0, a.jsx)('div', {
                            className: r()([f.reply, e]),
                            ref: t,
                            children: (0, a.jsx)(s.FocusLock, {
                                containerRef: t,
                                children: (0, a.jsxs)('div', {
                                    children: [
                                        (0, a.jsx)(s.Text, {
                                            variant: 'text-xs/bold',
                                            className: f.replyHeader,
                                            children: null != l ? l : _.Z.Messages.CHAT
                                        }),
                                        d,
                                        (0, a.jsx)(g, {
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
    let { placeholder: t, onEnter: n, setEditorRef: i, showEmojiButton: s = !1, renderAttachButton: o, autoFocus: h = !0, onFocus: m, channel: x, className: v } = e,
        [_, p] = l.useState(''),
        [g, I] = l.useState((0, c.JM)('')),
        N = () => {
            p(''), I((0, c.JM)(''));
        },
        C = u.I.ATOMIC_REACTOR_REPLY_INPUT,
        A = l.useRef(null);
    return (0, a.jsx)(d.Z, {
        ref: A,
        placeholder: t,
        editorClassName: v,
        className: r()(f.replyInput, v),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: E.z,
        channel: null != x ? x : T,
        onChange: (e, t, n) => {
            p(t), I(n);
        },
        type: s
            ? {
                  ...C,
                  emojis: { button: !0 }
              }
            : C,
        textValue: _,
        richValue: g,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > E.z
                ? Promise.resolve({
                      shouldClear: !1,
                      shouldRefocus: !0
                  })
                : (n(t),
                  N(),
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
            if (null == A.current) return 'top';
            let e = A.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? 'bottom' : 'top';
        })(),
        renderAttachButton: o
    });
}
let I = (e, t) => {
        l.useEffect(() => {
            let n = (t) => {
                    'Escape' === t.key && e();
                },
                a = (n) => {
                    var a;
                    null != n.target && !(null == t ? void 0 : null === (a = t.current) || void 0 === a ? void 0 : a.contains(null == n ? void 0 : n.target)) && e();
                };
            return (
                document.addEventListener('keydown', n),
                document.addEventListener('mousedown', a),
                () => {
                    document.removeEventListener('keydown', n), document.removeEventListener('mousedown', a);
                }
            );
        }, [e, t]);
    },
    N = (e) => {
        let { onSelectEmoji: t, onClick: n } = e,
            i = (0, o.ZP)(),
            [r, u] = l.useState(!1),
            c = l.useRef(null);
        return (
            I(() => u(!1), c),
            (0, a.jsx)(s.Popout, {
                align: 'right',
                position: 'top',
                shouldShow: r,
                disablePointerEvents: !1,
                renderPopout: () =>
                    (0, a.jsx)(s.ThemeProvider, {
                        theme: i,
                        children: (e) =>
                            (0, a.jsx)('div', {
                                className: e,
                                ref: c,
                                children: (0, a.jsx)(m.$, {
                                    messageId: v.lds,
                                    channel: T,
                                    closePopout: () => {
                                        u(!1);
                                    },
                                    onSelectEmoji: (e, n, a) => {
                                        null != e && (t(e, n, a), u(!1));
                                    }
                                })
                            })
                    }),
                children: () =>
                    (0, a.jsx)(s.Tooltip, {
                        text: _.Z.Messages.ADD_REACTION,
                        children: (e) =>
                            (0, a.jsx)('div', {
                                ...e,
                                className: f.reaction,
                                children: (0, a.jsx)(h.Z, {
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
        [h, m] = l.useState(!1),
        x = l.useRef(null);
    return (
        I(() => m(!1), x),
        (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)('div', {
                className: f.reactions,
                children: [
                    n &&
                        (0, a.jsx)(N, {
                            onSelectEmoji: (e) => {
                                null != e &&
                                    t({
                                        interactionType: E.L.ReactSubmit,
                                        emoji: e,
                                        reply: null
                                    });
                            },
                            onClick: () => {
                                t({
                                    interactionType: E.L.ReactBegin,
                                    emoji: null,
                                    reply: null
                                }),
                                    m(!1);
                            }
                        }),
                    i &&
                        (0, a.jsx)(p, {
                            hide: () => m(!1),
                            ref: x,
                            headerText: u,
                            placeholder: c,
                            showPopout: h,
                            body: d,
                            onEnter: (e) => {
                                t({
                                    interactionType: E.L.ReplySubmit,
                                    emoji: null,
                                    reply: e
                                });
                            },
                            children: (0, a.jsx)(s.Tooltip, {
                                text: _.Z.Messages.MESSAGE_ACTION_REPLY,
                                children: (e) =>
                                    (0, a.jsx)('button', {
                                        ...e,
                                        className: r()(f.reaction, f.emojiButton),
                                        onClick: () => {
                                            t({
                                                interactionType: E.L.ReplyBegin,
                                                emoji: null,
                                                reply: null
                                            }),
                                                m(!0);
                                        },
                                        children: (0, a.jsx)(s.ArrowAngleLeftUpIcon, {})
                                    })
                            })
                        })
                ]
            })
        })
    );
};
