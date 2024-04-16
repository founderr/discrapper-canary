"use strict";
a.r(t), a.d(t, {
  getActivitiesWhatsNewCount: function() {
    return c
  },
  useActivitiesWhatsNewCount: function() {
    return d
  }
});
var n = a("442837"),
  s = a("507885"),
  l = a("379146"),
  i = a("273003"),
  r = a("754332"),
  o = a("140863"),
  u = a("701488");

function d() {
  return (0, n.useStateFromStores)([s.default], () => c(s.default))
}

function c(e) {
  let t = 0,
    a = e.getAcknowledged();
  return l.ExperimentBirthdayActivitiesGdmTile.getCurrentConfig({
    location: "1d9280_2"
  }).enabled && !a.has(u.WhatsNewSection.GDM_ACTIVITIES) && t++, o.ExperimentBirthdayActivitiesPuttPartyTile.getCurrentConfig({
    location: "1d9280_3"
  }).enabled && !a.has(u.WhatsNewSection.PUTT_PARTY) && t++, i.ExperimentBirthdayActivitiesJamspaceTile.getCurrentConfig({
    location: "1d9280_4"
  }).enabled && !a.has(u.WhatsNewSection.JAMSPACE) && t++, r.ExperimentBirthdayActivitiesPokerTile.getCurrentConfig({
    location: "1d9280_5"
  }).enabled && !a.has(u.WhatsNewSection.POKER) && t++, !a.has(u.WhatsNewSection.DISCORD_TURNS_8) && t <= 0 && t++, t
}