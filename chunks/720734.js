n.d(t, {
  Z: function() {
    return eG
  }
}), n(47120), n(653041);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(442837),
  o = n(704215),
  c = n(846519),
  u = n(400354),
  d = n(652844),
  E = n(789639),
  h = n(481060),
  _ = n(355467),
  I = n(239091),
  m = n(230711),
  g = n(410575),
  p = n(941129),
  N = n(83200),
  T = n(634894),
  C = n(586902),
  S = n(515550),
  A = n(1585),
  f = n(304761),
  Z = n(865427),
  v = n(571250),
  L = n(628581),
  O = n(55311),
  R = n(575175),
  x = n(64220),
  M = n(377171),
  P = n(676035),
  D = n(427217),
  b = n(605236),
  y = n(243778),
  j = n(730417),
  U = n(524347),
  G = n(853197),
  w = n(810280),
  k = n(60762),
  B = n(258609),
  H = n(278464),
  V = n(443669),
  F = n(332473),
  Y = n(240504),
  z = n(804545),
  W = n(637906),
  K = n(39370),
  q = n(19199),
  Q = n(111653),
  X = n(866483),
  J = n(14357),
  $ = n(393333),
  ee = n(763296),
  et = n(640806),
  en = n(484459),
  ei = n(584427),
  es = n(52538),
  el = n(331187),
  ea = n(879815),
  er = n(294629),
  eo = n(314897),
  ec = n(592125),
  eu = n(819640),
  ed = n(131951),
  eE = n(19780),
  eh = n(885110),
  e_ = n(246946),
  eI = n(594174),
  em = n(78839),
  eg = n(285952),
  ep = n(546591),
  eN = n(976401),
  eT = n(333454),
  eC = n(864441),
  eS = n(626135),
  eA = n(768581),
  ef = n(572004),
  eZ = n(70956),
  ev = n(374023),
  eL = n(51144),
  eO = n(998502),
  eR = n(981631),
  ex = n(215023),
  eM = n(702512),
  eP = n(689938),
  eD = n(812118);

function eb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let ey = eO.ZP.getEnableHardwareAcceleration() ? h.AnimatedAvatar : h.Avatar,
  ej = 30 * eZ.Z.Millis.DAY;
