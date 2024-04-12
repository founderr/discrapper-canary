"use strict";
a.r(t), a.d(t, {
  default: function() {
    return eW
  }
}), a("47120"), a("653041");
var n = a("735250"),
  s = a("470079"),
  l = a("803997"),
  i = a.n(l),
  r = a("442837"),
  o = a("524437"),
  u = a("846519"),
  d = a("742444"),
  c = a("247636"),
  f = a("128951"),
  E = a("952826"),
  h = a("400354"),
  _ = a("652844"),
  C = a("789639"),
  m = a("481060"),
  S = a("355467"),
  p = a("239091"),
  I = a("230711"),
  T = a("255952"),
  g = a("410575"),
  A = a("941129"),
  N = a("83200"),
  v = a("634894"),
  R = a("586902"),
  O = a("1585"),
  L = a("304761"),
  M = a("865427"),
  P = a("571250"),
  x = a("628581"),
  y = a("55311"),
  D = a("575175"),
  b = a("377171"),
  U = a("676035"),
  j = a("427217"),
  G = a("605236"),
  w = a("243778"),
  k = a("730417"),
  F = a("524347"),
  H = a("853197"),
  B = a("810280"),
  V = a("60762"),
  Y = a("258609"),
  W = a("278464"),
  K = a("917112"),
  z = a("331541"),
  q = a("332473"),
  Q = a("240504"),
  Z = a("637906"),
  X = a("39370"),
  J = a("19199"),
  $ = a("111653"),
  ee = a("212704"),
  et = a("14357"),
  ea = a("393333"),
  en = a("763296"),
  es = a("640806"),
  el = a("484459"),
  ei = a("584427"),
  er = a("52538"),
  eo = a("331187"),
  eu = a("879815"),
  ed = a("294629"),
  ec = a("314897"),
  ef = a("592125"),
  eE = a("819640"),
  eh = a("131951"),
  e_ = a("19780"),
  eC = a("885110"),
  em = a("246946"),
  eS = a("594174"),
  ep = a("78839"),
  eI = a("285952"),
  eT = a("546591"),
  eg = a("86813"),
  eA = a("826026"),
  eN = a("937482"),
  ev = a("87888"),
  eR = a("976401"),
  eO = a("333454"),
  eL = a("864441"),
  eM = a("26290"),
  eP = a("626135"),
  ex = a("768581"),
  ey = a("572004"),
  eD = a("70956"),
  eb = a("374023"),
  eU = a("51144"),
  ej = a("998502"),
  eG = a("981631"),
  ew = a("702512"),
  ek = a("689938"),
  eF = a("610276");

