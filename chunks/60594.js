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
    r = t(470079),
    i = t(512722),
    o = t.n(i),
    u = t(567526),
    c = t(442837),
    d = t(481060),
    m = t(668781),
    E = t(287734),
    S = t(872810),
    _ = t(410575),
    g = t(812206),
    h = t(600164),
    x = t(313201),
    Z = t(594190),
    f = t(998594),
    C = t(751571),
    N = t(695346),
    I = t(361291),
    R = t(592125),
    v = t(430824),
    T = t(131951),
    A = t(944486),
    p = t(594174),
    M = t(449224),
    j = t(626135),
    L = t(358085),
    O = t(998502),
    D = t(451467),
    P = t(537413),
    G = t(960861),
    U = t(989941),
    b = t(399299),
    w = t(351152),
    k = t(567126),
    V = t(143135),
    B = t(37113),
    W = t(981631),
    H = t(761274),
    y = t(689938),
    F = t(458623);
((s = l || (l = {}))[(s.GUILD = 0)] = 'GUILD'), (s[(s.NATIVE_PICKER_SOURCE = 1)] = 'NATIVE_PICKER_SOURCE'), (s[(s.SOURCE = 2)] = 'SOURCE'), (s[(s.CONFIRM = 3)] = 'CONFIRM');
function z(e) {
    var n, l, s, i, z, Y, K;
    let { selectGuild: Q = !1, selectSource: X = !0, guildId: J, analyticsLocation: q, onClose: $, transitionState: ee } = e,
        { preset: en, resolution: et, fps: el, soundshareEnabled: es } = (0, c.cj)([I.Z], () => I.Z.getState()),
        ea = (0, c.e7)([A.Z, R.Z], () => R.Z.getChannel(A.Z.getVoiceChannelId())),
        er = (0, c.e7)([Z.ZP, M.Z], () => ((0, L.isWindows)() ? (0, U.Z)(Z.ZP, M.Z) : null)),
        ei = (0, c.e7)([p.default], () => {
            let e = p.default.getCurrentUser();
            return o()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        eo = null !== (n = null == ea ? void 0 : ea.getGuildId()) && void 0 !== n ? n : J,
        eu = (0, c.e7)([v.Z], () => {
            var e;
            return null != eo ? (null === (e = v.Z.getGuild(eo)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [ec, ed] = null !== (l = (0, P.Z)(en, ei, eu)) && void 0 !== l ? l : [B.LY.RESOLUTION_720, B.ws.FPS_30],
        em = (0, c.e7)([G.ZP], () => G.ZP.supported()),
        { lastPickerAction: eE, lastPickerError: eS } = (0, c.e7)([G.ZP], () => G.ZP.getPickerState()),
        e_ = f.Z.useExperiment(
            { location: 'GoLiveModal' },
            {
                disable: !em,
                autoTrackExposure: !0
            }
        ).enableSystemPicker;
    (0, G.UB)(), en !== B.tI.PRESET_CUSTOM && ((et = ec), (el = ed)), !(0, D.Z)(en, et, el, ei, eu) && ((et = ec), (el = ed));
    let eg = (0, x.Dt)();
    let [eh, ex] = r.useState(((Y = Q), (K = X), Y ? 0 : K ? 2 : 3)),
        [eZ, ef] = r.useState(!1),
        [eC, eN] = r.useState(null),
        [eI, eR] = r.useState(null),
        [ev, eT] = r.useState(null),
        [eA, ep] = r.useState(en),
        [eM, ej] = r.useState(et),
        [eL, eO] = r.useState(el),
        [eD, eP] = r.useState(es),
        [eG, eU] = r.useState(null !== (s = N.I0.getSetting()) && void 0 !== s && s),
        [eb, ew] = r.useState(null != J ? J : null),
        ek = null !== (i = null == ea ? void 0 : ea.id) && void 0 !== i ? i : eC;
    r.useEffect(() => {
        let e = (0, L.isWindows)() ? (0, U.Z)(Z.ZP, M.Z) : null,
            n = (null == e ? void 0 : e.id) != null ? g.Z.getApplication(e.id) : null;
        j.default.track(W.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == n ? void 0 : n.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == n ? void 0 : n.id,
            location_section: q
        });
    }, [q]);
    function eV() {
        !(function () {
            var e, n;
            o()(null != er || null != eI, 'got nothing to stream');
            let t = null !== (e = null == ea ? void 0 : ea.id) && void 0 !== e ? e : eC;
            o()(null != t, 'Received null target channel ID');
            let l = R.Z.getChannel(t),
                s = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : J;
            null == ea && E.default.selectVoiceChannel(t);
            let a = eA,
                r = eM,
                i = eL;
            !(0, D.Z)(a, r, i, ei, eu) && ((a = B.tI.PRESET_VIDEO), (r = B.LY.RESOLUTION_720), (i = B.ws.FPS_30)),
                (0, S.Rc)({
                    preset: a,
                    resolution: r,
                    frameRate: i,
                    soundshareEnabled: eD
                });
            let u = (0, V.Z)(er, eI, Z.ZP.getRunningGames()),
                c = !(0, L.isWindows)() || null == u || (null == eI ? void 0 : eI.id.startsWith('camera:')) || null == u ? null : u.pid;
            (0, S.WH)(s, t, {
                pid: c,
                sourceId: null == c && null != eI ? eI.id : null,
                sourceName: null == c && null != eI ? eI.name : null,
                audioSourceId: ev,
                sound: eD,
                previewDisabled: eG
            }),
                !e_ &&
                    (async () => {
                        !(await C.Z.hasPermission(H.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) &&
                            m.Z.show({
                                title: y.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                                body: y.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
                            });
                    })();
        })(),
            $();
    }
    let eB = r.useCallback(
        (e, n, t) => {
            let l = (0, P.Z)(e, ei, eu),
                [s, a] = null != l ? l : [n, t];
            if ((e !== eA && ((n = s), (t = a)), !(0, D.Z)(e, n, t, ei, eu))) {
                let [e, l] = (0, P.Z)(B.tI.PRESET_VIDEO, ei, eu);
                (n = e), (t = l);
            }
            t !== eL && eO(t), n !== eM && ej(n), s !== n || a !== t ? ep(B.tI.PRESET_CUSTOM) : e !== eA && ep(e);
        },
        [ei, eu, eL, eM, eA]
    );
    async function eW(e) {
        var n, l, s;
        if ((e.preventDefault(), 2 === eh || 1 === eh)) return ex(3);
        let r = (0, V.Z)(er, eI, Z.ZP.getRunningGames()),
            i = O.ZP.supportsFeature(W.eRX.ELEVATED_HOOK) && (null == r ? void 0 : r.elevated);
        if ((0, L.isMac)() && null != eI && (null === (n = eI.id) || void 0 === n ? void 0 : n.startsWith('screen'))) {
            let e = await T.Z.getMediaEngine().getDesktopSources(),
                n = eI.id;
            if (e.length > 0 && !e.some((e) => e.includes(n))) {
                (l = n),
                    (s = e),
                    j.default.track(W.rMx.SCREENSHARE_FAILED, {
                        source_id: l,
                        screens: s.length
                    }),
                    (0, d.openModal)((e) =>
                        (0, a.jsx)(d.ConfirmModal, {
                            header: y.Z.Messages.SCREENSHARE_RELAUNCH,
                            confirmText: y.Z.Messages.OKAY,
                            cancelText: y.Z.Messages.CANCEL,
                            onConfirm: () => O.ZP.relaunch(),
                            ...e,
                            children: (0, a.jsx)(d.Text, {
                                variant: 'text-md/normal',
                                children: y.Z.Messages.SCREENSHARE_RELAUNCH_BODY
                            })
                        })
                    );
                return;
            }
        }
        i
            ? !(function () {
                  var e;
                  let n = null !== (e = null == er ? void 0 : er.pid) && void 0 !== e ? e : null;
                  (0, d.openModalLazy)(async () => {
                      let { default: e } = await t.e('74300').then(t.bind(t, 566852));
                      return (t) =>
                          (0, a.jsx)(e, {
                              ...t,
                              handleStream: eV,
                              pid: n
                          });
                  });
              })()
            : eV();
    }
    let [eH, ey] = r.useState(void 0),
        eF = r.useCallback(
            (e) => {
                G.ZP.releasePickerStream(), G.ZP.presentPicker(null != e ? e : eH);
            },
            [eH]
        ),
        ez = r.useCallback(
            (e) => {
                if ((eR(e), null != e)) {
                    if (e_ && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0) {
                        let n = e.id.split(':')[1];
                        ey(n), eF(n), ex(1);
                    } else ex(3);
                    ef(!0);
                }
            },
            [e_, eF]
        ),
        eY = r.useCallback(
            (e) => {
                ew(e);
                var n = 3;
                ex((n = X ? 2 : 3));
            },
            [X]
        );
    1 === eh && e_ && (eE === G.Uc.Update ? ex(3) : eE === G.Uc.Cancel && ex(2));
    let eK = !(1 === eh && e_ && eE === G.Uc.Error),
        eQ = (function (e) {
            switch (e) {
                case 2:
                case 1:
                    return y.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
                case 3:
                    return null;
                default:
                    return y.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC;
            }
        })(eh),
        eX = (0, a.jsx)(d.ModalHeader, {
            className: F.modalHeader,
            separator: !1,
            children: (0, a.jsxs)(h.Z, {
                direction: h.Z.Direction.VERTICAL,
                align: h.Z.Align.CENTER,
                className: F.header,
                children: [
                    (0, a.jsx)(d.Heading, {
                        variant: 'heading-xl/semibold',
                        id: eg,
                        className: F.headerText,
                        children: y.Z.Messages.GO_LIVE_MODAL_TITLE
                    }),
                    eK && null != eQ
                        ? (0, a.jsx)(d.Text, {
                              className: F.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: eQ
                          })
                        : null
                ]
            })
        }),
        eJ = r.useCallback(() => {
            e_ && G.ZP.releasePickerStream(), ex(2);
        }, [ex, e_]),
        eq = (0, a.jsxs)(d.Slides, {
            springConfig: {
                ...u.config.stiff,
                clamp: !0
            },
            activeSlide: eh,
            width: 480,
            children: [
                (0, a.jsx)(d.Slide, {
                    id: 0,
                    children: (0, a.jsx)('div', {
                        className: F.modalSize,
                        children: (0, a.jsx)(w.Z, { onSelectGuild: eY })
                    })
                }),
                (0, a.jsx)(d.Slide, {
                    id: 2,
                    children: (0, a.jsx)('div', {
                        className: F.modalSize,
                        children: e_
                            ? (0, a.jsx)(k.H, { onSourceSelect: ez })
                            : (0, a.jsx)(k.o, {
                                  selectedSource: eI,
                                  onChangeSelectedSource: ez
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
                                      children: null != eS && eS.length > 0 ? eS : y.Z.Messages.ERROR_ANOTHER_TRY
                                  })
                                : (0, a.jsx)('div', { className: F.nativePickerSpacing })
                    })
                }),
                (0, a.jsx)(d.Slide, {
                    id: 3,
                    children: (0, a.jsx)('div', {
                        className: F.modalSize,
                        children: (0, a.jsx)(b.Z, {
                            selectedChannelId: null !== (z = null == ea ? void 0 : ea.id) && void 0 !== z ? z : eC,
                            selectedPreset: eA,
                            selectedResolution: eM,
                            selectedSource: eI,
                            selectedFPS: eL,
                            sound: eD,
                            previewDisabled: eG,
                            sourceChanged: eZ,
                            selectSource: X,
                            onChangeSelectedFPS: (e) => eB(eA, eM, e),
                            onChangeSelectedResolution: (e) => eB(eA, e, eL),
                            onChangeSelectedPreset: (e) => eB(e, eM, eL),
                            onChangeSelectedChannelId: eN,
                            onChangeSelectedSource: ez,
                            onChangeSource: () => eJ(),
                            onChangeAudioDevice: (e) => eT(e),
                            onChangeGuild: () => ex(0),
                            onChangeSound: (e) => eP(e),
                            onChangePreviewDisabled: (e) => eU(e),
                            onClose: $,
                            selectedGuildId: eb,
                            targetGuildPremiumTier: eu,
                            selectGuild: Q
                        })
                    })
                })
            ]
        }),
        e$ = (function (e, n, t, l) {
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
        })(eh, Q, X, eZ),
        e0 = 3 !== eh || (null == eI && null == er) || null == ek,
        e1 = r.useCallback(() => {
            null != e$ && (G.ZP.releasePickerStream(), ex(e$));
        }, [ex, e$]),
        e5 = (0, a.jsxs)(d.ModalFooter, {
            justify: null == e$ ? h.Z.Justify.START : h.Z.Justify.BETWEEN,
            children: [
                (0, a.jsx)(d.Button, {
                    type: 'submit',
                    size: d.Button.Sizes.SMALL,
                    disabled: e0,
                    autoFocus: !0,
                    children: y.Z.Messages.GO_LIVE_MODAL_CTA
                }),
                e_ && 1 === eh
                    ? (0, a.jsx)(d.Button, {
                          size: d.Button.Sizes.SMALL,
                          color: d.ButtonColors.PRIMARY,
                          onClick: () => eF(),
                          children: y.Z.Messages.RETRY
                      })
                    : null,
                null == e$
                    ? (0, a.jsx)(d.Button, {
                          className: F.cancelButton,
                          look: d.Button.Looks.LINK,
                          size: d.Button.Sizes.SMALL,
                          color: d.ButtonColors.PRIMARY,
                          onClick: $,
                          children: y.Z.Messages.CANCEL
                      })
                    : (0, a.jsx)(d.Button, {
                          size: d.Button.Sizes.SMALL,
                          color: d.ButtonColors.PRIMARY,
                          onClick: e1,
                          children: y.Z.Messages.BACK
                      })
            ]
        });
    return (0, a.jsx)(_.Z, {
        page: W.ZY5.GO_LIVE_MODAL,
        children: (0, a.jsxs)(d.ModalRoot, {
            'aria-labelledby': eg,
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
                    children: [eX, eq, e5]
                })
            ]
        })
    });
}
