"use strict";
let n, s, l;
a.r(t), a("653041"), a("47120");
var i, r, o, u, d = a("392711"),
  c = a.n(d),
  f = a("442837"),
  E = a("570140"),
  h = a("308063"),
  _ = a("388610"),
  C = a("430824"),
  m = a("496675"),
  S = a("855674"),
  p = a("981631");
let I = [],
  g = null,
  T = !1,
  A = p.FormStates.CLOSED,
  N = {},
  v = !1,
  L = null;

function R() {
  if (n = null != (s = _.default.getChannel()) ? C.default.getGuild(s.guild_id) : null, I = null != s && null != n && m.default.can(p.Permissions.MANAGE_WEBHOOKS, s) ? S.default.getWebhooksForChannel(n.id, s.id) : [], null != g) {
    let e = M(g.id);
    null != e && (g = e)
  }
  A = p.FormStates.OPEN, N = {}, v = !1
}
let O = c().debounce(() => {
  v && ((null == g || c().isEqual(g, M(g.id))) && (v = !1), !v && x.emitChange())
}, 500);

function M(e) {
  return I.find(t => {
    let {
      id: a
    } = t;
    return a === e
  })
}
class P extends(i = f.default.Store) {
  initialize() {
    this.waitFor(_.default, C.default, S.default, m.default)
  }
  hasChanges() {
    return v
  }
  get webhooks() {
    return I
  }
  get editedWebhook() {
    return g
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
      webhooks: I,
      editedWebhook: g,
      section: l,
      sectionId: L,
      hasChanges: this.hasChanges(),
      isFetching: T,
      errors: N
    }
  }
}
u = "ChannelSettingsIntegrationsStore", (o = "displayName") in(r = P) ? Object.defineProperty(r, o, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[o] = u;
let x = new P(E.default, __OVERLAY__ ? {} : {
  INTEGRATION_SETTINGS_INIT: R,
  INTEGRATION_SETTINGS_SAVE_SUCCESS: R,
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    if (t !== p.ChannelSettingsSections.INTEGRATIONS) return !1;
    if (l = p.IntegrationSettingsSections.OVERVIEW, null == n) {
      let e = _.default.getChannel(),
        t = null == e ? void 0 : e.getGuildId();
      null != e && null != t && (h.default.fetchForChannel(t, e.id), T = !0), R()
    }
  },
  INTEGRATION_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t,
      sectionId: a
    } = e;
    l = t, L = a
  },
  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
    let {
      webhookId: t
    } = e, a = M(t);
    if (null == a) return !1;
    g = a, N = {}, v = !1
  },
  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
    g = null, N = {}, v = !1
  },
  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
    let {
      settings: t
    } = e;
    if (null == g) return !1;
    g = {
      ...g
    }, null != t.name && g.name !== t.name && (g.name = t.name, v = !0), void 0 !== t.avatar && g.avatar !== t.avatar && (g.avatar = t.avatar, v = !0), null != t.channelId && g.channel_id !== t.channelId && (g.channel_id = t.channelId, v = !0), v && O()
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    s = null, n = null, I = [], g = null, A = p.FormStates.CLOSED
  },
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: a,
      webhooks: l
    } = e;
    if (null == n || t !== n.id || null == s || a !== s.id || null == l || A === p.FormStates.SUBMITTING) return !1;
    T = !1;
    for (let e = I.length - 1; e >= 0; e--) {
      let t = I[e];
      if (null != a && (null == t ? void 0 : t.channel_id) !== a) continue;
      let n = l.find(e => {
        let {
          id: a
        } = e;
        if (a === t.id) return !0
      });
      if (null != n) {
        let a = {
          ...t,
          ...n
        };
        I[e] = a, !v && (null == g ? void 0 : g.id) === a.id && (g = a)
      } else(null == g ? void 0 : g.id) === t.id && (g = null), I.splice(e, 1)
    }
    for (let e of l) null == I.find(t => {
      let {
        id: a
      } = t;
      if (a === e.id) return !0
    }) && I.push(e);
    I = [...I], O()
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
t.default = x