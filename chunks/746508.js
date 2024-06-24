n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(512722),
  o = n.n(r),
  c = n(613828),
  u = n(442837),
  d = n(592471),
  E = n(864094),
  h = n(75735),
  _ = n(382600),
  I = n(481060),
  m = n(846027),
  g = n(239091),
  p = n(925549),
  N = n(284056),
  T = n(730749),
  C = n(2052),
  S = n(40851),
  A = n(317381),
  f = n(596040),
  Z = n(588580),
  v = n(374065),
  L = n(451576),
  O = n(938655),
  R = n(403404),
  x = n(100527),
  M = n(906732),
  P = n(158631),
  D = n(793865),
  b = n(933557),
  y = n(258609),
  j = n(446226),
  U = n(935261),
  G = n(74299),
  w = n(803647),
  k = n(142497),
  B = n(810788),
  H = n(160404),
  V = n(703656),
  F = n(917405),
  Y = n(641015),
  z = n(848543),
  W = n(565799),
  K = n(501655),
  q = n(71275),
  Q = n(600518),
  X = n(485287),
  J = n(754277),
  $ = n(590415),
  ee = n(695346),
  et = n(923973),
  en = n(829750),
  ei = n(189771),
  es = n(544384),
  el = n(560688),
  ea = n(127608),
  er = n(76021),
  eo = n(173507),
  ec = n(25827),
  eu = n(199902),
  ed = n(314897),
  eE = n(592125),
  eh = n(430824),
  e_ = n(819640),
  eI = n(131951),
  em = n(496675),
  eg = n(19780),
  ep = n(699516),
  eN = n(594174),
  eT = n(979651),
  eC = n(938475),
  eS = n(285952),
  eA = n(976401),
  ef = n(333454),
  eZ = n(626135),
  ev = n(63063),
  eL = n(51144),
  eO = n(594117),
  eR = n(226323),
  ex = n(981631),
  eM = n(190378),
  eP = n(689938),
  eD = n(707747),
  eb = n(331651);

function ey(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function ej(e) {
  let t = e.currentTarget;
  eZ.default.track(ex.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      section: ex.jXE.NOISE_CANCELLATION_POPOUT
    }
  })
}

function eU() {
  let e = s.useRef(null);
  (0, I.useFocusLock)(e), s.useEffect(() => {
    eZ.default.track(ex.rMx.OPEN_POPOUT, {
      type: ex.jXE.NOISE_CANCELLATION_POPOUT
    })
  }, []);
  let t = (0, u.e7)([eI.Z], () => eI.Z.getNoiseCancellation());
  return (0, i.jsxs)("div", {
    ref: e,
    className: eD.noiseCancellationPopout,
    children: [(0, i.jsx)(I.FormSwitch, {
      hideBorder: !0,
      className: eb.marginBottom4,
      value: t,
      onChange: () => m.Z.setNoiseCancellation(!t, {
        section: ex.jXE.NOISE_CANCELLATION_POPOUT
      }),
      note: eP.Z.Messages.NOISE_CANCELLATION_POPOUT_DESCRIPTION,
      children: eP.Z.Messages.NOISE_CANCELLATION_POPOUT_HEADER
    }), (0, i.jsx)(N.Z, {
      title: eP.Z.Messages.NOISE_CANCELLATION_POPOUT_MIC_TEST_TITLE,
      notchBackground: N._.BLACK,
      buttonTest: eP.Z.Messages.NOISE_CANCELLATION_POPOUT_TEST,
      buttonStop: eP.Z.Messages.NOISE_CANCELLATION_POPOUT_STOP,
      buttonClassName: eD.micTestButton,
      buttonColor: I.Button.Colors.PRIMARY,
      location: {
        section: ex.jXE.NOISE_CANCELLATION_POPOUT
      }
    }), (0, i.jsx)(I.FormTitle, {
      tag: I.FormTitleTags.H5,
      className: a()(eb.marginBottom8, eb.marginTop20),
      children: eP.Z.Messages.NOISE_CANCELLATION_POPOUT_FOOTER
    }), (0, i.jsxs)(eS.Z, {
      justify: eS.Z.Justify.BETWEEN,
      className: eD.__invalid_footer,
      children: [(0, i.jsx)(I.Anchor, {
        href: ex.EYA.KRISP,
        onClick: e => ej(e),
        children: (0, i.jsx)("div", {
          className: eD.krispLogo
        })
      }), (0, i.jsx)(I.Anchor, {
        href: ev.Z.getArticleURL(ex.BhN.NOISE_SUPPRESSION),
        className: eD.krispLink,
        onClick: e => ej(e),
        children: eP.Z.Messages.LEARN_MORE
      })]
    })]
  })
}

