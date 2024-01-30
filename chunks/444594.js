"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("424973");
var l = n("37983");
n("884691");
var a = n("446674"),
  r = n("77078"),
  i = n("697218"),
  s = n("627490"),
  u = n("987772"),
  o = n("564875"),
  c = n("625687"),
  d = n("701909"),
  f = n("387111"),
  h = n("567469"),
  E = n("998716"),
  g = n("911457"),
  S = n("49111"),
  v = n("745049"),
  C = n("782340"),
  m = n("600329");

function _(e) {
  let {
    icon: t
  } = e;
  return (0, l.jsx)("div", {
    className: m.iconContainer,
    children: (0, l.jsx)(t, {
      width: 24,
      height: 24
    })
  })
}

function R(e) {
  let {
    icon: t,
    text: n
  } = e;
  return (0, l.jsxs)("div", {
    className: m.listItemContainer,
    children: [(0, l.jsx)("div", {
      className: m.listItemIconContainer,
      children: t
    }), (0, l.jsx)(r.Text, {
      className: m.listItemText,
      variant: "text-md/normal",
      color: "header-secondary",
      children: n
    })]
  })
}

function p(e) {
  var t;
  let {
    guild: n,
    channel: r,
    stageData: s
  } = e, u = (0, a.useStateFromStores)([i.default], () => i.default.getCurrentUser(), []), o = {
    id: "1337",
    guild_id: n.id,
    channel_id: r.id,
    topic: s.topic,
    description: s.description,
    privacy_level: null !== (t = s.privacyLevel) && void 0 !== t ? t : v.GuildScheduledEventPrivacyLevel.PUBLIC
  }, c = (0, h.useStageParticipants)(r.id, E.StageChannelParticipantNamedIndex.SPEAKER), d = (0, h.useStageParticipantsCount)(r.id, E.StageChannelParticipantNamedIndex.AUDIENCE), S = c.slice(0, 5);
  return null == S.find(e => {
    var t;
    return (null === (t = e.user) || void 0 === t ? void 0 : t.id) === (null == u ? void 0 : u.id)
  }) && S.push({
    user: u,
    userNick: f.default.getName(n.id, r.id, u)
  }), (0, l.jsx)("div", {
    className: m.previewCardContainer,
    children: (0, l.jsx)("div", {
      className: m.previewCard,
      children: (0, l.jsx)(g.default, {
        guild: n,
        stageInstance: o,
        showGuildPopout: !1,
        setShowGuildPopout: () => {},
        source: g.StageDiscoveryRecommendationSource.UNSPECIFIED,
        speakers: S,
        speakerCount: c.length,
        audienceCount: Math.max(1337, d),
        channelName: r.name
      })
    })
  })
}

function N(e) {
  let {
    guild: t,
    channel: n,
    stageData: a,
    headerId: i,
    loading: f,
    onNext: h,
    onCancel: E,
    onBack: g
  } = e;
  return null == t || null == n || null == a ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(p, {
      guild: t,
      channel: n,
      stageData: a
    }), (0, l.jsxs)(r.ModalContent, {
      className: m.container,
      children: [(0, l.jsxs)("div", {
        className: m.header,
        children: [(0, l.jsx)(r.Heading, {
          id: i,
          className: m.title,
          variant: "heading-xl/semibold",
          children: C.default.Messages.START_STAGE_PUBLIC_PREVIEW_TITLE
        }), (0, l.jsx)(r.Text, {
          className: m.subtitle,
          color: "header-secondary",
          variant: "text-sm/normal",
          children: C.default.Messages.START_STAGE_PUBLIC_PREVIEW_SUBTITLE
        })]
      }), (0, l.jsxs)("div", {
        className: m.list,
        children: [(0, l.jsx)(R, {
          icon: (0, l.jsx)(_, {
            icon: s.default
          }),
          text: C.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_ONE
        }), (0, l.jsx)(R, {
          icon: (0, l.jsx)(_, {
            icon: o.default
          }),
          text: C.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_TWO
        }), (0, l.jsx)(R, {
          icon: (0, l.jsx)(_, {
            icon: u.default
          }),
          text: C.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_THREE
        }), (0, l.jsx)(R, {
          icon: (0, l.jsx)(c.default, {
            className: m.badgeIconBackground,
            foreground: m.badgeIconForeground,
            width: 40,
            height: 40
          }),
          text: C.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_FOUR.format({
            articleURL: d.default.getArticleURL(S.HelpdeskArticles.STAGE_CHANNEL_GUIDELINES)
          })
        })]
      })]
    }), (0, l.jsxs)(r.ModalFooter, {
      children: [(0, l.jsx)(r.Button, {
        color: r.Button.Colors.GREEN,
        onClick: h,
        submitting: f,
        children: C.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
      }), (0, l.jsx)(r.Button, {
        color: r.Button.Colors.PRIMARY,
        className: m.cancelButton,
        onClick: E,
        children: C.default.Messages.CANCEL
      }), (0, l.jsx)(r.Button, {
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.LINK,
        className: m.backButton,
        onClick: g,
        size: r.Button.Sizes.MIN,
        children: C.default.Messages.BACK
      })]
    })]
  })
}