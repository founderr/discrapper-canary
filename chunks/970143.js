"use strict";
t.r(s), t.d(s, {
  default: function() {
    return g
  }
});
var a = t("37983");
t("884691");
var l = t("116788"),
  n = t("768961"),
  r = t("224701"),
  c = t("77078"),
  i = t("145131"),
  o = t("701909"),
  d = t("588025"),
  u = t("49111"),
  h = t("782340"),
  f = t("916183"),
  m = t("647924");

function g(e) {
  let {
    transitionState: s,
    onClose: t,
    questContent: l,
    questConfig: n
  } = e, r = l === d.QuestContent.QUEST_BAR ? h.default.Messages.QUESTS_DISCLOSURE_PUBLISHER_TARGETING.format({
    gamePublisher: n.messages.gamePublisher
  }) : h.default.Messages.QUESTS_DISCLOSURE_PUBLISHER_PROMOTING.format({
    gamePublisher: n.messages.gamePublisher,
    gameTitle: n.messages.gameTitle
  });
  return (0, a.jsxs)(c.ModalRoot, {
    transitionState: s,
    size: c.ModalSize.DYNAMIC,
    className: f.modalRoot,
    children: [(0, a.jsxs)(c.ModalHeader, {
      direction: i.default.Direction.VERTICAL,
      separator: !1,
      className: f.modalHeader,
      children: [(0, a.jsxs)("div", {
        className: f.modalTop,
        children: [(0, a.jsx)("div", {
          className: f.iconFrame,
          children: (0, a.jsx)("img", {
            className: f.icon,
            alt: "",
            src: m
          })
        }), (0, a.jsx)(c.ModalCloseButton, {
          className: f.closeBtn,
          onClick: t
        })]
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        children: h.default.Messages.QUESTS_DISCLOSURE_LABEL
      })]
    }), (0, a.jsxs)(c.ModalContent, {
      className: f.modalContent,
      children: [(0, a.jsx)(c.Text, {
        variant: "text-sm/medium",
        className: f.upperBodyText,
        children: r
      }), (0, a.jsx)(x, {
        questContent: l
      }), (0, a.jsx)(c.Text, {
        variant: "text-sm/medium",
        className: f.lowerBodyText,
        children: h.default.Messages.QUESTS_DISCLOSURE_LEARN_MORE.format({
          privacySettingsUrl: o.default.getArticleURL(u.HelpdeskArticles.DATA_PRIVACY_CONTROLS)
        })
      })]
    }), (0, a.jsx)(c.ModalFooter, {
      className: f.footer,
      separator: !1,
      justify: i.default.Justify.CENTER,
      children: (0, a.jsx)(c.Button, {
        onClick: t,
        children: h.default.Messages.CLOSE
      })
    })]
  })
}

function x(e) {
  let {
    questContent: s
  } = e;
  switch (s) {
    case d.QuestContent.QUEST_BAR:
      return (0, a.jsxs)("ul", {
        className: f.targetList,
        children: [(0, a.jsx)(S, {
          icon: n.GlobeEarthIcon,
          children: h.default.Messages.QUESTS_DISCLOSURE_LOCATION
        }), (0, a.jsx)(S, {
          icon: r.UserIcon,
          children: h.default.Messages.QUESTS_DISCLOSURE_AGE
        }), (0, a.jsx)(S, {
          icon: l.GameControllerIcon,
          children: h.default.Messages.QUESTS_DISCLOSURE_ACTIVITY
        })]
      });
    case d.QuestContent.ACTIVITY_PANEL:
    case d.QuestContent.QUESTS_EMBED:
      return (0, a.jsx)("ul", {
        className: f.targetList,
        children: (0, a.jsx)(S, {
          icon: l.GameControllerIcon,
          children: h.default.Messages.QUESTS_DISCLOSURE_ACTIVITY
        })
      });
    default:
      return null
  }
}

function S(e) {
  let {
    icon: s,
    children: t
  } = e;
  return (0, a.jsxs)(c.Text, {
    variant: "text-sm/medium",
    tag: "li",
    className: f.targetItem,
    children: [(0, a.jsx)(s, {
      width: 16,
      height: 16
    }), t]
  })
}