function eG() {
  let e = (0, u.e7)([J.Z], () => J.Z.isMuted()),
    t = e ? eP.Z.Messages.STAGE_MUSIC_UNMUTE : eP.Z.Messages.STAGE_MUSIC_MUTE;
  return (0, i.jsx)(eA.Z, {
    "aria-label": t,
    tooltipText: t,
    icon: e ? I.MusicSlashIcon : I.MusicIcon,
    onClick: () => (0, Q.v)(!e)
  })
}

function ew(e) {
  let {
    channel: t,
    enableActivities: n,
    disabled: l
  } = e, r = (0, et.Z)(), o = (0, ei.Z)(t), c = (0, u.cj)([A.ZP], () => null != A.ZP.getSelfEmbeddedActivityForChannel(t.id)), d = (0, Y.Z)(t), {
    reachedLimit: E,
    limit: _
  } = (0, en.Z)(t), g = s.useCallback(() => {
    (0, el.Z)()
  }, []), p = (0, S.bp)(), N = s.useCallback(e => {
    if (eI.Z.isVideoEnabled() === e) return;
    let n = () => {
      var n;
      m.Z.setVideoEnabled(e), e && (0, V.uL)(ex.Z5c.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : ex.ME, t.id))
    };
    e ? (0, eo.Z)(n, p) : n()
  }, [t, p]), T = c || n || d, {
    Component: C,
    play: f,
    events: Z
  } = (0, h.o)(r.enabled ? "disable" : "enable");
  return s.useEffect(() => () => f(), [r.enabled, f]), (0, i.jsx)(ec.Z, {
    onChange: N,
    onCameraUnavailable: g,
    hasPermission: o,
    channelLimit: _,
    channelLimitReached: E,
    ...r,
    enabled: !l && r.enabled,
    children: e => {
      let {
        unavailable: t,
        active: n,
        label: s,
        iconComponent: l,
        ...r
      } = e, o = (0, i.jsx)(C, {
        size: "custom",
        width: 20,
        height: 20,
        className: a()(eD.buttonIcon, {
          [eD.withText]: !T
        }),
        color: "currentColor"
      });
      return (0, i.jsx)(I.Popout, {
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, i.jsx)(D.Z, {
            onClose: t
          })
        },
        position: "top",
        align: "center",
        animation: I.Popout.Animation.FADE,
        children: (e, l) => {
          let {
            onClick: c,
            ...u
          } = e, {
            isShown: d
          } = l;
          return (0, i.jsx)(I.Tooltip, {
            text: s,
            children: e => (0, i.jsx)(I.Button, {
              ...r,
              ...e,
              ...u,
              onClick: t => {
                var n;
                r.onClick(t), null === (n = e.onClick) || void 0 === n || n.call(e), d && c(t)
              },
              onMouseEnter: () => {
                var t, n;
                null === (t = e.onMouseEnter) || void 0 === t || t.call(e), null === (n = u.onMouseEnter) || void 0 === n || n.call(u), Z.onMouseEnter()
              },
              onMouseLeave: () => {
                var t;
                null === (t = e.onMouseLeave) || void 0 === t || t.call(e), Z.onMouseLeave()
              },
              onContextMenu: t => {
                var n;
                c(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e)
              },
              size: I.Button.Sizes.SMALL,
              className: a()(eD.button, eD.buttonColor, {
                [eD.buttonActive]: n,
                [eD.fauxDisabled]: t,
                [eD.disabled]: r.disabled
              }),
              innerClassName: eD.buttonContents,
              wrapperClassName: eD.button,
              fullWidth: !0,
              children: T ? o : (0, i.jsxs)(eS.Z, {
                align: eS.Z.Align.CENTER,
                children: [o, eP.Z.Messages.VIDEO]
              })
            })
          })
        }
      })
    }
  })
}

