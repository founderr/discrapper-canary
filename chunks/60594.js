n.r(t),
    n.d(t, {
        default: function () {
            return eo;
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
    g = n(872810),
    p = n(410575),
    v = n(579806),
    j = n(317381),
    C = n(316253),
    S = n(89425),
    Z = n(812206),
    _ = n(835473),
    I = n(215339),
    T = n(600164),
    N = n(313201),
    b = n(243778),
    w = n(594190),
    y = n(998594),
    E = n(751571),
    R = n(970731),
    M = n(695346),
    P = n(396995),
    A = n(361291),
    k = n(592125),
    L = n(430824),
    B = n(131951),
    G = n(944486),
    D = n(594174),
    O = n(449224),
    U = n(626135),
    F = n(63063),
    H = n(358085),
    W = n(998502),
    V = n(451467),
    z = n(537413),
    K = n(299570),
    Y = n(960861),
    X = n(989941),
    J = n(399299),
    q = n(351152),
    Q = n(567126),
    $ = n(143135),
    ee = n(70722),
    et = n(37113),
    en = n(981631),
    el = n(921944),
    ei = n(761274),
    er = n(388032),
    es = n(410894);
((i = l || (l = {}))[(i.GUILD = 0)] = 'GUILD'), (i[(i.NATIVE_PICKER_SOURCE = 1)] = 'NATIVE_PICKER_SOURCE'), (i[(i.SOURCE = 2)] = 'SOURCE'), (i[(i.CONFIRM = 3)] = 'CONFIRM');
let ea = (e) => {
    let { visibleContent: t, markAsDismissed: n } = e;
    return t === h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, r.jsx)(R.ZP, {
              content: er.intl.string(er.t.sFyFJy),
              buttonCTA: er.intl.string(er.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(F.Z.getArticleURL(en.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: er.intl.string(er.t.hvVgAQ),
              caretPosition: R.DF.LEFT_CENTER,
              markAsDismissed: n
          })
        : null;
};
function eo(e) {
    var t, l, i, a, d, R, F;
    let { selectGuild: eo = !1, selectSource: ec = !0, guildId: ed, analyticsLocation: eu, onClose: ef, transitionState: eh } = e,
        { preset: em, resolution: ex, fps: eg, soundshareEnabled: ep } = (0, f.cj)([A.Z], () => A.Z.getState()),
        ev = (0, f.e7)([G.Z, k.Z], () => k.Z.getChannel(G.Z.getVoiceChannelId())),
        ej = (0, f.e7)([w.ZP, O.Z], () => ((0, H.isWindows)() ? (0, X.Z)(w.ZP, O.Z) : null)),
        eC = (0, f.e7)([j.ZP], () => j.ZP.getCurrentEmbeddedActivity()),
        eS = (0, _.q)(null == eC ? void 0 : eC.applicationId),
        [eZ, e_] = s.useState(null);
    s.useEffect(() => {
        (0, C.Z)() &&
            (async () => {
                var e;
                e_(await (null === v.Z || void 0 === v.Z ? void 0 : null === (e = v.Z.window) || void 0 === e ? void 0 : e.getMediaSourceId('DISCORD_ACTIVITY_POPOUT')));
            })();
    }, []);
    let eI = (0, f.e7)([D.default], () => {
            let e = D.default.getCurrentUser();
            return o()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        eT = null !== (t = null == ev ? void 0 : ev.getGuildId()) && void 0 !== t ? t : ed,
        eN = (0, f.e7)([L.Z], () => {
            var e;
            return null != eT ? (null === (e = L.Z.getGuild(eT)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [eb, ew] = null !== (l = (0, z.Z)(em, eI, eN)) && void 0 !== l ? l : [et.LY.RESOLUTION_720, et.ws.FPS_30],
        { lastPickerAction: ey } = (0, f.e7)([Y.ZP], () => Y.ZP.getPickerState()),
        eE = B.Z.getUseSystemScreensharePicker();
    (0, Y.UB)();
    let eR = eE && (0, H.isMac)() && u().satisfies(null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release, ee.jR),
        eM = [];
    eh === m.ModalTransitionState.ENTERED && eE && (0, H.isMac)() && eM.push(h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eP, eA] = (0, b.US)(eM, void 0, !0);
    em !== et.tI.PRESET_CUSTOM && ((ex = eb), (eg = ew)), !(0, V.Z)(em, ex, eg, eI, eN) && ((ex = eb), (eg = ew));
    let ek = (0, N.Dt)();
    let [eL, eB] = s.useState(((R = eo), (F = ec && !eR), R ? 0 : F ? 2 : 3)),
        [eG, eD] = s.useState(eR),
        [eO, eU] = s.useState(null),
        [eF, eH] = s.useState(
            eR
                ? {
                      id: 'prepicked:',
                      name: er.intl.string(er.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eW, eV] = s.useState(null),
        [ez, eK] = s.useState(em),
        [eY, eX] = s.useState(ex),
        [eJ, eq] = s.useState(eg),
        [eQ, e$] = s.useState(ep),
        [e1, e0] = s.useState(null !== (i = M.I0.getSetting()) && void 0 !== i && i),
        [e2, e5] = s.useState(null != ed ? ed : null),
        e3 = null !== (a = null == ev ? void 0 : ev.id) && void 0 !== a ? a : eO;
    async function e7() {
        var e, t;
        o()(null != ej || null != eF || (null != eC && null != eZ), 'got nothing to stream');
        let n = null !== (e = null == ev ? void 0 : ev.id) && void 0 !== e ? e : eO;
        o()(null != n, 'Received null target channel ID');
        let l = k.Z.getChannel(n),
            i = null !== (t = null == l ? void 0 : l.getGuildId()) && void 0 !== t ? t : ed;
        if (null == ev && !(await (0, S.Z)({ channelId: n }))) return;
        let r = ez,
            s = eY,
            a = eJ;
        !(0, V.Z)(r, s, a, eI, eN, l) && ((r = et.tI.PRESET_VIDEO), (s = et.LY.RESOLUTION_720), (a = et.ws.FPS_30)),
            (0, g.Rc)({
                preset: r,
                resolution: s,
                frameRate: a,
                soundshareEnabled: eQ
            });
        let c = (0, $.Z)(ej, eF, w.ZP.getRunningGames()),
            d = !(0, H.isWindows)() || null == c || (null == eF ? void 0 : eF.id.startsWith('camera:')) || null == c ? null : c.pid,
            u = null,
            f = null;
        null == d && (null != eF ? ((u = eF.id), (f = eF.name)) : null != eZ && ((u = eZ), (f = null == eS ? void 0 : eS.name))),
            (0, g.WH)(i, n, {
                pid: d,
                sourceId: u,
                sourceName: f,
                audioSourceId: eW,
                sound: eQ,
                previewDisabled: e1
            }),
            null != eP && eA(el.L.AUTO_DISMISS),
            !eE &&
                (async () => {
                    !(await E.Z.hasPermission(ei.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) &&
                        x.Z.show({
                            title: er.intl.string(er.t['X+mXen']),
                            body: er.intl.string(er.t.MIJCzs)
                        });
                })();
    }
    function e4() {
        e7(), ef();
    }
    s.useEffect(() => {
        let e = (0, H.isWindows)() ? (0, X.Z)(w.ZP, O.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? Z.Z.getApplication(e.id) : null;
        U.default.track(en.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: eu
        }),
            y.Z.trackExposure({ location: 'GoLiveModal' });
    }, [eu]);
    let e9 = s.useCallback(
            (e, t, n) => {
                var l;
                let i = (0, z.Z)(e, eI, eN),
                    [r, s] = null != i ? i : [t, n];
                e !== ez && ((t = r), (n = s));
                let a = null !== (l = null == ev ? void 0 : ev.id) && void 0 !== l ? l : eO;
                o()(null != a, 'Received null target channel ID');
                let c = k.Z.getChannel(a);
                if (!(0, V.Z)(e, t, n, eI, eN, c)) {
                    let [e, l] = (0, z.Z)(et.tI.PRESET_VIDEO, eI, eN);
                    (t = e), (n = l);
                }
                n !== eJ && eq(n), t !== eY && eX(t), r !== t || s !== n ? eK(et.tI.PRESET_CUSTOM) : e !== ez && eK(e);
            },
            [ev, eO, eI, eN, eJ, eY, ez]
        ),
        [e8, e6] = s.useState(eR ? '' : void 0),
        te = s.useCallback(
            (e) => {
                (0, K.t)(), (0, K.T)(null != e ? e : e8);
            },
            [e8]
        );
    function tt(e) {
        if ((e.preventDefault(), 1 === eL)) return te();
        if (2 === eL) return eB(3);
        if (null != e8) return eB(1);
        let t = (0, $.Z)(ej, eF, w.ZP.getRunningGames());
        W.ZP.supportsFeature(en.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)
            ? !(function () {
                  var e;
                  let t = null !== (e = null == ej ? void 0 : ej.pid) && void 0 !== e ? e : null;
                  (0, m.openModalLazy)(async () => {
                      let { default: e } = await n.e('74300').then(n.bind(n, 566852));
                      return (n) =>
                          (0, r.jsx)(e, {
                              ...n,
                              handleStream: e4,
                              pid: t
                          });
                  });
              })()
            : e4();
    }
    let tn = s.useCallback(
            (e) => {
                eH(e), null != e && (eE && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? e6(e.id.split(':')[1]) : e6(void 0), eB(3), eD(!0));
            },
            [eE]
        ),
        tl = s.useCallback(
            (e) => {
                e5(e);
                var t = 3;
                eB((t = ec ? 2 : 3));
            },
            [ec]
        ),
        ti = !(1 === eL && eE && ey === Y.Uc.Error),
        tr = (function (e) {
            switch (e) {
                case 2:
                    return er.intl.string(er.t['aC4/Zm']);
                case 1:
                    return er.intl.formatToPlainString(er.t.sbbPhY, { buttonName: er.intl.string(er.t.FiBjwc) });
                case 3:
                    return null;
                default:
                    return er.intl.string(er.t['1hKIam']);
            }
        })(eL),
        ts = (0, r.jsx)(m.ModalHeader, {
            className: es.modalHeader,
            separator: !1,
            children: (0, r.jsxs)(T.Z, {
                direction: T.Z.Direction.VERTICAL,
                align: T.Z.Align.CENTER,
                className: es.header,
                children: [
                    (0, r.jsx)(m.Heading, {
                        variant: 'heading-xl/semibold',
                        id: ek,
                        className: es.headerText,
                        children: er.intl.string(er.t.RDkJQ0)
                    }),
                    ti && null != tr
                        ? (0, r.jsx)(m.Text, {
                              className: es.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: tr
                          })
                        : null
                ]
            })
        }),
        ta = s.useCallback(() => {
            eE && (0, K.t)(), eB(2);
        }, [eE]),
        to = (0, I.j)('GoLiveModal'),
        tc = (0, f.e7)([L.Z], () => L.Z.getGuild(ed)),
        td = (null == ev ? void 0 : ev.type) === en.d4z.GUILD_VOICE && to && null != tc && tc.premiumTier === en.Eu4.NONE && !(null == ev ? void 0 : ev.isHDStreamSplashed),
        tu = (function (e, t, n, l) {
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
        })(eL, eo, ec, eG),
        tf = 1 !== eL && (3 !== eL || (null == eF && null == ej && null == eZ) || null == e3),
        th = s.useCallback(() => {
            null != tu && eB(tu);
        }, [tu]),
        tm = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(m.Slides, {
                    springConfig: {
                        ...c.config.stiff,
                        clamp: !0
                    },
                    activeSlide: eL,
                    width: 480,
                    children: [
                        (0, r.jsx)(m.Slide, {
                            id: 0,
                            children: (0, r.jsx)('div', {
                                className: es.modalSize,
                                children: (0, r.jsx)(q.Z, { onSelectGuild: tl })
                            })
                        }),
                        (0, r.jsx)(m.Slide, {
                            id: 2,
                            children: (0, r.jsx)('div', {
                                className: es.modalSize,
                                children: eE
                                    ? (0, r.jsx)(Q.se, { onSourceSelect: tn })
                                    : (0, r.jsx)(Q.oA, {
                                          selectedSource: eF,
                                          onChangeSelectedSource: tn
                                      })
                            })
                        }),
                        (0, r.jsx)(m.Slide, {
                            id: 3,
                            children: (0, r.jsx)('div', {
                                className: es.modalSize,
                                children: (0, r.jsx)(J.Z, {
                                    selectedChannelId: null !== (d = null == ev ? void 0 : ev.id) && void 0 !== d ? d : eO,
                                    selectedPreset: ez,
                                    selectedResolution: eY,
                                    selectedSource: eF,
                                    selectedFPS: eJ,
                                    sound: eQ,
                                    previewDisabled: e1,
                                    sourceChanged: eG,
                                    selectSource: ec,
                                    onChangeSelectedFPS: (e) => e9(ez, eY, e),
                                    onChangeSelectedResolution: (e) => e9(ez, e, eJ),
                                    onChangeSelectedPreset: (e) => e9(e, eY, eJ),
                                    onChangeSelectedChannelId: eU,
                                    onChangeSelectedSource: tn,
                                    onChangeSource: () => ta(),
                                    onChangeAudioDevice: (e) => eV(e),
                                    onChangeGuild: () => eB(0),
                                    onChangeSound: (e) => e$(e),
                                    onChangePreviewDisabled: (e) => e0(e),
                                    onClose: ef,
                                    selectedGuildId: e2,
                                    targetGuildPremiumTier: eN,
                                    selectGuild: eo
                                })
                            })
                        }),
                        (0, r.jsx)(m.Slide, {
                            id: 1,
                            children: (0, r.jsx)('div', {
                                className: es.modalSize,
                                children: (0, r.jsx)(Q.Hu, {
                                    onSourceSelect: e4,
                                    onCancel: th,
                                    pickerType: e8
                                })
                            })
                        })
                    ]
                }),
                td && (0, r.jsx)(P.Z, { channel: ev })
            ]
        }),
        tx = 1 === eL || (eR && 3 === eL) ? er.intl.string(er.t.FiBjwc) : eE && (3 !== eL || null != e8) ? er.intl.string(er.t.PDTjLC) : er.intl.string(er.t['UE/rPz']),
        tg = (0, r.jsxs)(m.ModalFooter, {
            justify: null == tu ? T.Z.Justify.START : T.Z.Justify.BETWEEN,
            children: [
                (0, r.jsx)(m.Button, {
                    type: 'submit',
                    size: m.Button.Sizes.SMALL,
                    disabled: tf,
                    autoFocus: !0,
                    children: tx
                }),
                null == tu
                    ? (0, r.jsx)(m.Button, {
                          className: es.cancelButton,
                          look: m.Button.Looks.LINK,
                          size: m.Button.Sizes.SMALL,
                          color: m.ButtonColors.PRIMARY,
                          onClick: ef,
                          children: er.intl.string(er.t['ETE/oK'])
                      })
                    : (0, r.jsx)(m.Button, {
                          size: m.Button.Sizes.SMALL,
                          color: m.ButtonColors.PRIMARY,
                          onClick: th,
                          children: er.intl.string(er.t['13/7kZ'])
                      })
            ]
        });
    return (0, r.jsx)(p.Z, {
        page: en.ZY5.GO_LIVE_MODAL,
        children: (0, r.jsxs)(m.ModalRoot, {
            'aria-labelledby': ek,
            transitionState: eh,
            size: m.ModalSize.DYNAMIC,
            className: es.modalSize,
            children: [
                (0, r.jsx)(m.ModalCloseButton, {
                    onClick: ef,
                    className: es.modalCloseButton
                }),
                (0, r.jsx)('div', { className: es.art }),
                (0, r.jsx)(m.Popout, {
                    position: 'right',
                    align: 'center',
                    shouldShow: null != eP,
                    spacing: 18,
                    renderPopout: () =>
                        (0, r.jsx)(ea, {
                            visibleContent: eP,
                            markAsDismissed: eA
                        }),
                    children: () =>
                        (0, r.jsxs)('form', {
                            onSubmit: tt,
                            children: [ts, tm, tg]
                        })
                })
            ]
        })
    });
}
