n.r(t),
    n.d(t, {
        default: function () {
            return er;
        }
    }),
    n(47120),
    n(653041);
var l,
    i,
    r = n(200651),
    s = n(192379),
    a = n(512722),
    o = n.n(a),
    c = n(100621),
    d = n(553813),
    u = n.n(d),
    f = n(442837),
    h = n(704215),
    m = n(481060),
    x = n(668781),
    g = n(287734),
    p = n(872810),
    j = n(410575),
    v = n(579806),
    C = n(812206),
    S = n(215339),
    _ = n(600164),
    Z = n(313201),
    I = n(243778),
    T = n(594190),
    N = n(998594),
    b = n(751571),
    w = n(970731),
    y = n(695346),
    E = n(396995),
    R = n(361291),
    M = n(592125),
    k = n(430824),
    P = n(131951),
    A = n(944486),
    L = n(594174),
    B = n(449224),
    G = n(626135),
    D = n(63063),
    O = n(358085),
    U = n(998502),
    F = n(451467),
    H = n(537413),
    W = n(299570),
    V = n(960861),
    z = n(989941),
    K = n(399299),
    Y = n(351152),
    X = n(567126),
    J = n(143135),
    q = n(70722),
    Q = n(37113),
    $ = n(981631),
    ee = n(921944),
    et = n(761274),
    en = n(388032),
    el = n(410894);
