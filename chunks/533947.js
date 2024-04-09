"use strict";
let a, s, l;
n.r(t), n("653041"), n("47120");
var i, r, o, u, d = n("392711"),
  c = n.n(d),
  f = n("442837"),
  E = n("570140"),
  _ = n("308063"),
  h = n("388610"),
  C = n("430824"),
  m = n("496675"),
  S = n("855674"),
  I = n("981631");
let T = [],
  p = null,
  g = !1,
  N = I.FormStates.CLOSED,
  A = {},
  R = !1,
  O = null;

function v() {
  if (a = null != (s = h.default.getChannel()) ? C.default.getGuild(s.guild_id) : null, T = null != s && null != a && m.default.can(I.Permissions.MANAGE_WEBHOOKS, s) ? S.default.getWebhooksForChannel(a.id, s.id) : [], null != p) {
    let e = P(p.id);
    null != e && (p = e)
  }
  N = I.FormStates.OPEN, A = {}, R = !1
}
let L = c().debounce(() => {
  R && ((null == p || c().isEqual(p, P(p.id))) && (R = !1), !R && y.emitChange())
}, 500);

function P(e) {
  return T.find(t => {
    let {
      id: n
    } = t;
    return n === e
  })
}
class M extends(i = f.default.Store) {
  initialize() {
    this.waitFor(h.default, C.default, S.default, m.default)
  }
  hasChanges() {
    return R
  }
  get webhooks() {
    return T
  }
  get editedWebhook() {
    return p
  }
  get formState() {
    return N
  }
  getWebhook(e) {
    return P(e)
  }
  showNotice() {
    return this.hasChanges()
  }
  getProps() {
    return {
      submitting: N === I.FormStates.SUBMITTING,
      webhooks: T,
      editedWebhook: p,
      section: l,
      sectionId: O,
      hasChanges: this.hasChanges(),
      isFetching: g,
      errors: A
    }
  }
}
u = "ChannelSettingsIntegrationsStore", (o = "displayName") in(r = M) ? Object.defineProperty(r, o, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[o] = u;
let y = new M(E.default, __OVERLAY__ ? {} : {
  INTEGRATION_SETTINGS_INIT: v,
  INTEGRATION_SETTINGS_SAVE_SUCCESS: v,
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    if (t !== I.ChannelSettingsSections.INTEGRATIONS) return !1;
    if (l = I.IntegrationSettingsSections.OVERVIEW, null == a) {
      let e = h.default.getChannel(),
        t = null == e ? void 0 : e.getGuildId();
      null != e && null != t && (_.default.fetchForChannel(t, e.id), g = !0), v()
    }
  },
  INTEGRATION_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t,
      sectionId: n
    } = e;
    l = t, O = n
  },
  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
    let {
      webhookId: t
    } = e, n = P(t);
    if (null == n) return !1;
    p = n, A = {}, R = !1
  },
  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
    p = null, A = {}, R = !1
  },
  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
    let {
      settings: t
    } = e;
    if (null == p) return !1;
    p = {
      ...p
    }, null != t.name && p.name !== t.name && (p.name = t.name, R = !0), void 0 !== t.avatar && p.avatar !== t.avatar && (p.avatar = t.avatar, R = !0), null != t.channelId && p.channel_id !== t.channelId && (p.channel_id = t.channelId, R = !0), R && L()
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    s = null, a = null, T = [], p = null, N = I.FormStates.CLOSED
  },
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      webhooks: l
    } = e;
    if (null == a || t !== a.id || null == s || n !== s.id || null == l || N === I.FormStates.SUBMITTING) return !1;
    g = !1;
    for (let e = T.length - 1; e >= 0; e--) {
      let t = T[e];
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
        T[e] = n, !R && (null == p ? void 0 : p.id) === n.id && (p = n)
      } else(null == p ? void 0 : p.id) === t.id && (p = null), T.splice(e, 1)
    }
    for (let e of l) null == T.find(t => {
      let {
        id: n
      } = t;
      if (n === e.id) return !0
    }) && T.push(e);
    T = [...T], L()
  },
  INTEGRATION_SETTINGS_SUBMITTING: function() {
    N = I.FormStates.SUBMITTING, A = {}
  },
  INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
    var t;
    if (N !== I.FormStates.SUBMITTING) return !1;
    N = I.FormStates.OPEN, A = null !== (t = e.errors) && void 0 !== t ? t : {}
  }
});
t.default = y