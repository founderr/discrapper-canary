n.r(t),
    n.d(t, {
        ForwardModal: function () {
            return Z;
        }
    }),
    n(47120);
var l = n(200651),
    a = n(192379),
    s = n(392711),
    i = n(442837),
    r = n(481060),
    o = n(348245),
    c = n(359110),
    u = n(987509),
    d = n(72214),
    h = n(592125),
    _ = n(375954),
    f = n(934415),
    E = n(572004),
    g = n(823379),
    m = n(859155),
    S = n(822869),
    A = n(346610),
    I = n(895442),
    p = n(757853),
    C = n(388275),
    N = n(912332),
    L = n(646746),
    v = n(819727),
    T = n(689938),
    b = n(463061),
    x = n(621054);
function Z(e) {
    let { channelId: t, messageId: Z, message: y, initialSelectedDestinations: M, forwardOptions: P, onClose: R, onRequestSent: O, ...D } = e,
        { hasOneTapSendButton: w, hasMessageInput: G, hasPreview: j } = (0, A.yk)({ location: 'ForwardModal' }),
        U = a.useMemo(() => (0, u.dL)(t), [t]),
        [F, k] = a.useState(!1),
        W = (0, i.e7)(
            [_.Z],
            () => {
                var e;
                return null !== (e = _.Z.getMessage(t, Z)) && void 0 !== e ? e : y;
            },
            [t, Z, y]
        ),
        H = (0, i.e7)([h.Z], () => h.Z.getChannel(t), [t]),
        B = (0, S.ZF)(),
        z = (0, S.mh)(),
        Q = a.useRef(0),
        V = a.useRef(0),
        [K, q] = a.useState(M),
        Y = K.length,
        X = Y >= v.G,
        [J, $] = a.useState(''),
        ee = a.useCallback(
            (e) => {
                $(e), (V.current += 1), '' !== e && z(t, Z);
            },
            [t, Z, z]
        ),
        et = (0, d.s)({
            searchText: J,
            selectedDestinations: K,
            originDestination: U,
            includeMissingDMs: !0
        }),
        en = a.useCallback(() => {
            (0, S.sF)({
                channelId: t,
                messageId: Z,
                numDestinationChanges: Q.current,
                numQueryChanges: V.current
            }),
                R();
        }, [t, Z, R]),
        el = a.useCallback(() => {
            var e;
            let n = null === (e = h.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id,
                l = (0, f.wR)(n, t, Z);
            (0, r.showToast)((0, r.createToast)(T.Z.Messages.COPIED_LINK, r.ToastType.LINK)), (0, E.JG)(l), (0, S.xp)(t, Z);
        }, [t, Z]),
        ea = a.useCallback(() => {
            $('');
        }, [$]),
        es = a.useRef(null);
    a.useEffect(() => {
        if ('' === J) {
            var e;
            null === (e = es.current) || void 0 === e || e.focus();
        }
    }, [J]);
    let ei = a.useMemo(
            () =>
                (0, s.throttle)(
                    () => {
                        (0, r.showToast)((0, r.createToast)(T.Z.Messages.MESSAGE_FORWARD_SUCCESS, r.ToastType.FORWARD));
                    },
                    3000,
                    {
                        leading: !0,
                        trailing: !1
                    }
                ),
            []
        ),
        er = a.useCallback(
            (e) => {
                B(t, Z, '' !== J),
                    q((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: l } = t;
                            return n === e.type && l === e.id;
                        });
                        if (-1 === n) return X ? t : ($(''), (Q.current += 1), [e, ...t]);
                        let l = [...t];
                        return l.splice(n, 1), (Q.current += 1), l;
                    });
            },
            [t, X, Z, J, B]
        ),
        eo = a.useCallback(
            async function (e) {
                var a;
                let { withMessage: s, transitionToDestination: i, closeAfterSend: d } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    f = null !== (a = _.Z.getMessage(t, Z)) && void 0 !== a ? a : y;
                if (null == f) {
                    (0, r.showToast)((0, r.createToast)(T.Z.Messages.ERROR_GENERIC_TITLE, r.ToastType.FAILURE));
                    return;
                }
                k(!0);
                let E = (await Promise.all(e.map(u.qx))).filter(g.lm);
                if (
                    (0, I.Z)(f, E) &&
                    !(await new Promise((e) => {
                        (0, r.openModalLazy)(async () => {
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
                    k(!1);
                    return;
                }
                d && (0, N.mc)(), null == O || O(), i && (await o.Z.fetchMessages({ channelId: E[0] }), (0, c.Kh)(E[0]));
                let A = await m.Z.sendForwards(f, E, {
                        ...P,
                        withMessage: s
                    }),
                    p = E.some((e) => {
                        let t = h.Z.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    A.every((e) => {
                        let { status: t } = e;
                        return 'fulfilled' === t;
                    })
                ) {
                    (0, S.gP)({
                        channelId: t,
                        messageId: Z,
                        hasError: !1,
                        hasContextMessage: null != s && '' !== s,
                        numDestinations: E.length,
                        numDestinationChanges: Q.current,
                        numQueryChanges: V.current,
                        anyDestinationHasSlowmode: p
                    }),
                        ei();
                    return;
                }
                (0, S.gP)({
                    channelId: t,
                    messageId: Z,
                    hasError: !0,
                    hasContextMessage: null != s && '' !== s,
                    numDestinations: E.length,
                    numDestinationChanges: Q.current,
                    numQueryChanges: V.current,
                    anyDestinationHasSlowmode: p
                });
                let C = e.filter((e, t) => 'rejected' === A[t].status);
                (0, N.Np)({
                    messageId: Z,
                    channelId: t,
                    message: f,
                    failedDestinations: C,
                    forwardOptions: P
                });
            },
            [t, P, Z, y, O, ei]
        ),
        ec = a.useCallback(
            (e) => {
                eo(K, {
                    withMessage: e,
                    transitionToDestination: 1 === K.length,
                    closeAfterSend: !0
                });
            },
            [eo, K]
        ),
        eu = a.useCallback(() => ec(), [ec]),
        ed = a.useCallback(
            function (e) {
                let { transitionToDestination: t, closeAfterSend: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                eo([e], {
                    transitionToDestination: t,
                    closeAfterSend: n
                });
            },
            [eo]
        );
    if (null == W || null == H) return null;
    let eh =
            et.length > 0
                ? (0, l.jsx)(p.F, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: et,
                      rowMode: w ? p.G.SEND : p.G.TOGGLE,
                      message: W,
                      originChannel: H,
                      handleToggleDestination: w ? ed : er,
                      selectedDestinations: K,
                      disableSelection: X
                  })
                : (0, l.jsxs)(r.ModalContent, {
                      className: b.noResults,
                      children: [
                          (0, l.jsx)('img', {
                              className: b.noResultsImg,
                              src: x,
                              alt: ''
                          }),
                          (0, l.jsx)(r.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: T.Z.Messages.SEARCH_NO_RESULTS
                          })
                      ]
                  }),
        e_ = Y <= 1 ? T.Z.Messages.SEND : T.Z.Messages.MESSAGES_SEND_SEPARATELY.format({ count: Y });
    return (0, l.jsxs)(r.ModalRoot, {
        className: b.modal,
        'aria-label': T.Z.Messages.MESSAGE_ACTION_FORWARD_TO,
        ...D,
        children: [
            (0, l.jsxs)(r.ModalHeader, {
                className: b.header,
                children: [
                    (0, l.jsxs)('div', {
                        className: b.titleLine,
                        children: [
                            (0, l.jsx)('div', {
                                className: b.title,
                                children: (0, l.jsx)(r.HeadingLevel, {
                                    component: (0, l.jsx)(r.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: T.Z.Messages.MESSAGE_ACTION_FORWARD_TO
                                    }),
                                    children: X
                                        ? (0, l.jsx)(r.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'text-warning',
                                              children: T.Z.Messages.MESSAGES_FORWARD_MAX_DESTINATION_COUNT.format({ count: v.G })
                                          })
                                        : (w || G) &&
                                          (0, l.jsx)(r.Heading, {
                                              variant: 'heading-sm/normal',
                                              color: 'header-muted',
                                              children: T.Z.Messages.MESSAGE_FORWARD_SUBTITLE
                                          })
                                })
                            }),
                            (0, l.jsx)(r.ModalCloseButton, {
                                className: b.closeButton,
                                onClick: en
                            })
                        ]
                    }),
                    w &&
                        j &&
                        (0, l.jsx)('div', {
                            className: b.forwardPreviewWrapperInset,
                            children: (0, l.jsx)(L.O, {
                                message: W,
                                forwardOptions: P
                            })
                        }),
                    (0, l.jsx)(r.SearchBar, {
                        ref: es,
                        size: r.SearchBar.Sizes.MEDIUM,
                        query: J,
                        onChange: ee,
                        onClear: ea,
                        placeholder: T.Z.Messages.SEARCH,
                        'aria-label': T.Z.Messages.SEARCH,
                        autoFocus: !0
                    })
                ]
            }),
            eh,
            !w &&
                (G
                    ? (0, l.jsx)(C.n, {
                          message: W,
                          forwardOptions: P,
                          sendLabel: e_,
                          canSend: Y > 0,
                          selectedDestinations: K,
                          isSending: F,
                          onSend: ec,
                          showPreview: j
                      })
                    : (0, l.jsxs)(r.ModalFooter, {
                          className: b.footer,
                          children: [
                              (0, l.jsx)(r.Button, {
                                  submitting: F,
                                  disabled: 0 === Y,
                                  onClick: eu,
                                  children: e_
                              }),
                              (0, l.jsx)(r.Button, {
                                  onClick: el,
                                  look: r.Button.Looks.OUTLINED,
                                  color: r.Button.Colors.PRIMARY,
                                  children: T.Z.Messages.COPY_LINK
                              })
                          ]
                      }))
        ]
    });
}
