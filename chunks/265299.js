"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var l = n("481060"),
  a = n("113434"),
  i = n("497505"),
  r = n("37303"),
  o = n("683650"),
  u = n("392108");

function d(e) {
  let {
    questId: t
  } = e, {
    quests: n,
    isFetchingCurrentQuests: d
  } = (0, a.useQuests)({
    fetchPolicy: "cache-or-network"
  }), c = n.find(e => e.id === t);
  return d ? (0, s.jsx)(l.Spinner, {
    className: u.spinner
  }) : null == c ? (0, s.jsx)(o.InvalidQuestsEmbed, {}) : (0, s.jsx)(r.QuestsCard, {
    quest: c,
    location: i.QuestContent.QUESTS_EMBED
  }, c.id)
}