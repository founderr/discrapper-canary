n.r(t),
    n.d(t, {
        default: function () {
            return el;
        }
    }),
    n(47120),
    n(653041);
var l,
    s,
    i = n(200651),
    r = n(192379),
    a = n(512722),
    o = n.n(a),
    c = n(100621),
    d = n(553813),
    u = n.n(d),
    f = n(442837),
    h = n(704215),
    m = n(481060),
    x = n(668781),
    _ = n(287734),
    g = n(872810),
    p = n(410575),
    C = n(579806),
    S = n(812206),
    E = n(600164),
    j = n(313201),
    v = n(243778),
    I = n(594190),
    Z = n(998594),
    T = n(751571),
    N = n(970731),
    M = n(695346),
    R = n(361291),
    A = n(592125),
    O = n(430824),
    L = n(131951),
    w = n(944486),
    b = n(594174),
    D = n(449224),
    P = n(626135),
    y = n(63063),
    G = n(358085),
    B = n(998502),
    k = n(451467),
    U = n(537413),
    V = n(299570),
    H = n(960861),
    F = n(989941),
    W = n(399299),
    z = n(351152),
    Y = n(567126),
    K = n(143135),
    Q = n(70722),
    X = n(37113),
    q = n(981631),
    J = n(921944),
    $ = n(761274),
    ee = n(689938),
    et = n(410894);
