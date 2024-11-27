n.r(t),
    n.d(t, {
        default: function () {
            return es;
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
    c = n(752877),
    d = n(553813),
    u = n.n(d),
    f = n(442837),
    h = n(704215),
    m = n(481060),
    x = n(668781),
    g = n(872810),
    p = n(410575),
    v = n(579806),
    j = n(636449),
    C = n(317381),
    S = n(89425),
    Z = n(812206),
    _ = n(835473),
    I = n(600164),
    T = n(313201),
    N = n(243778),
    w = n(594190),
    b = n(998594),
    y = n(751571),
    E = n(970731),
    R = n(695346),
    M = n(361291),
    P = n(592125),
    k = n(430824),
    A = n(131951),
    B = n(944486),
    L = n(594174),
    G = n(449224),
    D = n(626135),
    O = n(63063),
    U = n(358085),
    F = n(998502),
    W = n(451467),
    H = n(537413),
    V = n(299570),
    z = n(960861),
    K = n(989941),
    Y = n(399299),
    X = n(351152),
    J = n(567126),
    q = n(143135),
    Q = n(70722),
    $ = n(37113),
    ee = n(981631),
    et = n(921944),
    en = n(761274),
    el = n(388032),
    ei = n(456963);
((i = l || (l = {}))[(i.GUILD = 0)] = 'GUILD'), (i[(i.NATIVE_PICKER_SOURCE = 1)] = 'NATIVE_PICKER_SOURCE'), (i[(i.SOURCE = 2)] = 'SOURCE'), (i[(i.CONFIRM = 3)] = 'CONFIRM');
let er = (e) => {
    let { visibleContent: t, markAsDismissed: n } = e;
    return t === h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, r.jsx)(E.ZP, {
              content: el.intl.string(el.t.sFyFJy),
              buttonCTA: el.intl.string(el.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(O.Z.getArticleURL(ee.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: el.intl.string(el.t.hvVgAQ),
              caretPosition: E.DF.LEFT_CENTER,
              markAsDismissed: n
          })
        : null;
};
function es(e) {
    var t, l, i, a, d, E, O;
    let { selectGuild: es = !1, selectSource: ea = !0, guildId: eo, analyticsLocation: ec, onClose: ed, transitionState: eu } = e,
        { preset: ef, resolution: eh, fps: em, soundshareEnabled: ex } = (0, f.cj)([M.Z], () => M.Z.getState()),
        eg = (0, f.e7)([B.Z, P.Z], () => P.Z.getChannel(B.Z.getVoiceChannelId())),
        ep = (0, f.e7)([w.ZP, G.Z], () => ((0, U.isWindows)() ? (0, K.Z)(w.ZP, G.Z) : null)),
        ev = (0, f.e7)([C.ZP], () => C.ZP.getCurrentEmbeddedActivity()),
        ej = (0, _.q)(null == ev ? void 0 : ev.applicationId),
        [eC, eS] = s.useState(null);
    s.useEffect(() => {
        (0, j.R)() &&
            (async () => {
                var e;
                eS(await (null === v.Z || void 0 === v.Z ? void 0 : null === (e = v.Z.window) || void 0 === e ? void 0 : e.getMediaSourceId('DISCORD_ACTIVITY_POPOUT')));
            })();
    }, []);
    let eZ = (0, f.e7)([L.default], () => {
            let e = L.default.getCurrentUser();
            return o()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        e_ = null !== (t = null == eg ? void 0 : eg.getGuildId()) && void 0 !== t ? t : eo,
        eI = (0, f.e7)([k.Z], () => {
            var e;
            return null != e_ ? (null === (e = k.Z.getGuild(e_)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [eT, eN] = null !== (l = (0, H.Z)(ef, eZ, eI)) && void 0 !== l ? l : [$.LY.RESOLUTION_720, $.ws.FPS_30],
        { lastPickerAction: ew } = (0, f.e7)([z.ZP], () => z.ZP.getPickerState()),
        eb = A.Z.getUseSystemScreensharePicker();
    (0, z.UB)();
    let ey = eb && (0, U.isMac)() && u().satisfies(null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release, Q.jR),
        eE = [];
    eu === m.ModalTransitionState.ENTERED && eb && (0, U.isMac)() && eE.push(h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eR, eM] = (0, N.US)(eE, void 0, !0);
    ef !== $.tI.PRESET_CUSTOM && ((eh = eT), (em = eN)), !(0, W.Z)(ef, eh, em, eZ, eI) && ((eh = eT), (em = eN));
    let eP = (0, T.Dt)();
    let [ek, eA] = s.useState(((E = es), (O = ea && !ey), E ? 0 : O ? 2 : 3)),
        [eB, eL] = s.useState(ey),
        [eG, eD] = s.useState(null),
        [eO, eU] = s.useState(
            ey
                ? {
                      id: 'prepicked:',
                      name: el.intl.string(el.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eF, eW] = s.useState(null),
        [eH, eV] = s.useState(ef),
        [ez, eK] = s.useState(eh),
        [eY, eX] = s.useState(em),
        [eJ, eq] = s.useState(ex),
        [eQ, e$] = s.useState(null !== (i = R.I0.getSetting()) && void 0 !== i && i),
        [e1, e0] = s.useState(null != eo ? eo : null),
        e2 = null !== (a = null == eg ? void 0 : eg.id) && void 0 !== a ? a : eG;
    async function e5() {
        var e, t;
        o()(null != ep || null != eO || (null != ev && null != eC), 'got nothing to stream');
        let n = null !== (e = null == eg ? void 0 : eg.id) && void 0 !== e ? e : eG;
        o()(null != n, 'Received null target channel ID');
        let l = P.Z.getChannel(n),
            i = null !== (t = null == l ? void 0 : l.getGuildId()) && void 0 !== t ? t : eo;
        if (null == eg && !(await (0, S.Z)({ channelId: n }))) return;
        let r = eH,
            s = ez,
            a = eY;
        !(0, W.Z)(r, s, a, eZ, eI, l) && ((r = $.tI.PRESET_VIDEO), (s = $.LY.RESOLUTION_720), (a = $.ws.FPS_30)),
            (0, g.Rc)({
                preset: r,
                resolution: s,
                frameRate: a,
                soundshareEnabled: eJ
            });
        let c = (0, q.Z)(ep, eO, w.ZP.getRunningGames()),
            d = !(0, U.isWindows)() || null == c || (null == eO ? void 0 : eO.id.startsWith('camera:')) || null == c ? null : c.pid,
            u = null,
            f = null;
        null == d && (null != eO ? ((u = eO.id), (f = eO.name)) : null != eC && ((u = eC), (f = null == ej ? void 0 : ej.name))),
            (0, g.WH)(i, n, {
                pid: d,
                sourceId: u,
                sourceName: f,
                audioSourceId: eF,
                sound: eJ,
                previewDisabled: eQ
            }),
            null != eR && eM(et.L.AUTO_DISMISS),
            !eb &&
                (async () => {
                    !(await y.Z.hasPermission(en.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) &&
                        x.Z.show({
                            title: el.intl.string(el.t['X+mXen']),
                            body: el.intl.string(el.t.MIJCzs)
                        });
                })();
    }
    function e3() {
        e5(), ed();
    }
    s.useEffect(() => {
        let e = (0, U.isWindows)() ? (0, K.Z)(w.ZP, G.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? Z.Z.getApplication(e.id) : null;
        D.default.track(ee.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: ec
        }),
            b.Z.trackExposure({ location: 'GoLiveModal' });
    }, [ec]);
    let e7 = s.useCallback(
            (e, t, n) => {
                var l;
                let i = (0, H.Z)(e, eZ, eI),
                    [r, s] = null != i ? i : [t, n];
                e !== eH && ((t = r), (n = s));
                let a = null !== (l = null == eg ? void 0 : eg.id) && void 0 !== l ? l : eG;
                o()(null != a, 'Received null target channel ID');
                let c = P.Z.getChannel(a);
                if (!(0, W.Z)(e, t, n, eZ, eI, c)) {
                    let [e, l] = (0, H.Z)($.tI.PRESET_VIDEO, eZ, eI);
                    (t = e), (n = l);
                }
                n !== eY && eX(n), t !== ez && eK(t), r !== t || s !== n ? eV($.tI.PRESET_CUSTOM) : e !== eH && eV(e);
            },
            [eg, eG, eZ, eI, eY, ez, eH]
        ),
        [e4, e9] = s.useState(ey ? '' : void 0),
        e6 = s.useCallback(
            (e) => {
                (0, V.t)(), (0, V.T)(null != e ? e : e4);
            },
            [e4]
        );
    function e8(e) {
        if ((e.preventDefault(), 1 === ek)) return e6();
        if (2 === ek) return eA(3);
        if (null != e4) return eA(1);
        let t = (0, q.Z)(ep, eO, w.ZP.getRunningGames());
        F.ZP.supportsFeature(ee.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)
            ? !(function () {
                  var e;
                  let t = null !== (e = null == ep ? void 0 : ep.pid) && void 0 !== e ? e : null;
                  (0, m.openModalLazy)(async () => {
                      let { default: e } = await n.e('74300').then(n.bind(n, 566852));
                      return (n) =>
                          (0, r.jsx)(e, {
                              ...n,
                              handleStream: e3,
                              pid: t
                          });
                  });
              })()
            : e3();
    }
    let te = s.useCallback(
            (e) => {
                eU(e), null != e && (eb && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? e9(e.id.split(':')[1]) : e9(void 0), eA(3), eL(!0));
            },
            [eb]
        ),
        tt = s.useCallback(
            (e) => {
                e0(e);
                var t = 3;
                eA((t = ea ? 2 : 3));
            },
            [ea]
        ),
        tn = !(1 === ek && eb && ew === z.Uc.Error),
        tl = (function (e) {
            switch (e) {
                case 2:
                    return el.intl.string(el.t['aC4/Zm']);
                case 1:
                    return el.intl.formatToPlainString(el.t.sbbPhY, { buttonName: el.intl.string(el.t.FiBjwc) });
                case 3:
                    return null;
                default:
                    return el.intl.string(el.t['1hKIam']);
            }
        })(ek),
        ti = (0, r.jsx)(m.ModalHeader, {
            className: ei.modalHeader,
            separator: !1,
            children: (0, r.jsxs)(I.Z, {
                direction: I.Z.Direction.VERTICAL,
                align: I.Z.Align.CENTER,
                className: ei.header,
                children: [
                    (0, r.jsx)(m.Heading, {
                        variant: 'heading-xl/semibold',
                        id: eP,
                        className: ei.headerText,
                        children: el.intl.string(el.t.RDkJQ0)
                    }),
                    tn && null != tl
                        ? (0, r.jsx)(m.Text, {
                              className: ei.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: tl
                          })
                        : null
                ]
            })
        }),
        tr = s.useCallback(() => {
            eb && (0, V.t)(), eA(2);
        }, [eb]),
        ts = (function (e, t, n, l) {
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
        })(ek, es, ea, eB),
        ta = 1 !== ek && (3 !== ek || (null == eO && null == ep && null == eC) || null == e2),
        to = s.useCallback(() => {
            null != ts && eA(ts);
        }, [ts]),
        tc = (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(m.Slides, {
                springConfig: {
                    ...c.config.stiff,
                    clamp: !0
                },
                activeSlide: ek,
                width: 480,
                children: [
                    (0, r.jsx)(m.Slide, {
                        id: 0,
                        children: (0, r.jsx)('div', {
                            className: ei.modalSize,
                            children: (0, r.jsx)(X.Z, { onSelectGuild: tt })
                        })
                    }),
                    (0, r.jsx)(m.Slide, {
                        id: 2,
                        children: (0, r.jsx)('div', {
                            className: ei.modalSize,
                            children: eb
                                ? (0, r.jsx)(J.se, { onSourceSelect: te })
                                : (0, r.jsx)(J.oA, {
                                      selectedSource: eO,
                                      onChangeSelectedSource: te
                                  })
                        })
                    }),
                    (0, r.jsx)(m.Slide, {
                        id: 3,
                        children: (0, r.jsx)('div', {
                            className: ei.modalSize,
                            children: (0, r.jsx)(Y.Z, {
                                selectedChannelId: null !== (d = null == eg ? void 0 : eg.id) && void 0 !== d ? d : eG,
                                selectedPreset: eH,
                                selectedResolution: ez,
                                selectedSource: eO,
                                selectedFPS: eY,
                                sound: eJ,
                                previewDisabled: eQ,
                                sourceChanged: eB,
                                selectSource: ea,
                                onChangeSelectedFPS: (e) => e7(eH, ez, e),
                                onChangeSelectedResolution: (e) => e7(eH, e, eY),
                                onChangeSelectedPreset: (e) => e7(e, ez, eY),
                                onChangeSelectedChannelId: eD,
                                onChangeSelectedSource: te,
                                onChangeSource: () => tr(),
                                onChangeAudioDevice: (e) => eW(e),
                                onChangeGuild: () => eA(0),
                                onChangeSound: (e) => eq(e),
                                onChangePreviewDisabled: (e) => e$(e),
                                onClose: ed,
                                selectedGuildId: e1,
                                targetGuildPremiumTier: eI,
                                selectGuild: es
                            })
                        })
                    }),
                    (0, r.jsx)(m.Slide, {
                        id: 1,
                        children: (0, r.jsx)('div', {
                            className: ei.modalSize,
                            children: (0, r.jsx)(J.Hu, {
                                onSourceSelect: e3,
                                onCancel: to,
                                pickerType: e4
                            })
                        })
                    })
                ]
            })
        }),
        td = 1 === ek || (ey && 3 === ek) ? el.intl.string(el.t.FiBjwc) : eb && (3 !== ek || null != e4) ? el.intl.string(el.t.PDTjLC) : el.intl.string(el.t['UE/rPz']),
        tu = (0, r.jsxs)(m.ModalFooter, {
            justify: null == ts ? I.Z.Justify.START : I.Z.Justify.BETWEEN,
            children: [
                (0, r.jsx)(m.Button, {
                    type: 'submit',
                    size: m.Button.Sizes.SMALL,
                    disabled: ta,
                    autoFocus: !0,
                    children: td
                }),
                null == ts
                    ? (0, r.jsx)(m.Button, {
                          className: ei.cancelButton,
                          look: m.Button.Looks.LINK,
                          size: m.Button.Sizes.SMALL,
                          color: m.ButtonColors.PRIMARY,
                          onClick: ed,
                          children: el.intl.string(el.t['ETE/oK'])
                      })
                    : (0, r.jsx)(m.Button, {
                          size: m.Button.Sizes.SMALL,
                          color: m.ButtonColors.PRIMARY,
                          onClick: to,
                          children: el.intl.string(el.t['13/7kZ'])
                      })
            ]
        });
    return (0, r.jsx)(p.Z, {
        page: ee.ZY5.GO_LIVE_MODAL,
        children: (0, r.jsxs)(m.ModalRoot, {
            'aria-labelledby': eP,
            transitionState: eu,
            size: m.ModalSize.DYNAMIC,
            className: ei.modalSize,
            children: [
                (0, r.jsx)(m.ModalCloseButton, {
                    onClick: ed,
                    className: ei.modalCloseButton
                }),
                (0, r.jsx)('div', { className: ei.art }),
                (0, r.jsx)(m.Popout, {
                    position: 'right',
                    align: 'center',
                    shouldShow: null != eR,
                    spacing: 18,
                    renderPopout: () =>
                        (0, r.jsx)(er, {
                            visibleContent: eR,
                            markAsDismissed: eM
                        }),
                    children: () =>
                        (0, r.jsxs)('form', {
                            onSubmit: e8,
                            children: [ti, tc, tu]
                        })
                })
            ]
        })
    });
}