function eH(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let eB = ej.default.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar,
  eV = 30 * eD.default.Millis.DAY;
class eY extends s.PureComponent {
  get isCopiedStreakGodlike() {
    let {
      copiedStreak: e
    } = this.state;
    return e >= 10
  }
  componentDidUpdate(e) {
    let {
      speakingWhileMuted: t,
      occluded: a
    } = e, {
      speakingWhileMuted: n,
      occluded: s
    } = this.props;
    s !== a && this.handleOccludedChanged(), n !== t && this.handleSpeakingWhileMutedChanged()
  }
  componentWillUnmount() {
    this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop()
  }
  renderCopiedSuccess() {
    let {
      copiedStreak: e
    } = this.state, t = [ek.default.Messages.COPY_SUCCESS_1, ek.default.Messages.COPY_SUCCESS_2, ek.default.Messages.COPY_SUCCESS_3, ek.default.Messages.COPY_SUCCESS_4, ek.default.Messages.COPY_SUCCESS_5, ek.default.Messages.COPY_SUCCESS_6, ek.default.Messages.COPY_SUCCESS_7, ek.default.Messages.COPY_SUCCESS_8, ek.default.Messages.COPY_SUCCESS_9, ek.default.Messages.COPY_SUCCESS_10, ek.default.Messages.COPY_SUCCESS_11], a = Math.min(Math.max(0, e - 1), t.length - 1);
    return (0, n.jsx)(m.Shaker, {
      isShaking: this.isCopiedStreakGodlike,
      children: t[a]
    })
  }
  renderNameTag() {
    let e;
    let {
      hovered: t
    } = this.state, {
      customStatusActivity: a,
      userTag: s,
      currentUser: l,
      status: i
    } = this.props;
    if (null == l) return null;
    let r = eU.default.getName(l),
      o = null != i && i !== eG.StatusTypes.UNKNOWN,
      u = null != a;
    return (u || o && l.isPomelo()) && (e = (0, n.jsx)(eT.default, {
      hoverText: s,
      forceHover: t,
      children: u ? (0, n.jsx)(j.default, {
        activity: a,
        emojiClassName: eF.emoji,
        className: eF.customStatus
      }) : eU.default.humanizeStatus(i)
    })), (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: eF.panelTitleContainer,
        children: (0, n.jsx)(eL.default, {
          children: r
        })
      }), (0, n.jsx)("div", {
        className: eF.panelSubtextContainer,
        children: (0, n.jsx)(eO.default, {
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
      shouldShowCopiedFeedback: a
    } = this.state;
    if (null == e) return null;
    let s = null,
      l = m.TooltipColors.PRIMARY;
    return ey.SUPPORTS_COPY && (s = ek.default.Messages.ACCOUNT_CLICK_TO_COPY, a && (s = this.renderCopiedSuccess(), l = this.isCopiedStreakGodlike ? m.TooltipColors.RED : m.TooltipColors.GREEN)), (0, n.jsx)(m.Tooltip, {
      text: s,
      forceOpen: t,
      "aria-label": !!ey.SUPPORTS_COPY && ek.default.Messages.ACCOUNT_CLICK_TO_COPY,
      color: l,
      delay: 500,
      onAnimationRest: (e, n) => {
        a && !t && n.phase === eG.SpringTransitionPhases.LEAVE && this.setState({
          shouldShowCopiedFeedback: !1
        })
      },
      children: e => {
        let {
          onClick: t,
          onMouseEnter: s,
          ...l
        } = e;
        return (0, n.jsx)(m.Clickable, {
          ...l,
          onMouseEnter: () => {
            a ? (this.copiedTimeout.stop(), this.setState({
              shouldShowNametagTooltip: !1
            }, s)) : null == s || s()
          },
          onClick: () => {
            null == t || t(), this.handleCopyTag()
          },
          className: i()(eF.nameTag, {
            [eF.canCopy]: ey.SUPPORTS_COPY
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
      currentUser: a,
      status: s,
      showTagAsButton: l,
      showTaglessAccountPanel: r
    } = this.props;
    if (null == a) return null;
    let o = (0, ex.getAvatarDecorationURL)({
      avatarDecoration: a.avatarDecoration,
      size: (0, O.getDecorationSizeForAvatarSize)(m.AvatarSizes.SIZE_32)
    });
    return (0, n.jsx)(g.default, {
      object: eG.AnalyticsObjects.AVATAR,
      children: (0, n.jsx)(m.Popout, {
        renderPopout: this.renderStatusPickerPopout,
        position: "top",
        align: "left",
        animation: m.Popout.Animation.FADE,
        spacing: 14,
        fixed: !0,
        preload: () => (0, el.default)(a.id, null == a ? void 0 : a.getAvatarURL(null, 80)),
        children: (u, d) => (0, n.jsxs)(m.Clickable, {
          ...u,
          "aria-label": ek.default.Messages.SET_STATUS,
          className: i()(eF.avatarWrapper, {
            [eF.withTagAsButton]: l,
            [eF.withTagless]: r
          }),
          children: [(0, n.jsx)(eB, {
            size: m.AvatarSizes.SIZE_32,
            src: a.getAvatarURL(void 0, 32, !1),
            avatarDecoration: o,
            "aria-label": a.username,
            status: t ? eG.StatusTypes.STREAMING : s,
            isSpeaking: e,
            className: eF.avatar
          }), l || r ? (0, n.jsx)("div", {
            className: i()(eF.nameTag, {
              [eF.canCopy]: ey.SUPPORTS_COPY
            }),
            children: r ? (0, n.jsx)(eR.default, {
              tooltipText: null,
              icon: d.isShown ? eg.default : eA.default,
              role: "switch",
              "aria-label": ek.default.Messages.SET_STATUS
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
      showTagAsButton: a,
      showTaglessAccountPanel: s
    } = this.props;
    return null == e ? null : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(w.default, {
        contentTypes: t.avatar,
        children: e => {
          let {
            visibleContent: t
          } = e;
          return this.renderAvatarWithPopout()
        }
      }), a || s ? null : this.renderCopiableNameTag()]
    })
  }
  render() {
    let {
      currentUser: e,
      selfDeaf: t,
      selfMute: a,
      awaitingRemote: s,
      serverMute: l,
      serverDeaf: i,
      suppress: r,
      dismissibleContents: u
    } = this.props, {
      shouldShowSpeakingWhileMutedTooltip: d
    } = this.state;
    return null == e ? null : (0, n.jsxs)("div", {
      className: eF.container,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [this.renderNameZone(), (0, n.jsxs)(eI.default, {
        grow: 0,
        children: [(0, n.jsx)(ez, {
          selfMute: a,
          serverMute: l,
          suppress: r,
          awaitingRemote: s,
          tooltipText: d ? ek.default.Messages.ACCOUNT_SPEAKING_WHILE_MUTED : (0, x.default)(a, l, r, s),
          tooltipColor: d ? m.TooltipColors.GREEN : void 0,
          tooltipForceOpen: d || void 0,
          onMouseEnter: this.handleMouseEnterMute,
          onMouseLeave: this.handleMouseLeaveMute,
          onClick: this.handleToggleSelfMute,
          onContextMenu: this.handleInputAudioContextMenu
        }), (0, n.jsx)(eq, {
          selfDeaf: t,
          serverDeaf: i,
          onClick: this.handleToggleSelfDeaf,
          onContextMenu: this.handleOutputAudioContextMenu,
          awaitingRemote: s
        }), (0, n.jsx)(w.default, {
          contentTypes: u.settings,
          children: e => {
            let {
              visibleContent: t,
              markAsDismissed: a
            } = e;
            switch (t) {
              case o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                return (0, n.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, n.jsx)(X.default, {}),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP:
                return (0, n.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, n.jsx)(B.default, {
                    markAsDismissed: a,
                    partnerGame: ew.PartnerGame.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP:
                return (0, n.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, n.jsx)(V.default, {
                    markAsDismissed: a,
                    partnerGame: ew.PartnerGame.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_SAFE_DIRECT_MESSAGING:
                return (0, n.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, n.jsx)(eo.default, {
                    markAsDismissed: a
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                return (0, n.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, n.jsx)(ee.default, {
                    markAsDismissed: a
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                return (0, n.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, n.jsx)(et.default, {
                    markAsDismissed: a
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION:
                return (0, n.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, n.jsx)(es.default, {
                    markAsDismissed: a
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                return (0, n.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, n.jsx)(ea.UserSafetyEducationReportingCoachmark, {
                    markAsDismissed: a
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                return (0, n.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, n.jsx)(er.default, {}),
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
      (0, D.default)(e, t)
    }), eH(this, "handleToggleSelfDeaf", () => {
      let {
        serverDeaf: e
      } = this.props;
      (0, y.default)(e)
    }), eH(this, "handleOpenAccountSettings", () => {
      this.handleOpenSettings()
    }), eH(this, "handleOpenSettings", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.UserSettingsSections.ACCOUNT,
        t = arguments.length > 1 ? arguments[1] : void 0,
        a = arguments.length > 2 ? arguments[2] : void 0;
      I.default.open(e, t, a)
    }), eH(this, "handleOpenSettingsContextMenu", e => {
      let {
        currentUser: t
      } = this.props;
      null != t && (0, p.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([a.e("49237"), a.e("99387"), a.e("8895"), a.e("15972"), a.e("58625"), a.e("6416"), a.e("14720"), a.e("63438"), a.e("33053"), a.e("49146"), a.e("17938"), a.e("76540"), a.e("65866"), a.e("5528"), a.e("92427"), a.e("18824"), a.e("74753"), a.e("2535")]).then(a.bind(a, "923422"));
        return a => (0, n.jsx)(e, {
          ...a,
          user: t,
          premiumSubscription: this.props.premiumSubscription,
          webBuildOverride: this.props.webBuildOverride
        })
      })
    }), eH(this, "handleInputAudioContextMenu", e => {
      (0, p.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(a.bind(a, "659580"));
        return () => (0, n.jsx)(e, {
          onClose: p.closeContextMenu,
          renderInputDevices: !0,
          renderInputModes: !0,
          renderInputVolume: !0
        })
      })
    }), eH(this, "handleOutputAudioContextMenu", e => {
      (0, p.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(a.bind(a, "659580"));
        return () => (0, n.jsx)(e, {
          onClose: p.closeContextMenu,
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
        copiedStreak: a
      } = this.state;
      if (null == e) return;
      (0, ey.copy)(eU.default.getUserTag(e, {
        decoration: "never",
        identifiable: "always"
      })), eP.default.track(eG.AnalyticEvents.TEXT_COPIED, {
        type: "User Tag"
      });
      let n = {
        shouldShowCopiedFeedback: !0,
        shouldShowNametagTooltip: !0
      };
      !t && (n.copiedStreak = a + 1), this.setState(n, () => {
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
        suppress: a,
        speakingWhileMuted: n,
        occluded: s
      } = this.props, {
        hoveringOnMute: l
      } = this.state;
      n ? !l && e && !t && !a && !s && this.setState({
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
        showRichProfilePopup: a,
        currentUser: s
      } = this.props;
      if (a) {
        let e = {
          userId: null == s ? void 0 : s.id,
          user: s,
          onClose: () => {
            this.handleMouseLeave(), null == t || t()
          }
        };
        return (0, n.jsx)("div", {
          className: eF.accountProfilePopoutWrapper,
          children: (0, n.jsx)(z.default, {
            ...e
          })
        })
      }
      return (0, n.jsx)(T.default, {
        onClose: () => {
          this.handleMouseLeave(), null == t || t()
        }
      })
    }), eH(this, "renderSettingsGear", () => (0, n.jsx)(eK, {
      isEligibleForPomelo: this.props.isEligibleForPomelo,
      webBuildOverride: this.props.webBuildOverride,
      onClick: this.handleOpenAccountSettings,
      onContextMenu: this.handleOpenSettingsContextMenu
    }))
  }
}

function eW() {
  let e = (0, r.useStateFromStores)([eS.default], () => eS.default.getCurrentUser()),
    t = (0, k.useShowEligibilityEnrollmentTooltip)(ew.PartnerGame.FORTNITE),
    a = (0, r.useStateFromStores)([ec.default], () => ec.default.getId()),
    l = (0, U.useCustomStatusActivity)(),
    {
      streaming: i,
      status: u
    } = (0, r.useStateFromStoresObject)([eC.default], () => ({
      streaming: null != eC.default.findActivity(e => e.type === eG.ActivityTypes.STREAMING),
      status: eC.default.getStatus()
    })),
    d = (0, R.default)({
      userId: a
    }),
    c = eU.default.useUserTag(e, {
      decoration: "never"
    }),
    f = (0, r.useStateFromStores)([em.default], () => em.default.hidePersonalInformation),
    E = (0, r.useStateFromStores)([e_.default, ef.default], () => {
      let e = e_.default.getChannelId();
      return null != e ? ef.default.getChannel(e) : null
    }),
    {
      mute: h,
      selfMute: _,
      suppress: C
    } = (0, ed.default)(E),
    {
      selfDeaf: p,
      deaf: I
    } = (0, eu.default)(E),
    T = (0, r.useStateFromStores)([L.default], () => {
      var e;
      return (0, M.probablyHasBuildOverride)() ? null === (e = L.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
    }),
    g = (0, r.useStateFromStores)([ep.default], () => ep.default.getPremiumTypeSubscription()),
    O = (0, r.useStateFromStores)([eh.default], () => eh.default.getEverSpeakingWhileMuted()),
    P = (0, r.useStateFromStores)([eE.default], () => eE.default.hasLayers()),
    x = (0, m.useModalsStore)(m.hasAnyModalOpenSelector) || P || eb.ProcessArgs.isDisallowPopupsSet(),
    y = (0, q.useIsEligibleForPomelo)();
  s.useEffect(() => {
    K.default.trackExposure({
      location: "08bd40_3"
    })
  });
  let D = (0, r.useStateFromStores)([Y.default], () => null != Y.default.getAwaitingRemoteSessionInfo()),
    {
      isPopupEnabled: b,
      isJoinedTagButtonEnabled: j,
      isTaglessAccountPanelEnabled: w
    } = K.default.useExperiment({
      location: "08bd40_4"
    }, {
      autoTrackExposure: !1
    }),
    B = (0, r.useStateFromStores)([F.default], () => F.default.isCurrentQuestCompleted),
    V = (0, r.useStateFromStores)([F.default], () => F.default.currentDropQuestGameTitle),
    z = (0, W.useIsHomeSelected)(),
    X = (0, N.useIsDmSpamFilterCoachmarkEnabled)(),
    ee = (0, J.useCanSeeSafetyEducationBlockMuteCoachmark)(),
    et = (0, A.useIsSafetyConsumerEducationBlockMuteBucket)(),
    ea = (0, $.useCanSeeSafetyEducationReportingCoachmark)(),
    es = (0, ei.default)(e),
    el = "account";
  (0, v.useTriggerDebuggingAA)({
    location: el + " auto on",
    autoTrackExposure: !0
  }), (0, v.useTriggerDebuggingAA)({
    location: el + " auto off",
    autoTrackExposure: !1
  }), (0, J.useSafetyEducationAATriggerPoint)();
  let er = (0, r.useStateFromStores)([en.default], () => en.default.hasHadOtherUserPlaySoundInSession()),
    eo = function() {
      let e = (0, G.useIsDismissibleContentDismissed)(o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
        [t, a] = (0, r.useStateFromStoresArray)([Q.default], () => [Q.default.hasFetchedRelevance, Q.default.profileThemesRelevanceExceeded]),
        [n, l] = (0, r.useStateFromStoresArray)([ep.default], () => [ep.default.hasFetchedMostRecentPremiumTypeSubscription(), ep.default.getMostRecentPremiumTypeSubscription()]),
        {
          enabled: i
        } = Z.default.useExperiment({
          location: "08bd40_1"
        }, {
          autoTrackExposure: !0
        }),
        u = s.useMemo(() => {
          let e = new Date().getTime();
          return null != l && (l.status === eG.SubscriptionStatusTypes.ACTIVE || e - l.currentPeriodEnd.getTime() < eV)
        }, [l]);
      return s.useEffect(() => {
        (async () => {
          if (!e && null == a && !!i) {
            if (!n) {
              await (0, S.fetchMostRecentSubscription)();
              return
            }!u && !t && await (0, S.getPerksRelevance)()
          }
        })()
      }, [i, a, e, n, t, u]), !e && !!i && !u && null != a && a
    }(),
    eI = {
      avatar: [],
      settings: []
    };
  if (!x) {
    if (eo && eI.settings.push(o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), t) {
      var eT;
      eI.settings.push(o.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP), B && V === (null === (eT = (0, H.getDrop)(ew.PartnerGame.FORTNITE)) || void 0 === eT ? void 0 : eT.title) && eI.settings.push(o.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP)
    }
    z && X && eI.settings.push(o.DismissibleContent.USER_SAFETY_SAFE_DIRECT_MESSAGING), ee && (1 === et ? eI.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : eI.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), er && eI.settings.push(o.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION), ea && eI.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), es && eI.settings.push(o.DismissibleContent.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK)
  }
  return (0, n.jsx)(eY, {
    currentUser: e,
    customStatusActivity: l,
    dismissibleContents: eI,
    userTag: c,
    hidePrivateData: f,
    occluded: x,
    premiumSubscription: g,
    selfDeaf: p,
    selfMute: _,
    serverDeaf: I,
    serverMute: h,
    showRichProfilePopup: b,
    showTagAsButton: j,
    showTaglessAccountPanel: w,
    speaking: d,
    speakingWhileMuted: O,
    status: u,
    streaming: i,
    suppress: C,
    webBuildOverride: T,
    awaitingRemote: D,
    isEligibleForPomelo: y
  })
}

function eK(e) {
  let {
    webBuildOverride: t,
    isEligibleForPomelo: a,
    onClick: s,
    onContextMenu: l
  } = e, i = (0, m.useRedesignIconContext)().enabled, r = null, o = eN.default, u = (0, C.useSettingsLottie)();
  return i ? o = null != t ? E.SettingsInfoIcon : a ? f.SettingsCircleIcon : u.Component : null != t ? r = (0, n.jsx)(ev.default, {
    width: 9,
    height: 9,
    className: eF.hasBuildOverride,
    "aria-hidden": !0
  }) : a && (r = (0, n.jsx)(eM.CircleBadge, {
    color: b.default.STATUS_DANGER,
    className: eF.hasBuildOverride,
    "aria-hidden": !0
  })), (0, n.jsx)(eR.default, {
    tooltipText: null != t ? ek.default.Messages.USER_SETTINGS_WITH_BUILD_OVERRIDE.format({
      webBuildOverride: t.id
    }) : ek.default.Messages.USER_SETTINGS,
    onClick: s,
    onContextMenu: l,
    innerClassName: null != t || a ? eF.buildOverrideButton : null,
    icon: o,
    ...u.events,
    children: r
  })
}

function ez(e) {
  let {
    selfMute: t,
    serverMute: a,
    suppress: l,
    awaitingRemote: i,
    tooltipText: r,
    tooltipColor: o,
    tooltipForceOpen: u,
    onMouseEnter: d,
    onMouseLeave: f,
    onClick: E,
    onContextMenu: h
  } = e, C = t || l || a, {
    Component: S,
    play: p,
    events: I
  } = (0, _.useMicrophoneLottie)(C ? "unmute" : "mute"), T = a || l ? c.MicrophoneDenyIcon : S;
  return s.useEffect(() => () => p(), [C, p]), (0, n.jsx)(eR.default, {
    tooltipText: r,
    tooltipColor: o,
    tooltipForceOpen: u,
    onMouseEnter: () => {
      d(), I.onMouseEnter()
    },
    onMouseLeave: () => {
      f(), I.onMouseLeave()
    },
    icon: (0, n.jsx)(T, {
      size: "custom",
      width: 20,
      height: 20,
      color: C ? m.tokens.colors.STATUS_DANGER : "currentColor"
    }),
    iconForeground: C ? eF.strikethrough : null,
    onClick: E,
    onContextMenu: h,
    role: "switch",
    "aria-label": ek.default.Messages.MUTE,
    "aria-checked": C,
    disabled: i
  })
}

function eq(e) {
  let {
    selfDeaf: t,
    serverDeaf: a,
    awaitingRemote: l,
    onClick: r,
    onContextMenu: o
  } = e, u = t || a, {
    Component: c,
    play: f,
    events: {
      onMouseEnter: E,
      onMouseLeave: _
    }
  } = (0, h.useHeadphonesLottie)(u ? "undeafen" : "deafen"), C = a ? d.HeadphonesDenyIcon : c;
  return s.useEffect(() => () => f(), [u, f]), (0, n.jsx)(eR.default, {
    tooltipText: (0, P.default)(t, a, l),
    onMouseEnter: E,
    onMouseLeave: _,
    icon: (0, n.jsx)(C, {
      size: "custom",
      width: 20,
      height: 20,
      color: u ? m.tokens.colors.STATUS_DANGER : "currentColor"
    }),
    onClick: r,
    onContextMenu: o,
    innerClassName: i()({
      [eF.redIcon]: a
    }),
    iconForeground: u ? eF.strikethrough : null,
    role: "switch",
    "aria-label": ek.default.Messages.DEAFEN,
    "aria-checked": u,
    disabled: l
  })
}