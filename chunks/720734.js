"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eK
  }
}), n("47120"), n("653041");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("442837"),
  o = n("524437"),
  u = n("846519"),
  d = n("742444"),
  c = n("247636"),
  f = n("128951"),
  E = n("952826"),
  _ = n("400354"),
  h = n("652844"),
  C = n("789639"),
  m = n("481060"),
  S = n("355467"),
  I = n("239091"),
  T = n("230711"),
  p = n("255952"),
  g = n("410575"),
  A = n("941129"),
  N = n("83200"),
  v = n("634894"),
  R = n("586902"),
  O = n("1585"),
  L = n("304761"),
  M = n("865427"),
  P = n("571250"),
  y = n("628581"),
  D = n("55311"),
  x = n("575175"),
  b = n("377171"),
  U = n("676035"),
  j = n("427217"),
  G = n("605236"),
  w = n("243778"),
  k = n("730417"),
  F = n("524347"),
  B = n("853197"),
  H = n("810280"),
  V = n("60762"),
  Y = n("258609"),
  W = n("278464"),
  K = n("757042"),
  z = n("917112"),
  q = n("331541"),
  Q = n("332473"),
  Z = n("240504"),
  X = n("637906"),
  J = n("39370"),
  $ = n("19199"),
  ee = n("111653"),
  et = n("866483"),
  en = n("14357"),
  ea = n("393333"),
  es = n("763296"),
  el = n("640806"),
  ei = n("484459"),
  er = n("584427"),
  eo = n("52538"),
  eu = n("331187"),
  ed = n("879815"),
  ec = n("294629"),
  ef = n("314897"),
  eE = n("592125"),
  e_ = n("819640"),
  eh = n("131951"),
  eC = n("19780"),
  em = n("885110"),
  eS = n("246946"),
  eI = n("594174"),
  eT = n("78839"),
  ep = n("285952"),
  eg = n("546591"),
  eA = n("86813"),
  eN = n("826026"),
  ev = n("937482"),
  eR = n("87888"),
  eO = n("976401"),
  eL = n("333454"),
  eM = n("864441"),
  eP = n("26290"),
  ey = n("626135"),
  eD = n("768581"),
  ex = n("572004"),
  eb = n("70956"),
  eU = n("374023"),
  ej = n("51144"),
  eG = n("998502"),
  ew = n("981631"),
  ek = n("702512"),
  eF = n("689938"),
  eB = n("610276");

