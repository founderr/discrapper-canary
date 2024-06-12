"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eq
  }
}), n("47120"), n("653041");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("442837"),
  o = n("704215"),
  u = n("846519"),
  d = n("742444"),
  c = n("247636"),
  f = n("128951"),
  E = n("952826"),
  h = n("400354"),
  C = n("652844"),
  _ = n("789639"),
  m = n("481060"),
  S = n("355467"),
  p = n("239091"),
  I = n("230711"),
  g = n("255952"),
  T = n("410575"),
  A = n("941129"),
  N = n("83200"),
  v = n("634894"),
  R = n("586902"),
  O = n("515550"),
  L = n("1585"),
  P = n("304761"),
  y = n("865427"),
  M = n("571250"),
  D = n("628581"),
  x = n("55311"),
  b = n("575175"),
  U = n("64220"),
  j = n("377171"),
  G = n("676035"),
  w = n("427217"),
  k = n("605236"),
  B = n("243778"),
  F = n("730417"),
  H = n("524347"),
  V = n("853197"),
  Y = n("810280"),
  W = n("60762"),
  K = n("258609"),
  z = n("278464"),
  q = n("917112"),
  Q = n("443669"),
  Z = n("332473"),
  X = n("240504"),
  J = n("804545"),
  $ = n("637906"),
  ee = n("39370"),
  et = n("19199"),
  en = n("111653"),
  ea = n("212704"),
  es = n("14357"),
  el = n("393333"),
  ei = n("763296"),
  er = n("640806"),
  eo = n("484459"),
  eu = n("584427"),
  ed = n("52538"),
  ec = n("331187"),
  ef = n("879815"),
  eE = n("294629"),
  eh = n("314897"),
  eC = n("592125"),
  e_ = n("819640"),
  em = n("131951"),
  eS = n("19780"),
  ep = n("885110"),
  eI = n("246946"),
  eg = n("594174"),
  eT = n("78839"),
  eA = n("285952"),
  eN = n("546591"),
  ev = n("86813"),
  eR = n("826026"),
  eO = n("937482"),
  eL = n("87888"),
  eP = n("976401"),
  ey = n("333454"),
  eM = n("864441"),
  eD = n("626135"),
  ex = n("768581"),
  eb = n("572004"),
  eU = n("70956"),
  ej = n("374023"),
  eG = n("51144"),
  ew = n("998502"),
  ek = n("981631"),
  eB = n("215023"),
  eF = n("702512"),
  eH = n("689938"),
  eV = n("999872");

