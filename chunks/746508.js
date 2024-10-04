n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(613828),
    d = n(442837),
    u = n(592471),
    _ = n(749280),
    E = n(864094),
    h = n(75735),
    m = n(382600),
    I = n(481060),
    p = n(846027),
    g = n(239091),
    T = n(925549),
    f = n(284056),
    S = n(730749),
    C = n(2052),
    N = n(40851),
    A = n(317381),
    v = n(596040),
    Z = n(588580),
    L = n(374065),
    R = n(451576),
    O = n(119315),
    x = n(403404),
    b = n(100527),
    M = n(906732),
    P = n(424602),
    D = n(793865),
    y = n(933557),
    j = n(600164),
    U = n(258609),
    G = n(446226),
    w = n(935261),
    k = n(74299),
    B = n(803647),
    V = n(142497),
    H = n(810788),
    F = n(160404),
    Y = n(703656),
    z = n(917405),
    W = n(641015),
    K = n(848543),
    q = n(565799),
    Q = n(501655),
    X = n(71275),
    J = n(600518),
    $ = n(485287),
    ee = n(754277),
    et = n(590415),
    en = n(695346),
    ei = n(923973),
    ea = n(829750),
    es = n(189771),
    er = n(544384),
    el = n(560688),
    eo = n(127608),
    ec = n(76021),
    ed = n(173507),
    eu = n(25827),
    e_ = n(199902),
    eE = n(314897),
    eh = n(592125),
    em = n(430824),
    eI = n(819640),
    ep = n(131951),
    eg = n(496675),
    eT = n(19780),
    ef = n(699516),
    eS = n(594174),
    eC = n(979651),
    eN = n(938475),
    eA = n(626135),
    ev = n(63063),
    eZ = n(51144),
    eL = n(870569),
    eR = n(345243),
    eO = n(594117),
    ex = n(226323),
    eb = n(981631),
    eM = n(190378),
    eP = n(689938),
    eD = n(663031),
    ey = n(113207);
