"use strict";
a.r(t), a.d(t, {
  StageDiscoveryRecommendationSource: function() {
    return s
  },
  default: function() {
    return N
  }
});
var l, s, n = a("735250");
a("470079");
var i = a("120356"),
  r = a.n(i),
  d = a("481060"),
  o = a("857395"),
  u = a("131154"),
  c = a("940627"),
  E = a("346656"),
  f = a("170039"),
  h = a("38981"),
  _ = a("317112");

function N(e) {
  let {
    guild: t,
    stageInstance: a,
    showGuildPopout: l,
    setShowGuildPopout: s,
    handleGuildNameClick: i,
    source: N,
    speakers: S,
    speakerCount: x,
    audienceCount: T,
    channelName: v
  } = e, m = t.id;
  return (0, n.jsx)("div", {
    className: _.contentContainer,
    children: (0, n.jsxs)("div", {
      className: _.headerContainer,
      children: [(0, n.jsxs)("div", {
        className: _.guildInfoContainer,
        children: [(0, n.jsx)(o.default, {
          guildId: m,
          shouldShow: l,
          onRequestClose: () => s(!1),
          children: () => (0, n.jsxs)(d.Clickable, {
            className: _.flexContainerRow,
            onClick: i,
            children: [(0, n.jsx)(E.default, {
              guild: t,
              size: E.default.Sizes.MINI,
              className: _.guildIcon
            }), (0, n.jsxs)("div", {
              className: _.flexContainerRow,
              children: [(0, n.jsx)(d.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: r()(_.guildName, {
                  [_.disabled]: null == i
                }),
                children: t.name
              }), (0, n.jsx)(c.default, {
                guild: t
              })]
            })]
          })
        }), (0, n.jsxs)("div", {
          className: _.rightJustifiedContent,
          children: [6 === N && (0, n.jsx)("div", {
            className: _.featuredTag,
            children: (0, n.jsx)(d.Text, {
              variant: "text-sm/normal",
              className: _.featuredTagText,
              children: "Featured"
            })
          }), (0, n.jsx)(h.default, {
            count: T,
            className: _.__invalid_audienceCount
          })]
        })]
      }), (0, n.jsx)(d.Text, {
        color: "header-primary",
        variant: "text-lg/semibold",
        className: _.topicText,
        children: a.topic
      }), (0, n.jsx)(d.Text, {
        color: "header-secondary",
        className: _.description,
        variant: "text-sm/normal",
        children: a.description
      }), (0, n.jsx)(u.default, {
        guild: t,
        speakers: S,
        speakerCount: x,
        className: _.speakers
      }), null != v && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("hr", {
          className: _.divider
        }), (0, n.jsxs)("div", {
          className: _.footer,
          children: [(0, n.jsx)(f.default, {
            width: 20,
            height: 20,
            className: _.icon
          }), (0, n.jsx)(d.Text, {
            color: "header-secondary",
            className: _.__invalid_label,
            variant: "text-sm/normal",
            children: v
          })]
        })]
      })]
    })
  })
}(l = s || (s = {}))[l.UNSPECIFIED = 0] = "UNSPECIFIED", l[l.TRENDING = 1] = "TRENDING", l[l.PERSONALIZED = 2] = "PERSONALIZED", l[l.USER_GUILDS = 3] = "USER_GUILDS", l[l.FRIENDS_GUILDS = 4] = "FRIENDS_GUILDS", l[l.INTRO_CARD = 5] = "INTRO_CARD", l[l.FEATURED = 6] = "FEATURED"