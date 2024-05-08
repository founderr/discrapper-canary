"use strict";
n.r(t), n.d(t, {
  StageDiscoveryRecommendationSource: function() {
    return l
  },
  default: function() {
    return T
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
  f = n("38981"),
  S = n("166941");

function T(e) {
  let {
    guild: t,
    stageInstance: n,
    showGuildPopout: a,
    setShowGuildPopout: l,
    handleGuildNameClick: i,
    source: T,
    speakers: h,
    speakerCount: N,
    audienceCount: g,
    channelName: v
  } = e, I = t.id;
  return (0, s.jsx)("div", {
    className: S.contentContainer,
    children: (0, s.jsxs)("div", {
      className: S.headerContainer,
      children: [(0, s.jsxs)("div", {
        className: S.guildInfoContainer,
        children: [(0, s.jsx)(u.default, {
          guildId: I,
          shouldShow: a,
          onRequestClose: () => l(!1),
          children: () => (0, s.jsxs)(d.Clickable, {
            className: S.flexContainerRow,
            onClick: i,
            children: [(0, s.jsx)(E.default, {
              guild: t,
              size: E.default.Sizes.MINI,
              className: S.guildIcon
            }), (0, s.jsxs)("div", {
              className: S.flexContainerRow,
              children: [(0, s.jsx)(d.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: r()(S.guildName, {
                  [S.disabled]: null == i
                }),
                children: t.name
              }), (0, s.jsx)(c.default, {
                guild: t
              })]
            })]
          })
        }), (0, s.jsxs)("div", {
          className: S.rightJustifiedContent,
          children: [6 === T && (0, s.jsx)("div", {
            className: S.featuredTag,
            children: (0, s.jsx)(d.Text, {
              variant: "text-sm/normal",
              className: S.featuredTagText,
              children: "Featured"
            })
          }), (0, s.jsx)(f.default, {
            count: g,
            className: S.__invalid_audienceCount
          })]
        })]
      }), (0, s.jsx)(d.Text, {
        color: "header-primary",
        variant: "text-lg/semibold",
        className: S.topicText,
        children: n.topic
      }), (0, s.jsx)(d.Text, {
        color: "header-secondary",
        className: S.description,
        variant: "text-sm/normal",
        children: n.description
      }), (0, s.jsx)(o.default, {
        guild: t,
        speakers: h,
        speakerCount: N,
        className: S.speakers
      }), null != v && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("hr", {
          className: S.divider
        }), (0, s.jsxs)("div", {
          className: S.footer,
          children: [(0, s.jsx)(_.default, {
            width: 20,
            height: 20,
            className: S.icon
          }), (0, s.jsx)(d.Text, {
            color: "header-secondary",
            className: S.__invalid_label,
            variant: "text-sm/normal",
            children: v
          })]
        })]
      })]
    })
  })
}(a = l || (l = {}))[a.UNSPECIFIED = 0] = "UNSPECIFIED", a[a.TRENDING = 1] = "TRENDING", a[a.PERSONALIZED = 2] = "PERSONALIZED", a[a.USER_GUILDS = 3] = "USER_GUILDS", a[a.FRIENDS_GUILDS = 4] = "FRIENDS_GUILDS", a[a.INTRO_CARD = 5] = "INTRO_CARD", a[a.FEATURED = 6] = "FEATURED"