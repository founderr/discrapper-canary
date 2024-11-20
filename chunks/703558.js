n.d(t, {
    d: function () {
        return r;
    }
}),
    n(47120);
var r,
    i,
    a,
    s = n(392711),
    o = n.n(s),
    l = n(442837),
    u = n(570140),
    c = n(823379),
    d = n(709054),
    f = n(314897),
    _ = n(592125),
    p = n(486472);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let m = n(981631).en1 + 500;
((a = r || (r = {}))[(a.ChannelMessage = 0)] = 'ChannelMessage'), (a[(a.ThreadSettings = 1)] = 'ThreadSettings'), (a[(a.FirstThreadMessage = 2)] = 'FirstThreadMessage'), (a[(a.ApplicationLauncherCommand = 3)] = 'ApplicationLauncherCommand'), (a[(a.Poll = 4)] = 'Poll'), (a[(a.SlashCommand = 5)] = 'SlashCommand'), (a[(a.ForwardContextMessage = 6)] = 'ForwardContextMessage');
let g = {};
function E(e) {
    let t = g[e];
    return null == t && (t = g[e] = {}), t;
}
function v(e) {
    let { type: t, channelId: n, draft: r, draftType: i } = e,
        a = _.Z.getChannel(n);
    r === (null == a ? void 0 : a.template) && (r = '');
    let s = f.default.getId();
    if (null != s && null != r && '' !== r) {
        var o, l;
        let e = E(s),
            t = e[n];
        if ((null == t && (t = e[n] = {}), (l = r).length > m && (l = l.substr(0, m)), (r = l) === (null === (o = t[i]) || void 0 === o ? void 0 : o.draft))) return !1;
        t[i] = {
            timestamp: Date.now(),
            draft: r
        };
    } else I(n, i);
    return 'DRAFT_SAVE' === t;
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.default.getId();
    if (null == n) return !1;
    let r = E(n),
        i = r[e];
    if (null == i) return !1;
    delete i[t], o().isEmpty(i) && delete r[e];
}
function b() {
    let e = f.default.getId();
    if (null == e || p.Z.totalUnavailableGuilds > 0) return;
    let t = E(e);
    for (let e in t) null == _.Z.getChannel(e) && delete t[e];
}
function T(e) {
    let {
            channel: { id: t }
        } = e,
        n = f.default.getId();
    if (null == n) return !1;
    let r = E(n);
    return delete r[t], !1;
}
class S extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        (g = null != e ? e : {}),
            !(function () {
                for (let [e, t] of d.default.entries(g))
                    for (let [n, r] of d.default.entries(t)) {
                        let t = r[0];
                        null != t && ('' === t.draft || '' === t.draft.trim()) && I(n, 0, e);
                    }
            })(),
            this.waitFor(f.default, _.Z, p.Z);
    }
    getState() {
        return g;
    }
    getThreadDraftWithParentMessageId(e) {
        let t = f.default.getId();
        if (null == t) return;
        let n = E(t),
            r = d.default.keys(n).find((t) => {
                let n = this.getThreadSettings(t);
                return (null == n ? void 0 : n.parentMessageId) === e;
            });
        return null != r ? this.getThreadSettings(r) : void 0;
    }
    getRecentlyEditedDrafts(e) {
        let t = f.default.getId();
        if (null == t) return [];
        let n = E(t);
        return o()(n)
            .mapValues((t) => (null == t ? void 0 : t[e]))
            .pickBy(c.lm)
            .toPairs()
            .map((e) => {
                let [t, { timestamp: n, draft: r }] = e;
                return {
                    channelId: t,
                    timestamp: n,
                    draft: r
                };
            })
            .sortBy((e) => {
                let { timestamp: t } = e;
                return -t;
            })
            .value();
    }
    getDraft(e, t) {
        let n = f.default.getId();
        if (null == n) return '';
        let r = E(n)[e];
        if (null != r) {
            let e = r[t];
            if (null != e) return e.draft;
        }
        return '';
    }
    getThreadSettings(e) {
        let t = f.default.getId();
        if (null == t) return null;
        let n = E(t)[e];
        return null == n ? null : n[1];
    }
}
h(S, 'displayName', 'DraftStore'),
    h(S, 'persistKey', 'DraftStore'),
    h(S, 'migrations', [
        (e) => {
            if (null == e) return {};
            for (let t in e) 'timestamp' in e[t] && (e[t] = { 0: e[t] });
            return e;
        },
        (e) => {
            let t = f.default.getId();
            if (null == e || null == t) return {};
            let n = {},
                r = (n[t] = {});
            for (let t in e) r[t] = e[t];
            return n;
        }
    ]),
    (t.Z = new S(u.Z, {
        CONNECTION_OPEN: function () {
            let e = f.default.getId();
            return !(e in g) && (g[e] = {}), b(), !1;
        },
        LOGOUT: function (e) {
            !e.isSwitchingAccount && (g = {});
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
            e.userId in g && delete g[e.userId];
        },
        GUILD_DELETE: function () {
            return b(), !1;
        },
        CHANNEL_DELETE: T,
        THREAD_DELETE: T,
        THREAD_CREATE: function (e) {
            let { channel: t } = e,
                n = f.default.getId();
            if (null == n || t.ownerId === n) return !1;
            let r = E(n),
                i = r[t.parent_id];
            if (null == i) return !1;
            let a = i[1];
            if (null == a) return !1;
            if (a.parentMessageId !== d.default.castChannelIdAsMessageId(t.id)) return !1;
            {
                var s, o;
                let e = r[t.parent_id];
                if (null == e) return !1;
                let n = null !== (o = null === (s = e[2]) || void 0 === s ? void 0 : s.draft) && void 0 !== o ? o : '';
                '' !== n &&
                    (r[t.id] = {
                        0: {
                            timestamp: Date.now(),
                            draft: n
                        }
                    }),
                    I(t.parent_id, 1),
                    I(t.parent_id, 2);
            }
        },
        DRAFT_SAVE: v,
        DRAFT_CHANGE: v,
        DRAFT_CLEAR: function (e) {
            let { channelId: t, draftType: n } = e;
            return I(t, n);
        },
        THREAD_SETTINGS_DRAFT_CHANGE: function (e) {
            let { channelId: t, draft: n } = e,
                r = f.default.getId();
            if (null == r) return;
            let i = E(r),
                a = i[t];
            null == a && (a = i[t] = {}),
                (a[1] = {
                    timestamp: Date.now(),
                    ...a[1],
                    ...n,
                    parentChannelId: t
                });
        }
    }));
