"use strict";
let a, s, l;
n.r(t), n("653041"), n("47120");
var i, r, o, u, d = n("392711"),
  c = n.n(d),
  f = n("442837"),
  E = n("570140"),
  h = n("308063"),
  _ = n("388610"),
  C = n("430824"),
  S = n("496675"),
  m = n("855674"),
  p = n("981631");
let I = [],
  T = null,
  g = !1,
  A = p.FormStates.CLOSED,
  N = {},
  v = !1,
  R = null;

function L() {
  if (a = null != (s = _.default.getChannel()) ? C.default.getGuild(s.guild_id) : null, I = null != s && null != a && S.default.can(p.Permissions.MANAGE_WEBHOOKS, s) ? m.default.getWebhooksForChannel(a.id, s.id) : [], null != T) {
    let e = M(T.id);
    null != e && (T = e)
  }
  A = p.FormStates.OPEN, N = {}, v = !1
}
let O = c().debounce(() => {
  v && ((null == T || c().isEqual(T, M(T.id))) && (v = !1), !v && y.emitChange())
}, 500);

function M(e) {
  return I.find(t => {
    let {
      id: n
    } = t;
    return n === e
  })
}
class P extends(i = f.default.Store) {
  initialize() {
    this.waitFor(_.default, C.default, m.default, S.default)
  }
  hasChanges() {
    return v
  }
  get webhooks() {
    return I
  }
  get editedWebhook() {
    return T
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
      editedWebhook: T,
      section: l,
      sectionId: R,
      hasChanges: this.hasChanges(),
      isFetching: g,
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
let y = new P(E.default, __OVERLAY__ ? {} : {
  INTEGRATION_SETTINGS_INIT: L,
  INTEGRATION_SETTINGS_SAVE_SUCCESS: L,
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    if (t !== p.ChannelSettingsSections.INTEGRATIONS) return !1;
    if (l = p.IntegrationSettingsSections.OVERVIEW, null == a) {
      let e = _.default.getChannel(),
        t = null == e ? void 0 : e.getGuildId();
      null != e && null != t && (h.default.fetchForChannel(t, e.id), g = !0), L()
    }
  },
  INTEGRATION_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t,
      sectionId: n
    } = e;
    l = t, R = n
  },
  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
    let {
      webhookId: t
    } = e, n = M(t);
    if (null == n) return !1;
    T = n, N = {}, v = !1
  },
  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
    T = null, N = {}, v = !1
  },
  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
    let {
      settings: t
    } = e;
    if (null == T) return !1;
    T = {
      ...T
    }, null != t.name && T.name !== t.name && (T.name = t.name, v = !0), void 0 !== t.avatar && T.avatar !== t.avatar && (T.avatar = t.avatar, v = !0), null != t.channelId && T.channel_id !== t.channelId && (T.channel_id = t.channelId, v = !0), v && O()
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    s = null, a = null, I = [], T = null, A = p.FormStates.CLOSED
  },
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      webhooks: l
    } = e;
    if (null == a || t !== a.id || null == s || n !== s.id || null == l || A === p.FormStates.SUBMITTING) return !1;
    g = !1;
    for (let e = I.length - 1; e >= 0; e--) {
      let t = I[e];
      if (null != n && (null == t ? void 0 : t.channel_id) !== n) continue;
      let a = l.find(e => {
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
        I[e] = n, !v && (null == T ? void 0 : T.id) === n.id && (T = n)
      } else(null == T ? void 0 : T.id) === t.id && (T = null), I.splice(e, 1)
    }
    for (let e of l) null == I.find(t => {
      let {
        id: n
      } = t;
      if (n === e.id) return !0
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
t.default = y