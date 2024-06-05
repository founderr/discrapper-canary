"use strict";
let n, a;
l.r(t), l("653041"), l("47120");
var s, i, r, o, d = l("392711"),
  u = l.n(d),
  c = l("442837"),
  f = l("570140"),
  I = l("308063"),
  m = l("496675"),
  T = l("855674"),
  E = l("999382"),
  N = l("981631");
let _ = [],
  S = [],
  h = null,
  g = null,
  p = null,
  O = !1,
  A = !1,
  C = N.FormStates.CLOSED,
  x = {},
  R = !1,
  M = null;

function L(e) {
  let {
    section: t
  } = e;
  if (t !== N.GuildSettingsSections.INTEGRATIONS) return !1;
  if (a = N.IntegrationSettingsSections.OVERVIEW, null == n) {
    let e = E.default.getGuildId();
    null != e && I.default.fetchForGuild(e), v(!1)
  }
}

function v(e) {
  if (null != (n = E.default.getProps().guild) && m.default.can(N.Permissions.MANAGE_GUILD, n)) {
    let e = E.default.getProps().integrations;
    null == e && (A = !0), _ = null != e ? e : []
  } else _ = [];
  if (S = null != n && m.default.can(N.Permissions.MANAGE_WEBHOOKS, n) ? T.default.getWebhooksForGuild(n.id) : [], !e && null != g) {
    let e = P(g.id);
    null != e && (g = e)
  }
  if (null != p) {
    let e = b(p.id);
    null != e && (p = e)
  }
  h = null, C = N.FormStates.OPEN, x = {}, R = !1
}
let j = u().debounce(() => {
  R && (null != g ? u().isEqual(g, P(g.id)) && (R = !1) : null != p && u().isEqual(p, b(p.id)) && (R = !1), !R && y.emitChange())
}, 500);

function P(e) {
  return _.find(t => {
    let {
      id: l
    } = t;
    return l === e
  })
}