function ek(e) {
  let {
    channel: t,
    enableActivities: n
  } = e, s = (0, S.bp)(), {
    analyticsLocations: l
  } = (0, M.ZP)(), r = s === ex.IlC.POPOUT, o = (0, v.KF)(t.id), c = (0, v.g5)(o), [E] = (0, u.e7)([A.ZP], () => null != t.id && "" !== t.id ? A.ZP.getEmbeddedActivitiesForChannel(t.id) : A.i6), {
    userInActivity: h
  } = (0, u.cj)([A.ZP], () => ({
    userInActivity: null != A.ZP.getSelfEmbeddedActivityForChannel(t.id)
  })), _ = (0, C.O)(), m = (0, Z.a)(), g = o !== v.jy.CAN_LAUNCH, {
    Component: p,
    events: N
  } = (0, d.s)();
  return n ? (0, i.jsx)(I.Tooltip, {
    text: c,
    children: e => (0, i.jsxs)(I.Button, {
      ...e,
      fullWidth: !0,
      size: I.Button.Sizes.SMALL,
      ...N,
      onClick: () => {
        var n;
        N.onClick(), (0, R.Z)({
          channel: t,
          guildId: t.guild_id,
          locationObject: _.location,
          openInPopout: r,
          analyticsLocations: l,
          opensAppLauncherModal: !0
        }), null === (n = e.onClick) || void 0 === n || n.call(e)
      },
      onMouseEnter: () => {
        var t;
        N.onMouseEnter(), null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
      },
      onMouseLeave: () => {
        var t;
        N.onMouseLeave(), null == e || null === (t = e.onMouseLeave) || void 0 === t || t.call(e)
      },
      disabled: g,
      className: a()(eD.button, eD.buttonColor, {
        [eD.buttonActive]: h || null != E,
        [eD.disabled]: g
      }),
      innerClassName: eD.buttonContents,
      wrapperClassName: eD.button,
      children: [m ? (0, i.jsx)(O.A, {
        top: -1,
        right: -1
      }) : null, (0, i.jsx)(p, {
        size: "sm",
        color: "currentColor",
        className: eD.buttonIcon
      })]
    })
  }) : null
}

