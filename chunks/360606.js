let i, l;
t(653041), t(47120);
var s, a, r, o, c = t(392711),
  d = t.n(c),
  u = t(442837),
  I = t(570140),
  N = t(308063),
  E = t(496675),
  T = t(855674),
  m = t(999382),
  _ = t(981631);
let h = [],
  g = [],
  O = null,
  A = null,
  x = null,
  C = !1,
  S = !1,
  p = _.QZA.CLOSED,
  R = {},
  Z = !1,
  f = null;

function M(e) {
  let {
    section: n
  } = e;
  if (n !== _.pNK.INTEGRATIONS) return !1;
  if (l = _.b4C.OVERVIEW, null == i) {
    let e = m.Z.getGuildId();
    null != e && N.Z.fetchForGuild(e), L(!1)
  }
}

function L(e) {
  if (null != (i = m.Z.getProps().guild) && E.Z.can(_.Plq.MANAGE_GUILD, i)) {
    let e = m.Z.getProps().integrations;
    null == e && (S = !0), h = null != e ? e : []
  } else h = [];
  if (g = null != i && E.Z.can(_.Plq.MANAGE_WEBHOOKS, i) ? T.Z.getWebhooksForGuild(i.id) : [], !e && null != A) {
    let e = j(A.id);
    null != e && (A = e)
  }
  if (null != x) {
    let e = b(x.id);
    null != e && (x = e)
  }
  O = null, p = _.QZA.OPEN, R = {}, Z = !1
}
let v = d().debounce(() => {
  Z && (null != A ? d().isEqual(A, j(A.id)) && (Z = !1) : null != x && d().isEqual(x, b(x.id)) && (Z = !1), !Z && D.emitChange())
}, 500);

function j(e) {
  return h.find(n => {
    let {
      id: t
    } = n;
    return t === e
  })
}

