let s, i, l;
n(653041), n(47120);
var a, r, o, c, u = n(392711),
  d = n.n(u),
  E = n(442837),
  h = n(570140),
  _ = n(308063),
  I = n(388610),
  m = n(430824),
  T = n(496675),
  g = n(855674),
  p = n(981631);
let N = [],
  S = null,
  C = !1,
  A = p.QZA.CLOSED,
  f = {},
  Z = !1,
  L = null;

function O() {
  if (s = null != (i = I.Z.getChannel()) ? m.Z.getGuild(i.guild_id) : null, N = null != i && null != s && T.Z.can(p.Plq.MANAGE_WEBHOOKS, i) ? g.Z.getWebhooksForChannel(s.id, i.id) : [], null != S) {
    let e = R(S.id);
    null != e && (S = e)
  }
  A = p.QZA.OPEN, f = {}, Z = !1
}
let v = d().debounce(() => {
  Z && ((null == S || d().isEqual(S, R(S.id))) && (Z = !1), !Z && x.emitChange())
}, 500);

function R(e) {
  return N.find(t => {
    let {
      id: n
    } = t;
    return n === e
  })
}
class P extends(a = E.ZP.Store) {
  initialize() {
    this.waitFor(I.Z, m.Z, g.Z, T.Z)
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
      submitting: A === p.QZA.SUBMITTING,
      webhooks: N,
      editedWebhook: S,
      section: l,
      sectionId: L,
      hasChanges: this.hasChanges(),
      isFetching: C,
      errors: f
    }
  }
}
c = "ChannelSettingsIntegrationsStore", (o = "displayName") in(r = P) ? Object.defineProperty(r, o, {
  value: c,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[o] = c;
let x = new P(h.Z, __OVERLAY__ ? {} : {
  INTEGRATION_SETTINGS_INIT: O,
  INTEGRATION_SETTINGS_SAVE_SUCCESS: O,
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    if (t !== p.CoT.INTEGRATIONS) return !1;
    if (l = p.b4C.OVERVIEW, null == s) {
      let e = I.Z.getChannel(),
        t = null == e ? void 0 : e.getGuildId();
      null != e && null != t && (_.Z.fetchForChannel(t, e.id), C = !0), O()
    }
  },
  INTEGRATION_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t,
      sectionId: n
    } = e;
    l = t, L = n
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
    }, null != t.name && S.name !== t.name && (S.name = t.name, Z = !0), void 0 !== t.avatar && S.avatar !== t.avatar && (S.avatar = t.avatar, Z = !0), null != t.channelId && S.channel_id !== t.channelId && (S.channel_id = t.channelId, Z = !0), Z && v()
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    i = null, s = null, N = [], S = null, A = p.QZA.CLOSED
  },
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      webhooks: l
    } = e;
    if (null == s || t !== s.id || null == i || n !== i.id || null == l || A === p.QZA.SUBMITTING) return !1;
    C = !1;
    for (let e = N.length - 1; e >= 0; e--) {
      let t = N[e];
      if (null != n && (null == t ? void 0 : t.channel_id) !== n) continue;
      let s = l.find(e => {
        let {
          id: n
        } = e;
        if (n === t.id) return !0
      });
      if (null != s) {
        let n = {
          ...t,
          ...s
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
    N = [...N], v()
  },
  INTEGRATION_SETTINGS_SUBMITTING: function() {
    A = p.QZA.SUBMITTING, f = {}
  },
  INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
    var t;
    if (A !== p.QZA.SUBMITTING) return !1;
    A = p.QZA.OPEN, f = null !== (t = e.errors) && void 0 !== t ? t : {}
  }
});
t.Z = x