function eB(e) {
  let t, {
      channel: n,
      canGoLive: l,
      enableActivities: r,
      disabled: o
    } = e,
    c = (0, u.e7)([eN.default], () => eN.default.getCurrentUser()),
    d = (0, u.Wu)([eu.Z], () => eu.Z.getAllActiveStreams()),
    h = (0, ei.Z)(n),
    _ = n.getGuildId(),
    m = (0, u.cj)([A.ZP], () => null != A.ZP.getSelfEmbeddedActivityForChannel(n.id)),
    g = (0, Y.Z)(n),
    p = s.useCallback(() => {
      (0, er.Z)(_, n.id, ex.jXE.ACTIVITY_PANEL)
    }, [_, n.id]),
    N = d.find(e => e.ownerId === (null == c ? void 0 : c.id)),
    T = (0, es.E)(n, c, d);
  t = null == N ? l ? p : ea.Z : () => (0, w.Z)(N);
  let C = null != N || T.length > 0,
    S = h ? eP.Z.Messages.SHARE_YOUR_SCREEN : eP.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE,
    f = m || r || g,
    Z = null != N,
    {
      Component: v,
      events: L,
      play: O
    } = (0, E.P)(Z ? "disable" : "enable");
  s.useEffect(() => () => O(), [O, Z]);
  let R = (0, i.jsx)(v, {
    color: "currentColor",
    className: a()(eD.buttonIcon, {
      [eD.withText]: !f
    })
  });
  return (0, i.jsx)(I.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(es.Z, {
        channel: n,
        currentUser: c,
        activeStreams: d,
        onClose: t,
        handleGoLive: l ? p : ea.Z
      })
    },
    position: "top",
    align: "center",
    animation: I.Popout.Animation.FADE,
    children: e => {
      let {
        onClick: n,
        onMouseEnter: s,
        ...l
      } = e;
      return (0, i.jsx)(I.Tooltip, {
        text: S,
        children: e => (0, i.jsx)(I.Button, {
          ...e,
          size: I.Button.Sizes.SMALL,
          onClick: i => {
            var s;
            C ? n(i) : t(), null === (s = e.onClick) || void 0 === s || s.call(e)
          },
          disabled: !h || o,
          className: a()(eD.button, eD.buttonColor, {
            [eD.buttonActive]: null != N,
            [eD.disabled]: !h || o
          }),
          ...C ? l : null,
          onMouseEnter: () => {
            var t;
            null == s || s(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e), L.onMouseEnter()
          },
          onMouseLeave: () => {
            var t;
            null === (t = e.onMouseLeave) || void 0 === t || t.call(e), L.onMouseLeave()
          },
          innerClassName: eD.buttonContents,
          wrapperClassName: eD.button,
          children: f ? R : (0, i.jsxs)(eS.Z, {
            align: eS.Z.Align.CENTER,
            children: [R, eP.Z.Messages.GO_LIVE_SHARE_SCREEN]
          })
        })
      })
    }
  })
}
class eH extends s.PureComponent {
  renderConnectionStatus() {
    let e;
    let {
      channel: t,
      guild: n,
      rtcConnectionQuality: s,
      rtcConnectionState: l,
      rtcConnectionLastPing: a,
      hasVideo: r,
      isBroadcasting: o
    } = this.props;
    if (null == t) return null;
    let u = (0, b.F6)(t, eN.default, ep.Z);
    return null != n ? (e = ex.Z5c.CHANNEL(n.id, t.id), u = "".concat(u, " / ").concat(n.name)) : e = ex.Z5c.CHANNEL(ex.ME, t.id), o && t.isBroadcastChannel() && (u = eP.Z.Messages.BROADCASTING), (0, i.jsx)(F.Z, {
      channelId: t.id,
      quality: s,
      state: l,
      lastPing: a,
      hasVideo: r,
      children: (0, i.jsx)(I.FocusRing, {
        children: (0, i.jsx)(c.rU, {
          to: e,
          onClick: this.handleChannelLinkClick,
          onContextMenu: this.handleChannelLinkContextMenu,
          children: (0, i.jsx)(ef.Z, {
            className: eD.channel,
            children: u
          })
        })
      })
    })
  }
  renderNoiseCancellation() {
    let {
      noiseCancellationActive: e,
      noiseCancellationError: t,
      hasLayers: n,
      remoteVoiceState: s,
      channel: l,
      voiceStates: a
    } = this.props;
    return null != s ? null : (null == l ? void 0 : l.isGuildStageVoice()) && !(null != a.find(e => e.user.id === ed.default.getId() && (0, $.gf)(e.voiceState) === $.xO.ON_STAGE)) && (0, X.U5)(l.id) ? (0, i.jsx)(eG, {}) : !n && t ? (0, i.jsx)(I.Tooltip, {
      text: eP.Z.Messages.NOISE_CANCELLATION_CPU_OVERUSE,
      tooltipClassName: eD.noiseCancellationTooltip,
      forceOpen: !0,
      children: e => {
        let {
          "aria-label": t
        } = e;
        return (0, i.jsx)(eA.Z, {
          "aria-label": t,
          tooltipText: null,
          disabled: !0,
          icon: I.WaveformSlashIcon
        })
      }
    }) : (0, i.jsx)(I.Popout, {
      position: "top",
      align: "center",
      renderPopout: () => (0, i.jsx)(eU, {}),
      children: (t, n) => {
        let {
          isShown: s
        } = n;
        return (0, i.jsx)(eV, {
          popoutProps: t,
          isShown: s,
          noiseCancellationActive: e
        })
      }
    }, "krisp-popout")
  }
  renderVoiceStates() {
    let {
      channel: e,
      voiceStates: t,
      showVoiceStates: n
    } = this.props;
    return null != e && n && 0 !== t.length ? (0, i.jsx)(eR.Z, {
      voiceStates: t,
      channel: e,
      className: eD.voiceUsers
    }) : null
  }
  renderChannelButtons() {
    let {
      channel: e,
      canGoLive: t,
      remoteVoiceState: n,
      enableActivities: s,
      voiceStates: l,
      selfStream: r,
      isPrivateChannelWithEnabledActivities: o
    } = this.props;
    if (null == e || null != n) return null;
    let c = ed.default.getId();
    if (e.isGuildStageVoice()) {
      if (!(0, q.tu)(e.guild_id) || !t) return null;
      let n = l.find(e => e.user.id === c);
      if (null == n || n.voiceState.suppress) return null
    }
    let u = (e.isGuildVoice() || o) && s,
      {
        reachedLimit: d
      } = (0, en.t)(e),
      E = (0, q.xJ)(e.id);
    return (0, i.jsxs)("div", {
      className: eD.actionButtons,
      children: [(0, i.jsx)(ew, {
        channel: e,
        enableActivities: u,
        disabled: !E && d
      }), (0, i.jsx)(eB, {
        channel: e,
        canGoLive: t,
        enableActivities: u,
        disabled: e.isGuildStageVoice() && (E && null == r || !E && d)
      }), (0, i.jsxs)(i.Fragment, {
        children: [u ? (0, i.jsx)(ek, {
          channel: e,
          enableActivities: s
        }) : null, (0, Y.Z)(e) ? (0, i.jsx)(z.Z, {
          className: a()(eD.button, eD.buttonColor),
          innerClassName: eD.buttonContents,
          iconClassName: eD.buttonIcon,
          channel: e
        }) : null]
      })]
    })
  }
  render() {
    let {
      channel: e,
      noiseCancellationSupported: t,
      shouldShowVoicePanelIntroduction: n
    } = this.props;
    return null == e ? null : (0, i.jsx)(I.Popout, {
      renderPopout: this.renderVoicePanelIntroduction,
      position: "top",
      align: "center",
      animation: I.Popout.Animation.TRANSLATE,
      shouldShow: n,
      children: () => (0, i.jsxs)("div", {
        className: eD.container,
        children: [(0, i.jsxs)(eS.Z, {
          className: eD.connection,
          align: eS.Z.Align.CENTER,
          children: [(0, i.jsx)("div", {
            className: eD.inner,
            children: this.renderConnectionStatus()
          }), (0, i.jsxs)(eS.Z, {
            grow: 0,
            shrink: 0,
            children: [t ? this.renderNoiseCancellation() : null, (0, i.jsx)(eO.Z, {
              channel: e
            })]
          })]
        }), this.renderVoiceStates(), this.renderChannelButtons()]
      })
    })
  }
  constructor(...e) {
    super(...e), ey(this, "canScreenshare", () => {
      let {
        channel: e,
        canGoLive: t
      } = this.props;
      return t && null != e && null != e.getGuildId()
    }), ey(this, "handleNoiseCancellationClicked", () => {
      let {
        noiseCancellationActive: e
      } = this.props;
      m.Z.setNoiseCancellation(!e, {
        section: ex.jXE.NOISE_CANCELLATION_POPOUT
      })
    }), ey(this, "handleGoLive", () => {
      let {
        guild: e,
        channel: t
      } = this.props, n = null != t ? t.getGuildId() : null != e ? e.id : null;
      if (null != n)(0, er.Z)(n, t.id, ex.Sbl.VOICE_PANEL)
    }), ey(this, "handleChannelLinkClick", e => {
      var t;
      let {
        guild: n,
        channel: i
      } = this.props;
      o()(null != i, "Channel is null during navigation click"), e.stopPropagation(), p.Z.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : ex.ME, i.id)
    }), ey(this, "handleChannelLinkContextMenu", e => {
      let {
        channel: t
      } = this.props;
      (0, g.jW)(e, async () => {
        let {
          default: e
        } = await n.e("56944").then(n.bind(n, 600830));
        return n => (0, i.jsx)(e, {
          ...n,
          channel: t
        })
      })
    }), ey(this, "handleCloseVoicePanelIntroduction", () => {
      k.Kw(eM.v.VOICE_PANEL_INTRODUCTION)
    }), ey(this, "renderVoicePanelIntroduction", () => (0, i.jsxs)("div", {
      className: a()(eD.voicePanelIntroductionWrapper, "theme-light"),
      children: [(0, i.jsx)(I.Heading, {
        className: eD.voicePanelIntroductionHeader,
        variant: "heading-md/semibold",
        children: eP.Z.Messages.VOICE_PANEL_INTRODUCTION_HEADER
      }), (0, i.jsx)(I.Text, {
        className: eD.voicePanelIntroductionText,
        variant: "text-sm/normal",
        children: eP.Z.Messages.VOICE_PANEL_INTRODUCTION_TEXT
      }), (0, i.jsx)(I.Button, {
        className: eD.voicePanelIntroductionButton,
        color: I.Button.Colors.BRAND,
        onClick: this.handleCloseVoicePanelIntroduction,
        children: eP.Z.Messages.VOICE_PANEL_INTRODUCTION_CLOSE
      })]
    }))
  }
}

