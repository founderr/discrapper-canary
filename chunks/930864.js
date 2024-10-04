t.r(n),
    t.d(n, {
        ForwardModal: function () {
            return R;
        }
    }),
    t(47120);
var l = t(735250),
    s = t(470079),
    a = t(392711),
    r = t(442837),
    i = t(481060),
    o = t(348245),
    u = t(359110),
    c = t(987509),
    d = t(72214),
    h = t(592125),
    f = t(375954),
    m = t(934415),
    g = t(572004),
    _ = t(823379),
    E = t(859155),
    S = t(822869),
    M = t(346610),
    v = t(895442),
    p = t(757853),
    x = t(388275),
    N = t(912332),
    C = t(646746),
    Z = t(819727),
    A = t(689938),
    b = t(463061),
    L = t(621054);
function R(e) {
    let { channelId: n, messageId: R, initialSelectedDestinations: I, forwardOptions: w, onClose: y, onRequestSent: T, ...P } = e,
        { hasOneTapSendButton: j, hasMessageInput: D, hasPreview: O } = (0, M.yk)({ location: 'ForwardModal' }),
        k = s.useMemo(() => (0, c.dL)(n), [n]),
        [W, G] = s.useState(!1),
        U = (0, r.e7)([f.Z], () => f.Z.getMessage(n, R), [n, R]),
        F = (0, r.e7)([h.Z], () => h.Z.getChannel(n), [n]),
        B = (0, S.ZF)(),
        H = (0, S.mh)(),
        z = s.useRef(0),
        V = s.useRef(0),
        [q, Y] = s.useState(I),
        K = q.length,
        X = K >= Z.G,
        [J, Q] = s.useState(''),
        $ = s.useCallback(
            (e) => {
                Q(e), (V.current += 1), '' !== e && H(n, R);
            },
            [n, R, H]
        ),
        ee = (0, d.s)({
            searchText: J,
            selectedDestinations: q,
            originDestination: k,
            includeMissingDMs: !0
        }),
        en = s.useCallback(() => {
            (0, S.sF)({
                channelId: n,
                messageId: R,
                numDestinationChanges: z.current,
                numQueryChanges: V.current
            }),
                y();
        }, [n, R, y]),
        et = s.useCallback(() => {
            var e;
            let t = null === (e = h.Z.getChannel(n)) || void 0 === e ? void 0 : e.guild_id,
                l = (0, m.wR)(t, n, R);
            (0, i.showToast)((0, i.createToast)(A.Z.Messages.COPIED_LINK, i.ToastType.LINK)), (0, g.JG)(l), (0, S.xp)(n, R);
        }, [n, R]),
        el = s.useCallback(() => {
            Q('');
        }, [Q]),
        es = s.useRef(null);
    s.useEffect(() => {
        if ('' === J) {
            var e;
            null === (e = es.current) || void 0 === e || e.focus();
        }
    }, [J]);
    let ea = s.useMemo(
            () =>
                (0, a.throttle)(
                    () => {
                        (0, i.showToast)((0, i.createToast)(A.Z.Messages.MESSAGE_FORWARD_SUCCESS, i.ToastType.FORWARD));
                    },
                    3000,
                    {
                        leading: !0,
                        trailing: !1
                    }
                ),
            []
        ),
        er = s.useCallback(
            (e) => {
                B(n, R, '' !== J),
                    Y((n) => {
                        let t = n.findIndex((n) => {
                            let { type: t, id: l } = n;
                            return t === e.type && l === e.id;
                        });
                        if (-1 === t) return X ? n : (Q(''), (z.current += 1), [e, ...n]);
                        let l = [...n];
                        return l.splice(t, 1), (z.current += 1), l;
                    });
            },
            [n, X, R, J, B]
        ),
        ei = s.useCallback(
            async function (e) {
                let { withMessage: s, transitionToDestination: a, closeAfterSend: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    d = f.Z.getMessage(n, R);
                if (null == d) {
                    (0, i.showToast)((0, i.createToast)(A.Z.Messages.ERROR_GENERIC_TITLE, i.ToastType.FAILURE));
                    return;
                }
                G(!0);
                let m = (await Promise.all(e.map(c.qx))).filter(_.lm);
                if (
                    (0, v.Z)(d, m) &&
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
                    G(!1);
                    return;
                }
                r && (0, N.mc)(), null == T || T(), a && (await o.Z.fetchMessages({ channelId: m[0] }), (0, u.Kh)(m[0]));
                let g = await E.Z.sendForwards(d, m, {
                        ...w,
                        withMessage: s
                    }),
                    M = m.some((e) => {
                        let n = h.Z.getChannel(e);
                        return null != n && n.rateLimitPerUser > 0;
                    });
                if (
                    g.every((e) => {
                        let { status: n } = e;
                        return 'fulfilled' === n;
                    })
                ) {
                    (0, S.gP)({
                        channelId: n,
                        messageId: R,
                        hasError: !1,
                        hasContextMessage: null != s && '' !== s,
                        numDestinations: m.length,
                        numDestinationChanges: z.current,
                        numQueryChanges: V.current,
                        anyDestinationHasSlowmode: M
                    }),
                        ea();
                    return;
                }
                (0, S.gP)({
                    channelId: n,
                    messageId: R,
                    hasError: !0,
                    hasContextMessage: null != s && '' !== s,
                    numDestinations: m.length,
                    numDestinationChanges: z.current,
                    numQueryChanges: V.current,
                    anyDestinationHasSlowmode: M
                });
                let p = e.filter((e, n) => 'rejected' === g[n].status);
                (0, N.Np)({
                    messageId: R,
                    channelId: n,
                    failedDestinations: p,
                    forwardOptions: w
                });
            },
            [n, w, R, T, ea]
        ),
        eo = s.useCallback(
            (e) => {
                ei(q, {
                    withMessage: e,
                    transitionToDestination: 1 === q.length,
                    closeAfterSend: !0
                });
            },
            [ei, q]
        ),
        eu = s.useCallback(() => eo(), [eo]),
        ec = s.useCallback(
            function (e) {
                let { transitionToDestination: n, closeAfterSend: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ei([e], {
                    transitionToDestination: n,
                    closeAfterSend: t
                });
            },
            [ei]
        );
    if (null == U || null == F) return null;
    let ed =
            ee.length > 0
                ? (0, l.jsx)(p.F, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: ee,
                      rowMode: j ? p.G.SEND : p.G.TOGGLE,
                      message: U,
                      originChannel: F,
                      handleToggleDestination: j ? ec : er,
                      selectedDestinations: q,
                      disableSelection: X
                  })
                : (0, l.jsxs)(i.ModalContent, {
                      className: b.noResults,
                      children: [
                          (0, l.jsx)('img', {
                              className: b.noResultsImg,
                              src: L,
                              alt: ''
                          }),
                          (0, l.jsx)(i.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: A.Z.Messages.SEARCH_NO_RESULTS
                          })
                      ]
                  }),
        eh = K <= 1 ? A.Z.Messages.SEND : A.Z.Messages.MESSAGES_SEND_SEPARATELY.format({ count: K });
    return (0, l.jsxs)(i.ModalRoot, {
        className: b.modal,
        'aria-label': A.Z.Messages.MESSAGE_ACTION_FORWARD_TO,
        ...P,
        children: [
            (0, l.jsxs)(i.ModalHeader, {
                className: b.header,
                children: [
                    (0, l.jsxs)('div', {
                        className: b.titleLine,
                        children: [
                            (0, l.jsx)('div', {
                                className: b.title,
                                children: (0, l.jsx)(i.HeadingLevel, {
                                    component: (0, l.jsx)(i.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: A.Z.Messages.MESSAGE_ACTION_FORWARD_TO
                                    }),
                                    children: X
                                        ? (0, l.jsx)(i.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'text-warning',
                                              children: A.Z.Messages.MESSAGES_FORWARD_MAX_DESTINATION_COUNT.format({ count: Z.G })
                                          })
                                        : (j || D) &&
                                          (0, l.jsx)(i.Heading, {
                                              variant: 'heading-sm/normal',
                                              color: 'header-muted',
                                              children: A.Z.Messages.MESSAGE_FORWARD_SUBTITLE
                                          })
                                })
                            }),
                            (0, l.jsx)(i.ModalCloseButton, {
                                className: b.closeButton,
                                onClick: en
                            })
                        ]
                    }),
                    j &&
                        O &&
                        (0, l.jsx)('div', {
                            className: b.forwardPreviewWrapperInset,
                            children: (0, l.jsx)(C.O, {
                                message: U,
                                forwardOptions: w
                            })
                        }),
                    (0, l.jsx)(i.SearchBar, {
                        ref: es,
                        size: i.SearchBar.Sizes.MEDIUM,
                        query: J,
                        onChange: $,
                        onClear: el,
                        placeholder: A.Z.Messages.SEARCH,
                        'aria-label': A.Z.Messages.SEARCH,
                        autoFocus: !0
                    })
                ]
            }),
            ed,
            !j &&
                (D
                    ? (0, l.jsx)(x.n, {
                          message: U,
                          forwardOptions: w,
                          sendLabel: eh,
                          canSend: K > 0,
                          selectedDestinations: q,
                          isSending: W,
                          onSend: eo,
                          showPreview: O
                      })
                    : (0, l.jsxs)(i.ModalFooter, {
                          className: b.footer,
                          children: [
                              (0, l.jsx)(i.Button, {
                                  submitting: W,
                                  disabled: 0 === K,
                                  onClick: eu,
                                  children: eh
                              }),
                              (0, l.jsx)(i.Button, {
                                  onClick: et,
                                  look: i.Button.Looks.OUTLINED,
                                  color: i.Button.Colors.PRIMARY,
                                  children: A.Z.Messages.COPY_LINK
                              })
                          ]
                      }))
        ]
    });
}
