let o, r, a;
n(47120), n(653041);
var i, l, d, c, u, f, s = n(913527), _ = n.n(s), h = n(442837), b = n(759174), I = n(570140), p = n(355298), m = n(333984), E = n(131704), T = n(592125), S = n(430824), C = n(306680), g = n(9156), v = n(594174), y = n(709054), A = n(176505);
(d = i || (i = {})).DEFAULT = 'DEFAULT', d.FAVORITE = 'FAVORITE';
let w = new b.h(e => {
    let {
        isRequest: t,
        isFavorite: n
    } = e;
    return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
}, e => {
    let {lastMessageId: t} = e;
    return -t;
});
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function (e) {
        var t, n;
        let o = null !== (n = null !== (t = C.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id, r = e.isMessageRequestTimestamp;
        if (null != r) {
            let e = _()(r).valueOf(), t = y.default.fromTimestamp(e);
            return y.default.compare(o, t) > 0 ? o : t;
        }
        return o;
    }(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: p.Z.isMessageRequest(e.id) || m.Z.isSpam(e.id)
    };
}
function O() {
    w.clear(), Object.values(T.Z.getMutablePrivateChannels()).forEach(e => {
        w.set(e.id, N(e));
    });
}
function L() {
    let e = T.Z.getMutablePrivateChannels();
    for (let t in e)
        w.set(t, N(e[t]));
}
let R = (o = [], r = [], a = [], () => {
    let e = w.values('FAVORITE'), t = w.values('DEFAULT');
    return (o !== e || r !== t) && (a = [], e.forEach(e => {
        let {channelId: t} = e;
        return a.push(t);
    }), o = e, t.forEach(e => {
        let {channelId: t} = e;
        return a.push(t);
    }), r = t), a;
});
class P extends (l = h.ZP.Store) {
    initialize() {
        this.waitFor(T.Z, S.Z, v.default, p.Z, g.ZP), this.syncWith([
            g.ZP,
            p.Z
        ], O);
    }
    getPrivateChannelIds() {
        return R();
    }
    getSortedChannels() {
        return [
            w.values('FAVORITE'),
            w.values('DEFAULT')
        ];
    }
    serializeForOverlay() {
        let e = {};
        return w.values().forEach(t => {
            let {
                channelId: n,
                lastMessageId: o
            } = t;
            e[n] = o;
        }), e;
    }
}
f = 'PrivateChannelSortStore', (u = 'displayName') in (c = P) ? Object.defineProperty(c, u, {
    value: f,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : c[u] = f, t.Z = new P(I.Z, {
    CONNECTION_OPEN: O,
    CONNECTION_OPEN_SUPPLEMENTAL: O,
    OVERLAY_INITIALIZE: O,
    CACHE_LOADED: L,
    CACHE_LOADED_LAZY: L,
    CHANNEL_UPDATES: function (e) {
        let {channels: t} = e;
        t.forEach(e => {
            ((0, E.hv)(e.type) || w.has(e.id)) && w.set(e.id, N(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let {channel: t} = e;
        if (!(0, E.hv)(t.type) || t.id === A.V)
            return !1;
        w.set(t.id, N(t));
    },
    CHANNEL_DELETE: function (e) {
        let {channel: t} = e;
        return w.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let {
            channelId: t,
            message: n
        } = e;
        if (!w.has(t))
            return !1;
        let o = T.Z.getChannel(t);
        return null != o && w.set(t, N(o, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return w.delete(t);
    },
    LOGOUT: function () {
        w.clear();
    }
});
