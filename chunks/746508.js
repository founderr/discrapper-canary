n(47120);
var s = n(735250),
  i = n(470079),
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
  T = n(239091),
  g = n(925549),
  p = n(284056),
  N = n(730749),
  S = n(2052),
  C = n(40851),
  A = n(317381),
  f = n(596040),
  Z = n(588580),
  L = n(374065),
  O = n(451576),
  v = n(938655),
  R = n(403404),
  P = n(100527),
  x = n(906732),
  M = n(158631),
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
  es = n(189771),
  ei = n(544384),
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
  eT = n(19780),
  eg = n(699516),
  ep = n(594174),
  eN = n(979651),
  eS = n(938475),
  eC = n(285952),
  eA = n(976401),
  ef = n(333454),
  eZ = n(626135),
  eL = n(63063),
  eO = n(51144),
  ev = n(594117),
  eR = n(226323),
  eP = n(981631),
  ex = n(190378),
  eM = n(689938),
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
  eZ.default.track(eP.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      section: eP.jXE.NOISE_CANCELLATION_POPOUT
    }
  })
}

function eU() {
  let e = i.useRef(null);
  (0, I.useFocusLock)(e), i.useEffect(() => {
    eZ.default.track(eP.rMx.OPEN_POPOUT, {
      type: eP.jXE.NOISE_CANCELLATION_POPOUT
    })
  }, []);
  let t = (0, u.e7)([eI.Z], () => eI.Z.getNoiseCancellation());
  return (0, s.jsxs)("div", {
    ref: e,
    className: eD.noiseCancellationPopout,
    children: [(0, s.jsx)(I.FormSwitch, {
      hideBorder: !0,
      className: eb.marginBottom4,
      value: t,
      onChange: () => m.Z.setNoiseCancellation(!t, {
        section: eP.jXE.NOISE_CANCELLATION_POPOUT
      }),
      note: eM.Z.Messages.NOISE_CANCELLATION_POPOUT_DESCRIPTION,
      children: eM.Z.Messages.NOISE_CANCELLATION_POPOUT_HEADER
    }), (0, s.jsx)(p.Z, {
      title: eM.Z.Messages.NOISE_CANCELLATION_POPOUT_MIC_TEST_TITLE,
      notchBackground: p._.BLACK,
      buttonTest: eM.Z.Messages.NOISE_CANCELLATION_POPOUT_TEST,
      buttonStop: eM.Z.Messages.NOISE_CANCELLATION_POPOUT_STOP,
      buttonClassName: eD.micTestButton,
      buttonColor: I.Button.Colors.PRIMARY,
      location: {
        section: eP.jXE.NOISE_CANCELLATION_POPOUT
      }
    }), (0, s.jsx)(I.FormTitle, {
      tag: I.FormTitleTags.H5,
      className: a()(eb.marginBottom8, eb.marginTop20),
      children: eM.Z.Messages.NOISE_CANCELLATION_POPOUT_FOOTER
    }), (0, s.jsxs)(eC.Z, {
      justify: eC.Z.Justify.BETWEEN,
      className: eD.__invalid_footer,
      children: [(0, s.jsx)(I.Anchor, {
        href: eP.EYA.KRISP,
        onClick: e => ej(e),
        children: (0, s.jsx)("div", {
          className: eD.krispLogo
        })
      }), (0, s.jsx)(I.Anchor, {
        href: eL.Z.getArticleURL(eP.BhN.NOISE_SUPPRESSION),
        className: eD.krispLink,
        onClick: e => ej(e),
        children: eM.Z.Messages.LEARN_MORE
      })]
    })]
  })
}