((i = l || (l = {}))[(i.GUILD = 0)] = 'GUILD'), (i[(i.NATIVE_PICKER_SOURCE = 1)] = 'NATIVE_PICKER_SOURCE'), (i[(i.SOURCE = 2)] = 'SOURCE'), (i[(i.CONFIRM = 3)] = 'CONFIRM');
let ei = (e) => {
    let { visibleContent: t, markAsDismissed: n } = e;
    return t === h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, r.jsx)(w.ZP, {
              content: en.intl.string(en.t.sFyFJy),
              buttonCTA: en.intl.string(en.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(D.Z.getArticleURL($.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: en.intl.string(en.t.hvVgAQ),
              caretPosition: w.DF.LEFT_CENTER,
              markAsDismissed: n
          })
        : null;
};
function er(e) {
    var t, l, i, a, d, w, D;
    let { selectGuild: er = !1, selectSource: es = !0, guildId: ea, analyticsLocation: eo, onClose: ec, transitionState: ed } = e,
        { preset: eu, resolution: ef, fps: eh, soundshareEnabled: em } = (0, f.cj)([R.Z], () => R.Z.getState()),
        ex = (0, f.e7)([A.Z, M.Z], () => M.Z.getChannel(A.Z.getVoiceChannelId())),
        eg = (0, f.e7)([T.ZP, B.Z], () => ((0, O.isWindows)() ? (0, z.Z)(T.ZP, B.Z) : null)),
        ep = (0, f.e7)([L.default], () => {
            let e = L.default.getCurrentUser();
            return o()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        ej = null !== (t = null == ex ? void 0 : ex.getGuildId()) && void 0 !== t ? t : ea,
        ev = (0, f.e7)([k.Z], () => {
            var e;
            return null != ej ? (null === (e = k.Z.getGuild(ej)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [eC, eS] = null !== (l = (0, H.Z)(eu, ep, ev)) && void 0 !== l ? l : [Q.LY.RESOLUTION_720, Q.ws.FPS_30],
        { lastPickerAction: e_ } = (0, f.e7)([V.ZP], () => V.ZP.getPickerState()),
        eZ = P.Z.getUseSystemScreensharePicker();
    (0, V.UB)();
    let eI = eZ && (0, O.isMac)() && u().satisfies(null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release, q.jR),
        eT = [];
    ed === m.ModalTransitionState.ENTERED && eZ && (0, O.isMac)() && eT.push(h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eN, eb] = (0, I.US)(eT, void 0, !0);
    eu !== Q.tI.PRESET_CUSTOM && ((ef = eC), (eh = eS)), !(0, F.Z)(eu, ef, eh, ep, ev) && ((ef = eC), (eh = eS));
    let ew = (0, Z.Dt)();
    let [ey, eE] = s.useState(((w = er), (D = es && !eI), w ? 0 : D ? 2 : 3)),
        [eR, eM] = s.useState(eI),
        [ek, eP] = s.useState(null),
        [eA, eL] = s.useState(
            eI
                ? {
                      id: 'prepicked:',
                      name: en.intl.string(en.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eB, eG] = s.useState(null),
        [eD, eO] = s.useState(eu),
        [eU, eF] = s.useState(ef),
        [eH, eW] = s.useState(eh),
        [eV, ez] = s.useState(em),
        [eK, eY] = s.useState(null !== (i = y.I0.getSetting()) && void 0 !== i && i),
        [eX, eJ] = s.useState(null != ea ? ea : null),
        eq = null !== (a = null == ex ? void 0 : ex.id) && void 0 !== a ? a : ek;
    s.useEffect(() => {
        let e = (0, O.isWindows)() ? (0, z.Z)(T.ZP, B.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? C.Z.getApplication(e.id) : null;
        G.default.track($.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: eo
        }),
            N.Z.trackExposure({ location: 'GoLiveModal' });
    }, [eo]);
    function eQ() {
        !(function () {
            var e, t;
            o()(null != eg || null != eA, 'got nothing to stream');
            let n = null !== (e = null == ex ? void 0 : ex.id) && void 0 !== e ? e : ek;
            o()(null != n, 'Received null target channel ID');
            let l = M.Z.getChannel(n),
                i = null !== (t = null == l ? void 0 : l.getGuildId()) && void 0 !== t ? t : ea;
            null == ex && g.default.selectVoiceChannel(n);
            let r = eD,
                s = eU,
                a = eH;
            !(0, F.Z)(r, s, a, ep, ev, l) && ((r = Q.tI.PRESET_VIDEO), (s = Q.LY.RESOLUTION_720), (a = Q.ws.FPS_30)),
                (0, p.Rc)({
                    preset: r,
                    resolution: s,
                    frameRate: a,
                    soundshareEnabled: eV
                });
            let c = (0, J.Z)(eg, eA, T.ZP.getRunningGames()),
                d = !(0, O.isWindows)() || null == c || (null == eA ? void 0 : eA.id.startsWith('camera:')) || null == c ? null : c.pid;
            (0, p.WH)(i, n, {
                pid: d,
                sourceId: null == d && null != eA ? eA.id : null,
                sourceName: null == d && null != eA ? eA.name : null,
                audioSourceId: eB,
                sound: eV,
                previewDisabled: eK
            }),
                null != eN && eb(ee.L.AUTO_DISMISS),
                !eZ &&
                    (async () => {
                        !(await b.Z.hasPermission(et.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) &&
                            x.Z.show({
                                title: en.intl.string(en.t['X+mXen']),
                                body: en.intl.string(en.t.MIJCzs)
                            });
                    })();
        })(),
            ec();
    }
    let e$ = s.useCallback(
            (e, t, n) => {
                var l;
                let i = (0, H.Z)(e, ep, ev),
                    [r, s] = null != i ? i : [t, n];
                e !== eD && ((t = r), (n = s));
                let a = null !== (l = null == ex ? void 0 : ex.id) && void 0 !== l ? l : ek;
                o()(null != a, 'Received null target channel ID');
                let c = M.Z.getChannel(a);
                if (!(0, F.Z)(e, t, n, ep, ev, c)) {
                    let [e, l] = (0, H.Z)(Q.tI.PRESET_VIDEO, ep, ev);
                    (t = e), (n = l);
                }
                n !== eH && eW(n), t !== eU && eF(t), r !== t || s !== n ? eO(Q.tI.PRESET_CUSTOM) : e !== eD && eO(e);
            },
            [ex, ek, ep, ev, eH, eU, eD]
        ),
        [e1, e0] = s.useState(eI ? '' : void 0),
        e2 = s.useCallback(
            (e) => {
                (0, W.t)(), (0, W.T)(null != e ? e : e1);
            },
            [e1]
        );
    function e5(e) {
        if ((e.preventDefault(), 1 === ey)) return e2();
        if (2 === ey) return eE(3);
        if (null != e1) return eE(1);
        let t = (0, J.Z)(eg, eA, T.ZP.getRunningGames());
        U.ZP.supportsFeature($.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)
            ? !(function () {
                  var e;
                  let t = null !== (e = null == eg ? void 0 : eg.pid) && void 0 !== e ? e : null;
                  (0, m.openModalLazy)(async () => {
                      let { default: e } = await n.e('74300').then(n.bind(n, 566852));
                      return (n) =>
                          (0, r.jsx)(e, {
                              ...n,
                              handleStream: eQ,
                              pid: t
                          });
                  });
              })()
            : eQ();
    }
    let e3 = s.useCallback(
            (e) => {
                eL(e), null != e && (eZ && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? e0(e.id.split(':')[1]) : e0(void 0), eE(3), eM(!0));
            },
            [eZ]
        ),
        e7 = s.useCallback(
            (e) => {
                eJ(e);
                var t = 3;
                eE((t = es ? 2 : 3));
            },
            [es]
        ),
        e4 = !(1 === ey && eZ && e_ === V.Uc.Error),
        e9 = (function (e) {
            switch (e) {
                case 2:
                    return en.intl.string(en.t['aC4/Zm']);
                case 1:
                    return en.intl.formatToPlainString(en.t.sbbPhY, { buttonName: en.intl.string(en.t.FiBjwc) });
                case 3:
                    return null;
                default:
                    return en.intl.string(en.t['1hKIam']);
            }
        })(ey),
        e8 = (0, r.jsx)(m.ModalHeader, {
            className: el.modalHeader,
            separator: !1,
            children: (0, r.jsxs)(_.Z, {
                direction: _.Z.Direction.VERTICAL,
                align: _.Z.Align.CENTER,
                className: el.header,
                children: [
                    (0, r.jsx)(m.Heading, {
                        variant: 'heading-xl/semibold',
                        id: ew,
                        className: el.headerText,
                        children: en.intl.string(en.t.RDkJQ0)
                    }),
                    e4 && null != e9
                        ? (0, r.jsx)(m.Text, {
                              className: el.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: e9
                          })
                        : null
                ]
            })
        }),
        e6 = s.useCallback(() => {
            eZ && (0, W.t)(), eE(2);
        }, [eZ]),
        te = (0, S.j)('GoLiveModal'),
        tt = (null == ex ? void 0 : ex.type) === $.d4z.GUILD_VOICE && te,
        tn = (function (e, t, n, l) {
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
        })(ey, er, es, eR),
        tl = 1 !== ey && (3 !== ey || (null == eA && null == eg) || null == eq),
        ti = s.useCallback(() => {
            null != tn && eE(tn);
        }, [tn]),
        tr = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(m.Slides, {
                    springConfig: {
                        ...c.config.stiff,
                        clamp: !0
                    },
                    activeSlide: ey,
                    width: 480,
                    children: [
                        (0, r.jsx)(m.Slide, {
                            id: 0,
                            children: (0, r.jsx)('div', {
                                className: el.modalSize,
                                children: (0, r.jsx)(Y.Z, { onSelectGuild: e7 })
                            })
                        }),
                        (0, r.jsx)(m.Slide, {
                            id: 2,
                            children: (0, r.jsx)('div', {
                                className: el.modalSize,
                                children: eZ
                                    ? (0, r.jsx)(X.se, { onSourceSelect: e3 })
                                    : (0, r.jsx)(X.oA, {
                                          selectedSource: eA,
                                          onChangeSelectedSource: e3
                                      })
                            })
                        }),
                        (0, r.jsx)(m.Slide, {
                            id: 3,
                            children: (0, r.jsx)('div', {
                                className: el.modalSize,
                                children: (0, r.jsx)(K.Z, {
                                    selectedChannelId: null !== (d = null == ex ? void 0 : ex.id) && void 0 !== d ? d : ek,
                                    selectedPreset: eD,
                                    selectedResolution: eU,
                                    selectedSource: eA,
                                    selectedFPS: eH,
                                    sound: eV,
                                    previewDisabled: eK,
                                    sourceChanged: eR,
                                    selectSource: es,
                                    onChangeSelectedFPS: (e) => e$(eD, eU, e),
                                    onChangeSelectedResolution: (e) => e$(eD, e, eH),
                                    onChangeSelectedPreset: (e) => e$(e, eU, eH),
                                    onChangeSelectedChannelId: eP,
                                    onChangeSelectedSource: e3,
                                    onChangeSource: () => e6(),
                                    onChangeAudioDevice: (e) => eG(e),
                                    onChangeGuild: () => eE(0),
                                    onChangeSound: (e) => ez(e),
                                    onChangePreviewDisabled: (e) => eY(e),
                                    onClose: ec,
                                    selectedGuildId: eX,
                                    targetGuildPremiumTier: ev,
                                    selectGuild: er
                                })
                            })
                        }),
                        (0, r.jsx)(m.Slide, {
                            id: 1,
                            children: (0, r.jsx)('div', {
                                className: el.modalSize,
                                children: (0, r.jsx)(X.Hu, {
                                    onSourceSelect: eQ,
                                    onCancel: ti,
                                    pickerType: e1
                                })
                            })
                        })
                    ]
                }),
                tt && (0, r.jsx)(E.Z, { channel: ex })
            ]
        }),
        ts = 1 === ey || (eI && 3 === ey) ? en.intl.string(en.t.FiBjwc) : eZ && (3 !== ey || null != e1) ? en.intl.string(en.t.PDTjLC) : en.intl.string(en.t['UE/rPz']),
        ta = (0, r.jsxs)(m.ModalFooter, {
            justify: null == tn ? _.Z.Justify.START : _.Z.Justify.BETWEEN,
            children: [
                (0, r.jsx)(m.Button, {
                    type: 'submit',
                    size: m.Button.Sizes.SMALL,
                    disabled: tl,
                    autoFocus: !0,
                    children: ts
                }),
                null == tn
                    ? (0, r.jsx)(m.Button, {
                          className: el.cancelButton,
                          look: m.Button.Looks.LINK,
                          size: m.Button.Sizes.SMALL,
                          color: m.ButtonColors.PRIMARY,
                          onClick: ec,
                          children: en.intl.string(en.t['ETE/oK'])
                      })
                    : (0, r.jsx)(m.Button, {
                          size: m.Button.Sizes.SMALL,
                          color: m.ButtonColors.PRIMARY,
                          onClick: ti,
                          children: en.intl.string(en.t['13/7kZ'])
                      })
            ]
        });
    return (0, r.jsx)(j.Z, {
        page: $.ZY5.GO_LIVE_MODAL,
        children: (0, r.jsxs)(m.ModalRoot, {
            'aria-labelledby': ew,
            transitionState: ed,
            size: m.ModalSize.DYNAMIC,
            className: el.modalSize,
            children: [
                (0, r.jsx)(m.ModalCloseButton, {
                    onClick: ec,
                    className: el.modalCloseButton
                }),
                (0, r.jsx)('div', { className: el.art }),
                (0, r.jsx)(m.Popout, {
                    position: 'right',
                    align: 'center',
                    shouldShow: null != eN,
                    spacing: 18,
                    renderPopout: () =>
                        (0, r.jsx)(ei, {
                            visibleContent: eN,
                            markAsDismissed: eb
                        }),
                    children: () =>
                        (0, r.jsxs)('form', {
                            onSubmit: e5,
                            children: [e8, tr, ta]
                        })
                })
            ]
        })
    });
}
