n.r(t),
    n.d(t, {
        ApplicationCommandShareModal: function () {
            return _;
        },
        useQueryForAppCommands: function () {
            return y;
        }
    }),
    n(47120);
var l = n(200651),
    r = n(192379),
    i = n(481060),
    s = n(911969),
    a = n(835473),
    o = n(359110),
    u = n(987509),
    c = n(72214),
    d = n(592125),
    h = n(430824),
    f = n(823379),
    m = n(213459),
    g = n(667204),
    p = n(739980),
    x = n(617266),
    b = n(333861),
    v = n(388032),
    C = n(286054),
    S = n(621054);
let Z = () => {
    (0, i.closeModal)(b.s);
};
function N(e) {
    let { sendLabel: t, canSend: n, isSending: s, onSend: a } = e,
        o = r.useCallback(() => {
            a();
        }, [a]);
    return (0, l.jsx)(i.ModalFooter, {
        className: C.footerWithMessage,
        children: (0, l.jsx)('div', {
            className: C.footerButtons,
            children: (0, l.jsx)(i.Button, {
                className: C.sendWithMessage,
                submitting: s,
                disabled: !n,
                onClick: o,
                children: t
            })
        })
    });
}
function y(e, t) {
    return (0, m.v1)(
        e,
        { commandTypes: [s.yU.CHAT] },
        {
            applicationId: t,
            allowFetch: !1,
            allowApplicationState: !0
        }
    );
}
function _(e) {
    let { applicationId: t, channel: n, command: s, onClose: m, onRequestSent: b, previewMessage: _, ...j } = e,
        M = r.useMemo(() => (0, u.dL)(n.id), [n]),
        [E, L] = r.useState(!1),
        { commands: T, loading: P } = y(n, t),
        w = r.useRef(0),
        [A, R] = r.useState([]),
        k = A.length,
        D = k >= 5,
        [I, F] = r.useState(''),
        { results: H, updateSearchText: U } = (0, c.s)({
            selectedDestinations: A,
            originDestination: M,
            includeMissingDMs: !0
        }),
        W = r.useCallback(
            (e) => {
                F(e), U(e);
            },
            [U]
        ),
        q = r.useCallback(() => {
            m();
        }, [m]),
        [z] = (0, a.Z)([t]),
        O = r.useCallback(() => {
            F('');
        }, [F]),
        B = r.useRef(null);
    r.useEffect(() => {
        if ('' === I) {
            var e;
            null === (e = B.current) || void 0 === e || e.focus();
        }
    }, [I]);
    let G = r.useCallback(
            (e) => {
                R((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: l } = t;
                        return n === e.type && l === e.id;
                    });
                    if (-1 === n) return D ? t : (F(''), (w.current += 1), [e, ...t]);
                    let l = [...t];
                    return l.splice(n, 1), (w.current += 1), l;
                });
            },
            [D]
        ),
        [V, X] = r.useMemo(() => {
            if (P) return [null, !1];
            let e = T.find((e) => e.untranslatedName === s);
            return void 0 !== e ? [e, !1] : [null, !0];
        }, [s, T, P]),
        J = r.useCallback(
            async function (e) {
                let { transitionToDestination: t, closeAfterSend: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null === V) return;
                L(!0);
                let l = (await Promise.all(e.map(u.qx))).filter(f.lm);
                n && Z(),
                    null == b || b(),
                    t && (0, o.Kh)(l[0]),
                    l.some(async (e) => {
                        let t = d.Z.getChannel(e);
                        if (null == t) return;
                        let n = h.Z.getGuild(null == t ? void 0 : t.guild_id);
                        null !=
                            (await (0, g.Z)({
                                command: V,
                                optionValues: {},
                                context: {
                                    channel: t,
                                    guild: n
                                }
                            })) && (0, i.showToast)((0, i.createToast)(v.intl.string(v.t['5WjJcn']), i.ToastType.MESSAGE));
                    }),
                    Z();
            },
            [b, V]
        ),
        Q = r.useCallback(() => {
            J(A, {
                transitionToDestination: 1 === A.length,
                closeAfterSend: !0
            });
        }, [J, A]);
    if (P)
        return (0, l.jsx)(i.ModalRoot, {
            className: C.modal,
            'aria-label': v.intl.string(v.t.fuFvw8),
            ...j,
            children: (0, l.jsx)(i.Spinner, { className: C.spinnerContainer })
        });
    X && (i.ModalRoot, C.modal, v.intl.string(v.t.fuFvw8), i.ModalContent, v.intl.string(v.t.yAk8ZW));
    let K =
        H.length > 0
            ? (0, l.jsx)(x.F, {
                  paddingBottom: 16,
                  paddingTop: 16,
                  rowData: H,
                  handleToggleDestination: G,
                  selectedDestinations: A,
                  disableSelection: D
              })
            : (0, l.jsxs)(i.ModalContent, {
                  className: C.noResults,
                  children: [
                      (0, l.jsx)('img', {
                          className: C.noResultsImg,
                          src: S,
                          alt: ''
                      }),
                      (0, l.jsx)(i.Text, {
                          variant: 'text-md/normal',
                          color: 'text-muted',
                          children: v.intl.string(v.t.V6nAfH)
                      })
                  ]
              });
    return (0, l.jsxs)(i.ModalRoot, {
        className: C.modal,
        'aria-label': v.intl.string(v.t.fuFvw8),
        ...j,
        children: [
            (0, l.jsxs)(i.ModalHeader, {
                className: C.header,
                children: [
                    (0, l.jsxs)('div', {
                        className: C.titleLine,
                        children: [
                            (0, l.jsx)('div', {
                                className: C.title,
                                children: (0, l.jsxs)(i.HeadingLevel, {
                                    component: (0, l.jsxs)(i.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: ['Share from ', null == z ? void 0 : z.name, '?']
                                    }),
                                    children: [
                                        D
                                            ? (0, l.jsx)(i.Text, {
                                                  variant: 'text-sm/normal',
                                                  color: 'text-warning',
                                                  children: v.intl.format(v.t['/KhyPT'], { count: 5 })
                                              })
                                            : null,
                                        (0, l.jsx)(i.Heading, {
                                            variant: 'heading-sm/normal',
                                            color: 'header-muted',
                                            children: v.intl.string(v.t['DF+q2t'])
                                        })
                                    ]
                                })
                            }),
                            (0, l.jsx)(i.ModalCloseButton, {
                                className: C.closeButton,
                                onClick: q
                            })
                        ]
                    }),
                    void 0 !== _ ? (0, l.jsx)(p.z, { previewMessage: _ }) : null,
                    (0, l.jsx)(i.SearchBar, {
                        className: C.search,
                        ref: B,
                        size: i.SearchBar.Sizes.MEDIUM,
                        query: I,
                        onChange: W,
                        onClear: O,
                        placeholder: v.intl.string(v.t['5h0QOD']),
                        'aria-label': v.intl.string(v.t['5h0QOD']),
                        autoFocus: !0
                    })
                ]
            }),
            K,
            (0, l.jsx)(N, {
                sendLabel: v.intl.string(v.t.TXNS7e),
                canSend: k > 0,
                isSending: E,
                onSend: Q
            })
        ]
    });
}
