"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var s = n("37983");
n("884691");
var l = n("77078"),
  a = n("588025"),
  i = n("301259"),
  r = n("686098"),
  o = n("987099"),
  u = n("571777");

function d(e) {
  let {
    questId: t
  } = e, {
    quests: n,
    isFetchingCurrentQuests: d
  } = (0, r.useQuests)([t]);
  if (d) return (0, s.jsx)(l.Spinner, {
    className: u.spinner
  });
  if (0 === n.length) return (0, s.jsx)(o.InvalidQuestsEmbed, {});
  let [c] = n;
  return (0, s.jsx)(i.QuestsCard, {
    quest: c,
    location: a.QuestContent.QUESTS_EMBED
  }, c.id)
}