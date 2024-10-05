n.d(t, {
    PH: function () {
        return R;
    },
    sQ: function () {
        return O;
    }
}),
    n(47120),
    n(724458);
var r,
    i = n(392711),
    a = n.n(i),
    s = n(442837),
    o = n(759174),
    l = n(570140),
    u = n(598077),
    c = n(314897),
    d = n(592125),
    _ = n(271383),
    E = n(594174),
    f = n(979651),
    h = n(709054),
    p = n(51144),
    I = n(981631);
function m(e, t, n) {
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
let T = Object.freeze([]),
    S = {};
function g(e) {
    let t = S[e];
    return null == t && ((t = new v(e)), (S[e] = t)), t;
}
function A(e, t) {
    return _.ZP.getMember(e, t.id);
}
function N(e, t, n) {
    var r;
    let i = null !== (r = null == t ? void 0 : t.nick) && void 0 !== r ? r : p.ZP.getName(n);
    return {
        member: t,
        comparator: O(e, i)
    };
}
function O(e, t) {
    return ''
        .concat(e.selfStream ? '\0' : '\x01')
        .concat(t.toLowerCase(), '\0')
        .concat(e.userId);
}
function R(e, t, n) {
    var r;
    let i = E.default.getUser(n),
        a = null == i;
    null == i &&
        (i = new u.Z({
            id: n,
            username: '...',
            discriminator: n.slice(-5, -1)
        }));
    let { member: s, comparator: o } = N(e, A(t, (r = i)), r),
        l = {
            voiceState: e,
            user: i,
            member: s,
            comparator: o,
            nick: null == s ? void 0 : s.nick
        };
    return a && (l._isPlaceholder = !0), l;
}
class v {
    updateVoiceState(e) {
        if (null != this._pending) return this._pending.add(e), !1;
        let t = f.Z.getVoiceState(this.guildId, e),
            n = this._voiceStates.get(e),
            r = E.default.getUser(e);
        if (null != t && null != r) {
            if (null == n) return this._voiceStates.set(e, R(t, this.guildId, e)), !0;
            if (n.voiceState !== t) {
                var i;
                let a = A(this.guildId, r),
                    s = null !== (i = null == a ? void 0 : a.nick) && void 0 !== i ? i : p.ZP.getName(r);
                return (
                    this._voiceStates.set(e, {
                        ...n,
                        member: a,
                        comparator: O(t, s),
                        nick: s,
                        voiceState: t
                    }),
                    !0
                );
            }
        } else if (null != n) return this._voiceStates.delete(e), !0;
        return !1;
    }
    updateMember(e) {
        if (null != this._pending) return this._pending.add(e), !1;
        let t = this._voiceStates.get(e),
            n = E.default.getUser(e);
        if (null != t && null != n) {
            var r, i;
            let a = A(this.guildId, n);
            if ((null == a ? void 0 : a.nick) !== (null === (r = t.member) || void 0 === r ? void 0 : r.nick) || (null == a ? void 0 : a.avatar) !== (null === (i = t.member) || void 0 === i ? void 0 : i.avatar)) {
                let { comparator: r } = N(t.voiceState, a, n);
                return (
                    this._voiceStates.set(e, {
                        ...t,
                        member: a,
                        comparator: r,
                        nick: null == a ? void 0 : a.nick
                    }),
                    !0
                );
            }
        }
        return !1;
    }
    updateUsers() {
        return (
            null == this._pending &&
            this._voiceStates.values().reduce((e, t) => {
                let n = E.default.getUser(t.user.id);
                return null != n && t.user !== n ? (this._voiceStates.set(n.id, R(t.voiceState, this.guildId, n.id)), !0) : e;
            }, !1)
        );
    }
    getUserIds() {
        return this.processPending(), this._voiceStates.keys();
    }
    getVoiceStates() {
        return this.processPending(), this._voiceStates.indexes();
    }
    getVoiceStatesForChannel(e) {
        this.processPending();
        let t = this._voiceStates.values(e);
        return 0 === t.length ? T : t;
    }
    countVoiceStatesForChannel(e) {
        return this.processPending(), this._voiceStates.size(e);
    }
    getVersion() {
        return this.processPending(), this._voiceStates.version;
    }
    processPending() {
        if (null != this._pending) {
            let e = this._pending;
            (this._pending = void 0), e.forEach((e) => this.updateVoiceState(e));
        }
    }
    constructor(e) {
        m(this, 'guildId', void 0),
            m(this, '_pending', new Set()),
            m(
                this,
                '_voiceStates',
                new o.h(
                    (e) => {
                        let {
                            voiceState: { channelId: t }
                        } = e;
                        return null != t ? [t] : [];
                    },
                    (e) => {
                        let { comparator: t } = e;
                        return t;
                    }
                )
            ),
            (this.guildId = e);
    }
}
function C() {
    return a().reduce(S, (e, t) => t.updateUsers() || e, !1);
}
function L() {
    S = {};
    let e = f.Z.getAllVoiceStates();
    h.default.keys(e).forEach((t) => {
        Object.keys(e[t]).forEach((e) => {
            g(null != t ? t : I.ME).updateVoiceState(e);
        });
    });
}
class D extends (r = s.ZP.Store) {
    initialize() {
        L(), this.waitFor(c.default, E.default, _.ZP, f.Z), this.syncWith([E.default], C);
    }
    getVoiceStates(e) {
        return g(null != e ? e : I.ME).getVoiceStates();
    }
    getAllVoiceStates() {
        return S;
    }
    getVoiceStatesForChannel(e) {
        let t = e.getGuildId(),
            n = e.id;
        return g(null != t ? t : I.ME).getVoiceStatesForChannel(n);
    }
    getVoiceStatesForChannelAlt(e, t) {
        return g(null != t ? t : I.ME).getVoiceStatesForChannel(e);
    }
    countVoiceStatesForChannel(e) {
        let t = d.Z.getChannel(e);
        if (null == t) return 0;
        let n = t.getGuildId();
        return g(null != n ? n : I.ME).countVoiceStatesForChannel(e);
    }
    getVoiceStateVersion(e) {
        return g(null != e ? e : I.ME).getVersion();
    }
}
m(D, 'displayName', 'SortedVoiceStateStore'),
    (t.ZP = new D(l.Z, {
        CONNECTION_OPEN: function () {
            S = {};
        },
        OVERLAY_INITIALIZE: function () {
            L();
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { guildId: t } = e,
                n = c.default.getId();
            return null != n && g(null != t ? t : I.ME).updateVoiceState(n);
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => {
                let { guildId: n, userId: r } = t;
                return g(null != n ? n : I.ME).updateVoiceState(r) || e;
            }, !1);
        },
        GUILD_MEMBER_UPDATE: function (e) {
            let { guildId: t, user: n } = e;
            return g(t).updateMember(n.id);
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            delete S[t.id];
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            delete S[t.id];
        },
        PASSIVE_UPDATE_V2: function (e) {
            var t, n;
            let r = !1,
                i = new Set(null === (t = S[e.guildId]) || void 0 === t ? void 0 : t.getUserIds()),
                a = new Set(null === (n = e.voiceStates) || void 0 === n ? void 0 : n.map((e) => e.userId)),
                s = new Set(e.removedVoiceStateUsers);
            for (let t of new Set([...i, ...a])) r = g(e.guildId).updateVoiceState(t) || r;
            for (let t of i) !s.has(t) && (r = g(e.guildId).updateMember(t) || r);
            return r;
        }
    }));
