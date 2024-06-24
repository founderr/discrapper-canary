E.d(s, {
  IF: function() {
    return r
  },
  LJ: function() {
    return l
  },
  MF: function() {
    return N
  },
  X7: function() {
    return c
  },
  c7: function() {
    return R
  }
});
var _ = E(524437);
E(376345);
var a = E(692547),
  n = E(2150),
  t = E(981631),
  I = E(973005),
  o = E(689938);

function l(e) {
  return e.map(e => ({
    title: e.name,
    description: e.desc,
    highlightColor: function(e) {
      switch (e) {
        case L("PRIMARY_400"):
          return n.q.ACCENT;
        case L("GREEN_360"):
          return n.q.GREEN;
        case L("YELLOW_360"):
          return n.q.YELLOW;
        case L("ORANGE_345"):
          return n.q.ORANGE;
        case L("RED_400"):
          return n.q.RED;
        default:
          return n.q.NONE
      }
    }(e.color),
    value: e.value,
    disabled: e.disabled
  }))
}

function r() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return [{
    name: o.Z.Messages.VERIFICATION_LEVEL_NONE,
    desc: o.Z.Messages.VERIFICATION_LEVEL_NONE_CRITERIA,
    value: t.sFg.NONE,
    disabled: e,
    tooltipText: e ? o.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null
  }, {
    name: o.Z.Messages.VERIFICATION_LEVEL_LOW,
    desc: o.Z.Messages.VERIFICATION_LEVEL_LOW_CRITERIA,
    value: t.sFg.LOW,
    color: s ? void 0 : L("GREEN_360")
  }, {
    name: o.Z.Messages.VERIFICATION_LEVEL_MEDIUM,
    desc: o.Z.Messages.VERIFICATION_LEVEL_MEDIUM_CRITERIA.format({
      min: t.YeM.ACCOUNT_AGE
    }),
    value: t.sFg.MEDIUM,
    color: s ? void 0 : L("YELLOW_360")
  }, {
    name: o.Z.Messages.VERIFICATION_LEVEL_HIGH,
    desc: o.Z.Messages.VERIFICATION_LEVEL_HIGH_CRITERIA.format({
      min: t.YeM.MEMBER_AGE
    }),
    value: t.sFg.HIGH,
    color: s ? void 0 : L("ORANGE_345")
  }, {
    name: o.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH,
    desc: o.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH_CRITERIA,
    value: t.sFg.VERY_HIGH,
    color: s ? void 0 : L("RED_400")
  }]
}

function N() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return [{
    name: o.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_V2,
    desc: o.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_DESCRIPTION_V2,
    value: t.lxg.ALL_MEMBERS,
    color: L("RED_400")
  }, {
    name: o.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_V2,
    desc: o.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_DESCRIPTION_V2,
    value: t.lxg.MEMBERS_WITHOUT_ROLES,
    disabled: e,
    tooltipText: e ? o.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null,
    color: L("YELLOW_360")
  }, {
    name: o.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_V2,
    desc: o.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_DESCRIPTION_V2,
    value: t.lxg.DISABLED,
    disabled: e,
    tooltipText: e ? o.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null,
    color: L("PRIMARY_400")
  }]
}

function R() {
  return [{
    name: o.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS,
    desc: o.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS_HELP,
    value: _.Xr.FRIENDS_AND_NON_FRIENDS,
    color: L("GREEN_360")
  }, {
    name: o.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS,
    desc: o.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS_HELP,
    value: _.Xr.NON_FRIENDS,
    color: L("YELLOW_360")
  }, {
    name: o.Z.Messages.USER_DM_SPAM_FILTER_DISABLED,
    desc: o.Z.Messages.USER_DM_SPAM_FILTER_DISABLED_HELP,
    value: _.Xr.DISABLED,
    color: L("RED_400")
  }]
}

function c() {
  return [{
    name: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_V2,
    desc: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_HELP_V2,
    value: I.TI.FRIENDS_AND_NON_FRIENDS,
    color: L("GREEN_360")
  }, {
    name: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_V2,
    desc: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_HELP_V2,
    value: I.TI.NON_FRIENDS,
    color: L("YELLOW_360")
  }, {
    name: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_V2,
    desc: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_HELP_V2,
    value: I.TI.DISABLED,
    color: L("RED_400")
  }]
}

function L(e) {
  return a.Z.unsafe_rawColors[e].css
}