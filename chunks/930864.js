n.r(t),
    n.d(t, {
        ForwardModal: function () {
            return L;
        }
    }),
    n(47120);
var l = n(735250),
    s = n(470079),
    a = n(392711),
    r = n(442837),
    i = n(481060),
    o = n(359110),
    u = n(987509),
    c = n(72214),
    d = n(592125),
    h = n(375954),
    m = n(934415),
    f = n(572004),
    g = n(823379),
    _ = n(859155),
    E = n(822869),
    S = n(346610),
    M = n(895442),
    v = n(757853),
    x = n(388275),
    p = n(912332),
    N = n(646746),
    C = n(819727),
    Z = n(689938),
    A = n(463061),
    b = n(621054);
function L(e) {
    let { channelId: t, messageId: L, initialSelectedDestinations: R, forwardOptions: I, onClose: w, onRequestSent: y, ...T } = e,
        { hasOneTapSendButton: j, hasMessageInput: P, hasPreview: D } = (0, S.yk)({ location: 'ForwardModal' }),
        O = s.useMemo(() => (0, u.dL)(t), [t]),
        [k, W] = s.useState(!1),
        G = (0, r.e7)([h.Z], () => h.Z.getMessage(t, L), [t, L]),
        U = (0, r.e7)([d.Z], () => d.Z.getChannel(t), [t]),
        F = (0, E.ZF)(),
        B = (0, E.mh)(),
        H = s.useRef(0),
        z = s.useRef(0),
        [V, q] = s.useState(R),
        Y = V.length,
        K = Y >= C.G,
        [X, J] = s.useState(''),
        Q = s.useCallback(
            (e) => {
                J(e), (z.current += 1), '' !== e && B(t, L);
            },
            [t, L, B]
        ),
        $ = (0, c.s)({
            searchText: X,
            selectedDestinations: V,
            originDestination: O,
            includeMissingDMs: !0
        }),
        ee = s.useCallback(() => {
            (0, E.sF)({
                channelId: t,
                messageId: L,
                numDestinationChanges: H.current,
                numQueryChanges: z.current
            }),
                w();
        }, [t, L, w]),
        et = s.useCallback(() => {
            var e;
            let n = null === (e = d.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id,
                l = (0, m.wR)(n, t, L);
            (0, i.showToast)((0, i.createToast)(Z.Z.Messages.COPIED_LINK, i.ToastType.LINK)), (0, f.JG)(l), (0, E.xp)(t, L);
        }, [t, L]),
        en = s.useCallback(() => {
            J('');
        }, [J]),
        el = s.useRef(null);
    s.useEffect(() => {
        if ('' === X) {
            var e;
            null === (e = el.current) || void 0 === e || e.focus();
        }
    }, [X]);
    let es = s.useMemo(
            () =>
                (0, a.throttle)(
                    () => {
                        (0, i.showToast)((0, i.createToast)(Z.Z.Messages.MESSAGE_FORWARD_SUCCESS, i.ToastType.FORWARD));
                    },
                    3000,
                    {
                        leading: !0,
                        trailing: !1
                    }
                ),
            []
        ),
        ea = s.useCallback(
            (e) => {
                F(t, L, '' !== X),
                    q((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: l } = t;
                            return n === e.type && l === e.id;
                        });
                        if (-1 === n) return K ? t : (J(''), (H.current += 1), [e, ...t]);
                        let l = [...t];
                        return l.splice(n, 1), (H.current += 1), l;
                    });
            },
            [t, K, L, X, F]
        ),
        er = s.useCallback(
            async function (e) {
                let { withMessage: s, transitionToDestination: a, closeAfterSend: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    c = h.Z.getMessage(t, L);
                if (null == c) {
                    (0, i.showToast)((0, i.createToast)(Z.Z.Messages.ERROR_GENERIC_TITLE, i.ToastType.FAILURE));
                    return;
                }
                W(!0);
                let m = (await Promise.all(e.map(u.qx))).filter(g.lm);
                if (
                    (0, M.Z)(c, m) &&
                    !(await new Promise((e) => {
                        (0, i.openModalLazy)(async () => {
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
                    W(!1);
                    return;
                }
                r && (0, p.mc)(), null == y || y(), a && (0, o.Kh)(m[0]);
                let f = await _.Z.sendForwards(c, m, {
                        ...I,
                        withMessage: s
                    }),
                    S = m.some((e) => {
                        let t = d.Z.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    f.every((e) => {
                        let { status: t } = e;
                        return 'fulfilled' === t;
                    })
                ) {
                    (0, E.gP)({
                        channelId: t,
                        messageId: L,
                        hasError: !1,
                        hasContextMessage: null != s && '' !== s,
                        numDestinations: m.length,
                        numDestinationChanges: H.current,
                        numQueryChanges: z.current,
                        anyDestinationHasSlowmode: S
                    }),
                        es();
                    return;
                }
                (0, E.gP)({
                    channelId: t,
                    messageId: L,
                    hasError: !0,
                    hasContextMessage: null != s && '' !== s,
                    numDestinations: m.length,
                    numDestinationChanges: H.current,
                    numQueryChanges: z.current,
                    anyDestinationHasSlowmode: S
                });
                let v = e.filter((e, t) => 'rejected' === f[t].status);
                (0, p.Np)({
                    messageId: L,
                    channelId: t,
                    failedDestinations: v,
                    forwardOptions: I
                });
            },
            [t, I, L, y, es]
        ),
        ei = s.useCallback(
            (e) => {
                er(V, {
                    withMessage: e,
                    transitionToDestination: 1 === V.length,
                    closeAfterSend: !0
                });
            },
            [er, V]
        ),
        eo = s.useCallback(() => ei(), [ei]),
        eu = s.useCallback(
            function (e) {
                let { transitionToDestination: t, closeAfterSend: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                er([e], {
                    transitionToDestination: t,
                    closeAfterSend: n
                });
            },
            [er]
        );
    if (null == G || null == U) return null;
    let ec =
            $.length > 0
                ? (0, l.jsx)(v.F, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: $,
                      rowMode: j ? v.G.SEND : v.G.TOGGLE,
                      message: G,
                      originChannel: U,
                      handleToggleDestination: j ? eu : ea,
                      selectedDestinations: V,
                      disableSelection: K
                  })
                : (0, l.jsxs)(i.ModalContent, {
                      className: A.noResults,
                      children: [
                          (0, l.jsx)('img', {
                              className: A.noResultsImg,
                              src: b,
                              alt: ''
                          }),
                          (0, l.jsx)(i.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: Z.Z.Messages.SEARCH_NO_RESULTS
                          })
                      ]
                  }),
        ed = Y <= 1 ? Z.Z.Messages.SEND : Z.Z.Messages.MESSAGES_SEND_SEPARATELY.format({ count: Y });
    return (0, l.jsxs)(i.ModalRoot, {
        className: A.modal,
        'aria-label': Z.Z.Messages.MESSAGE_ACTION_FORWARD_TO,
        ...T,
        children: [
            (0, l.jsxs)(i.ModalHeader, {
                className: A.header,
                children: [
                    (0, l.jsxs)('div', {
                        className: A.titleLine,
                        children: [
                            (0, l.jsx)('div', {
                                className: A.title,
                                children: (0, l.jsx)(i.HeadingLevel, {
                                    component: (0, l.jsx)(i.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: Z.Z.Messages.MESSAGE_ACTION_FORWARD_TO
                                    }),
                                    children: K
                                        ? (0, l.jsx)(i.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'text-warning',
                                              children: Z.Z.Messages.MESSAGES_FORWARD_MAX_DESTINATION_COUNT.format({ count: C.G })
                                          })
                                        : (j || P) &&
                                          (0, l.jsx)(i.Heading, {
                                              variant: 'heading-sm/normal',
                                              color: 'header-muted',
                                              children: Z.Z.Messages.MESSAGE_FORWARD_SUBTITLE
                                          })
                                })
                            }),
                            (0, l.jsx)(i.ModalCloseButton, {
                                className: A.closeButton,
                                onClick: ee
                            })
                        ]
                    }),
                    j &&
                        D &&
                        (0, l.jsx)('div', {
                            className: A.forwardPreviewWrapperInset,
                            children: (0, l.jsx)(N.O, {
                                message: G,
                                forwardOptions: I
                            })
                        }),
                    (0, l.jsx)(i.SearchBar, {
                        ref: el,
                        size: i.SearchBar.Sizes.MEDIUM,
                        query: X,
                        onChange: Q,
                        onClear: en,
                        placeholder: Z.Z.Messages.SEARCH,
                        'aria-label': Z.Z.Messages.SEARCH,
                        autoFocus: !0
                    })
                ]
            }),
            ec,
            !j &&
                (P
                    ? (0, l.jsx)(x.n, {
                          message: G,
                          forwardOptions: I,
                          sendLabel: ed,
                          canSend: Y > 0,
                          selectedDestinations: V,
                          isSending: k,
                          onSend: ei,
                          showPreview: D
                      })
                    : (0, l.jsxs)(i.ModalFooter, {
                          className: A.footer,
                          children: [
                              (0, l.jsx)(i.Button, {
                                  submitting: k,
                                  disabled: 0 === Y,
                                  onClick: eo,
                                  children: ed
                              }),
                              (0, l.jsx)(i.Button, {
                                  onClick: et,
                                  look: i.Button.Looks.OUTLINED,
                                  color: i.Button.Colors.PRIMARY,
                                  children: Z.Z.Messages.COPY_LINK
                              })
                          ]
                      }))
        ]
    });
}
