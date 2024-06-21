n.d(t, {
  Z: function() {
    return B
  }
});
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(442837),
  o = n(692547),
  c = n(481060),
  u = n(475179),
  d = n(40851),
  h = n(358221),
  m = n(933557),
  p = n(320007),
  E = n(236091),
  g = n(623624),
  f = n(984370),
  C = n(141321),
  _ = n(618158),
  I = n(390322),
  x = n(616286),
  T = n(961048),
  N = n(430824),
  Z = n(496675),
  S = n(502568),
  v = n(626135),
  A = n(792125),
  M = n(431328),
  R = n(501655),
  j = n(200498),
  L = n(146085),
  O = n(427679),
  P = n(592473),
  b = n(831002),
  y = n(903108),
  D = n(981631),
  U = n(474936),
  k = n(689938),
  w = n(688818);

function H(e) {
  let {
    inPopout: t,
    channel: n,
    toggleRequestToSpeakSidebar: s,
    showRequestToSpeakSidebar: o
  } = e, m = (0, d.bp)(), g = (0, r.e7)([h.Z], () => h.Z.getChatOpen(n.id)), f = (0, j.B)(n.id), N = (0, M.Rk)(n.id, R.pV.REQUESTED_TO_SPEAK_ONLY), {
    preventIdle: Z,
    allowIdle: S
  } = (0, _.Y)("popup");
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(E.Z, {
      channelId: n.id
    }, "clips-enabled-indicator"), (0, l.jsx)(c.Popout, {
      position: "bottom",
      animation: c.Popout.Animation.NONE,
      align: "right",
      renderPopout: e => (0, l.jsx)(I.Z, {
        children: (0, l.jsx)(b.Z, {
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
        return (0, i.createElement)(T.Z, {
          ...e,
          key: "more-options",
          isActive: n,
          className: w.button,
          iconClassName: w.buttonIcon
        })
      }
    }, "more-options-popout"), !t && (0, l.jsx)(p.Z, {
      className: w.button
    }, "clips"), (0, l.jsx)(C.Z, {
      onOpen: Z,
      onClose: S,
      className: w.button
    }, "recents"), !o && f ? (0, l.jsx)("div", {
      className: w.button,
      children: (0, l.jsx)(P.Z, {
        toggleRequestToSpeakSidebar: () => {
          g && u.Z.updateChatOpen(n.id, !1), s()
        },
        showRequestToSpeakSidebar: o,
        numRequestToSpeak: N
      })
    }) : null, !g && (0, l.jsx)("div", {
      className: a()(w.button, {
        [w.sidebarOpen]: o
      }),
      children: (0, l.jsx)(x.T, {
        channelId: n.id,
        showRequestToSpeakSidebar: o,
        toggleRequestToSpeakSidebar: s,
        iconClassName: w.buttonIcon
      })
    })]
  })
}

