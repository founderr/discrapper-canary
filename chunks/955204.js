n.d(t, {
  EP: function() {
    return l
  },
  F7: function() {
    return u
  },
  LG: function() {
    return o
  },
  hn: function() {
    return a
  },
  oX: function() {
    return d
  }
});
var s, i, a, l, r = n(641033),
  c = n(689938);
(s = a || (a = {}))[s.ENABLE_POGGERMODE = 0] = "ENABLE_POGGERMODE", s[s.DISABLE_POGGERMODE = 1] = "DISABLE_POGGERMODE", s[s.PING_SOMEONE = 2] = "PING_SOMEONE", s[s.PING_ME = 3] = "PING_ME", s[s.COMBO_MULTI_LEVEL_1 = 4] = "COMBO_MULTI_LEVEL_1", s[s.COMBO_MULTI_LEVEL_2 = 5] = "COMBO_MULTI_LEVEL_2", s[s.COMBO_MULTI_LEVEL_3 = 6] = "COMBO_MULTI_LEVEL_3", s[s.COMBO_MULTI_LEVEL_4 = 7] = "COMBO_MULTI_LEVEL_4", s[s.TOTAL_SCORE_LEVEL_1 = 8] = "TOTAL_SCORE_LEVEL_1", s[s.TOTAL_SCORE_LEVEL_2 = 9] = "TOTAL_SCORE_LEVEL_2", s[s.TOTAL_SCORE_LEVEL_3 = 10] = "TOTAL_SCORE_LEVEL_3", s[s.TOTAL_SCORE_LEVEL_4 = 11] = "TOTAL_SCORE_LEVEL_4", s[s.TOTAL_SCORE_LEVEL_5 = 12] = "TOTAL_SCORE_LEVEL_5", s[s.VISITOR_100 = 13] = "VISITOR_100", s[s.CUSTOMIZE_CONFETTI = 14] = "CUSTOMIZE_CONFETTI", s[s.MORE = 15] = "MORE", s[s.COMBO_VALUE_LEVEL_1 = 16] = "COMBO_VALUE_LEVEL_1", s[s.COMBO_VALUE_LEVEL_2 = 17] = "COMBO_VALUE_LEVEL_2", s[s.COMBO_VALUE_LEVEL_3 = 18] = "COMBO_VALUE_LEVEL_3", s[s.COMBO_VALUE_LEVEL_4 = 19] = "COMBO_VALUE_LEVEL_4", (i = l || (l = {}))[i.COMMON = 0] = "COMMON", i[i.UNCOMMON = 1] = "UNCOMMON", i[i.RARE = 2] = "RARE", i[i.EPIC = 3] = "EPIC", i[i.LEGENDARY = 4] = "LEGENDARY";
let o = {
  0: {
    id: 0,
    name: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_ENABLE_POGGERMODE_NAME,
    description: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_ENABLE_POGGERMODE_DESCRIPTION,
    rarity: 0,
    hideDescriptionUntilUnlock: !1
  },
  1: {
    id: 1,
    name: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_DISABLE_POGGERMODE_NAME,
    description: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_DISABLE_POGGERMODE_DESCRIPTION,
    rarity: 1,
    hideDescriptionUntilUnlock: !1
  },
  13: {
    id: 13,
    name: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_VISITOR_100_NAME,
    description: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_VISITOR_100_DESCRIPTION,
    rarity: 4,
    hideDescriptionUntilUnlock: !0,
    onAction: () => {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
    }
  },
  14: {
    id: 14,
    name: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_CUSTOMIZE_CONFETTI_NAME,
    description: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_CUSTOMIZE_CONFETTI_DESCRIPTION,
    rarity: 0,
    hideDescriptionUntilUnlock: !1
  },
  15: {
    id: 15,
    name: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_MORE_NAME,
    description: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_MORE_DESCRIPTION,
    rarity: 1,
    hideDescriptionUntilUnlock: !1
  },
  2: {
    id: 2,
    name: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_PING_SOMEONE_NAME,
    description: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_PING_SOMEONE_DESCRIPTION,
    rarity: 0,
    hideDescriptionUntilUnlock: !1
  },
  3: {
    id: 3,
    name: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_PING_ME_NAME,
    description: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_PING_ME_DESCRIPTION,
    rarity: 1,
    hideDescriptionUntilUnlock: !1
  },
  4: {
    id: 4,
    name: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_COMBO_MULTI_LEVEL_1_NAME,
    description: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_COMBO_MULTI_LEVEL_1_DESCRIPTION,
    rarity: 0,
    hideDescriptionUntilUnlock: !1,
    checkUnlock: e => e.multiplier >= 2
  },
  5: {
    id: 5,
    name: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_COMBO_MULTI_LEVEL_2_NAME,
    description: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_COMBO_MULTI_LEVEL_2_DESCRIPTION,
    rarity: 1,
    hideDescriptionUntilUnlock: !1,
    checkUnlock: e => e.multiplier >= 4
  },
  6: {
    id: 6,
    name: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_COMBO_MULTI_LEVEL_3_NAME,
    description: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_COMBO_MULTI_LEVEL_3_DESCRIPTION,
    rarity: 2,
    hideDescriptionUntilUnlock: !1,
    checkUnlock: e => e.multiplier >= 5
  },
  7: {
    id: 7,
    name: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_COMBO_MULTI_LEVEL_4_NAME,
    description: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_COMBO_MULTI_LEVEL_4_DESCRIPTION,
    rarity: 2,
    hideDescriptionUntilUnlock: !1,
    checkUnlock: e => e.multiplier >= 7
  },
  8: {
    id: 8,
    name: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_TOTAL_SCORE_LEVEL_1_NAME,
    description: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_TOTAL_SCORE_LEVEL_1_DESCRIPTION,
    rarity: 3,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 430 === (0, r.Eo)(e)
  },
  9: {
    id: 9,
    name: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_TOTAL_SCORE_LEVEL_2_NAME,
    description: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_TOTAL_SCORE_LEVEL_2_DESCRIPTION,
    rarity: 3,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 555 === (0, r.Eo)(e)
  },
  10: {
    id: 10,
    name: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_TOTAL_SCORE_LEVEL_3_NAME,
    description: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_TOTAL_SCORE_LEVEL_3_DESCRIPTION,
    rarity: 3,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 898 === (0, r.Eo)(e)
  },
  11: {
    id: 11,
    name: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_TOTAL_SCORE_LEVEL_4_NAME,
    description: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_TOTAL_SCORE_LEVEL_4_DESCRIPTION,
    rarity: 4,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 1337 === (0, r.Eo)(e)
  },
  12: {
    id: 12,
    name: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_TOTAL_SCORE_LEVEL_5_NAME,
    description: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_TOTAL_SCORE_LEVEL_5_DESCRIPTION,
    rarity: 4,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 2048 === (0, r.Eo)(e)
  },
  16: {
    id: 16,
    name: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_COMBO_VALUE_LEVEL_1_NAME,
    description: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_COMBO_VALUE_LEVEL_1_DESCRIPTION,
    rarity: 2,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 64 === e.value
  },
  17: {
    id: 17,
    name: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_COMBO_VALUE_LEVEL_2_NAME,
    description: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_COMBO_VALUE_LEVEL_2_DESCRIPTION,
    rarity: 3,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 88 === e.value
  },
  18: {
    id: 18,
    name: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_COMBO_VALUE_LEVEL_3_NAME,
    description: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_COMBO_VALUE_LEVEL_3_DESCRIPTION,
    rarity: 3,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 99 === e.value
  },
  19: {
    id: 19,
    name: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_COMBO_VALUE_LEVEL_4_NAME,
    description: () => c.Z.Messages.POGGERMODE_ACHIEVEMENT_COMBO_VALUE_LEVEL_4_DESCRIPTION,
    rarity: 4,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 113 === e.value
  }
};

function d(e) {
  return o[e]
}
let u = e => {
  switch (e) {
    case 0:
      return {
        color: "#1ABC9C"
      };
    case 1:
      return {
        color: "#3498DB"
      };
    case 2:
      return {
        color: "#9B59B6"
      };
    case 3:
      return {
        color: "#E91E63"
      };
    case 4:
      return {
        color: "#E67E22"
      }
  }
}