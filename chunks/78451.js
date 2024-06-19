n.d(s, {
  IF: function() {
    return u
  },
  LJ: function() {
    return c
  },
  MF: function() {
    return E
  },
  X7: function() {
    return _
  },
  c7: function() {
    return d
  }
});
var t = n(524437);
n(376345);
var a = n(692547),
  l = n(2150),
  o = n(981631),
  i = n(973005),
  r = n(689938);

function c(e) {
  return e.map(e => ({
    title: e.name,
    description: e.desc,
    highlightColor: function(e) {
      switch (e) {
        case I("PRIMARY_400"):
          return l.q.ACCENT;
        case I("GREEN_360"):
          return l.q.GREEN;
        case I("YELLOW_360"):
          return l.q.YELLOW;
        case I("ORANGE_345"):
          return l.q.ORANGE;
        case I("RED_400"):
          return l.q.RED;
        default:
          return l.q.NONE
      }
    }(e.color),
    value: e.value,
    disabled: e.disabled
  }))
}

function u() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return [{
    name: r.Z.Messages.VERIFICATION_LEVEL_NONE,
    desc: r.Z.Messages.VERIFICATION_LEVEL_NONE_CRITERIA,
    value: o.sFg.NONE,
    disabled: e,
    tooltipText: e ? r.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null
  }, {
    name: r.Z.Messages.VERIFICATION_LEVEL_LOW,
    desc: r.Z.Messages.VERIFICATION_LEVEL_LOW_CRITERIA,
    value: o.sFg.LOW,
    color: s ? void 0 : I("GREEN_360")
  }, {
    name: r.Z.Messages.VERIFICATION_LEVEL_MEDIUM,
    desc: r.Z.Messages.VERIFICATION_LEVEL_MEDIUM_CRITERIA.format({
      min: o.YeM.ACCOUNT_AGE
    }),
    value: o.sFg.MEDIUM,
    color: s ? void 0 : I("YELLOW_360")
  }, {
    name: r.Z.Messages.VERIFICATION_LEVEL_HIGH,
    desc: r.Z.Messages.VERIFICATION_LEVEL_HIGH_CRITERIA.format({
      min: o.YeM.MEMBER_AGE
    }),
    value: o.sFg.HIGH,
    color: s ? void 0 : I("ORANGE_345")
  }, {
    name: r.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH,
    desc: r.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH_CRITERIA,
    value: o.sFg.VERY_HIGH,
    color: s ? void 0 : I("RED_400")
  }]
}

function E() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return [{
    name: r.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_V2,
    desc: r.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_DESCRIPTION_V2,
    value: o.lxg.ALL_MEMBERS,
    color: I("RED_400")
  }, {
    name: r.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_V2,
    desc: r.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_DESCRIPTION_V2,
    value: o.lxg.MEMBERS_WITHOUT_ROLES,
    disabled: e,
    tooltipText: e ? r.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null,
    color: I("YELLOW_360")
  }, {
    name: r.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_V2,
    desc: r.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_DESCRIPTION_V2,
    value: o.lxg.DISABLED,
    disabled: e,
    tooltipText: e ? r.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null,
    color: I("PRIMARY_400")
  }]
}

function d() {
  return [{
    name: r.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS,
    desc: r.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS_HELP,
    value: t.Xr.FRIENDS_AND_NON_FRIENDS,
    color: I("GREEN_360")
  }, {
    name: r.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS,
    desc: r.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS_HELP,
    value: t.Xr.NON_FRIENDS,
    color: I("YELLOW_360")
  }, {
    name: r.Z.Messages.USER_DM_SPAM_FILTER_DISABLED,
    desc: r.Z.Messages.USER_DM_SPAM_FILTER_DISABLED_HELP,
    value: t.Xr.DISABLED,
    color: I("RED_400")
  }]
}

function _() {
  return [{
    name: r.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_V2,
    desc: r.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_HELP_V2,
    value: i.TI.FRIENDS_AND_NON_FRIENDS,
    color: I("GREEN_360")
  }, {
    name: r.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_V2,
    desc: r.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_HELP_V2,
    value: i.TI.NON_FRIENDS,
    color: I("YELLOW_360")
  }, {
    name: r.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_V2,
    desc: r.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_HELP_V2,
    value: i.TI.DISABLED,
    color: I("RED_400")
  }]
}

function I(e) {
  return a.Z.unsafe_rawColors[e].css
}