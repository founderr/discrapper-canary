n.d(t, {
    A7: function () {
        return P;
    },
    dE: function () {
        return y;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    o = n(481060),
    s = n(410030),
    u = n(541716),
    c = n(752305),
    d = n(893718),
    h = n(318766),
    m = n(931651),
    x = n(131704),
    v = n(142550),
    f = n(981631),
    p = n(388032),
    g = n(793834);
let C = (0, x.kt)({
        id: '1',
        type: f.d4z.DM
    }),
    I = l.forwardRef(function (e, t) {
        let { placeholder: n, headerText: l, onEnter: a, showPopout: u, children: c, body: d, hide: h } = e,
            m = (0, s.ZP)();
        return (0, i.jsx)(o.Popout, {
            align: 'right',
            position: 'bottom',
            shouldShow: u,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, i.jsx)(o.ThemeProvider, {
                    theme: m,
                    children: (e) =>
                        (0, i.jsx)('div', {
                            className: r()([g.reply, e]),
                            ref: t,
                            children: (0, i.jsx)(o.FocusLock, {
                                containerRef: t,
                                children: (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(o.Text, {
                                            variant: 'text-xs/bold',
                                            className: g.replyHeader,
                                            children: null != l ? l : p.intl.string(p.t['/VQax8'])
                                        }),
                                        d,
                                        (0, i.jsx)(P, {
                                            onEnter: (e) => {
                                                a(e), h();
                                            },
                                            placeholder: null != n ? n : p.intl.string(p.t['/VQax8'])
                                        })
                                    ]
                                })
                            })
                        })
                }),
            children: () => c
        });
    });
function P(e) {
    let { placeholder: t, onEnter: n, setEditorRef: a, showEmojiButton: o = !1, renderAttachButton: s, autoFocus: h = !0, onFocus: m, channel: x, className: f } = e,
        [p, I] = l.useState(''),
        [P, Z] = l.useState((0, c.JM)('')),
        y = () => {
            I(''), Z((0, c.JM)(''));
        },
        j = u.I.ATOMIC_REACTOR_REPLY_INPUT,
        w = l.useRef(null);
    return (0, i.jsx)(d.Z, {
        ref: w,
        placeholder: t,
        editorClassName: f,
        className: r()(g.replyInput, f),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: v.z,
        channel: null != x ? x : C,
        onChange: (e, t, n) => {
            I(t), Z(n);
        },
        type: o
            ? {
                  ...j,
                  emojis: { button: !0 }
              }
            : j,
        textValue: p,
        richValue: P,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > v.z
                ? Promise.resolve({
                      shouldClear: !1,
                      shouldRefocus: !0
                  })
                : (n(t),
                  y(),
                  Promise.resolve({
                      shouldClear: !0,
                      shouldRefocus: !1
                  }));
        },
        setEditorRef: a,
        focused: h,
        onFocus: m,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (() => {
            if (null == w.current) return 'top';
            let e = w.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? 'bottom' : 'top';
        })(),
        renderAttachButton: s
    });
}
let Z = (e, t) => {
        l.useEffect(() => {
            let n = (t) => {
                    'Escape' === t.key && e();
                },
                i = (n) => {
                    var i;
                    null != n.target && !(null == t ? void 0 : null === (i = t.current) || void 0 === i ? void 0 : i.contains(null == n ? void 0 : n.target)) && e();
                };
            return (
                document.addEventListener('keydown', n),
                document.addEventListener('mousedown', i),
                () => {
                    document.removeEventListener('keydown', n), document.removeEventListener('mousedown', i);
                }
            );
        }, [e, t]);
    },
    y = (e) => {
        let { onSelectEmoji: t, onClick: n } = e,
            a = (0, s.ZP)(),
            [r, u] = l.useState(!1),
            c = l.useRef(null);
        return (
            Z(() => u(!1), c),
            (0, i.jsx)(o.Popout, {
                align: 'right',
                position: 'top',
                shouldShow: r,
                disablePointerEvents: !1,
                renderPopout: () =>
                    (0, i.jsx)(o.ThemeProvider, {
                        theme: a,
                        children: (e) =>
                            (0, i.jsx)('div', {
                                className: e,
                                ref: c,
                                children: (0, i.jsx)(m.$, {
                                    messageId: f.lds,
                                    channel: C,
                                    closePopout: () => {
                                        u(!1);
                                    },
                                    onSelectEmoji: (e, n, i) => {
                                        null != e && (t(e, n, i), u(!1));
                                    }
                                })
                            })
                    }),
                children: () =>
                    (0, i.jsx)(o.Tooltip, {
                        text: p.intl.string(p.t.lfIHs7),
                        children: (e) =>
                            (0, i.jsx)('div', {
                                ...e,
                                className: g.reaction,
                                children: (0, i.jsx)(h.Z, {
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
    let { onInteraction: t, showReact: n = !0, showReply: a = !0, popoutProps: s = {} } = e,
        { replyHeaderText: u, replyPlaceholder: c, popoutBody: d } = s,
        [h, m] = l.useState(!1),
        x = l.useRef(null);
    return (
        Z(() => m(!1), x),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: g.reactions,
                children: [
                    n &&
                        (0, i.jsx)(y, {
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
                    a &&
                        (0, i.jsx)(I, {
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
                            children: (0, i.jsx)(o.Tooltip, {
                                text: p.intl.string(p.t['5IEsGx']),
                                children: (e) =>
                                    (0, i.jsx)('button', {
                                        ...e,
                                        className: r()(g.reaction, g.emojiButton),
                                        onClick: () => {
                                            t({
                                                interactionType: v.L.ReplyBegin,
                                                emoji: null,
                                                reply: null
                                            }),
                                                m(!0);
                                        },
                                        children: (0, i.jsx)(o.ArrowAngleLeftUpIcon, {})
                                    })
                            })
                        })
                ]
            })
        })
    );
};
