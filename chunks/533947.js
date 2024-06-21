let i, s, l;
n(653041), n(47120);
var a, r, o, c, u = n(392711),
  d = n.n(u),
  E = n(442837),
  h = n(570140),
  _ = n(308063),
  I = n(388610),
  m = n(430824),
  g = n(496675),
  p = n(855674),
  N = n(981631);
let T = [],
  C = null,
  S = !1,
  A = N.QZA.CLOSED,
  f = {},
  Z = !1,
  v = null;

function L() {
  if (i = null != (s = I.Z.getChannel()) ? m.Z.getGuild(s.guild_id) : null, T = null != s && null != i && g.Z.can(N.Plq.MANAGE_WEBHOOKS, s) ? p.Z.getWebhooksForChannel(i.id, s.id) : [], null != C) {
    let e = R(C.id);
    null != e && (C = e)
  }
  A = N.QZA.OPEN, f = {}, Z = !1
}
let O = d().debounce(() => {
  Z && ((null == C || d().isEqual(C, R(C.id))) && (Z = !1), !Z && M.emitChange())
}, 500);

function R(e) {
  return T.find(t => {
    let {
      id: n
    } = t;
    return n === e
  })
}
class x extends(a = E.ZP.Store) {
  initialize() {
    this.waitFor(I.Z, m.Z, p.Z, g.Z)
  }
  hasChanges() {
    return Z
  }
  get webhooks() {
    return T
  }
  get editedWebhook() {
    return C
  }
  get formState() {
    return A
  }
  getWebhook(e) {
    return R(e)
  }
  showNotice() {
    return this.hasChanges()
  }
  getProps() {
    return {
      submitting: A === N.QZA.SUBMITTING,
      webhooks: T,
      editedWebhook: C,
      section: l,
      sectionId: v,
      hasChanges: this.hasChanges(),
      isFetching: S,
      errors: f
    }
  }
}
c = "ChannelSettingsIntegrationsStore", (o = "displayName") in(r = x) ? Object.defineProperty(r, o, {
  value: c,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[o] = c;
let M = new x(h.Z, __OVERLAY__ ? {} : {
  INTEGRATION_SETTINGS_INIT: L,
  INTEGRATION_SETTINGS_SAVE_SUCCESS: L,
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    if (t !== N.CoT.INTEGRATIONS) return !1;
    if (l = N.b4C.OVERVIEW, null == i) {
      let e = I.Z.getChannel(),
        t = null == e ? void 0 : e.getGuildId();
      null != e && null != t && (_.Z.fetchForChannel(t, e.id), S = !0), L()
    }
  },
  INTEGRATION_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t,
      sectionId: n
    } = e;
    l = t, v = n
  },
  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
    let {
      webhookId: t
    } = e, n = R(t);
    if (null == n) return !1;
    C = n, f = {}, Z = !1
  },
  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
    C = null, f = {}, Z = !1
  },
  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
    let {
      settings: t
    } = e;
    if (null == C) return !1;
    C = {
      ...C
    }, null != t.name && C.name !== t.name && (C.name = t.name, Z = !0), void 0 !== t.avatar && C.avatar !== t.avatar && (C.avatar = t.avatar, Z = !0), null != t.channelId && C.channel_id !== t.channelId && (C.channel_id = t.channelId, Z = !0), Z && O()
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    s = null, i = null, T = [], C = null, A = N.QZA.CLOSED
  },
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      webhooks: l
    } = e;
    if (null == i || t !== i.id || null == s || n !== s.id || null == l || A === N.QZA.SUBMITTING) return !1;
    S = !1;
    for (let e = T.length - 1; e >= 0; e--) {
      let t = T[e];
      if (null != n && (null == t ? void 0 : t.channel_id) !== n) continue;
      let i = l.find(e => {
        let {
          id: n
        } = e;
        if (n === t.id) return !0
      });
      if (null != i) {
        let n = {
          ...t,
          ...i
        };
        T[e] = n, !Z && (null == C ? void 0 : C.id) === n.id && (C = n)
      } else(null == C ? void 0 : C.id) === t.id && (C = null), T.splice(e, 1)
    }
    for (let e of l) null == T.find(t => {
      let {
        id: n
      } = t;
      if (n === e.id) return !0
    }) && T.push(e);
    T = [...T], O()
  },
  INTEGRATION_SETTINGS_SUBMITTING: function() {
    A = N.QZA.SUBMITTING, f = {}
  },
  INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
    var t;
    if (A !== N.QZA.SUBMITTING) return !1;
    A = N.QZA.OPEN, f = null !== (t = e.errors) && void 0 !== t ? t : {}
  }
});
t.Z = M