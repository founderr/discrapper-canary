"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eQ
  }
}), n("222007"), n("424973");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("151426"),
  u = n("862337"),
  d = n("966900"),
  c = n("358917"),
  f = n("838048"),
  E = n("359902"),
  h = n("696675"),
  _ = n("780624"),
  C = n("696526"),
  I = n("197801"),
  S = n("582601"),
  p = n("77078"),
  m = n("850068"),
  T = n("272030"),
  g = n("79112"),
  A = n("146350"),
  N = n("901582"),
  R = n("415929"),
  O = n("687531"),
  v = n("875212"),
  L = n("899633"),
  M = n("606292"),
  P = n("489740"),
  D = n("355025"),
  y = n("842272"),
  x = n("14124"),
  b = n("959646"),
  U = n("338677"),
  G = n("20606"),
  j = n("225772"),
  w = n("775377"),
  k = n("10641"),
  F = n("384997"),
  B = n("243632"),
  H = n("180273"),
  V = n("579565"),
  Y = n("473503"),
  W = n("257426"),
  K = n("76393"),
  z = n("957833"),
  q = n("397009"),
  Q = n("337328"),
  Z = n("167209"),
  X = n("691818"),
  J = n("106457"),
  $ = n("507917"),
  ee = n("837944"),
  et = n("374089"),
  en = n("189726"),
  ea = n("666647"),
  es = n("286914"),
  el = n("235004"),
  ei = n("696770"),
  er = n("506885"),
  eo = n("845579"),
  eu = n("933422"),
  ed = n("924658"),
  ec = n("244390"),
  ef = n("271938"),
  eE = n("42203"),
  eh = n("778588"),
  e_ = n("42887"),
  eC = n("945956"),
  eI = n("101125"),
  eS = n("102985"),
  ep = n("697218"),
  em = n("521012"),
  eT = n("145131"),
  eg = n("398288"),
  eA = n("837899"),
  eN = n("425190"),
  eR = n("474571"),
  eO = n("272339"),
  ev = n("200639"),
  eL = n("925877"),
  eM = n("849467"),
  eP = n("97347"),
  eD = n("962541"),
  ey = n("762489"),
  ex = n("329858"),
  eb = n("956089"),
  eU = n("599110"),
  eG = n("315102"),
  ej = n("306160"),
  ew = n("718517"),
  ek = n("197881"),
  eF = n("158998"),
  eB = n("50885"),
  eH = n("49111"),
  eV = n("411511"),
  eY = n("782340"),
  eW = n("374555");
let eK = eB.default.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
  ez = 30 * ew.default.Millis.DAY;
