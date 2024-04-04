"use strict";
n.r(t), n.d(t, {
  EmbeddedActivityTutorial: function() {
    return A
  },
  TutorialType: function() {
    return s
  }
});
var a, s, l = n("735250"),
  i = n("470079"),
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
  S = n("981631"),
  m = n("921944"),
  I = n("689938"),
  p = n("198940");
(a = s || (s = {})).BOOSTING = "BOOSTING", a.NITRO = "NITRO", a.BASH_OUT = "BASH_OUT", a.GAME_NIGHT = "GAME_NIGHT";
let T = "https://cdn.discordapp.com/attachments/860252504826445825/1029516100356018217/Activities_NUX_GL_1.mp4",
  g = "https://cdn.discordapp.com/attachments/887469171804356628/916446867586416660/activities-video-poster-512.png",
  A = e => {
    let {
      channelId: t,
      markAsDismissed: n,
      tutorialType: a
    } = e, {
      analyticsLocation: s,
      analyticsType: A,
      ctaText: N,
      dismissText: R,
      description: O,
      learnMore: v,
      title: L,
      videoPosterUrl: M,
      videoUrl: P,
      ctaOnClick: y
    } = function(e) {
      switch (e) {
        case "BOOSTING":
          return {
            analyticsLocation: f.default.ACTIVITY_COACH_MARK_BOOSTING, analyticsType: "embedded_activity_discovery_tutorial", description: I.default.Messages.EMBEDDED_ACTIVITY_NOTICE_WTP_DESCRIPTION, learnMore: !0, title: I.default.Messages.EMBEDDED_ACTIVITY_NOTICE_TITLE, videoPosterUrl: g, videoUrl: T, ctaText: I.default.Messages.EMBEDDED_ACTIVITIES_TRY_IT_OUT, dismissText: I.default.Messages.DISMISS
          };
        case "NITRO":
          return {
            analyticsLocation: f.default.ACTIVITY_COACH_MARK_NITRO, analyticsType: "embedded_activity_nitro_discovery_tutorial", description: I.default.Messages.EMBEDDED_ACTIVITY_NOTICE_NITRO_DESCRIPTION, learnMore: !0, title: I.default.Messages.EMBEDDED_ACTIVITY_NOTICE_NITRO_TITLE, videoPosterUrl: g, videoUrl: T, ctaText: I.default.Messages.EMBEDDED_ACTIVITIES_TRY_IT_OUT, dismissText: I.default.Messages.DISMISS
          };
        case "BASH_OUT":
          return {
            analyticsLocation: f.default.ACTIVITY_COACH_MARK_BASH_OUT, analyticsType: "embedded_activity_bash_out_tutorial", description: I.default.Messages.EMBEDDED_ACTIVITY_NOTICE_BASH_OUT_DESCRIPTION, learnMore: !1, title: I.default.Messages.EMBEDDED_ACTIVITIES_AVAILABLE_NOW, videoPosterUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1037963592227635230/bash_out.jpg", videoUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1037967755955146762/bash_out.mp4", ctaText: I.default.Messages.PLAY, dismissText: I.default.Messages.DISMISS
          };
        case "GAME_NIGHT":
          return {
            analyticsLocation: f.default.ACTIVITIES_COACH_MARK_GAME_NIGHT, analyticsType: "embedded_activity_game_night_tutorial", description: I.default.Messages.EMBEDDED_ACTIVITIES_GAME_NIGHT_BODY, learnMore: !1, title: I.default.Messages.EMBEDDED_ACTIVITIES_GAME_NIGHT_HEADING, videoPosterUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1093287297950175272/game_night_desktop.jpg", videoUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1093286971708813382/game_night_desktop.mp4", ctaText: I.default.Messages.PLAY_NOW, dismissText: I.default.Messages.MAYBE_LATER
          };
        default:
          return {
            analyticsLocation: f.default.ACTIVITY_COACH_MARK_NITRO, analyticsType: "", description: "", learnMore: !1, title: "", videoPosterUrl: "", videoUrl: "", ctaText: "", dismissText: ""
          }
      }
    }(a), {
      analyticsLocations: D
    } = (0, E.default)(s);
    i.useEffect(() => {
      C.default.track(S.AnalyticEvents.TOOLTIP_VIEWED, {
        type: A
      })
    }, [A]);
    let x = (0, u.useAppContext)() === S.AppContext.POPOUT,
      b = (0, r.useStateFromStores)([h.default], () => h.default.getChannel(t), [t]);
    return (0, l.jsx)(E.AnalyticsLocationProvider, {
      value: D,
      children: (0, l.jsx)("div", {
        className: p.wrapper,
        children: (0, l.jsx)("div", {
          className: p.container,
          children: (0, l.jsxs)("div", {
            className: p.content,
            children: [(0, l.jsx)(_.default, {
              className: p.video,
              src: P,
              poster: M,
              width: 224,
              height: 126,
              loop: !0,
              muted: !0,
              autoPlay: !0
            }), (0, l.jsx)("div", {
              className: p.header,
              children: (0, l.jsx)(o.Heading, {
                className: p.__invalid_headerText,
                variant: "text-sm/bold",
                color: "always-white",
                children: L
              })
            }), (0, l.jsxs)(o.Text, {
              className: p.subheaderText,
              variant: "text-xs/normal",
              color: "always-white",
              children: [O, v ? (0, l.jsxs)(l.Fragment, {
                children: [" ", (0, l.jsx)(o.Anchor, {
                  className: p.learnMoreLink,
                  href: "https://support.discord.com/hc/articles/4422142836759",
                  children: I.default.Messages.LEARN_MORE
                })]
              }) : null]
            }), (0, l.jsxs)("div", {
              className: p.ctaActionWrapper,
              children: [(0, l.jsx)(o.Button, {
                color: o.Button.Colors.BRAND,
                onClick: () => {
                  n(m.ContentDismissActionType.UNKNOWN)
                },
                children: R
              }), (0, l.jsx)(o.Button, {
                color: o.Button.Colors.BRAND,
                look: o.Button.Looks.INVERTED,
                onClick: null != y ? y : () => {
                  n(m.ContentDismissActionType.UNKNOWN), null != b && ((0, c.default)({
                    channel: b.isGuildVoice() ? b : void 0,
                    guildId: b.guild_id,
                    locationObject: {
                      page: S.AnalyticsPages.GUILD_CHANNEL,
                      section: S.AnalyticsSections.GUILD_CHANNEL_LIST,
                      object: S.AnalyticsObjects.ACTIVITIES_COACH_MARK,
                      objectType: S.AnalyticsObjectTypes.ACTIVITY
                    },
                    openInPopout: x,
                    analyticsLocations: D
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