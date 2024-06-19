t.d(n, {
  Z: function() {
    return N
  },
  k: function() {
    return l
  }
});
var s, l, a = t(735250);
t(470079);
var i = t(120356),
  r = t.n(i),
  o = t(481060),
  c = t(857395),
  d = t(131154),
  u = t(940627),
  E = t(346656),
  _ = t(38981),
  T = t(53221);

function N(e) {
  let {
    guild: n,
    stageInstance: t,
    showGuildPopout: s,
    setShowGuildPopout: l,
    handleGuildNameClick: i,
    source: N,
    speakers: h,
    speakerCount: I,
    audienceCount: x,
    channelName: m
  } = e, S = n.id;
  return (0, a.jsx)("div", {
    className: T.contentContainer,
    children: (0, a.jsxs)("div", {
      className: T.headerContainer,
      children: [(0, a.jsxs)("div", {
        className: T.guildInfoContainer,
        children: [(0, a.jsx)(c.Z, {
          guildId: S,
          shouldShow: s,
          onRequestClose: () => l(!1),
          children: () => (0, a.jsxs)(o.Clickable, {
            className: T.flexContainerRow,
            onClick: i,
            children: [(0, a.jsx)(E.Z, {
              guild: n,
              size: E.Z.Sizes.MINI,
              className: T.guildIcon
            }), (0, a.jsxs)("div", {
              className: T.flexContainerRow,
              children: [(0, a.jsx)(o.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: r()(T.guildName, {
                  [T.disabled]: null == i
                }),
                children: n.name
              }), (0, a.jsx)(u.Z, {
                guild: n
              })]
            })]
          })
        }), (0, a.jsxs)("div", {
          className: T.rightJustifiedContent,
          children: [6 === N && (0, a.jsx)("div", {
            className: T.featuredTag,
            children: (0, a.jsx)(o.Text, {
              variant: "text-sm/normal",
              className: T.featuredTagText,
              children: "Featured"
            })
          }), (0, a.jsx)(_.Z, {
            count: x,
            className: T.__invalid_audienceCount
          })]
        })]
      }), (0, a.jsx)(o.Text, {
        color: "header-primary",
        variant: "text-lg/semibold",
        className: T.topicText,
        children: t.topic
      }), (0, a.jsx)(o.Text, {
        color: "header-secondary",
        className: T.description,
        variant: "text-sm/normal",
        children: t.description
      }), (0, a.jsx)(d.Z, {
        guild: n,
        speakers: h,
        speakerCount: I,
        className: T.speakers
      }), null != m && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("hr", {
          className: T.divider
        }), (0, a.jsxs)("div", {
          className: T.footer,
          children: [(0, a.jsx)(o.StageIcon, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: T.icon
          }), (0, a.jsx)(o.Text, {
            color: "header-secondary",
            className: T.__invalid_label,
            variant: "text-sm/normal",
            children: m
          })]
        })]
      })]
    })
  })
}(s = l || (l = {}))[s.UNSPECIFIED = 0] = "UNSPECIFIED", s[s.TRENDING = 1] = "TRENDING", s[s.PERSONALIZED = 2] = "PERSONALIZED", s[s.USER_GUILDS = 3] = "USER_GUILDS", s[s.FRIENDS_GUILDS = 4] = "FRIENDS_GUILDS", s[s.INTRO_CARD = 5] = "INTRO_CARD", s[s.FEATURED = 6] = "FEATURED"