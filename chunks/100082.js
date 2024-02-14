"use strict";
n.r(t), n.d(t, {
  default: function() {
    return z
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("669491"),
  u = n("77078"),
  d = n("255397"),
  c = n("244201"),
  f = n("191145"),
  h = n("777274"),
  m = n("679653"),
  p = n("76813"),
  E = n("992207"),
  S = n("95039"),
  g = n("539938"),
  C = n("311197"),
  _ = n("550410"),
  I = n("124824"),
  T = n("640553"),
  v = n("104815"),
  x = n("305961"),
  N = n("957255"),
  A = n("181114"),
  M = n("849467"),
  R = n("155207"),
  j = n("228427"),
  L = n("664336"),
  O = n("599110"),
  y = n("439932"),
  P = n("567469"),
  b = n("998716"),
  D = n("619395"),
  U = n("923510"),
  w = n("834052"),
  F = n("506466"),
  k = n("199811"),
  V = n("96151"),
  B = n("49111"),
  H = n("646718"),
  G = n("782340"),
  W = n("225243");

function Y(e) {
  let {
    inPopout: t,
    channel: n,
    toggleRequestToSpeakSidebar: s,
    showRequestToSpeakSidebar: o
  } = e, m = (0, c.useAppContext)(), S = (0, r.useStateFromStores)([f.default], () => f.default.getChatOpen(n.id)), g = (0, D.useCanModerateRequestToSpeak)(n.id), x = (0, P.useStageParticipantsCount)(n.id, b.StageChannelParticipantNamedIndex.REQUESTED_TO_SPEAK_ONLY), {
    preventIdle: N,
    allowIdle: A
  } = (0, _.usePreventIdle)("popup");
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(E.default, {
      channelId: n.id
    }, "clips-enabled-indicator"), (0, a.jsx)(u.Popout, {
      position: "bottom",
      animation: u.Popout.Animation.NONE,
      align: "right",
      renderPopout: e => (0, a.jsx)(I.default, {
        children: (0, a.jsx)(k.default, {
          ...e,
          channelId: n.id,
          appContext: m
        })
      }),
      autoInvert: !1,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, l.createElement)(v.default, {
          ...e,
          key: "more-options",
          isActive: n,
          className: W.button,
          iconClassName: W.buttonIcon
        })
      }
    }, "more-options-popout"), !t && (0, a.jsx)(p.default, {
      className: W.button
    }, "clips"), (0, a.jsx)(C.default, {
      onOpen: N,
      onClose: A,
      className: W.button
    }, "recents"), !o && g ? (0, a.jsx)("div", {
      className: W.button,
      children: (0, a.jsx)(F.default, {
        toggleRequestToSpeakSidebar: () => {
          S && d.default.updateChatOpen(n.id, !1), s()
        },
        showRequestToSpeakSidebar: o,
        numRequestToSpeak: x
      })
    }) : null, (0, a.jsx)(h.CallscopeChannelCallIssueMarker, {
      className: W.button
    }), !S && (0, a.jsx)("div", {
      className: i(W.button, {
        [W.sidebarOpen]: o
      }),
      children: (0, a.jsx)(T.ChatButton, {
        channelId: n.id,
        showRequestToSpeakSidebar: o,
        toggleRequestToSpeakSidebar: s,
        iconClassName: W.buttonIcon
      })
    })]
  })
}