function B(e) {
  var t, n;
  let {
    inPopout: s,
    channel: d,
    toggleRequestToSpeakSidebar: h,
    showRequestToSpeakSidebar: p
  } = e, E = (0, m.ZP)(d), C = (0, r.e7)([O.Z], () => O.Z.getStageInstanceByChannel(d.id)), _ = (0, M.Io)(d.id), I = (0, M.Rk)(d.id, R.pV.AUDIENCE), x = (0, r.e7)([N.Z], () => N.Z.getGuild(d.guild_id), [d.guild_id]), T = null !== (t = null == x ? void 0 : x.maxStageVideoChannelUsers) && void 0 !== t ? t : 0, j = (null == x ? void 0 : x.isCommunity()) ? T < D.TU7 : (null == x ? void 0 : x.premiumTier) !== D.Eu4.TIER_3 && T <= D.eez, P = (0, y.Z)(d), b = (0, r.e7)([Z.Z], () => Z.Z.can(L.yP, d)), B = () => {
    u.Z.updateStageVideoLimitBoostUpsellDismissed(d.id, !0), v.default.track(D.rMx.BOOSTING_UPSELL_CLICKED, {
      guild_id: d.guild_id,
      type: U.cd.VIDEO_STAGE_LIMIT,
      is_moderator: b,
      action: U.T7.DISMISS
    })
  };
  i.useEffect(() => {
    P && v.default.track(D.rMx.BOOSTING_UPSELL_VIEWED, {
      guild_id: d.guild_id,
      type: U.cd.VIDEO_STAGE_LIMIT,
      is_moderator: b,
      listener_count: _ + I
    })
  }, [P]);
  let V = (0, l.jsxs)(S.ZP, {
    toolbar: (0, l.jsx)(H, {
      inPopout: s,
      toggleRequestToSpeakSidebar: h,
      showRequestToSpeakSidebar: p,
      channel: d
    }),
    onDoubleClick: f.O,
    transparent: !0,
    className: a()((0, A.Q)(D.BRd.DARK), w.participants),
    children: [(0, l.jsx)(S.ZP.Icon, {
      icon: c.StageIcon,
      disabled: !0,
      "aria-label": k.Z.Messages.STAGE_CHANNEL,
      className: w.icon,
      color: null != C ? o.Z.unsafe_rawColors.GREEN_360.css : void 0
    }), (0, l.jsx)(S.ZP.Title, {
      className: w.channelName,
      wrapperClassName: w.channelNameWrapper,
      children: null !== (n = null == C ? void 0 : C.topic) && void 0 !== n ? n : E
    }), (0, l.jsx)(S.ZP.Divider, {
      className: w.divider
    }), (0, l.jsxs)(S.ZP.Title, {
      children: [(0, l.jsx)(c.MicrophoneIcon, {
        size: "xs",
        color: "currentColor"
      }), (0, l.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: w.speakerCount,
        children: k.Z.Messages.SPEAKING_COUNT.format({
          count: _
        })
      }), (0, l.jsx)(c.GroupIcon, {
        size: "xs",
        color: "currentColor"
      }), (0, l.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: w.speakerCount,
        children: k.Z.Messages.LISTENING_COUNT.format({
          count: I
        })
      })]
    })]
  });
  return P ? (0, l.jsxs)("div", {
    children: [V, (0, l.jsxs)("div", {
      className: w.boostUpsell,
      children: [(0, l.jsx)(G, {}), (0, l.jsxs)("div", {
        className: w.text,
        children: [(0, l.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          children: j ? k.Z.Messages.STAGE_FULL_MODERATOR_TITLE : k.Z.Messages.STAGE_FULL_MODERATOR_MAX_TITLE
        }), (0, l.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: j ? k.Z.Messages.STAGE_FULL_MODERATOR_BODY : k.Z.Messages.STAGE_FULL_MAX_BODY
        })]
      }), (0, l.jsx)("div", {
        className: w.buttons,
        children: j ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(c.Button, {
            className: w.notNowButton,
            onClick: B,
            look: c.Button.Looks.BLANK,
            size: c.Button.Sizes.SMALL,
            children: k.Z.Messages.NOT_NOW
          }), (0, l.jsx)(c.ShinyButton, {
            size: c.Button.Sizes.SMALL,
            onClick: () => {
              (0, g.f)({
                guildId: d.guild_id,
                location: {
                  section: D.jXE.STAGE_VIDEO_LIMIT
                }
              }), v.default.track(D.rMx.BOOSTING_UPSELL_CLICKED, {
                guild_id: d.guild_id,
                type: U.cd.VIDEO_STAGE_LIMIT,
                is_moderator: b,
                action: U.T7.BOOST
              })
            },
            className: w.boostButton,
            children: k.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION
          })]
        }) : (0, l.jsx)(c.Button, {
          className: w.notNowButton,
          onClick: B,
          look: c.Button.Looks.BLANK,
          size: c.Button.Sizes.SMALL,
          children: k.Z.Messages.DISMISS
        })
      })]
    })]
  }) : V
}

function G() {
  return (0, l.jsxs)("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    children: [(0, l.jsxs)("g", {
      clipPath: "url(#clip0_595_59940)",
      children: [(0, l.jsx)("path", {
        d: "M36 18C36 19.8 33.075 21.15 32.625 22.725C32.175 24.3 33.525 27.225 32.625 28.575C31.725 29.925 28.35 29.25 27 30.375C25.65 31.5 25.2 34.425 23.625 35.1C22.05 35.775 19.8 33.3 18 33.3C16.2 33.3 13.95 35.55 12.375 35.1C10.8 34.65 10.35 31.275 9 30.375C7.65 29.475 4.5 29.925 3.375 28.575C2.25 27.225 3.825 24.525 3.375 22.725C2.925 20.925 0 19.8 0 18C0 16.2 2.925 14.85 3.375 13.275C3.825 11.7 2.475 8.77497 3.375 7.42496C4.275 6.07497 7.65 6.74997 9 5.62497C10.35 4.49997 10.8 1.57497 12.375 0.899965C13.95 0.224965 16.2 2.69997 18 2.69997C19.8 2.69997 22.05 0.449965 23.625 0.899965C25.2 1.34997 25.65 4.49997 27 5.62497C28.35 6.74997 31.5 6.07497 32.625 7.42496C33.75 8.77497 32.175 11.475 32.625 13.275C33.075 15.075 36 16.2 36 18Z",
        fill: "url(#paint0_linear_595_59940)"
      }), (0, l.jsx)("path", {
        d: "M15.75 20.7001L18 22.9501L20.25 20.7001V15.3001L18 13.0501L15.75 15.3001V20.7001Z",
        fill: "white"
      }), (0, l.jsx)("path", {
        d: "M18 6.75L11.25 13.5V22.5L18 29.25L24.75 22.5V13.5L18 6.75ZM22.5 21.6L18 26.1L13.5 21.6V14.4L18 9.9L22.5 14.4V21.6Z",
        fill: "white"
      })]
    }), (0, l.jsxs)("defs", {
      children: [(0, l.jsxs)("linearGradient", {
        id: "paint0_linear_595_59940",
        x1: "2.4046e-06",
        y1: "35.2166",
        x2: "35.7182",
        y2: "-1.45185",
        gradientUnits: "userSpaceOnUse",
        children: [(0, l.jsx)("stop", {
          stopColor: "#3E70DD"
        }), (0, l.jsx)("stop", {
          offset: "1",
          stopColor: "#B377F3"
        })]
      }), (0, l.jsx)("clipPath", {
        id: "clip0_595_59940",
        children: (0, l.jsx)("rect", {
          width: "36",
          height: "36",
          fill: "white"
        })
      })]
    })]
  })
}