class eU extends s.PureComponent {
  get isCopiedStreakGodlike() {
    let {
      copiedStreak: e
    } = this.state;
    return e >= 10
  }
  componentDidUpdate(e) {
    let {
      speakingWhileMuted: t,
      occluded: n
    } = e, {
      speakingWhileMuted: i,
      occluded: s
    } = this.props;
    s !== n && this.handleOccludedChanged(), i !== t && this.handleSpeakingWhileMutedChanged()
  }
  componentWillUnmount() {
    this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop()
  }
  renderCopiedSuccess() {
    let {
      copiedStreak: e
    } = this.state, t = [eP.Z.Messages.COPY_SUCCESS_1, eP.Z.Messages.COPY_SUCCESS_2, eP.Z.Messages.COPY_SUCCESS_3, eP.Z.Messages.COPY_SUCCESS_4, eP.Z.Messages.COPY_SUCCESS_5, eP.Z.Messages.COPY_SUCCESS_6, eP.Z.Messages.COPY_SUCCESS_7, eP.Z.Messages.COPY_SUCCESS_8, eP.Z.Messages.COPY_SUCCESS_9, eP.Z.Messages.COPY_SUCCESS_10, eP.Z.Messages.COPY_SUCCESS_11], n = Math.min(Math.max(0, e - 1), t.length - 1);
    return (0, i.jsx)(h.Shaker, {
      isShaking: this.isCopiedStreakGodlike,
      children: t[n]
    })
  }
  renderNameTag() {
    let e;
    let {
      hovered: t
    } = this.state, {
      customStatusActivity: n,
      userTag: s,
      currentUser: l,
      status: a
    } = this.props;
    if (null == l) return null;
    let r = eL.ZP.getName(l),
      o = null != a && a !== eR.Skl.UNKNOWN,
      c = null != n;
    return (c || o && l.isPomelo()) && (e = (0, i.jsx)(ep.Z, {
      hoverText: s,
      forceHover: t,
      children: c ? (0, i.jsx)(D.Z, {
        activity: n,
        emojiClassName: eD.emoji,
        className: eD.customStatus
      }) : eL.ZP.humanizeStatus(a)
    })), (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("div", {
        className: eD.panelTitleContainer,
        children: (0, i.jsx)(eC.Z, {
          children: r
        })
      }), (0, i.jsx)("div", {
        className: eD.panelSubtextContainer,
        children: (0, i.jsx)(eT.Z, {
          children: null != e ? e : s
        })
      })]
    })
  }
  renderAvatarWithPopout() {
    let {
      speaking: e,
      streaming: t,
      currentUser: n,
      status: s
    } = this.props;
    if (null == n) return null;
    let l = (0, eA.NZ)({
      avatarDecoration: n.avatarDecoration,
      size: (0, A.y9)(h.AvatarSizes.SIZE_32)
    });
    return (0, i.jsx)(g.Z, {
      object: eR.qAy.AVATAR,
      children: (0, i.jsx)(h.Popout, {
        renderPopout: this.renderStatusPickerPopout,
        position: "top",
        align: "left",
        animation: h.Popout.Animation.FADE,
        spacing: 14,
        fixed: !0,
        preload: () => (0, en.Z)(n.id, null == n ? void 0 : n.getAvatarURL(null, 80)),
        children: r => (0, i.jsxs)(h.Clickable, {
          ...r,
          "aria-label": eP.Z.Messages.SET_STATUS,
          className: eD.avatarWrapper,
          children: [(0, i.jsx)(ey, {
            size: h.AvatarSizes.SIZE_32,
            src: n.getAvatarURL(void 0, 32, !1),
            avatarDecoration: l,
            "aria-label": n.username,
            status: t ? eR.Skl.STREAMING : s,
            isSpeaking: e,
            className: eD.avatar
          }), (0, i.jsx)("div", {
            className: a()(eD.nameTag, {
              [eD.canCopy]: ef.wS
            }),
            children: this.renderNameTag()
          })]
        })
      })
    })
  }
  renderNameZone() {
    let {
      currentUser: e,
      dismissibleContents: t
    } = this.props;
    return null == e ? null : (0, i.jsx)(i.Fragment, {
      children: (0, i.jsx)(y.Z, {
        contentTypes: t.avatar,
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: n
          } = e;
          if (t === o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP) return (0, i.jsx)(x.Z, {
            markAsDismissed: n,
            children: () => this.renderAvatarWithPopout()
          });
          return this.renderAvatarWithPopout()
        }
      })
    })
  }
  render() {
    let {
      currentUser: e,
      selfDeaf: t,
      selfMute: n,
      awaitingRemote: s,
      serverMute: l,
      serverDeaf: a,
      suppress: r,
      dismissibleContents: c
    } = this.props, {
      shouldShowSpeakingWhileMutedTooltip: u
    } = this.state;
    return null == e ? null : (0, i.jsxs)("div", {
      className: eD.container,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [this.renderNameZone(), (0, i.jsxs)(eg.Z, {
        grow: 0,
        children: [(0, i.jsx)(ek, {
          selfMute: n,
          serverMute: l,
          suppress: r,
          awaitingRemote: s,
          tooltipText: u ? eP.Z.Messages.ACCOUNT_SPEAKING_WHILE_MUTED : (0, L.Z)(n, l, r, s),
          tooltipColor: u ? h.TooltipColors.GREEN : void 0,
          tooltipForceOpen: u || void 0,
          onMouseEnter: this.handleMouseEnterMute,
          onMouseLeave: this.handleMouseLeaveMute,
          onClick: this.handleToggleSelfMute,
          onContextMenu: this.handleInputAudioContextMenu
        }), (0, i.jsx)(eB, {
          selfDeaf: t,
          serverDeaf: a,
          onClick: this.handleToggleSelfDeaf,
          onContextMenu: this.handleOutputAudioContextMenu,
          awaitingRemote: s
        }), (0, i.jsx)(y.Z, {
          contentTypes: c.settings,
          children: e => {
            let {
              visibleContent: t,
              markAsDismissed: n
            } = e;
            switch (t) {
              case o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                return (0, i.jsx)(h.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(K.Z, {}),
                  children: this.renderSettingsGear
                });
              case o.z.QUEST_2_ENROLLMENT_TOOLTIP:
                return (0, i.jsx)(h.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(w.Z, {
                    markAsDismissed: n,
                    partnerGame: eM.X2.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.QUEST_2_COMPLETION_TOOLTIP:
                return (0, i.jsx)(h.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(k.Z, {
                    markAsDismissed: n,
                    partnerGame: eM.X2.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.USER_SAFETY_SAFE_DIRECT_MESSAGING:
                return (0, i.jsx)(h.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(el.Z, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                return (0, i.jsx)(h.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(X.Z, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                return (0, i.jsx)(h.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(J.Z, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.SOUNDBOARD_VOLUME_EDUCATION:
                return (0, i.jsx)(h.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(et.Z, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                return (0, i.jsx)(h.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)($.P, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                return (0, i.jsx)(h.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(es.Z, {}),
                  children: this.renderSettingsGear
                });
              case o.z.PRIDE_ICONS_COACHMARK:
                return (0, i.jsx)(h.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, i.jsx)(S.Z, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              default:
                return this.renderSettingsGear()
            }
          }
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), eb(this, "copiedTimeout", new c.V7), eb(this, "copiedDecayTimeout", new c.V7), eb(this, "speakingWhileMutedTooltipTimeout", new c.V7), eb(this, "state", {
      hovered: !1,
      copiedStreak: 0,
      shouldShowNametagTooltip: !1,
      shouldShowCopiedFeedback: !1,
      shouldShowSpeakingWhileMutedTooltip: !1,
      hoveringOnMute: !1
    }), eb(this, "handleToggleSelfMute", () => {
      let {
        serverMute: e,
        suppress: t
      } = this.props;
      (0, R.Z)(e, t)
    }), eb(this, "handleToggleSelfDeaf", () => {
      let {
        serverDeaf: e
      } = this.props;
      (0, O.Z)(e)
    }), eb(this, "handleOpenAccountSettings", () => {
      this.handleOpenSettings()
    }), eb(this, "handleOpenSettings", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.oAB.ACCOUNT,
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0;
      m.Z.open(e, t, n)
    }), eb(this, "handleOpenSettingsContextMenu", e => {
      let {
        currentUser: t
      } = this.props;
      null != t && (0, I.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("77298"), n.e("23357"), n.e("19503"), n.e("15972"), n.e("12013"), n.e("6416"), n.e("43906"), n.e("32776"), n.e("95900"), n.e("8016"), n.e("33053"), n.e("68136"), n.e("19464"), n.e("76540"), n.e("4934"), n.e("22646"), n.e("87624"), n.e("5528"), n.e("44517"), n.e("43331"), n.e("30419"), n.e("18824"), n.e("31649"), n.e("51587")]).then(n.bind(n, 923422));
        return n => (0, i.jsx)(e, {
          ...n,
          user: t,
          premiumSubscription: this.props.premiumSubscription,
          webBuildOverride: this.props.webBuildOverride
        })
      })
    }), eb(this, "handleInputAudioContextMenu", e => {
      (0, I.jW)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 659580));
        return () => (0, i.jsx)(e, {
          onClose: I.Zy,
          renderInputDevices: !0,
          renderInputModes: !0,
          renderInputVolume: !0
        })
      })
    }), eb(this, "handleOutputAudioContextMenu", e => {
      (0, I.jW)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 659580));
        return () => (0, i.jsx)(e, {
          onClose: I.Zy,
          renderOutputDevices: !0,
          renderOutputVolume: !0
        })
      })
    }), eb(this, "handleMouseEnter", () => {
      this.setState({
        hovered: !0
      })
    }), eb(this, "handleMouseLeave", () => {
      this.setState({
        hovered: !1
      })
    }), eb(this, "handleMouseEnterMute", () => {
      this.setState({
        hoveringOnMute: !0,
        shouldShowSpeakingWhileMutedTooltip: !1
      }), this.speakingWhileMutedTooltipTimeout.stop()
    }), eb(this, "handleMouseLeaveMute", () => {
      this.setState({
        hoveringOnMute: !1
      })
    }), eb(this, "handleCopyTag", () => {
      let {
        currentUser: e
      } = this.props, {
        shouldShowNametagTooltip: t,
        copiedStreak: n
      } = this.state;
      if (null == e) return;
      (0, ef.JG)(eL.ZP.getUserTag(e, {
        decoration: "never",
        identifiable: "always"
      })), eS.default.track(eR.rMx.TEXT_COPIED, {
        type: "User Tag"
      });
      let i = {
        shouldShowCopiedFeedback: !0,
        shouldShowNametagTooltip: !0
      };
      !t && (i.copiedStreak = n + 1), this.setState(i, () => {
        this.copiedTimeout.start(1e3, () => this.setState({
          shouldShowNametagTooltip: !1
        })), this.copiedDecayTimeout.start(2e3, () => this.setState({
          copiedStreak: 0
        }))
      })
    }), eb(this, "handleOccludedChanged", () => {
      let {
        occluded: e
      } = this.props;
      e && this.setState({
        shouldShowNametagTooltip: !1,
        shouldShowSpeakingWhileMutedTooltip: !1
      })
    }), eb(this, "handleSpeakingWhileMutedChanged", () => {
      let {
        selfMute: e,
        serverMute: t,
        suppress: n,
        speakingWhileMuted: i,
        occluded: s
      } = this.props, {
        hoveringOnMute: l
      } = this.state;
      i ? !l && e && !t && !n && !s && this.setState({
        shouldShowSpeakingWhileMutedTooltip: !0
      }, () => {
        this.speakingWhileMutedTooltipTimeout.start(2e3, () => this.setState({
          shouldShowSpeakingWhileMutedTooltip: !1
        }))
      }) : (this.setState({
        shouldShowSpeakingWhileMutedTooltip: !1
      }), this.speakingWhileMutedTooltipTimeout.stop())
    }), eb(this, "renderStatusPickerPopout", e => {
      let {
        closePopout: t
      } = e, {
        currentUser: n
      } = this.props;
      return (0, i.jsx)("div", {
        className: eD.accountProfilePopoutWrapper,
        children: (0, i.jsx)(V.Z, {
          location: "StatusPickerPopout",
          userId: null == n ? void 0 : n.id,
          user: n,
          onClose: () => {
            this.handleMouseLeave(), null == t || t()
          }
        })
      })
    }), eb(this, "renderSettingsGear", () => (0, i.jsx)(ew, {
      isEligibleForPomelo: this.props.isEligibleForPomelo,
      webBuildOverride: this.props.webBuildOverride,
      onClick: this.handleOpenAccountSettings,
      onContextMenu: this.handleOpenSettingsContextMenu
    }))
  }
}

function eG() {
  var e, t;
  let n = (0, r.e7)([eI.default], () => eI.default.getCurrentUser()),
    l = (0, j._g)(eM.X2.FORTNITE),
    a = (0, r.e7)([eo.default], () => eo.default.getId()),
    c = (0, P.a)(),
    {
      streaming: u,
      status: d
    } = (0, r.cj)([eh.Z], () => ({
      streaming: null != eh.Z.findActivity(e => e.type === eR.IIU.STREAMING),
      status: eh.Z.getStatus()
    })),
    E = (0, C.Z)({
      userId: a
    }),
    I = eL.ZP.useUserTag(n, {
      decoration: "never"
    }),
    m = (0, r.e7)([e_.Z], () => e_.Z.hidePersonalInformation),
    g = (0, r.e7)([eE.Z, ec.Z], () => {
      let e = eE.Z.getChannelId();
      return null != e ? ec.Z.getChannel(e) : null
    }),
    {
      mute: S,
      selfMute: A,
      suppress: v
    } = (0, er.Z)(g),
    {
      selfDeaf: L,
      deaf: O
    } = (0, ea.Z)(g),
    R = (0, r.e7)([f.C], () => {
      var e;
      return (0, Z.fD)() ? null === (e = f.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
    }),
    x = (0, r.e7)([em.ZP], () => em.ZP.getPremiumTypeSubscription()),
    M = (0, r.e7)([ed.Z], () => ed.Z.getEverSpeakingWhileMuted()),
    D = (0, r.e7)([eu.Z], () => eu.Z.hasLayers()),
    y = (0, h.useModalsStore)(h.hasAnyModalOpenSelector) || D || ev.s.isDisallowPopupsSet(),
    w = (0, F.b)(),
    k = (0, r.e7)([B.Z], () => null != B.Z.getAwaitingRemoteSessionInfo()),
    V = (0, r.e7)([U.Z], () => U.Z.isCurrentQuestCompleted),
    K = (0, r.e7)([U.Z], () => U.Z.currentDropQuestGameTitle),
    X = (0, H.n)(),
    J = (0, N.O)(),
    $ = (0, q.D)(),
    et = (0, p.u)(),
    en = (0, Q.t)(),
    es = (0, ei.Z)(n),
    el = (null == n ? void 0 : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === ex.rL,
    eg = "account";
  (0, T.j)({
    location: eg + " auto on",
    autoTrackExposure: !0
  }), (0, T.j)({
    location: eg + " auto off",
    autoTrackExposure: !1
  }), (0, q.o)();
  let ep = (0, r.e7)([ee.Z], () => ee.Z.hasHadOtherUserPlaySoundInSession()),
    eN = function() {
      let e = (0, b.wE)(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
        [t, n] = (0, r.Wu)([Y.Z], () => [Y.Z.hasFetchedRelevance, Y.Z.profileThemesRelevanceExceeded]),
        [i, l] = (0, r.Wu)([em.ZP], () => [em.ZP.hasFetchedMostRecentPremiumTypeSubscription(), em.ZP.getMostRecentPremiumTypeSubscription()]),
        {
          enabled: a
        } = W.Z.useExperiment({
          location: "08bd40_1"
        }, {
          autoTrackExposure: !0
        }),
        c = s.useMemo(() => {
          let e = new Date().getTime();
          return null != l && (l.status === eR.O0b.ACTIVE || e - l.currentPeriodEnd.getTime() < ej)
        }, [l]);
      return s.useEffect(() => {
        (async () => {
          if (e || null != n || !a) return;
          if (!i) {
            await (0, _.ou)();
            return
          }
          if (!c) !t && await (0, _.l0)()
        })()
      }, [a, n, e, i, t, c]), !e && !!a && !c && null != n && n
    }(),
    {
      enabled: eT
    } = (0, z._)({
      location: "AccountConnected"
    }),
    eC = {
      avatar: [],
      settings: []
    };
  return !y && (eN && eC.settings.push(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), l && (eC.settings.push(o.z.QUEST_2_ENROLLMENT_TOOLTIP), V && K === (null === (t = (0, G.BS)(eM.X2.FORTNITE)) || void 0 === t ? void 0 : t.title) && eC.settings.push(o.z.QUEST_2_COMPLETION_TOOLTIP)), X && J && eC.settings.push(o.z.USER_SAFETY_SAFE_DIRECT_MESSAGING), $ && (1 === et ? eC.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : eC.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), ep && eC.settings.push(o.z.SOUNDBOARD_VOLUME_EDUCATION), en && eC.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), es && eC.settings.push(o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), eT && eC.settings.push(o.z.PRIDE_ICONS_COACHMARK), el && eC.avatar.push(o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)), (0, i.jsx)(eU, {
    currentUser: n,
    customStatusActivity: c,
    dismissibleContents: eC,
    userTag: I,
    hidePrivateData: m,
    occluded: y,
    premiumSubscription: x,
    selfDeaf: L,
    selfMute: A,
    serverDeaf: O,
    serverMute: S,
    speaking: E,
    speakingWhileMuted: M,
    status: d,
    streaming: u,
    suppress: v,
    webBuildOverride: R,
    awaitingRemote: k,
    isEligibleForPomelo: w
  })
}

function ew(e) {
  let {
    webBuildOverride: t,
    isEligibleForPomelo: n,
    onClick: s,
    onContextMenu: l
  } = e, a = (0, h.useRedesignIconContext)().enabled, r = null, o = h.SettingsIcon, c = (0, E.i)();
  return a ? o = null != t ? h.SettingsInfoIcon : n ? h.SettingsCircleIcon : c.Component : null != t ? r = (0, i.jsx)(h.CircleInformationIcon, {
    size: "custom",
    color: "currentColor",
    width: 9,
    height: 9,
    className: eD.hasBuildOverride,
    "aria-hidden": !0
  }) : n && (r = (0, i.jsx)(h.CircleBadge, {
    color: M.Z.STATUS_DANGER,
    className: eD.hasBuildOverride,
    "aria-hidden": !0
  })), (0, i.jsx)(eN.Z, {
    tooltipText: null != t ? eP.Z.Messages.USER_SETTINGS_WITH_BUILD_OVERRIDE.format({
      webBuildOverride: t.id
    }) : eP.Z.Messages.USER_SETTINGS,
    onClick: s,
    onContextMenu: l,
    innerClassName: null != t || n ? eD.buildOverrideButton : null,
    icon: o,
    ...c.events,
    children: r
  })
}

function ek(e) {
  let {
    selfMute: t,
    serverMute: n,
    suppress: l,
    awaitingRemote: a,
    tooltipText: r,
    tooltipColor: o,
    tooltipForceOpen: c,
    onMouseEnter: u,
    onMouseLeave: E,
    onClick: _,
    onContextMenu: I
  } = e, m = t || l || n, {
    Component: g,
    play: p,
    events: N
  } = (0, d.O)(m ? "unmute" : "mute"), T = n || l ? h.MicrophoneDenyIcon : g;
  return s.useEffect(() => () => p(), [m, p]), (0, i.jsx)(eN.Z, {
    tooltipText: r,
    tooltipColor: o,
    tooltipForceOpen: c,
    onMouseEnter: () => {
      u(), N.onMouseEnter()
    },
    onMouseLeave: () => {
      E(), N.onMouseLeave()
    },
    icon: (0, i.jsx)(T, {
      size: "custom",
      width: 20,
      height: 20,
      color: m ? h.tokens.colors.STATUS_DANGER : "currentColor"
    }),
    iconForeground: m ? eD.strikethrough : null,
    onClick: _,
    onContextMenu: I,
    role: "switch",
    "aria-label": eP.Z.Messages.MUTE,
    "aria-checked": m,
    disabled: a
  })
}

function eB(e) {
  let {
    selfDeaf: t,
    serverDeaf: n,
    awaitingRemote: l,
    onClick: r,
    onContextMenu: o
  } = e, c = t || n, {
    Component: d,
    play: E,
    events: {
      onMouseEnter: _,
      onMouseLeave: I
    }
  } = (0, u.l)(c ? "undeafen" : "deafen"), m = n ? h.HeadphonesDenyIcon : d;
  return s.useEffect(() => () => E(), [c, E]), (0, i.jsx)(eN.Z, {
    tooltipText: (0, v.Z)(t, n, l),
    onMouseEnter: _,
    onMouseLeave: I,
    icon: (0, i.jsx)(m, {
      size: "custom",
      width: 20,
      height: 20,
      color: c ? h.tokens.colors.STATUS_DANGER : "currentColor"
    }),
    onClick: r,
    onContextMenu: o,
    innerClassName: a()({
      [eD.redIcon]: n
    }),
    iconForeground: c ? eD.strikethrough : null,
    role: "switch",
    "aria-label": eP.Z.Messages.DEAFEN,
    "aria-checked": c,
    disabled: l
  })
}