function b(e) {
  return S.find(t => {
    let {
      id: l
    } = t;
    return l === e
  })
}
class D extends(s = c.default.Store) {
  initialize() {
    this.waitFor(E.default, T.default, m.default)
  }
  hasChanges() {
    return R
  }
  get guild() {
    return n
  }
  get integrations() {
    return _
  }
  get webhooks() {
    return S
  }
  get editedCommandId() {
    return h
  }
  get editedIntegration() {
    return g
  }
  get editedWebhook() {
    return p
  }
  get formState() {
    return C
  }
  getErrors() {
    return x
  }
  getSection() {
    return a
  }
  getSectionId() {
    return M
  }
  getIntegration(e) {
    return P(e)
  }
  getWebhook(e) {
    return b(e)
  }
  isFetching() {
    return A || O
  }
  showNotice() {
    return this.hasChanges()
  }
  getApplication(e) {
    var t;
    return null === (t = _.find(t => {
      var l;
      return (null === (l = t.application) || void 0 === l ? void 0 : l.id) === e
    })) || void 0 === t ? void 0 : t.application
  }
}
o = "GuildSettingsIntegrationsStore", (r = "displayName") in(i = D) ? Object.defineProperty(i, r, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = o;
let y = new D(f.default, __OVERLAY__ ? {} : {
  INTEGRATION_SETTINGS_INIT: function() {
    return v(!1)
  },
  INTEGRATION_SETTINGS_SAVE_SUCCESS: function() {
    return v(!0)
  },
  GUILD_SETTINGS_INIT: L,
  GUILD_SETTINGS_SET_SECTION: L,
  INTEGRATION_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t,
      sectionId: l
    } = e;
    a = t, M = l
  },
  INTEGRATION_SETTINGS_START_EDITING_COMMAND: function(e) {
    let {
      commandId: t
    } = e;
    h = t, g = null, p = null, x = {}, R = !0
  },
  INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: function(e) {
    let {
      commandId: t
    } = e;
    if (null == h || h !== t) return !1;
    h = null, x = {}, R = !1
  },
  INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: function(e) {
    let {
      integrationId: t
    } = e, l = P(t);
    if (null == l) return !1;
    g = l, h = null, p = null, x = {}, R = !1
  },
  INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: function() {
    g = null, x = {}, R = !1
  },
  INTEGRATION_SETTINGS_UPDATE_INTEGRATION: function(e) {
    let {
      settings: t
    } = e;
    if (null == g) return !1;
    g = {
      ...g
    }, null != t.enableEmoticons && g.enable_emoticons !== t.enableEmoticons && (g.enable_emoticons = t.enableEmoticons, R = !0), null != t.expireBehavior && g.expire_behavior !== t.expireBehavior && (g.expire_behavior = t.expireBehavior, R = !0), null != t.expireGracePeriod && g.expire_grace_period !== t.expireGracePeriod && (g.expire_grace_period = t.expireGracePeriod, R = !0), R && j()
  },
  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
    let {
      settings: t
    } = e;
    if (null == p) return !1;
    p = {
      ...p
    }, null != t.name && p.name !== t.name && (p.name = t.name, R = !0), void 0 !== t.avatar && p.avatar !== t.avatar && (p.avatar = t.avatar, R = !0), null != t.channelId && p.channel_id !== t.channelId && (p.channel_id = t.channelId, R = !0), R && j()
  },
  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
    let {
      webhookId: t
    } = e, l = b(t);
    if (null == l) return !1;
    p = l, h = null, g = null, x = {}, R = !1
  },
  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
    p = null, x = {}, R = !1
  },
  GUILD_SETTINGS_CLOSE: function() {
    n = null, _ = [], S = [], h = null, g = null, p = null, C = N.FormStates.CLOSED, R = !1
  },
  GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
    let {
      guildId: t,
      integrations: l
    } = e;
    if (null == n || t !== n.id || C === N.FormStates.SUBMITTING) return !1;
    for (let e of (A = !1, l))
      if (null == _.find(t => {
          let {
            id: l
          } = t;
          if (l === e.id) return !0
        })) {
        var a, s;
        _.push(e), e.type === (null == g ? void 0 : g.type) && (null === (a = e.account) || void 0 === a ? void 0 : a.id) === (null === (s = g.account) || void 0 === s ? void 0 : s.id) && (g = e)
      } for (let e = _.length - 1; e >= 0; e--) {
      let t = _[e],
        n = l.find(e => {
          let {
            id: l
          } = e;
          if (l === t.id) return !0
        });
      if (null != n) {
        let l = {
          ...t,
          ...n
        };
        (null == g ? void 0 : g.id) === l.id && (!1 === l.enabled ? g = null : !R && (g = l)), _[e] = l
      } else(null == g ? void 0 : g.id) === t.id && (g = null), _.splice(e, 1)
    }
    _ = [..._], j()
  },
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: l,
      webhooks: a
    } = e;
    if (null == n || t !== n.id || null == a || C === N.FormStates.SUBMITTING) return !1;
    O = !1;
    for (let e = S.length - 1; e >= 0; e--) {
      let t = S[e];
      if (null != l && (null == t ? void 0 : t.channel_id) !== l) continue;
      let n = a.find(e => {
        let {
          id: l
        } = e;
        if (l === t.id) return !0
      });
      if (null != n) {
        let l = {
          ...t,
          ...n
        };
        S[e] = l, !R && (null == p ? void 0 : p.id) === l.id && (p = l)
      } else(null == p ? void 0 : p.id) === t.id && (p = null), S.splice(e, 1)
    }
    for (let e of a) null == S.find(t => {
      let {
        id: l
      } = t;
      if (l === e.id) return !0
    }) && S.push(e);
    S = [...S], j()
  },
  INTEGRATION_SETTINGS_SUBMITTING: function() {
    C = N.FormStates.SUBMITTING, x = {}
  },
  INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
    var t;
    if (C !== N.FormStates.SUBMITTING) return !1;
    C = N.FormStates.OPEN, x = null !== (t = e.errors) && void 0 !== t ? t : {}
  }
});
t.default = y