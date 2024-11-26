let i, r, l;
n(653041), n(47120);
var a,
    s,
    o,
    c,
    d = n(392711),
    u = n.n(d),
    h = n(442837),
    m = n(570140),
    p = n(308063),
    g = n(388610),
    f = n(430824),
    _ = n(496675),
    I = n(855674),
    E = n(981631);
let C = [],
    v = null,
    N = !1,
    S = E.QZA.CLOSED,
    T = {},
    x = !1,
    b = null;
function A() {
    if (((i = null != (r = g.Z.getChannel()) ? f.Z.getGuild(r.guild_id) : null), (C = null != r && null != i && _.Z.can(E.Plq.MANAGE_WEBHOOKS, r) ? I.Z.getWebhooksForChannel(i.id, r.id) : []), null != v)) {
        let e = L(v.id);
        null != e && (v = e);
    }
    (S = E.QZA.OPEN), (T = {}), (x = !1);
}
let Z = u().debounce(() => {
    x && ((null == v || u().isEqual(v, L(v.id))) && (x = !1), !x && P.emitChange());
}, 500);
function L(e) {
    return C.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class y extends (a = h.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, f.Z, I.Z, _.Z);
    }
    hasChanges() {
        return x;
    }
    get webhooks() {
        return C;
    }
    get editedWebhook() {
        return v;
    }
    get formState() {
        return S;
    }
    getWebhook(e) {
        return L(e);
    }
    showNotice() {
        return this.hasChanges();
    }
    getProps() {
        return {
            submitting: S === E.QZA.SUBMITTING,
            webhooks: C,
            editedWebhook: v,
            section: l,
            sectionId: b,
            hasChanges: this.hasChanges(),
            isFetching: N,
            errors: T
        };
    }
}
(c = 'ChannelSettingsIntegrationsStore'),
    (o = 'displayName') in (s = y)
        ? Object.defineProperty(s, o, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = c);
let P = new y(
    m.Z,
    __OVERLAY__
        ? {}
        : {
              INTEGRATION_SETTINGS_INIT: A,
              INTEGRATION_SETTINGS_SAVE_SUCCESS: A,
              CHANNEL_SETTINGS_SET_SECTION: function (e) {
                  let { section: t } = e;
                  if (t !== E.CoT.INTEGRATIONS) return !1;
                  if (((l = E.b4C.OVERVIEW), null == i)) {
                      let e = g.Z.getChannel(),
                          t = null == e ? void 0 : e.getGuildId();
                      null != e && null != t && (p.Z.fetchForChannel(t, e.id), (N = !0)), A();
                  }
              },
              INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                  let { section: t, sectionId: n } = e;
                  (l = t), (b = n);
              },
              INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                  let { webhookId: t } = e,
                      n = L(t);
                  if (null == n) return !1;
                  (v = n), (T = {}), (x = !1);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                  (v = null), (T = {}), (x = !1);
              },
              INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                  let { settings: t } = e;
                  if (null == v) return !1;
                  (v = { ...v }), null != t.name && v.name !== t.name && ((v.name = t.name), (x = !0)), void 0 !== t.avatar && v.avatar !== t.avatar && ((v.avatar = t.avatar), (x = !0)), null != t.channelId && v.channel_id !== t.channelId && ((v.channel_id = t.channelId), (x = !0)), x && Z();
              },
              CHANNEL_SETTINGS_CLOSE: function () {
                  (r = null), (i = null), (C = []), (v = null), (S = E.QZA.CLOSED);
              },
              WEBHOOKS_UPDATE: function (e) {
                  let { guildId: t, channelId: n, webhooks: l } = e;
                  if (null == i || t !== i.id || null == r || n !== r.id || null == l || S === E.QZA.SUBMITTING) return !1;
                  N = !1;
                  for (let e = C.length - 1; e >= 0; e--) {
                      let t = C[e];
                      if (null != n && (null == t ? void 0 : t.channel_id) !== n) continue;
                      let i = l.find((e) => {
                          let { id: n } = e;
                          if (n === t.id) return !0;
                      });
                      if (null != i) {
                          let n = {
                              ...t,
                              ...i
                          };
                          (C[e] = n), !x && (null == v ? void 0 : v.id) === n.id && (v = n);
                      } else (null == v ? void 0 : v.id) === t.id && (v = null), C.splice(e, 1);
                  }
                  for (let e of l)
                      null ==
                          C.find((t) => {
                              let { id: n } = t;
                              if (n === e.id) return !0;
                          }) && C.push(e);
                  (C = [...C]), Z();
              },
              INTEGRATION_SETTINGS_SUBMITTING: function () {
                  (S = E.QZA.SUBMITTING), (T = {});
              },
              INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                  var t;
                  if (S !== E.QZA.SUBMITTING) return !1;
                  (S = E.QZA.OPEN), (T = null !== (t = e.errors) && void 0 !== t ? t : {});
              }
          }
);
t.Z = P;
