t.d(n, {
  IF: function() {
    return u
  },
  LJ: function() {
    return c
  },
  MF: function() {
    return d
  },
  X7: function() {
    return _
  },
  c7: function() {
    return E
  }
});
var s = t(524437);
t(376345);
var o = t(692547),
  r = t(2150),
  a = t(981631),
  l = t(973005),
  i = t(689938);

function c(e) {
  return e.map(e => ({
    title: e.name,
    description: e.desc,
    highlightColor: function(e) {
      switch (e) {
        case I("PRIMARY_400"):
          return r.q.ACCENT;
        case I("GREEN_360"):
          return r.q.GREEN;
        case I("YELLOW_360"):
          return r.q.YELLOW;
        case I("ORANGE_345"):
          return r.q.ORANGE;
        case I("RED_400"):
          return r.q.RED;
        default:
          return r.q.NONE
      }
    }(e.color),
    value: e.value,
    disabled: e.disabled
  }))
}

function u() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return [{
    name: i.Z.Messages.VERIFICATION_LEVEL_NONE,
    desc: i.Z.Messages.VERIFICATION_LEVEL_NONE_CRITERIA,
    value: a.sFg.NONE,
    disabled: e,
    tooltipText: e ? i.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null
  }, {
    name: i.Z.Messages.VERIFICATION_LEVEL_LOW,
    desc: i.Z.Messages.VERIFICATION_LEVEL_LOW_CRITERIA,
    value: a.sFg.LOW,
    color: n ? void 0 : I("GREEN_360")
  }, {
    name: i.Z.Messages.VERIFICATION_LEVEL_MEDIUM,
    desc: i.Z.Messages.VERIFICATION_LEVEL_MEDIUM_CRITERIA.format({
      min: a.YeM.ACCOUNT_AGE
    }),
    value: a.sFg.MEDIUM,
    color: n ? void 0 : I("YELLOW_360")
  }, {
    name: i.Z.Messages.VERIFICATION_LEVEL_HIGH,
    desc: i.Z.Messages.VERIFICATION_LEVEL_HIGH_CRITERIA.format({
      min: a.YeM.MEMBER_AGE
    }),
    value: a.sFg.HIGH,
    color: n ? void 0 : I("ORANGE_345")
  }, {
    name: i.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH,
    desc: i.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH_CRITERIA,
    value: a.sFg.VERY_HIGH,
    color: n ? void 0 : I("RED_400")
  }]
}

function d() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return [{
    name: i.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_V2,
    desc: i.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_DESCRIPTION_V2,
    value: a.lxg.ALL_MEMBERS,
    color: I("RED_400")
  }, {
    name: i.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_V2,
    desc: i.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_DESCRIPTION_V2,
    value: a.lxg.MEMBERS_WITHOUT_ROLES,
    disabled: e,
    tooltipText: e ? i.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null,
    color: I("YELLOW_360")
  }, {
    name: i.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_V2,
    desc: i.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_DESCRIPTION_V2,
    value: a.lxg.DISABLED,
    disabled: e,
    tooltipText: e ? i.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null,
    color: I("PRIMARY_400")
  }]
}

function E() {
  return [{
    name: i.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS,
    desc: i.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS_HELP,
    value: s.Xr.FRIENDS_AND_NON_FRIENDS,
    color: I("GREEN_360")
  }, {
    name: i.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS,
    desc: i.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS_HELP,
    value: s.Xr.NON_FRIENDS,
    color: I("YELLOW_360")
  }, {
    name: i.Z.Messages.USER_DM_SPAM_FILTER_DISABLED,
    desc: i.Z.Messages.USER_DM_SPAM_FILTER_DISABLED_HELP,
    value: s.Xr.DISABLED,
    color: I("RED_400")
  }]
}

function _() {
  return [{
    name: i.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_V2,
    desc: i.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_HELP_V2,
    value: l.TI.FRIENDS_AND_NON_FRIENDS,
    color: I("GREEN_360")
  }, {
    name: i.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_V2,
    desc: i.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_HELP_V2,
    value: l.TI.NON_FRIENDS,
    color: I("YELLOW_360")
  }, {
    name: i.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_V2,
    desc: i.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_HELP_V2,
    value: l.TI.DISABLED,
    color: I("RED_400")
  }]
}

function I(e) {
  return o.Z.unsafe_rawColors[e].css
}