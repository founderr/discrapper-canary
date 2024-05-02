"use strict";
let a;
n.r(t), n("47120"), n("653041");
var r, i = n("442837"),
  s = n("570140");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let o = {
    guildNoticeDismissed: []
  },
  c = new Map,
  d = new Set;
class u extends(r = i.default.PersistedStore) {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
    a = e
  }
  getState() {
    return a
  }
  shouldShowChannelNotice(e) {
    var t, n;
    return !a.guildNoticeDismissed.includes(e) && (null !== (n = null === (t = c.get(e)) || void 0 === t ? void 0 : t.size) && void 0 !== n ? n : 0) > 0
  }
  canShowOverviewTooltip(e, t) {
    var n;
    return (null === (n = c.get(e)) || void 0 === n ? void 0 : n.has(t)) === !0
  }
  canShowToggleTooltip(e) {
    return d.has(e)
  }
}
l(u, "displayName", "CommandsMigrationStore"), l(u, "persistKey", "CommandsMigrationStore"), t.default = new u(s.default, {
  COMMANDS_MIGRATION_UPDATE_SUCCESS: function(e) {
    let {
      guildId: t,
      integrationIdsWithAppCommands: n
    } = e;
    return c.set(t, new Set(n)), !0
  },
  COMMANDS_MIGRATION_NOTICE_DISMISSED: function(e) {
    let {
      guildId: t
    } = e;
    a.guildNoticeDismissed.push(t)
  },
  COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED: function(e) {
    var t;
    let {
      guildId: n,
      integrationId: a
    } = e;
    null === (t = c.get(n)) || void 0 === t || t.clear(), d.add(a)
  },
  COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED: function(e) {
    let {
      integrationId: t
    } = e;
    d.delete(t)
  }
})