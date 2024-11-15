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
    p = n(859155),
    E = n(822869),
    I = n(346610),
    A = n(895442),
    S = n(757853),
    C = n(388275),
    v = n(912332),
    b = n(646746),
    L = n(819727),
    x = n(388032),
    N = n(276496),
    T = n(621054);
function P(e) {
    let { channelId: t, messageId: P, message: y, initialSelectedDestinations: Z, forwardOptions: w, onClose: R, onRequestSent: O, ...D } = e,
        { hasOneTapSendButton: j, hasMessageInput: M, hasPreview: k } = (0, I.yk)({ location: 'ForwardModal' }),
        F = i.useMemo(() => (0, u.dL)(t), [t]),
        [U, G] = i.useState(!1),
        W = (0, r.e7)(
            [f.Z],
            () => {
                var e;
                return null !== (e = f.Z.getMessage(t, P)) && void 0 !== e ? e : y;
            },
            [t, P, y]
        ),
        z = (0, r.e7)([h.Z], () => h.Z.getChannel(t), [t]),
        H = (0, E.ZF)(),
        Q = (0, E.mh)(),
        B = i.useRef(0),
        V = i.useRef(0),
        [q, K] = i.useState(Z),
        Y = q.length,
        X = Y >= L.G,
        [J, $] = i.useState(''),
        ee = i.useCallback(
            (e) => {
                $(e), (V.current += 1), '' !== e && Q(t, P);
            },
            [t, P, Q]
        ),
        et = (0, d.s)({
            searchText: J,
            selectedDestinations: q,
            originDestination: F,
            includeMissingDMs: !0
        }),
        en = i.useCallback(() => {
            (0, E.sF)({
                channelId: t,
                messageId: P,
                numDestinationChanges: B.current,
                numQueryChanges: V.current
            }),
                R();
        }, [t, P, R]),
        el = i.useCallback(() => {
            var e;
            let n = null === (e = h.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id,
                l = (0, _.wR)(n, t, P);
            (0, s.showToast)((0, s.createToast)(x.intl.string(x.t['L/PwZW']), s.ToastType.LINK)), (0, g.JG)(l), (0, E.xp)(t, P);
        }, [t, P]),
        ei = i.useCallback(() => {
            $('');
        }, [$]),
        ea = i.useRef(null);
    i.useEffect(() => {
        if ('' === J) {
            var e;
            null === (e = ea.current) || void 0 === e || e.focus();
        }
    }, [J]);
    let er = i.useMemo(
            () =>
                (0, a.throttle)(
                    () => {
                        (0, s.showToast)((0, s.createToast)(x.intl.string(x.t.kwmYkp), s.ToastType.FORWARD));
                    },
                    3000,
                    {
                        leading: !0,
                        trailing: !1
                    }
                ),
            []
        ),
        es = i.useCallback(
            (e) => {
                H(t, P, '' !== J),
                    K((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: l } = t;
                            return n === e.type && l === e.id;
                        });
                        if (-1 === n) return X ? t : ($(''), (B.current += 1), [e, ...t]);
                        let l = [...t];
                        return l.splice(n, 1), (B.current += 1), l;
                    });
            },
            [t, X, P, J, H]
        ),
        eo = i.useCallback(
            async function (e) {
                var i;
                let { withMessage: a, transitionToDestination: r, closeAfterSend: d } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    _ = null !== (i = f.Z.getMessage(t, P)) && void 0 !== i ? i : y;
                if (null == _) {
                    (0, s.showToast)((0, s.createToast)(x.intl.string(x.t.R0RpRU), s.ToastType.FAILURE));
                    return;
                }
                G(!0);
                let g = (await Promise.all(e.map(u.qx))).filter(m.lm);
                if (
                    (0, A.Z)(_, g) &&
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
                    G(!1);
                    return;
                }
                d && (0, v.mc)(), null == O || O(), r && (await o.Z.fetchMessages({ channelId: g[0] }), (0, c.Kh)(g[0]));
                let I = await p.Z.sendForwards(_, g, {
                        ...w,
                        withMessage: a
                    }),
                    S = g.some((e) => {
                        let t = h.Z.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    I.every((e) => {
                        let { status: t } = e;
                        return 'fulfilled' === t;
                    })
                ) {
                    (0, E.gP)({
                        channelId: t,
                        messageId: P,
                        hasError: !1,
                        hasContextMessage: null != a && '' !== a,
                        numDestinations: g.length,
                        numDestinationChanges: B.current,
                        numQueryChanges: V.current,
                        anyDestinationHasSlowmode: S
                    }),
                        er();
                    return;
                }
                (0, E.gP)({
                    channelId: t,
                    messageId: P,
                    hasError: !0,
                    hasContextMessage: null != a && '' !== a,
                    numDestinations: g.length,
                    numDestinationChanges: B.current,
                    numQueryChanges: V.current,
                    anyDestinationHasSlowmode: S
                });
                let C = e.filter((e, t) => 'rejected' === I[t].status);
                (0, v.Np)({
                    messageId: P,
                    channelId: t,
                    message: _,
                    failedDestinations: C,
                    forwardOptions: w
                });
            },
            [t, w, P, y, O, er]
        ),
        ec = i.useCallback(
            (e) => {
                eo(q, {
                    withMessage: e,
                    transitionToDestination: 1 === q.length,
                    closeAfterSend: !0
                });
            },
            [eo, q]
        ),
        eu = i.useCallback(() => ec(), [ec]),
        ed = i.useCallback(
            function (e) {
                let { transitionToDestination: t, closeAfterSend: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                eo([e], {
                    transitionToDestination: t,
                    closeAfterSend: n
                });
            },
            [eo]
        );
    if (null == W || null == z) return null;
    let eh =
            et.length > 0
                ? (0, l.jsx)(S.F, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: et,
                      rowMode: j ? S.G.SEND : S.G.TOGGLE,
                      message: W,
                      originChannel: z,
                      handleToggleDestination: j ? ed : es,
                      selectedDestinations: q,
                      disableSelection: X
                  })
                : (0, l.jsxs)(s.ModalContent, {
                      className: N.noResults,
                      children: [
                          (0, l.jsx)('img', {
                              className: N.noResultsImg,
                              src: T,
                              alt: ''
                          }),
                          (0, l.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: x.intl.string(x.t.V6nAfH)
                          })
                      ]
                  }),
        ef = Y <= 1 ? x.intl.string(x.t.TXNS7e) : x.intl.formatToPlainString(x.t.jWtYUl, { count: Y });
    return (0, l.jsxs)(s.ModalRoot, {
        className: N.modal,
        'aria-label': x.intl.string(x.t['+SkRRk']),
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
                                        children: x.intl.string(x.t['+SkRRk'])
                                    }),
                                    children: X
                                        ? (0, l.jsx)(s.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'text-warning',
                                              children: x.intl.format(x.t['3Fbkio'], { count: L.G })
                                          })
                                        : (j || M) &&
                                          (0, l.jsx)(s.Heading, {
                                              variant: 'heading-sm/normal',
                                              color: 'header-muted',
                                              children: x.intl.string(x.t['VA+btL'])
                                          })
                                })
                            }),
                            (0, l.jsx)(s.ModalCloseButton, {
                                className: N.closeButton,
                                onClick: en
                            })
                        ]
                    }),
                    j &&
                        k &&
                        (0, l.jsx)('div', {
                            className: N.forwardPreviewWrapperInset,
                            children: (0, l.jsx)(b.O, {
                                message: W,
                                forwardOptions: w
                            })
                        }),
                    (0, l.jsx)(s.SearchBar, {
                        ref: ea,
                        size: s.SearchBar.Sizes.MEDIUM,
                        query: J,
                        onChange: ee,
                        onClear: ei,
                        placeholder: x.intl.string(x.t['5h0QOD']),
                        'aria-label': x.intl.string(x.t['5h0QOD']),
                        autoFocus: !0
                    })
                ]
            }),
            eh,
            !j &&
                (M
                    ? (0, l.jsx)(C.n, {
                          message: W,
                          forwardOptions: w,
                          sendLabel: ef,
                          canSend: Y > 0,
                          selectedDestinations: q,
                          isSending: U,
                          onSend: ec,
                          showPreview: k
                      })
                    : (0, l.jsxs)(s.ModalFooter, {
                          className: N.footer,
                          children: [
                              (0, l.jsx)(s.Button, {
                                  submitting: U,
                                  disabled: 0 === Y,
                                  onClick: eu,
                                  children: ef
                              }),
                              (0, l.jsx)(s.Button, {
                                  onClick: el,
                                  look: s.Button.Looks.OUTLINED,
                                  color: s.Button.Colors.PRIMARY,
                                  children: x.intl.string(x.t.WqhZsr)
                              })
                          ]
                      }))
        ]
    });
}
