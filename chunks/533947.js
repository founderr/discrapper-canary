"use strict";
let a, s, i;
n.r(t), n("653041"), n("47120");
var l, r, o, u, d = n("392711"),
  c = n.n(d),
  f = n("442837"),
  E = n("570140"),
  h = n("308063"),
  _ = n("388610"),
  C = n("430824"),
  m = n("496675"),
  S = n("855674"),
  p = n("981631");
let g = [],
  I = null,
  T = !1,
  A = p.FormStates.CLOSED,
  N = {},
  v = !1,
  R = null;

function O() {
  if (a = null != (s = _.default.getChannel()) ? C.default.getGuild(s.guild_id) : null, g = null != s && null != a && m.default.can(p.Permissions.MANAGE_WEBHOOKS, s) ? S.default.getWebhooksForChannel(a.id, s.id) : [], null != I) {
    let e = M(I.id);
    null != e && (I = e)
  }
  A = p.FormStates.OPEN, N = {}, v = !1
}
let L = c().debounce(() => {
  v && ((null == I || c().isEqual(I, M(I.id))) && (v = !1), !v && P.emitChange())
}, 500);

function M(e) {
  return g.find(t => {
    let {
      id: n
    } = t;
    return n === e
  })
}
class y extends(l = f.default.Store) {
  initialize() {
    this.waitFor(_.default, C.default, S.default, m.default)
  }
  hasChanges() {
    return v
  }
  get webhooks() {
    return g
  }
  get editedWebhook() {
    return I
  }
  get formState() {
    return A
  }
  getWebhook(e) {
    return M(e)
  }
  showNotice() {
    return this.hasChanges()
  }
  getProps() {
    return {
      submitting: A === p.FormStates.SUBMITTING,
      webhooks: g,
      editedWebhook: I,
      section: i,
      sectionId: R,
      hasChanges: this.hasChanges(),
      isFetching: T,
      errors: N
    }
  }
}
u = "ChannelSettingsIntegrationsStore", (o = "displayName") in(r = y) ? Object.defineProperty(r, o, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[o] = u;
let P = new y(E.default, __OVERLAY__ ? {} : {
  INTEGRATION_SETTINGS_INIT: O,
  INTEGRATION_SETTINGS_SAVE_SUCCESS: O,
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    if (t !== p.ChannelSettingsSections.INTEGRATIONS) return !1;
    if (i = p.IntegrationSettingsSections.OVERVIEW, null == a) {
      let e = _.default.getChannel(),
        t = null == e ? void 0 : e.getGuildId();
      null != e && null != t && (h.default.fetchForChannel(t, e.id), T = !0), O()
    }
  },
  INTEGRATION_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t,
      sectionId: n
    } = e;
    i = t, R = n
  },
  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
    let {
      webhookId: t
    } = e, n = M(t);
    if (null == n) return !1;
    I = n, N = {}, v = !1
  },
  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
    I = null, N = {}, v = !1
  },
  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
    let {
      settings: t
    } = e;
    if (null == I) return !1;
    I = {
      ...I
    }, null != t.name && I.name !== t.name && (I.name = t.name, v = !0), void 0 !== t.avatar && I.avatar !== t.avatar && (I.avatar = t.avatar, v = !0), null != t.channelId && I.channel_id !== t.channelId && (I.channel_id = t.channelId, v = !0), v && L()
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    s = null, a = null, g = [], I = null, A = p.FormStates.CLOSED
  },
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      webhooks: i
    } = e;
    if (null == a || t !== a.id || null == s || n !== s.id || null == i || A === p.FormStates.SUBMITTING) return !1;
    T = !1;
    for (let e = g.length - 1; e >= 0; e--) {
      let t = g[e];
      if (null != n && (null == t ? void 0 : t.channel_id) !== n) continue;
      let a = i.find(e => {
        let {
          id: n
        } = e;
        if (n === t.id) return !0
      });
      if (null != a) {
        let n = {
          ...t,
          ...a
        };
        g[e] = n, !v && (null == I ? void 0 : I.id) === n.id && (I = n)
      } else(null == I ? void 0 : I.id) === t.id && (I = null), g.splice(e, 1)
    }
    for (let e of i) null == g.find(t => {
      let {
        id: n
      } = t;
      if (n === e.id) return !0
    }) && g.push(e);
    g = [...g], L()
  },
  INTEGRATION_SETTINGS_SUBMITTING: function() {
    A = p.FormStates.SUBMITTING, N = {}
  },
  INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
    var t;
    if (A !== p.FormStates.SUBMITTING) return !1;
    A = p.FormStates.OPEN, N = null !== (t = e.errors) && void 0 !== t ? t : {}
  }
});
t.default = P