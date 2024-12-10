n.r(t),
    n.d(t, {
        ForwardModal: function () {
            return P;
        }
    }),
    n(47120);
var l = n(200651),
    i = n(192379),
    a = n(392711),
    r = n(442837),
    s = n(481060),
    o = n(348245),
    c = n(359110),
    u = n(987509),
    d = n(72214),
    h = n(592125),
    f = n(375954),
    _ = n(934415),
    g = n(572004),
    m = n(823379),
    E = n(859155),
    I = n(822869),
    p = n(346610),
    S = n(895442),
    A = n(757853),
    C = n(388275),
    v = n(912332),
    L = n(646746),
    b = n(819727),
    T = n(388032),
    N = n(190417),
    x = n(621054);
function P(e) {
    let { channelId: t, messageId: P, message: y, initialSelectedDestinations: Z, forwardOptions: w, onClose: R, onRequestSent: O, ...D } = e,
        { hasOneTapSendButton: M, hasMessageInput: j, hasPreview: U } = (0, p.yk)({ location: 'ForwardModal' }),
        k = i.useMemo(() => (0, u.dL)(t), [t]),
        [G, F] = i.useState(!1),
        W = (0, r.e7)(
            [f.Z],
            () => {
                var e;
                return null !== (e = f.Z.getMessage(t, P)) && void 0 !== e ? e : y;
            },
            [t, P, y]
        ),
        H = (0, r.e7)([h.Z], () => h.Z.getChannel(t), [t]),
        z = (0, I.ZF)(),
        B = (0, I.mh)(),
        Q = i.useRef(0),
        V = i.useRef(0),
        [K, Y] = i.useState(Z),
        q = K.length,
        X = q >= b.G,
        [J, $] = i.useState(''),
        { results: ee, updateSearchText: et } = (0, d.s)({
            selectedDestinations: K,
            originDestination: k,
            includeMissingDMs: !0
        }),
        en = i.useCallback(
            (e) => {
                $(e), et(e), (V.current += 1), '' !== e && B(t, P);
            },
            [t, P, B, et]
        ),
        el = i.useCallback(() => {
            (0, I.sF)({
                channelId: t,
                messageId: P,
                numDestinationChanges: Q.current,
                numQueryChanges: V.current
            }),
                R();
        }, [t, P, R]),
        ei = i.useCallback(() => {
            var e;
            let n = null === (e = h.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id,
                l = (0, _.wR)(n, t, P);
            (0, s.showToast)((0, s.createToast)(T.intl.string(T.t['L/PwZW']), s.ToastType.LINK)), (0, g.JG)(l), (0, I.xp)(t, P);
        }, [t, P]),
        ea = i.useCallback(() => {
            $('');
        }, [$]),
        er = i.useRef(null);
    i.useEffect(() => {
        if ('' === J) {
            var e;
            null === (e = er.current) || void 0 === e || e.focus();
        }
    }, [J]);
    let es = i.useMemo(
            () =>
                (0, a.throttle)(
                    () => {
                        (0, s.showToast)((0, s.createToast)(T.intl.string(T.t.kwmYkp), s.ToastType.FORWARD));
                    },
                    3000,
                    {
                        leading: !0,
                        trailing: !1
                    }
                ),
            []
        ),
        eo = i.useCallback(
            (e) => {
                z(t, P, '' !== J),
                    Y((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: l } = t;
                            return n === e.type && l === e.id;
                        });
                        if (-1 === n) return X ? t : ($(''), (Q.current += 1), [e, ...t]);
                        let l = [...t];
                        return l.splice(n, 1), (Q.current += 1), l;
                    });
            },
            [t, X, P, J, z]
        ),
        ec = i.useCallback(
            async function (e) {
                var i;
                let { withMessage: a, transitionToDestination: r, closeAfterSend: d } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    _ = null !== (i = f.Z.getMessage(t, P)) && void 0 !== i ? i : y;
                if (null == _) {
                    (0, s.showToast)((0, s.createToast)(T.intl.string(T.t.R0RpRU), s.ToastType.FAILURE));
                    return;
                }
                F(!0);
                let g = (await Promise.all(e.map(u.qx))).filter(m.lm);
                if (
                    (0, S.Z)(_, g) &&
                    !(await new Promise((e) => {
                        (0, s.openModalLazy)(async () => {
                            let { default: t } = await n.e('88643').then(n.bind(n, 466080));
                            return (n) =>
                                (0, l.jsx)(t, {
                                    ...n,
                                    onConfirm: () => e(!0),
                                    onBack: () => e(!1)
                                });
                        });
                    }))
                ) {
                    F(!1);
                    return;
                }
                d && (0, v.mc)(), null == O || O(), r && (await o.Z.fetchMessages({ channelId: g[0] }), (0, c.Kh)(g[0]));
                let p = await E.Z.sendForwards(_, g, {
                        ...w,
                        withMessage: a
                    }),
                    A = g.some((e) => {
                        let t = h.Z.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    p.every((e) => {
                        let { status: t } = e;
                        return 'fulfilled' === t;
                    })
                ) {
                    (0, I.gP)({
                        channelId: t,
                        messageId: P,
                        hasError: !1,
                        hasContextMessage: null != a && '' !== a,
                        numDestinations: g.length,
                        numDestinationChanges: Q.current,
                        numQueryChanges: V.current,
                        anyDestinationHasSlowmode: A
                    }),
                        es();
                    return;
                }
                (0, I.gP)({
                    channelId: t,
                    messageId: P,
                    hasError: !0,
                    hasContextMessage: null != a && '' !== a,
                    numDestinations: g.length,
                    numDestinationChanges: Q.current,
                    numQueryChanges: V.current,
                    anyDestinationHasSlowmode: A
                });
                let C = e.filter((e, t) => 'rejected' === p[t].status);
                (0, v.Np)({
                    messageId: P,
                    channelId: t,
                    message: _,
                    failedDestinations: C,
                    forwardOptions: w
                });
            },
            [t, w, P, y, O, es]
        ),
        eu = i.useCallback(
            (e) => {
                ec(K, {
                    withMessage: e,
                    transitionToDestination: 1 === K.length,
                    closeAfterSend: !0
                });
            },
            [ec, K]
        ),
        ed = i.useCallback(() => eu(), [eu]),
        eh = i.useCallback(
            function (e) {
                let { transitionToDestination: t, closeAfterSend: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ec([e], {
                    transitionToDestination: t,
                    closeAfterSend: n
                });
            },
            [ec]
        );
    if (null == W || null == H) return null;
    let ef =
            ee.length > 0
                ? (0, l.jsx)(A.F, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: ee,
                      rowMode: M ? A.G.SEND : A.G.TOGGLE,
                      message: W,
                      originChannel: H,
                      handleToggleDestination: M ? eh : eo,
                      selectedDestinations: K,
                      disableSelection: X
                  })
                : (0, l.jsxs)(s.ModalContent, {
                      className: N.noResults,
                      children: [
                          (0, l.jsx)('img', {
                              className: N.noResultsImg,
                              src: x,
                              alt: ''
                          }),
                          (0, l.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: T.intl.string(T.t.V6nAfH)
                          })
                      ]
                  }),
        e_ = q <= 1 ? T.intl.string(T.t.TXNS7e) : T.intl.formatToPlainString(T.t.jWtYUl, { count: q });
    return (0, l.jsxs)(s.ModalRoot, {
        className: N.modal,
        'aria-label': T.intl.string(T.t['+SkRRk']),
        ...D,
        children: [
            (0, l.jsxs)(s.ModalHeader, {
                className: N.header,
                children: [
                    (0, l.jsxs)('div', {
                        className: N.titleLine,
                        children: [
                            (0, l.jsx)('div', {
                                className: N.title,
                                children: (0, l.jsx)(s.HeadingLevel, {
                                    component: (0, l.jsx)(s.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: T.intl.string(T.t['+SkRRk'])
                                    }),
                                    children: X
                                        ? (0, l.jsx)(s.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'text-warning',
                                              children: T.intl.format(T.t['3Fbkio'], { count: b.G })
                                          })
                                        : (M || j) &&
                                          (0, l.jsx)(s.Heading, {
                                              variant: 'heading-sm/normal',
                                              color: 'header-muted',
                                              children: T.intl.string(T.t['VA+btL'])
                                          })
                                })
                            }),
                            (0, l.jsx)(s.ModalCloseButton, {
                                className: N.closeButton,
                                onClick: el
                            })
                        ]
                    }),
                    M &&
                        U &&
                        (0, l.jsx)('div', {
                            className: N.forwardPreviewWrapperInset,
                            children: (0, l.jsx)(L.O, {
                                message: W,
                                forwardOptions: w
                            })
                        }),
                    (0, l.jsx)(s.SearchBar, {
                        ref: er,
                        size: s.SearchBar.Sizes.MEDIUM,
                        query: J,
                        onChange: en,
                        onClear: ea,
                        placeholder: T.intl.string(T.t['5h0QOD']),
                        'aria-label': T.intl.string(T.t['5h0QOD']),
                        autoFocus: !0
                    })
                ]
            }),
            ef,
            !M &&
                (j
                    ? (0, l.jsx)(C.n, {
                          message: W,
                          forwardOptions: w,
                          sendLabel: e_,
                          canSend: q > 0,
                          selectedDestinations: K,
                          isSending: G,
                          onSend: eu,
                          showPreview: U
                      })
                    : (0, l.jsxs)(s.ModalFooter, {
                          className: N.footer,
                          children: [
                              (0, l.jsx)(s.Button, {
                                  submitting: G,
                                  disabled: 0 === q,
                                  onClick: ed,
                                  children: e_
                              }),
                              (0, l.jsx)(s.Button, {
                                  onClick: ei,
                                  look: s.Button.Looks.OUTLINED,
                                  color: s.Button.Colors.PRIMARY,
                                  children: T.intl.string(T.t.WqhZsr)
                              })
                          ]
                      }))
        ]
    });
}
