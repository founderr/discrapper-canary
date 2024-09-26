n.d(t, {
    d: function () {
        return r;
    }
});
var r,
    i,
    a = n(47120);
var o = n(392711),
    s = n.n(o),
    l = n(442837),
    u = n(570140),
    c = n(823379),
    d = n(709054),
    _ = n(314897),
    E = n(592125),
    f = n(486472);
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
let p = n(981631).en1 + 500;
!(function (e) {
    (e[(e.ChannelMessage = 0)] = 'ChannelMessage'), (e[(e.ThreadSettings = 1)] = 'ThreadSettings'), (e[(e.FirstThreadMessage = 2)] = 'FirstThreadMessage'), (e[(e.ApplicationLauncherCommand = 3)] = 'ApplicationLauncherCommand'), (e[(e.Poll = 4)] = 'Poll'), (e[(e.SlashCommand = 5)] = 'SlashCommand');
})(r || (r = {}));
let m = {};
function I(e) {
    return e.length > p && (e = e.substr(0, p)), e;
}
function T(e) {
    let t = m[e];
    return null == t && (t = m[e] = {}), t;
}
function g(e) {
    let { type: t, channelId: n, draft: r, draftType: i } = e,
        a = E.Z.getChannel(n);
    r === (null == a ? void 0 : a.template) && (r = '');
    let o = _.default.getId();
    if (null != o && null != r && '' !== r) {
        var s;
        let e = T(o),
            t = e[n];
        if ((null == t && (t = e[n] = {}), (r = I(r)) === (null === (s = t[i]) || void 0 === s ? void 0 : s.draft))) return !1;
        t[i] = {
            timestamp: Date.now(),
            draft: r
        };
    } else v(n, i);
    return 'DRAFT_SAVE' === t;
}
function S(e) {
    let { channelId: t, draftType: n } = e;
    return v(t, n);
}
function A(e) {
    let { channelId: t, draft: n } = e,
        r = _.default.getId();
    if (null == r) return;
    let i = T(r),
        a = i[t];
    null == a && (a = i[t] = {}),
        (a[1] = {
            timestamp: Date.now(),
            ...a[1],
            ...n,
            parentChannelId: t
        });
}
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.default.getId();
    if (null == n) return !1;
    let r = T(n),
        i = r[e];
    if (null == i) return !1;
    delete i[t], s().isEmpty(i) && delete r[e];
}
function N() {
    let e = _.default.getId();
    if (null == e || f.Z.totalUnavailableGuilds > 0) return;
    let t = T(e);
    for (let e in t) null == E.Z.getChannel(e) && delete t[e];
}
function O() {
    let e = _.default.getId();
    return !(e in m) && (m[e] = {}), N(), !1;
}
function R() {
    return N(), !1;
}
function C(e) {
    let {
            channel: { id: t }
        } = e,
        n = _.default.getId();
    if (null == n) return !1;
    let r = T(n);
    return delete r[t], !1;
}
function y(e) {
    let { channel: t } = e,
        n = _.default.getId();
    if (null == n || t.ownerId === n) return !1;
    let r = T(n),
        i = r[t.parent_id];
    if (null == i) return !1;
    let a = i[1];
    if (null == a) return !1;
    if (a.parentMessageId !== d.default.castChannelIdAsMessageId(t.id)) return !1;
    {
        var o, s;
        let e = r[t.parent_id];
        if (null == e) return !1;
        let n = null !== (s = null === (o = e[2]) || void 0 === o ? void 0 : o.draft) && void 0 !== s ? s : '';
        '' !== n &&
            (r[t.id] = {
                0: {
                    timestamp: Date.now(),
                    draft: n
                }
            }),
            v(t.parent_id, 1),
            v(t.parent_id, 2);
    }
}
function L(e) {
    !e.isSwitchingAccount && (m = {});
}
function b(e) {
    e.userId in m && delete m[e.userId];
}
function D() {
    for (let [e, t] of d.default.entries(m))
        for (let [n, r] of d.default.entries(t)) {
            let t = r[0];
            null != t && ('' === t.draft || '' === t.draft.trim()) && v(n, 0, e);
        }
}
class M extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        (m = null != e ? e : {}), D(), this.waitFor(_.default, E.Z, f.Z);
    }
    getState() {
        return m;
    }
    getThreadDraftWithParentMessageId(e) {
        let t = _.default.getId();
        if (null == t) return;
        let n = T(t),
            r = d.default.keys(n).find((t) => {
                let n = this.getThreadSettings(t);
                return (null == n ? void 0 : n.parentMessageId) === e;
            });
        return null != r ? this.getThreadSettings(r) : void 0;
    }
    getRecentlyEditedDrafts(e) {
        let t = _.default.getId();
        if (null == t) return [];
        let n = T(t);
        return s()(n)
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
        let n = _.default.getId();
        if (null == n) return '';
        let r = T(n)[e];
        if (null != r) {
            let e = r[t];
            if (null != e) return e.draft;
        }
        return '';
    }
    getThreadSettings(e) {
        let t = _.default.getId();
        if (null == t) return null;
        let n = T(t)[e];
        return null == n ? null : n[1];
    }
}
h(M, 'displayName', 'DraftStore'),
    h(M, 'persistKey', 'DraftStore'),
    h(M, 'migrations', [
        (e) => {
            if (null == e) return {};
            for (let t in e) 'timestamp' in e[t] && (e[t] = { 0: e[t] });
            return e;
        },
        (e) => {
            let t = _.default.getId();
            if (null == e || null == t) return {};
            let n = {},
                r = (n[t] = {});
            for (let t in e) r[t] = e[t];
            return n;
        }
    ]),
    (t.Z = new M(u.Z, {
        CONNECTION_OPEN: O,
        LOGOUT: L,
        MULTI_ACCOUNT_REMOVE_ACCOUNT: b,
        GUILD_DELETE: R,
        CHANNEL_DELETE: C,
        THREAD_DELETE: C,
        THREAD_CREATE: y,
        DRAFT_SAVE: g,
        DRAFT_CHANGE: g,
        DRAFT_CLEAR: S,
        THREAD_SETTINGS_DRAFT_CHANGE: A
    }));
