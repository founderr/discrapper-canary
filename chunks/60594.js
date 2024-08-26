t.r(n),
    t.d(n, {
        default: function () {
            return z;
        }
    }),
    t(47120);
var l,
    s,
    a = t(735250),
    i = t(470079),
    r = t(512722),
    o = t.n(r),
    c = t(338545),
    u = t(442837),
    d = t(481060),
    m = t(668781),
    E = t(287734),
    _ = t(872810),
    S = t(410575),
    h = t(812206),
    x = t(600164),
    C = t(313201),
    g = t(594190),
    I = t(998594),
    N = t(751571),
    Z = t(695346),
    f = t(361291),
    R = t(592125),
    A = t(430824),
    T = t(131951),
    v = t(944486),
    L = t(594174),
    M = t(449224),
    p = t(626135),
    O = t(358085),
    j = t(998502),
    P = t(451467),
    D = t(537413),
    G = t(960861),
    U = t(989941),
    b = t(399299),
    w = t(351152),
    k = t(567126),
    B = t(143135),
    V = t(37113),
    y = t(981631),
    H = t(761274),
    W = t(689938),
    F = t(458623);
((s = l || (l = {}))[(s.GUILD = 0)] = 'GUILD'), (s[(s.NATIVE_PICKER_SOURCE = 1)] = 'NATIVE_PICKER_SOURCE'), (s[(s.SOURCE = 2)] = 'SOURCE'), (s[(s.CONFIRM = 3)] = 'CONFIRM');
function z(e) {
    var n, l, s, r, z, K, Y;
    let { selectGuild: Q = !1, selectSource: X = !0, guildId: q, analyticsLocation: J, onClose: $, transitionState: ee } = e,
        { preset: en, resolution: et, fps: el, soundshareEnabled: es } = (0, u.cj)([f.Z], () => f.Z.getState()),
        ea = (0, u.e7)([v.Z, R.Z], () => R.Z.getChannel(v.Z.getVoiceChannelId())),
        ei = (0, u.e7)([g.ZP, M.Z], () => ((0, O.isWindows)() ? (0, U.Z)(g.ZP, M.Z) : null)),
        er = (0, u.e7)([L.default], () => {
            let e = L.default.getCurrentUser();
            return o()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        eo = null !== (n = null == ea ? void 0 : ea.getGuildId()) && void 0 !== n ? n : q,
        ec = (0, u.e7)([A.Z], () => {
            var e;
            return null != eo ? (null === (e = A.Z.getGuild(eo)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [eu, ed] = null !== (l = (0, D.Z)(en, er, ec)) && void 0 !== l ? l : [V.LY.RESOLUTION_720, V.ws.FPS_30],
        em = (0, u.e7)([G.ZP], () => G.ZP.supported()),
        { lastPickerAction: eE, lastPickerError: e_ } = (0, u.e7)([G.ZP], () => G.ZP.getPickerState()),
        eS = I.Z.useExperiment(
            { location: 'GoLiveModal' },
            {
                disable: !em,
                autoTrackExposure: !0
            }
        ).enableSystemPicker;
    (0, G.UB)(), en !== V.tI.PRESET_CUSTOM && ((et = eu), (el = ed)), !(0, P.Z)(en, et, el, er, ec) && ((et = eu), (el = ed));
    let eh = (0, C.Dt)();
    let [ex, eC] = i.useState(((K = Q), (Y = X), K ? 0 : Y ? 2 : 3)),
        [eg, eI] = i.useState(null),
        [eN, eZ] = i.useState(!1),
        [ef, eR] = i.useState(null),
        [eA, eT] = i.useState(null),
        [ev, eL] = i.useState(null),
        [eM, ep] = i.useState(en),
        [eO, ej] = i.useState(et),
        [eP, eD] = i.useState(el),
        [eG, eU] = i.useState(es),
        [eb, ew] = i.useState(null !== (s = Z.I0.getSetting()) && void 0 !== s && s),
        [ek, eB] = i.useState(null != q ? q : null),
        eV = null !== (r = null == ea ? void 0 : ea.id) && void 0 !== r ? r : ef;
    i.useEffect(() => {
        let e = (0, O.isWindows)() ? (0, U.Z)(g.ZP, M.Z) : null,
            n = (null == e ? void 0 : e.id) != null ? h.Z.getApplication(e.id) : null;
        p.default.track(y.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == n ? void 0 : n.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == n ? void 0 : n.id,
            location_section: J
        });
    }, [J]);
    function ey() {
        !(function () {
            var e, n;
            o()(null != ei || null != eA, 'got nothing to stream');
            let t = null !== (e = null == ea ? void 0 : ea.id) && void 0 !== e ? e : ef;
            o()(null != t, 'Received null target channel ID');
            let l = R.Z.getChannel(t),
                s = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : q;
            null == ea && E.default.selectVoiceChannel(t);
            let a = eM,
                i = eO,
                r = eP;
            !(0, P.Z)(a, i, r, er, ec) && ((a = V.tI.PRESET_VIDEO), (i = V.LY.RESOLUTION_720), (r = V.ws.FPS_30)),
                (0, _.Rc)({
                    preset: a,
                    resolution: i,
                    frameRate: r,
                    soundshareEnabled: eG
                });
            let c = (0, B.Z)(ei, eA, g.ZP.getRunningGames()),
                u = !(0, O.isWindows)() || null == c || (null == eA ? void 0 : eA.id.startsWith('camera:')) || null == c ? null : c.pid;
            (0, _.WH)(s, t, {
                pid: u,
                sourceId: null == u && null != eA ? eA.id : null,
                sourceName: null == u && null != eA ? eA.name : null,
                audioSourceId: ev,
                sound: eG,
                previewDisabled: eb
            }),
                !eS &&
                    (async () => {
                        !(await N.Z.hasPermission(H.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) &&
                            m.Z.show({
                                title: W.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                                body: W.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
                            });
                    })();
        })(),
            $();
    }
    let eH = i.useCallback(
        (e, n, t) => {
            let l = (0, D.Z)(e, er, ec),
                [s, a] = null != l ? l : [n, t];
            if ((e !== eM && ((n = s), (t = a)), !(0, P.Z)(e, n, t, er, ec))) {
                let [e, l] = (0, D.Z)(V.tI.PRESET_VIDEO, er, ec);
                (n = e), (t = l);
            }
            t !== eP && eD(t), n !== eO && ej(n), s !== n || a !== t ? ep(V.tI.PRESET_CUSTOM) : e !== eM && ep(e);
        },
        [er, ec, eP, eO, eM]
    );
    async function eW(e) {
        var n, l, s;
        if ((e.preventDefault(), 2 === ex || 1 === ex)) return eC(3);
        let i = (0, B.Z)(ei, eA, g.ZP.getRunningGames()),
            r = j.ZP.supportsFeature(y.eRX.ELEVATED_HOOK) && (null == i ? void 0 : i.elevated);
        if ((0, O.isMac)() && null != eA && (null === (n = eA.id) || void 0 === n ? void 0 : n.startsWith('screen'))) {
            let e = await T.Z.getMediaEngine().getDesktopSources(),
                n = eA.id;
            if (e.length > 0 && !e.some((e) => e.includes(n))) {
                (l = n),
                    (s = e),
                    p.default.track(y.rMx.SCREENSHARE_FAILED, {
                        source_id: l,
                        screens: s.length
                    }),
                    (0, d.openModal)((e) =>
                        (0, a.jsx)(d.ConfirmModal, {
                            header: W.Z.Messages.SCREENSHARE_RELAUNCH,
                            confirmText: W.Z.Messages.OKAY,
                            cancelText: W.Z.Messages.CANCEL,
                            onConfirm: () => j.ZP.relaunch(),
                            ...e,
                            children: (0, a.jsx)(d.Text, {
                                variant: 'text-md/normal',
                                children: W.Z.Messages.SCREENSHARE_RELAUNCH_BODY
                            })
                        })
                    );
                return;
            }
        }
        r
            ? !(function () {
                  var e;
                  let n = null !== (e = null == ei ? void 0 : ei.pid) && void 0 !== e ? e : null;
                  (0, d.openModalLazy)(async () => {
                      let { default: e } = await t.e('74300').then(t.bind(t, 566852));
                      return (t) =>
                          (0, a.jsx)(e, {
                              ...t,
                              handleStream: ey,
                              pid: n
                          });
                  });
              })()
            : ey();
    }
    let [eF, ez] = i.useState(void 0),
        eK = i.useCallback(
            (e) => {
                G.ZP.releasePickerStream(), G.ZP.presentPicker(null != e ? e : eF);
            },
            [eF]
        ),
        eY = i.useCallback(
            (e) => {
                if ((eT(e), null != e)) {
                    if (eS && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0) {
                        let n = e.id.split(':')[1];
                        ez(n), eK(n), eC(1);
                    } else eC(3);
                    eZ(!0);
                }
            },
            [eS, eK]
        ),
        eQ = i.useCallback(
            (e) => {
                eB(e);
                var n = 3;
                eC((n = X ? 2 : 3));
            },
            [X]
        );
    1 === ex && eS && (eE === G.Uc.Update ? eC(3) : eE === G.Uc.Cancel && eC(2));
    let eX = !(1 === ex && eS && eE === G.Uc.Error),
        eq = (function (e) {
            switch (e) {
                case 2:
                case 1:
                    return W.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
                case 3:
                    return null;
                default:
                    return W.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC;
            }
        })(ex),
        eJ = (0, a.jsx)(d.ModalHeader, {
            className: F.modalHeader,
            separator: !1,
            children: (0, a.jsxs)(x.Z, {
                direction: x.Z.Direction.VERTICAL,
                align: x.Z.Align.CENTER,
                className: F.header,
                children: [
                    (0, a.jsx)(d.Heading, {
                        variant: 'heading-xl/semibold',
                        id: eh,
                        className: F.headerText,
                        children: W.Z.Messages.GO_LIVE_MODAL_TITLE
                    }),
                    eX && null != eq
                        ? (0, a.jsx)(d.Text, {
                              className: F.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: eq
                          })
                        : null
                ]
            })
        }),
        e$ = i.useCallback(() => {
            eS && G.ZP.releasePickerStream(), eC(2);
        }, [eC, eS]),
        e0 = (0, a.jsxs)(d.Slides, {
            springConfig: {
                ...c.config.stiff,
                clamp: !0
            },
            activeSlide: ex,
            width: 480,
            onSlideReady: eI,
            children: [
                (0, a.jsx)(d.Slide, {
                    id: 0,
                    children: (0, a.jsx)('div', {
                        className: F.modalSize,
                        children: (0, a.jsx)(w.Z, { onSelectGuild: eQ })
                    })
                }),
                (0, a.jsx)(d.Slide, {
                    id: 2,
                    children: (0, a.jsx)('div', {
                        className: F.modalSize,
                        children: eS
                            ? (0, a.jsx)(k.H, { onSourceSelect: eY })
                            : (0, a.jsx)(k.o, {
                                  selectedSource: eA,
                                  onChangeSelectedSource: eY
                              })
                    })
                }),
                (0, a.jsx)(d.Slide, {
                    id: 1,
                    children: (0, a.jsx)('div', {
                        className: F.modalSize,
                        children:
                            eE === G.Uc.Error
                                ? (0, a.jsx)(d.Text, {
                                      className: F.errorMessage,
                                      variant: 'text-md/normal',
                                      color: 'text-danger',
                                      children: null != e_ && e_.length > 0 ? e_ : W.Z.Messages.ERROR_ANOTHER_TRY
                                  })
                                : (0, a.jsx)('div', { className: F.nativePickerSpacing })
                    })
                }),
                (0, a.jsx)(d.Slide, {
                    id: 3,
                    children: (0, a.jsx)('div', {
                        className: F.modalSize,
                        children: (0, a.jsx)(b.Z, {
                            selectedChannelId: null !== (z = null == ea ? void 0 : ea.id) && void 0 !== z ? z : ef,
                            selectedPreset: eM,
                            selectedResolution: eO,
                            selectedSource: eA,
                            selectedFPS: eP,
                            sound: eG,
                            previewDisabled: eb,
                            sourceChanged: eN,
                            selectSource: X,
                            onChangeSelectedFPS: (e) => eH(eM, eO, e),
                            onChangeSelectedResolution: (e) => eH(eM, e, eP),
                            onChangeSelectedPreset: (e) => eH(e, eO, eP),
                            onChangeSelectedChannelId: eR,
                            onChangeSelectedSource: eY,
                            onChangeSource: () => e$(),
                            onChangeAudioDevice: (e) => eL(e),
                            onChangeGuild: () => eC(0),
                            onChangeSound: (e) => eU(e),
                            onChangePreviewDisabled: (e) => ew(e),
                            onClose: $,
                            selectedGuildId: ek,
                            targetGuildPremiumTier: ec,
                            selectGuild: Q,
                            isAnimationDone: 3 === eg && ee === d.ModalTransitionState.ENTERED
                        })
                    })
                })
            ]
        }),
        e1 = (function (e, n, t, l) {
            switch (e) {
                case 2:
                    return n ? 0 : null;
                case 1:
                    return 2;
                case 3:
                    if (l) return 2;
                    if (!t && n) return 0;
                    return null;
                default:
                    return null;
            }
        })(ex, Q, X, eN),
        e4 = 3 !== ex || (null == eA && null == ei) || null == eV,
        e5 = i.useCallback(() => {
            null != e1 && (G.ZP.releasePickerStream(), eC(e1));
        }, [eC, e1]),
        e3 = (0, a.jsxs)(d.ModalFooter, {
            justify: null == e1 ? x.Z.Justify.START : x.Z.Justify.BETWEEN,
            children: [
                (0, a.jsx)(d.Button, {
                    type: 'submit',
                    size: d.Button.Sizes.SMALL,
                    disabled: e4,
                    autoFocus: !0,
                    children: W.Z.Messages.GO_LIVE_MODAL_CTA
                }),
                eS && 1 === ex
                    ? (0, a.jsx)(d.Button, {
                          size: d.Button.Sizes.SMALL,
                          color: d.ButtonColors.PRIMARY,
                          onClick: () => eK(),
                          children: W.Z.Messages.RETRY
                      })
                    : null,
                null == e1
                    ? (0, a.jsx)(d.Button, {
                          className: F.cancelButton,
                          look: d.Button.Looks.LINK,
                          size: d.Button.Sizes.SMALL,
                          color: d.ButtonColors.PRIMARY,
                          onClick: $,
                          children: W.Z.Messages.CANCEL
                      })
                    : (0, a.jsx)(d.Button, {
                          size: d.Button.Sizes.SMALL,
                          color: d.ButtonColors.PRIMARY,
                          onClick: e5,
                          children: W.Z.Messages.BACK
                      })
            ]
        });
    return (0, a.jsx)(S.Z, {
        page: y.ZY5.GO_LIVE_MODAL,
        children: (0, a.jsxs)(d.ModalRoot, {
            'aria-labelledby': eh,
            transitionState: ee,
            size: d.ModalSize.DYNAMIC,
            className: F.modalSize,
            children: [
                (0, a.jsx)(d.ModalCloseButton, {
                    onClick: $,
                    className: F.modalCloseButton
                }),
                (0, a.jsx)('div', { className: F.art }),
                (0, a.jsxs)('form', {
                    onSubmit: eW,
                    children: [eJ, e0, e3]
                })
            ]
        })
    });
}
