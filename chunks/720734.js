"use strict";
a.r(t), a.d(t, {
  default: function() {
    return ez
  }
}), a("47120"), a("653041");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
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
  I = a("239091"),
  p = a("230711"),
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
  b = a("64220"),
  U = a("377171"),
  j = a("676035"),
  G = a("427217"),
  w = a("605236"),
  k = a("243778"),
  F = a("730417"),
  H = a("524347"),
  B = a("853197"),
  V = a("810280"),
  Y = a("60762"),
  W = a("258609"),
  K = a("278464"),
  z = a("917112"),
  q = a("331541"),
  Q = a("332473"),
  Z = a("240504"),
  X = a("637906"),
  J = a("39370"),
  $ = a("19199"),
  ee = a("111653"),
  et = a("212704"),
  ea = a("14357"),
  en = a("393333"),
  es = a("763296"),
  el = a("640806"),
  ei = a("484459"),
  er = a("584427"),
  eo = a("52538"),
  eu = a("331187"),
  ed = a("879815"),
  ec = a("294629"),
  ef = a("314897"),
  eE = a("592125"),
  eh = a("819640"),
  e_ = a("131951"),
  eC = a("19780"),
  em = a("885110"),
  eS = a("246946"),
  eI = a("594174"),
  ep = a("78839"),
  eT = a("285952"),
  eg = a("546591"),
  eA = a("86813"),
  eN = a("826026"),
  ev = a("937482"),
  eR = a("87888"),
  eO = a("976401"),
  eL = a("333454"),
  eM = a("864441"),
  eP = a("26290"),
  ex = a("626135"),
  ey = a("768581"),
  eD = a("572004"),
  eb = a("70956"),
  eU = a("374023"),
  ej = a("51144"),
  eG = a("998502"),
  ew = a("981631"),
  ek = a("414592"),
  eF = a("702512"),
  eH = a("689938"),
  eB = a("610276");

