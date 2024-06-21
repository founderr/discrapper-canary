n.d(t, {
  V: function() {
    return A
  },
  _: function() {
    return s
  }
});
var i, s, l = n(735250),
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
  g = n(981631),
  p = n(921944),
  N = n(689938),
  T = n(372064);
(i = s || (s = {})).BOOSTING = "BOOSTING", i.NITRO = "NITRO", i.BASH_OUT = "BASH_OUT", i.GAME_NIGHT = "GAME_NIGHT";
let C = "https://cdn.discordapp.com/attachments/860252504826445825/1029516100356018217/Activities_NUX_GL_1.mp4",
  S = "https://cdn.discordapp.com/attachments/887469171804356628/916446867586416660/activities-video-poster-512.png",
  A = e => {
    let {
      channelId: t,
      markAsDismissed: n,
      tutorialType: i
    } = e, {
      analyticsLocation: s,
      analyticsType: A,
      ctaText: f,
      dismissText: Z,
      description: v,
      learnMore: L,
      title: O,
      videoPosterUrl: R,
      videoUrl: x,
      ctaOnClick: M
    } = function(e) {
      switch (e) {
        case "BOOSTING":
          return {
            analyticsLocation: E.Z.ACTIVITY_COACH_MARK_BOOSTING, analyticsType: "embedded_activity_discovery_tutorial", description: N.Z.Messages.EMBEDDED_ACTIVITY_NOTICE_WTP_DESCRIPTION, learnMore: !0, title: N.Z.Messages.EMBEDDED_ACTIVITY_NOTICE_TITLE, videoPosterUrl: S, videoUrl: C, ctaText: N.Z.Messages.EMBEDDED_ACTIVITIES_TRY_IT_OUT, dismissText: N.Z.Messages.DISMISS
          };
        case "NITRO":
          return {
            analyticsLocation: E.Z.ACTIVITY_COACH_MARK_NITRO, analyticsType: "embedded_activity_nitro_discovery_tutorial", description: N.Z.Messages.EMBEDDED_ACTIVITY_NOTICE_NITRO_DESCRIPTION, learnMore: !0, title: N.Z.Messages.EMBEDDED_ACTIVITY_NOTICE_NITRO_TITLE, videoPosterUrl: S, videoUrl: C, ctaText: N.Z.Messages.EMBEDDED_ACTIVITIES_TRY_IT_OUT, dismissText: N.Z.Messages.DISMISS
          };
        case "BASH_OUT":
          return {
            analyticsLocation: E.Z.ACTIVITY_COACH_MARK_BASH_OUT, analyticsType: "embedded_activity_bash_out_tutorial", description: N.Z.Messages.EMBEDDED_ACTIVITY_NOTICE_BASH_OUT_DESCRIPTION, learnMore: !1, title: N.Z.Messages.EMBEDDED_ACTIVITIES_AVAILABLE_NOW, videoPosterUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1037963592227635230/bash_out.jpg", videoUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1037967755955146762/bash_out.mp4", ctaText: N.Z.Messages.PLAY, dismissText: N.Z.Messages.DISMISS
          };
        case "GAME_NIGHT":
          return {
            analyticsLocation: E.Z.ACTIVITIES_COACH_MARK_GAME_NIGHT, analyticsType: "embedded_activity_game_night_tutorial", description: N.Z.Messages.EMBEDDED_ACTIVITIES_GAME_NIGHT_BODY, learnMore: !1, title: N.Z.Messages.EMBEDDED_ACTIVITIES_GAME_NIGHT_HEADING, videoPosterUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1093287297950175272/game_night_desktop.jpg", videoUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1093286971708813382/game_night_desktop.mp4", ctaText: N.Z.Messages.PLAY_NOW, dismissText: N.Z.Messages.MAYBE_LATER
          };
        default:
          return {
            analyticsLocation: E.Z.ACTIVITY_COACH_MARK_NITRO, analyticsType: "", description: "", learnMore: !1, title: "", videoPosterUrl: "", videoUrl: "", ctaText: "", dismissText: ""
          }
      }
    }(i), {
      analyticsLocations: P
    } = (0, h.ZP)(s);
    a.useEffect(() => {
      m.default.track(g.rMx.TOOLTIP_VIEWED, {
        type: A
      })
    }, [A]);
    let D = (0, c.bp)() === g.IlC.POPOUT,
      b = (0, r.e7)([_.Z], () => _.Z.getChannel(t), [t]);
    return (0, l.jsx)(h.Gt, {
      value: P,
      children: (0, l.jsx)("div", {
        className: T.wrapper,
        children: (0, l.jsx)("div", {
          className: T.container,
          children: (0, l.jsxs)("div", {
            className: T.content,
            children: [(0, l.jsx)(I.Z, {
              className: T.video,
              src: x,
              poster: R,
              width: 224,
              height: 126,
              loop: !0,
              muted: !0,
              autoPlay: !0
            }), (0, l.jsx)("div", {
              className: T.header,
              children: (0, l.jsx)(o.Heading, {
                className: T.__invalid_headerText,
                variant: "text-sm/bold",
                color: "always-white",
                children: O
              })
            }), (0, l.jsxs)(o.Text, {
              className: T.subheaderText,
              variant: "text-xs/normal",
              color: "always-white",
              children: [v, L ? (0, l.jsxs)(l.Fragment, {
                children: [" ", (0, l.jsx)(o.Anchor, {
                  className: T.learnMoreLink,
                  href: "https://support.discord.com/hc/articles/4422142836759",
                  children: N.Z.Messages.LEARN_MORE
                })]
              }) : null]
            }), (0, l.jsxs)("div", {
              className: T.ctaActionWrapper,
              children: [(0, l.jsx)(o.Button, {
                color: o.Button.Colors.BRAND,
                onClick: () => {
                  n(p.L.UNKNOWN)
                },
                children: Z
              }), (0, l.jsx)(o.Button, {
                color: o.Button.Colors.BRAND_INVERTED,
                onClick: null != M ? M : () => {
                  if (n(p.L.UNKNOWN), null != b)(0, d.Z)({
                    channel: b.isGuildVoice() ? b : void 0,
                    guildId: b.guild_id,
                    locationObject: {
                      page: g.ZY5.GUILD_CHANNEL,
                      section: g.jXE.GUILD_CHANNEL_LIST,
                      object: g.qAy.ACTIVITIES_COACH_MARK,
                      objectType: g.Qqv.ACTIVITY
                    },
                    openInPopout: D,
                    analyticsLocations: P
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