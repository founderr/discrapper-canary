"use strict";
n.r(t), n.d(t, {
  StageDiscoveryRecommendationSource: function() {
    return l
  },
  default: function() {
    return f
  }
});
var a, l, s = n("735250");
n("470079");
var i = n("120356"),
  r = n.n(i),
  d = n("481060"),
  u = n("857395"),
  o = n("131154"),
  c = n("940627"),
  E = n("346656"),
  _ = n("170039"),
  S = n("38981"),
  T = n("317112");

function f(e) {
  let {
    guild: t,
    stageInstance: n,
    showGuildPopout: a,
    setShowGuildPopout: l,
    handleGuildNameClick: i,
    source: f,
    speakers: N,
    speakerCount: h,
    audienceCount: g,
    channelName: I
  } = e, m = t.id;
  return (0, s.jsx)("div", {
    className: T.contentContainer,
    children: (0, s.jsxs)("div", {
      className: T.headerContainer,
      children: [(0, s.jsxs)("div", {
        className: T.guildInfoContainer,
        children: [(0, s.jsx)(u.default, {
          guildId: m,
          shouldShow: a,
          onRequestClose: () => l(!1),
          children: () => (0, s.jsxs)(d.Clickable, {
            className: T.flexContainerRow,
            onClick: i,
            children: [(0, s.jsx)(E.default, {
              guild: t,
              size: E.default.Sizes.MINI,
              className: T.guildIcon
            }), (0, s.jsxs)("div", {
              className: T.flexContainerRow,
              children: [(0, s.jsx)(d.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: r()(T.guildName, {
                  [T.disabled]: null == i
                }),
                children: t.name
              }), (0, s.jsx)(c.default, {
                guild: t
              })]
            })]
          })
        }), (0, s.jsxs)("div", {
          className: T.rightJustifiedContent,
          children: [6 === f && (0, s.jsx)("div", {
            className: T.featuredTag,
            children: (0, s.jsx)(d.Text, {
              variant: "text-sm/normal",
              className: T.featuredTagText,
              children: "Featured"
            })
          }), (0, s.jsx)(S.default, {
            count: g,
            className: T.__invalid_audienceCount
          })]
        })]
      }), (0, s.jsx)(d.Text, {
        color: "header-primary",
        variant: "text-lg/semibold",
        className: T.topicText,
        children: n.topic
      }), (0, s.jsx)(d.Text, {
        color: "header-secondary",
        className: T.description,
        variant: "text-sm/normal",
        children: n.description
      }), (0, s.jsx)(o.default, {
        guild: t,
        speakers: N,
        speakerCount: h,
        className: T.speakers
      }), null != I && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("hr", {
          className: T.divider
        }), (0, s.jsxs)("div", {
          className: T.footer,
          children: [(0, s.jsx)(_.default, {
            width: 20,
            height: 20,
            className: T.icon
          }), (0, s.jsx)(d.Text, {
            color: "header-secondary",
            className: T.__invalid_label,
            variant: "text-sm/normal",
            children: I
          })]
        })]
      })]
    })
  })
}(a = l || (l = {}))[a.UNSPECIFIED = 0] = "UNSPECIFIED", a[a.TRENDING = 1] = "TRENDING", a[a.PERSONALIZED = 2] = "PERSONALIZED", a[a.USER_GUILDS = 3] = "USER_GUILDS", a[a.FRIENDS_GUILDS = 4] = "FRIENDS_GUILDS", a[a.INTRO_CARD = 5] = "INTRO_CARD", a[a.FEATURED = 6] = "FEATURED"