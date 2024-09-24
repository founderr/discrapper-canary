let i, a, s;
n(653041), n(47120);
var r,
    l,
    o,
    c,
    d = n(392711),
    u = n.n(d),
    _ = n(442837),
    E = n(570140),
    h = n(308063),
    m = n(388610),
    I = n(430824),
    g = n(496675),
    p = n(855674),
    T = n(981631);
let f = [],
    S = null,
    C = !1,
    N = T.QZA.CLOSED,
    A = {},
    v = !1,
    L = null;
function Z() {
    if (((i = null != (a = m.Z.getChannel()) ? I.Z.getGuild(a.guild_id) : null), (f = null != a && null != i && g.Z.can(T.Plq.MANAGE_WEBHOOKS, a) ? p.Z.getWebhooksForChannel(i.id, a.id) : []), null != S)) {
        let e = O(S.id);
        null != e && (S = e);
    }
    (N = T.QZA.OPEN), (A = {}), (v = !1);
}
let R = u().debounce(() => {
    v && ((null == S || u().isEqual(S, O(S.id))) && (v = !1), !v && b.emitChange());
}, 500);
function O(e) {
    return f.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class x extends (r = _.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, I.Z, p.Z, g.Z);
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
        return O(e);
    }
    showNotice() {
        return this.hasChanges();
    }
    getProps() {
        return {
            submitting: N === T.QZA.SUBMITTING,
            webhooks: f,
            editedWebhook: S,
            section: s,
            sectionId: L,
            hasChanges: this.hasChanges(),
            isFetching: C,
            errors: A
        };
    }
}
(c = 'ChannelSettingsIntegrationsStore'),
    (o = 'displayName') in (l = x)
        ? Object.defineProperty(l, o, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[o] = c);
let b = new x(
    E.Z,
    __OVERLAY__
        ? {}
        : {
              INTEGRATION_SETTINGS_INIT: Z,
              INTEGRATION_SETTINGS_SAVE_SUCCESS: Z,
              CHANNEL_SETTINGS_SET_SECTION: function (e) {
                  let { section: t } = e;
                  if (t !== T.CoT.INTEGRATIONS) return !1;
                  if (((s = T.b4C.OVERVIEW), null == i)) {
                      let e = m.Z.getChannel(),
                          t = null == e ? void 0 : e.getGuildId();
                      null != e && null != t && (h.Z.fetchForChannel(t, e.id), (C = !0)), Z();
                  }
              },
              INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                  let { section: t, sectionId: n } = e;
                  (s = t), (L = n);
              },
              INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                  let { webhookId: t } = e,
                      n = O(t);
                  if (null == n) return !1;
                  (S = n), (A = {}), (v = !1);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                  (S = null), (A = {}), (v = !1);
              },
              INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                  let { settings: t } = e;
                  if (null == S) return !1;
                  (S = { ...S }), null != t.name && S.name !== t.name && ((S.name = t.name), (v = !0)), void 0 !== t.avatar && S.avatar !== t.avatar && ((S.avatar = t.avatar), (v = !0)), null != t.channelId && S.channel_id !== t.channelId && ((S.channel_id = t.channelId), (v = !0)), v && R();
              },
              CHANNEL_SETTINGS_CLOSE: function () {
                  (a = null), (i = null), (f = []), (S = null), (N = T.QZA.CLOSED);
              },
              WEBHOOKS_UPDATE: function (e) {
                  let { guildId: t, channelId: n, webhooks: s } = e;
                  if (null == i || t !== i.id || null == a || n !== a.id || null == s || N === T.QZA.SUBMITTING) return !1;
                  C = !1;
                  for (let e = f.length - 1; e >= 0; e--) {
                      let t = f[e];
                      if (null != n && (null == t ? void 0 : t.channel_id) !== n) continue;
                      let i = s.find((e) => {
                          let { id: n } = e;
                          if (n === t.id) return !0;
                      });
                      if (null != i) {
                          let n = {
                              ...t,
                              ...i
                          };
                          (f[e] = n), !v && (null == S ? void 0 : S.id) === n.id && (S = n);
                      } else (null == S ? void 0 : S.id) === t.id && (S = null), f.splice(e, 1);
                  }
                  for (let e of s)
                      null ==
                          f.find((t) => {
                              let { id: n } = t;
                              if (n === e.id) return !0;
                          }) && f.push(e);
                  (f = [...f]), R();
              },
              INTEGRATION_SETTINGS_SUBMITTING: function () {
                  (N = T.QZA.SUBMITTING), (A = {});
              },
              INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                  var t;
                  if (N !== T.QZA.SUBMITTING) return !1;
                  (N = T.QZA.OPEN), (A = null !== (t = e.errors) && void 0 !== t ? t : {});
              }
          }
);
t.Z = b;