function eG() {
  let e = (0, u.e7)([J.Z], () => J.Z.isMuted()),
    t = e ? eM.Z.Messages.STAGE_MUSIC_UNMUTE : eM.Z.Messages.STAGE_MUSIC_MUTE;
  return (0, s.jsx)(eA.Z, {
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
  } = e, r = (0, et.Z)(), o = (0, es.Z)(t), c = (0, u.cj)([A.ZP], () => null != A.ZP.getSelfEmbeddedActivityForChannel(t.id)), d = (0, Y.Z)(t), {
    reachedLimit: E,
    limit: _
  } = (0, en.Z)(t), T = i.useCallback(() => {
    (0, el.Z)()
  }, []), g = (0, C.bp)(), p = i.useCallback(e => {
    if (eI.Z.isVideoEnabled() === e) return;
    let n = () => {
      var n;
      m.Z.setVideoEnabled(e), e && (0, V.uL)(eP.Z5c.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : eP.ME, t.id))
    };
    e ? (0, eo.Z)(n, g) : n()
  }, [t, g]), N = c || n || d, {
    Component: S,
    play: f,
    events: Z
  } = (0, h.o)(r.enabled ? "disable" : "enable");
  return i.useEffect(() => () => f(), [r.enabled, f]), (0, s.jsx)(ec.Z, {
    onChange: p,
    onCameraUnavailable: T,
    hasPermission: o,
    channelLimit: _,
    channelLimitReached: E,
    ...r,
    enabled: !l && r.enabled,
    children: e => {
      let {
        unavailable: t,
        active: n,
        label: i,
        iconComponent: l,
        ...r
      } = e, o = (0, s.jsx)(S, {
        size: "custom",
        width: 20,
        height: 20,
        className: a()(eD.buttonIcon, {
          [eD.withText]: !N
        }),
        color: "currentColor"
      });
      return (0, s.jsx)(I.Popout, {
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, s.jsx)(D.Z, {
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
          return (0, s.jsx)(I.Tooltip, {
            text: i,
            children: e => (0, s.jsx)(I.Button, {
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
              children: N ? o : (0, s.jsxs)(eC.Z, {
                align: eC.Z.Align.CENTER,
                children: [o, eM.Z.Messages.VIDEO]
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
  } = e, i = (0, C.bp)(), {
    analyticsLocations: l
  } = (0, x.ZP)(), r = i === eP.IlC.POPOUT, o = (0, L.KF)(t.id), c = (0, L.g5)(o), [E] = (0, u.e7)([A.ZP], () => null != t.id && "" !== t.id ? A.ZP.getEmbeddedActivitiesForChannel(t.id) : A.i6), {
    userInActivity: h
  } = (0, u.cj)([A.ZP], () => ({
    userInActivity: null != A.ZP.getSelfEmbeddedActivityForChannel(t.id)
  })), _ = (0, S.O)(), m = (0, Z.a)(), T = o !== L.jy.CAN_LAUNCH, {
    Component: g,
    events: p
  } = (0, d.s)();
  return n ? (0, s.jsx)(I.Tooltip, {
    text: c,
    children: e => (0, s.jsxs)(I.Button, {
      ...e,
      fullWidth: !0,
      size: I.Button.Sizes.SMALL,
      ...p,
      onClick: () => {
        var n;
        p.onClick(), (0, R.Z)({
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
        p.onMouseEnter(), null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
      },
      onMouseLeave: () => {
        var t;
        p.onMouseLeave(), null == e || null === (t = e.onMouseLeave) || void 0 === t || t.call(e)
      },
      disabled: T,
      className: a()(eD.button, eD.buttonColor, {
        [eD.buttonActive]: h || null != E,
        [eD.disabled]: T
      }),
      innerClassName: eD.buttonContents,
      wrapperClassName: eD.button,
      children: [m ? (0, s.jsx)(v.A, {
        top: -1,
        right: -1
      }) : null, (0, s.jsx)(g, {
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
    c = (0, u.e7)([ep.default], () => ep.default.getCurrentUser()),
    d = (0, u.Wu)([eu.Z], () => eu.Z.getAllActiveStreams()),
    h = (0, es.Z)(n),
    _ = n.getGuildId(),
    m = (0, u.cj)([A.ZP], () => null != A.ZP.getSelfEmbeddedActivityForChannel(n.id)),
    T = (0, Y.Z)(n),
    g = i.useCallback(() => {
      (0, er.Z)(_, n.id, eP.jXE.ACTIVITY_PANEL)
    }, [_, n.id]),
    p = d.find(e => e.ownerId === (null == c ? void 0 : c.id)),
    N = (0, ei.E)(n, c, d);
  t = null == p ? l ? g : ea.Z : () => (0, w.Z)(p);
  let S = null != p || N.length > 0,
    C = h ? eM.Z.Messages.SHARE_YOUR_SCREEN : eM.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE,
    f = m || r || T,
    Z = null != p,
    {
      Component: L,
      events: O,
      play: v
    } = (0, E.P)(Z ? "disable" : "enable");
  i.useEffect(() => () => v(), [v, Z]);
  let R = (0, s.jsx)(L, {
    color: "currentColor",
    className: a()(eD.buttonIcon, {
      [eD.withText]: !f
    })
  });
  return (0, s.jsx)(I.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, s.jsx)(ei.Z, {
        channel: n,
        currentUser: c,
        activeStreams: d,
        onClose: t,
        handleGoLive: l ? g : ea.Z
      })
    },
    position: "top",
    align: "center",
    animation: I.Popout.Animation.FADE,
    children: e => {
      let {
        onClick: n,
        onMouseEnter: i,
        ...l
      } = e;
      return (0, s.jsx)(I.Tooltip, {
        text: C,
        children: e => (0, s.jsx)(I.Button, {
          ...e,
          size: I.Button.Sizes.SMALL,
          onClick: s => {
            var i;
            S ? n(s) : t(), null === (i = e.onClick) || void 0 === i || i.call(e)
          },
          disabled: !h || o,
          className: a()(eD.button, eD.buttonColor, {
            [eD.buttonActive]: null != p,
            [eD.disabled]: !h || o
          }),
          ...S ? l : null,
          onMouseEnter: () => {
            var t;
            null == i || i(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e), O.onMouseEnter()
          },
          onMouseLeave: () => {
            var t;
            null === (t = e.onMouseLeave) || void 0 === t || t.call(e), O.onMouseLeave()
          },
          innerClassName: eD.buttonContents,
          wrapperClassName: eD.button,
          children: f ? R : (0, s.jsxs)(eC.Z, {
            align: eC.Z.Align.CENTER,
            children: [R, eM.Z.Messages.GO_LIVE_SHARE_SCREEN]
          })
        })
      })
    }
  })
}
class eH extends i.PureComponent {
  renderConnectionStatus() {
    let e;
    let {
      channel: t,
      guild: n,
      rtcConnectionQuality: i,
      rtcConnectionState: l,
      rtcConnectionLastPing: a,
      hasVideo: r,
      isBroadcasting: o
    } = this.props;
    if (null == t) return null;
    let u = (0, b.F6)(t, ep.default, eg.Z);
    return null != n ? (e = eP.Z5c.CHANNEL(n.id, t.id), u = "".concat(u, " / ").concat(n.name)) : e = eP.Z5c.CHANNEL(eP.ME, t.id), o && t.isBroadcastChannel() && (u = eM.Z.Messages.BROADCASTING), (0, s.jsx)(F.Z, {
      channelId: t.id,
      quality: i,
      state: l,
      lastPing: a,
      hasVideo: r,
      children: (0, s.jsx)(I.FocusRing, {
        children: (0, s.jsx)(c.rU, {
          to: e,
          onClick: this.handleChannelLinkClick,
          onContextMenu: this.handleChannelLinkContextMenu,
          children: (0, s.jsx)(ef.Z, {
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
      remoteVoiceState: i,
      channel: l,
      voiceStates: a
    } = this.props;
    return null != i ? null : (null == l ? void 0 : l.isGuildStageVoice()) && !(null != a.find(e => e.user.id === ed.default.getId() && (0, $.gf)(e.voiceState) === $.xO.ON_STAGE)) && (0, X.U5)(l.id) ? (0, s.jsx)(eG, {}) : !n && t ? (0, s.jsx)(I.Tooltip, {
      text: eM.Z.Messages.NOISE_CANCELLATION_CPU_OVERUSE,
      tooltipClassName: eD.noiseCancellationTooltip,
      forceOpen: !0,
      children: e => {
        let {
          "aria-label": t
        } = e;
        return (0, s.jsx)(eA.Z, {
          "aria-label": t,
          tooltipText: null,
          disabled: !0,
          icon: I.WaveformSlashIcon
        })
      }
    }) : (0, s.jsx)(I.Popout, {
      position: "top",
      align: "center",
      renderPopout: () => (0, s.jsx)(eU, {}),
      children: (t, n) => {
        let {
          isShown: i
        } = n;
        return (0, s.jsx)(eV, {
          popoutProps: t,
          isShown: i,
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
    return null != e && n && 0 !== t.length ? (0, s.jsx)(eR.Z, {
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
      enableActivities: i,
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
    let u = (e.isGuildVoice() || o) && i,
      {
        reachedLimit: d
      } = (0, en.t)(e),
      E = (0, q.xJ)(e.id);
    return (0, s.jsxs)("div", {
      className: eD.actionButtons,
      children: [(0, s.jsx)(ew, {
        channel: e,
        enableActivities: u,
        disabled: !E && d
      }), (0, s.jsx)(eB, {
        channel: e,
        canGoLive: t,
        enableActivities: u,
        disabled: e.isGuildStageVoice() && (E && null == r || !E && d)
      }), (0, s.jsxs)(s.Fragment, {
        children: [u ? (0, s.jsx)(ek, {
          channel: e,
          enableActivities: i
        }) : null, (0, Y.Z)(e) ? (0, s.jsx)(z.Z, {
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
    return null == e ? null : (0, s.jsx)(I.Popout, {
      renderPopout: this.renderVoicePanelIntroduction,
      position: "top",
      align: "center",
      animation: I.Popout.Animation.TRANSLATE,
      shouldShow: n,
      children: () => (0, s.jsxs)("div", {
        className: eD.container,
        children: [(0, s.jsxs)(eC.Z, {
          className: eD.connection,
          align: eC.Z.Align.CENTER,
          children: [(0, s.jsx)("div", {
            className: eD.inner,
            children: this.renderConnectionStatus()
          }), (0, s.jsxs)(eC.Z, {
            grow: 0,
            shrink: 0,
            children: [t ? this.renderNoiseCancellation() : null, (0, s.jsx)(ev.Z, {
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
        section: eP.jXE.NOISE_CANCELLATION_POPOUT
      })
    }), ey(this, "handleGoLive", () => {
      let {
        guild: e,
        channel: t
      } = this.props, n = null != t ? t.getGuildId() : null != e ? e.id : null;
      if (null != n)(0, er.Z)(n, t.id, eP.Sbl.VOICE_PANEL)
    }), ey(this, "handleChannelLinkClick", e => {
      var t;
      let {
        guild: n,
        channel: s
      } = this.props;
      o()(null != s, "Channel is null during navigation click"), e.stopPropagation(), g.Z.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eP.ME, s.id)
    }), ey(this, "handleChannelLinkContextMenu", e => {
      let {
        channel: t
      } = this.props;
      (0, T.jW)(e, async () => {
        let {
          default: e
        } = await n.e("56944").then(n.bind(n, 600830));
        return n => (0, s.jsx)(e, {
          ...n,
          channel: t
        })
      })
    }), ey(this, "handleCloseVoicePanelIntroduction", () => {
      k.Kw(ex.v.VOICE_PANEL_INTRODUCTION)
    }), ey(this, "renderVoicePanelIntroduction", () => (0, s.jsxs)("div", {
      className: a()(eD.voicePanelIntroductionWrapper, "theme-light"),
      children: [(0, s.jsx)(I.Heading, {
        className: eD.voicePanelIntroductionHeader,
        variant: "heading-md/semibold",
        children: eM.Z.Messages.VOICE_PANEL_INTRODUCTION_HEADER
      }), (0, s.jsx)(I.Text, {
        className: eD.voicePanelIntroductionText,
        variant: "text-sm/normal",
        children: eM.Z.Messages.VOICE_PANEL_INTRODUCTION_TEXT
      }), (0, s.jsx)(I.Button, {
        className: eD.voicePanelIntroductionButton,
        color: I.Button.Colors.BRAND,
        onClick: this.handleCloseVoicePanelIntroduction,
        children: eM.Z.Messages.VOICE_PANEL_INTRODUCTION_CLOSE
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
  return i.useEffect(() => () => a(), [l, a]), (0, s.jsx)(eA.Z, {
    ...t,
    onMouseEnter: () => {
      var e;
      null === (e = t.onMouseEnter) || void 0 === e || e.call(t), o.onMouseEnter()
    },
    onMouseLeave: () => {
      o.onMouseLeave()
    },
    tooltipClassName: eD.noiseCancellationTooltip,
    tooltipText: n ? null : eM.Z.Messages.NOISE_CANCELLATION_TOOLTIP,
    icon: r
  })
}
t.Z = (0, N.Z)(function(e) {
  let t = (0, j.Z)(),
    n = (0, u.e7)([y.Z], () => y.Z.getAwaitingRemoteSessionInfo()),
    l = (0, u.e7)([ep.default], () => ep.default.getCurrentUser()),
    {
      channelId: a,
      ...r
    } = (0, u.cj)([eT.Z], () => null != t ? {
      channelId: t.channelId,
      rtcConnectionQuality: eP.IE4.FINE,
      rtcConnectionState: eP.hes.RTC_CONNECTED,
      rtcConnectionLastPing: 0
    } : {
      channelId: eT.Z.getChannelId(),
      rtcConnectionQuality: eT.Z.getQuality(),
      rtcConnectionState: eT.Z.getState(),
      rtcConnectionLastPing: eT.Z.getLastPing()
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
    h = (0, u.e7)([eI.Z, B.Z], () => B.Z.hasHotspot(ex.v.VOICE_PANEL_INTRODUCTION) && (0, eO.EO)(l) && !eI.Z.isInteractionRequired() && !(null == o ? void 0 : o.isGuildStageVoice())),
    _ = (0, u.e7)([eN.Z], () => null != a && eN.Z.hasVideo(a), [a]),
    m = (0, u.e7)([eu.Z], () => eu.Z.getCurrentUserActiveStream()),
    T = (0, u.e7)([e_.Z], () => e_.Z.hasLayers()),
    g = (0, u.e7)([H.Z], () => H.Z.isViewingRoles(c)),
    p = (0, u.e7)([em.Z], () => g && !em.Z.can(eP.Plq.VIEW_CHANNEL, o), [g, o]),
    N = ee.Fg.useSetting(),
    [S, C, A] = (0, u.Wu)([eS.ZP, W.Z], () => (null == o ? void 0 : o.isGuildStageVoice()) ? [W.Z.getMutableParticipants(o.id, K.pV.SPEAKER), W.Z.getParticipantsVersion(o.id), null] : [null, null, null != o ? eS.ZP.getVoiceStatesForChannel(o) : null], [o]),
    Z = i.useMemo(() => {
      var e, t;
      return null !== (t = null !== (e = null == S ? void 0 : S.map(e => {
        let {
          user: t,
          userNick: n,
          voiceState: s
        } = e;
        return {
          user: t,
          nick: n,
          voiceState: s
        }
      })) && void 0 !== e ? e : A) && void 0 !== t ? t : []
    }, [S, C, A]),
    [L, v] = i.useState(!1);
  i.useEffect(() => {
    (g || p) && v(!1)
  }, [g, p, v]);
  let {
    analyticsLocations: R
  } = (0, x.ZP)(P.Z.RTC_PANEL), D = (0, f.Z)(null != c ? c : eP.lds, null == o ? void 0 : o.id), b = (0, O.Z)(null == o ? void 0 : o.id), w = (0, M.ZP)();
  return (0, s.jsx)(x.Gt, {
    value: R,
    children: (0, s.jsxs)("div", {
      className: eD.wrapper,
      children: [null != t || null != n ? (0, s.jsx)(U.Z, {
        voiceState: t,
        awaitingRemoteSessionInfo: n
      }) : null, (0, s.jsx)(eH, {
        ...e,
        ...E,
        ...r,
        enableActivities: D,
        remoteVoiceState: t,
        guild: d,
        channel: o,
        hasVideo: _,
        selfStream: m,
        hasLayers: T,
        voiceStates: Z,
        showVoiceStates: N,
        shouldShowVoicePanelIntroduction: h,
        isPrivateChannelWithEnabledActivities: b,
        isBroadcasting: w
      }), !L && g && null != c ? (0, s.jsxs)("div", {
        className: eD.viewAsRolesWarning,
        children: [(0, s.jsx)(I.Text, {
          variant: "text-sm/normal",
          className: eD.viewAsRolesWarningText,
          children: p ? eM.Z.Messages.VIEW_AS_ROLES_HIDDEN_VC_WARNING : eM.Z.Messages.VIEW_AS_ROLES_VOICE_WARNING
        }), (0, s.jsx)(I.Button, {
          className: eD.viewAsRolesWarningButton,
          size: I.Button.Sizes.MIN,
          onClick: () => {
            v(!0)
          },
          children: eM.Z.Messages.DISMISS
        })]
      }) : null]
    })
  })
})