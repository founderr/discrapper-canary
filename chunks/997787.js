let a;
t(47120), t(653041);
var r, s = t(442837),
  i = t(570140);

function l(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e
}
let o = {
    guildNoticeDismissed: []
  },
  c = new Map,
  d = new Set;
class u extends(r = s.ZP.PersistedStore) {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
    a = e
  }
  getState() {
    return a
  }
  shouldShowChannelNotice(e) {
    var n, t;
    return !a.guildNoticeDismissed.includes(e) && (null !== (t = null === (n = c.get(e)) || void 0 === n ? void 0 : n.size) && void 0 !== t ? t : 0) > 0
  }
  canShowOverviewTooltip(e, n) {
    var t;
    return (null === (t = c.get(e)) || void 0 === t ? void 0 : t.has(n)) === !0
  }
  canShowToggleTooltip(e) {
    return d.has(e)
  }
}
l(u, "displayName", "CommandsMigrationStore"), l(u, "persistKey", "CommandsMigrationStore"), n.Z = new u(i.Z, {
  COMMANDS_MIGRATION_UPDATE_SUCCESS: function(e) {
    let {
      guildId: n,
      integrationIdsWithAppCommands: t
    } = e;
    return c.set(n, new Set(t)), !0
  },
  COMMANDS_MIGRATION_NOTICE_DISMISSED: function(e) {
    let {
      guildId: n
    } = e;
    a.guildNoticeDismissed.push(n)
  },
  COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED: function(e) {
    var n;
    let {
      guildId: t,
      integrationId: a
    } = e;
    null === (n = c.get(t)) || void 0 === n || n.clear(), d.add(a)
  },
  COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED: function(e) {
    let {
      integrationId: n
    } = e;
    d.delete(n)
  }
})