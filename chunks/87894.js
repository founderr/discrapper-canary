"use strict";
n.r(t), n.d(t, {
  QUESTS_CARD_COLLAPSED_HEIGHT_PX: function() {
    return r
  },
  QUESTS_CARD_EXTRA_SMALL_BREAKPOINT_PX: function() {
    return f
  },
  QUESTS_CARD_ICON_SIZE_PX: function() {
    return u
  },
  QUESTS_CARD_MAX_HEIGHT_FALLBACK_PX: function() {
    return d
  },
  QUESTS_CARD_PADDING_Y_PX: function() {
    return o
  },
  QUESTS_CARD_SMALL_BREAKPOINT_PX: function() {
    return c
  },
  QuestsInventorySection: function() {
    return a
  },
  shouldQuestCardBeExpandedPermanently: function() {
    return i
  }
});
var s, a, l = n("497505");

function i(e) {
  return e.location !== l.QuestContent.QUEST_INVENTORY_CARD || 0 === e.giftInventorySection
}(s = a || (a = {}))[s.FOR_YOU = 0] = "FOR_YOU", s[s.OTHER = 1] = "OTHER";
let r = 100,
  o = 20,
  u = 32,
  d = 1e3,
  c = 460,
  f = 280