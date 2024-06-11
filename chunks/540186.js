"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("653041");
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("594174"),
  r = n("104259"),
  d = n("185403"),
  u = n("988951"),
  o = n("311888"),
  c = n("63063"),
  E = n("5192"),
  _ = n("431328"),
  S = n("501655"),
  T = n("659972"),
  f = n("981631"),
  N = n("765305"),
  h = n("689938"),
  g = n("562035");

function I(e) {
  let {
    icon: t
  } = e;
  return (0, a.jsx)("div", {
    className: g.iconContainer,
    children: (0, a.jsx)(t, {
      width: 24,
      height: 24
    })
  })
}

function m(e) {
  let {
    icon: t,
    text: n
  } = e;
  return (0, a.jsxs)("div", {
    className: g.listItemContainer,
    children: [(0, a.jsx)("div", {
      className: g.listItemIconContainer,
      children: t
    }), (0, a.jsx)(s.Text, {
      className: g.listItemText,
      variant: "text-md/normal",
      color: "header-secondary",
      children: n
    })]
  })
}

function x(e) {
  var t;
  let {
    guild: n,
    channel: s,
    stageData: r
  } = e, d = (0, l.useStateFromStores)([i.default], () => i.default.getCurrentUser(), []), u = {
    id: "1337",
    guild_id: n.id,
    channel_id: s.id,
    topic: r.topic,
    description: r.description,
    privacy_level: null !== (t = r.privacyLevel) && void 0 !== t ? t : N.GuildScheduledEventPrivacyLevel.PUBLIC
  }, o = (0, _.useStageParticipants)(s.id, S.StageChannelParticipantNamedIndex.SPEAKER), c = (0, _.useStageParticipantsCount)(s.id, S.StageChannelParticipantNamedIndex.AUDIENCE), f = o.slice(0, 5);
  return null == f.find(e => {
    var t;
    return (null === (t = e.user) || void 0 === t ? void 0 : t.id) === (null == d ? void 0 : d.id)
  }) && f.push({
    user: d,
    userNick: E.default.getName(n.id, s.id, d)
  }), (0, a.jsx)("div", {
    className: g.previewCardContainer,
    children: (0, a.jsx)("div", {
      className: g.previewCard,
      children: (0, a.jsx)(T.default, {
        guild: n,
        stageInstance: u,
        showGuildPopout: !1,
        setShowGuildPopout: () => {},
        source: T.StageDiscoveryRecommendationSource.UNSPECIFIED,
        speakers: f,
        speakerCount: o.length,
        audienceCount: Math.max(1337, c),
        channelName: s.name
      })
    })
  })
}

function v(e) {
  let {
    guild: t,
    channel: n,
    stageData: l,
    headerId: i,
    loading: E,
    onNext: _,
    onCancel: S,
    onBack: T
  } = e;
  return null == t || null == n || null == l ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(x, {
      guild: t,
      channel: n,
      stageData: l
    }), (0, a.jsxs)(s.ModalContent, {
      className: g.container,
      children: [(0, a.jsxs)("div", {
        className: g.header,
        children: [(0, a.jsx)(s.Heading, {
          id: i,
          className: g.__invalid_title,
          variant: "heading-xl/semibold",
          children: h.default.Messages.START_STAGE_PUBLIC_PREVIEW_TITLE
        }), (0, a.jsx)(s.Text, {
          className: g.subtitle,
          color: "header-secondary",
          variant: "text-sm/normal",
          children: h.default.Messages.START_STAGE_PUBLIC_PREVIEW_SUBTITLE
        })]
      }), (0, a.jsxs)("div", {
        className: g.__invalid_list,
        children: [(0, a.jsx)(m, {
          icon: (0, a.jsx)(I, {
            icon: r.default
          }),
          text: h.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_ONE
        }), (0, a.jsx)(m, {
          icon: (0, a.jsx)(I, {
            icon: u.default
          }),
          text: h.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_TWO
        }), (0, a.jsx)(m, {
          icon: (0, a.jsx)(I, {
            icon: d.default
          }),
          text: h.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_THREE
        }), (0, a.jsx)(m, {
          icon: (0, a.jsx)(o.default, {
            className: g.badgeIconBackground,
            foreground: g.badgeIconForeground,
            width: 40,
            height: 40
          }),
          text: h.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_FOUR.format({
            articleURL: c.default.getArticleURL(f.HelpdeskArticles.STAGE_CHANNEL_GUIDELINES)
          })
        })]
      })]
    }), (0, a.jsxs)(s.ModalFooter, {
      children: [(0, a.jsx)(s.Button, {
        color: s.Button.Colors.GREEN,
        onClick: _,
        submitting: E,
        children: h.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
      }), (0, a.jsx)(s.Button, {
        color: s.Button.Colors.PRIMARY,
        className: g.cancelButton,
        onClick: S,
        children: h.default.Messages.CANCEL
      }), (0, a.jsx)(s.Button, {
        look: s.Button.Looks.LINK,
        color: s.Button.Colors.LINK,
        className: g.backButton,
        onClick: T,
        size: s.Button.Sizes.MIN,
        children: h.default.Messages.BACK
      })]
    })]
  })
}