"use strict";
s.r(t), s("47120");
var a, l = s("392711"),
  n = s.n(l),
  i = s("442837"),
  r = s("570140"),
  o = s("563534"),
  d = s("999382");

function u(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let c = {
    enabled: !1
  },
  E = null,
  _ = Object.assign({}, c),
  I = !1,
  T = {};

function S() {
  (function() {
    E = null, _ = Object.assign({}, c), I = !1
  })(), E = d.default.getGuildId(), _ = n().cloneDeep(Object.assign({}, o.default.getSettings(E)))
}

function f(e, t) {
  if (null == _.newMemberActions) return !1;
  let s = _.newMemberActions.findIndex(t => t.channelId === e);
  if (s < 0) return !1;
  _.newMemberActions[s] = {
    ...t
  }, _.newMemberActions = [..._.newMemberActions]
}

function m(e, t) {
  if (null == _.resourceChannels) return !1;
  let s = _.resourceChannels.findIndex(t => t.channelId === e);
  if (s < 0) return !1;
  _.resourceChannels[s] = {
    ...t
  }, _.resourceChannels = [..._.resourceChannels]
}

function N() {
  I = !1, _ = n().cloneDeep(Object.assign({}, o.default.getSettings(E)))
}
class g extends(a = i.default.PersistedStore) {
  initialize(e) {
    null != e && (T = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(d.default, o.default)
  }
  getState() {
    return {
      dismissedSuggestedChannelIdsByGuildId: T
    }
  }
  getSettings() {
    return null != _ ? _ : c
  }
  hasChanges() {
    return null != E && !n().isEqual(n().omit(_, "newMemberActions"), n().omit(o.default.getSettings(E), "newMemberActions"))
  }
  getSubmitting() {
    return I
  }
  getDismissedSuggestedChannelIds(e) {
    var t;
    return null == e ? [] : null !== (t = T[e]) && void 0 !== t ? t : []
  }
  getResourceChannel(e) {
    var t;
    if (null == e) return null;
    let s = null === (t = _.resourceChannels) || void 0 === t ? void 0 : t.find(t => t.channelId === e);
    return null == s ? null : s
  }
  getNewMemberAction(e) {
    var t;
    if (null == e) return null;
    let s = null === (t = _.newMemberActions) || void 0 === t ? void 0 : t.find(t => t.channelId === e);
    return null == s ? null : s
  }
}
u(g, "displayName", "GuildSettingsOnboardingHomeSettingsStore"), u(g, "persistKey", "GuildSettingsOnboardingHomeSettingsStore"), t.default = new g(r.default, {
  GUILD_SETTINGS_INIT: S,
  GUILD_SETTINGS_SET_SECTION: S,
  GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: S,
  GUILD_HOME_SETTINGS_FETCH_SUCCESS: function() {
    _ = n().cloneDeep(Object.assign({}, o.default.getSettings(E)))
  },
  GUILD_HOME_SETTINGS_UPDATE_START: function() {
    I = !0
  },
  GUILD_HOME_SETTINGS_UPDATE_SUCCESS: N,
  GUILD_HOME_SETTINGS_UPDATE_FAIL: N,
  GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function(e) {
    let {
      action: t
    } = e;
    return f(t.channelId, t)
  },
  GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function(e) {
    let {
      resourceChannel: t
    } = e;
    m(t.channelId, t)
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function(e) {
    let {
      welcomeMessage: t
    } = e;
    if (null == t) _.welcomeMessage = void 0;
    else {
      var s, a, l, n, i, r;
      _.welcomeMessage = {
        authorIds: null !== (n = null !== (l = t.authorIds) && void 0 !== l ? l : null === (s = _.welcomeMessage) || void 0 === s ? void 0 : s.authorIds) && void 0 !== n ? n : [],
        message: null !== (r = null !== (i = t.message) && void 0 !== i ? i : null === (a = _.welcomeMessage) || void 0 === a ? void 0 : a.message) && void 0 !== r ? r : ""
      }
    }
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function(e) {
    let {
      channelId: t,
      action: s
    } = e;
    return f(t, s)
  },
  GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function(e) {
    var t;
    let {
      action: s
    } = e;
    _.newMemberActions = null !== (t = _.newMemberActions) && void 0 !== t ? t : [], _.newMemberActions = [..._.newMemberActions, s]
  },
  GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function(e) {
    let {
      channelId: t
    } = e;
    if (null == _.newMemberActions) return !1;
    _.newMemberActions = [..._.newMemberActions.filter(e => e.channelId !== t)]
  },
  GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function(e) {
    let {
      actions: t
    } = e;
    _.newMemberActions = t
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function(e) {
    let {
      channelId: t,
      resourceChannel: s
    } = e;
    m(t, s)
  },
  GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function(e) {
    var t;
    let {
      resourceChannel: s
    } = e;
    _.resourceChannels = (null !== (t = _.resourceChannels) && void 0 !== t ? t : []).filter(e => e.channelId !== s.channelId), _.resourceChannels = [..._.resourceChannels, s]
  },
  GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function(e) {
    let {
      resourceChannelId: t
    } = e;
    if (null == _.resourceChannels) return !1;
    _.resourceChannels = [..._.resourceChannels.filter(e => e.channelId !== t)]
  },
  GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function(e) {
    let {
      resourceChannels: t
    } = e;
    _.resourceChannels = t
  },
  GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function(e) {
    var t;
    let {
      guildId: s,
      channelIds: a
    } = e;
    T[s] = [...null !== (t = T[s]) && void 0 !== t ? t : [], ...a]
  }
})