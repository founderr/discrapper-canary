n.d(e, {
    A7: function () {
        return P;
    },
    dE: function () {
        return I;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(481060),
    s = n(410030),
    u = n(541716),
    c = n(752305),
    d = n(893718),
    h = n(318766),
    f = n(931651),
    v = n(131704),
    p = n(142550),
    x = n(981631),
    g = n(388032),
    m = n(26858);
let w = (0, v.kt)({
        id: '1',
        type: x.d4z.DM
    }),
    y = l.forwardRef(function (t, e) {
        let { placeholder: n, headerText: l, onEnter: r, showPopout: u, children: c, body: d, hide: h } = t,
            f = (0, s.ZP)();
        return (0, i.jsx)(a.Popout, {
            align: 'right',
            position: 'bottom',
            shouldShow: u,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, i.jsx)(a.ThemeProvider, {
                    theme: f,
                    children: (t) =>
                        (0, i.jsx)('div', {
                            className: o()([m.reply, t]),
                            ref: e,
                            children: (0, i.jsx)(a.FocusLock, {
                                containerRef: e,
                                children: (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(a.Text, {
                                            variant: 'text-xs/bold',
                                            className: m.replyHeader,
                                            children: null != l ? l : g.intl.string(g.t['/VQax8'])
                                        }),
                                        d,
                                        (0, i.jsx)(P, {
                                            onEnter: (t) => {
                                                r(t), h();
                                            },
                                            placeholder: null != n ? n : g.intl.string(g.t['/VQax8'])
                                        })
                                    ]
                                })
                            })
                        })
                }),
            children: () => c
        });
    });
function P(t) {
    let { placeholder: e, onEnter: n, setEditorRef: r, showEmojiButton: a = !1, renderAttachButton: s, autoFocus: h = !0, onFocus: f, channel: v, className: x } = t,
        [g, y] = l.useState(''),
        [P, Z] = l.useState((0, c.JM)('')),
        I = () => {
            y(''), Z((0, c.JM)(''));
        },
        C = u.I.ATOMIC_REACTOR_REPLY_INPUT,
        S = l.useRef(null);
    return (0, i.jsx)(d.Z, {
        ref: S,
        placeholder: e,
        editorClassName: x,
        className: o()(m.replyInput, x),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: p.z,
        channel: null != v ? v : w,
        onChange: (t, e, n) => {
            y(e), Z(n);
        },
        type: a
            ? {
                  ...C,
                  emojis: { button: !0 }
              }
            : C,
        textValue: g,
        richValue: P,
        onSubmit: (t) => {
            let { value: e } = t;
            return e.length > p.z
                ? Promise.resolve({
                      shouldClear: !1,
                      shouldRefocus: !0
                  })
                : (n(e),
                  I(),
                  Promise.resolve({
                      shouldClear: !0,
                      shouldRefocus: !1
                  }));
        },
        setEditorRef: r,
        focused: h,
        onFocus: f,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (() => {
            if (null == S.current) return 'top';
            let t = S.current.getBoundingClientRect(),
                e = window.innerHeight;
            return t.top < e / 2 ? 'bottom' : 'top';
        })(),
        renderAttachButton: s
    });
}
let Z = (t, e) => {
        l.useEffect(() => {
            let n = (e) => {
                    'Escape' === e.key && t();
                },
                i = (n) => {
                    var i;
                    null != n.target && !(null == e ? void 0 : null === (i = e.current) || void 0 === i ? void 0 : i.contains(null == n ? void 0 : n.target)) && t();
                };
            return (
                document.addEventListener('keydown', n),
                document.addEventListener('mousedown', i),
                () => {
                    document.removeEventListener('keydown', n), document.removeEventListener('mousedown', i);
                }
            );
        }, [t, e]);
    },
    I = (t) => {
        let { onSelectEmoji: e, onClick: n } = t,
            r = (0, s.ZP)(),
            [o, u] = l.useState(!1),
            c = l.useRef(null);
        return (
            Z(() => u(!1), c),
            (0, i.jsx)(a.Popout, {
                align: 'right',
                position: 'top',
                shouldShow: o,
                disablePointerEvents: !1,
                renderPopout: () =>
                    (0, i.jsx)(a.ThemeProvider, {
                        theme: r,
                        children: (t) =>
                            (0, i.jsx)('div', {
                                className: t,
                                ref: c,
                                children: (0, i.jsx)(f.$, {
                                    messageId: x.lds,
                                    channel: w,
                                    closePopout: () => {
                                        u(!1);
                                    },
                                    onSelectEmoji: (t, n, i) => {
                                        null != t && (e(t, n, i), u(!1));
                                    }
                                })
                            })
                    }),
                children: () =>
                    (0, i.jsx)(a.Tooltip, {
                        text: g.intl.string(g.t.lfIHs7),
                        children: (t) =>
                            (0, i.jsx)('div', {
                                ...t,
                                className: m.reaction,
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
e.ZP = (t) => {
    let { onInteraction: e, showReact: n = !0, showReply: r = !0, popoutProps: s = {} } = t,
        { replyHeaderText: u, replyPlaceholder: c, popoutBody: d } = s,
        [h, f] = l.useState(!1),
        v = l.useRef(null);
    return (
        Z(() => f(!1), v),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: m.reactions,
                children: [
                    n &&
                        (0, i.jsx)(I, {
                            onSelectEmoji: (t) => {
                                null != t &&
                                    e({
                                        interactionType: p.L.ReactSubmit,
                                        emoji: t,
                                        reply: null
                                    });
                            },
                            onClick: () => {
                                e({
                                    interactionType: p.L.ReactBegin,
                                    emoji: null,
                                    reply: null
                                }),
                                    f(!1);
                            }
                        }),
                    r &&
                        (0, i.jsx)(y, {
                            hide: () => f(!1),
                            ref: v,
                            headerText: u,
                            placeholder: c,
                            showPopout: h,
                            body: d,
                            onEnter: (t) => {
                                e({
                                    interactionType: p.L.ReplySubmit,
                                    emoji: null,
                                    reply: t
                                });
                            },
                            children: (0, i.jsx)(a.Tooltip, {
                                text: g.intl.string(g.t['5IEsGx']),
                                children: (t) =>
                                    (0, i.jsx)('button', {
                                        ...t,
                                        className: o()(m.reaction, m.emojiButton),
                                        onClick: () => {
                                            e({
                                                interactionType: p.L.ReplyBegin,
                                                emoji: null,
                                                reply: null
                                            }),
                                                f(!0);
                                        },
                                        children: (0, i.jsx)(a.ArrowAngleLeftUpIcon, {})
                                    })
                            })
                        })
                ]
            })
        })
    );
};
