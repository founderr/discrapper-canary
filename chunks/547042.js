"use strict";
n.r(t), n.d(t, {
  EmbeddedActivityTutorial: function() {
    return A
  },
  TutorialType: function() {
    return s
  }
});
var a, s, i = n("735250"),
  l = n("470079"),
  r = n("442837"),
  o = n("481060"),
  u = n("40851"),
  d = n("566620"),
  c = n("403404"),
  f = n("100527"),
  E = n("906732"),
  h = n("592125"),
  _ = n("810090"),
  C = n("626135"),
  m = n("981631"),
  S = n("921944"),
  p = n("689938"),
  I = n("336141");
(a = s || (s = {})).BOOSTING = "BOOSTING", a.NITRO = "NITRO", a.BASH_OUT = "BASH_OUT", a.GAME_NIGHT = "GAME_NIGHT";
let g = "https://cdn.discordapp.com/attachments/860252504826445825/1029516100356018217/Activities_NUX_GL_1.mp4",
  T = "https://cdn.discordapp.com/attachments/887469171804356628/916446867586416660/activities-video-poster-512.png",
  A = e => {
    let {
      channelId: t,
      markAsDismissed: n,
      tutorialType: a
    } = e, {
      analyticsLocation: s,
      analyticsType: A,
      ctaText: N,
      dismissText: v,
      description: R,
      learnMore: L,
      title: O,
      videoPosterUrl: M,
      videoUrl: y,
      ctaOnClick: P
    } = function(e) {
      switch (e) {
        case "BOOSTING":
          return {
            analyticsLocation: f.default.ACTIVITY_COACH_MARK_BOOSTING, analyticsType: "embedded_activity_discovery_tutorial", description: p.default.Messages.EMBEDDED_ACTIVITY_NOTICE_WTP_DESCRIPTION, learnMore: !0, title: p.default.Messages.EMBEDDED_ACTIVITY_NOTICE_TITLE, videoPosterUrl: T, videoUrl: g, ctaText: p.default.Messages.EMBEDDED_ACTIVITIES_TRY_IT_OUT, dismissText: p.default.Messages.DISMISS
          };
        case "NITRO":
          return {
            analyticsLocation: f.default.ACTIVITY_COACH_MARK_NITRO, analyticsType: "embedded_activity_nitro_discovery_tutorial", description: p.default.Messages.EMBEDDED_ACTIVITY_NOTICE_NITRO_DESCRIPTION, learnMore: !0, title: p.default.Messages.EMBEDDED_ACTIVITY_NOTICE_NITRO_TITLE, videoPosterUrl: T, videoUrl: g, ctaText: p.default.Messages.EMBEDDED_ACTIVITIES_TRY_IT_OUT, dismissText: p.default.Messages.DISMISS
          };
        case "BASH_OUT":
          return {
            analyticsLocation: f.default.ACTIVITY_COACH_MARK_BASH_OUT, analyticsType: "embedded_activity_bash_out_tutorial", description: p.default.Messages.EMBEDDED_ACTIVITY_NOTICE_BASH_OUT_DESCRIPTION, learnMore: !1, title: p.default.Messages.EMBEDDED_ACTIVITIES_AVAILABLE_NOW, videoPosterUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1037963592227635230/bash_out.jpg", videoUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1037967755955146762/bash_out.mp4", ctaText: p.default.Messages.PLAY, dismissText: p.default.Messages.DISMISS
          };
        case "GAME_NIGHT":
          return {
            analyticsLocation: f.default.ACTIVITIES_COACH_MARK_GAME_NIGHT, analyticsType: "embedded_activity_game_night_tutorial", description: p.default.Messages.EMBEDDED_ACTIVITIES_GAME_NIGHT_BODY, learnMore: !1, title: p.default.Messages.EMBEDDED_ACTIVITIES_GAME_NIGHT_HEADING, videoPosterUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1093287297950175272/game_night_desktop.jpg", videoUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1093286971708813382/game_night_desktop.mp4", ctaText: p.default.Messages.PLAY_NOW, dismissText: p.default.Messages.MAYBE_LATER
          };
        default:
          return {
            analyticsLocation: f.default.ACTIVITY_COACH_MARK_NITRO, analyticsType: "", description: "", learnMore: !1, title: "", videoPosterUrl: "", videoUrl: "", ctaText: "", dismissText: ""
          }
      }
    }(a), {
      analyticsLocations: x
    } = (0, E.default)(s);
    l.useEffect(() => {
      C.default.track(m.AnalyticEvents.TOOLTIP_VIEWED, {
        type: A
      })
    }, [A]);
    let D = (0, u.useAppContext)() === m.AppContext.POPOUT,
      b = (0, r.useStateFromStores)([h.default], () => h.default.getChannel(t), [t]);
    return (0, i.jsx)(E.AnalyticsLocationProvider, {
      value: x,
      children: (0, i.jsx)("div", {
        className: I.wrapper,
        children: (0, i.jsx)("div", {
          className: I.container,
          children: (0, i.jsxs)("div", {
            className: I.content,
            children: [(0, i.jsx)(_.default, {
              className: I.video,
              src: y,
              poster: M,
              width: 224,
              height: 126,
              loop: !0,
              muted: !0,
              autoPlay: !0
            }), (0, i.jsx)("div", {
              className: I.header,
              children: (0, i.jsx)(o.Heading, {
                className: I.__invalid_headerText,
                variant: "text-sm/bold",
                color: "always-white",
                children: O
              })
            }), (0, i.jsxs)(o.Text, {
              className: I.subheaderText,
              variant: "text-xs/normal",
              color: "always-white",
              children: [R, L ? (0, i.jsxs)(i.Fragment, {
                children: [" ", (0, i.jsx)(o.Anchor, {
                  className: I.learnMoreLink,
                  href: "https://support.discord.com/hc/articles/4422142836759",
                  children: p.default.Messages.LEARN_MORE
                })]
              }) : null]
            }), (0, i.jsxs)("div", {
              className: I.ctaActionWrapper,
              children: [(0, i.jsx)(o.Button, {
                color: o.Button.Colors.BRAND,
                onClick: () => {
                  n(S.ContentDismissActionType.UNKNOWN)
                },
                children: v
              }), (0, i.jsx)(o.Button, {
                color: o.Button.Colors.BRAND,
                look: o.Button.Looks.INVERTED,
                onClick: null != P ? P : () => {
                  n(S.ContentDismissActionType.UNKNOWN), null != b && ((0, c.default)({
                    channel: b.isGuildVoice() ? b : void 0,
                    guildId: b.guild_id,
                    locationObject: {
                      page: m.AnalyticsPages.GUILD_CHANNEL,
                      section: m.AnalyticsSections.GUILD_CHANNEL_LIST,
                      object: m.AnalyticsObjects.ACTIVITIES_COACH_MARK,
                      objectType: m.AnalyticsObjectTypes.ACTIVITY
                    },
                    openInPopout: D,
                    analyticsLocations: x
                  }), (0, d.fetchShelf)({
                    guildId: b.guild_id
                  }))
                },
                children: N
              })]
            })]
          })
        })
      })
    })
  }