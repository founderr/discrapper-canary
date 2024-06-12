"use strict";
n.r(t), n.d(t, {
  default: function() {
    return W
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("692547"),
  u = n("481060"),
  d = n("475179"),
  c = n("40851"),
  f = n("358221"),
  h = n("933557"),
  m = n("320007"),
  p = n("236091"),
  E = n("623624"),
  g = n("984370"),
  C = n("141321"),
  S = n("618158"),
  _ = n("390322"),
  T = n("616286"),
  I = n("961048"),
  A = n("430824"),
  v = n("496675"),
  x = n("357727"),
  N = n("158010"),
  M = n("170039"),
  y = n("502568"),
  R = n("626135"),
  L = n("792125"),
  O = n("431328"),
  j = n("501655"),
  P = n("200498"),
  D = n("146085"),
  b = n("427679"),
  U = n("592473"),
  F = n("831002"),
  w = n("903108"),
  k = n("981631"),
  H = n("474936"),
  G = n("689938"),
  B = n("694382");

function V(e) {
  let {
    inPopout: t,
    channel: n,
    toggleRequestToSpeakSidebar: s,
    showRequestToSpeakSidebar: o
  } = e, h = (0, c.useAppContext)(), E = (0, r.useStateFromStores)([f.default], () => f.default.getChatOpen(n.id)), g = (0, P.useCanModerateRequestToSpeak)(n.id), A = (0, O.useStageParticipantsCount)(n.id, j.StageChannelParticipantNamedIndex.REQUESTED_TO_SPEAK_ONLY), {
    preventIdle: v,
    allowIdle: x
  } = (0, S.usePreventIdle)("popup");
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(p.default, {
      channelId: n.id
    }, "clips-enabled-indicator"), (0, a.jsx)(u.Popout, {
      position: "bottom",
      animation: u.Popout.Animation.NONE,
      align: "right",
      renderPopout: e => (0, a.jsx)(_.default, {
        children: (0, a.jsx)(F.default, {
          ...e,
          channelId: n.id,
          appContext: h
        })
      }),
      autoInvert: !1,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, l.createElement)(I.default, {
          ...e,
          key: "more-options",
          isActive: n,
          className: B.button,
          iconClassName: B.buttonIcon
        })
      }
    }, "more-options-popout"), !t && (0, a.jsx)(m.default, {
      className: B.button
    }, "clips"), (0, a.jsx)(C.default, {
      onOpen: v,
      onClose: x,
      className: B.button
    }, "recents"), !o && g ? (0, a.jsx)("div", {
      className: B.button,
      children: (0, a.jsx)(U.default, {
        toggleRequestToSpeakSidebar: () => {
          E && d.default.updateChatOpen(n.id, !1), s()
        },
        showRequestToSpeakSidebar: o,
        numRequestToSpeak: A
      })
    }) : null, !E && (0, a.jsx)("div", {
      className: i()(B.button, {
        [B.sidebarOpen]: o
      }),
      children: (0, a.jsx)(T.ChatButton, {
        channelId: n.id,
        showRequestToSpeakSidebar: o,
        toggleRequestToSpeakSidebar: s,
        iconClassName: B.buttonIcon
      })
    })]
  })
}

