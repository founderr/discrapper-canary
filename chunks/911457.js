"use strict";
n.r(t), n.d(t, {
  StageDiscoveryRecommendationSource: function() {
    return a
  },
  default: function() {
    return S
  }
});
var l, a, r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  u = n("77078"),
  o = n("687521"),
  c = n("29913"),
  d = n("580357"),
  f = n("476263"),
  h = n("228427"),
  E = n("193038"),
  g = n("366091");

function S(e) {
  let {
    guild: t,
    stageInstance: n,
    showGuildPopout: l,
    setShowGuildPopout: a,
    handleGuildNameClick: i,
    source: S,
    speakers: v,
    speakerCount: C,
    audienceCount: m,
    channelName: _
  } = e, R = t.id;
  return (0, r.jsx)("div", {
    className: g.contentContainer,
    children: (0, r.jsxs)("div", {
      className: g.headerContainer,
      children: [(0, r.jsxs)("div", {
        className: g.guildInfoContainer,
        children: [(0, r.jsx)(o.default, {
          guildId: R,
          shouldShow: l,
          onRequestClose: () => a(!1),
          children: () => (0, r.jsxs)(u.Clickable, {
            className: g.flexContainerRow,
            onClick: i,
            children: [(0, r.jsx)(f.default, {
              guild: t,
              size: f.default.Sizes.MINI,
              className: g.guildIcon
            }), (0, r.jsxs)("div", {
              className: g.flexContainerRow,
              children: [(0, r.jsx)(u.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: s(g.guildName, {
                  [g.disabled]: null == i
                }),
                children: t.name
              }), (0, r.jsx)(d.default, {
                guild: t
              })]
            })]
          })
        }), (0, r.jsxs)("div", {
          className: g.rightJustifiedContent,
          children: [6 === S && (0, r.jsx)("div", {
            className: g.featuredTag,
            children: (0, r.jsx)(u.Text, {
              variant: "text-sm/normal",
              className: g.featuredTagText,
              children: "Featured"
            })
          }), (0, r.jsx)(E.default, {
            count: m,
            className: g.audienceCount
          })]
        })]
      }), (0, r.jsx)(u.Text, {
        color: "header-primary",
        variant: "text-lg/semibold",
        className: g.topicText,
        children: n.topic
      }), (0, r.jsx)(u.Text, {
        color: "header-secondary",
        className: g.description,
        variant: "text-sm/normal",
        children: n.description
      }), (0, r.jsx)(c.default, {
        guild: t,
        speakers: v,
        speakerCount: C,
        className: g.speakers
      }), null != _ && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: g.divider
        }), (0, r.jsxs)("div", {
          className: g.footer,
          children: [(0, r.jsx)(h.default, {
            width: 20,
            height: 20,
            className: g.icon
          }), (0, r.jsx)(u.Text, {
            color: "header-secondary",
            className: g.label,
            variant: "text-sm/normal",
            children: _
          })]
        })]
      })]
    })
  })
}(l = a || (a = {}))[l.UNSPECIFIED = 0] = "UNSPECIFIED", l[l.TRENDING = 1] = "TRENDING", l[l.PERSONALIZED = 2] = "PERSONALIZED", l[l.USER_GUILDS = 3] = "USER_GUILDS", l[l.FRIENDS_GUILDS = 4] = "FRIENDS_GUILDS", l[l.INTRO_CARD = 5] = "INTRO_CARD", l[l.FEATURED = 6] = "FEATURED"