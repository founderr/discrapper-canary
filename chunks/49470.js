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
  i = s("588025"),
  r = s("301259"),
  o = s("686098"),
  d = s("782340"),
  u = s("38845"),
  c = () => {
    let {
      quests: e,
      isFetchingCurrentQuests: t
    } = (0, o.useQuests)();
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
        }), e.map(e => (0, a.jsx)(r.QuestsCard, {
          quest: e,
          location: i.QuestContent.QUEST_INVENTORY_CARD
        }, e.id))]
      })
    })
  }