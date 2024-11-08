n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(568611),
    d = n(442837),
    u = n(592471),
    h = n(749280),
    m = n(864094),
    p = n(75735),
    g = n(382600),
    f = n(481060),
    _ = n(846027),
    E = n(239091),
    I = n(925549),
    C = n(284056),
    v = n(730749),
    S = n(2052),
    N = n(40851),
    T = n(317381),
    x = n(596040),
    A = n(588580),
    b = n(374065),
    Z = n(451576),
    y = n(119315),
    L = n(403404),
    j = n(100527),
    R = n(906732),
    O = n(424602),
    P = n(793865),
    D = n(933557),
    M = n(600164),
    w = n(258609),
    k = n(446226),
    U = n(935261),
    G = n(74299),
    B = n(803647),
    H = n(142497),
    V = n(810788),
    F = n(160404),
    z = n(703656),
    Y = n(917405),
    W = n(641015),
    K = n(848543),
    q = n(565799),
    X = n(501655),
    Q = n(368442),
    J = n(600518),
    $ = n(485287),
    ee = n(754277),
    et = n(590415),
    en = n(695346),
    ei = n(923973),
    er = n(829750),
    el = n(189771),
    ea = n(544384),
    es = n(560688),
    eo = n(127608),
    ec = n(76021),
    ed = n(173507),
    eu = n(25827),
    eh = n(199902),
    em = n(314897),
    ep = n(592125),
    eg = n(430824),
    ef = n(819640),
    e_ = n(131951),
    eE = n(496675),
    eI = n(19780),
    eC = n(699516),
    ev = n(594174),
    eS = n(979651),
    eN = n(938475),
    eT = n(626135),
    ex = n(63063),
    eA = n(51144),
    eb = n(870569),
    eZ = n(345243),
    ey = n(594117),
    eL = n(226323),
    ej = n(981631),
    eR = n(190378),
    eO = n(388032),
    eP = n(246764),
    eD = n(971436);
