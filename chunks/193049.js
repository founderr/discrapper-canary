n.r(t),
    n.d(t, {
        default: function () {
            return P;
        }
    }),
    n(47120);
var s = n(735250),
    i = n(470079),
    a = n(512722),
    r = n.n(a),
    o = n(990547),
    l = n(399606),
    u = n(481060),
    d = n(232567),
    c = n(809206),
    E = n(479531),
    _ = n(484459),
    m = n(594174),
    g = n(626135),
    f = n(51144),
    I = n(986197),
    S = n(135200),
    T = n(346585),
    h = n(347649),
    N = n(361117),
    O = n(108793),
    M = n(635774),
    C = n(387955),
    L = n(801461),
    x = n(448624),
    R = n(981631),
    p = n(689938),
    A = n(168534);
function P(e) {
    let t,
        { source: n, transitionState: a, onClose: P, oneClickFlow: y = !1 } = e,
        [Z, b] = i.useState(y ? x.A.SUGGESTIONS : x.A.INFO),
        [U, G] = i.useState(!1),
        [j, D] = i.useState(null),
        [W, k] = i.useState(y ? L.Wq.SUGGESTION : L.Wq.NONE),
        [F, B] = i.useState(!1),
        [w, q] = i.useState(!1),
        H = i.useRef(null),
        X = (0, l.e7)([S.Z], () => S.Z.isCurrentUsernameInvalid()),
        V = (0, l.e7)([m.default], () => {
            let e = m.default.getCurrentUser();
            return r()(null != e, 'PomeloModal: user cannot be undefined'), e;
        }),
        z = (0, h.CC)(),
        { usernameSuggestion: Y, usernameSuggestionLoading: K } = (0, N.G)(y ? L.en : void 0);
    i.useEffect(() => {
        W === L.Wq.EDIT_USERNAME && q(!0),
            g.default.track(R.rMx.POMELO_EDIT_STEP_VIEWED, {
                source: n,
                step: W
            });
    }, [W, n]),
        i.useEffect(() => {
            !w &&
                !F &&
                null != Y &&
                Y.length > 0 &&
                $((e) => ({
                    ...e,
                    username: Y
                }));
        }, [Y, w, F]);
    let [Q, $] = i.useState({
            username: (0, T.e$)(V),
            globalName: f.ZP.getName(V)
        }),
        J = (e) => {
            D(null),
                null != e.username && B(!0),
                $((t) => ({
                    ...t,
                    ...e
                }));
        },
        ee = i.useMemo(
            () => [
                {
                    slideId: x.A.INFO,
                    next: x.A.EDIT_SCREEN,
                    footerButtons: ['REMIND_ME_LATER', 'GET_STARTED']
                },
                {
                    slideId: x.A.EDIT_SCREEN,
                    next: x.A.FINISH_LATER,
                    back: x.A.INFO,
                    footerButtons: [W === L.Wq.PREVIEW ? 'GOT_IT' : 'BACK', W === L.Wq.PREVIEW ? 'GOT_IT' : W === L.Wq.EDIT_USERNAME ? 'SUBMIT' : 'NEXT']
                },
                {
                    slideId: x.A.FINISH_LATER,
                    back: x.A.EDIT_SCREEN
                },
                {
                    slideId: x.A.SUGGESTIONS,
                    footerButtons: [W === L.Wq.PREVIEW ? 'GOT_IT' : 'UPDATE']
                },
                { slideId: x.A.FINISH_LATER }
            ],
            [W]
        ),
        et = ee.length,
        en = i.useCallback(async () => {
            if (Q.globalName.length <= 0) {
                let e = p.Z.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                    minNum: 1,
                    maxNum: 32
                });
                D(e),
                    g.default.track(R.rMx.POMELO_ERRORS, {
                        reason: e,
                        display_name_error: !0,
                        location: 'modal'
                    });
                return;
            }
            if (f.ZP.getGlobalName(V) === Q.globalName) {
                k(L.Wq.EDIT_USERNAME);
                return;
            }
            try {
                D(null), G(!0), await (0, c.S2)({ global_name: Q.globalName }), k(L.Wq.EDIT_USERNAME);
            } catch (t) {
                let e = new E.Z(t).getAnyErrorMessage();
                g.default.track(R.rMx.POMELO_ERRORS, {
                    reason: e,
                    display_name_error: !0,
                    location: 'modal'
                }),
                    D(e);
            } finally {
                G(!1);
            }
        }, [V, Q]),
        es = i.useCallback(async () => {
            try {
                D(null), G(!0), await I.Z.createPomelo({ username: (0, T.R_)(Q.username) }, y), await (0, d.In)(V.id), k(L.Wq.PREVIEW);
            } catch (n) {
                let e = new E.Z(n),
                    t = (null == e ? void 0 : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : p.Z.Messages.ERROR_GENERIC_TITLE;
                D(t),
                    g.default.track(R.rMx.POMELO_ERRORS, {
                        reason: t,
                        username_error: !0,
                        location: 'modal',
                        one_click_flow: y
                    });
            } finally {
                G(!1);
            }
        }, [Q, V.id, y]),
        ei = X || (0, T.NX)(V),
        ea = i.useCallback(() => {
            k(ei ? L.Wq.EDIT_USERNAME : L.Wq.EDIT_DISPLAY_NAME), b(ee[Math.min(et - 1, Z + 1)].slideId);
        }, [Z, ee, et, ei]),
        er = i.useCallback(() => {
            D(null), Z === x.A.EDIT_SCREEN ? (W === L.Wq.EDIT_USERNAME ? (ei ? (k(L.Wq.NONE), b(ee[Math.max(0, Z - 1)].slideId)) : k(L.Wq.EDIT_DISPLAY_NAME)) : W === L.Wq.EDIT_DISPLAY_NAME ? (k(L.Wq.NONE), b(ee[Math.max(0, Z - 1)].slideId)) : W === L.Wq.PREVIEW && k(L.Wq.EDIT_USERNAME)) : b(ee[Math.max(0, Z - 1)].slideId);
        }, [ee, Z, W, ei]),
        eo = i.useCallback(() => {
            b(x.A.FINISH_LATER);
        }, []),
        el = i.useCallback(() => {
            y ? (b(x.A.SUGGESTIONS), k(L.Wq.SUGGESTION)) : (b(x.A.INFO), k(L.Wq.NONE));
        }, [y]),
        eu = i.useMemo(() => {
            if (Z === x.A.EDIT_SCREEN && W === L.Wq.EDIT_DISPLAY_NAME) return en;
            if (Z === x.A.EDIT_SCREEN && W === L.Wq.EDIT_USERNAME) return es;
            if (Z === x.A.SUGGESTIONS && W === L.Wq.SUGGESTION) return es;
            else return ea;
        }, [Z, W, en, es, ea]),
        ed = i.useMemo(() => {
            var e, t;
            return v(
                null !== (t = null === (e = ee.find((e) => e.slideId === Z)) || void 0 === e ? void 0 : e.footerButtons) && void 0 !== t ? t : [],
                {
                    handleNext: eu,
                    handleBack: er,
                    handleRemindMeLater: eo,
                    onClose: P
                },
                U,
                K,
                F
            );
        }, [er, eo, eu, P, ee, Z, U, K, F]),
        ec = i.useMemo(() => (0, T.zV)(V), [V]);
    i.useLayoutEffect(() => {
        (0, _.Z)(V.id, ec);
    }, [V, ec]),
        i.useEffect(() => {
            var e, t;
            switch (W) {
                case L.Wq.EDIT_DISPLAY_NAME:
                    null === (e = H.current) || void 0 === e || e.focusDisplayName();
                    break;
                case L.Wq.EDIT_USERNAME:
                case L.Wq.SUGGESTION:
                    null === (t = H.current) || void 0 === t || t.focusUsername();
            }
        }, [W]);
    return (
        !F && null == j && (W === L.Wq.EDIT_USERNAME ? (t = p.Z.Messages.POMELO_SUGGESTION_ORIGIN_NOTICE.format({ source: V.username })) : W === L.Wq.SUGGESTION && (K || null != Y) && (t = p.Z.Messages.POMELO_SUGGESTIONS_OCF)),
        (0, s.jsxs)(u.ModalRoot, {
            className: A.modalRoot,
            impression: {
                impressionName: o.ImpressionNames.POMELO_LANDING,
                impressionProperties: {
                    source: n,
                    impression_group: o.ImpressionGroups.POMELO_FLOW,
                    one_click_flow: y
                }
            },
            transitionState: a,
            size: u.ModalSize.DYNAMIC,
            children: [
                (0, s.jsx)(u.Button, {
                    onClick: () => {
                        z && (Z === x.A.SUGGESTIONS || Z === x.A.EDIT_SCREEN) ? b(x.A.FINISH_LATER) : P();
                    },
                    size: u.Button.Sizes.MIN,
                    look: u.Button.Looks.BLANK,
                    className: A.closeContainer,
                    'aria-label': p.Z.Messages.CLOSE,
                    children: (0, s.jsx)(u.XSmallIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 15,
                        height: 15,
                        className: A.close
                    })
                }),
                (0, s.jsx)(u.ModalContent, {
                    className: A.contentContainer,
                    children: (0, s.jsxs)(u.Slides, {
                        activeSlide: Z,
                        width: 480,
                        children: [
                            (0, s.jsx)(u.Slide, {
                                id: x.A.INFO,
                                children: (0, s.jsx)(C.Z, { user: V })
                            }),
                            (0, s.jsx)(u.Slide, {
                                id: x.A.EDIT_SCREEN,
                                children: (0, s.jsx)(O.Z, {
                                    user: V,
                                    error: j,
                                    editState: W,
                                    userRef: H,
                                    formValues: Q,
                                    footerNotice: t,
                                    onChangeFormValue: J,
                                    onFocusUsername: () => k(L.Wq.EDIT_USERNAME),
                                    onFocusDisplayName: () => k(L.Wq.EDIT_DISPLAY_NAME),
                                    onClose: P
                                })
                            }),
                            (0, s.jsx)(u.Slide, {
                                id: x.A.FINISH_LATER,
                                children: (0, s.jsx)(M.Z, {
                                    onClose: P,
                                    handleStartFlow: el
                                })
                            }),
                            (0, s.jsx)(u.Slide, {
                                id: x.A.SUGGESTIONS,
                                children: (0, s.jsx)(O.Z, {
                                    user: V,
                                    error: j,
                                    editState: W,
                                    userRef: H,
                                    formValues: Q,
                                    footerNotice: t,
                                    onChangeFormValue: J,
                                    onFocusUsername: () => k(L.Wq.SUGGESTION),
                                    onFocusDisplayName: () => k(L.Wq.EDIT_DISPLAY_NAME),
                                    onClose: P,
                                    usernameSuggestionLoading: K,
                                    oneClickFlow: y
                                })
                            })
                        ]
                    })
                }),
                ed
            ]
        })
    );
}
let v = (e, t, n, i, a) =>
    0 === e.length
        ? null
        : (0, s.jsxs)(u.ModalFooter, {
              className: A.footer,
              children: [
                  (0, s.jsxs)('div', {
                      className: A.inline,
                      children: [
                          e.includes('REMIND_ME_LATER') &&
                              (0, s.jsx)(u.Button, {
                                  className: A.unfilledButton,
                                  type: 'button',
                                  size: u.Button.Sizes.SMALL,
                                  look: u.Button.Looks.BLANK,
                                  color: u.Button.Colors.CUSTOM,
                                  onClick: t.handleRemindMeLater,
                                  children: p.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_SKIP_CTA
                              }),
                          e.includes('NEXT') &&
                              (0, s.jsx)(u.Button, {
                                  type: 'button',
                                  size: u.Button.Sizes.SMALL,
                                  submitting: n,
                                  onClick: t.handleNext,
                                  children: p.Z.Messages.NEXT
                              }),
                          e.includes('SUBMIT') &&
                              (0, s.jsx)(u.Button, {
                                  type: 'button',
                                  size: u.Button.Sizes.SMALL,
                                  submitting: n,
                                  onClick: t.handleNext,
                                  children: p.Z.Messages.SUBMIT
                              }),
                          e.includes('GET_STARTED') &&
                              (0, s.jsx)(u.Button, {
                                  type: 'button',
                                  size: u.Button.Sizes.SMALL,
                                  onClick: t.handleNext,
                                  children: p.Z.Messages.GET_STARTED
                              }),
                          e.includes('GOT_IT') &&
                              (0, s.jsx)(u.Button, {
                                  type: 'button',
                                  size: u.Button.Sizes.SMALL,
                                  onClick: t.onClose,
                                  children: p.Z.Messages.GOT_IT
                              }),
                          e.includes('UPDATE') &&
                              (0, s.jsx)(u.Button, {
                                  type: 'button',
                                  size: u.Button.Sizes.SMALL,
                                  disabled: i && !a,
                                  submitting: n,
                                  onClick: t.handleNext,
                                  children: p.Z.Messages.UPDATE
                              })
                      ]
                  }),
                  e.includes('BACK') &&
                      (0, s.jsx)(u.Button, {
                          className: A.unfilledButton,
                          type: 'button',
                          size: u.Button.Sizes.SMALL,
                          look: u.Button.Looks.BLANK,
                          color: u.Button.Colors.CUSTOM,
                          onClick: t.handleBack,
                          children: p.Z.Messages.BACK
                      })
              ]
          });
