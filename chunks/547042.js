n.d(t, {
  V: function() {
    return A
  },
  _: function() {
    return i
  }
});
var s, i, l = n(735250),
  a = n(470079),
  r = n(442837),
  o = n(481060),
  c = n(40851),
  u = n(566620),
  d = n(403404),
  E = n(100527),
  h = n(906732),
  _ = n(592125),
  I = n(810090),
  m = n(626135),
  T = n(981631),
  g = n(921944),
  p = n(689938),
  N = n(372064);
(s = i || (i = {})).BOOSTING = "BOOSTING", s.NITRO = "NITRO", s.BASH_OUT = "BASH_OUT", s.GAME_NIGHT = "GAME_NIGHT";
let S = "https://cdn.discordapp.com/attachments/860252504826445825/1029516100356018217/Activities_NUX_GL_1.mp4",
  C = "https://cdn.discordapp.com/attachments/887469171804356628/916446867586416660/activities-video-poster-512.png",
  A = e => {
    let {
      channelId: t,
      markAsDismissed: n,
      tutorialType: s
    } = e, {
      analyticsLocation: i,
      analyticsType: A,
      ctaText: f,
      dismissText: Z,
      description: L,
      learnMore: O,
      title: v,
      videoPosterUrl: R,
      videoUrl: P,
      ctaOnClick: x
    } = function(e) {
      switch (e) {
        case "BOOSTING":
          return {
            analyticsLocation: E.Z.ACTIVITY_COACH_MARK_BOOSTING, analyticsType: "embedded_activity_discovery_tutorial", description: p.Z.Messages.EMBEDDED_ACTIVITY_NOTICE_WTP_DESCRIPTION, learnMore: !0, title: p.Z.Messages.EMBEDDED_ACTIVITY_NOTICE_TITLE, videoPosterUrl: C, videoUrl: S, ctaText: p.Z.Messages.EMBEDDED_ACTIVITIES_TRY_IT_OUT, dismissText: p.Z.Messages.DISMISS
          };
        case "NITRO":
          return {
            analyticsLocation: E.Z.ACTIVITY_COACH_MARK_NITRO, analyticsType: "embedded_activity_nitro_discovery_tutorial", description: p.Z.Messages.EMBEDDED_ACTIVITY_NOTICE_NITRO_DESCRIPTION, learnMore: !0, title: p.Z.Messages.EMBEDDED_ACTIVITY_NOTICE_NITRO_TITLE, videoPosterUrl: C, videoUrl: S, ctaText: p.Z.Messages.EMBEDDED_ACTIVITIES_TRY_IT_OUT, dismissText: p.Z.Messages.DISMISS
          };
        case "BASH_OUT":
          return {
            analyticsLocation: E.Z.ACTIVITY_COACH_MARK_BASH_OUT, analyticsType: "embedded_activity_bash_out_tutorial", description: p.Z.Messages.EMBEDDED_ACTIVITY_NOTICE_BASH_OUT_DESCRIPTION, learnMore: !1, title: p.Z.Messages.EMBEDDED_ACTIVITIES_AVAILABLE_NOW, videoPosterUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1037963592227635230/bash_out.jpg", videoUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1037967755955146762/bash_out.mp4", ctaText: p.Z.Messages.PLAY, dismissText: p.Z.Messages.DISMISS
          };
        case "GAME_NIGHT":
          return {
            analyticsLocation: E.Z.ACTIVITIES_COACH_MARK_GAME_NIGHT, analyticsType: "embedded_activity_game_night_tutorial", description: p.Z.Messages.EMBEDDED_ACTIVITIES_GAME_NIGHT_BODY, learnMore: !1, title: p.Z.Messages.EMBEDDED_ACTIVITIES_GAME_NIGHT_HEADING, videoPosterUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1093287297950175272/game_night_desktop.jpg", videoUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1093286971708813382/game_night_desktop.mp4", ctaText: p.Z.Messages.PLAY_NOW, dismissText: p.Z.Messages.MAYBE_LATER
          };
        default:
          return {
            analyticsLocation: E.Z.ACTIVITY_COACH_MARK_NITRO, analyticsType: "", description: "", learnMore: !1, title: "", videoPosterUrl: "", videoUrl: "", ctaText: "", dismissText: ""
          }
      }
    }(s), {
      analyticsLocations: M
    } = (0, h.ZP)(i);
    a.useEffect(() => {
      m.default.track(T.rMx.TOOLTIP_VIEWED, {
        type: A
      })
    }, [A]);
    let D = (0, c.bp)() === T.IlC.POPOUT,
      b = (0, r.e7)([_.Z], () => _.Z.getChannel(t), [t]);
    return (0, l.jsx)(h.Gt, {
      value: M,
      children: (0, l.jsx)("div", {
        className: N.wrapper,
        children: (0, l.jsx)("div", {
          className: N.container,
          children: (0, l.jsxs)("div", {
            className: N.content,
            children: [(0, l.jsx)(I.Z, {
              className: N.video,
              src: P,
              poster: R,
              width: 224,
              height: 126,
              loop: !0,
              muted: !0,
              autoPlay: !0
            }), (0, l.jsx)("div", {
              className: N.header,
              children: (0, l.jsx)(o.Heading, {
                className: N.__invalid_headerText,
                variant: "text-sm/bold",
                color: "always-white",
                children: v
              })
            }), (0, l.jsxs)(o.Text, {
              className: N.subheaderText,
              variant: "text-xs/normal",
              color: "always-white",
              children: [L, O ? (0, l.jsxs)(l.Fragment, {
                children: [" ", (0, l.jsx)(o.Anchor, {
                  className: N.learnMoreLink,
                  href: "https://support.discord.com/hc/articles/4422142836759",
                  children: p.Z.Messages.LEARN_MORE
                })]
              }) : null]
            }), (0, l.jsxs)("div", {
              className: N.ctaActionWrapper,
              children: [(0, l.jsx)(o.Button, {
                color: o.Button.Colors.BRAND,
                onClick: () => {
                  n(g.L.UNKNOWN)
                },
                children: Z
              }), (0, l.jsx)(o.Button, {
                color: o.Button.Colors.BRAND_INVERTED,
                onClick: null != x ? x : () => {
                  if (n(g.L.UNKNOWN), null != b)(0, d.Z)({
                    channel: b.isGuildVoice() ? b : void 0,
                    guildId: b.guild_id,
                    locationObject: {
                      page: T.ZY5.GUILD_CHANNEL,
                      section: T.jXE.GUILD_CHANNEL_LIST,
                      object: T.qAy.ACTIVITIES_COACH_MARK,
                      objectType: T.Qqv.ACTIVITY
                    },
                    openInPopout: D,
                    analyticsLocations: M
                  }), (0, u.w1)({
                    guildId: b.guild_id
                  })
                },
                children: f
              })]
            })]
          })
        })
      })
    })
  }