function eM(e, t, n) {
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
function ew(e) {
    let t = e.currentTarget;
    eT.default.track(ej.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: ej.jXE.NOISE_CANCELLATION_POPOUT }
    });
}
function ek() {
    let e = r.useRef(null);
    (0, f.useFocusLock)(e),
        r.useEffect(() => {
            eT.default.track(ej.rMx.OPEN_POPOUT, { type: ej.jXE.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, d.e7)([e_.Z], () => e_.Z.getNoiseCancellation());
    return (0, i.jsxs)('div', {
        ref: e,
        className: eP.noiseCancellationPopout,
        children: [
            (0, i.jsx)(f.FormSwitch, {
                hideBorder: !0,
                className: eD.marginBottom4,
                value: t,
                onChange: () => _.Z.setNoiseCancellation(!t, { section: ej.jXE.NOISE_CANCELLATION_POPOUT }),
                note: eO.intl.string(eO.t.uKdWn5),
                children: eO.intl.string(eO.t.WGWHv7)
            }),
            (0, i.jsx)(C.Z, {
                title: eO.intl.string(eO.t.JdUas7),
                notchBackground: C._.BLACK,
                buttonTest: eO.intl.string(eO.t['sG+MGh']),
                buttonStop: eO.intl.string(eO.t.Yp3SbG),
                buttonClassName: eP.micTestButton,
                buttonColor: f.Button.Colors.PRIMARY,
                location: { section: ej.jXE.NOISE_CANCELLATION_POPOUT }
            }),
            (0, i.jsx)(f.FormTitle, {
                tag: f.FormTitleTags.H5,
                className: a()(eD.marginBottom8, eD.marginTop20),
                children: eO.intl.string(eO.t.k6h1Fx)
            }),
            (0, i.jsxs)(M.Z, {
                justify: M.Z.Justify.BETWEEN,
                className: eP.__invalid_footer,
                children: [
                    (0, i.jsx)(f.Anchor, {
                        href: ej.EYA.KRISP,
                        onClick: (e) => ew(e),
                        children: (0, i.jsx)('div', { className: eP.krispLogo })
                    }),
                    (0, i.jsx)(f.Anchor, {
                        href: ex.Z.getArticleURL(ej.BhN.NOISE_SUPPRESSION),
                        className: eP.krispLink,
                        onClick: (e) => ew(e),
                        children: eO.intl.string(eO.t.hvVgAQ)
                    })
                ]
            })
        ]
    });
}
function eU() {
    let e = (0, d.e7)([ee.Z], () => ee.Z.isMuted()),
        t = e ? eO.intl.string(eO.t.ScHlfn) : eO.intl.string(eO.t.zqxfra);
    return (0, i.jsx)(eb.Z, {
        'aria-label': t,
        tooltipText: t,
        icon: e ? f.MusicSlashIcon : f.MusicIcon,
        onClick: () => (0, J.v)(!e)
    });
}
function eG(e) {
    let { channel: t, enableActivities: n, disabled: l } = e,
        s = (0, ei.Z)(),
        o = (0, el.Z)(t),
        c = (0, d.cj)([T.ZP], () => null != T.ZP.getSelfEmbeddedActivityForChannel(t.id)),
        u = (0, W.Z)(t),
        { reachedLimit: h, limit: m } = (0, er.Z)(t),
        g = r.useCallback(() => {
            (0, es.Z)();
        }, []),
        E = (0, N.bp)(),
        I = r.useCallback(
            (e) => {
                if (e_.Z.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    _.Z.setVideoEnabled(e), e && (0, z.uL)(ej.Z5c.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : ej.ME, t.id));
                };
                e ? (0, ed.Z)(n, E) : n();
            },
            [t, E]
        ),
        C = c || n || u,
        { Component: v, play: S, events: x } = (0, p.o)(s.enabled ? 'disable' : 'enable');
    return (
        r.useEffect(() => () => S(), [s.enabled, S]),
        (0, i.jsx)(eu.Z, {
            onChange: I,
            onCameraUnavailable: g,
            hasPermission: o,
            channelLimit: m,
            channelLimitReached: h,
            ...s,
            enabled: !l && s.enabled,
            children: (e) => {
                let { unavailable: t, active: n, label: r, iconComponent: l, ...s } = e,
                    o = (0, i.jsx)(v, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        className: a()(eP.buttonIcon, { [eP.withText]: !C }),
                        color: 'currentColor'
                    });
                return (0, i.jsx)(f.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(P.Z, { onClose: t });
                    },
                    position: 'top',
                    align: 'center',
                    animation: f.Popout.Animation.FADE,
                    children: (e, l) => {
                        let { onClick: c, ...d } = e,
                            { isShown: u } = l;
                        return (0, i.jsx)(f.Tooltip, {
                            text: r,
                            children: (e) =>
                                (0, i.jsx)(f.Button, {
                                    ...s,
                                    ...e,
                                    ...d,
                                    onClick: (t) => {
                                        var n;
                                        s.onClick(t), null === (n = e.onClick) || void 0 === n || n.call(e), u && c(t);
                                    },
                                    onMouseEnter: () => {
                                        var t, n;
                                        null === (t = e.onMouseEnter) || void 0 === t || t.call(e), null === (n = d.onMouseEnter) || void 0 === n || n.call(d), x.onMouseEnter();
                                    },
                                    onMouseLeave: () => {
                                        var t;
                                        null === (t = e.onMouseLeave) || void 0 === t || t.call(e), x.onMouseLeave();
                                    },
                                    onContextMenu: (t) => {
                                        var n;
                                        c(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e);
                                    },
                                    size: f.Button.Sizes.SMALL,
                                    className: a()(eP.button, eP.buttonColor, {
                                        [eP.buttonActive]: n,
                                        [eP.fauxDisabled]: t,
                                        [eP.disabled]: s.disabled
                                    }),
                                    innerClassName: eP.buttonContents,
                                    wrapperClassName: eP.button,
                                    fullWidth: !0,
                                    children: C
                                        ? o
                                        : (0, i.jsxs)(M.Z, {
                                              align: M.Z.Align.CENTER,
                                              children: [o, eO.intl.string(eO.t.FlNoSU)]
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
        { channel: r, enableActivities: l } = e,
        s = (0, N.bp)(),
        { analyticsLocations: o } = (0, R.ZP)(),
        c = s === ej.IlC.POPOUT,
        m = (0, b.KF)(r.id),
        p = (0, b.g5)(m),
        { userInActivity: g } = (0, d.cj)([T.ZP], () => ({ userInActivity: null != T.ZP.getSelfEmbeddedActivityForChannel(r.id) })),
        _ = (0, S.O)(),
        E = (0, A.a)(),
        I = m !== b.jy.CAN_LAUNCH,
        { enabled: C } = O.nS.useExperiment({ location: 'RTCConnection' }, { autoTrackExposure: !0 }),
        { Component: v, events: x, play: Z } = (0, u.s)(),
        { Component: j, events: P, play: D } = (0, h.w)();
    return (C ? ((t = P), (n = D)) : ((t = x), (n = Z)), l)
        ? (0, i.jsx)(f.Tooltip, {
              text: p,
              children: (e) =>
                  (0, i.jsxs)(f.Button, {
                      ...e,
                      fullWidth: !0,
                      size: f.Button.Sizes.SMALL,
                      ...t,
                      onClick: () => {
                          var t;
                          n(),
                              (0, L.Z)({
                                  channel: r,
                                  guildId: r.guild_id,
                                  locationObject: _.location,
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
                      disabled: I,
                      className: a()(eP.button, eP.buttonColor, {
                          [eP.buttonActive]: g,
                          [eP.disabled]: I
                      }),
                      innerClassName: eP.buttonContents,
                      wrapperClassName: eP.button,
                      children: [
                          E
                              ? (0, i.jsx)(y.r, {
                                    top: -1,
                                    right: -1
                                })
                              : null,
                          C
                              ? (0, i.jsx)(j, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: eP.buttonIcon
                                })
                              : (0, i.jsx)(v, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: eP.buttonIcon
                                })
                      ]
                  })
          })
        : null;
}
function eH(e) {
    let t,
        { channel: n, canGoLive: l, enableActivities: s, disabled: o } = e,
        c = (0, d.e7)([ev.default], () => ev.default.getCurrentUser()),
        u = (0, d.Wu)([eh.Z], () => eh.Z.getAllActiveStreams()),
        h = (0, el.Z)(n),
        p = n.getGuildId(),
        g = (0, d.cj)([T.ZP], () => null != T.ZP.getSelfEmbeddedActivityForChannel(n.id)),
        _ = (0, W.Z)(n),
        E = r.useCallback(() => {
            (0, ec.Z)(p, n.id, ej.jXE.ACTIVITY_PANEL);
        }, [p, n.id]),
        I = u.find((e) => e.ownerId === (null == c ? void 0 : c.id)),
        C = (0, ea.E)(n, c, u);
    t = null == I ? (l ? E : eo.Z) : () => (0, B.Z)(I);
    let v = null != I || C.length > 0,
        S = h ? eO.intl.string(eO.t.fjBNo6) : eO.intl.string(eO.t.uQn9Bw),
        N = g || s || _,
        x = null != I,
        { Component: A, events: b, play: Z } = (0, m.P)(x ? 'disable' : 'enable');
    r.useEffect(() => () => Z(), [Z, x]);
    let y = (0, i.jsx)(A, {
        color: 'currentColor',
        className: a()(eP.buttonIcon, { [eP.withText]: !N })
    });
    return (0, i.jsx)(f.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(ea.Z, {
                channel: n,
                currentUser: c,
                activeStreams: u,
                onClose: t,
                handleGoLive: l ? E : eo.Z
            });
        },
        position: 'top',
        align: 'center',
        animation: f.Popout.Animation.FADE,
        children: (e) => {
            let { onClick: n, onMouseEnter: r, ...l } = e;
            return (0, i.jsx)(f.Tooltip, {
                text: S,
                children: (e) =>
                    (0, i.jsx)(f.Button, {
                        ...e,
                        size: f.Button.Sizes.SMALL,
                        onClick: (i) => {
                            var r;
                            v ? n(i) : t(), null === (r = e.onClick) || void 0 === r || r.call(e);
                        },
                        disabled: !h || o,
                        className: a()(eP.button, eP.buttonColor, {
                            [eP.buttonActive]: null != I,
                            [eP.disabled]: !h || o
                        }),
                        ...(v ? l : null),
                        onMouseEnter: () => {
                            var t;
                            null == r || r(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e), b.onMouseEnter();
                        },
                        onMouseLeave: () => {
                            var t;
                            null === (t = e.onMouseLeave) || void 0 === t || t.call(e), b.onMouseLeave();
                        },
                        innerClassName: eP.buttonContents,
                        wrapperClassName: eP.button,
                        children: N
                            ? y
                            : (0, i.jsxs)(M.Z, {
                                  align: M.Z.Align.CENTER,
                                  children: [y, eO.intl.string(eO.t['r0/+v7'])]
                              })
                    })
            });
        }
    });
}
class eV extends r.PureComponent {
    renderConnectionStatus() {
        let e;
        let { channel: t, guild: n, rtcConnectionQuality: r, rtcConnectionState: l, rtcConnectionLastPing: a, hasVideo: s } = this.props;
        if (null == t) return null;
        let o = (0, D.F6)(t, ev.default, eC.Z);
        return (
            null != n ? ((e = ej.Z5c.CHANNEL(n.id, t.id)), (o = ''.concat(o, ' / ').concat(n.name))) : (e = ej.Z5c.CHANNEL(ej.ME, t.id)),
            (0, i.jsx)(Y.Z, {
                channelId: t.id,
                quality: r,
                state: l,
                lastPing: a,
                hasVideo: s,
                children: (0, i.jsx)(f.FocusRing, {
                    children: (0, i.jsx)(c.rU, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, i.jsx)(eZ.Z, {
                            className: eP.channel,
                            children: o
                        })
                    })
                })
            })
        );
    }
    renderNoiseCancellation() {
        let { noiseCancellationActive: e, noiseCancellationError: t, hasLayers: n, remoteVoiceState: r, channel: l, voiceStates: a } = this.props;
        return null != r
            ? null
            : (null == l ? void 0 : l.isGuildStageVoice()) && !(null != a.find((e) => e.user.id === em.default.getId() && (0, et.gf)(e.voiceState) === et.xO.ON_STAGE)) && (0, $.U5)(l.id)
              ? (0, i.jsx)(eU, {})
              : !n && t
                ? (0, i.jsx)(f.Tooltip, {
                      text: eO.intl.string(eO.t['i+SO/f']),
                      tooltipClassName: eP.noiseCancellationTooltip,
                      forceOpen: !0,
                      children: (e) => {
                          let { 'aria-label': t } = e;
                          return (0, i.jsx)(eb.Z, {
                              'aria-label': t,
                              tooltipText: null,
                              disabled: !0,
                              icon: f.WaveformSlashIcon
                          });
                      }
                  })
                : (0, i.jsx)(
                      f.Popout,
                      {
                          position: 'top',
                          align: 'center',
                          renderPopout: () => (0, i.jsx)(ek, {}),
                          children: (t, n) => {
                              let { isShown: r } = n;
                              return (0, i.jsx)(eF, {
                                  popoutProps: t,
                                  isShown: r,
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
            ? (0, i.jsx)(eL.Z, {
                  voiceStates: t,
                  channel: e,
                  className: eP.voiceUsers
              })
            : null;
    }
    renderChannelButtons() {
        let { channel: e, canGoLive: t, remoteVoiceState: n, enableActivities: r, voiceStates: l, selfStream: s, isPrivateChannelWithEnabledActivities: o } = this.props;
        if (null == e || null != n) return null;
        let c = em.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, Q.tu)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === c);
            if (null == n || n.voiceState.suppress) return null;
        }
        let d = (e.isGuildVoice() || o) && r,
            { reachedLimit: u } = (0, er.t)(e),
            h = (0, Q.xJ)(e.id);
        return (0, i.jsxs)('div', {
            className: eP.actionButtons,
            children: [
                (0, i.jsx)(eG, {
                    channel: e,
                    enableActivities: d,
                    disabled: !h && u
                }),
                (0, i.jsx)(eH, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: d,
                    disabled: e.isGuildStageVoice() && ((h && null == s) || (!h && u))
                }),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        d
                            ? (0, i.jsx)(eB, {
                                  channel: e,
                                  enableActivities: r
                              })
                            : null,
                        (0, W.Z)(e)
                            ? (0, i.jsx)(K.Z, {
                                  className: a()(eP.button, eP.buttonColor),
                                  innerClassName: eP.buttonContents,
                                  iconClassName: eP.buttonIcon,
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
            : (0, i.jsx)(f.Popout, {
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: 'top',
                  align: 'center',
                  animation: f.Popout.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, i.jsxs)('div', {
                          className: eP.container,
                          children: [
                              (0, i.jsxs)(M.Z, {
                                  className: eP.connection,
                                  align: M.Z.Align.CENTER,
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: eP.inner,
                                          children: this.renderConnectionStatus()
                                      }),
                                      (0, i.jsxs)(M.Z, {
                                          grow: 0,
                                          shrink: 0,
                                          className: eP.voiceButtonsContainer,
                                          children: [t ? this.renderNoiseCancellation() : null, (0, i.jsx)(ey.Z, { channel: e })]
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
            eM(this, 'canScreenshare', () => {
                let { channel: e, canGoLive: t } = this.props;
                return t && null != e && null != e.getGuildId();
            }),
            eM(this, 'handleNoiseCancellationClicked', () => {
                let { noiseCancellationActive: e } = this.props;
                _.Z.setNoiseCancellation(!e, { section: ej.jXE.NOISE_CANCELLATION_POPOUT });
            }),
            eM(this, 'handleGoLive', () => {
                let { guild: e, channel: t } = this.props,
                    n = null != t ? t.getGuildId() : null != e ? e.id : null;
                if (null != n) (0, ec.Z)(n, t.id, ej.Sbl.VOICE_PANEL);
            }),
            eM(this, 'handleChannelLinkClick', (e) => {
                var t;
                let { guild: n, channel: i } = this.props;
                o()(null != i, 'Channel is null during navigation click'), e.stopPropagation(), I.Z.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : ej.ME, i.id);
            }),
            eM(this, 'handleChannelLinkContextMenu', (e) => {
                let { channel: t, analyticsLocations: r } = this.props;
                (0, E.jW)(e, async () => {
                    let { default: e } = await n.e('56944').then(n.bind(n, 600830));
                    return (n) =>
                        (0, i.jsx)(R.Gt, {
                            value: r,
                            children: (0, i.jsx)(e, {
                                ...n,
                                channel: t
                            })
                        });
                });
            }),
            eM(this, 'handleCloseVoicePanelIntroduction', () => {
                H.Kw(eR.v.VOICE_PANEL_INTRODUCTION);
            }),
            eM(this, 'renderVoicePanelIntroduction', () =>
                (0, i.jsxs)('div', {
                    className: a()(eP.voicePanelIntroductionWrapper, 'theme-light'),
                    children: [
                        (0, i.jsx)(f.Heading, {
                            className: eP.voicePanelIntroductionHeader,
                            variant: 'heading-md/semibold',
                            children: eO.intl.string(eO.t['ba/rLy'])
                        }),
                        (0, i.jsx)(f.Text, {
                            className: eP.voicePanelIntroductionText,
                            variant: 'text-sm/normal',
                            children: eO.intl.string(eO.t.Ne1Ee3)
                        }),
                        (0, i.jsx)(f.Button, {
                            className: eP.voicePanelIntroductionButton,
                            color: f.Button.Colors.BRAND,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            children: eO.intl.string(eO.t.shaBeH)
                        })
                    ]
                })
            );
    }
}
function eF(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l } = e,
        { play: a, Component: s, events: o } = (0, g.P)(l ? 'disable' : 'enable');
    return (
        r.useEffect(() => () => a(), [l, a]),
        (0, i.jsx)(eb.Z, {
            ...t,
            onMouseEnter: () => {
                var e;
                null === (e = t.onMouseEnter) || void 0 === e || e.call(t), o.onMouseEnter();
            },
            onMouseLeave: () => {
                o.onMouseLeave();
            },
            tooltipClassName: eP.noiseCancellationTooltip,
            tooltipText: n ? null : eO.intl.string(eO.t.vFiCS0),
            icon: s
        })
    );
}
t.Z = (0, v.Z)(function (e) {
    let t = (0, k.Z)(),
        n = (0, d.e7)([w.Z], () => w.Z.getAwaitingRemoteSessionInfo()),
        l = (0, d.e7)([ev.default], () => ev.default.getCurrentUser()),
        { channelId: a, ...s } = (0, d.cj)([eI.Z], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: ej.IE4.FINE,
                      rtcConnectionState: ej.hes.RTC_CONNECTED,
                      rtcConnectionLastPing: 0
                  }
                : {
                      channelId: eI.Z.getChannelId(),
                      rtcConnectionQuality: eI.Z.getQuality(),
                      rtcConnectionState: eI.Z.getState(),
                      rtcConnectionLastPing: eI.Z.getLastPing()
                  }
        ),
        o = (0, d.e7)([ep.Z], () => ep.Z.getChannel(a), [a]),
        c = null == o ? void 0 : o.getGuildId(),
        u = (0, d.e7)([eg.Z], () => eg.Z.getGuild(c), [c]),
        h = (0, d.cj)([e_.Z], () => ({
            noiseCancellationSupported: e_.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: e_.Z.getNoiseCancellation(),
            noiseCancellationError: e_.Z.isNoiseCancellationError(),
            canGoLive: (0, G.Z)(e_.Z)
        })),
        m = (0, d.e7)([e_.Z, V.Z], () => V.Z.hasHotspot(eR.v.VOICE_PANEL_INTRODUCTION) && (0, eA.EO)(l) && !e_.Z.isInteractionRequired() && !(null == o ? void 0 : o.isGuildStageVoice())),
        p = (0, d.e7)([eS.Z], () => null != a && eS.Z.hasVideo(a), [a]),
        g = (0, d.e7)([eh.Z], () => eh.Z.getCurrentUserActiveStream()),
        _ = (0, d.e7)([ef.Z], () => ef.Z.hasLayers()),
        E = (0, d.e7)([F.Z], () => F.Z.isViewingRoles(c)),
        I = (0, d.e7)([eE.Z], () => E && !eE.Z.can(ej.Plq.VIEW_CHANNEL, o), [E, o]),
        C = en.Fg.useSetting(),
        [v, S, N] = (0, d.Wu)([eN.ZP, q.Z], () => ((null == o ? void 0 : o.isGuildStageVoice()) ? [q.Z.getMutableParticipants(o.id, X.pV.SPEAKER), q.Z.getParticipantsVersion(o.id), null] : [null, null, null != o ? eN.ZP.getVoiceStatesForChannel(o) : null]), [o]),
        T = r.useMemo(() => {
            var e, t;
            return null !==
                (t =
                    null !==
                        (e =
                            null == v
                                ? void 0
                                : v.map((e) => {
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
        }, [v, S, N]),
        [A, b] = r.useState(!1);
    r.useEffect(() => {
        (E || I) && b(!1);
    }, [E, I, b]);
    let { analyticsLocations: y } = (0, R.ZP)(j.Z.RTC_PANEL),
        L = (0, x.Z)(null != c ? c : ej.lds, null == o ? void 0 : o.id),
        O = (0, Z.Z)(null == o ? void 0 : o.id);
    return (0, i.jsx)(R.Gt, {
        value: y,
        children: (0, i.jsxs)('div', {
            className: eP.wrapper,
            children: [
                null != t || null != n
                    ? (0, i.jsx)(U.Z, {
                          voiceState: t,
                          awaitingRemoteSessionInfo: n
                      })
                    : null,
                (0, i.jsx)(eV, {
                    ...e,
                    ...h,
                    ...s,
                    enableActivities: L,
                    remoteVoiceState: t,
                    guild: u,
                    channel: o,
                    hasVideo: p,
                    selfStream: g,
                    hasLayers: _,
                    voiceStates: T,
                    showVoiceStates: C,
                    shouldShowVoicePanelIntroduction: m,
                    isPrivateChannelWithEnabledActivities: O,
                    analyticsLocations: y
                }),
                !A && E && null != c
                    ? (0, i.jsxs)('div', {
                          className: eP.viewAsRolesWarning,
                          children: [
                              (0, i.jsx)(f.Text, {
                                  variant: 'text-sm/normal',
                                  className: eP.viewAsRolesWarningText,
                                  children: I ? eO.intl.string(eO.t.efjuQE) : eO.intl.string(eO.t.br8H2N)
                              }),
                              (0, i.jsx)(f.Button, {
                                  className: eP.viewAsRolesWarningButton,
                                  size: f.Button.Sizes.MIN,
                                  onClick: () => {
                                      b(!0);
                                  },
                                  children: eO.intl.string(eO.t.WAI6xs)
                              })
                          ]
                      })
                    : null
            ]
        })
    });
});