function z(e) {
  var t, n;
  let {
    inPopout: s,
    channel: c,
    toggleRequestToSpeakSidebar: f,
    showRequestToSpeakSidebar: h
  } = e, p = (0, m.default)(c), E = (0, r.useStateFromStores)([w.default], () => w.default.getStageInstanceByChannel(c.id)), C = (0, P.useActualStageSpeakerCount)(c.id), _ = (0, P.useStageParticipantsCount)(c.id, b.StageChannelParticipantNamedIndex.AUDIENCE), I = (0, r.useStateFromStores)([x.default], () => x.default.getGuild(c.guild_id), [c.guild_id]), T = null !== (t = null == I ? void 0 : I.maxStageVideoChannelUsers) && void 0 !== t ? t : 0, v = (null == I ? void 0 : I.isCommunity()) ? T < B.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED : (null == I ? void 0 : I.premiumTier) !== B.BoostedGuildTiers.TIER_3 && T <= B.MAX_STAGE_VIDEO_USER_LIMIT_TIER2, D = (0, V.default)(c), F = (0, r.useStateFromStores)([N.default], () => N.default.can(U.MODERATE_STAGE_CHANNEL_PERMISSIONS, c)), k = () => {
    d.default.updateStageVideoLimitBoostUpsellDismissed(c.id, !0), O.default.track(B.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
      guild_id: c.guild_id,
      type: H.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
      is_moderator: F,
      action: H.BoostingUpsellAction.DISMISS
    })
  };
  l.useEffect(() => {
    D && O.default.track(B.AnalyticEvents.BOOSTING_UPSELL_VIEWED, {
      guild_id: c.guild_id,
      type: H.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
      is_moderator: F,
      listener_count: C + _
    })
  }, [D]);
  let z = (0, a.jsxs)(L.default, {
    toolbar: (0, a.jsx)(Y, {
      inPopout: s,
      toggleRequestToSpeakSidebar: f,
      showRequestToSpeakSidebar: h,
      channel: c
    }),
    onDoubleClick: g.handleDoubleClick,
    transparent: !0,
    className: i((0, y.getThemeClass)(B.ThemeTypes.DARK), W.participants),
    children: [(0, a.jsx)(L.default.Icon, {
      icon: j.default,
      disabled: !0,
      "aria-label": G.default.Messages.STAGE_CHANNEL,
      className: W.icon,
      color: null != E ? o.default.unsafe_rawColors.GREEN_360.css : void 0
    }), (0, a.jsx)(L.default.Title, {
      className: W.channelName,
      wrapperClassName: W.channelNameWrapper,
      children: null !== (n = null == E ? void 0 : E.topic) && void 0 !== n ? n : p
    }), (0, a.jsx)(L.default.Divider, {
      className: W.divider
    }), (0, a.jsxs)(L.default.Title, {
      children: [(0, a.jsx)(M.default, {
        width: 16,
        height: 16
      }), (0, a.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: W.speakerCount,
        children: G.default.Messages.SPEAKING_COUNT.format({
          count: C
        })
      }), (0, a.jsx)(R.default, {
        width: 16,
        height: 16
      }), (0, a.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: W.speakerCount,
        children: G.default.Messages.LISTENING_COUNT.format({
          count: _
        })
      })]
    })]
  });
  return D ? (0, a.jsxs)("div", {
    children: [z, (0, a.jsxs)("div", {
      className: W.boostUpsell,
      children: [(0, a.jsx)(K, {}), (0, a.jsxs)("div", {
        className: W.text,
        children: [(0, a.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          children: v ? G.default.Messages.STAGE_FULL_MODERATOR_TITLE : G.default.Messages.STAGE_FULL_MODERATOR_MAX_TITLE
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: v ? G.default.Messages.STAGE_FULL_MODERATOR_BODY : G.default.Messages.STAGE_FULL_MAX_BODY
        })]
      }), (0, a.jsx)("div", {
        className: W.buttons,
        children: v ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(u.Button, {
            className: W.notNowButton,
            onClick: k,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.SMALL,
            children: G.default.Messages.NOT_NOW
          }), (0, a.jsx)(A.default, {
            size: u.Button.Sizes.SMALL,
            onClick: () => {
              (0, S.openGuildBoostingMarketingModal)({
                guildId: c.guild_id,
                location: {
                  section: B.AnalyticsSections.STAGE_VIDEO_LIMIT
                }
              }), O.default.track(B.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                guild_id: c.guild_id,
                type: H.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                is_moderator: F,
                action: H.BoostingUpsellAction.BOOST
              })
            },
            className: W.boostButton,
            children: G.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
          })]
        }) : (0, a.jsx)(u.Button, {
          className: W.notNowButton,
          onClick: k,
          look: u.Button.Looks.BLANK,
          size: u.Button.Sizes.SMALL,
          children: G.default.Messages.DISMISS
        })
      })]
    })]
  }) : z
}

function K() {
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