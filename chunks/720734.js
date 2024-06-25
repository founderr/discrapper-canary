n.d(t, {
  Z: function() {
    return eG
  }
}), n(47120), n(653041);
var s = n(735250),
  i = n(470079),
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
  T = n(410575),
  g = n(941129),
  p = n(83200),
  N = n(634894),
  S = n(586902),
  C = n(515550),
  A = n(1585),
  f = n(304761),
  Z = n(865427),
  L = n(571250),
  O = n(628581),
  v = n(55311),
  R = n(575175),
  P = n(64220),
  x = n(377171),
  M = n(676035),
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
  V = n(543993),
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
  es = n(584427),
  ei = n(52538),
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
  eT = n(285952),
  eg = n(546591),
  ep = n(976401),
  eN = n(333454),
  eS = n(864441),
  eC = n(626135),
  eA = n(768581),
  ef = n(572004),
  eZ = n(70956),
  eL = n(374023),
  eO = n(51144),
  ev = n(998502),
  eR = n(981631),
  eP = n(215023),
  ex = n(702512),
  eM = n(689938),
  eD = n(812118);

function eb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let ey = ev.ZP.getEnableHardwareAcceleration() ? h.AnimatedAvatar : h.Avatar,
  ej = 30 * eZ.Z.Millis.DAY;
