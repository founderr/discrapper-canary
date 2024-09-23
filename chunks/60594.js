n.r(t),
    n.d(t, {
        default: function () {
            return et;
        }
    }),
    n(47120),
    n(653041);
var l,
    s,
    i = n(735250),
    r = n(470079),
    a = n(512722),
    o = n.n(a),
    c = n(526629),
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
    L = n(944486),
    w = n(594174),
    b = n(449224),
    D = n(626135),
    P = n(63063),
    y = n(358085),
    G = n(998502),
    B = n(451467),
    k = n(537413),
    U = n(299570),
    H = n(960861),
    V = n(989941),
    F = n(399299),
    W = n(351152),
    z = n(567126),
    Y = n(143135),
    K = n(37113),
    Q = n(981631),
    X = n(921944),
    q = n(761274),
    J = n(689938),
    $ = n(410894);
((s = l || (l = {}))[(s.GUILD = 0)] = 'GUILD'), (s[(s.NATIVE_PICKER_SOURCE = 1)] = 'NATIVE_PICKER_SOURCE'), (s[(s.SOURCE = 2)] = 'SOURCE'), (s[(s.CONFIRM = 3)] = 'CONFIRM');
let ee = (e) => {
    let { visibleContent: t, markAsDismissed: n } = e;
    return t === h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, i.jsx)(N.ZP, {
              content: J.Z.Messages.GO_LIVE_MODAL_SYSTEM_PICKER_COACHMARK_CONTENT,
              buttonCTA: J.Z.Messages.GOT_IT,
              onClick: () => {},
              onSecondaryClick: () => {
                  open(P.Z.getArticleURL(Q.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: J.Z.Messages.LEARN_MORE,
              caretPosition: N.DF.LEFT_CENTER,
              markAsDismissed: n
          })
        : null;
};
function et(e) {
    var t, l, s, a, d, N, P;
    let { selectGuild: et = !1, selectSource: en = !0, guildId: el, analyticsLocation: es, onClose: ei, transitionState: er } = e,
        { preset: ea, resolution: eo, fps: ec, soundshareEnabled: ed } = (0, f.cj)([R.Z], () => R.Z.getState()),
        eu = (0, f.e7)([L.Z, A.Z], () => A.Z.getChannel(L.Z.getVoiceChannelId())),
        ef = (0, f.e7)([I.ZP, b.Z], () => ((0, y.isWindows)() ? (0, V.Z)(I.ZP, b.Z) : null)),
        eh = (0, f.e7)([w.default], () => {
            let e = w.default.getCurrentUser();
            return o()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        em = null !== (t = null == eu ? void 0 : eu.getGuildId()) && void 0 !== t ? t : el,
        ex = (0, f.e7)([O.Z], () => {
            var e;
            return null != em ? (null === (e = O.Z.getGuild(em)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [e_, eg] = null !== (l = (0, k.Z)(ea, eh, ex)) && void 0 !== l ? l : [K.LY.RESOLUTION_720, K.ws.FPS_30],
        ep = (0, f.e7)([H.ZP], () => H.ZP.supported()),
        { lastPickerAction: eC } = (0, f.e7)([H.ZP], () => H.ZP.getPickerState()),
        eS = Z.Z.useExperiment(
            { location: 'GoLiveModal' },
            {
                disable: !ep,
                autoTrackExposure: !0
            }
        ).enableSystemPicker;
    (0, H.UB)();
    let eE = [];
    er === m.ModalTransitionState.ENTERED && eS && (0, y.isMac)() && u().satisfies(null === C.Z || void 0 === C.Z ? void 0 : C.Z.os.release, '>=24.0.0') && eE.push(h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [ej, ev] = (0, v.US)(eE, void 0, !0);
    ea !== K.tI.PRESET_CUSTOM && ((eo = e_), (ec = eg)), !(0, B.Z)(ea, eo, ec, eh, ex) && ((eo = e_), (ec = eg));
    let eI = (0, j.Dt)();
    let [eZ, eT] = r.useState(((N = et), (P = en), N ? 0 : P ? 2 : 3)),
        [eN, eM] = r.useState(!1),
        [eR, eA] = r.useState(null),
        [eO, eL] = r.useState(null),
        [ew, eb] = r.useState(null),
        [eD, eP] = r.useState(ea),
        [ey, eG] = r.useState(eo),
        [eB, ek] = r.useState(ec),
        [eU, eH] = r.useState(ed),
        [eV, eF] = r.useState(null !== (s = M.I0.getSetting()) && void 0 !== s && s),
        [eW, ez] = r.useState(null != el ? el : null),
        eY = null !== (a = null == eu ? void 0 : eu.id) && void 0 !== a ? a : eR;
    r.useEffect(() => {
        let e = (0, y.isWindows)() ? (0, V.Z)(I.ZP, b.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? S.Z.getApplication(e.id) : null;
        D.default.track(Q.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: es
        });
    }, [es]);
    function eK() {
        !(function () {
            var e, t;
            o()(null != ef || null != eO, 'got nothing to stream');
            let n = null !== (e = null == eu ? void 0 : eu.id) && void 0 !== e ? e : eR;
            o()(null != n, 'Received null target channel ID');
            let l = A.Z.getChannel(n),
                s = null !== (t = null == l ? void 0 : l.getGuildId()) && void 0 !== t ? t : el;
            null == eu && _.default.selectVoiceChannel(n);
            let i = eD,
                r = ey,
                a = eB;
            !(0, B.Z)(i, r, a, eh, ex) && ((i = K.tI.PRESET_VIDEO), (r = K.LY.RESOLUTION_720), (a = K.ws.FPS_30)),
                (0, g.Rc)({
                    preset: i,
                    resolution: r,
                    frameRate: a,
                    soundshareEnabled: eU
                });
            let c = (0, Y.Z)(ef, eO, I.ZP.getRunningGames()),
                d = !(0, y.isWindows)() || null == c || (null == eO ? void 0 : eO.id.startsWith('camera:')) || null == c ? null : c.pid;
            (0, g.WH)(s, n, {
                pid: d,
                sourceId: null == d && null != eO ? eO.id : null,
                sourceName: null == d && null != eO ? eO.name : null,
                audioSourceId: ew,
                sound: eU,
                previewDisabled: eV
            }),
                null != ej && ev(X.L.AUTO_DISMISS),
                !eS &&
                    (async () => {
                        !(await T.Z.hasPermission(q.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) &&
                            x.Z.show({
                                title: J.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                                body: J.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
                            });
                    })();
        })(),
            ei();
    }
    let eQ = r.useCallback(
            (e, t, n) => {
                let l = (0, k.Z)(e, eh, ex),
                    [s, i] = null != l ? l : [t, n];
                if ((e !== eD && ((t = s), (n = i)), !(0, B.Z)(e, t, n, eh, ex))) {
                    let [e, l] = (0, k.Z)(K.tI.PRESET_VIDEO, eh, ex);
                    (t = e), (n = l);
                }
                n !== eB && ek(n), t !== ey && eG(t), s !== t || i !== n ? eP(K.tI.PRESET_CUSTOM) : e !== eD && eP(e);
            },
            [eh, ex, eB, ey, eD]
        ),
        [eX, eq] = r.useState(void 0),
        eJ = r.useCallback(
            (e) => {
                (0, U.t)(), (0, U.T)(null != e ? e : eX);
            },
            [eX]
        );
    function e$(e) {
        if ((e.preventDefault(), 1 === eZ)) return eJ();
        if (2 === eZ) return eT(3);
        if (null != eX) return eT(1);
        let t = (0, Y.Z)(ef, eO, I.ZP.getRunningGames());
        G.ZP.supportsFeature(Q.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)
            ? !(function () {
                  var e;
                  let t = null !== (e = null == ef ? void 0 : ef.pid) && void 0 !== e ? e : null;
                  (0, m.openModalLazy)(async () => {
                      let { default: e } = await n.e('74300').then(n.bind(n, 566852));
                      return (n) =>
                          (0, i.jsx)(e, {
                              ...n,
                              handleStream: eK,
                              pid: t
                          });
                  });
              })()
            : eK();
    }
    let e1 = r.useCallback(
            (e) => {
                eL(e), null != e && (eS && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? eq(e.id.split(':')[1]) : eq(void 0), eT(3), eM(!0));
            },
            [eS]
        ),
        e0 = r.useCallback(
            (e) => {
                ez(e);
                var t = 3;
                eT((t = en ? 2 : 3));
            },
            [en]
        ),
        e2 = !(1 === eZ && eS && eC === H.Uc.Error),
        e5 = (function (e) {
            switch (e) {
                case 2:
                    return J.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
                case 1:
                    return J.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_NATIVE_SOURCE.format({ buttonName: J.Z.Messages.GO_LIVE_MODAL_NATIVE_SELECT_CTA });
                case 3:
                    return null;
                default:
                    return J.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC;
            }
        })(eZ),
        e3 = (0, i.jsx)(m.ModalHeader, {
            className: $.modalHeader,
            separator: !1,
            children: (0, i.jsxs)(E.Z, {
                direction: E.Z.Direction.VERTICAL,
                align: E.Z.Align.CENTER,
                className: $.header,
                children: [
                    (0, i.jsx)(m.Heading, {
                        variant: 'heading-xl/semibold',
                        id: eI,
                        className: $.headerText,
                        children: J.Z.Messages.GO_LIVE_MODAL_TITLE
                    }),
                    e2 && null != e5
                        ? (0, i.jsx)(m.Text, {
                              className: $.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: e5
                          })
                        : null
                ]
            })
        }),
        e7 = r.useCallback(() => {
            eS && (0, U.t)(), eT(2);
        }, [eS]),
        e4 = (function (e, t, n, l) {
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
        })(eZ, et, en, eN),
        e9 = 1 !== eZ && (3 !== eZ || (null == eO && null == ef) || null == eY),
        e8 = r.useCallback(() => {
            null != e4 && eT(e4);
        }, [e4]),
        e6 = (0, i.jsxs)(m.Slides, {
            springConfig: {
                ...c.config.stiff,
                clamp: !0
            },
            activeSlide: eZ,
            width: 480,
            children: [
                (0, i.jsx)(m.Slide, {
                    id: 0,
                    children: (0, i.jsx)('div', {
                        className: $.modalSize,
                        children: (0, i.jsx)(W.Z, { onSelectGuild: e0 })
                    })
                }),
                (0, i.jsx)(m.Slide, {
                    id: 2,
                    children: (0, i.jsx)('div', {
                        className: $.modalSize,
                        children: eS
                            ? (0, i.jsx)(z.se, { onSourceSelect: e1 })
                            : (0, i.jsx)(z.oA, {
                                  selectedSource: eO,
                                  onChangeSelectedSource: e1
                              })
                    })
                }),
                (0, i.jsx)(m.Slide, {
                    id: 3,
                    children: (0, i.jsx)('div', {
                        className: $.modalSize,
                        children: (0, i.jsx)(F.Z, {
                            selectedChannelId: null !== (d = null == eu ? void 0 : eu.id) && void 0 !== d ? d : eR,
                            selectedPreset: eD,
                            selectedResolution: ey,
                            selectedSource: eO,
                            selectedFPS: eB,
                            sound: eU,
                            previewDisabled: eV,
                            sourceChanged: eN,
                            selectSource: en,
                            onChangeSelectedFPS: (e) => eQ(eD, ey, e),
                            onChangeSelectedResolution: (e) => eQ(eD, e, eB),
                            onChangeSelectedPreset: (e) => eQ(e, ey, eB),
                            onChangeSelectedChannelId: eA,
                            onChangeSelectedSource: e1,
                            onChangeSource: () => e7(),
                            onChangeAudioDevice: (e) => eb(e),
                            onChangeGuild: () => eT(0),
                            onChangeSound: (e) => eH(e),
                            onChangePreviewDisabled: (e) => eF(e),
                            onClose: ei,
                            selectedGuildId: eW,
                            targetGuildPremiumTier: ex,
                            selectGuild: et
                        })
                    })
                }),
                (0, i.jsx)(m.Slide, {
                    id: 1,
                    children: (0, i.jsx)('div', {
                        className: $.modalSize,
                        children: (0, i.jsx)(z.Hu, {
                            onSourceSelect: eK,
                            onCancel: e8
                        })
                    })
                })
            ]
        }),
        te = 1 === eZ ? J.Z.Messages.GO_LIVE_MODAL_NATIVE_SELECT_CTA : eS && (3 !== eZ || null != eX) ? J.Z.Messages.NEXT : J.Z.Messages.GO_LIVE_MODAL_CTA,
        tt = (0, i.jsxs)(m.ModalFooter, {
            justify: null == e4 ? E.Z.Justify.START : E.Z.Justify.BETWEEN,
            children: [
                (0, i.jsx)(m.Button, {
                    type: 'submit',
                    size: m.Button.Sizes.SMALL,
                    disabled: e9,
                    autoFocus: !0,
                    children: te
                }),
                null == e4
                    ? (0, i.jsx)(m.Button, {
                          className: $.cancelButton,
                          look: m.Button.Looks.LINK,
                          size: m.Button.Sizes.SMALL,
                          color: m.ButtonColors.PRIMARY,
                          onClick: ei,
                          children: J.Z.Messages.CANCEL
                      })
                    : (0, i.jsx)(m.Button, {
                          size: m.Button.Sizes.SMALL,
                          color: m.ButtonColors.PRIMARY,
                          onClick: e8,
                          children: J.Z.Messages.BACK
                      })
            ]
        });
    return (0, i.jsx)(p.Z, {
        page: Q.ZY5.GO_LIVE_MODAL,
        children: (0, i.jsxs)(m.ModalRoot, {
            'aria-labelledby': eI,
            transitionState: er,
            size: m.ModalSize.DYNAMIC,
            className: $.modalSize,
            children: [
                (0, i.jsx)(m.ModalCloseButton, {
                    onClick: ei,
                    className: $.modalCloseButton
                }),
                (0, i.jsx)('div', { className: $.art }),
                (0, i.jsx)(m.Popout, {
                    position: 'right',
                    align: 'center',
                    shouldShow: null != ej,
                    spacing: 18,
                    renderPopout: () =>
                        (0, i.jsx)(ee, {
                            visibleContent: ej,
                            markAsDismissed: ev
                        }),
                    children: () =>
                        (0, i.jsxs)('form', {
                            onSubmit: e$,
                            children: [e3, e6, tt]
                        })
                })
            ]
        })
    });
}
