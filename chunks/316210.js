a.r(s), a.d(s, {
  default: function() {
    return T
  }
});
var t = a(735250),
  n = a(470079),
  r = a(481060),
  o = a(285952),
  c = a(63063),
  i = a(497505),
  l = a(918701),
  S = a(46140),
  d = a(981631),
  E = a(689938),
  m = a(988094),
  _ = a(708901);

function T(e) {
  let {
    transitionState: s,
    onClose: a,
    questContent: T,
    quest: u
  } = e, g = (0, l.zK)(u, S.S7.IN_HOUSE_CONSOLE_QUEST), x = n.useMemo(() => g ? T === i.jn.QUEST_BAR ? E.Z.Messages.QUESTS_DISCLOSURE_IN_HOUSE_QUEST_BAR : E.Z.Messages.QUESTS_DISCLOSURE_IN_HOUSE : T === i.jn.QUEST_BAR ? E.Z.Messages.QUESTS_DISCLOSURE_PUBLISHER_TARGETING.format({
    gamePublisher: g ? "Discord" : u.config.messages.gamePublisher
  }) : E.Z.Messages.QUESTS_DISCLOSURE_PUBLISHER_PROMOTING.format({
    gamePublisher: u.config.messages.gamePublisher,
    gameTitle: u.config.messages.gameTitle
  }), [u, T, g]);
  return (0, t.jsxs)(r.ModalRoot, {
    transitionState: s,
    size: r.ModalSize.DYNAMIC,
    className: m.modalRoot,
    children: [(0, t.jsxs)(r.ModalHeader, {
      direction: o.Z.Direction.VERTICAL,
      separator: !1,
      className: m.modalHeader,
      children: [(0, t.jsxs)("div", {
        className: m.modalTop,
        children: [(0, t.jsx)("div", {
          className: m.iconFrame,
          children: (0, t.jsx)("img", {
            className: m.icon,
            alt: "",
            src: _
          })
        }), (0, t.jsx)(r.ModalCloseButton, {
          className: m.closeBtn,
          onClick: a
        })]
      }), (0, t.jsx)(r.Heading, {
        variant: "heading-xl/bold",
        children: E.Z.Messages.QUESTS_DISCLOSURE_LABEL
      })]
    }), (0, t.jsxs)(r.ModalContent, {
      className: m.modalContent,
      children: [(0, t.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        className: m.upperBodyText,
        children: x
      }), (0, t.jsx)(U, {
        questContent: T
      }), (0, t.jsx)(r.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: E.Z.Messages.QUESTS_DISCLOSURE_LEARN_MORE.format({
          privacySettingsUrl: c.Z.getArticleURL(d.BhN.QUESTS_PRIVACY_CONTROLS)
        })
      })]
    }), (0, t.jsx)(r.ModalFooter, {
      className: m.footer,
      children: (0, t.jsx)(r.Button, {
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
      return (0, t.jsxs)("ul", {
        className: m.targetList,
        children: [(0, t.jsx)(u, {
          icon: r.GlobeEarthIcon,
          children: E.Z.Messages.QUESTS_DISCLOSURE_LOCATION
        }), (0, t.jsx)(u, {
          icon: r.UserIcon,
          children: E.Z.Messages.QUESTS_DISCLOSURE_AGE
        }), (0, t.jsx)(u, {
          icon: r.GameControllerIcon,
          children: E.Z.Messages.QUESTS_DISCLOSURE_ACTIVITY
        })]
      });
    case i.jn.ACTIVITY_PANEL:
    case i.jn.QUESTS_EMBED:
    case i.jn.QUEST_LIVE_STREAM:
      return (0, t.jsx)("ul", {
        className: m.targetList,
        children: (0, t.jsx)(u, {
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
  return (0, t.jsxs)(r.Text, {
    variant: "text-sm/medium",
    tag: "li",
    className: m.targetItem,
    children: [(0, t.jsx)(s, {
      size: "xs",
      color: "currentColor"
    }), a]
  })
}