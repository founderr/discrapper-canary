"use strict";
s.r(t), s.d(t, {
  generateContentFilterHighlightedOptions: function() {
    return d
  },
  generateDmSpamOptions: function() {
    return E
  },
  generateExplicitImageOptions: function() {
    return f
  },
  generateVerificationLevelOptions: function() {
    return c
  },
  mapOptionToHighlightedRowOptions: function() {
    return u
  }
});
var n = s("524437");
s("376345");
var l = s("692547"),
  a = s("2150"),
  i = s("981631"),
  o = s("973005"),
  r = s("689938");

function u(e) {
  return e.map(e => ({
    title: e.name,
    description: e.desc,
    highlightColor: function(e) {
      switch (e) {
        case I("PRIMARY_400"):
          return a.HighlightColors.ACCENT;
        case I("GREEN_360"):
          return a.HighlightColors.GREEN;
        case I("YELLOW_360"):
          return a.HighlightColors.YELLOW;
        case I("ORANGE_345"):
          return a.HighlightColors.ORANGE;
        case I("RED_400"):
          return a.HighlightColors.RED;
        default:
          return a.HighlightColors.NONE
      }
    }(e.color),
    value: e.value,
    disabled: e.disabled
  }))
}

function c() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return [{
    name: r.default.Messages.VERIFICATION_LEVEL_NONE,
    desc: r.default.Messages.VERIFICATION_LEVEL_NONE_CRITERIA,
    value: i.VerificationLevels.NONE,
    disabled: e,
    tooltipText: e ? r.default.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null
  }, {
    name: r.default.Messages.VERIFICATION_LEVEL_LOW,
    desc: r.default.Messages.VERIFICATION_LEVEL_LOW_CRITERIA,
    value: i.VerificationLevels.LOW,
    color: t ? void 0 : I("GREEN_360")
  }, {
    name: r.default.Messages.VERIFICATION_LEVEL_MEDIUM,
    desc: r.default.Messages.VERIFICATION_LEVEL_MEDIUM_CRITERIA.format({
      min: i.VerificationCriteria.ACCOUNT_AGE
    }),
    value: i.VerificationLevels.MEDIUM,
    color: t ? void 0 : I("YELLOW_360")
  }, {
    name: r.default.Messages.VERIFICATION_LEVEL_HIGH,
    desc: r.default.Messages.VERIFICATION_LEVEL_HIGH_CRITERIA.format({
      min: i.VerificationCriteria.MEMBER_AGE
    }),
    value: i.VerificationLevels.HIGH,
    color: t ? void 0 : I("ORANGE_345")
  }, {
    name: r.default.Messages.VERIFICATION_LEVEL_VERY_HIGH,
    desc: r.default.Messages.VERIFICATION_LEVEL_VERY_HIGH_CRITERIA,
    value: i.VerificationLevels.VERY_HIGH,
    color: t ? void 0 : I("RED_400")
  }]
}

function d() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return [{
    name: r.default.Messages.EXPLICIT_CONTENT_FILTER_HIGH_V2,
    desc: r.default.Messages.EXPLICIT_CONTENT_FILTER_HIGH_DESCRIPTION_V2,
    value: i.GuildExplicitContentFilterTypes.ALL_MEMBERS,
    color: I("RED_400")
  }, {
    name: r.default.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_V2,
    desc: r.default.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_DESCRIPTION_V2,
    value: i.GuildExplicitContentFilterTypes.MEMBERS_WITHOUT_ROLES,
    disabled: e,
    tooltipText: e ? r.default.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null,
    color: I("YELLOW_360")
  }, {
    name: r.default.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_V2,
    desc: r.default.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_DESCRIPTION_V2,
    value: i.GuildExplicitContentFilterTypes.DISABLED,
    disabled: e,
    tooltipText: e ? r.default.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null,
    color: I("PRIMARY_400")
  }]
}

function E() {
  return [{
    name: r.default.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS,
    desc: r.default.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS_HELP,
    value: n.DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS,
    color: I("GREEN_360")
  }, {
    name: r.default.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS,
    desc: r.default.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS_HELP,
    value: n.DmSpamFilterV2.NON_FRIENDS,
    color: I("YELLOW_360")
  }, {
    name: r.default.Messages.USER_DM_SPAM_FILTER_DISABLED,
    desc: r.default.Messages.USER_DM_SPAM_FILTER_DISABLED_HELP,
    value: n.DmSpamFilterV2.DISABLED,
    color: I("RED_400")
  }]
}

function f() {
  return [{
    name: r.default.Messages.USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_V2,
    desc: r.default.Messages.USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_HELP_V2,
    value: o.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS,
    color: I("GREEN_360")
  }, {
    name: r.default.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_V2,
    desc: r.default.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_HELP_V2,
    value: o.ExplicitContentFilterTypes.NON_FRIENDS,
    color: I("YELLOW_360")
  }, {
    name: r.default.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_V2,
    desc: r.default.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_HELP_V2,
    value: o.ExplicitContentFilterTypes.DISABLED,
    color: I("RED_400")
  }]
}

function I(e) {
  return l.default.unsafe_rawColors[e].css
}