"use strict";
let n;
a.r(t), a("47120"), a("653041");
var r, s = a("442837"),
  i = a("570140");

function l(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let o = {
    guildNoticeDismissed: []
  },
  c = new Map,
  d = new Set;
class u extends(r = s.default.PersistedStore) {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
    n = e
  }
  getState() {
    return n
  }
  shouldShowChannelNotice(e) {
    var t, a;
    return !n.guildNoticeDismissed.includes(e) && (null !== (a = null === (t = c.get(e)) || void 0 === t ? void 0 : t.size) && void 0 !== a ? a : 0) > 0
  }
  canShowOverviewTooltip(e, t) {
    var a;
    return (null === (a = c.get(e)) || void 0 === a ? void 0 : a.has(t)) === !0
  }
  canShowToggleTooltip(e) {
    return d.has(e)
  }
}
l(u, "displayName", "CommandsMigrationStore"), l(u, "persistKey", "CommandsMigrationStore"), t.default = new u(i.default, {
  COMMANDS_MIGRATION_UPDATE_SUCCESS: function(e) {
    let {
      guildId: t,
      integrationIdsWithAppCommands: a
    } = e;
    return c.set(t, new Set(a)), !0
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
      guildId: a,
      integrationId: n
    } = e;
    null === (t = c.get(a)) || void 0 === t || t.clear(), d.add(n)
  },
  COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED: function(e) {
    let {
      integrationId: t
    } = e;
    d.delete(t)
  }
})