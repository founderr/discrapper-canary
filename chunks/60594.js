n.r(t),
    n.d(t, {
        default: function () {
            return Y;
        }
    }),
    n(47120);
var l,
    s,
    i = n(735250),
    r = n(470079),
    a = n(512722),
    o = n.n(a),
    c = n(180081),
    d = n(442837),
    u = n(481060),
    f = n(668781),
    h = n(287734),
    m = n(872810),
    x = n(410575),
    _ = n(812206),
    g = n(600164),
    p = n(313201),
    C = n(594190),
    S = n(998594),
    j = n(751571),
    v = n(695346),
    E = n(361291),
    I = n(592125),
    Z = n(430824),
    T = n(131951),
    N = n(944486),
    M = n(594174),
    R = n(449224),
    A = n(626135),
    O = n(358085),
    L = n(998502),
    w = n(451467),
    b = n(537413),
    D = n(299570),
    P = n(960861),
    y = n(989941),
    G = n(399299),
    B = n(351152),
    k = n(567126),
    U = n(143135),
    H = n(37113),
    V = n(981631),
    W = n(761274),
    F = n(689938),
    z = n(458623);
((s = l || (l = {}))[(s.GUILD = 0)] = 'GUILD'), (s[(s.NATIVE_PICKER_SOURCE = 1)] = 'NATIVE_PICKER_SOURCE'), (s[(s.SOURCE = 2)] = 'SOURCE'), (s[(s.CONFIRM = 3)] = 'CONFIRM');
function Y(e) {
    var t, l, s, a, Y, K, Q;
    let { selectGuild: X = !1, selectSource: q = !0, guildId: J, analyticsLocation: $, onClose: ee, transitionState: et } = e,
        { preset: en, resolution: el, fps: es, soundshareEnabled: ei } = (0, d.cj)([E.Z], () => E.Z.getState()),
        er = (0, d.e7)([N.Z, I.Z], () => I.Z.getChannel(N.Z.getVoiceChannelId())),
        ea = (0, d.e7)([C.ZP, R.Z], () => ((0, O.isWindows)() ? (0, y.Z)(C.ZP, R.Z) : null)),
        eo = (0, d.e7)([M.default], () => {
            let e = M.default.getCurrentUser();
            return o()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        ec = null !== (t = null == er ? void 0 : er.getGuildId()) && void 0 !== t ? t : J,
        ed = (0, d.e7)([Z.Z], () => {
            var e;
            return null != ec ? (null === (e = Z.Z.getGuild(ec)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [eu, ef] = null !== (l = (0, b.Z)(en, eo, ed)) && void 0 !== l ? l : [H.LY.RESOLUTION_720, H.ws.FPS_30],
        eh = (0, d.e7)([P.ZP], () => P.ZP.supported()),
        { lastPickerAction: em } = (0, d.e7)([P.ZP], () => P.ZP.getPickerState()),
        ex = S.Z.useExperiment(
            { location: 'GoLiveModal' },
            {
                disable: !eh,
                autoTrackExposure: !0
            }
        ).enableSystemPicker;
    (0, P.UB)(), en !== H.tI.PRESET_CUSTOM && ((el = eu), (es = ef)), !(0, w.Z)(en, el, es, eo, ed) && ((el = eu), (es = ef));
    let e_ = (0, p.Dt)();
    let [eg, ep] = r.useState(((K = X), (Q = q), K ? 0 : Q ? 2 : 3)),
        [eC, eS] = r.useState(!1),
        [ej, ev] = r.useState(null),
        [eE, eI] = r.useState(null),
        [eZ, eT] = r.useState(null),
        [eN, eM] = r.useState(en),
        [eR, eA] = r.useState(el),
        [eO, eL] = r.useState(es),
        [ew, eb] = r.useState(ei),
        [eD, eP] = r.useState(null !== (s = v.I0.getSetting()) && void 0 !== s && s),
        [ey, eG] = r.useState(null != J ? J : null),
        eB = null !== (a = null == er ? void 0 : er.id) && void 0 !== a ? a : ej;
    r.useEffect(() => {
        let e = (0, O.isWindows)() ? (0, y.Z)(C.ZP, R.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? _.Z.getApplication(e.id) : null;
        A.default.track(V.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: $
        });
    }, [$]);
    function ek() {
        !(function () {
            var e, t;
            o()(null != ea || null != eE, 'got nothing to stream');
            let n = null !== (e = null == er ? void 0 : er.id) && void 0 !== e ? e : ej;
            o()(null != n, 'Received null target channel ID');
            let l = I.Z.getChannel(n),
                s = null !== (t = null == l ? void 0 : l.getGuildId()) && void 0 !== t ? t : J;
            null == er && h.default.selectVoiceChannel(n);
            let i = eN,
                r = eR,
                a = eO;
            !(0, w.Z)(i, r, a, eo, ed) && ((i = H.tI.PRESET_VIDEO), (r = H.LY.RESOLUTION_720), (a = H.ws.FPS_30)),
                (0, m.Rc)({
                    preset: i,
                    resolution: r,
                    frameRate: a,
                    soundshareEnabled: ew
                });
            let c = (0, U.Z)(ea, eE, C.ZP.getRunningGames()),
                d = !(0, O.isWindows)() || null == c || (null == eE ? void 0 : eE.id.startsWith('camera:')) || null == c ? null : c.pid;
            (0, m.WH)(s, n, {
                pid: d,
                sourceId: null == d && null != eE ? eE.id : null,
                sourceName: null == d && null != eE ? eE.name : null,
                audioSourceId: eZ,
                sound: ew,
                previewDisabled: eD
            }),
                !ex &&
                    (async () => {
                        !(await j.Z.hasPermission(W.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) &&
                            f.Z.show({
                                title: F.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                                body: F.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
                            });
                    })();
        })(),
            ee();
    }
    let eU = r.useCallback(
            (e, t, n) => {
                let l = (0, b.Z)(e, eo, ed),
                    [s, i] = null != l ? l : [t, n];
                if ((e !== eN && ((t = s), (n = i)), !(0, w.Z)(e, t, n, eo, ed))) {
                    let [e, l] = (0, b.Z)(H.tI.PRESET_VIDEO, eo, ed);
                    (t = e), (n = l);
                }
                n !== eO && eL(n), t !== eR && eA(t), s !== t || i !== n ? eM(H.tI.PRESET_CUSTOM) : e !== eN && eM(e);
            },
            [eo, ed, eO, eR, eN]
        ),
        [eH, eV] = r.useState(void 0),
        eW = r.useCallback(
            (e) => {
                (0, D.t)(), (0, D.T)(null != e ? e : eH);
            },
            [eH]
        );
    async function eF(e) {
        var t, l, s;
        if ((e.preventDefault(), 1 === eg)) return eW();
        if (2 === eg) return ep(3);
        if (null != eH) return ep(1);
        let r = (0, U.Z)(ea, eE, C.ZP.getRunningGames()),
            a = L.ZP.supportsFeature(V.eRX.ELEVATED_HOOK) && (null == r ? void 0 : r.elevated);
        if ((0, O.isMac)() && null != eE && (null === (t = eE.id) || void 0 === t ? void 0 : t.startsWith('screen'))) {
            let e = await T.Z.getMediaEngine().getDesktopSources(),
                t = eE.id;
            if (e.length > 0 && !e.some((e) => e.includes(t))) {
                (l = t),
                    (s = e),
                    A.default.track(V.rMx.SCREENSHARE_FAILED, {
                        source_id: l,
                        screens: s.length
                    }),
                    (0, u.openModal)((e) =>
                        (0, i.jsx)(u.ConfirmModal, {
                            header: F.Z.Messages.SCREENSHARE_RELAUNCH,
                            confirmText: F.Z.Messages.OKAY,
                            cancelText: F.Z.Messages.CANCEL,
                            onConfirm: () => L.ZP.relaunch(),
                            ...e,
                            children: (0, i.jsx)(u.Text, {
                                variant: 'text-md/normal',
                                children: F.Z.Messages.SCREENSHARE_RELAUNCH_BODY
                            })
                        })
                    );
                return;
            }
        }
        a
            ? !(function () {
                  var e;
                  let t = null !== (e = null == ea ? void 0 : ea.pid) && void 0 !== e ? e : null;
                  (0, u.openModalLazy)(async () => {
                      let { default: e } = await n.e('74300').then(n.bind(n, 566852));
                      return (n) =>
                          (0, i.jsx)(e, {
                              ...n,
                              handleStream: ek,
                              pid: t
                          });
                  });
              })()
            : ek();
    }
    let ez = r.useCallback(
            (e) => {
                eI(e), null != e && (ex && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? eV(e.id.split(':')[1]) : eV(void 0), ep(3), eS(!0));
            },
            [ex]
        ),
        eY = r.useCallback(
            (e) => {
                eG(e);
                var t = 3;
                ep((t = q ? 2 : 3));
            },
            [q]
        ),
        eK = !(1 === eg && ex && em === P.Uc.Error),
        eQ = (function (e) {
            switch (e) {
                case 2:
                    return F.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
                case 1:
                    return F.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_NATIVE_SOURCE.format({ buttonName: F.Z.Messages.GO_LIVE_MODAL_NATIVE_SELECT_CTA });
                case 3:
                    return null;
                default:
                    return F.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC;
            }
        })(eg),
        eX = (0, i.jsx)(u.ModalHeader, {
            className: z.modalHeader,
            separator: !1,
            children: (0, i.jsxs)(g.Z, {
                direction: g.Z.Direction.VERTICAL,
                align: g.Z.Align.CENTER,
                className: z.header,
                children: [
                    (0, i.jsx)(u.Heading, {
                        variant: 'heading-xl/semibold',
                        id: e_,
                        className: z.headerText,
                        children: F.Z.Messages.GO_LIVE_MODAL_TITLE
                    }),
                    eK && null != eQ
                        ? (0, i.jsx)(u.Text, {
                              className: z.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: eQ
                          })
                        : null
                ]
            })
        }),
        eq = r.useCallback(() => {
            ex && (0, D.t)(), ep(2);
        }, [ex]),
        eJ = (function (e, t, n, l) {
            switch (e) {
                case 2:
                    return t ? 0 : null;
                case 1:
                    return 3;
                case 3:
                    if (l) return 2;
                    if (!n && t) return 0;
                    return null;
                default:
                    return null;
            }
        })(eg, X, q, eC),
        e$ = 1 !== eg && (3 !== eg || (null == eE && null == ea) || null == eB),
        e1 = r.useCallback(() => {
            null != eJ && ep(eJ);
        }, [eJ]),
        e0 = (0, i.jsxs)(u.Slides, {
            springConfig: {
                ...c.config.stiff,
                clamp: !0
            },
            activeSlide: eg,
            width: 480,
            children: [
                (0, i.jsx)(u.Slide, {
                    id: 0,
                    children: (0, i.jsx)('div', {
                        className: z.modalSize,
                        children: (0, i.jsx)(B.Z, { onSelectGuild: eY })
                    })
                }),
                (0, i.jsx)(u.Slide, {
                    id: 2,
                    children: (0, i.jsx)('div', {
                        className: z.modalSize,
                        children: ex
                            ? (0, i.jsx)(k.se, { onSourceSelect: ez })
                            : (0, i.jsx)(k.oA, {
                                  selectedSource: eE,
                                  onChangeSelectedSource: ez
                              })
                    })
                }),
                (0, i.jsx)(u.Slide, {
                    id: 3,
                    children: (0, i.jsx)('div', {
                        className: z.modalSize,
                        children: (0, i.jsx)(G.Z, {
                            selectedChannelId: null !== (Y = null == er ? void 0 : er.id) && void 0 !== Y ? Y : ej,
                            selectedPreset: eN,
                            selectedResolution: eR,
                            selectedSource: eE,
                            selectedFPS: eO,
                            sound: ew,
                            previewDisabled: eD,
                            sourceChanged: eC,
                            selectSource: q,
                            onChangeSelectedFPS: (e) => eU(eN, eR, e),
                            onChangeSelectedResolution: (e) => eU(eN, e, eO),
                            onChangeSelectedPreset: (e) => eU(e, eR, eO),
                            onChangeSelectedChannelId: ev,
                            onChangeSelectedSource: ez,
                            onChangeSource: () => eq(),
                            onChangeAudioDevice: (e) => eT(e),
                            onChangeGuild: () => ep(0),
                            onChangeSound: (e) => eb(e),
                            onChangePreviewDisabled: (e) => eP(e),
                            onClose: ee,
                            selectedGuildId: ey,
                            targetGuildPremiumTier: ed,
                            selectGuild: X
                        })
                    })
                }),
                (0, i.jsx)(u.Slide, {
                    id: 1,
                    children: (0, i.jsx)('div', {
                        className: z.modalSize,
                        children: (0, i.jsx)(k.Hu, {
                            onSourceSelect: ek,
                            onCancel: e1
                        })
                    })
                })
            ]
        }),
        e2 = 1 === eg ? F.Z.Messages.GO_LIVE_MODAL_NATIVE_SELECT_CTA : ex && (3 !== eg || null != eH) ? F.Z.Messages.NEXT : F.Z.Messages.GO_LIVE_MODAL_CTA,
        e5 = (0, i.jsxs)(u.ModalFooter, {
            justify: null == eJ ? g.Z.Justify.START : g.Z.Justify.BETWEEN,
            children: [
                (0, i.jsx)(u.Button, {
                    type: 'submit',
                    size: u.Button.Sizes.SMALL,
                    disabled: e$,
                    autoFocus: !0,
                    children: e2
                }),
                null == eJ
                    ? (0, i.jsx)(u.Button, {
                          className: z.cancelButton,
                          look: u.Button.Looks.LINK,
                          size: u.Button.Sizes.SMALL,
                          color: u.ButtonColors.PRIMARY,
                          onClick: ee,
                          children: F.Z.Messages.CANCEL
                      })
                    : (0, i.jsx)(u.Button, {
                          size: u.Button.Sizes.SMALL,
                          color: u.ButtonColors.PRIMARY,
                          onClick: e1,
                          children: F.Z.Messages.BACK
                      })
            ]
        });
    return (0, i.jsx)(x.Z, {
        page: V.ZY5.GO_LIVE_MODAL,
        children: (0, i.jsxs)(u.ModalRoot, {
            'aria-labelledby': e_,
            transitionState: et,
            size: u.ModalSize.DYNAMIC,
            className: z.modalSize,
            children: [
                (0, i.jsx)(u.ModalCloseButton, {
                    onClick: ee,
                    className: z.modalCloseButton
                }),
                (0, i.jsx)('div', { className: z.art }),
                (0, i.jsxs)('form', {
                    onSubmit: eF,
                    children: [eX, e0, e5]
                })
            ]
        })
    });
}
