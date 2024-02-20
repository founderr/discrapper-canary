"use strict";
a.r(s), a.d(s, {
  default: function() {
    return x
  }
});
var t = a("37983");
a("884691");
var l = a("116788"),
  i = a("768961"),
  n = a("224701"),
  r = a("77078"),
  o = a("145131"),
  c = a("701909"),
  d = a("588025"),
  u = a("49111"),
  m = a("782340"),
  S = a("916183"),
  h = a("647924");

function x(e) {
  let {
    transitionState: s,
    onClose: a,
    questContent: l,
    questConfig: i
  } = e, n = l === d.QuestContent.QUEST_BAR ? m.default.Messages.QUESTS_DISCLOSURE_PUBLISHER_TARGETING.format({
    gamePublisher: i.messages.gamePublisher
  }) : m.default.Messages.QUESTS_DISCLOSURE_PUBLISHER_PROMOTING.format({
    gamePublisher: i.messages.gamePublisher,
    gameTitle: i.messages.gameTitle
  });
  return (0, t.jsxs)(r.ModalRoot, {
    transitionState: s,
    size: r.ModalSize.DYNAMIC,
    className: S.modalRoot,
    children: [(0, t.jsxs)(r.ModalHeader, {
      direction: o.default.Direction.VERTICAL,
      separator: !1,
      className: S.modalHeader,
      children: [(0, t.jsxs)("div", {
        className: S.modalTop,
        children: [(0, t.jsx)("div", {
          className: S.iconFrame,
          children: (0, t.jsx)("img", {
            className: S.icon,
            alt: "",
            src: h
          })
        }), (0, t.jsx)(r.ModalCloseButton, {
          className: S.closeBtn,
          onClick: a
        })]
      }), (0, t.jsx)(r.Heading, {
        variant: "heading-xl/bold",
        children: m.default.Messages.QUESTS_DISCLOSURE_LABEL
      })]
    }), (0, t.jsxs)(r.ModalContent, {
      className: S.modalContent,
      children: [(0, t.jsx)(r.Text, {
        variant: "text-sm/medium",
        className: S.upperBodyText,
        children: n
      }), (0, t.jsx)(E, {
        questContent: l
      }), (0, t.jsx)(r.Text, {
        variant: "text-sm/medium",
        className: S.lowerBodyText,
        children: m.default.Messages.QUESTS_DISCLOSURE_LEARN_MORE.format({
          privacySettingsUrl: c.default.getArticleURL(u.HelpdeskArticles.DATA_PRIVACY_CONTROLS)
        })
      })]
    }), (0, t.jsx)(r.ModalFooter, {
      className: S.footer,
      separator: !1,
      justify: o.default.Justify.CENTER,
      children: (0, t.jsx)(r.Button, {
        onClick: a,
        children: m.default.Messages.CLOSE
      })
    })]
  })
}

function E(e) {
  let {
    questContent: s
  } = e;
  if (s === d.QuestContent.QUEST_BAR) return (0, t.jsxs)("ul", {
    className: S.targetList,
    children: [(0, t.jsx)(f, {
      icon: i.GlobeEarthIcon,
      children: m.default.Messages.QUESTS_DISCLOSURE_LOCATION
    }), (0, t.jsx)(f, {
      icon: n.UserIcon,
      children: m.default.Messages.QUESTS_DISCLOSURE_AGE
    }), (0, t.jsx)(f, {
      icon: l.GameControllerIcon,
      children: m.default.Messages.QUESTS_DISCLOSURE_ACTIVITY
    })]
  });
  return null
}

function f(e) {
  let {
    icon: s,
    children: a
  } = e;
  return (0, t.jsxs)(r.Text, {
    variant: "text-sm/medium",
    tag: "li",
    className: S.targetItem,
    children: [(0, t.jsx)(s, {
      width: 16,
      height: 16
    }), a]
  })
}