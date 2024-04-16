"use strict";
let n;
i.r(t), i("47120"), i("653041");
var r, s = i("442837"),
  a = i("570140");

function l(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}
let o = {
    guildNoticeDismissed: []
  },
  c = new Map,
  u = new Set;
class d extends(r = s.default.PersistedStore) {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
    n = e
  }
  getState() {
    return n
  }
  shouldShowChannelNotice(e) {
    var t, i;
    return !n.guildNoticeDismissed.includes(e) && (null !== (i = null === (t = c.get(e)) || void 0 === t ? void 0 : t.size) && void 0 !== i ? i : 0) > 0
  }
  canShowOverviewTooltip(e, t) {
    var i;
    return (null === (i = c.get(e)) || void 0 === i ? void 0 : i.has(t)) === !0
  }
  canShowToggleTooltip(e) {
    return u.has(e)
  }
}
l(d, "displayName", "CommandsMigrationStore"), l(d, "persistKey", "CommandsMigrationStore"), t.default = new d(a.default, {
  COMMANDS_MIGRATION_UPDATE_SUCCESS: function(e) {
    let {
      guildId: t,
      integrationIdsWithAppCommands: i
    } = e;
    return c.set(t, new Set(i)), !0
  },
  COMMANDS_MIGRATION_NOTICE_DISMISSED: function(e) {
    let {
      guildId: t
    } = e;
    n.guildNoticeDismissed.push(t)
  },
  COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED: function(e) {
    var t;
    let {
      guildId: i,
      integrationId: n
    } = e;
    null === (t = c.get(i)) || void 0 === t || t.clear(), u.add(n)
  },
  COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED: function(e) {
    let {
      integrationId: t
    } = e;
    u.delete(t)
  }
})