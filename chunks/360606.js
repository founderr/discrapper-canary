let i, l;
t(653041), t(47120);
var r,
    a,
    o,
    s,
    d = t(392711),
    c = t.n(d),
    u = t(442837),
    m = t(570140),
    h = t(308063),
    p = t(496675),
    g = t(855674),
    f = t(999382),
    x = t(981631);
let b = [],
    v = [],
    C = null,
    I = null,
    N = null,
    T = !1,
    _ = !1,
    j = x.QZA.CLOSED,
    S = {},
    E = !1,
    Z = null;
function A(e) {
    let { section: n } = e;
    if (n !== x.pNK.INTEGRATIONS) return !1;
    if (((l = x.b4C.OVERVIEW), null == i)) {
        let e = f.Z.getGuildId();
        null != e && h.Z.fetchForGuild(e), y(!1);
    }
}
function y(e) {
    if (null != (i = f.Z.getProps().guild) && p.Z.can(x.Plq.MANAGE_GUILD, i)) {
        let e = f.Z.getProps().integrations;
        null == e && (_ = !0), (b = null != e ? e : []);
    } else b = [];
    if (((v = null != i && p.Z.can(x.Plq.MANAGE_WEBHOOKS, i) ? g.Z.getWebhooksForGuild(i.id) : []), !e && null != I)) {
        let e = O(I.id);
        null != e && (I = e);
    }
    if (null != N) {
        let e = L(N.id);
        null != e && (N = e);
    }
    (C = null), (j = x.QZA.OPEN), (S = {}), (E = !1);
}
let R = c().debounce(() => {
    E && (null != I ? c().isEqual(I, O(I.id)) && (E = !1) : null != N && c().isEqual(N, L(N.id)) && (E = !1), !E && w.emitChange());
}, 500);
function O(e) {
    return b.find((n) => {
        let { id: t } = n;
        return t === e;
    });
}
function L(e) {
    return v.find((n) => {
        let { id: t } = n;
        return t === e;
    });
}
class k extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, g.Z, p.Z);
    }
    hasChanges() {
        return E;
    }
    get guild() {
        return i;
    }
    get integrations() {
        return b;
    }
    get webhooks() {
        return v;
    }
    get editedCommandId() {
        return C;
    }
    get editedIntegration() {
        return I;
    }
    get editedWebhook() {
        return N;
    }
    get formState() {
        return j;
    }
    getErrors() {
        return S;
    }
    getSection() {
        return l;
    }
    getSectionId() {
        return Z;
    }
    getIntegration(e) {
        return O(e);
    }
    getWebhook(e) {
        return L(e);
    }
    isFetching() {
        return _ || T;
    }
    showNotice() {
        return this.hasChanges();
    }
    getApplication(e) {
        var n;
        return null ===
            (n = b.find((n) => {
                var t;
                return (null === (t = n.application) || void 0 === t ? void 0 : t.id) === e;
            })) || void 0 === n
            ? void 0
            : n.application;
    }
}
(s = 'GuildSettingsIntegrationsStore'),
    (o = 'displayName') in (a = k)
        ? Object.defineProperty(a, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[o] = s);