function W(e) {
  var t, n;
  let {
    inPopout: s,
    channel: c,
    toggleRequestToSpeakSidebar: f,
    showRequestToSpeakSidebar: m
  } = e, p = (0, h.default)(c), C = (0, r.useStateFromStores)([b.default], () => b.default.getStageInstanceByChannel(c.id)), S = (0, O.useActualStageSpeakerCount)(c.id), _ = (0, O.useStageParticipantsCount)(c.id, j.StageChannelParticipantNamedIndex.AUDIENCE), T = (0, r.useStateFromStores)([A.default], () => A.default.getGuild(c.guild_id), [c.guild_id]), I = null !== (t = null == T ? void 0 : T.maxStageVideoChannelUsers) && void 0 !== t ? t : 0, P = (null == T ? void 0 : T.isCommunity()) ? I < k.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED : (null == T ? void 0 : T.premiumTier) !== k.BoostedGuildTiers.TIER_3 && I <= k.MAX_STAGE_VIDEO_USER_LIMIT_TIER2, U = (0, w.default)(c), F = (0, r.useStateFromStores)([v.default], () => v.default.can(D.MODERATE_STAGE_CHANNEL_PERMISSIONS, c)), W = () => {
    d.default.updateStageVideoLimitBoostUpsellDismissed(c.id, !0), R.default.track(k.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
      guild_id: c.guild_id,
      type: H.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
      is_moderator: F,
      action: H.BoostingUpsellAction.DISMISS
    })
  };
  l.useEffect(() => {
    U && R.default.track(k.AnalyticEvents.BOOSTING_UPSELL_VIEWED, {
      guild_id: c.guild_id,
      type: H.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
      is_moderator: F,
      listener_count: S + _
    })
  }, [U]);
  let z = (0, a.jsxs)(y.default, {
    toolbar: (0, a.jsx)(V, {
      inPopout: s,
      toggleRequestToSpeakSidebar: f,
      showRequestToSpeakSidebar: m,
      channel: c
    }),
    onDoubleClick: g.handleDoubleClick,
    transparent: !0,
    className: i()((0, L.getThemeClass)(k.ThemeTypes.DARK), B.participants),
    children: [(0, a.jsx)(y.default.Icon, {
      icon: M.default,
      disabled: !0,
      "aria-label": G.default.Messages.STAGE_CHANNEL,
      className: B.icon,
      color: null != C ? o.default.unsafe_rawColors.GREEN_360.css : void 0
    }), (0, a.jsx)(y.default.Title, {
      className: B.channelName,
      wrapperClassName: B.channelNameWrapper,
      children: null !== (n = null == C ? void 0 : C.topic) && void 0 !== n ? n : p
    }), (0, a.jsx)(y.default.Divider, {
      className: B.divider
    }), (0, a.jsxs)(y.default.Title, {
      children: [(0, a.jsx)(x.default, {
        width: 16,
        height: 16
      }), (0, a.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: B.speakerCount,
        children: G.default.Messages.SPEAKING_COUNT.format({
          count: S
        })
      }), (0, a.jsx)(N.default, {
        width: 16,
        height: 16
      }), (0, a.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: B.speakerCount,
        children: G.default.Messages.LISTENING_COUNT.format({
          count: _
        })
      })]
    })]
  });
  return U ? (0, a.jsxs)("div", {
    children: [z, (0, a.jsxs)("div", {
      className: B.boostUpsell,
      children: [(0, a.jsx)(Y, {}), (0, a.jsxs)("div", {
        className: B.text,
        children: [(0, a.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          children: P ? G.default.Messages.STAGE_FULL_MODERATOR_TITLE : G.default.Messages.STAGE_FULL_MODERATOR_MAX_TITLE
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: P ? G.default.Messages.STAGE_FULL_MODERATOR_BODY : G.default.Messages.STAGE_FULL_MAX_BODY
        })]
      }), (0, a.jsx)("div", {
        className: B.buttons,
        children: P ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(u.Button, {
            className: B.notNowButton,
            onClick: W,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.SMALL,
            children: G.default.Messages.NOT_NOW
          }), (0, a.jsx)(u.ShinyButton, {
            size: u.Button.Sizes.SMALL,
            onClick: () => {
              (0, E.openGuildBoostingMarketingModal)({
                guildId: c.guild_id,
                location: {
                  section: k.AnalyticsSections.STAGE_VIDEO_LIMIT
                }
              }), R.default.track(k.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                guild_id: c.guild_id,
                type: H.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                is_moderator: F,
                action: H.BoostingUpsellAction.BOOST
              })
            },
            className: B.boostButton,
            children: G.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
          })]
        }) : (0, a.jsx)(u.Button, {
          className: B.notNowButton,
          onClick: W,
          look: u.Button.Looks.BLANK,
          size: u.Button.Sizes.SMALL,
          children: G.default.Messages.DISMISS
        })
      })]
    })]
  }) : z
}

function Y() {
  return (0, a.jsxs)("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    children: [(0, a.jsxs)("g", {
      clipPath: "url(#clip0_595_59940)",
      children: [(0, a.jsx)("path", {
        d: "M36 18C36 19.8 33.075 21.15 32.625 22.725C32.175 24.3 33.525 27.225 32.625 28.575C31.725 29.925 28.35 29.25 27 30.375C25.65 31.5 25.2 34.425 23.625 35.1C22.05 35.775 19.8 33.3 18 33.3C16.2 33.3 13.95 35.55 12.375 35.1C10.8 34.65 10.35 31.275 9 30.375C7.65 29.475 4.5 29.925 3.375 28.575C2.25 27.225 3.825 24.525 3.375 22.725C2.925 20.925 0 19.8 0 18C0 16.2 2.925 14.85 3.375 13.275C3.825 11.7 2.475 8.77497 3.375 7.42496C4.275 6.07497 7.65 6.74997 9 5.62497C10.35 4.49997 10.8 1.57497 12.375 0.899965C13.95 0.224965 16.2 2.69997 18 2.69997C19.8 2.69997 22.05 0.449965 23.625 0.899965C25.2 1.34997 25.65 4.49997 27 5.62497C28.35 6.74997 31.5 6.07497 32.625 7.42496C33.75 8.77497 32.175 11.475 32.625 13.275C33.075 15.075 36 16.2 36 18Z",
        fill: "url(#paint0_linear_595_59940)"
      }), (0, a.jsx)("path", {
        d: "M15.75 20.7001L18 22.9501L20.25 20.7001V15.3001L18 13.0501L15.75 15.3001V20.7001Z",
        fill: "white"
      }), (0, a.jsx)("path", {
        d: "M18 6.75L11.25 13.5V22.5L18 29.25L24.75 22.5V13.5L18 6.75ZM22.5 21.6L18 26.1L13.5 21.6V14.4L18 9.9L22.5 14.4V21.6Z",
        fill: "white"
      })]
    }), (0, a.jsxs)("defs", {
      children: [(0, a.jsxs)("linearGradient", {
        id: "paint0_linear_595_59940",
        x1: "2.4046e-06",
        y1: "35.2166",
        x2: "35.7182",
        y2: "-1.45185",
        gradientUnits: "userSpaceOnUse",
        children: [(0, a.jsx)("stop", {
          stopColor: "#3E70DD"
        }), (0, a.jsx)("stop", {
          offset: "1",
          stopColor: "#B377F3"
        })]
      }), (0, a.jsx)("clipPath", {
        id: "clip0_595_59940",
        children: (0, a.jsx)("rect", {
          width: "36",
          height: "36",
          fill: "white"
        })
      })]
    })]
  })
}