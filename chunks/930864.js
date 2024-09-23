n.r(t),
    n.d(t, {
        ForwardModal: function () {
            return T;
        }
    }),
    n(47120);
var l = n(735250),
    a = n(470079),
    s = n(392711),
    i = n(442837),
    r = n(481060),
    o = n(359110),
    c = n(987509),
    u = n(72214),
    d = n(592125),
    h = n(375954),
    _ = n(934415),
    f = n(572004),
    E = n(823379),
    g = n(859155),
    m = n(822869),
    S = n(346610),
    A = n(895442),
    I = n(757853),
    p = n(388275),
    C = n(912332),
    N = n(646746),
    v = n(819727),
    L = n(689938),
    b = n(463061),
    x = n(621054);
function T(e) {
    let { channelId: t, messageId: T, initialSelectedDestinations: Z, forwardOptions: y, onClose: M, onRequestSent: R, ...P } = e,
        { hasOneTapSendButton: O, hasMessageInput: D, hasPreview: w } = (0, S.yk)({ location: 'ForwardModal' }),
        G = a.useMemo(() => (0, c.dL)(t), [t]),
        [j, F] = a.useState(!1),
        U = (0, i.e7)([h.Z], () => h.Z.getMessage(t, T), [t, T]),
        k = (0, i.e7)([d.Z], () => d.Z.getChannel(t), [t]),
        W = (0, m.ZF)(),
        H = (0, m.mh)(),
        B = a.useRef(0),
        z = a.useRef(0),
        [Q, K] = a.useState(Z),
        V = Q.length,
        q = V >= v.G,
        [Y, X] = a.useState(''),
        J = a.useCallback(
            (e) => {
                X(e), (z.current += 1), '' !== e && H(t, T);
            },
            [t, T, H]
        ),
        $ = (0, u.s)({
            searchText: Y,
            selectedDestinations: Q,
            originDestination: G,
            includeMissingDMs: !0
        }),
        ee = a.useCallback(() => {
            (0, m.sF)({
                channelId: t,
                messageId: T,
                numDestinationChanges: B.current,
                numQueryChanges: z.current
            }),
                M();
        }, [t, T, M]),
        et = a.useCallback(() => {
            var e;
            let n = null === (e = d.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id,
                l = (0, _.wR)(n, t, T);
            (0, r.showToast)((0, r.createToast)(L.Z.Messages.COPIED_LINK, r.ToastType.LINK)), (0, f.JG)(l), (0, m.xp)(t, T);
        }, [t, T]),
        en = a.useCallback(() => {
            X('');
        }, [X]),
        el = a.useRef(null);
    a.useEffect(() => {
        if ('' === Y) {
            var e;
            null === (e = el.current) || void 0 === e || e.focus();
        }
    }, [Y]);
    let ea = a.useMemo(
            () =>
                (0, s.throttle)(
                    () => {
                        (0, r.showToast)((0, r.createToast)(L.Z.Messages.MESSAGE_FORWARD_SUCCESS, r.ToastType.FORWARD));
                    },
                    3000,
                    {
                        leading: !0,
                        trailing: !1
                    }
                ),
            []
        ),
        es = a.useCallback(
            (e) => {
                W(t, T, '' !== Y),
                    K((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: l } = t;
                            return n === e.type && l === e.id;
                        });
                        if (-1 === n) return q ? t : (X(''), (B.current += 1), [e, ...t]);
                        let l = [...t];
                        return l.splice(n, 1), (B.current += 1), l;
                    });
            },
            [t, q, T, Y, W]
        ),
        ei = a.useCallback(
            async function (e) {
                let { withMessage: a, transitionToDestination: s, closeAfterSend: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    u = h.Z.getMessage(t, T);
                if (null == u) {
                    (0, r.showToast)((0, r.createToast)(L.Z.Messages.ERROR_GENERIC_TITLE, r.ToastType.FAILURE));
                    return;
                }
                F(!0);
                let _ = (await Promise.all(e.map(c.qx))).filter(E.lm);
                if (
                    (0, A.Z)(u, _) &&
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
                    F(!1);
                    return;
                }
                i && (0, C.mc)(), null == R || R(), s && (0, o.Kh)(_[0]);
                let f = await g.Z.sendForwards(u, _, {
                        ...y,
                        withMessage: a
                    }),
                    S = _.some((e) => {
                        let t = d.Z.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    f.every((e) => {
                        let { status: t } = e;
                        return 'fulfilled' === t;
                    })
                ) {
                    (0, m.gP)({
                        channelId: t,
                        messageId: T,
                        hasError: !1,
                        hasContextMessage: null != a && '' !== a,
                        numDestinations: _.length,
                        numDestinationChanges: B.current,
                        numQueryChanges: z.current,
                        anyDestinationHasSlowmode: S
                    }),
                        ea();
                    return;
                }
                (0, m.gP)({
                    channelId: t,
                    messageId: T,
                    hasError: !0,
                    hasContextMessage: null != a && '' !== a,
                    numDestinations: _.length,
                    numDestinationChanges: B.current,
                    numQueryChanges: z.current,
                    anyDestinationHasSlowmode: S
                });
                let I = e.filter((e, t) => 'rejected' === f[t].status);
                (0, C.Np)({
                    messageId: T,
                    channelId: t,
                    failedDestinations: I,
                    forwardOptions: y
                });
            },
            [t, y, T, R, ea]
        ),
        er = a.useCallback(
            (e) => {
                ei(Q, {
                    withMessage: e,
                    transitionToDestination: 1 === Q.length,
                    closeAfterSend: !0
                });
            },
            [ei, Q]
        ),
        eo = a.useCallback(() => er(), [er]),
        ec = a.useCallback(
            function (e) {
                let { transitionToDestination: t, closeAfterSend: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ei([e], {
                    transitionToDestination: t,
                    closeAfterSend: n
                });
            },
            [ei]
        );
    if (null == U || null == k) return null;
    let eu =
            $.length > 0
                ? (0, l.jsx)(I.F, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: $,
                      rowMode: O ? I.G.SEND : I.G.TOGGLE,
                      message: U,
                      originChannel: k,
                      handleToggleDestination: O ? ec : es,
                      selectedDestinations: Q,
                      disableSelection: q
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
                              children: L.Z.Messages.SEARCH_NO_RESULTS
                          })
                      ]
                  }),
        ed = V <= 1 ? L.Z.Messages.SEND : L.Z.Messages.MESSAGES_SEND_SEPARATELY.format({ count: V });
    return (0, l.jsxs)(r.ModalRoot, {
        className: b.modal,
        'aria-label': L.Z.Messages.MESSAGE_ACTION_FORWARD_TO,
        ...P,
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
                                        children: L.Z.Messages.MESSAGE_ACTION_FORWARD_TO
                                    }),
                                    children: q
                                        ? (0, l.jsx)(r.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'text-warning',
                                              children: L.Z.Messages.MESSAGES_FORWARD_MAX_DESTINATION_COUNT.format({ count: v.G })
                                          })
                                        : (O || D) &&
                                          (0, l.jsx)(r.Heading, {
                                              variant: 'heading-sm/normal',
                                              color: 'header-muted',
                                              children: L.Z.Messages.MESSAGE_FORWARD_SUBTITLE
                                          })
                                })
                            }),
                            (0, l.jsx)(r.ModalCloseButton, {
                                className: b.closeButton,
                                onClick: ee
                            })
                        ]
                    }),
                    O &&
                        w &&
                        (0, l.jsx)('div', {
                            className: b.forwardPreviewWrapperInset,
                            children: (0, l.jsx)(N.O, {
                                message: U,
                                forwardOptions: y
                            })
                        }),
                    (0, l.jsx)(r.SearchBar, {
                        ref: el,
                        size: r.SearchBar.Sizes.MEDIUM,
                        query: Y,
                        onChange: J,
                        onClear: en,
                        placeholder: L.Z.Messages.SEARCH,
                        'aria-label': L.Z.Messages.SEARCH,
                        autoFocus: !0
                    })
                ]
            }),
            eu,
            !O &&
                (D
                    ? (0, l.jsx)(p.n, {
                          message: U,
                          forwardOptions: y,
                          sendLabel: ed,
                          canSend: V > 0,
                          selectedDestinations: Q,
                          isSending: j,
                          onSend: er,
                          showPreview: w
                      })
                    : (0, l.jsxs)(r.ModalFooter, {
                          className: b.footer,
                          children: [
                              (0, l.jsx)(r.Button, {
                                  submitting: j,
                                  disabled: 0 === V,
                                  onClick: eo,
                                  children: ed
                              }),
                              (0, l.jsx)(r.Button, {
                                  onClick: et,
                                  look: r.Button.Looks.OUTLINED,
                                  color: r.Button.Colors.PRIMARY,
                                  children: L.Z.Messages.COPY_LINK
                              })
                          ]
                      }))
        ]
    });
}
