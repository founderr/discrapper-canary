let o, r, a;
n(47120), n(653041);
var i, l, d, c, u, f, s = n(913527), _ = n.n(s), h = n(442837), b = n(759174), p = n(570140), I = n(57132), m = n(781157), E = n(355298), T = n(333984), g = n(131704), C = n(592125), S = n(430824), v = n(306680), y = n(9156), A = n(594174), w = n(709054), N = n(176505);
(d = i || (i = {})).DEFAULT = 'DEFAULT', d.FAVORITE = 'FAVORITE';
let O = new b.h(e => {
    let {
        isRequest: t,
        isFavorite: n
    } = e;
    return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
}, e => {
    let {lastMessageId: t} = e;
    return -t;
});
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function (e) {
        var t, n;
        let o = null !== (n = null !== (t = v.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id, r = e.isMessageRequestTimestamp;
        if (null != r) {
            let e = _()(r).valueOf(), t = w.default.fromTimestamp(e);
            return w.default.compare(o, t) > 0 ? o : t;
        }
        return o;
    }(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: y.ZP.isMessagesFavorite(e.id) && (0, I.cn)(),
        isRequest: E.Z.isMessageRequest(e.id) || T.Z.isSpam(e.id)
    };
}
function R() {
    O.clear(), Object.values(C.Z.getMutablePrivateChannels()).forEach(e => {
        O.set(e.id, L(e));
    }), (0, I.cn)() && (0, m.x7)() && y.ZP.getAddedToMessages().forEach(e => {
        let t = C.Z.getChannel(e);
        null != t && (0, g.zi)(t.type) && O.set(t.id, L(t));
    });
}
function P() {
    let e = C.Z.getMutablePrivateChannels();
    for (let t in e)
        O.set(t, L(e[t]));
}
let Z = (o = [], r = [], a = [], () => {
    let e = O.values('FAVORITE'), t = O.values('DEFAULT');
    return (o !== e || r !== t) && (a = [], e.forEach(e => {
        let {channelId: t} = e;
        return a.push(t);
    }), o = e, t.forEach(e => {
        let {channelId: t} = e;
        return a.push(t);
    }), r = t), a;
});
class D extends (l = h.ZP.Store) {
    initialize() {
        this.waitFor(C.Z, S.Z, A.default, E.Z, y.ZP), this.syncWith([
            y.ZP,
            E.Z
        ], R);
    }
    getPrivateChannelIds() {
        return Z();
    }
    getSortedChannels() {
        return [
            O.values('FAVORITE'),
            O.values('DEFAULT')
        ];
    }
    serializeForOverlay() {
        let e = {};
        return O.values().forEach(t => {
            let {
                channelId: n,
                lastMessageId: o
            } = t;
            e[n] = o;
        }), e;
    }
}
f = 'PrivateChannelSortStore', (u = 'displayName') in (c = D) ? Object.defineProperty(c, u, {
    value: f,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : c[u] = f, t.Z = new D(p.Z, {
    CONNECTION_OPEN: R,
    CONNECTION_OPEN_SUPPLEMENTAL: R,
    OVERLAY_INITIALIZE: R,
    CACHE_LOADED: P,
    CACHE_LOADED_LAZY: P,
    CHANNEL_UPDATES: function (e) {
        let {channels: t} = e;
        t.forEach(e => {
            ((0, g.hv)(e.type) || O.has(e.id)) && O.set(e.id, L(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let {channel: t} = e;
        if (!(0, g.hv)(t.type) || t.id === N.V)
            return !1;
        O.set(t.id, L(t));
    },
    CHANNEL_DELETE: function (e) {
        let {channel: t} = e;
        return O.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let {
            channelId: t,
            message: n
        } = e;
        if (!O.has(t))
            return !1;
        let o = C.Z.getChannel(t);
        return null != o && O.set(t, L(o, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return O.delete(t);
    },
    LOGOUT: function () {
        O.clear();
    }
});