class eq extends s.PureComponent {
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
    } = this.state, t = [eY.default.Messages.COPY_SUCCESS_1, eY.default.Messages.COPY_SUCCESS_2, eY.default.Messages.COPY_SUCCESS_3, eY.default.Messages.COPY_SUCCESS_4, eY.default.Messages.COPY_SUCCESS_5, eY.default.Messages.COPY_SUCCESS_6, eY.default.Messages.COPY_SUCCESS_7, eY.default.Messages.COPY_SUCCESS_8, eY.default.Messages.COPY_SUCCESS_9, eY.default.Messages.COPY_SUCCESS_10, eY.default.Messages.COPY_SUCCESS_11], n = Math.min(Math.max(0, e - 1), t.length - 1);
    return (0, a.jsx)(p.Shaker, {
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
    let r = eF.default.getName(l),
      o = null != i && i !== eH.StatusTypes.UNKNOWN,
      u = null != n;
    return (u || o && l.isPomelo()) && (e = (0, a.jsx)(eg.default, {
      hoverText: s,
      forceHover: t,
      children: u ? (0, a.jsx)(w.default, {
        activity: n,
        emojiClassName: eW.emoji,
        className: eW.customStatus
      }) : eF.default.humanizeStatus(i)
    })), (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: eW.panelTitleContainer,
        children: (0, a.jsx)(ex.default, {
          children: r
        })
      }), (0, a.jsx)("div", {
        className: eW.panelSubtextContainer,
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
      l = p.TooltipColors.PRIMARY;
    return ej.SUPPORTS_COPY && (s = eY.default.Messages.ACCOUNT_CLICK_TO_COPY, n && (s = this.renderCopiedSuccess(), l = this.isCopiedStreakGodlike ? p.TooltipColors.RED : p.TooltipColors.GREEN)), (0, a.jsx)(p.Tooltip, {
      text: s,
      forceOpen: t,
      "aria-label": !!ej.SUPPORTS_COPY && eY.default.Messages.ACCOUNT_CLICK_TO_COPY,
      color: l,
      delay: 500,
      onAnimationRest: (e, a) => {
        n && !t && a.phase === eH.SpringTransitionPhases.LEAVE && this.setState({
          shouldShowCopiedFeedback: !1
        })
      },
      children: e => {
        let {
          onClick: t,
          onMouseEnter: s,
          ...l
        } = e;
        return (0, a.jsx)(p.Clickable, {
          ...l,
          onMouseEnter: () => {
            n ? (this.copiedTimeout.stop(), this.setState({
              shouldShowNametagTooltip: !1
            }, s)) : null == s || s()
          },
          onClick: () => {
            null == t || t(), this.handleCopyTag()
          },
          className: i(eW.nameTag, {
            [eW.canCopy]: ej.SUPPORTS_COPY
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
    let o = (0, eG.getAvatarDecorationURL)({
      avatarDecoration: n.avatarDecoration,
      size: (0, M.getDecorationSizeForAvatarSize)(p.AvatarSizes.SIZE_32)
    });
    return (0, a.jsx)(N.default, {
      object: eH.AnalyticsObjects.AVATAR,
      children: (0, a.jsx)(p.Popout, {
        renderPopout: this.renderStatusPickerPopout,
        position: "top",
        align: "left",
        animation: p.Popout.Animation.FADE,
        spacing: 14,
        fixed: !0,
        preload: () => (0, er.default)(n.id, null == n ? void 0 : n.getAvatarURL(null, 80)),
        children: (u, d) => (0, a.jsxs)(p.Clickable, {
          ...u,
          "aria-label": eY.default.Messages.SET_STATUS,
          className: i(eW.avatarWrapper, {
            [eW.withTagAsButton]: l,
            [eW.withTagless]: r
          }),
          children: [(0, a.jsx)(eK, {
            size: p.AvatarSizes.SIZE_32,
            src: n.getAvatarURL(void 0, 32, !1),
            avatarDecoration: o,
            "aria-label": n.username,
            status: t ? eH.StatusTypes.STREAMING : s,
            isSpeaking: e,
            className: eW.avatar
          }), l || r ? (0, a.jsx)("div", {
            className: i(eW.nameTag, {
              [eW.canCopy]: ej.SUPPORTS_COPY
            }),
            children: r ? (0, a.jsx)(eD.default, {
              tooltipText: null,
              icon: d.isShown ? eA.default : eN.default,
              role: "switch",
              "aria-label": eY.default.Messages.SET_STATUS
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
      children: [(0, a.jsx)(F.default, {
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
      serverDeaf: r,
      suppress: u,
      dismissibleContents: d
    } = this.props, {
      shouldShowSpeakingWhileMutedTooltip: c
    } = this.state;
    if (null == e) return null;
    let f = n || u || l,
      E = t || r;
    return (0, a.jsxs)("div", {
      className: eW.container,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [this.renderNameZone(), (0, a.jsxs)(eT.default, {
        grow: 0,
        children: [(0, a.jsx)(eD.default, {
          tooltipText: c ? eY.default.Messages.ACCOUNT_SPEAKING_WHILE_MUTED : (0, x.default)(n, l, u, s),
          tooltipColor: c ? p.TooltipColors.GREEN : void 0,
          tooltipForceOpen: c || void 0,
          onMouseEnter: this.handleMouseEnterMute,
          onMouseLeave: this.handleMouseLeaveMute,
          icon: (0, a.jsx)(eX, {
            selfMute: n,
            serverMute: l,
            suppress: u
          }),
          iconForeground: f ? eW.strikethrough : null,
          onClick: this.handleToggleSelfMute,
          innerClassName: i({
            [eW.redIcon]: l || u
          }),
          onContextMenu: this.handleInputAudioContextMenu,
          role: "switch",
          "aria-label": eY.default.Messages.MUTE,
          "aria-checked": f,
          disabled: s
        }), (0, a.jsx)(eD.default, {
          tooltipText: (0, y.default)(t, r, s),
          icon: (0, a.jsx)(eJ, {
            selfDeaf: t,
            serverDeaf: r
          }),
          onClick: this.handleToggleSelfDeaf,
          onContextMenu: this.handleOutputAudioContextMenu,
          innerClassName: i({
            [eW.redIcon]: r
          }),
          iconForeground: E ? eW.strikethrough : null,
          role: "switch",
          "aria-label": eY.default.Messages.DEAFEN,
          "aria-checked": E,
          disabled: s
        }), (0, a.jsx)(F.default, {
          contentTypes: d.settings,
          children: e => {
            let {
              visibleContent: t,
              markAsDismissed: n
            } = e;
            switch (t) {
              case o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                return (0, a.jsx)(p.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)($.default, {}),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP:
                return (0, a.jsx)(p.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(Y.default, {
                    markAsDismissed: n,
                    partnerGame: eV.PartnerGame.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP:
                return (0, a.jsx)(p.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(W.default, {
                    markAsDismissed: n,
                    partnerGame: eV.PartnerGame.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_SAFE_DIRECT_MESSAGING:
                return (0, a.jsx)(p.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(eu.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                return (0, a.jsx)(p.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(en.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                return (0, a.jsx)(p.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(ea.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION:
                return (0, a.jsx)(p.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(ei.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                return (0, a.jsx)(p.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(es.UserSafetyEducationReportingCoachmark, {
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
    super(...e), this.copiedTimeout = new u.Timeout, this.copiedDecayTimeout = new u.Timeout, this.speakingWhileMutedTooltipTimeout = new u.Timeout, this.state = {
      hovered: !1,
      copiedStreak: 0,
      shouldShowNametagTooltip: !1,
      shouldShowCopiedFeedback: !1,
      shouldShowSpeakingWhileMutedTooltip: !1,
      hoveringOnMute: !1
    }, this.handleToggleSelfMute = () => {
      let {
        serverMute: e,
        suppress: t
      } = this.props;
      (0, U.default)(e, t)
    }, this.handleToggleSelfDeaf = () => {
      let {
        serverDeaf: e
      } = this.props;
      (0, b.default)(e)
    }, this.handleOpenAccountSettings = () => {
      this.handleOpenSettings()
    }, this.handleOpenSettings = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.UserSettingsSections.ACCOUNT,
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0;
      g.default.open(e, t, n)
    }, this.handleOpenSettingsContextMenu = e => {
      let {
        currentUser: t
      } = this.props;
      null != t && (0, T.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("727212").then(n.bind(n, "727212"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: t,
          premiumSubscription: this.props.premiumSubscription,
          webBuildOverride: this.props.webBuildOverride
        })
      })
    }, this.handleInputAudioContextMenu = e => {
      (0, T.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("266392").then(n.bind(n, "266392"));
        return () => (0, a.jsx)(e, {
          onClose: T.closeContextMenu,
          renderInputDevices: !0,
          renderInputModes: !0,
          renderInputVolume: !0
        })
      })
    }, this.handleOutputAudioContextMenu = e => {
      (0, T.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("266392").then(n.bind(n, "266392"));
        return () => (0, a.jsx)(e, {
          onClose: T.closeContextMenu,
          renderOutputDevices: !0,
          renderOutputVolume: !0
        })
      })
    }, this.handleMouseEnter = () => {
      this.setState({
        hovered: !0
      })
    }, this.handleMouseLeave = () => {
      this.setState({
        hovered: !1
      })
    }, this.handleMouseEnterMute = () => {
      this.setState({
        hoveringOnMute: !0,
        shouldShowSpeakingWhileMutedTooltip: !1
      }), this.speakingWhileMutedTooltipTimeout.stop()
    }, this.handleMouseLeaveMute = () => {
      this.setState({
        hoveringOnMute: !1
      })
    }, this.handleCopyTag = () => {
      let {
        currentUser: e
      } = this.props, {
        shouldShowNametagTooltip: t,
        copiedStreak: n
      } = this.state;
      if (null == e) return;
      (0, ej.copy)(eF.default.getUserTag(e, {
        decoration: "never",
        identifiable: "always"
      })), eU.default.track(eH.AnalyticEvents.TEXT_COPIED, {
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
    }, this.handleOccludedChanged = () => {
      let {
        occluded: e
      } = this.props;
      e && this.setState({
        shouldShowNametagTooltip: !1,
        shouldShowSpeakingWhileMutedTooltip: !1
      })
    }, this.handleSpeakingWhileMutedChanged = () => {
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
    }, this.renderStatusPickerPopout = e => {
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
          className: eW.accountProfilePopoutWrapper,
          children: (0, a.jsx)(Q.default, {
            ...e
          })
        })
      }
      return (0, a.jsx)(A.default, {
        onClose: () => {
          this.handleMouseLeave(), null == t || t()
        }
      })
    }, this.renderSettingsGear = () => (0, a.jsx)(eZ, {
      isEligibleForPomelo: this.props.isEligibleForPomelo,
      webBuildOverride: this.props.webBuildOverride,
      onClick: this.handleOpenAccountSettings,
      onContextMenu: this.handleOpenSettingsContextMenu
    })
  }
}

function eQ() {
  let e = (0, r.useStateFromStores)([ep.default], () => ep.default.getCurrentUser()),
    t = (0, B.useShowEligibilityEnrollmentTooltip)(eV.PartnerGame.FORTNITE),
    n = (0, r.useStateFromStores)([ef.default], () => ef.default.getId()),
    l = eo.CustomStatusSetting.useSetting(),
    i = s.useMemo(() => null != l ? (0, j.default)(l) : null, [l]),
    {
      streaming: u,
      status: d
    } = (0, r.useStateFromStoresObject)([eI.default], () => ({
      streaming: null != eI.default.findActivity(e => e.type === eH.ActivityTypes.STREAMING),
      status: eI.default.getStatus()
    })),
    c = (0, L.default)({
      userId: n
    }),
    f = eF.default.useUserTag(e, {
      decoration: "never"
    }),
    E = (0, r.useStateFromStores)([eS.default], () => eS.default.hidePersonalInformation),
    h = (0, r.useStateFromStores)([eC.default, eE.default], () => {
      let e = eC.default.getChannelId();
      return null != e ? eE.default.getChannel(e) : null
    }),
    {
      mute: _,
      selfMute: C,
      suppress: I
    } = (0, ec.default)(h),
    {
      selfDeaf: S,
      deaf: T
    } = (0, ed.default)(h),
    g = (0, r.useStateFromStores)([P.default], () => {
      var e;
      return (0, D.probablyHasBuildOverride)() ? null === (e = P.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
    }),
    A = (0, r.useStateFromStores)([em.default], () => em.default.getPremiumTypeSubscription()),
    N = (0, r.useStateFromStores)([e_.default], () => e_.default.getEverSpeakingWhileMuted()),
    M = (0, r.useStateFromStores)([eh.default], () => eh.default.hasLayers()),
    y = (0, p.useModalsStore)(p.hasAnyModalOpenSelector),
    x = y || M || ek.ProcessArgs.isDisallowPopupsSet(),
    b = (0, Z.useIsEligibleForPomelo)();
  s.useEffect(() => {
    q.default.trackExposure({
      location: "08bd40_3"
    })
  });
  let U = (0, r.useStateFromStores)([K.default], () => null != K.default.getAwaitingRemoteSessionInfo()),
    {
      isPopupEnabled: G,
      isJoinedTagButtonEnabled: w,
      isTaglessAccountPanelEnabled: F
    } = q.default.useExperiment({
      location: "08bd40_4"
    }, {
      autoTrackExposure: !1
    }),
    Y = (0, r.useStateFromStores)([H.default], () => H.default.isCurrentQuestCompleted),
    W = (0, r.useStateFromStores)([H.default], () => H.default.currentDropQuestGameTitle),
    Q = (0, z.useIsHomeSelected)(),
    $ = (0, O.useIsDmSpamFilterCoachmarkEnabled)(),
    en = (0, ee.useCanSeeSafetyEducationBlockMuteCoachmark)(),
    ea = (0, R.useIsSafetyConsumerEducationBlockMuteBucket)(),
    es = (0, et.useCanSeeSafetyEducationReportingCoachmark)(),
    ei = "account";
  (0, v.useTriggerDebuggingAA)({
    location: ei + " auto on",
    autoTrackExposure: !0
  }), (0, v.useTriggerDebuggingAA)({
    location: ei + " auto off",
    autoTrackExposure: !1
  }), (0, ee.useSafetyEducationAATriggerPoint)();
  let er = (0, r.useStateFromStores)([el.default], () => el.default.hasHadOtherUserPlaySoundInSession()),
    eu = function() {
      let e = (0, k.useIsDismissibleContentDismissed)(o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
        [t, n] = (0, r.useStateFromStoresArray)([X.default], () => [X.default.hasFetchedRelevance, X.default.profileThemesRelevanceExceeded]),
        [a, l] = (0, r.useStateFromStoresArray)([em.default], () => [em.default.hasFetchedMostRecentPremiumTypeSubscription(), em.default.getMostRecentPremiumTypeSubscription()]),
        {
          enabled: i
        } = J.default.useExperiment({
          location: "08bd40_1"
        }, {
          autoTrackExposure: !0
        }),
        u = s.useMemo(() => {
          let e = new Date().getTime();
          return null != l && (l.status === eH.SubscriptionStatusTypes.ACTIVE || e - l.currentPeriodEnd.getTime() < ez)
        }, [l]);
      return s.useEffect(() => {
        let s = async () => {
          if (!e && null == n && !!i) {
            if (!a) {
              await (0, m.fetchMostRecentSubscription)();
              return
            }!u && !t && await (0, m.getPerksRelevance)()
          }
        };
        s()
      }, [i, n, e, a, t, u]), !e && !!i && !u && null != n && n
    }(),
    eT = {
      avatar: [],
      settings: []
    };
  if (!x) {
    if (eu && eT.settings.push(o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), t) {
      var eg;
      eT.settings.push(o.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP), Y && W === (null === (eg = (0, V.getDrop)(eV.PartnerGame.FORTNITE)) || void 0 === eg ? void 0 : eg.title) && eT.settings.push(o.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP)
    }
    Q && $ && eT.settings.push(o.DismissibleContent.USER_SAFETY_SAFE_DIRECT_MESSAGING), en && (1 === ea ? eT.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : eT.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), er && eT.settings.push(o.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION), es && eT.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_REPORTING)
  }
  return (0, a.jsx)(eq, {
    currentUser: e,
    customStatusActivity: i,
    dismissibleContents: eT,
    userTag: f,
    hidePrivateData: E,
    occluded: x,
    premiumSubscription: A,
    selfDeaf: S,
    selfMute: C,
    serverDeaf: T,
    serverMute: _,
    showRichProfilePopup: G,
    showTagAsButton: w,
    showTaglessAccountPanel: F,
    speaking: c,
    speakingWhileMuted: N,
    status: d,
    streaming: u,
    suppress: I,
    webBuildOverride: g,
    awaitingRemote: U,
    isEligibleForPomelo: b
  })
}

function eZ(e) {
  let {
    webBuildOverride: t,
    isEligibleForPomelo: n,
    onClick: s,
    onContextMenu: l
  } = e, i = (0, p.useRedesignIconContext)().enabled, r = null, o = eR.default;
  return i ? o = null != t ? S.SettingsInfoIcon : n ? C.SettingsCircleIcon : I.SettingsIcon : null != t ? r = (0, a.jsx)(eL.default, {
    width: 9,
    height: 9,
    className: eW.hasBuildOverride,
    "aria-hidden": !0
  }) : n && (r = (0, a.jsx)(eb.CircleBadge, {
    color: G.default.STATUS_DANGER,
    className: eW.hasBuildOverride,
    "aria-hidden": !0
  })), (0, a.jsx)(eD.default, {
    tooltipText: null != t ? eY.default.Messages.USER_SETTINGS_WITH_BUILD_OVERRIDE.format({
      webBuildOverride: t.id
    }) : eY.default.Messages.USER_SETTINGS,
    onClick: s,
    onContextMenu: l,
    innerClassName: null != t || n ? eW.buildOverrideButton : null,
    icon: o,
    children: r
  })
}

function eX(e) {
  let {
    selfMute: t,
    suppress: n,
    serverMute: s
  } = e, l = (0, p.useRedesignIconContext)().enabled;
  if (l) {
    let e, l;
    return s ? (e = E.MicrophoneDenyIcon, l = p.tokens.colors.STATUS_DANGER) : n ? (e = E.MicrophoneDenyIcon, l = p.tokens.colors.STATUS_DANGER) : t ? (e = _.MicrophoneSlashIcon, l = p.tokens.colors.STATUS_DANGER) : e = h.MicrophoneIcon, (0, a.jsx)(e, {
      width: 20,
      height: 20,
      color: null != l ? l : "currentColor"
    })
  } {
    let e = t || n || s,
      l = e ? eP.default : eM.default;
    return (0, a.jsx)(l, {
      width: 20,
      height: 20,
      foreground: e ? eW.strikethrough : void 0
    })
  }
}

function eJ(e) {
  let {
    selfDeaf: t,
    serverDeaf: n
  } = e, s = (0, p.useRedesignIconContext)().enabled;
  if (s) {
    let e, s;
    return n ? (e = d.HeadphonesDenyIcon, s = p.tokens.colors.STATUS_DANGER) : t ? (e = f.HeadphonesSlashIcon, s = p.tokens.colors.STATUS_DANGER) : e = c.HeadphonesIcon, (0, a.jsx)(e, {
      width: 20,
      height: 20,
      color: null != s ? s : "currentColor"
    })
  } {
    let e = t ? ev.default : eO.default;
    return (0, a.jsx)(e, {
      width: 20,
      height: 20,
      foreground: t ? eW.strikethrough : void 0
    })
  }
}