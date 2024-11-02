n.d(t, {
    PH: function () {
        return A;
    },
    sQ: function () {
        return y;
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
    f = n(271383),
    _ = n(594174),
    h = n(979651),
    p = n(709054),
    m = n(51144),
    g = n(981631);
function E(e, t, n) {
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
let v = Object.freeze([]),
    I = {};
function S(e) {
    let t = I[e];
    return null == t && ((t = new N(e)), (I[e] = t)), t;
}
function T(e, t) {
    return f.ZP.getMember(e, t.id);
}
function b(e, t, n) {
    var r;
    let i = null !== (r = null == t ? void 0 : t.nick) && void 0 !== r ? r : m.ZP.getName(n);
    return {
        member: t,
        comparator: y(e, i)
    };
}
function y(e, t) {
    return ''
        .concat(e.selfStream ? '\0' : '\x01')
        .concat(t.toLowerCase(), '\0')
        .concat(e.userId);
}
function A(e, t, n) {
    var r;
    let i = _.default.getUser(n),
        a = null == i;
    null == i &&
        (i = new u.Z({
            id: n,
            username: '...',
            discriminator: n.slice(-5, -1)
        }));
    let { member: s, comparator: o } = b(e, T(t, (r = i)), r),
        l = {
            voiceState: e,
            user: i,
            member: s,
            comparator: o,
            nick: null == s ? void 0 : s.nick
        };
    return a && (l._isPlaceholder = !0), l;
}
class N {
    updateVoiceState(e) {
        if (null != this._pending) return this._pending.add(e), !1;
        let t = h.Z.getVoiceState(this.guildId, e),
            n = this._voiceStates.get(e),
            r = _.default.getUser(e);
        if (null != t && null != r) {
            if (null == n) return this._voiceStates.set(e, A(t, this.guildId, e)), !0;
            if (n.voiceState !== t) {
                var i;
                let a = T(this.guildId, r),
                    s = null !== (i = null == a ? void 0 : a.nick) && void 0 !== i ? i : m.ZP.getName(r);
                return (
                    this._voiceStates.set(e, {
                        ...n,
                        member: a,
                        comparator: y(t, s),
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
            n = _.default.getUser(e);
        if (null != t && null != n) {
            var r, i;
            let a = T(this.guildId, n);
            if ((null == a ? void 0 : a.nick) !== (null === (r = t.member) || void 0 === r ? void 0 : r.nick) || (null == a ? void 0 : a.avatar) !== (null === (i = t.member) || void 0 === i ? void 0 : i.avatar)) {
                let { comparator: r } = b(t.voiceState, a, n);
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
                let n = _.default.getUser(t.user.id);
                return null != n && t.user !== n ? (this._voiceStates.set(n.id, A(t.voiceState, this.guildId, n.id)), !0) : e;
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
        return 0 === t.length ? v : t;
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
        E(this, 'guildId', void 0),
            E(this, '_pending', new Set()),
            E(
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
    return a().reduce(I, (e, t) => t.updateUsers() || e, !1);
}
function R() {
    I = {};
    let e = h.Z.getAllVoiceStates();
    p.default.keys(e).forEach((t) => {
        Object.keys(e[t]).forEach((e) => {
            S(null != t ? t : g.ME).updateVoiceState(e);
        });
    });
}
class O extends (r = s.ZP.Store) {
    initialize() {
        R(), this.waitFor(c.default, _.default, f.ZP, h.Z), this.syncWith([_.default], C);
    }
    getVoiceStates(e) {
        return S(null != e ? e : g.ME).getVoiceStates();
    }
    getAllVoiceStates() {
        return I;
    }
    getVoiceStatesForChannel(e) {
        let t = e.getGuildId(),
            n = e.id;
        return S(null != t ? t : g.ME).getVoiceStatesForChannel(n);
    }
    getVoiceStatesForChannelAlt(e, t) {
        return S(null != t ? t : g.ME).getVoiceStatesForChannel(e);
    }
    countVoiceStatesForChannel(e) {
        let t = d.Z.getChannel(e);
        if (null == t) return 0;
        let n = t.getGuildId();
        return S(null != n ? n : g.ME).countVoiceStatesForChannel(e);
    }
    getVoiceStateVersion(e) {
        return S(null != e ? e : g.ME).getVersion();
    }
}
E(O, 'displayName', 'SortedVoiceStateStore'),
    (t.ZP = new O(l.Z, {
        CONNECTION_OPEN: function () {
            I = {};
        },
        OVERLAY_INITIALIZE: function () {
            R();
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { guildId: t } = e,
                n = c.default.getId();
            return null != n && S(null != t ? t : g.ME).updateVoiceState(n);
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => {
                let { guildId: n, userId: r } = t;
                return S(null != n ? n : g.ME).updateVoiceState(r) || e;
            }, !1);
        },
        GUILD_MEMBER_UPDATE: function (e) {
            let { guildId: t, user: n } = e;
            return S(t).updateMember(n.id);
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            delete I[t.id];
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            delete I[t.id];
        },
        PASSIVE_UPDATE_V2: function (e) {
            var t, n;
            let r = !1,
                i = new Set(null === (t = I[e.guildId]) || void 0 === t ? void 0 : t.getUserIds()),
                a = new Set(null === (n = e.voiceStates) || void 0 === n ? void 0 : n.map((e) => e.userId)),
                s = new Set(e.removedVoiceStateUsers);
            for (let t of new Set([...i, ...a])) r = S(e.guildId).updateVoiceState(t) || r;
            for (let t of i) !s.has(t) && (r = S(e.guildId).updateMember(t) || r);
            return r;
        }
    }));
