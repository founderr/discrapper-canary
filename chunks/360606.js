let i, s;
t(653041), t(47120);
var l, a, r, o, c = t(392711),
  d = t.n(c),
  u = t(442837),
  I = t(570140),
  N = t(308063),
  E = t(496675),
  T = t(855674),
  m = t(999382),
  _ = t(981631);
let h = [],
  O = [],
  g = null,
  A = null,
  C = null,
  S = !1,
  x = !1,
  p = _.QZA.CLOSED,
  R = {},
  Z = !1,
  f = null;

function M(e) {
  let {
    section: n
  } = e;
  if (n !== _.pNK.INTEGRATIONS) return !1;
  if (s = _.b4C.OVERVIEW, null == i) {
    let e = m.Z.getGuildId();
    null != e && N.Z.fetchForGuild(e), L(!1)
  }
}

function L(e) {
  if (null != (i = m.Z.getProps().guild) && E.Z.can(_.Plq.MANAGE_GUILD, i)) {
    let e = m.Z.getProps().integrations;
    null == e && (x = !0), h = null != e ? e : []
  } else h = [];
  if (O = null != i && E.Z.can(_.Plq.MANAGE_WEBHOOKS, i) ? T.Z.getWebhooksForGuild(i.id) : [], !e && null != A) {
    let e = j(A.id);
    null != e && (A = e)
  }
  if (null != C) {
    let e = b(C.id);
    null != e && (C = e)
  }
  g = null, p = _.QZA.OPEN, R = {}, Z = !1
}
let v = d().debounce(() => {
  Z && (null != A ? d().isEqual(A, j(A.id)) && (Z = !1) : null != C && d().isEqual(C, b(C.id)) && (Z = !1), !Z && P.emitChange())
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
  return O.find(n => {
    let {
      id: t
    } = n;
    return t === e
  })
}
class D extends(l = u.ZP.Store) {
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
    return O
  }
  get editedCommandId() {
    return g
  }
  get editedIntegration() {
    return A
  }
  get editedWebhook() {
    return C
  }
  get formState() {
    return p
  }
  getErrors() {
    return R
  }
  getSection() {
    return s
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
    return x || S
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
o = "GuildSettingsIntegrationsStore", (r = "displayName") in(a = D) ? Object.defineProperty(a, r, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[r] = o;
let P = new D(I.Z, __OVERLAY__ ? {} : {
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
    s = n, f = t
  },
  INTEGRATION_SETTINGS_START_EDITING_COMMAND: function(e) {
    let {
      commandId: n
    } = e;
    g = n, A = null, C = null, R = {}, Z = !0
  },
  INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: function(e) {
    let {
      commandId: n
    } = e;
    if (null == g || g !== n) return !1;
    g = null, R = {}, Z = !1
  },
  INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: function(e) {
    let {
      integrationId: n
    } = e, t = j(n);
    if (null == t) return !1;
    A = t, g = null, C = null, R = {}, Z = !1
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
    if (null == C) return !1;
    C = {
      ...C
    }, null != n.name && C.name !== n.name && (C.name = n.name, Z = !0), void 0 !== n.avatar && C.avatar !== n.avatar && (C.avatar = n.avatar, Z = !0), null != n.channelId && C.channel_id !== n.channelId && (C.channel_id = n.channelId, Z = !0), Z && v()
  },
  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
    let {
      webhookId: n
    } = e, t = b(n);
    if (null == t) return !1;
    C = t, g = null, A = null, R = {}, Z = !1
  },
  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
    C = null, R = {}, Z = !1
  },
  GUILD_SETTINGS_CLOSE: function() {
    i = null, h = [], O = [], g = null, A = null, C = null, p = _.QZA.CLOSED, Z = !1
  },
  GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
    let {
      guildId: n,
      integrations: t
    } = e;
    if (null == i || n !== i.id || p === _.QZA.SUBMITTING) return !1;
    for (let e of (x = !1, t))
      if (null == h.find(n => {
          let {
            id: t
          } = n;
          if (t === e.id) return !0
        })) {
        var s, l;
        h.push(e), e.type === (null == A ? void 0 : A.type) && (null === (s = e.account) || void 0 === s ? void 0 : s.id) === (null === (l = A.account) || void 0 === l ? void 0 : l.id) && (A = e)
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
      webhooks: s
    } = e;
    if (null == i || n !== i.id || null == s || p === _.QZA.SUBMITTING) return !1;
    S = !1;
    for (let e = O.length - 1; e >= 0; e--) {
      let n = O[e];
      if (null != t && (null == n ? void 0 : n.channel_id) !== t) continue;
      let i = s.find(e => {
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
        O[e] = t, !Z && (null == C ? void 0 : C.id) === t.id && (C = t)
      } else(null == C ? void 0 : C.id) === n.id && (C = null), O.splice(e, 1)
    }
    for (let e of s) null == O.find(n => {
      let {
        id: t
      } = n;
      if (t === e.id) return !0
    }) && O.push(e);
    O = [...O], v()
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
n.Z = P