function eV(e) {
  let {
    popoutProps: t,
    isShown: n,
    noiseCancellationActive: l
  } = e, {
    play: a,
    Component: r,
    events: o
  } = (0, _.P)(l ? "disable" : "enable");
  return s.useEffect(() => () => a(), [l, a]), (0, i.jsx)(eA.Z, {
    ...t,
    onMouseEnter: () => {
      var e;
      null === (e = t.onMouseEnter) || void 0 === e || e.call(t), o.onMouseEnter()
    },
    onMouseLeave: () => {
      o.onMouseLeave()
    },
    tooltipClassName: eD.noiseCancellationTooltip,
    tooltipText: n ? null : eP.Z.Messages.NOISE_CANCELLATION_TOOLTIP,
    icon: r
  })
}
t.Z = (0, T.Z)(function(e) {
  let t = (0, j.Z)(),
    n = (0, u.e7)([y.Z], () => y.Z.getAwaitingRemoteSessionInfo()),
    l = (0, u.e7)([eN.default], () => eN.default.getCurrentUser()),
    {
      channelId: a,
      ...r
    } = (0, u.cj)([eg.Z], () => null != t ? {
      channelId: t.channelId,
      rtcConnectionQuality: ex.IE4.FINE,
      rtcConnectionState: ex.hes.RTC_CONNECTED,
      rtcConnectionLastPing: 0
    } : {
      channelId: eg.Z.getChannelId(),
      rtcConnectionQuality: eg.Z.getQuality(),
      rtcConnectionState: eg.Z.getState(),
      rtcConnectionLastPing: eg.Z.getLastPing()
    }),
    o = (0, u.e7)([eE.Z], () => eE.Z.getChannel(a), [a]),
    c = null == o ? void 0 : o.getGuildId(),
    d = (0, u.e7)([eh.Z], () => eh.Z.getGuild(c), [c]),
    E = (0, u.cj)([eI.Z], () => ({
      noiseCancellationSupported: eI.Z.isNoiseCancellationSupported(),
      noiseCancellationActive: eI.Z.getNoiseCancellation(),
      noiseCancellationError: eI.Z.isNoiseCancellationError(),
      canGoLive: (0, G.Z)(eI.Z)
    })),
    h = (0, u.e7)([eI.Z, B.Z], () => B.Z.hasHotspot(eM.v.VOICE_PANEL_INTRODUCTION) && (0, eL.EO)(l) && !eI.Z.isInteractionRequired() && !(null == o ? void 0 : o.isGuildStageVoice())),
    _ = (0, u.e7)([eT.Z], () => null != a && eT.Z.hasVideo(a), [a]),
    m = (0, u.e7)([eu.Z], () => eu.Z.getCurrentUserActiveStream()),
    g = (0, u.e7)([e_.Z], () => e_.Z.hasLayers()),
    p = (0, u.e7)([H.Z], () => H.Z.isViewingRoles(c)),
    N = (0, u.e7)([em.Z], () => p && !em.Z.can(ex.Plq.VIEW_CHANNEL, o), [p, o]),
    T = ee.Fg.useSetting(),
    [C, S, A] = (0, u.Wu)([eC.ZP, W.Z], () => (null == o ? void 0 : o.isGuildStageVoice()) ? [W.Z.getMutableParticipants(o.id, K.pV.SPEAKER), W.Z.getParticipantsVersion(o.id), null] : [null, null, null != o ? eC.ZP.getVoiceStatesForChannel(o) : null], [o]),
    Z = s.useMemo(() => {
      var e, t;
      return null !== (t = null !== (e = null == C ? void 0 : C.map(e => {
        let {
          user: t,
          userNick: n,
          voiceState: i
        } = e;
        return {
          user: t,
          nick: n,
          voiceState: i
        }
      })) && void 0 !== e ? e : A) && void 0 !== t ? t : []
    }, [C, S, A]),
    [v, O] = s.useState(!1);
  s.useEffect(() => {
    (p || N) && O(!1)
  }, [p, N, O]);
  let {
    analyticsLocations: R
  } = (0, M.ZP)(x.Z.RTC_PANEL), D = (0, f.Z)(null != c ? c : ex.lds, null == o ? void 0 : o.id), b = (0, L.Z)(null == o ? void 0 : o.id), w = (0, P.ZP)();
  return (0, i.jsx)(M.Gt, {
    value: R,
    children: (0, i.jsxs)("div", {
      className: eD.wrapper,
      children: [null != t || null != n ? (0, i.jsx)(U.Z, {
        voiceState: t,
        awaitingRemoteSessionInfo: n
      }) : null, (0, i.jsx)(eH, {
        ...e,
        ...E,
        ...r,
        enableActivities: D,
        remoteVoiceState: t,
        guild: d,
        channel: o,
        hasVideo: _,
        selfStream: m,
        hasLayers: g,
        voiceStates: Z,
        showVoiceStates: T,
        shouldShowVoicePanelIntroduction: h,
        isPrivateChannelWithEnabledActivities: b,
        isBroadcasting: w
      }), !v && p && null != c ? (0, i.jsxs)("div", {
        className: eD.viewAsRolesWarning,
        children: [(0, i.jsx)(I.Text, {
          variant: "text-sm/normal",
          className: eD.viewAsRolesWarningText,
          children: N ? eP.Z.Messages.VIEW_AS_ROLES_HIDDEN_VC_WARNING : eP.Z.Messages.VIEW_AS_ROLES_VOICE_WARNING
        }), (0, i.jsx)(I.Button, {
          className: eD.viewAsRolesWarningButton,
          size: I.Button.Sizes.MIN,
          onClick: () => {
            O(!0)
          },
          children: eP.Z.Messages.DISMISS
        })]
      }) : null]
    })
  })
})