function ej(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function eU(e) {
    let t = e.currentTarget;
    eA.default.track(eb.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eb.jXE.NOISE_CANCELLATION_POPOUT }
    });
}
function eG() {
    let e = a.useRef(null);
    (0, I.useFocusLock)(e),
        a.useEffect(() => {
            eA.default.track(eb.rMx.OPEN_POPOUT, { type: eb.jXE.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, d.e7)([ep.Z], () => ep.Z.getNoiseCancellation());
    return (0, i.jsxs)('div', {
        ref: e,
        className: eD.noiseCancellationPopout,
        children: [
            (0, i.jsx)(I.FormSwitch, {
                hideBorder: !0,
                className: ey.marginBottom4,
                value: t,
                onChange: () => p.Z.setNoiseCancellation(!t, { section: eb.jXE.NOISE_CANCELLATION_POPOUT }),
                note: eP.Z.Messages.NOISE_CANCELLATION_POPOUT_DESCRIPTION,
                children: eP.Z.Messages.NOISE_CANCELLATION_POPOUT_HEADER
            }),
            (0, i.jsx)(f.Z, {
                title: eP.Z.Messages.NOISE_CANCELLATION_POPOUT_MIC_TEST_TITLE,
                notchBackground: f._.BLACK,
                buttonTest: eP.Z.Messages.NOISE_CANCELLATION_POPOUT_TEST,
                buttonStop: eP.Z.Messages.NOISE_CANCELLATION_POPOUT_STOP,
                buttonClassName: eD.micTestButton,
                buttonColor: I.Button.Colors.PRIMARY,
                location: { section: eb.jXE.NOISE_CANCELLATION_POPOUT }
            }),
            (0, i.jsx)(I.FormTitle, {
                tag: I.FormTitleTags.H5,
                className: r()(ey.marginBottom8, ey.marginTop20),
                children: eP.Z.Messages.NOISE_CANCELLATION_POPOUT_FOOTER
            }),
            (0, i.jsxs)(j.Z, {
                justify: j.Z.Justify.BETWEEN,
                className: eD.__invalid_footer,
                children: [
                    (0, i.jsx)(I.Anchor, {
                        href: eb.EYA.KRISP,
                        onClick: (e) => eU(e),
                        children: (0, i.jsx)('div', { className: eD.krispLogo })
                    }),
                    (0, i.jsx)(I.Anchor, {
                        href: ev.Z.getArticleURL(eb.BhN.NOISE_SUPPRESSION),
                        className: eD.krispLink,
                        onClick: (e) => eU(e),
                        children: eP.Z.Messages.LEARN_MORE
                    })
                ]
            })
        ]
    });
}
function ew() {
    let e = (0, d.e7)([ee.Z], () => ee.Z.isMuted()),
        t = e ? eP.Z.Messages.STAGE_MUSIC_UNMUTE : eP.Z.Messages.STAGE_MUSIC_MUTE;
    return (0, i.jsx)(eL.Z, {
        'aria-label': t,
        tooltipText: t,
        icon: e ? I.MusicSlashIcon : I.MusicIcon,
        onClick: () => (0, J.v)(!e)
    });
}
function ek(e) {
    let { channel: t, enableActivities: n, disabled: s } = e,
        l = (0, ei.Z)(),
        o = (0, es.Z)(t),
        c = (0, d.cj)([A.ZP], () => null != A.ZP.getSelfEmbeddedActivityForChannel(t.id)),
        u = (0, W.Z)(t),
        { reachedLimit: _, limit: E } = (0, ea.Z)(t),
        m = a.useCallback(() => {
            (0, el.Z)();
        }, []),
        g = (0, N.bp)(),
        T = a.useCallback(
            (e) => {
                if (ep.Z.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    p.Z.setVideoEnabled(e), e && (0, Y.uL)(eb.Z5c.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : eb.ME, t.id));
                };
                e ? (0, ed.Z)(n, g) : n();
            },
            [t, g]
        ),
        f = c || n || u,
        { Component: S, play: C, events: v } = (0, h.o)(l.enabled ? 'disable' : 'enable');
    return (
        a.useEffect(() => () => C(), [l.enabled, C]),
        (0, i.jsx)(eu.Z, {
            onChange: T,
            onCameraUnavailable: m,
            hasPermission: o,
            channelLimit: E,
            channelLimitReached: _,
            ...l,
            enabled: !s && l.enabled,
            children: (e) => {
                let { unavailable: t, active: n, label: a, iconComponent: s, ...l } = e,
                    o = (0, i.jsx)(S, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        className: r()(eD.buttonIcon, { [eD.withText]: !f }),
                        color: 'currentColor'
                    });
                return (0, i.jsx)(I.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(D.Z, { onClose: t });
                    },
                    position: 'top',
                    align: 'center',
                    animation: I.Popout.Animation.FADE,
                    children: (e, s) => {
                        let { onClick: c, ...d } = e,
                            { isShown: u } = s;
                        return (0, i.jsx)(I.Tooltip, {
                            text: a,
                            children: (e) =>
                                (0, i.jsx)(I.Button, {
                                    ...l,
                                    ...e,
                                    ...d,
                                    onClick: (t) => {
                                        var n;
                                        l.onClick(t), null === (n = e.onClick) || void 0 === n || n.call(e), u && c(t);
                                    },
                                    onMouseEnter: () => {
                                        var t, n;
                                        null === (t = e.onMouseEnter) || void 0 === t || t.call(e), null === (n = d.onMouseEnter) || void 0 === n || n.call(d), v.onMouseEnter();
                                    },
                                    onMouseLeave: () => {
                                        var t;
                                        null === (t = e.onMouseLeave) || void 0 === t || t.call(e), v.onMouseLeave();
                                    },
                                    onContextMenu: (t) => {
                                        var n;
                                        c(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e);
                                    },
                                    size: I.Button.Sizes.SMALL,
                                    className: r()(eD.button, eD.buttonColor, {
                                        [eD.buttonActive]: n,
                                        [eD.fauxDisabled]: t,
                                        [eD.disabled]: l.disabled
                                    }),
                                    innerClassName: eD.buttonContents,
                                    wrapperClassName: eD.button,
                                    fullWidth: !0,
                                    children: f
                                        ? o
                                        : (0, i.jsxs)(j.Z, {
                                              align: j.Z.Align.CENTER,
                                              children: [o, eP.Z.Messages.VIDEO]
                                          })
                                })
                        });
                    }
                });
            }
        })
    );
}
function eB(e) {
    let t,
        n,
        { channel: a, enableActivities: s } = e,
        l = (0, N.bp)(),
        { analyticsLocations: o } = (0, M.ZP)(),
        c = l === eb.IlC.POPOUT,
        E = (0, L.KF)(a.id),
        h = (0, L.g5)(E),
        [m] = (0, d.e7)([A.ZP], () => (null != a.id && '' !== a.id ? A.ZP.getEmbeddedActivitiesForChannel(a.id) : A.i6)),
        { userInActivity: p } = (0, d.cj)([A.ZP], () => ({ userInActivity: null != A.ZP.getSelfEmbeddedActivityForChannel(a.id) })),
        g = (0, C.O)(),
        T = (0, Z.a)(),
        f = E !== L.jy.CAN_LAUNCH,
        { enabled: S } = P.nS.useExperiment({ location: 'RTCConnection' }, { autoTrackExposure: !0 }),
        { Component: v, events: R, play: b } = (0, u.s)(),
        { Component: D, events: y, play: j } = (0, _.w)();
    return (S ? ((t = y), (n = j)) : ((t = R), (n = b)), s)
        ? (0, i.jsx)(I.Tooltip, {
              text: h,
              children: (e) =>
                  (0, i.jsxs)(I.Button, {
                      ...e,
                      fullWidth: !0,
                      size: I.Button.Sizes.SMALL,
                      ...t,
                      onClick: () => {
                          var t;
                          n(),
                              (0, x.Z)({
                                  channel: a,
                                  guildId: a.guild_id,
                                  locationObject: g.location,
                                  openInPopout: c,
                                  analyticsLocations: o,
                                  opensAppLauncherModal: !0
                              }),
                              null === (t = e.onClick) || void 0 === t || t.call(e);
                      },
                      onMouseEnter: () => {
                          var n;
                          t.onMouseEnter(), null == e || null === (n = e.onMouseEnter) || void 0 === n || n.call(e);
                      },
                      onMouseLeave: () => {
                          var n;
                          t.onMouseLeave(), null == e || null === (n = e.onMouseLeave) || void 0 === n || n.call(e);
                      },
                      disabled: f,
                      className: r()(eD.button, eD.buttonColor, {
                          [eD.buttonActive]: p || null != m,
                          [eD.disabled]: f
                      }),
                      innerClassName: eD.buttonContents,
                      wrapperClassName: eD.button,
                      children: [
                          T
                              ? (0, i.jsx)(O.r, {
                                    top: -1,
                                    right: -1
                                })
                              : null,
                          S
                              ? (0, i.jsx)(D, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: eD.buttonIcon
                                })
                              : (0, i.jsx)(v, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: eD.buttonIcon
                                })
                      ]
                  })
          })
        : null;
}
function eV(e) {
    let t,
        { channel: n, canGoLive: s, enableActivities: l, disabled: o } = e,
        c = (0, d.e7)([eS.default], () => eS.default.getCurrentUser()),
        u = (0, d.Wu)([e_.Z], () => e_.Z.getAllActiveStreams()),
        _ = (0, es.Z)(n),
        h = n.getGuildId(),
        m = (0, d.cj)([A.ZP], () => null != A.ZP.getSelfEmbeddedActivityForChannel(n.id)),
        p = (0, W.Z)(n),
        g = a.useCallback(() => {
            (0, ec.Z)(h, n.id, eb.jXE.ACTIVITY_PANEL);
        }, [h, n.id]),
        T = u.find((e) => e.ownerId === (null == c ? void 0 : c.id)),
        f = (0, er.E)(n, c, u);
    t = null == T ? (s ? g : eo.Z) : () => (0, B.Z)(T);
    let S = null != T || f.length > 0,
        C = _ ? eP.Z.Messages.SHARE_YOUR_SCREEN : eP.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE,
        N = m || l || p,
        v = null != T,
        { Component: Z, events: L, play: R } = (0, E.P)(v ? 'disable' : 'enable');
    a.useEffect(() => () => R(), [R, v]);
    let O = (0, i.jsx)(Z, {
        color: 'currentColor',
        className: r()(eD.buttonIcon, { [eD.withText]: !N })
    });
    return (0, i.jsx)(I.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(er.Z, {
                channel: n,
                currentUser: c,
                activeStreams: u,
                onClose: t,
                handleGoLive: s ? g : eo.Z
            });
        },
        position: 'top',
        align: 'center',
        animation: I.Popout.Animation.FADE,
        children: (e) => {
            let { onClick: n, onMouseEnter: a, ...s } = e;
            return (0, i.jsx)(I.Tooltip, {
                text: C,
                children: (e) =>
                    (0, i.jsx)(I.Button, {
                        ...e,
                        size: I.Button.Sizes.SMALL,
                        onClick: (i) => {
                            var a;
                            S ? n(i) : t(), null === (a = e.onClick) || void 0 === a || a.call(e);
                        },
                        disabled: !_ || o,
                        className: r()(eD.button, eD.buttonColor, {
                            [eD.buttonActive]: null != T,
                            [eD.disabled]: !_ || o
                        }),
                        ...(S ? s : null),
                        onMouseEnter: () => {
                            var t;
                            null == a || a(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e), L.onMouseEnter();
                        },
                        onMouseLeave: () => {
                            var t;
                            null === (t = e.onMouseLeave) || void 0 === t || t.call(e), L.onMouseLeave();
                        },
                        innerClassName: eD.buttonContents,
                        wrapperClassName: eD.button,
                        children: N
                            ? O
                            : (0, i.jsxs)(j.Z, {
                                  align: j.Z.Align.CENTER,
                                  children: [O, eP.Z.Messages.GO_LIVE_SHARE_SCREEN]
                              })
                    })
            });
        }
    });
}
class eH extends a.PureComponent {
    renderConnectionStatus() {
        let e;
        let { channel: t, guild: n, rtcConnectionQuality: a, rtcConnectionState: s, rtcConnectionLastPing: r, hasVideo: l } = this.props;
        if (null == t) return null;
        let o = (0, y.F6)(t, eS.default, ef.Z);
        return (
            null != n ? ((e = eb.Z5c.CHANNEL(n.id, t.id)), (o = ''.concat(o, ' / ').concat(n.name))) : (e = eb.Z5c.CHANNEL(eb.ME, t.id)),
            (0, i.jsx)(z.Z, {
                channelId: t.id,
                quality: a,
                state: s,
                lastPing: r,
                hasVideo: l,
                children: (0, i.jsx)(I.FocusRing, {
                    children: (0, i.jsx)(c.rU, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, i.jsx)(eR.Z, {
                            className: eD.channel,
                            children: o
                        })
                    })
                })
            })
        );
    }
    renderNoiseCancellation() {
        let { noiseCancellationActive: e, noiseCancellationError: t, hasLayers: n, remoteVoiceState: a, channel: s, voiceStates: r } = this.props;
        return null != a
            ? null
            : (null == s ? void 0 : s.isGuildStageVoice()) && !(null != r.find((e) => e.user.id === eE.default.getId() && (0, et.gf)(e.voiceState) === et.xO.ON_STAGE)) && (0, $.U5)(s.id)
              ? (0, i.jsx)(ew, {})
              : !n && t
                ? (0, i.jsx)(I.Tooltip, {
                      text: eP.Z.Messages.NOISE_CANCELLATION_CPU_OVERUSE,
                      tooltipClassName: eD.noiseCancellationTooltip,
                      forceOpen: !0,
                      children: (e) => {
                          let { 'aria-label': t } = e;
                          return (0, i.jsx)(eL.Z, {
                              'aria-label': t,
                              tooltipText: null,
                              disabled: !0,
                              icon: I.WaveformSlashIcon
                          });
                      }
                  })
                : (0, i.jsx)(
                      I.Popout,
                      {
                          position: 'top',
                          align: 'center',
                          renderPopout: () => (0, i.jsx)(eG, {}),
                          children: (t, n) => {
                              let { isShown: a } = n;
                              return (0, i.jsx)(eF, {
                                  popoutProps: t,
                                  isShown: a,
                                  noiseCancellationActive: e
                              });
                          }
                      },
                      'krisp-popout'
                  );
    }
    renderVoiceStates() {
        let { channel: e, voiceStates: t, showVoiceStates: n } = this.props;
        return null != e && n && 0 !== t.length
            ? (0, i.jsx)(ex.Z, {
                  voiceStates: t,
                  channel: e,
                  className: eD.voiceUsers
              })
            : null;
    }
    renderChannelButtons() {
        let { channel: e, canGoLive: t, remoteVoiceState: n, enableActivities: a, voiceStates: s, selfStream: l, isPrivateChannelWithEnabledActivities: o } = this.props;
        if (null == e || null != n) return null;
        let c = eE.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, X.tu)(e.guild_id) || !t) return null;
            let n = s.find((e) => e.user.id === c);
            if (null == n || n.voiceState.suppress) return null;
        }
        let d = (e.isGuildVoice() || o) && a,
            { reachedLimit: u } = (0, ea.t)(e),
            _ = (0, X.xJ)(e.id);
        return (0, i.jsxs)('div', {
            className: eD.actionButtons,
            children: [
                (0, i.jsx)(ek, {
                    channel: e,
                    enableActivities: d,
                    disabled: !_ && u
                }),
                (0, i.jsx)(eV, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: d,
                    disabled: e.isGuildStageVoice() && ((_ && null == l) || (!_ && u))
                }),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        d
                            ? (0, i.jsx)(eB, {
                                  channel: e,
                                  enableActivities: a
                              })
                            : null,
                        (0, W.Z)(e)
                            ? (0, i.jsx)(K.Z, {
                                  className: r()(eD.button, eD.buttonColor),
                                  innerClassName: eD.buttonContents,
                                  iconClassName: eD.buttonIcon,
                                  channel: e
                              })
                            : null
                    ]
                })
            ]
        });
    }
    render() {
        let { channel: e, noiseCancellationSupported: t, shouldShowVoicePanelIntroduction: n } = this.props;
        return null == e
            ? null
            : (0, i.jsx)(I.Popout, {
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: 'top',
                  align: 'center',
                  animation: I.Popout.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, i.jsxs)('div', {
                          className: eD.container,
                          children: [
                              (0, i.jsxs)(j.Z, {
                                  className: eD.connection,
                                  align: j.Z.Align.CENTER,
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: eD.inner,
                                          children: this.renderConnectionStatus()
                                      }),
                                      (0, i.jsxs)(j.Z, {
                                          grow: 0,
                                          shrink: 0,
                                          children: [t ? this.renderNoiseCancellation() : null, (0, i.jsx)(eO.Z, { channel: e })]
                                      })
                                  ]
                              }),
                              this.renderVoiceStates(),
                              this.renderChannelButtons()
                          ]
                      })
              });
    }
    constructor(...e) {
        super(...e),
            ej(this, 'canScreenshare', () => {
                let { channel: e, canGoLive: t } = this.props;
                return t && null != e && null != e.getGuildId();
            }),
            ej(this, 'handleNoiseCancellationClicked', () => {
                let { noiseCancellationActive: e } = this.props;
                p.Z.setNoiseCancellation(!e, { section: eb.jXE.NOISE_CANCELLATION_POPOUT });
            }),
            ej(this, 'handleGoLive', () => {
                let { guild: e, channel: t } = this.props,
                    n = null != t ? t.getGuildId() : null != e ? e.id : null;
                if (null != n) (0, ec.Z)(n, t.id, eb.Sbl.VOICE_PANEL);
            }),
            ej(this, 'handleChannelLinkClick', (e) => {
                var t;
                let { guild: n, channel: i } = this.props;
                o()(null != i, 'Channel is null during navigation click'), e.stopPropagation(), T.Z.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eb.ME, i.id);
            }),
            ej(this, 'handleChannelLinkContextMenu', (e) => {
                let { channel: t, analyticsLocations: a } = this.props;
                (0, g.jW)(e, async () => {
                    let { default: e } = await n.e('56944').then(n.bind(n, 600830));
                    return (n) =>
                        (0, i.jsx)(M.Gt, {
                            value: a,
                            children: (0, i.jsx)(e, {
                                ...n,
                                channel: t
                            })
                        });
                });
            }),
            ej(this, 'handleCloseVoicePanelIntroduction', () => {
                V.Kw(eM.v.VOICE_PANEL_INTRODUCTION);
            }),
            ej(this, 'renderVoicePanelIntroduction', () =>
                (0, i.jsxs)('div', {
                    className: r()(eD.voicePanelIntroductionWrapper, 'theme-light'),
                    children: [
                        (0, i.jsx)(I.Heading, {
                            className: eD.voicePanelIntroductionHeader,
                            variant: 'heading-md/semibold',
                            children: eP.Z.Messages.VOICE_PANEL_INTRODUCTION_HEADER
                        }),
                        (0, i.jsx)(I.Text, {
                            className: eD.voicePanelIntroductionText,
                            variant: 'text-sm/normal',
                            children: eP.Z.Messages.VOICE_PANEL_INTRODUCTION_TEXT
                        }),
                        (0, i.jsx)(I.Button, {
                            className: eD.voicePanelIntroductionButton,
                            color: I.Button.Colors.BRAND,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            children: eP.Z.Messages.VOICE_PANEL_INTRODUCTION_CLOSE
                        })
                    ]
                })
            );
    }
}
function eF(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: s } = e,
        { play: r, Component: l, events: o } = (0, m.P)(s ? 'disable' : 'enable');
    return (
        a.useEffect(() => () => r(), [s, r]),
        (0, i.jsx)(eL.Z, {
            ...t,
            onMouseEnter: () => {
                var e;
                null === (e = t.onMouseEnter) || void 0 === e || e.call(t), o.onMouseEnter();
            },
            onMouseLeave: () => {
                o.onMouseLeave();
            },
            tooltipClassName: eD.noiseCancellationTooltip,
            tooltipText: n ? null : eP.Z.Messages.NOISE_CANCELLATION_TOOLTIP,
            icon: l
        })
    );
}
t.Z = (0, S.Z)(function (e) {
    let t = (0, G.Z)(),
        n = (0, d.e7)([U.Z], () => U.Z.getAwaitingRemoteSessionInfo()),
        s = (0, d.e7)([eS.default], () => eS.default.getCurrentUser()),
        { channelId: r, ...l } = (0, d.cj)([eT.Z], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: eb.IE4.FINE,
                      rtcConnectionState: eb.hes.RTC_CONNECTED,
                      rtcConnectionLastPing: 0
                  }
                : {
                      channelId: eT.Z.getChannelId(),
                      rtcConnectionQuality: eT.Z.getQuality(),
                      rtcConnectionState: eT.Z.getState(),
                      rtcConnectionLastPing: eT.Z.getLastPing()
                  }
        ),
        o = (0, d.e7)([eh.Z], () => eh.Z.getChannel(r), [r]),
        c = null == o ? void 0 : o.getGuildId(),
        u = (0, d.e7)([em.Z], () => em.Z.getGuild(c), [c]),
        _ = (0, d.cj)([ep.Z], () => ({
            noiseCancellationSupported: ep.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: ep.Z.getNoiseCancellation(),
            noiseCancellationError: ep.Z.isNoiseCancellationError(),
            canGoLive: (0, k.Z)(ep.Z)
        })),
        E = (0, d.e7)([ep.Z, H.Z], () => H.Z.hasHotspot(eM.v.VOICE_PANEL_INTRODUCTION) && (0, eZ.EO)(s) && !ep.Z.isInteractionRequired() && !(null == o ? void 0 : o.isGuildStageVoice())),
        h = (0, d.e7)([eC.Z], () => null != r && eC.Z.hasVideo(r), [r]),
        m = (0, d.e7)([e_.Z], () => e_.Z.getCurrentUserActiveStream()),
        p = (0, d.e7)([eI.Z], () => eI.Z.hasLayers()),
        g = (0, d.e7)([F.Z], () => F.Z.isViewingRoles(c)),
        T = (0, d.e7)([eg.Z], () => g && !eg.Z.can(eb.Plq.VIEW_CHANNEL, o), [g, o]),
        f = en.Fg.useSetting(),
        [S, C, N] = (0, d.Wu)([eN.ZP, q.Z], () => ((null == o ? void 0 : o.isGuildStageVoice()) ? [q.Z.getMutableParticipants(o.id, Q.pV.SPEAKER), q.Z.getParticipantsVersion(o.id), null] : [null, null, null != o ? eN.ZP.getVoiceStatesForChannel(o) : null]), [o]),
        A = a.useMemo(() => {
            var e, t;
            return null !==
                (t =
                    null !==
                        (e =
                            null == S
                                ? void 0
                                : S.map((e) => {
                                      let { user: t, userNick: n, voiceState: i } = e;
                                      return {
                                          user: t,
                                          nick: n,
                                          voiceState: i
                                      };
                                  })) && void 0 !== e
                        ? e
                        : N) && void 0 !== t
                ? t
                : [];
        }, [S, C, N]),
        [Z, L] = a.useState(!1);
    a.useEffect(() => {
        (g || T) && L(!1);
    }, [g, T, L]);
    let { analyticsLocations: O } = (0, M.ZP)(b.Z.RTC_PANEL),
        x = (0, v.Z)(null != c ? c : eb.lds, null == o ? void 0 : o.id),
        P = (0, R.Z)(null == o ? void 0 : o.id);
    return (0, i.jsx)(M.Gt, {
        value: O,
        children: (0, i.jsxs)('div', {
            className: eD.wrapper,
            children: [
                null != t || null != n
                    ? (0, i.jsx)(w.Z, {
                          voiceState: t,
                          awaitingRemoteSessionInfo: n
                      })
                    : null,
                (0, i.jsx)(eH, {
                    ...e,
                    ..._,
                    ...l,
                    enableActivities: x,
                    remoteVoiceState: t,
                    guild: u,
                    channel: o,
                    hasVideo: h,
                    selfStream: m,
                    hasLayers: p,
                    voiceStates: A,
                    showVoiceStates: f,
                    shouldShowVoicePanelIntroduction: E,
                    isPrivateChannelWithEnabledActivities: P,
                    analyticsLocations: O
                }),
                !Z && g && null != c
                    ? (0, i.jsxs)('div', {
                          className: eD.viewAsRolesWarning,
                          children: [
                              (0, i.jsx)(I.Text, {
                                  variant: 'text-sm/normal',
                                  className: eD.viewAsRolesWarningText,
                                  children: T ? eP.Z.Messages.VIEW_AS_ROLES_HIDDEN_VC_WARNING : eP.Z.Messages.VIEW_AS_ROLES_VOICE_WARNING
                              }),
                              (0, i.jsx)(I.Button, {
                                  className: eD.viewAsRolesWarningButton,
                                  size: I.Button.Sizes.MIN,
                                  onClick: () => {
                                      L(!0);
                                  },
                                  children: eP.Z.Messages.DISMISS
                              })
                          ]
                      })
                    : null
            ]
        })
    });
});
