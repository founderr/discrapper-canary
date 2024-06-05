"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
}), a("653041");
var l = a("735250");
a("470079");
var s = a("442837"),
  n = a("481060"),
  i = a("594174"),
  r = a("104259"),
  d = a("185403"),
  o = a("988951"),
  u = a("311888"),
  c = a("63063"),
  E = a("5192"),
  f = a("431328"),
  h = a("501655"),
  _ = a("659972"),
  N = a("981631"),
  S = a("765305"),
  x = a("689938"),
  T = a("562035");

function v(e) {
  let {
    icon: t
  } = e;
  return (0, l.jsx)("div", {
    className: T.iconContainer,
    children: (0, l.jsx)(t, {
      width: 24,
      height: 24
    })
  })
}

function m(e) {
  let {
    icon: t,
    text: a
  } = e;
  return (0, l.jsxs)("div", {
    className: T.listItemContainer,
    children: [(0, l.jsx)("div", {
      className: T.listItemIconContainer,
      children: t
    }), (0, l.jsx)(n.Text, {
      className: T.listItemText,
      variant: "text-md/normal",
      color: "header-secondary",
      children: a
    })]
  })
}

function C(e) {
  var t;
  let {
    guild: a,
    channel: n,
    stageData: r
  } = e, d = (0, s.useStateFromStores)([i.default], () => i.default.getCurrentUser(), []), o = {
    id: "1337",
    guild_id: a.id,
    channel_id: n.id,
    topic: r.topic,
    description: r.description,
    privacy_level: null !== (t = r.privacyLevel) && void 0 !== t ? t : S.GuildScheduledEventPrivacyLevel.PUBLIC
  }, u = (0, f.useStageParticipants)(n.id, h.StageChannelParticipantNamedIndex.SPEAKER), c = (0, f.useStageParticipantsCount)(n.id, h.StageChannelParticipantNamedIndex.AUDIENCE), N = u.slice(0, 5);
  return null == N.find(e => {
    var t;
    return (null === (t = e.user) || void 0 === t ? void 0 : t.id) === (null == d ? void 0 : d.id)
  }) && N.push({
    user: d,
    userNick: E.default.getName(a.id, n.id, d)
  }), (0, l.jsx)("div", {
    className: T.previewCardContainer,
    children: (0, l.jsx)("div", {
      className: T.previewCard,
      children: (0, l.jsx)(_.default, {
        guild: a,
        stageInstance: o,
        showGuildPopout: !1,
        setShowGuildPopout: () => {},
        source: _.StageDiscoveryRecommendationSource.UNSPECIFIED,
        speakers: N,
        speakerCount: u.length,
        audienceCount: Math.max(1337, c),
        channelName: n.name
      })
    })
  })
}

function g(e) {
  let {
    guild: t,
    channel: a,
    stageData: s,
    headerId: i,
    loading: E,
    onNext: f,
    onCancel: h,
    onBack: _
  } = e;
  return null == t || null == a || null == s ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(C, {
      guild: t,
      channel: a,
      stageData: s
    }), (0, l.jsxs)(n.ModalContent, {
      className: T.container,
      children: [(0, l.jsxs)("div", {
        className: T.header,
        children: [(0, l.jsx)(n.Heading, {
          id: i,
          className: T.__invalid_title,
          variant: "heading-xl/semibold",
          children: x.default.Messages.START_STAGE_PUBLIC_PREVIEW_TITLE
        }), (0, l.jsx)(n.Text, {
          className: T.subtitle,
          color: "header-secondary",
          variant: "text-sm/normal",
          children: x.default.Messages.START_STAGE_PUBLIC_PREVIEW_SUBTITLE
        })]
      }), (0, l.jsxs)("div", {
        className: T.__invalid_list,
        children: [(0, l.jsx)(m, {
          icon: (0, l.jsx)(v, {
            icon: r.default
          }),
          text: x.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_ONE
        }), (0, l.jsx)(m, {
          icon: (0, l.jsx)(v, {
            icon: o.default
          }),
          text: x.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_TWO
        }), (0, l.jsx)(m, {
          icon: (0, l.jsx)(v, {
            icon: d.default
          }),
          text: x.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_THREE
        }), (0, l.jsx)(m, {
          icon: (0, l.jsx)(u.default, {
            className: T.badgeIconBackground,
            foreground: T.badgeIconForeground,
            width: 40,
            height: 40
          }),
          text: x.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_FOUR.format({
            articleURL: c.default.getArticleURL(N.HelpdeskArticles.STAGE_CHANNEL_GUIDELINES)
          })
        })]
      })]
    }), (0, l.jsxs)(n.ModalFooter, {
      children: [(0, l.jsx)(n.Button, {
        color: n.Button.Colors.GREEN,
        onClick: f,
        submitting: E,
        children: x.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
      }), (0, l.jsx)(n.Button, {
        color: n.Button.Colors.PRIMARY,
        className: T.cancelButton,
        onClick: h,
        children: x.default.Messages.CANCEL
      }), (0, l.jsx)(n.Button, {
        look: n.Button.Looks.LINK,
        color: n.Button.Colors.LINK,
        className: T.backButton,
        onClick: _,
        size: n.Button.Sizes.MIN,
        children: x.default.Messages.BACK
      })]
    })]
  })
}