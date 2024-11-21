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
    N = n(2052),
    T = n(40851),
    S = n(317381),
    A = n(596040),
    x = n(588580),
    b = n(374065),
    Z = n(451576),
    L = n(119315),
    y = n(403404),
    P = n(100527),
    O = n(906732),
    R = n(424602),
    j = n(793865),
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
    W = n(917405),
    Y = n(641015),
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
    eN = n(979651),
    eT = n(938475),
    eS = n(626135),
    eA = n(63063),
    ex = n(51144),
    eb = n(870569),
    eZ = n(345243),
    eL = n(594117),
    ey = n(226323),
    eP = n(981631),
    eO = n(190378),
    eR = n(388032),
    ej = n(663031),
    eD = n(113207);
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
    eS.default.track(eP.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eP.jXE.NOISE_CANCELLATION_POPOUT }
    });
}
function ek() {
    let e = r.useRef(null);
    (0, f.useFocusLock)(e),
        r.useEffect(() => {
            eS.default.track(eP.rMx.OPEN_POPOUT, { type: eP.jXE.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, d.e7)([e_.Z], () => e_.Z.getNoiseCancellation());
    return (0, i.jsxs)('div', {
        ref: e,
        className: ej.noiseCancellationPopout,
        children: [
            (0, i.jsx)(f.FormSwitch, {
                hideBorder: !0,
                className: eD.marginBottom4,
                value: t,
                onChange: () => _.Z.setNoiseCancellation(!t, { section: eP.jXE.NOISE_CANCELLATION_POPOUT }),
                note: eR.intl.string(eR.t.uKdWn5),
                children: eR.intl.string(eR.t.WGWHv7)
            }),
            (0, i.jsx)(C.Z, {
                title: eR.intl.string(eR.t.JdUas7),
                notchBackground: C._.BLACK,
                buttonTest: eR.intl.string(eR.t['sG+MGh']),
                buttonStop: eR.intl.string(eR.t.Yp3SbG),
                buttonClassName: ej.micTestButton,
                buttonColor: f.Button.Colors.PRIMARY,
                location: { section: eP.jXE.NOISE_CANCELLATION_POPOUT }
            }),
            (0, i.jsx)(f.FormTitle, {
                tag: f.FormTitleTags.H5,
                className: a()(eD.marginBottom8, eD.marginTop20),
                children: eR.intl.string(eR.t.k6h1Fx)
            }),
            (0, i.jsxs)(M.Z, {
                justify: M.Z.Justify.BETWEEN,
                className: ej.__invalid_footer,
                children: [
                    (0, i.jsx)(f.Anchor, {
                        href: eP.EYA.KRISP,
                        onClick: (e) => ew(e),
                        children: (0, i.jsx)('div', { className: ej.krispLogo })
                    }),
                    (0, i.jsx)(f.Anchor, {
                        href: eA.Z.getArticleURL(eP.BhN.NOISE_SUPPRESSION),
                        className: ej.krispLink,
                        onClick: (e) => ew(e),
                        children: eR.intl.string(eR.t.hvVgAQ)
                    })
                ]
            })
        ]
    });
}
function eU() {
    let e = (0, d.e7)([ee.Z], () => ee.Z.isMuted()),
        t = e ? eR.intl.string(eR.t.ScHlfn) : eR.intl.string(eR.t.zqxfra);
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
        c = (0, d.cj)([S.ZP], () => null != S.ZP.getSelfEmbeddedActivityForChannel(t.id)),
        u = (0, Y.Z)(t),
        { reachedLimit: h, limit: m } = (0, er.Z)(t),
        g = r.useCallback(() => {
            (0, es.Z)();
        }, []),
        E = (0, T.bp)(),
        I = r.useCallback(
            (e) => {
                if (e_.Z.isVideoEnabled() === e) return;
                let n = () => {
                    var n;
                    _.Z.setVideoEnabled(e), e && (0, z.uL)(eP.Z5c.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : eP.ME, t.id));
                };
                e ? (0, ed.Z)(n, E) : n();
            },
            [t, E]
        ),
        C = c || n || u,
        { Component: v, play: N, events: A } = (0, p.o)(s.enabled ? 'disable' : 'enable');
    return (
        r.useEffect(() => () => N(), [s.enabled, N]),
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
                        size: 'sm',
                        className: a()(ej.buttonIcon, { [ej.withText]: !C }),
                        color: 'currentColor'
                    });
                return (0, i.jsx)(f.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(j.Z, { onClose: t });
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
                                        null === (t = e.onMouseEnter) || void 0 === t || t.call(e), null === (n = d.onMouseEnter) || void 0 === n || n.call(d), A.onMouseEnter();
                                    },
                                    onMouseLeave: () => {
                                        var t;
                                        null === (t = e.onMouseLeave) || void 0 === t || t.call(e), A.onMouseLeave();
                                    },
                                    onContextMenu: (t) => {
                                        var n;
                                        c(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e);
                                    },
                                    size: f.Button.Sizes.SMALL,
                                    className: a()(ej.button, ej.buttonColor, {
                                        [ej.buttonActive]: n,
                                        [ej.fauxDisabled]: t,
                                        [ej.disabled]: s.disabled
                                    }),
                                    innerClassName: ej.buttonContents,
                                    wrapperClassName: ej.button,
                                    fullWidth: !0,
                                    children: C
                                        ? o
                                        : (0, i.jsxs)(M.Z, {
                                              align: M.Z.Align.CENTER,
                                              children: [o, eR.intl.string(eR.t.FlNoSU)]
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
        s = (0, T.bp)(),
        { analyticsLocations: o } = (0, O.ZP)(),
        c = s === eP.IlC.POPOUT,
        m = (0, b.KF)(r.id),
        p = (0, b.g5)(m),
        { userInActivity: g } = (0, d.cj)([S.ZP], () => ({ userInActivity: null != S.ZP.getSelfEmbeddedActivityForChannel(r.id) })),
        _ = (0, N.O)(),
        E = (0, x.a)(),
        I = m !== b.jy.CAN_LAUNCH,
        { enabled: C } = R.nS.useExperiment({ location: 'RTCConnection' }, { autoTrackExposure: !0 }),
        { Component: v, events: A, play: Z } = (0, u.s)(),
        { Component: P, events: j, play: D } = (0, h.w)();
    return (C ? ((t = j), (n = D)) : ((t = A), (n = Z)), l)
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
                              (0, y.Z)({
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
                      className: a()(ej.button, ej.buttonColor, {
                          [ej.buttonActive]: g,
                          [ej.disabled]: I
                      }),
                      innerClassName: ej.buttonContents,
                      wrapperClassName: ej.button,
                      children: [
                          E
                              ? (0, i.jsx)(L.r, {
                                    top: -1,
                                    right: -1
                                })
                              : null,
                          C
                              ? (0, i.jsx)(P, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: ej.buttonIcon
                                })
                              : (0, i.jsx)(v, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: ej.buttonIcon
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
        g = (0, d.cj)([S.ZP], () => null != S.ZP.getSelfEmbeddedActivityForChannel(n.id)),
        _ = (0, Y.Z)(n),
        E = r.useCallback(() => {
            (0, ec.Z)(p, n.id, eP.jXE.ACTIVITY_PANEL);
        }, [p, n.id]),
        I = u.find((e) => e.ownerId === (null == c ? void 0 : c.id)),
        C = (0, ea.E)(n, c, u);
    t = null == I ? (l ? E : eo.Z) : () => (0, B.Z)(I);
    let v = null != I || C.length > 0,
        N = h ? eR.intl.string(eR.t.fjBNo6) : eR.intl.string(eR.t.uQn9Bw),
        T = g || s || _,
        A = null != I,
        { Component: x, events: b, play: Z } = (0, m.P)(A ? 'disable' : 'enable');
    r.useEffect(() => () => Z(), [Z, A]);
    let L = (0, i.jsx)(x, {
        size: 'sm',
        color: 'currentColor',
        className: a()(ej.buttonIcon, { [ej.withText]: !T })
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
                text: N,
                children: (e) =>
                    (0, i.jsx)(f.Button, {
                        ...e,
                        size: f.Button.Sizes.SMALL,
                        onClick: (i) => {
                            var r;
                            v ? n(i) : t(), null === (r = e.onClick) || void 0 === r || r.call(e);
                        },
                        disabled: !h || o,
                        className: a()(ej.button, ej.buttonColor, {
                            [ej.buttonActive]: null != I,
                            [ej.disabled]: !h || o
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
                        innerClassName: ej.buttonContents,
                        wrapperClassName: ej.button,
                        children: T
                            ? L
                            : (0, i.jsxs)(M.Z, {
                                  align: M.Z.Align.CENTER,
                                  children: [L, eR.intl.string(eR.t['r0/+v7'])]
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
            null != n ? ((e = eP.Z5c.CHANNEL(n.id, t.id)), (o = ''.concat(o, ' / ').concat(n.name))) : (e = eP.Z5c.CHANNEL(eP.ME, t.id)),
            (0, i.jsx)(W.Z, {
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
                            className: ej.channel,
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
                      text: eR.intl.string(eR.t['i+SO/f']),
                      tooltipClassName: ej.noiseCancellationTooltip,
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
            ? (0, i.jsx)(ey.Z, {
                  voiceStates: t,
                  channel: e,
                  className: ej.voiceUsers
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
            className: ej.actionButtons,
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
                        (0, Y.Z)(e)
                            ? (0, i.jsx)(K.Z, {
                                  className: a()(ej.button, ej.buttonColor),
                                  innerClassName: ej.buttonContents,
                                  iconClassName: ej.buttonIcon,
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
                          className: ej.container,
                          children: [
                              (0, i.jsxs)(M.Z, {
                                  className: ej.connection,
                                  align: M.Z.Align.CENTER,
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: ej.inner,
                                          children: this.renderConnectionStatus()
                                      }),
                                      (0, i.jsxs)(M.Z, {
                                          grow: 0,
                                          shrink: 0,
                                          className: ej.voiceButtonsContainer,
                                          children: [t ? this.renderNoiseCancellation() : null, (0, i.jsx)(eL.Z, { channel: e })]
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
                _.Z.setNoiseCancellation(!e, { section: eP.jXE.NOISE_CANCELLATION_POPOUT });
            }),
            eM(this, 'handleGoLive', () => {
                let { guild: e, channel: t } = this.props,
                    n = null != t ? t.getGuildId() : null != e ? e.id : null;
                if (null != n) (0, ec.Z)(n, t.id, eP.Sbl.VOICE_PANEL);
            }),
            eM(this, 'handleChannelLinkClick', (e) => {
                var t;
                let { guild: n, channel: i } = this.props;
                o()(null != i, 'Channel is null during navigation click'), e.stopPropagation(), I.Z.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eP.ME, i.id);
            }),
            eM(this, 'handleChannelLinkContextMenu', (e) => {
                let { channel: t, analyticsLocations: r } = this.props;
                (0, E.jW)(e, async () => {
                    let { default: e } = await n.e('56944').then(n.bind(n, 600830));
                    return (n) =>
                        (0, i.jsx)(O.Gt, {
                            value: r,
                            children: (0, i.jsx)(e, {
                                ...n,
                                channel: t
                            })
                        });
                });
            }),
            eM(this, 'handleCloseVoicePanelIntroduction', () => {
                H.Kw(eO.v.VOICE_PANEL_INTRODUCTION);
            }),
            eM(this, 'renderVoicePanelIntroduction', () =>
                (0, i.jsxs)('div', {
                    className: a()(ej.voicePanelIntroductionWrapper, 'theme-light'),
                    children: [
                        (0, i.jsx)(f.Heading, {
                            className: ej.voicePanelIntroductionHeader,
                            variant: 'heading-md/semibold',
                            children: eR.intl.string(eR.t['ba/rLy'])
                        }),
                        (0, i.jsx)(f.Text, {
                            className: ej.voicePanelIntroductionText,
                            variant: 'text-sm/normal',
                            children: eR.intl.string(eR.t.Ne1Ee3)
                        }),
                        (0, i.jsx)(f.Button, {
                            className: ej.voicePanelIntroductionButton,
                            color: f.Button.Colors.BRAND,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            children: eR.intl.string(eR.t.shaBeH)
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
            tooltipClassName: ej.noiseCancellationTooltip,
            tooltipText: n ? null : eR.intl.string(eR.t.vFiCS0),
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
                      rtcConnectionQuality: eP.IE4.FINE,
                      rtcConnectionState: eP.hes.RTC_CONNECTED,
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
        m = (0, d.e7)([e_.Z, V.Z], () => V.Z.hasHotspot(eO.v.VOICE_PANEL_INTRODUCTION) && (0, ex.EO)(l) && !e_.Z.isInteractionRequired() && !(null == o ? void 0 : o.isGuildStageVoice())),
        p = (0, d.e7)([eN.Z], () => null != a && eN.Z.hasVideo(a), [a]),
        g = (0, d.e7)([eh.Z], () => eh.Z.getCurrentUserActiveStream()),
        _ = (0, d.e7)([ef.Z], () => ef.Z.hasLayers()),
        E = (0, d.e7)([F.Z], () => F.Z.isViewingRoles(c)),
        I = (0, d.e7)([eE.Z], () => E && !eE.Z.can(eP.Plq.VIEW_CHANNEL, o), [E, o]),
        C = en.Fg.useSetting(),
        [v, N, T] = (0, d.Wu)([eT.ZP, q.Z], () => ((null == o ? void 0 : o.isGuildStageVoice()) ? [q.Z.getMutableParticipants(o.id, X.pV.SPEAKER), q.Z.getParticipantsVersion(o.id), null] : [null, null, null != o ? eT.ZP.getVoiceStatesForChannel(o) : null]), [o]),
        S = r.useMemo(() => {
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
                        : T) && void 0 !== t
                ? t
                : [];
        }, [v, N, T]),
        [x, b] = r.useState(!1);
    r.useEffect(() => {
        (E || I) && b(!1);
    }, [E, I, b]);
    let { analyticsLocations: L } = (0, O.ZP)(P.Z.RTC_PANEL),
        y = (0, A.Z)(null != c ? c : eP.lds, null == o ? void 0 : o.id),
        R = (0, Z.Z)(null == o ? void 0 : o.id);
    return (0, i.jsx)(O.Gt, {
        value: L,
        children: (0, i.jsxs)('div', {
            className: ej.wrapper,
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
                    enableActivities: y,
                    remoteVoiceState: t,
                    guild: u,
                    channel: o,
                    hasVideo: p,
                    selfStream: g,
                    hasLayers: _,
                    voiceStates: S,
                    showVoiceStates: C,
                    shouldShowVoicePanelIntroduction: m,
                    isPrivateChannelWithEnabledActivities: R,
                    analyticsLocations: L
                }),
                !x && E && null != c
                    ? (0, i.jsxs)('div', {
                          className: ej.viewAsRolesWarning,
                          children: [
                              (0, i.jsx)(f.Text, {
                                  variant: 'text-sm/normal',
                                  className: ej.viewAsRolesWarningText,
                                  children: I ? eR.intl.string(eR.t.efjuQE) : eR.intl.string(eR.t.br8H2N)
                              }),
                              (0, i.jsx)(f.Button, {
                                  className: ej.viewAsRolesWarningButton,
                                  size: f.Button.Sizes.MIN,
                                  onClick: () => {
                                      b(!0);
                                  },
                                  children: eR.intl.string(eR.t.WAI6xs)
                              })
                          ]
                      })
                    : null
            ]
        })
    });
});