function eY(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let eW = ew.default.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar,
  eK = 30 * eU.default.Millis.DAY;
class ez extends s.PureComponent {
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
    } = this.state, t = [eH.default.Messages.COPY_SUCCESS_1, eH.default.Messages.COPY_SUCCESS_2, eH.default.Messages.COPY_SUCCESS_3, eH.default.Messages.COPY_SUCCESS_4, eH.default.Messages.COPY_SUCCESS_5, eH.default.Messages.COPY_SUCCESS_6, eH.default.Messages.COPY_SUCCESS_7, eH.default.Messages.COPY_SUCCESS_8, eH.default.Messages.COPY_SUCCESS_9, eH.default.Messages.COPY_SUCCESS_10, eH.default.Messages.COPY_SUCCESS_11], n = Math.min(Math.max(0, e - 1), t.length - 1);
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
    let r = eG.default.getName(l),
      o = null != i && i !== ek.StatusTypes.UNKNOWN,
      u = null != n;
    return (u || o && l.isPomelo()) && (e = (0, a.jsx)(eN.default, {
      hoverText: s,
      forceHover: t,
      children: u ? (0, a.jsx)(w.default, {
        activity: n,
        emojiClassName: eV.emoji,
        className: eV.customStatus
      }) : eG.default.humanizeStatus(i)
    })), (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: eV.panelTitleContainer,
        children: (0, a.jsx)(eM.default, {
          children: r
        })
      }), (0, a.jsx)("div", {
        className: eV.panelSubtextContainer,
        children: (0, a.jsx)(ey.default, {
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
    return eb.SUPPORTS_COPY && (s = eH.default.Messages.ACCOUNT_CLICK_TO_COPY, n && (s = this.renderCopiedSuccess(), l = this.isCopiedStreakGodlike ? m.TooltipColors.RED : m.TooltipColors.GREEN)), (0, a.jsx)(m.Tooltip, {
      text: s,
      forceOpen: t,
      "aria-label": !!eb.SUPPORTS_COPY && eH.default.Messages.ACCOUNT_CLICK_TO_COPY,
      color: l,
      delay: 500,
      onAnimationRest: (e, a) => {
        n && !t && a.phase === ek.SpringTransitionPhases.LEAVE && this.setState({
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
          className: i()(eV.nameTag, {
            [eV.canCopy]: eb.SUPPORTS_COPY
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
    let o = (0, ex.getAvatarDecorationURL)({
      avatarDecoration: n.avatarDecoration,
      size: (0, L.getDecorationSizeForAvatarSize)(m.AvatarSizes.SIZE_32)
    });
    return (0, a.jsx)(T.default, {
      object: ek.AnalyticsObjects.AVATAR,
      children: (0, a.jsx)(m.Popout, {
        renderPopout: this.renderStatusPickerPopout,
        position: "top",
        align: "left",
        animation: m.Popout.Animation.FADE,
        spacing: 14,
        fixed: !0,
        preload: () => (0, eo.default)(n.id, null == n ? void 0 : n.getAvatarURL(null, 80)),
        children: (u, d) => (0, a.jsxs)(m.Clickable, {
          ...u,
          "aria-label": eH.default.Messages.SET_STATUS,
          className: i()(eV.avatarWrapper, {
            [eV.withTagAsButton]: l,
            [eV.withTagless]: r
          }),
          children: [(0, a.jsx)(eW, {
            size: m.AvatarSizes.SIZE_32,
            src: n.getAvatarURL(void 0, 32, !1),
            avatarDecoration: o,
            "aria-label": n.username,
            status: t ? ek.StatusTypes.STREAMING : s,
            isSpeaking: e,
            className: eV.avatar
          }), l || r ? (0, a.jsx)("div", {
            className: i()(eV.nameTag, {
              [eV.canCopy]: eb.SUPPORTS_COPY
            }),
            children: r ? (0, a.jsx)(eP.default, {
              tooltipText: null,
              icon: d.isShown ? ev.default : eR.default,
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
      showTagAsButton: n,
      showTaglessAccountPanel: s
    } = this.props;
    return null == e ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(B.default, {
        contentTypes: t.avatar,
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: n
          } = e;
          if (t === o.DismissibleContent.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP) return (0, a.jsx)(U.default, {
            markAsDismissed: n,
            children: () => this.renderAvatarWithPopout()
          });
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
    return null == e ? null : (0, a.jsxs)("div", {
      className: eV.container,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [this.renderNameZone(), (0, a.jsxs)(eA.default, {
        grow: 0,
        children: [(0, a.jsx)(eZ, {
          selfMute: n,
          serverMute: l,
          suppress: r,
          awaitingRemote: s,
          tooltipText: d ? eH.default.Messages.ACCOUNT_SPEAKING_WHILE_MUTED : (0, D.default)(n, l, r, s),
          tooltipColor: d ? m.TooltipColors.GREEN : void 0,
          tooltipForceOpen: d || void 0,
          onMouseEnter: this.handleMouseEnterMute,
          onMouseLeave: this.handleMouseLeaveMute,
          onClick: this.handleToggleSelfMute,
          onContextMenu: this.handleInputAudioContextMenu
        }), (0, a.jsx)(eX, {
          selfDeaf: t,
          serverDeaf: i,
          onClick: this.handleToggleSelfDeaf,
          onContextMenu: this.handleOutputAudioContextMenu,
          awaitingRemote: s
        }), (0, a.jsx)(B.default, {
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
                  renderPopout: () => (0, a.jsx)(ee.default, {}),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP:
                return (0, a.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(Y.default, {
                    markAsDismissed: n,
                    partnerGame: eF.PartnerGame.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP:
                return (0, a.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(W.default, {
                    markAsDismissed: n,
                    partnerGame: eF.PartnerGame.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_SAFE_DIRECT_MESSAGING:
                return (0, a.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(ec.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                return (0, a.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(ea.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                return (0, a.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(es.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION:
                return (0, a.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(er.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                return (0, a.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(el.UserSafetyEducationReportingCoachmark, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                return (0, a.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(ed.default, {}),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.PRIDE_ICONS_COACHMARK:
                return (0, a.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(O.default, {
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
    super(...e), eY(this, "copiedTimeout", new u.Timeout), eY(this, "copiedDecayTimeout", new u.Timeout), eY(this, "speakingWhileMutedTooltipTimeout", new u.Timeout), eY(this, "state", {
      hovered: !1,
      copiedStreak: 0,
      shouldShowNametagTooltip: !1,
      shouldShowCopiedFeedback: !1,
      shouldShowSpeakingWhileMutedTooltip: !1,
      hoveringOnMute: !1
    }), eY(this, "handleToggleSelfMute", () => {
      let {
        serverMute: e,
        suppress: t
      } = this.props;
      (0, b.default)(e, t)
    }), eY(this, "handleToggleSelfDeaf", () => {
      let {
        serverDeaf: e
      } = this.props;
      (0, x.default)(e)
    }), eY(this, "handleOpenAccountSettings", () => {
      this.handleOpenSettings()
    }), eY(this, "handleOpenSettings", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.UserSettingsSections.ACCOUNT,
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0;
      I.default.open(e, t, n)
    }), eY(this, "handleOpenSettingsContextMenu", e => {
      let {
        currentUser: t
      } = this.props;
      null != t && (0, p.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("40326"), n.e("23357"), n.e("49368"), n.e("19503"), n.e("15972"), n.e("12013"), n.e("6416"), n.e("43906"), n.e("32776"), n.e("95900"), n.e("33053"), n.e("8016"), n.e("32493"), n.e("68136"), n.e("76540"), n.e("22646"), n.e("4934"), n.e("87624"), n.e("36861"), n.e("43331"), n.e("18824"), n.e("30419"), n.e("35522"), n.e("5528"), n.e("31649"), n.e("2535")]).then(n.bind(n, "923422"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: t,
          premiumSubscription: this.props.premiumSubscription,
          webBuildOverride: this.props.webBuildOverride
        })
      })
    }), eY(this, "handleInputAudioContextMenu", e => {
      (0, p.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "659580"));
        return () => (0, a.jsx)(e, {
          onClose: p.closeContextMenu,
          renderInputDevices: !0,
          renderInputModes: !0,
          renderInputVolume: !0
        })
      })
    }), eY(this, "handleOutputAudioContextMenu", e => {
      (0, p.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "659580"));
        return () => (0, a.jsx)(e, {
          onClose: p.closeContextMenu,
          renderOutputDevices: !0,
          renderOutputVolume: !0
        })
      })
    }), eY(this, "handleMouseEnter", () => {
      this.setState({
        hovered: !0
      })
    }), eY(this, "handleMouseLeave", () => {
      this.setState({
        hovered: !1
      })
    }), eY(this, "handleMouseEnterMute", () => {
      this.setState({
        hoveringOnMute: !0,
        shouldShowSpeakingWhileMutedTooltip: !1
      }), this.speakingWhileMutedTooltipTimeout.stop()
    }), eY(this, "handleMouseLeaveMute", () => {
      this.setState({
        hoveringOnMute: !1
      })
    }), eY(this, "handleCopyTag", () => {
      let {
        currentUser: e
      } = this.props, {
        shouldShowNametagTooltip: t,
        copiedStreak: n
      } = this.state;
      if (null == e) return;
      (0, eb.copy)(eG.default.getUserTag(e, {
        decoration: "never",
        identifiable: "always"
      })), eD.default.track(ek.AnalyticEvents.TEXT_COPIED, {
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
    }), eY(this, "handleOccludedChanged", () => {
      let {
        occluded: e
      } = this.props;
      e && this.setState({
        shouldShowNametagTooltip: !1,
        shouldShowSpeakingWhileMutedTooltip: !1
      })
    }), eY(this, "handleSpeakingWhileMutedChanged", () => {
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
    }), eY(this, "renderStatusPickerPopout", e => {
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
          className: eV.accountProfilePopoutWrapper,
          children: (0, a.jsx)(Q.default, {
            location: "StatusPickerPopout",
            ...e
          })
        })
      }
      return (0, a.jsx)(g.default, {
        onClose: () => {
          this.handleMouseLeave(), null == t || t()
        }
      })
    }), eY(this, "renderSettingsGear", () => (0, a.jsx)(eQ, {
      isEligibleForPomelo: this.props.isEligibleForPomelo,
      webBuildOverride: this.props.webBuildOverride,
      onClick: this.handleOpenAccountSettings,
      onContextMenu: this.handleOpenSettingsContextMenu
    }))
  }
}

function eq() {
  var e, t;
  let n = (0, r.useStateFromStores)([eg.default], () => eg.default.getCurrentUser()),
    l = (0, F.useShowEligibilityEnrollmentTooltip)(eF.PartnerGame.FORTNITE),
    i = (0, r.useStateFromStores)([eh.default], () => eh.default.getId()),
    u = (0, G.useCustomStatusActivity)(),
    {
      streaming: d,
      status: c
    } = (0, r.useStateFromStoresObject)([ep.default], () => ({
      streaming: null != ep.default.findActivity(e => e.type === ek.ActivityTypes.STREAMING),
      status: ep.default.getStatus()
    })),
    f = (0, R.default)({
      userId: i
    }),
    E = eG.default.useUserTag(n, {
      decoration: "never"
    }),
    h = (0, r.useStateFromStores)([eI.default], () => eI.default.hidePersonalInformation),
    C = (0, r.useStateFromStores)([eS.default, eC.default], () => {
      let e = eS.default.getChannelId();
      return null != e ? eC.default.getChannel(e) : null
    }),
    {
      mute: _,
      selfMute: p,
      suppress: I
    } = (0, eE.default)(C),
    {
      selfDeaf: g,
      deaf: T
    } = (0, ef.default)(C),
    O = (0, r.useStateFromStores)([P.default], () => {
      var e;
      return (0, y.probablyHasBuildOverride)() ? null === (e = P.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
    }),
    L = (0, r.useStateFromStores)([eT.default], () => eT.default.getPremiumTypeSubscription()),
    M = (0, r.useStateFromStores)([em.default], () => em.default.getEverSpeakingWhileMuted()),
    D = (0, r.useStateFromStores)([e_.default], () => e_.default.hasLayers()),
    x = (0, m.useModalsStore)(m.hasAnyModalOpenSelector) || D || ej.ProcessArgs.isDisallowPopupsSet(),
    b = (0, Z.useIsEligibleForPomelo)();
  s.useEffect(() => {
    q.default.trackExposure({
      location: "08bd40_3"
    })
  });
  let U = (0, r.useStateFromStores)([K.default], () => null != K.default.getAwaitingRemoteSessionInfo()),
    {
      isPopupEnabled: j,
      isJoinedTagButtonEnabled: w,
      isTaglessAccountPanelEnabled: B
    } = q.default.useExperiment({
      location: "08bd40_4"
    }, {
      autoTrackExposure: !1
    }),
    Y = (0, r.useStateFromStores)([H.default], () => H.default.isCurrentQuestCompleted),
    W = (0, r.useStateFromStores)([H.default], () => H.default.currentDropQuestGameTitle),
    Q = (0, z.useIsHomeSelected)(),
    ee = (0, N.useIsDmSpamFilterCoachmarkEnabled)(),
    ea = (0, et.useCanSeeSafetyEducationBlockMuteCoachmark)(),
    es = (0, A.useIsSafetyConsumerEducationBlockMuteBucket)(),
    el = (0, en.useCanSeeSafetyEducationReportingCoachmark)(),
    er = (0, eu.default)(n),
    eo = (null == n ? void 0 : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eB.GYOIKO_SAKURA_DECO_SKU_ID,
    ed = "account";
  (0, v.useTriggerDebuggingAA)({
    location: ed + " auto on",
    autoTrackExposure: !0
  }), (0, v.useTriggerDebuggingAA)({
    location: ed + " auto off",
    autoTrackExposure: !1
  }), (0, et.useSafetyEducationAATriggerPoint)();
  let ec = (0, r.useStateFromStores)([ei.default], () => ei.default.hasHadOtherUserPlaySoundInSession()),
    eA = function() {
      let e = (0, k.useIsDismissibleContentDismissed)(o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
        [t, n] = (0, r.useStateFromStoresArray)([X.default], () => [X.default.hasFetchedRelevance, X.default.profileThemesRelevanceExceeded]),
        [a, l] = (0, r.useStateFromStoresArray)([eT.default], () => [eT.default.hasFetchedMostRecentPremiumTypeSubscription(), eT.default.getMostRecentPremiumTypeSubscription()]),
        {
          enabled: i
        } = $.default.useExperiment({
          location: "08bd40_1"
        }, {
          autoTrackExposure: !0
        }),
        u = s.useMemo(() => {
          let e = new Date().getTime();
          return null != l && (l.status === ek.SubscriptionStatusTypes.ACTIVE || e - l.currentPeriodEnd.getTime() < eK)
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
    {
      enabled: eN
    } = (0, J.usePrideMonthPerksExperiment)({
      location: "AccountConnected"
    }),
    ev = {
      avatar: [],
      settings: []
    };
  return !x && (eA && ev.settings.push(o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), l && (ev.settings.push(o.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP), Y && W === (null === (t = (0, V.getDrop)(eF.PartnerGame.FORTNITE)) || void 0 === t ? void 0 : t.title) && ev.settings.push(o.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP)), Q && ee && ev.settings.push(o.DismissibleContent.USER_SAFETY_SAFE_DIRECT_MESSAGING), ea && (1 === es ? ev.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : ev.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), ec && ev.settings.push(o.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION), el && ev.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), er && ev.settings.push(o.DismissibleContent.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), eN && ev.settings.push(o.DismissibleContent.PRIDE_ICONS_COACHMARK), eo && ev.avatar.push(o.DismissibleContent.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)), (0, a.jsx)(ez, {
    currentUser: n,
    customStatusActivity: u,
    dismissibleContents: ev,
    userTag: E,
    hidePrivateData: h,
    occluded: x,
    premiumSubscription: L,
    selfDeaf: g,
    selfMute: p,
    serverDeaf: T,
    serverMute: _,
    showRichProfilePopup: j,
    showTagAsButton: w,
    showTaglessAccountPanel: B,
    speaking: f,
    speakingWhileMuted: M,
    status: c,
    streaming: d,
    suppress: I,
    webBuildOverride: O,
    awaitingRemote: U,
    isEligibleForPomelo: b
  })
}

function eQ(e) {
  let {
    webBuildOverride: t,
    isEligibleForPomelo: n,
    onClick: s,
    onContextMenu: l
  } = e, i = (0, m.useRedesignIconContext)().enabled, r = null, o = eO.default, u = (0, _.useSettingsLottie)();
  return i ? o = null != t ? E.SettingsInfoIcon : n ? f.SettingsCircleIcon : u.Component : null != t ? r = (0, a.jsx)(eL.default, {
    width: 9,
    height: 9,
    className: eV.hasBuildOverride,
    "aria-hidden": !0
  }) : n && (r = (0, a.jsx)(m.CircleBadge, {
    color: j.default.STATUS_DANGER,
    className: eV.hasBuildOverride,
    "aria-hidden": !0
  })), (0, a.jsx)(eP.default, {
    tooltipText: null != t ? eH.default.Messages.USER_SETTINGS_WITH_BUILD_OVERRIDE.format({
      webBuildOverride: t.id
    }) : eH.default.Messages.USER_SETTINGS,
    onClick: s,
    onContextMenu: l,
    innerClassName: null != t || n ? eV.buildOverrideButton : null,
    icon: o,
    ...u.events,
    children: r
  })
}

function eZ(e) {
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
    onContextMenu: h
  } = e, _ = t || l || n, {
    Component: S,
    play: p,
    events: I
  } = (0, C.useMicrophoneLottie)(_ ? "unmute" : "mute"), g = n || l ? c.MicrophoneDenyIcon : S;
  return s.useEffect(() => () => p(), [_, p]), (0, a.jsx)(eP.default, {
    tooltipText: r,
    tooltipColor: o,
    tooltipForceOpen: u,
    onMouseEnter: () => {
      d(), I.onMouseEnter()
    },
    onMouseLeave: () => {
      f(), I.onMouseLeave()
    },
    icon: (0, a.jsx)(g, {
      size: "custom",
      width: 20,
      height: 20,
      color: _ ? m.tokens.colors.STATUS_DANGER : "currentColor"
    }),
    iconForeground: _ ? eV.strikethrough : null,
    onClick: E,
    onContextMenu: h,
    role: "switch",
    "aria-label": eH.default.Messages.MUTE,
    "aria-checked": _,
    disabled: i
  })
}

function eX(e) {
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
      onMouseLeave: C
    }
  } = (0, h.useHeadphonesLottie)(u ? "undeafen" : "deafen"), _ = n ? d.HeadphonesDenyIcon : c;
  return s.useEffect(() => () => f(), [u, f]), (0, a.jsx)(eP.default, {
    tooltipText: (0, M.default)(t, n, l),
    onMouseEnter: E,
    onMouseLeave: C,
    icon: (0, a.jsx)(_, {
      size: "custom",
      width: 20,
      height: 20,
      color: u ? m.tokens.colors.STATUS_DANGER : "currentColor"
    }),
    onClick: r,
    onContextMenu: o,
    innerClassName: i()({
      [eV.redIcon]: n
    }),
    iconForeground: u ? eV.strikethrough : null,
    role: "switch",
    "aria-label": eH.default.Messages.DEAFEN,
    "aria-checked": u,
    disabled: l
  })
}