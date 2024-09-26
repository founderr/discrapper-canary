t.r(n),
    t.d(n, {
        ForwardModal: function () {
            return L;
        }
    }),
    t(47120);
var l = t(735250),
    s = t(470079),
    a = t(392711),
    r = t(442837),
    i = t(481060),
    o = t(359110),
    u = t(987509),
    c = t(72214),
    d = t(592125),
    h = t(375954),
    f = t(934415),
    m = t(572004),
    g = t(823379),
    _ = t(859155),
    E = t(822869),
    S = t(346610),
    M = t(895442),
    v = t(757853),
    p = t(388275),
    x = t(912332),
    N = t(646746),
    C = t(819727),
    Z = t(689938),
    A = t(463061),
    b = t(621054);
function L(e) {
    let { channelId: n, messageId: L, initialSelectedDestinations: R, forwardOptions: I, onClose: w, onRequestSent: y, ...T } = e,
        { hasOneTapSendButton: j, hasMessageInput: P, hasPreview: D } = (0, S.yk)({ location: 'ForwardModal' }),
        O = s.useMemo(() => (0, u.dL)(n), [n]),
        [k, W] = s.useState(!1),
        G = (0, r.e7)([h.Z], () => h.Z.getMessage(n, L), [n, L]),
        U = (0, r.e7)([d.Z], () => d.Z.getChannel(n), [n]),
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
                J(e), (z.current += 1), '' !== e && B(n, L);
            },
            [n, L, B]
        ),
        $ = (0, c.s)({
            searchText: X,
            selectedDestinations: V,
            originDestination: O,
            includeMissingDMs: !0
        }),
        ee = s.useCallback(() => {
            (0, E.sF)({
                channelId: n,
                messageId: L,
                numDestinationChanges: H.current,
                numQueryChanges: z.current
            }),
                w();
        }, [n, L, w]),
        en = s.useCallback(() => {
            var e;
            let t = null === (e = d.Z.getChannel(n)) || void 0 === e ? void 0 : e.guild_id,
                l = (0, f.wR)(t, n, L);
            (0, i.showToast)((0, i.createToast)(Z.Z.Messages.COPIED_LINK, i.ToastType.LINK)), (0, m.JG)(l), (0, E.xp)(n, L);
        }, [n, L]),
        et = s.useCallback(() => {
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
                F(n, L, '' !== X),
                    q((n) => {
                        let t = n.findIndex((n) => {
                            let { type: t, id: l } = n;
                            return t === e.type && l === e.id;
                        });
                        if (-1 === t) return K ? n : (J(''), (H.current += 1), [e, ...n]);
                        let l = [...n];
                        return l.splice(t, 1), (H.current += 1), l;
                    });
            },
            [n, K, L, X, F]
        ),
        er = s.useCallback(
            async function (e) {
                let { withMessage: s, transitionToDestination: a, closeAfterSend: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    c = h.Z.getMessage(n, L);
                if (null == c) {
                    (0, i.showToast)((0, i.createToast)(Z.Z.Messages.ERROR_GENERIC_TITLE, i.ToastType.FAILURE));
                    return;
                }
                W(!0);
                let f = (await Promise.all(e.map(u.qx))).filter(g.lm);
                if (
                    (0, M.Z)(c, f) &&
                    !(await new Promise((e) => {
                        (0, i.openModalLazy)(async () => {
                            let { default: n } = await t.e('88643').then(t.bind(t, 466080));
                            return (t) =>
                                (0, l.jsx)(n, {
                                    ...t,
                                    onConfirm: () => e(!0),
                                    onBack: () => e(!1)
                                });
                        });
                    }))
                ) {
                    W(!1);
                    return;
                }
                r && (0, x.mc)(), null == y || y(), a && (0, o.Kh)(f[0]);
                let m = await _.Z.sendForwards(c, f, {
                        ...I,
                        withMessage: s
                    }),
                    S = f.some((e) => {
                        let n = d.Z.getChannel(e);
                        return null != n && n.rateLimitPerUser > 0;
                    });
                if (
                    m.every((e) => {
                        let { status: n } = e;
                        return 'fulfilled' === n;
                    })
                ) {
                    (0, E.gP)({
                        channelId: n,
                        messageId: L,
                        hasError: !1,
                        hasContextMessage: null != s && '' !== s,
                        numDestinations: f.length,
                        numDestinationChanges: H.current,
                        numQueryChanges: z.current,
                        anyDestinationHasSlowmode: S
                    }),
                        es();
                    return;
                }
                (0, E.gP)({
                    channelId: n,
                    messageId: L,
                    hasError: !0,
                    hasContextMessage: null != s && '' !== s,
                    numDestinations: f.length,
                    numDestinationChanges: H.current,
                    numQueryChanges: z.current,
                    anyDestinationHasSlowmode: S
                });
                let v = e.filter((e, n) => 'rejected' === m[n].status);
                (0, x.Np)({
                    messageId: L,
                    channelId: n,
                    failedDestinations: v,
                    forwardOptions: I
                });
            },
            [n, I, L, y, es]
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
                let { transitionToDestination: n, closeAfterSend: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                er([e], {
                    transitionToDestination: n,
                    closeAfterSend: t
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
                        onClear: et,
                        placeholder: Z.Z.Messages.SEARCH,
                        'aria-label': Z.Z.Messages.SEARCH,
                        autoFocus: !0
                    })
                ]
            }),
            ec,
            !j &&
                (P
                    ? (0, l.jsx)(p.n, {
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
                                  onClick: en,
                                  look: i.Button.Looks.OUTLINED,
                                  color: i.Button.Colors.PRIMARY,
                                  children: Z.Z.Messages.COPY_LINK
                              })
                          ]
                      }))
        ]
    });
}