function eH(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let eV = eG.default.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar,
  eY = 30 * eb.default.Millis.DAY;
class eW extends s.PureComponent {
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
      speakingWhileMuted: a,
      occluded: s
    } = this.props;
    s !== n && this.handleOccludedChanged(), a !== t && this.handleSpeakingWhileMutedChanged()
  }
  componentWillUnmount() {
    this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop()
  }
  renderCopiedSuccess() {
    let {
      copiedStreak: e
    } = this.state, t = [eF.default.Messages.COPY_SUCCESS_1, eF.default.Messages.COPY_SUCCESS_2, eF.default.Messages.COPY_SUCCESS_3, eF.default.Messages.COPY_SUCCESS_4, eF.default.Messages.COPY_SUCCESS_5, eF.default.Messages.COPY_SUCCESS_6, eF.default.Messages.COPY_SUCCESS_7, eF.default.Messages.COPY_SUCCESS_8, eF.default.Messages.COPY_SUCCESS_9, eF.default.Messages.COPY_SUCCESS_10, eF.default.Messages.COPY_SUCCESS_11], n = Math.min(Math.max(0, e - 1), t.length - 1);
    return (0, a.jsx)(m.Shaker, {
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
      status: i
    } = this.props;
    if (null == l) return null;
    let r = ej.default.getName(l),
      o = null != i && i !== ew.StatusTypes.UNKNOWN,
      u = null != n;
    return (u || o && l.isPomelo()) && (e = (0, a.jsx)(eg.default, {
      hoverText: s,
      forceHover: t,
      children: u ? (0, a.jsx)(j.default, {
        activity: n,
        emojiClassName: eB.emoji,
        className: eB.customStatus
      }) : ej.default.humanizeStatus(i)
    })), (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: eB.panelTitleContainer,
        children: (0, a.jsx)(eM.default, {
          children: r
        })
      }), (0, a.jsx)("div", {
        className: eB.panelSubtextContainer,
        children: (0, a.jsx)(eL.default, {
          children: null != e ? e : s
        })
      })]
    })
  }
  renderCopiableNameTag() {
    let {
      currentUser: e
    } = this.props, {
      shouldShowNametagTooltip: t,
      shouldShowCopiedFeedback: n
    } = this.state;
    if (null == e) return null;
    let s = null,
      l = m.TooltipColors.PRIMARY;
    return ex.SUPPORTS_COPY && (s = eF.default.Messages.ACCOUNT_CLICK_TO_COPY, n && (s = this.renderCopiedSuccess(), l = this.isCopiedStreakGodlike ? m.TooltipColors.RED : m.TooltipColors.GREEN)), (0, a.jsx)(m.Tooltip, {
      text: s,
      forceOpen: t,
      "aria-label": !!ex.SUPPORTS_COPY && eF.default.Messages.ACCOUNT_CLICK_TO_COPY,
      color: l,
      delay: 500,
      onAnimationRest: (e, a) => {
        n && !t && a.phase === ew.SpringTransitionPhases.LEAVE && this.setState({
          shouldShowCopiedFeedback: !1
        })
      },
      children: e => {
        let {
          onClick: t,
          onMouseEnter: s,
          ...l
        } = e;
        return (0, a.jsx)(m.Clickable, {
          ...l,
          onMouseEnter: () => {
            n ? (this.copiedTimeout.stop(), this.setState({
              shouldShowNametagTooltip: !1
            }, s)) : null == s || s()
          },
          onClick: () => {
            null == t || t(), this.handleCopyTag()
          },
          className: i()(eB.nameTag, {
            [eB.canCopy]: ex.SUPPORTS_COPY
          }),
          children: this.renderNameTag()
        })
      }
    })
  }
  renderAvatarWithPopout() {
    let {
      speaking: e,
      streaming: t,
      currentUser: n,
      status: s,
      showTagAsButton: l,
      showTaglessAccountPanel: r
    } = this.props;
    if (null == n) return null;
    let o = (0, eD.getAvatarDecorationURL)({
      avatarDecoration: n.avatarDecoration,
      size: (0, O.getDecorationSizeForAvatarSize)(m.AvatarSizes.SIZE_32)
    });
    return (0, a.jsx)(g.default, {
      object: ew.AnalyticsObjects.AVATAR,
      children: (0, a.jsx)(m.Popout, {
        renderPopout: this.renderStatusPickerPopout,
        position: "top",
        align: "left",
        animation: m.Popout.Animation.FADE,
        spacing: 14,
        fixed: !0,
        preload: () => (0, ei.default)(n.id, null == n ? void 0 : n.getAvatarURL(null, 80)),
        children: (u, d) => (0, a.jsxs)(m.Clickable, {
          ...u,
          "aria-label": eF.default.Messages.SET_STATUS,
          className: i()(eB.avatarWrapper, {
            [eB.withTagAsButton]: l,
            [eB.withTagless]: r
          }),
          children: [(0, a.jsx)(eV, {
            size: m.AvatarSizes.SIZE_32,
            src: n.getAvatarURL(void 0, 32, !1),
            avatarDecoration: o,
            "aria-label": n.username,
            status: t ? ew.StatusTypes.STREAMING : s,
            isSpeaking: e,
            className: eB.avatar
          }), l || r ? (0, a.jsx)("div", {
            className: i()(eB.nameTag, {
              [eB.canCopy]: ex.SUPPORTS_COPY
            }),
            children: r ? (0, a.jsx)(eO.default, {
              tooltipText: null,
              icon: d.isShown ? eA.default : eN.default,
              role: "switch",
              "aria-label": eF.default.Messages.SET_STATUS
            }) : this.renderNameTag()
          }) : null]
        })
      })
    })
  }
  renderNameZone() {
    let {
      currentUser: e,
      dismissibleContents: t
    } = this.props, {
      showTagAsButton: n,
      showTaglessAccountPanel: s
    } = this.props;
    return null == e ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(w.default, {
        contentTypes: t.avatar,
        children: e => {
          let {
            visibleContent: t
          } = e;
          return this.renderAvatarWithPopout()
        }
      }), n || s ? null : this.renderCopiableNameTag()]
    })
  }
  render() {
    let {
      currentUser: e,
      selfDeaf: t,
      selfMute: n,
      awaitingRemote: s,
      serverMute: l,
      serverDeaf: i,
      suppress: r,
      dismissibleContents: u
    } = this.props, {
      shouldShowSpeakingWhileMutedTooltip: d
    } = this.state;
    return null == e ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: eB.container,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: [this.renderNameZone(), (0, a.jsxs)(ep.default, {
          grow: 0,
          children: [(0, a.jsx)(eq, {
            selfMute: n,
            serverMute: l,
            suppress: r,
            awaitingRemote: s,
            tooltipText: d ? eF.default.Messages.ACCOUNT_SPEAKING_WHILE_MUTED : (0, y.default)(n, l, r, s),
            tooltipColor: d ? m.TooltipColors.GREEN : void 0,
            tooltipForceOpen: d || void 0,
            onMouseEnter: this.handleMouseEnterMute,
            onMouseLeave: this.handleMouseLeaveMute,
            onClick: this.handleToggleSelfMute,
            onContextMenu: this.handleInputAudioContextMenu
          }), (0, a.jsx)(eQ, {
            selfDeaf: t,
            serverDeaf: i,
            onClick: this.handleToggleSelfDeaf,
            onContextMenu: this.handleOutputAudioContextMenu,
            awaitingRemote: s
          }), (0, a.jsx)(w.default, {
            contentTypes: u.settings,
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: n
              } = e;
              switch (t) {
                case o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                  return (0, a.jsx)(m.Popout, {
                    position: "top",
                    align: "center",
                    shouldShow: !0,
                    renderPopout: () => (0, a.jsx)(J.default, {}),
                    children: this.renderSettingsGear
                  });
                case o.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP:
                  return (0, a.jsx)(m.Popout, {
                    position: "top",
                    align: "center",
                    shouldShow: !0,
                    renderPopout: () => (0, a.jsx)(H.default, {
                      markAsDismissed: n,
                      partnerGame: ek.PartnerGame.FORTNITE
                    }),
                    children: this.renderSettingsGear
                  });
                case o.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP:
                  return (0, a.jsx)(m.Popout, {
                    position: "top",
                    align: "center",
                    shouldShow: !0,
                    renderPopout: () => (0, a.jsx)(V.default, {
                      markAsDismissed: n,
                      partnerGame: ek.PartnerGame.FORTNITE
                    }),
                    children: this.renderSettingsGear
                  });
                case o.DismissibleContent.USER_SAFETY_SAFE_DIRECT_MESSAGING:
                  return (0, a.jsx)(m.Popout, {
                    position: "top",
                    align: "center",
                    shouldShow: !0,
                    renderPopout: () => (0, a.jsx)(eu.default, {
                      markAsDismissed: n
                    }),
                    children: this.renderSettingsGear
                  });
                case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                  return (0, a.jsx)(m.Popout, {
                    position: "top",
                    align: "center",
                    shouldShow: !0,
                    renderPopout: () => (0, a.jsx)(et.default, {
                      markAsDismissed: n
                    }),
                    children: this.renderSettingsGear
                  });
                case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                  return (0, a.jsx)(m.Popout, {
                    position: "top",
                    align: "center",
                    shouldShow: !0,
                    renderPopout: () => (0, a.jsx)(en.default, {
                      markAsDismissed: n
                    }),
                    children: this.renderSettingsGear
                  });
                case o.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION:
                  return (0, a.jsx)(m.Popout, {
                    position: "top",
                    align: "center",
                    shouldShow: !0,
                    renderPopout: () => (0, a.jsx)(el.default, {
                      markAsDismissed: n
                    }),
                    children: this.renderSettingsGear
                  });
                case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                  return (0, a.jsx)(m.Popout, {
                    position: "top",
                    align: "center",
                    shouldShow: !0,
                    renderPopout: () => (0, a.jsx)(ea.UserSafetyEducationReportingCoachmark, {
                      markAsDismissed: n
                    }),
                    children: this.renderSettingsGear
                  });
                case o.DismissibleContent.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                  return (0, a.jsx)(m.Popout, {
                    position: "top",
                    align: "center",
                    shouldShow: !0,
                    renderPopout: () => (0, a.jsx)(eo.default, {}),
                    children: this.renderSettingsGear
                  });
                default:
                  return this.renderSettingsGear()
              }
            }
          })]
        })]
      }), (0, a.jsx)(K.default, {})]
    })
  }
  constructor(...e) {
    super(...e), eH(this, "copiedTimeout", new u.Timeout), eH(this, "copiedDecayTimeout", new u.Timeout), eH(this, "speakingWhileMutedTooltipTimeout", new u.Timeout), eH(this, "state", {
      hovered: !1,
      copiedStreak: 0,
      shouldShowNametagTooltip: !1,
      shouldShowCopiedFeedback: !1,
      shouldShowSpeakingWhileMutedTooltip: !1,
      hoveringOnMute: !1
    }), eH(this, "handleToggleSelfMute", () => {
      let {
        serverMute: e,
        suppress: t
      } = this.props;
      (0, x.default)(e, t)
    }), eH(this, "handleToggleSelfDeaf", () => {
      let {
        serverDeaf: e
      } = this.props;
      (0, D.default)(e)
    }), eH(this, "handleOpenAccountSettings", () => {
      this.handleOpenSettings()
    }), eH(this, "handleOpenSettings", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.UserSettingsSections.ACCOUNT,
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0;
      T.default.open(e, t, n)
    }), eH(this, "handleOpenSettingsContextMenu", e => {
      let {
        currentUser: t
      } = this.props;
      null != t && (0, I.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("24267"), n.e("8895"), n.e("15972"), n.e("58625"), n.e("6416"), n.e("14720"), n.e("63438"), n.e("33053"), n.e("51238"), n.e("17938"), n.e("76540"), n.e("65866"), n.e("5528"), n.e("40218"), n.e("18824"), n.e("74753"), n.e("2535")]).then(n.bind(n, "923422"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: t,
          premiumSubscription: this.props.premiumSubscription,
          webBuildOverride: this.props.webBuildOverride
        })
      })
    }), eH(this, "handleInputAudioContextMenu", e => {
      (0, I.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "659580"));
        return () => (0, a.jsx)(e, {
          onClose: I.closeContextMenu,
          renderInputDevices: !0,
          renderInputModes: !0,
          renderInputVolume: !0
        })
      })
    }), eH(this, "handleOutputAudioContextMenu", e => {
      (0, I.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "659580"));
        return () => (0, a.jsx)(e, {
          onClose: I.closeContextMenu,
          renderOutputDevices: !0,
          renderOutputVolume: !0
        })
      })
    }), eH(this, "handleMouseEnter", () => {
      this.setState({
        hovered: !0
      })
    }), eH(this, "handleMouseLeave", () => {
      this.setState({
        hovered: !1
      })
    }), eH(this, "handleMouseEnterMute", () => {
      this.setState({
        hoveringOnMute: !0,
        shouldShowSpeakingWhileMutedTooltip: !1
      }), this.speakingWhileMutedTooltipTimeout.stop()
    }), eH(this, "handleMouseLeaveMute", () => {
      this.setState({
        hoveringOnMute: !1
      })
    }), eH(this, "handleCopyTag", () => {
      let {
        currentUser: e
      } = this.props, {
        shouldShowNametagTooltip: t,
        copiedStreak: n
      } = this.state;
      if (null == e) return;
      (0, ex.copy)(ej.default.getUserTag(e, {
        decoration: "never",
        identifiable: "always"
      })), ey.default.track(ew.AnalyticEvents.TEXT_COPIED, {
        type: "User Tag"
      });
      let a = {
        shouldShowCopiedFeedback: !0,
        shouldShowNametagTooltip: !0
      };
      !t && (a.copiedStreak = n + 1), this.setState(a, () => {
        this.copiedTimeout.start(1e3, () => this.setState({
          shouldShowNametagTooltip: !1
        })), this.copiedDecayTimeout.start(2e3, () => this.setState({
          copiedStreak: 0
        }))
      })
    }), eH(this, "handleOccludedChanged", () => {
      let {
        occluded: e
      } = this.props;
      e && this.setState({
        shouldShowNametagTooltip: !1,
        shouldShowSpeakingWhileMutedTooltip: !1
      })
    }), eH(this, "handleSpeakingWhileMutedChanged", () => {
      let {
        selfMute: e,
        serverMute: t,
        suppress: n,
        speakingWhileMuted: a,
        occluded: s
      } = this.props, {
        hoveringOnMute: l
      } = this.state;
      a ? !l && e && !t && !n && !s && this.setState({
        shouldShowSpeakingWhileMutedTooltip: !0
      }, () => {
        this.speakingWhileMutedTooltipTimeout.start(2e3, () => this.setState({
          shouldShowSpeakingWhileMutedTooltip: !1
        }))
      }) : (this.setState({
        shouldShowSpeakingWhileMutedTooltip: !1
      }), this.speakingWhileMutedTooltipTimeout.stop())
    }), eH(this, "renderStatusPickerPopout", e => {
      let {
        closePopout: t
      } = e, {
        showRichProfilePopup: n,
        currentUser: s
      } = this.props;
      if (n) {
        let e = {
          userId: null == s ? void 0 : s.id,
          user: s,
          onClose: () => {
            this.handleMouseLeave(), null == t || t()
          }
        };
        return (0, a.jsx)("div", {
          className: eB.accountProfilePopoutWrapper,
          children: (0, a.jsx)(q.default, {
            ...e
          })
        })
      }
      return (0, a.jsx)(p.default, {
        onClose: () => {
          this.handleMouseLeave(), null == t || t()
        }
      })
    }), eH(this, "renderSettingsGear", () => (0, a.jsx)(ez, {
      isEligibleForPomelo: this.props.isEligibleForPomelo,
      webBuildOverride: this.props.webBuildOverride,
      onClick: this.handleOpenAccountSettings,
      onContextMenu: this.handleOpenSettingsContextMenu
    }))
  }
}