function eV(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let eY = eG.default.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar,
  eW = 30 * eb.default.Millis.DAY;
class eK extends s.PureComponent {
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
    } = this.state, t = [eH.default.Messages.COPY_SUCCESS_1, eH.default.Messages.COPY_SUCCESS_2, eH.default.Messages.COPY_SUCCESS_3, eH.default.Messages.COPY_SUCCESS_4, eH.default.Messages.COPY_SUCCESS_5, eH.default.Messages.COPY_SUCCESS_6, eH.default.Messages.COPY_SUCCESS_7, eH.default.Messages.COPY_SUCCESS_8, eH.default.Messages.COPY_SUCCESS_9, eH.default.Messages.COPY_SUCCESS_10, eH.default.Messages.COPY_SUCCESS_11], a = Math.min(Math.max(0, e - 1), t.length - 1);
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
    let r = ej.default.getName(l),
      o = null != i && i !== ew.StatusTypes.UNKNOWN,
      u = null != a;
    return (u || o && l.isPomelo()) && (e = (0, n.jsx)(eg.default, {
      hoverText: s,
      forceHover: t,
      children: u ? (0, n.jsx)(G.default, {
        activity: a,
        emojiClassName: eB.emoji,
        className: eB.customStatus
      }) : ej.default.humanizeStatus(i)
    })), (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: eB.panelTitleContainer,
        children: (0, n.jsx)(eM.default, {
          children: r
        })
      }), (0, n.jsx)("div", {
        className: eB.panelSubtextContainer,
        children: (0, n.jsx)(eL.default, {
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
    return eD.SUPPORTS_COPY && (s = eH.default.Messages.ACCOUNT_CLICK_TO_COPY, a && (s = this.renderCopiedSuccess(), l = this.isCopiedStreakGodlike ? m.TooltipColors.RED : m.TooltipColors.GREEN)), (0, n.jsx)(m.Tooltip, {
      text: s,
      forceOpen: t,
      "aria-label": !!eD.SUPPORTS_COPY && eH.default.Messages.ACCOUNT_CLICK_TO_COPY,
      color: l,
      delay: 500,
      onAnimationRest: (e, n) => {
        a && !t && n.phase === ew.SpringTransitionPhases.LEAVE && this.setState({
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
          className: i()(eB.nameTag, {
            [eB.canCopy]: eD.SUPPORTS_COPY
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
    let o = (0, ey.getAvatarDecorationURL)({
      avatarDecoration: a.avatarDecoration,
      size: (0, O.getDecorationSizeForAvatarSize)(m.AvatarSizes.SIZE_32)
    });
    return (0, n.jsx)(g.default, {
      object: ew.AnalyticsObjects.AVATAR,
      children: (0, n.jsx)(m.Popout, {
        renderPopout: this.renderStatusPickerPopout,
        position: "top",
        align: "left",
        animation: m.Popout.Animation.FADE,
        spacing: 14,
        fixed: !0,
        preload: () => (0, ei.default)(a.id, null == a ? void 0 : a.getAvatarURL(null, 80)),
        children: (u, d) => (0, n.jsxs)(m.Clickable, {
          ...u,
          "aria-label": eH.default.Messages.SET_STATUS,
          className: i()(eB.avatarWrapper, {
            [eB.withTagAsButton]: l,
            [eB.withTagless]: r
          }),
          children: [(0, n.jsx)(eY, {
            size: m.AvatarSizes.SIZE_32,
            src: a.getAvatarURL(void 0, 32, !1),
            avatarDecoration: o,
            "aria-label": a.username,
            status: t ? ew.StatusTypes.STREAMING : s,
            isSpeaking: e,
            className: eB.avatar
          }), l || r ? (0, n.jsx)("div", {
            className: i()(eB.nameTag, {
              [eB.canCopy]: eD.SUPPORTS_COPY
            }),
            children: r ? (0, n.jsx)(eO.default, {
              tooltipText: null,
              icon: d.isShown ? eA.default : eN.default,
              role: "switch",
              "aria-label": eH.default.Messages.SET_STATUS
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
      children: [(0, n.jsx)(k.default, {
        contentTypes: t.avatar,
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: a
          } = e;
          if (t === o.DismissibleContent.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP) return (0, n.jsx)(b.default, {
            markAsDismissed: a,
            children: () => this.renderAvatarWithPopout()
          });
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
      className: eB.container,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [this.renderNameZone(), (0, n.jsxs)(eT.default, {
        grow: 0,
        children: [(0, n.jsx)(eQ, {
          selfMute: a,
          serverMute: l,
          suppress: r,
          awaitingRemote: s,
          tooltipText: d ? eH.default.Messages.ACCOUNT_SPEAKING_WHILE_MUTED : (0, x.default)(a, l, r, s),
          tooltipColor: d ? m.TooltipColors.GREEN : void 0,
          tooltipForceOpen: d || void 0,
          onMouseEnter: this.handleMouseEnterMute,
          onMouseLeave: this.handleMouseLeaveMute,
          onClick: this.handleToggleSelfMute,
          onContextMenu: this.handleInputAudioContextMenu
        }), (0, n.jsx)(eZ, {
          selfDeaf: t,
          serverDeaf: i,
          onClick: this.handleToggleSelfDeaf,
          onContextMenu: this.handleOutputAudioContextMenu,
          awaitingRemote: s
        }), (0, n.jsx)(k.default, {
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
                  renderPopout: () => (0, n.jsx)(J.default, {}),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP:
                return (0, n.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, n.jsx)(V.default, {
                    markAsDismissed: a,
                    partnerGame: eF.PartnerGame.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP:
                return (0, n.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, n.jsx)(Y.default, {
                    markAsDismissed: a,
                    partnerGame: eF.PartnerGame.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_SAFE_DIRECT_MESSAGING:
                return (0, n.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, n.jsx)(eu.default, {
                    markAsDismissed: a
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                return (0, n.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, n.jsx)(et.default, {
                    markAsDismissed: a
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                return (0, n.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, n.jsx)(ea.default, {
                    markAsDismissed: a
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION:
                return (0, n.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, n.jsx)(el.default, {
                    markAsDismissed: a
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                return (0, n.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, n.jsx)(en.UserSafetyEducationReportingCoachmark, {
                    markAsDismissed: a
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                return (0, n.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, n.jsx)(eo.default, {}),
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
    super(...e), eV(this, "copiedTimeout", new u.Timeout), eV(this, "copiedDecayTimeout", new u.Timeout), eV(this, "speakingWhileMutedTooltipTimeout", new u.Timeout), eV(this, "state", {
      hovered: !1,
      copiedStreak: 0,
      shouldShowNametagTooltip: !1,
      shouldShowCopiedFeedback: !1,
      shouldShowSpeakingWhileMutedTooltip: !1,
      hoveringOnMute: !1
    }), eV(this, "handleToggleSelfMute", () => {
      let {
        serverMute: e,
        suppress: t
      } = this.props;
      (0, D.default)(e, t)
    }), eV(this, "handleToggleSelfDeaf", () => {
      let {
        serverDeaf: e
      } = this.props;
      (0, y.default)(e)
    }), eV(this, "handleOpenAccountSettings", () => {
      this.handleOpenSettings()
    }), eV(this, "handleOpenSettings", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.UserSettingsSections.ACCOUNT,
        t = arguments.length > 1 ? arguments[1] : void 0,
        a = arguments.length > 2 ? arguments[2] : void 0;
      p.default.open(e, t, a)
    }), eV(this, "handleOpenSettingsContextMenu", e => {
      let {
        currentUser: t
      } = this.props;
      null != t && (0, I.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([a.e("49237"), a.e("99387"), a.e("66635"), a.e("40326"), a.e("23357"), a.e("8895"), a.e("15972"), a.e("58625"), a.e("6416"), a.e("63438"), a.e("61247"), a.e("58600"), a.e("33053"), a.e("49146"), a.e("17938"), a.e("76540"), a.e("65866"), a.e("5528"), a.e("85907"), a.e("18824"), a.e("74753"), a.e("2535")]).then(a.bind(a, "923422"));
        return a => (0, n.jsx)(e, {
          ...a,
          user: t,
          premiumSubscription: this.props.premiumSubscription,
          webBuildOverride: this.props.webBuildOverride
        })
      })
    }), eV(this, "handleInputAudioContextMenu", e => {
      (0, I.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(a.bind(a, "659580"));
        return () => (0, n.jsx)(e, {
          onClose: I.closeContextMenu,
          renderInputDevices: !0,
          renderInputModes: !0,
          renderInputVolume: !0
        })
      })
    }), eV(this, "handleOutputAudioContextMenu", e => {
      (0, I.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(a.bind(a, "659580"));
        return () => (0, n.jsx)(e, {
          onClose: I.closeContextMenu,
          renderOutputDevices: !0,
          renderOutputVolume: !0
        })
      })
    }), eV(this, "handleMouseEnter", () => {
      this.setState({
        hovered: !0
      })
    }), eV(this, "handleMouseLeave", () => {
      this.setState({
        hovered: !1
      })
    }), eV(this, "handleMouseEnterMute", () => {
      this.setState({
        hoveringOnMute: !0,
        shouldShowSpeakingWhileMutedTooltip: !1
      }), this.speakingWhileMutedTooltipTimeout.stop()
    }), eV(this, "handleMouseLeaveMute", () => {
      this.setState({
        hoveringOnMute: !1
      })
    }), eV(this, "handleCopyTag", () => {
      let {
        currentUser: e
      } = this.props, {
        shouldShowNametagTooltip: t,
        copiedStreak: a
      } = this.state;
      if (null == e) return;
      (0, eD.copy)(ej.default.getUserTag(e, {
        decoration: "never",
        identifiable: "always"
      })), ex.default.track(ew.AnalyticEvents.TEXT_COPIED, {
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
    }), eV(this, "handleOccludedChanged", () => {
      let {
        occluded: e
      } = this.props;
      e && this.setState({
        shouldShowNametagTooltip: !1,
        shouldShowSpeakingWhileMutedTooltip: !1
      })
    }), eV(this, "handleSpeakingWhileMutedChanged", () => {
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
    }), eV(this, "renderStatusPickerPopout", e => {
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
          className: eB.accountProfilePopoutWrapper,
          children: (0, n.jsx)(q.default, {
            ...e
          })
        })
      }
      return (0, n.jsx)(T.default, {
        onClose: () => {
          this.handleMouseLeave(), null == t || t()
        }
      })
    }), eV(this, "renderSettingsGear", () => (0, n.jsx)(eq, {
      isEligibleForPomelo: this.props.isEligibleForPomelo,
      webBuildOverride: this.props.webBuildOverride,
      onClick: this.handleOpenAccountSettings,
      onContextMenu: this.handleOpenSettingsContextMenu
    }))
  }
}

function ez() {
  var e, t;
  let a = (0, r.useStateFromStores)([eI.default], () => eI.default.getCurrentUser()),
    l = (0, F.useShowEligibilityEnrollmentTooltip)(eF.PartnerGame.FORTNITE),
    i = (0, r.useStateFromStores)([ef.default], () => ef.default.getId()),
    u = (0, j.useCustomStatusActivity)(),
    {
      streaming: d,
      status: c
    } = (0, r.useStateFromStoresObject)([em.default], () => ({
      streaming: null != em.default.findActivity(e => e.type === ew.ActivityTypes.STREAMING),
      status: em.default.getStatus()
    })),
    f = (0, R.default)({
      userId: i
    }),
    E = ej.default.useUserTag(a, {
      decoration: "never"
    }),
    h = (0, r.useStateFromStores)([eS.default], () => eS.default.hidePersonalInformation),
    _ = (0, r.useStateFromStores)([eC.default, eE.default], () => {
      let e = eC.default.getChannelId();
      return null != e ? eE.default.getChannel(e) : null
    }),
    {
      mute: C,
      selfMute: I,
      suppress: p
    } = (0, ec.default)(_),
    {
      selfDeaf: T,
      deaf: g
    } = (0, ed.default)(_),
    O = (0, r.useStateFromStores)([L.default], () => {
      var e;
      return (0, M.probablyHasBuildOverride)() ? null === (e = L.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
    }),
    P = (0, r.useStateFromStores)([ep.default], () => ep.default.getPremiumTypeSubscription()),
    x = (0, r.useStateFromStores)([e_.default], () => e_.default.getEverSpeakingWhileMuted()),
    y = (0, r.useStateFromStores)([eh.default], () => eh.default.hasLayers()),
    D = (0, m.useModalsStore)(m.hasAnyModalOpenSelector) || y || eU.ProcessArgs.isDisallowPopupsSet(),
    b = (0, Q.useIsEligibleForPomelo)();
  s.useEffect(() => {
    z.default.trackExposure({
      location: "08bd40_3"
    })
  });
  let U = (0, r.useStateFromStores)([W.default], () => null != W.default.getAwaitingRemoteSessionInfo()),
    {
      isPopupEnabled: G,
      isJoinedTagButtonEnabled: k,
      isTaglessAccountPanelEnabled: V
    } = z.default.useExperiment({
      location: "08bd40_4"
    }, {
      autoTrackExposure: !1
    }),
    Y = (0, r.useStateFromStores)([H.default], () => H.default.isCurrentQuestCompleted),
    q = (0, r.useStateFromStores)([H.default], () => H.default.currentDropQuestGameTitle),
    J = (0, K.useIsHomeSelected)(),
    et = (0, N.useIsDmSpamFilterCoachmarkEnabled)(),
    ea = (0, $.useCanSeeSafetyEducationBlockMuteCoachmark)(),
    en = (0, A.useIsSafetyConsumerEducationBlockMuteBucket)(),
    el = (0, ee.useCanSeeSafetyEducationReportingCoachmark)(),
    ei = (0, er.default)(a),
    eo = (null == a ? void 0 : null === (e = a.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === ek.GYOIKO_SAKURA_DECO_SKU_ID,
    eu = "account";
  (0, v.useTriggerDebuggingAA)({
    location: eu + " auto on",
    autoTrackExposure: !0
  }), (0, v.useTriggerDebuggingAA)({
    location: eu + " auto off",
    autoTrackExposure: !1
  }), (0, $.useSafetyEducationAATriggerPoint)();
  let eT = (0, r.useStateFromStores)([es.default], () => es.default.hasHadOtherUserPlaySoundInSession()),
    eg = function() {
      let e = (0, w.useIsDismissibleContentDismissed)(o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
        [t, a] = (0, r.useStateFromStoresArray)([Z.default], () => [Z.default.hasFetchedRelevance, Z.default.profileThemesRelevanceExceeded]),
        [n, l] = (0, r.useStateFromStoresArray)([ep.default], () => [ep.default.hasFetchedMostRecentPremiumTypeSubscription(), ep.default.getMostRecentPremiumTypeSubscription()]),
        {
          enabled: i
        } = X.default.useExperiment({
          location: "08bd40_1"
        }, {
          autoTrackExposure: !0
        }),
        u = s.useMemo(() => {
          let e = new Date().getTime();
          return null != l && (l.status === ew.SubscriptionStatusTypes.ACTIVE || e - l.currentPeriodEnd.getTime() < eW)
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
    eA = {
      avatar: [],
      settings: []
    };
  return !D && (eg && eA.settings.push(o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), l && (eA.settings.push(o.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP), Y && q === (null === (t = (0, B.getDrop)(eF.PartnerGame.FORTNITE)) || void 0 === t ? void 0 : t.title) && eA.settings.push(o.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP)), J && et && eA.settings.push(o.DismissibleContent.USER_SAFETY_SAFE_DIRECT_MESSAGING), ea && (1 === en ? eA.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : eA.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), eT && eA.settings.push(o.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION), el && eA.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), ei && eA.settings.push(o.DismissibleContent.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), eo && eA.avatar.push(o.DismissibleContent.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)), (0, n.jsx)(eK, {
    currentUser: a,
    customStatusActivity: u,
    dismissibleContents: eA,
    userTag: E,
    hidePrivateData: h,
    occluded: D,
    premiumSubscription: P,
    selfDeaf: T,
    selfMute: I,
    serverDeaf: g,
    serverMute: C,
    showRichProfilePopup: G,
    showTagAsButton: k,
    showTaglessAccountPanel: V,
    speaking: f,
    speakingWhileMuted: x,
    status: c,
    streaming: d,
    suppress: p,
    webBuildOverride: O,
    awaitingRemote: U,
    isEligibleForPomelo: b
  })
}

function eq(e) {
  let {
    webBuildOverride: t,
    isEligibleForPomelo: a,
    onClick: s,
    onContextMenu: l
  } = e, i = (0, m.useRedesignIconContext)().enabled, r = null, o = ev.default, u = (0, C.useSettingsLottie)();
  return i ? o = null != t ? E.SettingsInfoIcon : a ? f.SettingsCircleIcon : u.Component : null != t ? r = (0, n.jsx)(eR.default, {
    width: 9,
    height: 9,
    className: eB.hasBuildOverride,
    "aria-hidden": !0
  }) : a && (r = (0, n.jsx)(eP.CircleBadge, {
    color: U.default.STATUS_DANGER,
    className: eB.hasBuildOverride,
    "aria-hidden": !0
  })), (0, n.jsx)(eO.default, {
    tooltipText: null != t ? eH.default.Messages.USER_SETTINGS_WITH_BUILD_OVERRIDE.format({
      webBuildOverride: t.id
    }) : eH.default.Messages.USER_SETTINGS,
    onClick: s,
    onContextMenu: l,
    innerClassName: null != t || a ? eB.buildOverrideButton : null,
    icon: o,
    ...u.events,
    children: r
  })
}

function eQ(e) {
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
    play: I,
    events: p
  } = (0, _.useMicrophoneLottie)(C ? "unmute" : "mute"), T = a || l ? c.MicrophoneDenyIcon : S;
  return s.useEffect(() => () => I(), [C, I]), (0, n.jsx)(eO.default, {
    tooltipText: r,
    tooltipColor: o,
    tooltipForceOpen: u,
    onMouseEnter: () => {
      d(), p.onMouseEnter()
    },
    onMouseLeave: () => {
      f(), p.onMouseLeave()
    },
    icon: (0, n.jsx)(T, {
      size: "custom",
      width: 20,
      height: 20,
      color: C ? m.tokens.colors.STATUS_DANGER : "currentColor"
    }),
    iconForeground: C ? eB.strikethrough : null,
    onClick: E,
    onContextMenu: h,
    role: "switch",
    "aria-label": eH.default.Messages.MUTE,
    "aria-checked": C,
    disabled: i
  })
}

function eZ(e) {
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
  return s.useEffect(() => () => f(), [u, f]), (0, n.jsx)(eO.default, {
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
      [eB.redIcon]: a
    }),
    iconForeground: u ? eB.strikethrough : null,
    role: "switch",
    "aria-label": eH.default.Messages.DEAFEN,
    "aria-checked": u,
    disabled: l
  })
}