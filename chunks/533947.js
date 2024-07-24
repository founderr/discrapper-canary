let i, s, a;
n(653041), n(47120);
var r, l, o, c, d = n(392711),
  u = n.n(d),
  _ = n(442837),
  h = n(570140),
  E = n(308063),
  I = n(388610),
  m = n(430824),
  g = n(496675),
  p = n(855674),
  T = n(981631);
let f = [],
  S = null,
  C = !1,
  N = T.QZA.CLOSED,
  A = {},
  v = !1,
  Z = null;

function L() {
  if (i = null != (s = I.Z.getChannel()) ? m.Z.getGuild(s.guild_id) : null, f = null != s && null != i && g.Z.can(T.Plq.MANAGE_WEBHOOKS, s) ? p.Z.getWebhooksForChannel(i.id, s.id) : [], null != S) {
let e = R(S.id);
null != e && (S = e);
  }
  N = T.QZA.OPEN, A = {}, v = !1;
}
let O = u().debounce(() => {
  v && ((null == S || u().isEqual(S, R(S.id))) && (v = !1), !v && b.emitChange());
}, 500);

function R(e) {
  return f.find(t => {
let {
  id: n
} = t;
return n === e;
  });
}
class x extends(r = _.ZP.Store) {
  initialize() {
this.waitFor(I.Z, m.Z, p.Z, g.Z);
  }
  hasChanges() {
return v;
  }
  get webhooks() {
return f;
  }
  get editedWebhook() {
return S;
  }
  get formState() {
return N;
  }
  getWebhook(e) {
return R(e);
  }
  showNotice() {
return this.hasChanges();
  }
  getProps() {
return {
  submitting: N === T.QZA.SUBMITTING,
  webhooks: f,
  editedWebhook: S,
  section: a,
  sectionId: Z,
  hasChanges: this.hasChanges(),
  isFetching: C,
  errors: A
};
  }
}
c = 'ChannelSettingsIntegrationsStore', (o = 'displayName') in(l = x) ? Object.defineProperty(l, o, {
  value: c,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[o] = c;
let b = new x(h.Z, __OVERLAY__ ? {} : {
  INTEGRATION_SETTINGS_INIT: L,
  INTEGRATION_SETTINGS_SAVE_SUCCESS: L,
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
let {
  section: t
} = e;
if (t !== T.CoT.INTEGRATIONS)
  return !1;
if (a = T.b4C.OVERVIEW, null == i) {
  let e = I.Z.getChannel(),
    t = null == e ? void 0 : e.getGuildId();
  null != e && null != t && (E.Z.fetchForChannel(t, e.id), C = !0), L();
}
  },
  INTEGRATION_SETTINGS_SET_SECTION: function(e) {
let {
  section: t,
  sectionId: n
} = e;
a = t, Z = n;
  },
  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
let {
  webhookId: t
} = e, n = R(t);
if (null == n)
  return !1;
S = n, A = {}, v = !1;
  },
  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
S = null, A = {}, v = !1;
  },
  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
let {
  settings: t
} = e;
if (null == S)
  return !1;
S = {
  ...S
}, null != t.name && S.name !== t.name && (S.name = t.name, v = !0), void 0 !== t.avatar && S.avatar !== t.avatar && (S.avatar = t.avatar, v = !0), null != t.channelId && S.channel_id !== t.channelId && (S.channel_id = t.channelId, v = !0), v && O();
  },
  CHANNEL_SETTINGS_CLOSE: function() {
s = null, i = null, f = [], S = null, N = T.QZA.CLOSED;
  },
  WEBHOOKS_UPDATE: function(e) {
let {
  guildId: t,
  channelId: n,
  webhooks: a
} = e;
if (null == i || t !== i.id || null == s || n !== s.id || null == a || N === T.QZA.SUBMITTING)
  return !1;
C = !1;
for (let e = f.length - 1; e >= 0; e--) {
  let t = f[e];
  if (null != n && (null == t ? void 0 : t.channel_id) !== n)
    continue;
  let i = a.find(e => {
    let {
      id: n
    } = e;
    if (n === t.id)
      return !0;
  });
  if (null != i) {
    let n = {
      ...t,
      ...i
    };
    f[e] = n, !v && (null == S ? void 0 : S.id) === n.id && (S = n);
  } else
    (null == S ? void 0 : S.id) === t.id && (S = null), f.splice(e, 1);
}
for (let e of a)
  null == f.find(t => {
    let {
      id: n
    } = t;
    if (n === e.id)
      return !0;
  }) && f.push(e);
f = [...f], O();
  },
  INTEGRATION_SETTINGS_SUBMITTING: function() {
N = T.QZA.SUBMITTING, A = {};
  },
  INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
var t;
if (N !== T.QZA.SUBMITTING)
  return !1;
N = T.QZA.OPEN, A = null !== (t = e.errors) && void 0 !== t ? t : {};
  }
});
t.Z = b;