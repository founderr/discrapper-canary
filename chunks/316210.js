"use strict";
t.r(s), t.d(s, {
  default: function() {
    return g
  }
});
var a = t("735250"),
  n = t("470079"),
  l = t("499237"),
  r = t("322282"),
  i = t("220427"),
  c = t("481060"),
  o = t("285952"),
  d = t("63063"),
  u = t("497505"),
  S = t("918701"),
  E = t("46140"),
  m = t("981631"),
  h = t("689938"),
  _ = t("163315"),
  T = t("708901");

function g(e) {
  let {
    transitionState: s,
    onClose: t,
    questContent: l,
    quest: r
  } = e, i = (0, S.hasVariant)(r, E.QuestVariants.IN_HOUSE_CONSOLE_QUEST), g = n.useMemo(() => i ? l === u.QuestContent.QUEST_BAR ? h.default.Messages.QUESTS_DISCLOSURE_IN_HOUSE_QUEST_BAR : h.default.Messages.QUESTS_DISCLOSURE_IN_HOUSE : l === u.QuestContent.QUEST_BAR ? h.default.Messages.QUESTS_DISCLOSURE_PUBLISHER_TARGETING.format({
    gamePublisher: i ? "Discord" : r.config.messages.gamePublisher
  }) : h.default.Messages.QUESTS_DISCLOSURE_PUBLISHER_PROMOTING.format({
    gamePublisher: r.config.messages.gamePublisher,
    gameTitle: r.config.messages.gameTitle
  }), [r, l, i]);
  return (0, a.jsxs)(c.ModalRoot, {
    transitionState: s,
    size: c.ModalSize.DYNAMIC,
    className: _.modalRoot,
    children: [(0, a.jsxs)(c.ModalHeader, {
      direction: o.default.Direction.VERTICAL,
      separator: !1,
      className: _.modalHeader,
      children: [(0, a.jsxs)("div", {
        className: _.modalTop,
        children: [(0, a.jsx)("div", {
          className: _.iconFrame,
          children: (0, a.jsx)("img", {
            className: _.icon,
            alt: "",
            src: T
          })
        }), (0, a.jsx)(c.ModalCloseButton, {
          className: _.closeBtn,
          onClick: t
        })]
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        children: h.default.Messages.QUESTS_DISCLOSURE_LABEL
      })]
    }), (0, a.jsxs)(c.ModalContent, {
      className: _.modalContent,
      children: [(0, a.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        className: _.upperBodyText,
        children: g
      }), (0, a.jsx)(f, {
        questContent: l
      }), (0, a.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: h.default.Messages.QUESTS_DISCLOSURE_LEARN_MORE.format({
          privacySettingsUrl: d.default.getArticleURL(m.HelpdeskArticles.QUESTS_PRIVACY_CONTROLS)
        })
      })]
    }), (0, a.jsx)(c.ModalFooter, {
      className: _.footer,
      children: (0, a.jsx)(c.Button, {
        onClick: t,
        children: h.default.Messages.CLOSE
      })
    })]
  })
}

function f(e) {
  let {
    questContent: s
  } = e;
  switch (s) {
    case u.QuestContent.QUEST_BAR:
      return (0, a.jsxs)("ul", {
        className: _.targetList,
        children: [(0, a.jsx)(C, {
          icon: r.GlobeEarthIcon,
          children: h.default.Messages.QUESTS_DISCLOSURE_LOCATION
        }), (0, a.jsx)(C, {
          icon: i.UserIcon,
          children: h.default.Messages.QUESTS_DISCLOSURE_AGE
        }), (0, a.jsx)(C, {
          icon: l.GameControllerIcon,
          children: h.default.Messages.QUESTS_DISCLOSURE_ACTIVITY
        })]
      });
    case u.QuestContent.ACTIVITY_PANEL:
    case u.QuestContent.QUESTS_EMBED:
    case u.QuestContent.QUEST_LIVE_STREAM:
      return (0, a.jsx)("ul", {
        className: _.targetList,
        children: (0, a.jsx)(C, {
          icon: l.GameControllerIcon,
          children: h.default.Messages.QUESTS_DISCLOSURE_ACTIVITY
        })
      });
    default:
      return null
  }
}

function C(e) {
  let {
    icon: s,
    children: t
  } = e;
  return (0, a.jsxs)(c.Text, {
    variant: "text-sm/medium",
    tag: "li",
    className: _.targetItem,
    children: [(0, a.jsx)(s, {
      width: 16,
      height: 16
    }), t]
  })
}