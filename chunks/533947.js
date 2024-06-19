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
  T = n(981631);
let N = [],
  S = null,
  C = !1,
  A = T.QZA.CLOSED,
  f = {},
  Z = !1,
  v = null;

function L() {
  if (i = null != (s = I.Z.getChannel()) ? m.Z.getGuild(s.guild_id) : null, N = null != s && null != i && g.Z.can(T.Plq.MANAGE_WEBHOOKS, s) ? p.Z.getWebhooksForChannel(i.id, s.id) : [], null != S) {
    let e = R(S.id);
    null != e && (S = e)
  }
  A = T.QZA.OPEN, f = {}, Z = !1
}
let O = d().debounce(() => {
  Z && ((null == S || d().isEqual(S, R(S.id))) && (Z = !1), !Z && M.emitChange())
}, 500);

function R(e) {
  return N.find(t => {
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
    return N
  }
  get editedWebhook() {
    return S
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
      submitting: A === T.QZA.SUBMITTING,
      webhooks: N,
      editedWebhook: S,
      section: l,
      sectionId: v,
      hasChanges: this.hasChanges(),
      isFetching: C,
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
    if (t !== T.CoT.INTEGRATIONS) return !1;
    if (l = T.b4C.OVERVIEW, null == i) {
      let e = I.Z.getChannel(),
        t = null == e ? void 0 : e.getGuildId();
      null != e && null != t && (_.Z.fetchForChannel(t, e.id), C = !0), L()
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
    S = n, f = {}, Z = !1
  },
  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
    S = null, f = {}, Z = !1
  },
  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
    let {
      settings: t
    } = e;
    if (null == S) return !1;
    S = {
      ...S
    }, null != t.name && S.name !== t.name && (S.name = t.name, Z = !0), void 0 !== t.avatar && S.avatar !== t.avatar && (S.avatar = t.avatar, Z = !0), null != t.channelId && S.channel_id !== t.channelId && (S.channel_id = t.channelId, Z = !0), Z && O()
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    s = null, i = null, N = [], S = null, A = T.QZA.CLOSED
  },
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      webhooks: l
    } = e;
    if (null == i || t !== i.id || null == s || n !== s.id || null == l || A === T.QZA.SUBMITTING) return !1;
    C = !1;
    for (let e = N.length - 1; e >= 0; e--) {
      let t = N[e];
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
        N[e] = n, !Z && (null == S ? void 0 : S.id) === n.id && (S = n)
      } else(null == S ? void 0 : S.id) === t.id && (S = null), N.splice(e, 1)
    }
    for (let e of l) null == N.find(t => {
      let {
        id: n
      } = t;
      if (n === e.id) return !0
    }) && N.push(e);
    N = [...N], O()
  },
  INTEGRATION_SETTINGS_SUBMITTING: function() {
    A = T.QZA.SUBMITTING, f = {}
  },
  INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
    var t;
    if (A !== T.QZA.SUBMITTING) return !1;
    A = T.QZA.OPEN, f = null !== (t = e.errors) && void 0 !== t ? t : {}
  }
});
t.Z = M