function b(e) {
  return g.find(n => {
    let {
      id: t
    } = n;
    return t === e
  })
}
class P extends(s = u.ZP.Store) {
  initialize() {
    this.waitFor(m.Z, T.Z, E.Z)
  }
  hasChanges() {
    return Z
  }
  get guild() {
    return i
  }
  get integrations() {
    return h
  }
  get webhooks() {
    return g
  }
  get editedCommandId() {
    return O
  }
  get editedIntegration() {
    return A
  }
  get editedWebhook() {
    return x
  }
  get formState() {
    return p
  }
  getErrors() {
    return R
  }
  getSection() {
    return l
  }
  getSectionId() {
    return f
  }
  getIntegration(e) {
    return j(e)
  }
  getWebhook(e) {
    return b(e)
  }
  isFetching() {
    return S || C
  }
  showNotice() {
    return this.hasChanges()
  }
  getApplication(e) {
    var n;
    return null === (n = h.find(n => {
      var t;
      return (null === (t = n.application) || void 0 === t ? void 0 : t.id) === e
    })) || void 0 === n ? void 0 : n.application
  }
}
o = "GuildSettingsIntegrationsStore", (r = "displayName") in(a = P) ? Object.defineProperty(a, r, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[r] = o;
let D = new P(I.Z, __OVERLAY__ ? {} : {
  INTEGRATION_SETTINGS_INIT: function() {
    return L(!1)
  },
  INTEGRATION_SETTINGS_SAVE_SUCCESS: function() {
    return L(!0)
  },
  GUILD_SETTINGS_INIT: M,
  GUILD_SETTINGS_SET_SECTION: M,
  INTEGRATION_SETTINGS_SET_SECTION: function(e) {
    let {
      section: n,
      sectionId: t
    } = e;
    l = n, f = t
  },
  INTEGRATION_SETTINGS_START_EDITING_COMMAND: function(e) {
    let {
      commandId: n
    } = e;
    O = n, A = null, x = null, R = {}, Z = !0
  },
  INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: function(e) {
    let {
      commandId: n
    } = e;
    if (null == O || O !== n) return !1;
    O = null, R = {}, Z = !1
  },
  INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: function(e) {
    let {
      integrationId: n
    } = e, t = j(n);
    if (null == t) return !1;
    A = t, O = null, x = null, R = {}, Z = !1
  },
  INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: function() {
    A = null, R = {}, Z = !1
  },
  INTEGRATION_SETTINGS_UPDATE_INTEGRATION: function(e) {
    let {
      settings: n
    } = e;
    if (null == A) return !1;
    A = {
      ...A
    }, null != n.enableEmoticons && A.enable_emoticons !== n.enableEmoticons && (A.enable_emoticons = n.enableEmoticons, Z = !0), null != n.expireBehavior && A.expire_behavior !== n.expireBehavior && (A.expire_behavior = n.expireBehavior, Z = !0), null != n.expireGracePeriod && A.expire_grace_period !== n.expireGracePeriod && (A.expire_grace_period = n.expireGracePeriod, Z = !0), Z && v()
  },
  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
    let {
      settings: n
    } = e;
    if (null == x) return !1;
    x = {
      ...x
    }, null != n.name && x.name !== n.name && (x.name = n.name, Z = !0), void 0 !== n.avatar && x.avatar !== n.avatar && (x.avatar = n.avatar, Z = !0), null != n.channelId && x.channel_id !== n.channelId && (x.channel_id = n.channelId, Z = !0), Z && v()
  },
  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
    let {
      webhookId: n
    } = e, t = b(n);
    if (null == t) return !1;
    x = t, O = null, A = null, R = {}, Z = !1
  },
  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
    x = null, R = {}, Z = !1
  },
  GUILD_SETTINGS_CLOSE: function() {
    i = null, h = [], g = [], O = null, A = null, x = null, p = _.QZA.CLOSED, Z = !1
  },
  GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
    let {
      guildId: n,
      integrations: t
    } = e;
    if (null == i || n !== i.id || p === _.QZA.SUBMITTING) return !1;
    for (let e of (S = !1, t))
      if (null == h.find(n => {
          let {
            id: t
          } = n;
          if (t === e.id) return !0
        })) {
        var l, s;
        h.push(e), e.type === (null == A ? void 0 : A.type) && (null === (l = e.account) || void 0 === l ? void 0 : l.id) === (null === (s = A.account) || void 0 === s ? void 0 : s.id) && (A = e)
      } for (let e = h.length - 1; e >= 0; e--) {
      let n = h[e],
        i = t.find(e => {
          let {
            id: t
          } = e;
          if (t === n.id) return !0
        });
      if (null != i) {
        let t = {
          ...n,
          ...i
        };
        (null == A ? void 0 : A.id) === t.id && (!1 === t.enabled ? A = null : !Z && (A = t)), h[e] = t
      } else(null == A ? void 0 : A.id) === n.id && (A = null), h.splice(e, 1)
    }
    h = [...h], v()
  },
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: n,
      channelId: t,
      webhooks: l
    } = e;
    if (null == i || n !== i.id || null == l || p === _.QZA.SUBMITTING) return !1;
    C = !1;
    for (let e = g.length - 1; e >= 0; e--) {
      let n = g[e];
      if (null != t && (null == n ? void 0 : n.channel_id) !== t) continue;
      let i = l.find(e => {
        let {
          id: t
        } = e;
        if (t === n.id) return !0
      });
      if (null != i) {
        let t = {
          ...n,
          ...i
        };
        g[e] = t, !Z && (null == x ? void 0 : x.id) === t.id && (x = t)
      } else(null == x ? void 0 : x.id) === n.id && (x = null), g.splice(e, 1)
    }
    for (let e of l) null == g.find(n => {
      let {
        id: t
      } = n;
      if (t === e.id) return !0
    }) && g.push(e);
    g = [...g], v()
  },
  INTEGRATION_SETTINGS_SUBMITTING: function() {
    p = _.QZA.SUBMITTING, R = {}
  },
  INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
    var n;
    if (p !== _.QZA.SUBMITTING) return !1;
    p = _.QZA.OPEN, R = null !== (n = e.errors) && void 0 !== n ? n : {}
  }
});
n.Z = D