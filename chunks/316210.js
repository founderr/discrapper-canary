a.r(s), a.d(s, {
  default: function() {
    return T
  }
});
var n = a(735250),
  t = a(470079),
  r = a(481060),
  c = a(285952),
  o = a(63063),
  i = a(497505),
  l = a(918701),
  S = a(46140),
  d = a(981631),
  E = a(689938),
  _ = a(988094),
  m = a(708901);

function T(e) {
  let {
    transitionState: s,
    onClose: a,
    questContent: T,
    quest: u
  } = e, g = (0, l.zK)(u, S.S7.IN_HOUSE_CONSOLE_QUEST), x = t.useMemo(() => g ? T === i.jn.QUEST_BAR || T === i.jn.QUEST_BAR_V2 ? E.Z.Messages.QUESTS_DISCLOSURE_IN_HOUSE_QUEST_BAR : E.Z.Messages.QUESTS_DISCLOSURE_IN_HOUSE : T === i.jn.QUEST_BAR || T === i.jn.QUEST_BAR_V2 ? E.Z.Messages.QUESTS_DISCLOSURE_PUBLISHER_TARGETING.format({
    gamePublisher: g ? "Discord" : u.config.messages.gamePublisher
  }) : E.Z.Messages.QUESTS_DISCLOSURE_PUBLISHER_PROMOTING.format({
    gamePublisher: u.config.messages.gamePublisher,
    gameTitle: u.config.messages.gameTitle
  }), [u, T, g]);
  return (0, n.jsxs)(r.ModalRoot, {
    transitionState: s,
    size: r.ModalSize.DYNAMIC,
    className: _.modalRoot,
    children: [(0, n.jsxs)(r.ModalHeader, {
      direction: c.Z.Direction.VERTICAL,
      separator: !1,
      className: _.modalHeader,
      children: [(0, n.jsxs)("div", {
        className: _.modalTop,
        children: [(0, n.jsx)("div", {
          className: _.iconFrame,
          children: (0, n.jsx)("img", {
            className: _.icon,
            alt: "",
            src: m
          })
        }), (0, n.jsx)(r.ModalCloseButton, {
          className: _.closeBtn,
          onClick: a
        })]
      }), (0, n.jsx)(r.Heading, {
        variant: "heading-xl/bold",
        children: E.Z.Messages.QUESTS_DISCLOSURE_LABEL
      })]
    }), (0, n.jsxs)(r.ModalContent, {
      className: _.modalContent,
      children: [(0, n.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        className: _.upperBodyText,
        children: x
      }), (0, n.jsx)(U, {
        questContent: T
      }), (0, n.jsx)(r.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: E.Z.Messages.QUESTS_DISCLOSURE_LEARN_MORE.format({
          privacySettingsUrl: o.Z.getArticleURL(d.BhN.QUESTS_PRIVACY_CONTROLS)
        })
      })]
    }), (0, n.jsx)(r.ModalFooter, {
      className: _.footer,
      children: (0, n.jsx)(r.Button, {
        onClick: a,
        children: E.Z.Messages.CLOSE
      })
    })]
  })
}

function U(e) {
  let {
    questContent: s
  } = e;
  switch (s) {
    case i.jn.QUEST_BAR:
    case i.jn.QUEST_BAR_V2:
      return (0, n.jsxs)("ul", {
        className: _.targetList,
        children: [(0, n.jsx)(u, {
          icon: r.GlobeEarthIcon,
          children: E.Z.Messages.QUESTS_DISCLOSURE_LOCATION
        }), (0, n.jsx)(u, {
          icon: r.UserIcon,
          children: E.Z.Messages.QUESTS_DISCLOSURE_AGE
        }), (0, n.jsx)(u, {
          icon: r.GameControllerIcon,
          children: E.Z.Messages.QUESTS_DISCLOSURE_ACTIVITY
        })]
      });
    case i.jn.ACTIVITY_PANEL:
    case i.jn.QUESTS_EMBED:
    case i.jn.QUEST_LIVE_STREAM:
      return (0, n.jsx)("ul", {
        className: _.targetList,
        children: (0, n.jsx)(u, {
          icon: r.GameControllerIcon,
          children: E.Z.Messages.QUESTS_DISCLOSURE_ACTIVITY
        })
      });
    default:
      return null
  }
}

function u(e) {
  let {
    icon: s,
    children: a
  } = e;
  return (0, n.jsxs)(r.Text, {
    variant: "text-sm/medium",
    tag: "li",
    className: _.targetItem,
    children: [(0, n.jsx)(s, {
      size: "xs",
      color: "currentColor"
    }), a]
  })
}