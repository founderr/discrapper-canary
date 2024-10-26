n.d(t, {
    A7: function () {
        return T;
    },
    dE: function () {
        return I;
    }
}),
    n(47120);
var l = n(200651),
    a = n(192379),
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
    _ = n(981631),
    v = n(689938),
    C = n(793834);
let f = (0, x.kt)({
        id: '1',
        type: _.d4z.DM
    }),
    p = a.forwardRef(function (e, t) {
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
                            className: r()([C.reply, e]),
                            ref: t,
                            children: (0, l.jsx)(s.FocusLock, {
                                containerRef: t,
                                children: (0, l.jsxs)('div', {
                                    children: [
                                        (0, l.jsx)(s.Text, {
                                            variant: 'text-xs/bold',
                                            className: C.replyHeader,
                                            children: null != a ? a : v.Z.Messages.CHAT
                                        }),
                                        d,
                                        (0, l.jsx)(T, {
                                            onEnter: (e) => {
                                                i(e), h();
                                            },
                                            placeholder: null != n ? n : v.Z.Messages.CHAT
                                        })
                                    ]
                                })
                            })
                        })
                }),
            children: () => c
        });
    });
function T(e) {
    let { placeholder: t, onEnter: n, setEditorRef: i, showEmojiButton: s = !1, renderAttachButton: o, autoFocus: h = !0, onFocus: m, channel: x, className: _ } = e,
        [v, p] = a.useState(''),
        [T, g] = a.useState((0, c.JM)('')),
        I = () => {
            p(''), g((0, c.JM)(''));
        },
        N = u.I.ATOMIC_REACTOR_REPLY_INPUT,
        Z = a.useRef(null);
    return (0, l.jsx)(d.Z, {
        ref: Z,
        placeholder: t,
        editorClassName: _,
        className: r()(C.replyInput, _),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: E.z,
        channel: null != x ? x : f,
        onChange: (e, t, n) => {
            p(t), g(n);
        },
        type: s
            ? {
                  ...N,
                  emojis: { button: !0 }
              }
            : N,
        textValue: v,
        richValue: T,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > E.z
                ? Promise.resolve({
                      shouldClear: !1,
                      shouldRefocus: !0
                  })
                : (n(t),
                  I(),
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
            if (null == Z.current) return 'top';
            let e = Z.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? 'bottom' : 'top';
        })(),
        renderAttachButton: o
    });
}
let g = (e, t) => {
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
    I = (e) => {
        let { onSelectEmoji: t, onClick: n } = e,
            i = (0, o.ZP)(),
            [r, u] = a.useState(!1),
            c = a.useRef(null);
        return (
            g(() => u(!1), c),
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
                                    messageId: _.lds,
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
                        text: v.Z.Messages.ADD_REACTION,
                        children: (e) =>
                            (0, l.jsx)('div', {
                                ...e,
                                className: C.reaction,
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
        g(() => m(!1), x),
        (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)('div', {
                className: C.reactions,
                children: [
                    n &&
                        (0, l.jsx)(I, {
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
                        (0, l.jsx)(p, {
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
                            children: (0, l.jsx)(s.Tooltip, {
                                text: v.Z.Messages.MESSAGE_ACTION_REPLY,
                                children: (e) =>
                                    (0, l.jsx)('button', {
                                        ...e,
                                        className: r()(C.reaction, C.emojiButton),
                                        onClick: () => {
                                            t({
                                                interactionType: E.L.ReplyBegin,
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
