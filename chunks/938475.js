n.d(t, {
    PH: function () {
        return y;
    },
    sQ: function () {
        return R;
    }
});
var r,
    i = n(47120);
var a = n(724458);
var o = n(392711),
    s = n.n(o),
    l = n(442837),
    u = n(759174),
    c = n(570140),
    d = n(598077),
    _ = n(314897),
    E = n(592125),
    f = n(271383),
    h = n(594174),
    p = n(979651),
    m = n(709054),
    I = n(51144),
    T = n(981631);
function g(e, t, n) {
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
let S = Object.freeze([]),
    A = {};
function v(e) {
    let t = A[e];
    return null == t && ((t = new b(e)), (A[e] = t)), t;
}
function N(e, t) {
    return f.ZP.getMember(e, t.id);
}
function O(e, t, n) {
    var r;
    let i = null !== (r = null == t ? void 0 : t.nick) && void 0 !== r ? r : I.ZP.getName(n);
    return {
        member: t,
        comparator: R(e, i)
    };
}
function R(e, t) {
    return ''
        .concat(e.selfStream ? '\0' : '\x01')
        .concat(t.toLowerCase(), '\0')
        .concat(e.userId);
}
function C(e, t, n) {
    return O(n, N(e, t), t);
}
function y(e, t, n) {
    let r = h.default.getUser(n),
        i = null == r;
    null == r &&
        (r = new d.Z({
            id: n,
            username: '...',
            discriminator: n.slice(-5, -1)
        }));
    let { member: a, comparator: o } = C(t, r, e),
        s = {
            voiceState: e,
            user: r,
            member: a,
            comparator: o,
            nick: null == a ? void 0 : a.nick
        };
    return i && (s._isPlaceholder = !0), s;
}
class b {
    updateVoiceState(e) {
        if (null != this._pending) return this._pending.add(e), !1;
        let t = p.Z.getVoiceState(this.guildId, e),
            n = this._voiceStates.get(e),
            r = h.default.getUser(e);
        if (null != t && null != r) {
            if (null == n) return this._voiceStates.set(e, y(t, this.guildId, e)), !0;
            if (n.voiceState !== t) {
                var i;
                let a = N(this.guildId, r),
                    o = null !== (i = null == a ? void 0 : a.nick) && void 0 !== i ? i : I.ZP.getName(r);
                return (
                    this._voiceStates.set(e, {
                        ...n,
                        member: a,
                        comparator: R(t, o),
                        nick: o,
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
            n = h.default.getUser(e);
        if (null != t && null != n) {
            var r, i;
            let a = N(this.guildId, n);
            if ((null == a ? void 0 : a.nick) !== (null === (r = t.member) || void 0 === r ? void 0 : r.nick) || (null == a ? void 0 : a.avatar) !== (null === (i = t.member) || void 0 === i ? void 0 : i.avatar)) {
                let { comparator: r } = O(t.voiceState, a, n);
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
                let n = h.default.getUser(t.user.id);
                return null != n && t.user !== n ? (this._voiceStates.set(n.id, y(t.voiceState, this.guildId, n.id)), !0) : e;
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
        return 0 === t.length ? S : t;
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
        g(this, 'guildId', void 0),
            g(this, '_pending', new Set()),
            g(
                this,
                '_voiceStates',
                new u.h(
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
function L() {
    A = {};
}
function D() {
    B();
}
function M(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { guildId: n, userId: r } = t;
        return v(null != n ? n : T.ME).updateVoiceState(r) || e;
    }, !1);
}
function P(e) {
    var t, n;
    let r = !1,
        i = new Set(null === (t = A[e.guildId]) || void 0 === t ? void 0 : t.getUserIds()),
        a = new Set(null === (n = e.voiceStates) || void 0 === n ? void 0 : n.map((e) => e.userId)),
        o = new Set(e.removedVoiceStateUsers);
    for (let t of new Set([...i, ...a])) r = v(e.guildId).updateVoiceState(t) || r;
    for (let t of i) !o.has(t) && (r = v(e.guildId).updateMember(t) || r);
    return r;
}
function U(e) {
    let { guildId: t } = e,
        n = _.default.getId();
    return null != n && v(null != t ? t : T.ME).updateVoiceState(n);
}
function w() {
    return s().reduce(A, (e, t) => t.updateUsers() || e, !1);
}
function x(e) {
    let { guildId: t, user: n } = e;
    return v(t).updateMember(n.id);
}
function G(e) {
    let { guild: t } = e;
    delete A[t.id];
}
function k(e) {
    let { guild: t } = e;
    delete A[t.id];
}
function B() {
    A = {};
    let e = p.Z.getAllVoiceStates();
    m.default.keys(e).forEach((t) => {
        Object.keys(e[t]).forEach((e) => {
            v(null != t ? t : T.ME).updateVoiceState(e);
        });
    });
}
class F extends (r = l.ZP.Store) {
    initialize() {
        B(), this.waitFor(_.default, h.default, f.ZP, p.Z), this.syncWith([h.default], w);
    }
    getVoiceStates(e) {
        return v(null != e ? e : T.ME).getVoiceStates();
    }
    getAllVoiceStates() {
        return A;
    }
    getVoiceStatesForChannel(e) {
        let t = e.getGuildId(),
            n = e.id;
        return v(null != t ? t : T.ME).getVoiceStatesForChannel(n);
    }
    getVoiceStatesForChannelAlt(e, t) {
        return v(null != t ? t : T.ME).getVoiceStatesForChannel(e);
    }
    countVoiceStatesForChannel(e) {
        let t = E.Z.getChannel(e);
        if (null == t) return 0;
        let n = t.getGuildId();
        return v(null != n ? n : T.ME).countVoiceStatesForChannel(e);
    }
    getVoiceStateVersion(e) {
        return v(null != e ? e : T.ME).getVersion();
    }
}
g(F, 'displayName', 'SortedVoiceStateStore'),
    (t.ZP = new F(c.Z, {
        CONNECTION_OPEN: L,
        OVERLAY_INITIALIZE: D,
        VOICE_CHANNEL_SELECT: U,
        VOICE_STATE_UPDATES: M,
        GUILD_MEMBER_UPDATE: x,
        GUILD_CREATE: G,
        GUILD_DELETE: k,
        PASSIVE_UPDATE_V2: P
    }));
