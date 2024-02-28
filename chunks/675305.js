"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var i = n("446674"),
  l = n("913144");
let u = {},
  a = {},
  r = new Set;
class d extends i.default.Store {
  getCompletedActions(e) {
    return null == e ? null : a[e]
  }
  hasCompletedActionForChannel(e, t) {
    let n = this.getCompletedActions(e);
    return null != n && null != n[t]
  }
  getState(e) {
    return null == e ? {} : {
      completedActions: a[e],
      loading: r.has(e)
    }
  }
}
d.displayName = "GuildOnboardingMemberActionStore";
var o = new d(l.default, {
  GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function(e) {
    let {
      guildId: t
    } = e;
    r.add(t)
  },
  GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function(e) {
    let {
      memberActions: t,
      guildId: n
    } = e;
    if (null == t) {
      a[n] = u;
      return
    }
    a[n] = t, r.delete(n)
  },
  GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function(e) {
    let {
      guildId: t
    } = e;
    r.delete(t)
  },
  GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function(e) {
    let {
      guildId: t
    } = e;
    if (null == a[t]) return !1;
    delete a[t]
  },
  COMPLETE_NEW_MEMBER_ACTION: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    a = {
      ...a,
      [t]: {
        ...a[t],
        [n]: !0
      }
    }
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    if (null == a[t.id]) return !1;
    delete a[t.id]
  }
})