function eK() {
  let e = (0, r.useStateFromStores)([eI.default], () => eI.default.getCurrentUser()),
    t = (0, k.useShowEligibilityEnrollmentTooltip)(ek.PartnerGame.FORTNITE),
    n = (0, r.useStateFromStores)([ef.default], () => ef.default.getId()),
    l = (0, U.useCustomStatusActivity)(),
    {
      streaming: i,
      status: u
    } = (0, r.useStateFromStoresObject)([em.default], () => ({
      streaming: null != em.default.findActivity(e => e.type === ew.ActivityTypes.STREAMING),
      status: em.default.getStatus()
    })),
    d = (0, R.default)({
      userId: n
    }),
    c = ej.default.useUserTag(e, {
      decoration: "never"
    }),
    f = (0, r.useStateFromStores)([eS.default], () => eS.default.hidePersonalInformation),
    E = (0, r.useStateFromStores)([eC.default, eE.default], () => {
      let e = eC.default.getChannelId();
      return null != e ? eE.default.getChannel(e) : null
    }),
    {
      mute: _,
      selfMute: h,
      suppress: C
    } = (0, ec.default)(E),
    {
      selfDeaf: I,
      deaf: T
    } = (0, ed.default)(E),
    p = (0, r.useStateFromStores)([L.default], () => {
      var e;
      return (0, M.probablyHasBuildOverride)() ? null === (e = L.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
    }),
    g = (0, r.useStateFromStores)([eT.default], () => eT.default.getPremiumTypeSubscription()),
    O = (0, r.useStateFromStores)([eh.default], () => eh.default.getEverSpeakingWhileMuted()),
    P = (0, r.useStateFromStores)([e_.default], () => e_.default.hasLayers()),
    y = (0, m.useModalsStore)(m.hasAnyModalOpenSelector) || P || eU.ProcessArgs.isDisallowPopupsSet(),
    D = (0, Q.useIsEligibleForPomelo)();
  s.useEffect(() => {
    z.default.trackExposure({
      location: "08bd40_3"
    })
  });
  let x = (0, r.useStateFromStores)([Y.default], () => null != Y.default.getAwaitingRemoteSessionInfo()),
    {
      isPopupEnabled: b,
      isJoinedTagButtonEnabled: j,
      isTaglessAccountPanelEnabled: w
    } = z.default.useExperiment({
      location: "08bd40_4"
    }, {
      autoTrackExposure: !1
    }),
    H = (0, r.useStateFromStores)([F.default], () => F.default.isCurrentQuestCompleted),
    V = (0, r.useStateFromStores)([F.default], () => F.default.currentDropQuestGameTitle),
    K = (0, W.useIsHomeSelected)(),
    q = (0, N.useIsDmSpamFilterCoachmarkEnabled)(),
    J = (0, $.useCanSeeSafetyEducationBlockMuteCoachmark)(),
    et = (0, A.useIsSafetyConsumerEducationBlockMuteBucket)(),
    en = (0, ee.useCanSeeSafetyEducationReportingCoachmark)(),
    ea = (0, er.default)(e),
    el = "account";
  (0, v.useTriggerDebuggingAA)({
    location: el + " auto on",
    autoTrackExposure: !0
  }), (0, v.useTriggerDebuggingAA)({
    location: el + " auto off",
    autoTrackExposure: !1
  }), (0, $.useSafetyEducationAATriggerPoint)();
  let ei = (0, r.useStateFromStores)([es.default], () => es.default.hasHadOtherUserPlaySoundInSession()),
    eo = function() {
      let e = (0, G.useIsDismissibleContentDismissed)(o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
        [t, n] = (0, r.useStateFromStoresArray)([Z.default], () => [Z.default.hasFetchedRelevance, Z.default.profileThemesRelevanceExceeded]),
        [a, l] = (0, r.useStateFromStoresArray)([eT.default], () => [eT.default.hasFetchedMostRecentPremiumTypeSubscription(), eT.default.getMostRecentPremiumTypeSubscription()]),
        {
          enabled: i
        } = X.default.useExperiment({
          location: "08bd40_1"
        }, {
          autoTrackExposure: !0
        }),
        u = s.useMemo(() => {
          let e = new Date().getTime();
          return null != l && (l.status === ew.SubscriptionStatusTypes.ACTIVE || e - l.currentPeriodEnd.getTime() < eY)
        }, [l]);
      return s.useEffect(() => {
        (async () => {
          if (!e && null == n && !!i) {
            if (!a) {
              await (0, S.fetchMostRecentSubscription)();
              return
            }!u && !t && await (0, S.getPerksRelevance)()
          }
        })()
      }, [i, n, e, a, t, u]), !e && !!i && !u && null != n && n
    }(),
    eu = {
      avatar: [],
      settings: []
    };
  if (!y) {
    if (eo && eu.settings.push(o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), t) {
      var ep;
      eu.settings.push(o.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP), H && V === (null === (ep = (0, B.getDrop)(ek.PartnerGame.FORTNITE)) || void 0 === ep ? void 0 : ep.title) && eu.settings.push(o.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP)
    }
    K && q && eu.settings.push(o.DismissibleContent.USER_SAFETY_SAFE_DIRECT_MESSAGING), J && (1 === et ? eu.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : eu.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), ei && eu.settings.push(o.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION), en && eu.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), ea && eu.settings.push(o.DismissibleContent.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK)
  }
  return (0, a.jsx)(eW, {
    currentUser: e,
    customStatusActivity: l,
    dismissibleContents: eu,
    userTag: c,
    hidePrivateData: f,
    occluded: y,
    premiumSubscription: g,
    selfDeaf: I,
    selfMute: h,
    serverDeaf: T,
    serverMute: _,
    showRichProfilePopup: b,
    showTagAsButton: j,
    showTaglessAccountPanel: w,
    speaking: d,
    speakingWhileMuted: O,
    status: u,
    streaming: i,
    suppress: C,
    webBuildOverride: p,
    awaitingRemote: x,
    isEligibleForPomelo: D
  })
}

function ez(e) {
  let {
    webBuildOverride: t,
    isEligibleForPomelo: n,
    onClick: s,
    onContextMenu: l
  } = e, i = (0, m.useRedesignIconContext)().enabled, r = null, o = ev.default, u = (0, C.useSettingsLottie)();
  return i ? o = null != t ? E.SettingsInfoIcon : n ? f.SettingsCircleIcon : u.Component : null != t ? r = (0, a.jsx)(eR.default, {
    width: 9,
    height: 9,
    className: eB.hasBuildOverride,
    "aria-hidden": !0
  }) : n && (r = (0, a.jsx)(eP.CircleBadge, {
    color: b.default.STATUS_DANGER,
    className: eB.hasBuildOverride,
    "aria-hidden": !0
  })), (0, a.jsx)(eO.default, {
    tooltipText: null != t ? eF.default.Messages.USER_SETTINGS_WITH_BUILD_OVERRIDE.format({
      webBuildOverride: t.id
    }) : eF.default.Messages.USER_SETTINGS,
    onClick: s,
    onContextMenu: l,
    innerClassName: null != t || n ? eB.buildOverrideButton : null,
    icon: o,
    ...u.events,
    children: r
  })
}

function eq(e) {
  let {
    selfMute: t,
    serverMute: n,
    suppress: l,
    awaitingRemote: i,
    tooltipText: r,
    tooltipColor: o,
    tooltipForceOpen: u,
    onMouseEnter: d,
    onMouseLeave: f,
    onClick: E,
    onContextMenu: _
  } = e, C = t || l || n, {
    Component: S,
    play: I,
    events: T
  } = (0, h.useMicrophoneLottie)(C ? "unmute" : "mute"), p = n || l ? c.MicrophoneDenyIcon : S;
  return s.useEffect(() => () => I(), [C, I]), (0, a.jsx)(eO.default, {
    tooltipText: r,
    tooltipColor: o,
    tooltipForceOpen: u,
    onMouseEnter: () => {
      d(), T.onMouseEnter()
    },
    onMouseLeave: () => {
      f(), T.onMouseLeave()
    },
    icon: (0, a.jsx)(p, {
      size: "custom",
      width: 20,
      height: 20,
      color: C ? m.tokens.colors.STATUS_DANGER : "currentColor"
    }),
    iconForeground: C ? eB.strikethrough : null,
    onClick: E,
    onContextMenu: _,
    role: "switch",
    "aria-label": eF.default.Messages.MUTE,
    "aria-checked": C,
    disabled: i
  })
}

function eQ(e) {
  let {
    selfDeaf: t,
    serverDeaf: n,
    awaitingRemote: l,
    onClick: r,
    onContextMenu: o
  } = e, u = t || n, {
    Component: c,
    play: f,
    events: {
      onMouseEnter: E,
      onMouseLeave: h
    }
  } = (0, _.useHeadphonesLottie)(u ? "undeafen" : "deafen"), C = n ? d.HeadphonesDenyIcon : c;
  return s.useEffect(() => () => f(), [u, f]), (0, a.jsx)(eO.default, {
    tooltipText: (0, P.default)(t, n, l),
    onMouseEnter: E,
    onMouseLeave: h,
    icon: (0, a.jsx)(C, {
      size: "custom",
      width: 20,
      height: 20,
      color: u ? m.tokens.colors.STATUS_DANGER : "currentColor"
    }),
    onClick: r,
    onContextMenu: o,
    innerClassName: i()({
      [eB.redIcon]: n
    }),
    iconForeground: u ? eB.strikethrough : null,
    role: "switch",
    "aria-label": eF.default.Messages.DEAFEN,
    "aria-checked": u,
    disabled: l
  })
}