let w = new k(
    m.Z,
    __OVERLAY__
        ? {}
        : {
              INTEGRATION_SETTINGS_INIT: function () {
                  return y(!1);
              },
              INTEGRATION_SETTINGS_SAVE_SUCCESS: function () {
                  return y(!0);
              },
              GUILD_SETTINGS_INIT: A,
              GUILD_SETTINGS_SET_SECTION: A,
              INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                  let { section: n, sectionId: t } = e;
                  (l = n), (Z = t);
              },
              INTEGRATION_SETTINGS_START_EDITING_COMMAND: function (e) {
                  let { commandId: n } = e;
                  (C = n), (I = null), (N = null), (S = {}), (E = !0);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: function (e) {
                  let { commandId: n } = e;
                  if (null == C || C !== n) return !1;
                  (C = null), (S = {}), (E = !1);
              },
              INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: function (e) {
                  let { integrationId: n } = e,
                      t = O(n);
                  if (null == t) return !1;
                  (I = t), (C = null), (N = null), (S = {}), (E = !1);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: function () {
                  (I = null), (S = {}), (E = !1);
              },
              INTEGRATION_SETTINGS_UPDATE_INTEGRATION: function (e) {
                  let { settings: n } = e;
                  if (null == I) return !1;
                  (I = { ...I }), null != n.enableEmoticons && I.enable_emoticons !== n.enableEmoticons && ((I.enable_emoticons = n.enableEmoticons), (E = !0)), null != n.expireBehavior && I.expire_behavior !== n.expireBehavior && ((I.expire_behavior = n.expireBehavior), (E = !0)), null != n.expireGracePeriod && I.expire_grace_period !== n.expireGracePeriod && ((I.expire_grace_period = n.expireGracePeriod), (E = !0)), E && R();
              },
              INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                  let { settings: n } = e;
                  if (null == N) return !1;
                  (N = { ...N }), null != n.name && N.name !== n.name && ((N.name = n.name), (E = !0)), void 0 !== n.avatar && N.avatar !== n.avatar && ((N.avatar = n.avatar), (E = !0)), null != n.channelId && N.channel_id !== n.channelId && ((N.channel_id = n.channelId), (E = !0)), E && R();
              },
              INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                  let { webhookId: n } = e,
                      t = L(n);
                  if (null == t) return !1;
                  (N = t), (C = null), (I = null), (S = {}), (E = !1);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                  (N = null), (S = {}), (E = !1);
              },
              GUILD_SETTINGS_CLOSE: function () {
                  (i = null), (b = []), (v = []), (C = null), (I = null), (N = null), (j = x.QZA.CLOSED), (E = !1);
              },
              GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                  let { guildId: n, integrations: t } = e;
                  if (null == i || n !== i.id || j === x.QZA.SUBMITTING) return !1;
                  for (let e of ((_ = !1), t))
                      if (
                          null ==
                          b.find((n) => {
                              let { id: t } = n;
                              if (t === e.id) return !0;
                          })
                      ) {
                          var l, r;
                          b.push(e), e.type === (null == I ? void 0 : I.type) && (null === (l = e.account) || void 0 === l ? void 0 : l.id) === (null === (r = I.account) || void 0 === r ? void 0 : r.id) && (I = e);
                      }
                  for (let e = b.length - 1; e >= 0; e--) {
                      let n = b[e],
                          i = t.find((e) => {
                              let { id: t } = e;
                              if (t === n.id) return !0;
                          });
                      if (null != i) {
                          let t = {
                              ...n,
                              ...i
                          };
                          (null == I ? void 0 : I.id) === t.id && (!1 === t.enabled ? (I = null) : !E && (I = t)), (b[e] = t);
                      } else (null == I ? void 0 : I.id) === n.id && (I = null), b.splice(e, 1);
                  }
                  (b = [...b]), R();
              },
              WEBHOOKS_UPDATE: function (e) {
                  let { guildId: n, channelId: t, webhooks: l } = e;
                  if (null == i || n !== i.id || null == l || j === x.QZA.SUBMITTING) return !1;
                  T = !1;
                  for (let e = v.length - 1; e >= 0; e--) {
                      let n = v[e];
                      if (null != t && (null == n ? void 0 : n.channel_id) !== t) continue;
                      let i = l.find((e) => {
                          let { id: t } = e;
                          if (t === n.id) return !0;
                      });
                      if (null != i) {
                          let t = {
                              ...n,
                              ...i
                          };
                          (v[e] = t), !E && (null == N ? void 0 : N.id) === t.id && (N = t);
                      } else (null == N ? void 0 : N.id) === n.id && (N = null), v.splice(e, 1);
                  }
                  for (let e of l)
                      null ==
                          v.find((n) => {
                              let { id: t } = n;
                              if (t === e.id) return !0;
                          }) && v.push(e);
                  (v = [...v]), R();
              },
              INTEGRATION_SETTINGS_SUBMITTING: function () {
                  (j = x.QZA.SUBMITTING), (S = {});
              },
              INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                  var n;
                  if (j !== x.QZA.SUBMITTING) return !1;
                  (j = x.QZA.OPEN), (S = null !== (n = e.errors) && void 0 !== n ? n : {});
              }
          }
);
n.Z = w;