class eU extends i.PureComponent {
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
      speakingWhileMuted: s,
      occluded: i
    } = this.props;
    i !== n && this.handleOccludedChanged(), s !== t && this.handleSpeakingWhileMutedChanged()
  }
  componentWillUnmount() {
    this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop()
  }
  renderCopiedSuccess() {
    let {
      copiedStreak: e
    } = this.state, t = [eM.Z.Messages.COPY_SUCCESS_1, eM.Z.Messages.COPY_SUCCESS_2, eM.Z.Messages.COPY_SUCCESS_3, eM.Z.Messages.COPY_SUCCESS_4, eM.Z.Messages.COPY_SUCCESS_5, eM.Z.Messages.COPY_SUCCESS_6, eM.Z.Messages.COPY_SUCCESS_7, eM.Z.Messages.COPY_SUCCESS_8, eM.Z.Messages.COPY_SUCCESS_9, eM.Z.Messages.COPY_SUCCESS_10, eM.Z.Messages.COPY_SUCCESS_11], n = Math.min(Math.max(0, e - 1), t.length - 1);
    return (0, s.jsx)(h.Shaker, {
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
      userTag: i,
      currentUser: l,
      status: a
    } = this.props;
    if (null == l) return null;
    let r = eO.ZP.getName(l),
      o = null != a && a !== eR.Skl.UNKNOWN,
      c = null != n;
    return (c || o && l.isPomelo()) && (e = (0, s.jsx)(eg.Z, {
      hoverText: i,
      forceHover: t,
      children: c ? (0, s.jsx)(D.Z, {
        activity: n,
        emojiClassName: eD.emoji,
        className: eD.customStatus
      }) : eO.ZP.humanizeStatus(a)
    })), (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        className: eD.panelTitleContainer,
        children: (0, s.jsx)(eS.Z, {
          children: r
        })
      }), (0, s.jsx)("div", {
        className: eD.panelSubtextContainer,
        children: (0, s.jsx)(eN.Z, {
          children: null != e ? e : i
        })
      })]
    })
  }
  renderAvatarWithPopout() {
    let {
      speaking: e,
      streaming: t,
      currentUser: n,
      status: i
    } = this.props;
    if (null == n) return null;
    let l = (0, eA.NZ)({
      avatarDecoration: n.avatarDecoration,
      size: (0, A.y9)(h.AvatarSizes.SIZE_32)
    });
    return (0, s.jsx)(T.Z, {
      object: eR.qAy.AVATAR,
      children: (0, s.jsx)(h.Popout, {
        renderPopout: this.renderStatusPickerPopout,
        position: "top",
        align: "left",
        animation: h.Popout.Animation.FADE,
        spacing: 14,
        fixed: !0,
        preload: () => (0, en.Z)(n.id, null == n ? void 0 : n.getAvatarURL(null, 80)),
        children: r => (0, s.jsxs)(h.Clickable, {
          ...r,
          "aria-label": eM.Z.Messages.SET_STATUS,
          className: eD.avatarWrapper,
          children: [(0, s.jsx)(ey, {
            size: h.AvatarSizes.SIZE_32,
            src: n.getAvatarURL(void 0, 32, !1),
            avatarDecoration: l,
            "aria-label": n.username,
            status: t ? eR.Skl.STREAMING : i,
            isSpeaking: e,
            className: eD.avatar
          }), (0, s.jsx)("div", {
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
    return null == e ? null : (0, s.jsx)(s.Fragment, {
      children: (0, s.jsx)(y.Z, {
        contentTypes: t.avatar,
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: n
          } = e;
          if (t === o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP) return (0, s.jsx)(P.Z, {
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
      awaitingRemote: i,
      serverMute: l,
      serverDeaf: a,
      suppress: r,
      dismissibleContents: c
    } = this.props, {
      shouldShowSpeakingWhileMutedTooltip: u
    } = this.state;
    return null == e ? null : (0, s.jsxs)("div", {
      className: eD.container,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [this.renderNameZone(), (0, s.jsxs)(eT.Z, {
        grow: 0,
        children: [(0, s.jsx)(ek, {
          selfMute: n,
          serverMute: l,
          suppress: r,
          awaitingRemote: i,
          tooltipText: u ? eM.Z.Messages.ACCOUNT_SPEAKING_WHILE_MUTED : (0, O.Z)(n, l, r, i),
          tooltipColor: u ? h.TooltipColors.GREEN : void 0,
          tooltipForceOpen: u || void 0,
          onMouseEnter: this.handleMouseEnterMute,
          onMouseLeave: this.handleMouseLeaveMute,
          onClick: this.handleToggleSelfMute,
          onContextMenu: this.handleInputAudioContextMenu
        }), (0, s.jsx)(eB, {
          selfDeaf: t,
          serverDeaf: a,
          onClick: this.handleToggleSelfDeaf,
          onContextMenu: this.handleOutputAudioContextMenu,
          awaitingRemote: i
        }), (0, s.jsx)(y.Z, {
          contentTypes: c.settings,
          children: e => {
            let {
              visibleContent: t,
              markAsDismissed: n
            } = e;
            switch (t) {
              case o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                return (0, s.jsx)(h.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, s.jsx)(K.Z, {}),
                  children: this.renderSettingsGear
                });
              case o.z.QUEST_2_ENROLLMENT_TOOLTIP:
                return (0, s.jsx)(h.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, s.jsx)(w.Z, {
                    markAsDismissed: n,
                    partnerGame: ex.X2.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.QUEST_2_COMPLETION_TOOLTIP:
                return (0, s.jsx)(h.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, s.jsx)(k.Z, {
                    markAsDismissed: n,
                    partnerGame: ex.X2.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.USER_SAFETY_SAFE_DIRECT_MESSAGING:
                return (0, s.jsx)(h.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, s.jsx)(el.Z, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                return (0, s.jsx)(h.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, s.jsx)(X.Z, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                return (0, s.jsx)(h.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, s.jsx)(J.Z, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.SOUNDBOARD_VOLUME_EDUCATION:
                return (0, s.jsx)(h.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, s.jsx)(et.Z, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                return (0, s.jsx)(h.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, s.jsx)($.P, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                return (0, s.jsx)(h.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, s.jsx)(ei.Z, {}),
                  children: this.renderSettingsGear
                });
              case o.z.PRIDE_ICONS_COACHMARK:
                return (0, s.jsx)(h.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, s.jsx)(C.Z, {
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
      (0, v.Z)(e)
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
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("77298"), n.e("23357"), n.e("19503"), n.e("15972"), n.e("12013"), n.e("6416"), n.e("43906"), n.e("32776"), n.e("95900"), n.e("8016"), n.e("33053"), n.e("68136"), n.e("50654"), n.e("76540"), n.e("22646"), n.e("87624"), n.e("5528"), n.e("44517"), n.e("43331"), n.e("30419"), n.e("18824"), n.e("31649"), n.e("51587")]).then(n.bind(n, 923422));
        return n => (0, s.jsx)(e, {
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
        return () => (0, s.jsx)(e, {
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
        return () => (0, s.jsx)(e, {
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
      (0, ef.JG)(eO.ZP.getUserTag(e, {
        decoration: "never",
        identifiable: "always"
      })), eC.default.track(eR.rMx.TEXT_COPIED, {
        type: "User Tag"
      });
      let s = {
        shouldShowCopiedFeedback: !0,
        shouldShowNametagTooltip: !0
      };
      !t && (s.copiedStreak = n + 1), this.setState(s, () => {
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
        speakingWhileMuted: s,
        occluded: i
      } = this.props, {
        hoveringOnMute: l
      } = this.state;
      s ? !l && e && !t && !n && !i && this.setState({
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
      return (0, s.jsx)("div", {
        className: eD.accountProfilePopoutWrapper,
        children: (0, s.jsx)(V.Z, {
          userId: null == n ? void 0 : n.id,
          user: n,
          onClose: () => {
            this.handleMouseLeave(), null == t || t()
          }
        })
      })
    }), eb(this, "renderSettingsGear", () => (0, s.jsx)(ew, {
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
    l = (0, j._g)(ex.X2.FORTNITE),
    a = (0, r.e7)([eo.default], () => eo.default.getId()),
    c = (0, M.a)(),
    {
      streaming: u,
      status: d
    } = (0, r.cj)([eh.Z], () => ({
      streaming: null != eh.Z.findActivity(e => e.type === eR.IIU.STREAMING),
      status: eh.Z.getStatus()
    })),
    E = (0, S.Z)({
      userId: a
    }),
    I = eO.ZP.useUserTag(n, {
      decoration: "never"
    }),
    m = (0, r.e7)([e_.Z], () => e_.Z.hidePersonalInformation),
    T = (0, r.e7)([eE.Z, ec.Z], () => {
      let e = eE.Z.getChannelId();
      return null != e ? ec.Z.getChannel(e) : null
    }),
    {
      mute: C,
      selfMute: A,
      suppress: L
    } = (0, er.Z)(T),
    {
      selfDeaf: O,
      deaf: v
    } = (0, ea.Z)(T),
    R = (0, r.e7)([f.C], () => {
      var e;
      return (0, Z.fD)() ? null === (e = f.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
    }),
    P = (0, r.e7)([em.ZP], () => em.ZP.getPremiumTypeSubscription()),
    x = (0, r.e7)([ed.Z], () => ed.Z.getEverSpeakingWhileMuted()),
    D = (0, r.e7)([eu.Z], () => eu.Z.hasLayers()),
    y = (0, h.useModalsStore)(h.hasAnyModalOpenSelector) || D || eL.s.isDisallowPopupsSet(),
    w = (0, F.b)(),
    k = (0, r.e7)([B.Z], () => null != B.Z.getAwaitingRemoteSessionInfo()),
    V = (0, r.e7)([U.Z], () => U.Z.isCurrentQuestCompleted),
    K = (0, r.e7)([U.Z], () => U.Z.currentDropQuestGameTitle),
    X = (0, H.n)(),
    J = (0, p.O)(),
    $ = (0, q.D)(),
    et = (0, g.u)(),
    en = (0, Q.t)(),
    ei = (0, es.Z)(n),
    el = (null == n ? void 0 : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eP.rL,
    eT = "account";
  (0, N.j)({
    location: eT + " auto on",
    autoTrackExposure: !0
  }), (0, N.j)({
    location: eT + " auto off",
    autoTrackExposure: !1
  }), (0, q.o)();
  let eg = (0, r.e7)([ee.Z], () => ee.Z.hasHadOtherUserPlaySoundInSession()),
    ep = function() {
      let e = (0, b.wE)(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
        [t, n] = (0, r.Wu)([Y.Z], () => [Y.Z.hasFetchedRelevance, Y.Z.profileThemesRelevanceExceeded]),
        [s, l] = (0, r.Wu)([em.ZP], () => [em.ZP.hasFetchedMostRecentPremiumTypeSubscription(), em.ZP.getMostRecentPremiumTypeSubscription()]),
        {
          enabled: a
        } = W.Z.useExperiment({
          location: "08bd40_1"
        }, {
          autoTrackExposure: !0
        }),
        c = i.useMemo(() => {
          let e = new Date().getTime();
          return null != l && (l.status === eR.O0b.ACTIVE || e - l.currentPeriodEnd.getTime() < ej)
        }, [l]);
      return i.useEffect(() => {
        (async () => {
          if (e || null != n || !a) return;
          if (!s) {
            await (0, _.ou)();
            return
          }
          if (!c) !t && await (0, _.l0)()
        })()
      }, [a, n, e, s, t, c]), !e && !!a && !c && null != n && n
    }(),
    {
      enabled: eN
    } = (0, z._)({
      location: "AccountConnected"
    }),
    eS = {
      avatar: [],
      settings: []
    };
  return !y && (ep && eS.settings.push(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), l && (eS.settings.push(o.z.QUEST_2_ENROLLMENT_TOOLTIP), V && K === (null === (t = (0, G.BS)(ex.X2.FORTNITE)) || void 0 === t ? void 0 : t.title) && eS.settings.push(o.z.QUEST_2_COMPLETION_TOOLTIP)), X && J && eS.settings.push(o.z.USER_SAFETY_SAFE_DIRECT_MESSAGING), $ && (1 === et ? eS.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : eS.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), eg && eS.settings.push(o.z.SOUNDBOARD_VOLUME_EDUCATION), en && eS.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), ei && eS.settings.push(o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), eN && eS.settings.push(o.z.PRIDE_ICONS_COACHMARK), el && eS.avatar.push(o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)), (0, s.jsx)(eU, {
    currentUser: n,
    customStatusActivity: c,
    dismissibleContents: eS,
    userTag: I,
    hidePrivateData: m,
    occluded: y,
    premiumSubscription: P,
    selfDeaf: O,
    selfMute: A,
    serverDeaf: v,
    serverMute: C,
    speaking: E,
    speakingWhileMuted: x,
    status: d,
    streaming: u,
    suppress: L,
    webBuildOverride: R,
    awaitingRemote: k,
    isEligibleForPomelo: w
  })
}

function ew(e) {
  let {
    webBuildOverride: t,
    isEligibleForPomelo: n,
    onClick: i,
    onContextMenu: l
  } = e, a = (0, h.useRedesignIconContext)().enabled, r = null, o = h.SettingsIcon, c = (0, E.i)();
  return a ? o = null != t ? h.SettingsInfoIcon : n ? h.SettingsCircleIcon : c.Component : null != t ? r = (0, s.jsx)(h.CircleInformationIcon, {
    size: "custom",
    color: "currentColor",
    width: 9,
    height: 9,
    className: eD.hasBuildOverride,
    "aria-hidden": !0
  }) : n && (r = (0, s.jsx)(h.CircleBadge, {
    color: x.Z.STATUS_DANGER,
    className: eD.hasBuildOverride,
    "aria-hidden": !0
  })), (0, s.jsx)(ep.Z, {
    tooltipText: null != t ? eM.Z.Messages.USER_SETTINGS_WITH_BUILD_OVERRIDE.format({
      webBuildOverride: t.id
    }) : eM.Z.Messages.USER_SETTINGS,
    onClick: i,
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
    Component: T,
    play: g,
    events: p
  } = (0, d.O)(m ? "unmute" : "mute"), N = n || l ? h.MicrophoneDenyIcon : T;
  return i.useEffect(() => () => g(), [m, g]), (0, s.jsx)(ep.Z, {
    tooltipText: r,
    tooltipColor: o,
    tooltipForceOpen: c,
    onMouseEnter: () => {
      u(), p.onMouseEnter()
    },
    onMouseLeave: () => {
      E(), p.onMouseLeave()
    },
    icon: (0, s.jsx)(N, {
      size: "custom",
      width: 20,
      height: 20,
      color: m ? h.tokens.colors.STATUS_DANGER : "currentColor"
    }),
    iconForeground: m ? eD.strikethrough : null,
    onClick: _,
    onContextMenu: I,
    role: "switch",
    "aria-label": eM.Z.Messages.MUTE,
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
  return i.useEffect(() => () => E(), [c, E]), (0, s.jsx)(ep.Z, {
    tooltipText: (0, L.Z)(t, n, l),
    onMouseEnter: _,
    onMouseLeave: I,
    icon: (0, s.jsx)(m, {
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
    "aria-label": eM.Z.Messages.DEAFEN,
    "aria-checked": c,
    disabled: l
  })
}