((s = l || (l = {}))[(s.GUILD = 0)] = 'GUILD'), (s[(s.NATIVE_PICKER_SOURCE = 1)] = 'NATIVE_PICKER_SOURCE'), (s[(s.SOURCE = 2)] = 'SOURCE'), (s[(s.CONFIRM = 3)] = 'CONFIRM');
let en = (e) => {
    let { visibleContent: t, markAsDismissed: n } = e;
    return t === h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, i.jsx)(N.ZP, {
              content: ee.Z.Messages.GO_LIVE_MODAL_SYSTEM_PICKER_COACHMARK_CONTENT,
              buttonCTA: ee.Z.Messages.GOT_IT,
              onClick: () => {},
              onSecondaryClick: () => {
                  open(y.Z.getArticleURL(q.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: ee.Z.Messages.LEARN_MORE,
              caretPosition: N.DF.LEFT_CENTER,
              markAsDismissed: n
          })
        : null;
};
function el(e) {
    var t, l, s, a, d, N, y;
    let { selectGuild: el = !1, selectSource: es = !0, guildId: ei, analyticsLocation: er, onClose: ea, transitionState: eo } = e,
        { preset: ec, resolution: ed, fps: eu, soundshareEnabled: ef } = (0, f.cj)([R.Z], () => R.Z.getState()),
        eh = (0, f.e7)([w.Z, A.Z], () => A.Z.getChannel(w.Z.getVoiceChannelId())),
        em = (0, f.e7)([I.ZP, D.Z], () => ((0, G.isWindows)() ? (0, F.Z)(I.ZP, D.Z) : null)),
        ex = (0, f.e7)([b.default], () => {
            let e = b.default.getCurrentUser();
            return o()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        e_ = null !== (t = null == eh ? void 0 : eh.getGuildId()) && void 0 !== t ? t : ei,
        eg = (0, f.e7)([O.Z], () => {
            var e;
            return null != e_ ? (null === (e = O.Z.getGuild(e_)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [ep, eC] = null !== (l = (0, U.Z)(ec, ex, eg)) && void 0 !== l ? l : [X.LY.RESOLUTION_720, X.ws.FPS_30],
        { lastPickerAction: eS } = (0, f.e7)([H.ZP], () => H.ZP.getPickerState()),
        eE = L.Z.getUseSystemScreensharePicker();
    (0, H.UB)();
    let ej = eE && (0, G.isMac)() && u().satisfies(null === C.Z || void 0 === C.Z ? void 0 : C.Z.os.release, Q.jR),
        ev = [];
    eo === m.ModalTransitionState.ENTERED && eE && (0, G.isMac)() && ev.push(h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eI, eZ] = (0, v.US)(ev, void 0, !0);
    ec !== X.tI.PRESET_CUSTOM && ((ed = ep), (eu = eC)), !(0, k.Z)(ec, ed, eu, ex, eg) && ((ed = ep), (eu = eC));
    let eT = (0, j.Dt)();
    let [eN, eM] = r.useState(((N = el), (y = es && !ej), N ? 0 : y ? 2 : 3)),
        [eR, eA] = r.useState(ej),
        [eO, eL] = r.useState(null),
        [ew, eb] = r.useState(
            ej
                ? {
                      id: 'prepicked:',
                      name: ee.Z.Messages.GO_LIVE_MODAL_ANY,
                      url: ''
                  }
                : null
        ),
        [eD, eP] = r.useState(null),
        [ey, eG] = r.useState(ec),
        [eB, ek] = r.useState(ed),
        [eU, eV] = r.useState(eu),
        [eH, eF] = r.useState(ef),
        [eW, ez] = r.useState(null !== (s = M.I0.getSetting()) && void 0 !== s && s),
        [eY, eK] = r.useState(null != ei ? ei : null),
        eQ = null !== (a = null == eh ? void 0 : eh.id) && void 0 !== a ? a : eO;
    r.useEffect(() => {
        let e = (0, G.isWindows)() ? (0, F.Z)(I.ZP, D.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? S.Z.getApplication(e.id) : null;
        P.default.track(q.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: er
        }),
            Z.Z.trackExposure({ location: 'GoLiveModal' });
    }, [er]);
    function eX() {
        !(function () {
            var e, t;
            o()(null != em || null != ew, 'got nothing to stream');
            let n = null !== (e = null == eh ? void 0 : eh.id) && void 0 !== e ? e : eO;
            o()(null != n, 'Received null target channel ID');
            let l = A.Z.getChannel(n),
                s = null !== (t = null == l ? void 0 : l.getGuildId()) && void 0 !== t ? t : ei;
            null == eh && _.default.selectVoiceChannel(n);
            let i = ey,
                r = eB,
                a = eU;
            !(0, k.Z)(i, r, a, ex, eg) && ((i = X.tI.PRESET_VIDEO), (r = X.LY.RESOLUTION_720), (a = X.ws.FPS_30)),
                (0, g.Rc)({
                    preset: i,
                    resolution: r,
                    frameRate: a,
                    soundshareEnabled: eH
                });
            let c = (0, K.Z)(em, ew, I.ZP.getRunningGames()),
                d = !(0, G.isWindows)() || null == c || (null == ew ? void 0 : ew.id.startsWith('camera:')) || null == c ? null : c.pid;
            (0, g.WH)(s, n, {
                pid: d,
                sourceId: null == d && null != ew ? ew.id : null,
                sourceName: null == d && null != ew ? ew.name : null,
                audioSourceId: eD,
                sound: eH,
                previewDisabled: eW
            }),
                null != eI && eZ(J.L.AUTO_DISMISS),
                !eE &&
                    (async () => {
                        !(await T.Z.hasPermission($.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) &&
                            x.Z.show({
                                title: ee.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                                body: ee.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
                            });
                    })();
        })(),
            ea();
    }
    let eq = r.useCallback(
            (e, t, n) => {
                let l = (0, U.Z)(e, ex, eg),
                    [s, i] = null != l ? l : [t, n];
                if ((e !== ey && ((t = s), (n = i)), !(0, k.Z)(e, t, n, ex, eg))) {
                    let [e, l] = (0, U.Z)(X.tI.PRESET_VIDEO, ex, eg);
                    (t = e), (n = l);
                }
                n !== eU && eV(n), t !== eB && ek(t), s !== t || i !== n ? eG(X.tI.PRESET_CUSTOM) : e !== ey && eG(e);
            },
            [ex, eg, eU, eB, ey]
        ),
        [eJ, e$] = r.useState(ej ? '' : void 0),
        e1 = r.useCallback(
            (e) => {
                (0, V.t)(), (0, V.T)(null != e ? e : eJ);
            },
            [eJ]
        );
    function e0(e) {
        if ((e.preventDefault(), 1 === eN)) return e1();
        if (2 === eN) return eM(3);
        if (null != eJ) return eM(1);
        let t = (0, K.Z)(em, ew, I.ZP.getRunningGames());
        B.ZP.supportsFeature(q.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)
            ? !(function () {
                  var e;
                  let t = null !== (e = null == em ? void 0 : em.pid) && void 0 !== e ? e : null;
                  (0, m.openModalLazy)(async () => {
                      let { default: e } = await n.e('74300').then(n.bind(n, 566852));
                      return (n) =>
                          (0, i.jsx)(e, {
                              ...n,
                              handleStream: eX,
                              pid: t
                          });
                  });
              })()
            : eX();
    }
    let e2 = r.useCallback(
            (e) => {
                eb(e), null != e && (eE && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? e$(e.id.split(':')[1]) : e$(void 0), eM(3), eA(!0));
            },
            [eE]
        ),
        e5 = r.useCallback(
            (e) => {
                eK(e);
                var t = 3;
                eM((t = es ? 2 : 3));
            },
            [es]
        ),
        e3 = !(1 === eN && eE && eS === H.Uc.Error),
        e7 = (function (e) {
            switch (e) {
                case 2:
                    return ee.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
                case 1:
                    return ee.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_NATIVE_SOURCE.format({ buttonName: ee.Z.Messages.GO_LIVE_MODAL_NATIVE_SELECT_CTA });
                case 3:
                    return null;
                default:
                    return ee.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC;
            }
        })(eN),
        e4 = (0, i.jsx)(m.ModalHeader, {
            className: et.modalHeader,
            separator: !1,
            children: (0, i.jsxs)(E.Z, {
                direction: E.Z.Direction.VERTICAL,
                align: E.Z.Align.CENTER,
                className: et.header,
                children: [
                    (0, i.jsx)(m.Heading, {
                        variant: 'heading-xl/semibold',
                        id: eT,
                        className: et.headerText,
                        children: ee.Z.Messages.GO_LIVE_MODAL_TITLE
                    }),
                    e3 && null != e7
                        ? (0, i.jsx)(m.Text, {
                              className: et.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: e7
                          })
                        : null
                ]
            })
        }),
        e9 = r.useCallback(() => {
            eE && (0, V.t)(), eM(2);
        }, [eE]),
        e8 = (function (e, t, n, l) {
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
        })(eN, el, es, eR),
        e6 = 1 !== eN && (3 !== eN || (null == ew && null == em) || null == eQ),
        te = r.useCallback(() => {
            null != e8 && eM(e8);
        }, [e8]),
        tt = (0, i.jsxs)(m.Slides, {
            springConfig: {
                ...c.config.stiff,
                clamp: !0
            },
            activeSlide: eN,
            width: 480,
            children: [
                (0, i.jsx)(m.Slide, {
                    id: 0,
                    children: (0, i.jsx)('div', {
                        className: et.modalSize,
                        children: (0, i.jsx)(z.Z, { onSelectGuild: e5 })
                    })
                }),
                (0, i.jsx)(m.Slide, {
                    id: 2,
                    children: (0, i.jsx)('div', {
                        className: et.modalSize,
                        children: eE
                            ? (0, i.jsx)(Y.se, { onSourceSelect: e2 })
                            : (0, i.jsx)(Y.oA, {
                                  selectedSource: ew,
                                  onChangeSelectedSource: e2
                              })
                    })
                }),
                (0, i.jsx)(m.Slide, {
                    id: 3,
                    children: (0, i.jsx)('div', {
                        className: et.modalSize,
                        children: (0, i.jsx)(W.Z, {
                            selectedChannelId: null !== (d = null == eh ? void 0 : eh.id) && void 0 !== d ? d : eO,
                            selectedPreset: ey,
                            selectedResolution: eB,
                            selectedSource: ew,
                            selectedFPS: eU,
                            sound: eH,
                            previewDisabled: eW,
                            sourceChanged: eR,
                            selectSource: es,
                            onChangeSelectedFPS: (e) => eq(ey, eB, e),
                            onChangeSelectedResolution: (e) => eq(ey, e, eU),
                            onChangeSelectedPreset: (e) => eq(e, eB, eU),
                            onChangeSelectedChannelId: eL,
                            onChangeSelectedSource: e2,
                            onChangeSource: () => e9(),
                            onChangeAudioDevice: (e) => eP(e),
                            onChangeGuild: () => eM(0),
                            onChangeSound: (e) => eF(e),
                            onChangePreviewDisabled: (e) => ez(e),
                            onClose: ea,
                            selectedGuildId: eY,
                            targetGuildPremiumTier: eg,
                            selectGuild: el
                        })
                    })
                }),
                (0, i.jsx)(m.Slide, {
                    id: 1,
                    children: (0, i.jsx)('div', {
                        className: et.modalSize,
                        children: (0, i.jsx)(Y.Hu, {
                            onSourceSelect: eX,
                            onCancel: te,
                            pickerType: eJ
                        })
                    })
                })
            ]
        }),
        tn = 1 === eN || (ej && 3 === eN) ? ee.Z.Messages.GO_LIVE_MODAL_NATIVE_SELECT_CTA : eE && (3 !== eN || null != eJ) ? ee.Z.Messages.NEXT : ee.Z.Messages.GO_LIVE_MODAL_CTA,
        tl = (0, i.jsxs)(m.ModalFooter, {
            justify: null == e8 ? E.Z.Justify.START : E.Z.Justify.BETWEEN,
            children: [
                (0, i.jsx)(m.Button, {
                    type: 'submit',
                    size: m.Button.Sizes.SMALL,
                    disabled: e6,
                    autoFocus: !0,
                    children: tn
                }),
                null == e8
                    ? (0, i.jsx)(m.Button, {
                          className: et.cancelButton,
                          look: m.Button.Looks.LINK,
                          size: m.Button.Sizes.SMALL,
                          color: m.ButtonColors.PRIMARY,
                          onClick: ea,
                          children: ee.Z.Messages.CANCEL
                      })
                    : (0, i.jsx)(m.Button, {
                          size: m.Button.Sizes.SMALL,
                          color: m.ButtonColors.PRIMARY,
                          onClick: te,
                          children: ee.Z.Messages.BACK
                      })
            ]
        });
    return (0, i.jsx)(p.Z, {
        page: q.ZY5.GO_LIVE_MODAL,
        children: (0, i.jsxs)(m.ModalRoot, {
            'aria-labelledby': eT,
            transitionState: eo,
            size: m.ModalSize.DYNAMIC,
            className: et.modalSize,
            children: [
                (0, i.jsx)(m.ModalCloseButton, {
                    onClick: ea,
                    className: et.modalCloseButton
                }),
                (0, i.jsx)('div', { className: et.art }),
                (0, i.jsx)(m.Popout, {
                    position: 'right',
                    align: 'center',
                    shouldShow: null != eI,
                    spacing: 18,
                    renderPopout: () =>
                        (0, i.jsx)(en, {
                            visibleContent: eI,
                            markAsDismissed: eZ
                        }),
                    children: () =>
                        (0, i.jsxs)('form', {
                            onSubmit: e0,
                            children: [e4, tt, tl]
                        })
                })
            ]
        })
    });
}
