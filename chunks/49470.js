"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("249900"),
  i = s("879364"),
  r = s("588025"),
  o = s("301259"),
  d = s("782340"),
  u = s("38845"),
  c = () => {
    let {
      quests: e,
      isFetchingCurrentQuests: t
    } = (0, i.useQuests)();
    return t ? (0, a.jsx)(n.Spinner, {
      className: u.spinner
    }) : 0 === e.length ? null : (0, a.jsx)(n.FormSection, {
      className: u.questsContainer,
      children: (0, a.jsxs)(n.HeadingLevel, {
        component: (0, a.jsxs)(n.Heading, {
          variant: "heading-md/semibold",
          className: u.questsHeading,
          children: [(0, a.jsx)(l.default, {
            className: u.questsIcon
          }), d.default.Messages.QUESTS]
        }),
        children: [(0, a.jsx)(n.FormDivider, {
          className: u.divider
        }), e.map(e => (0, a.jsx)(o.QuestsCard, {
          quest: e,
          location: r.QuestContent.QUEST_INVENTORY_CARD
        }, e.id))]
      })
    })
  }