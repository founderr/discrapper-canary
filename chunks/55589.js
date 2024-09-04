let i, r, o;
n(47120), n(653041);
var a,
    l,
    d,
    u,
    c,
    f,
    s = n(913527),
    _ = n.n(s),
    h = n(442837),
    b = n(759174),
    m = n(570140),
    p = n(355298),
    I = n(333984),
    E = n(131704),
    S = n(592125),
    g = n(430824),
    v = n(306680),
    T = n(9156),
    A = n(594174),
    C = n(709054),
    y = n(176505);
((d = a || (a = {})).DEFAULT = 'DEFAULT'), (d.FAVORITE = 'FAVORITE');
let O = new b.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -t;
    }
);
function F(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let i = null !== (n = null !== (t = v.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                      r = e.isMessageRequestTimestamp;
                  if (null != r) {
                      let e = _()(r).valueOf(),
                          t = C.default.fromTimestamp(e);
                      return C.default.compare(i, t) > 0 ? i : t;
                  }
                  return i;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: p.Z.isMessageRequest(e.id) || I.Z.isSpam(e.id)
    };
}
function w() {
    O.clear(),
        Object.values(S.Z.getMutablePrivateChannels()).forEach((e) => {
            O.set(e.id, F(e));
        });
}
function L() {
    let e = S.Z.getMutablePrivateChannels();
    for (let t in e) O.set(t, F(e[t]));
}
let N =
    ((i = []),
    (r = []),
    (o = []),
    () => {
        let e = O.values('FAVORITE'),
            t = O.values('DEFAULT');
        return (
            (i !== e || r !== t) &&
                ((o = []),
                e.forEach((e) => {
                    let { channelId: t } = e;
                    return o.push(t);
                }),
                (i = e),
                t.forEach((e) => {
                    let { channelId: t } = e;
                    return o.push(t);
                }),
                (r = t)),
            o
        );
    });
class R extends (l = h.ZP.Store) {
    initialize() {
        this.waitFor(S.Z, g.Z, A.default, p.Z, T.ZP), this.syncWith([T.ZP, p.Z], w);
    }
    getPrivateChannelIds() {
        return N();
    }
    getSortedChannels() {
        return [O.values('FAVORITE'), O.values('DEFAULT')];
    }
    serializeForOverlay() {
        let e = {};
        return (
            O.values().forEach((t) => {
                let { channelId: n, lastMessageId: i } = t;
                e[n] = i;
            }),
            e
        );
    }
}
(f = 'PrivateChannelSortStore'),
    (c = 'displayName') in (u = R)
        ? Object.defineProperty(u, c, {
              value: f,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[c] = f),
    (t.Z = new R(m.Z, {
        CONNECTION_OPEN: w,
        CONNECTION_OPEN_SUPPLEMENTAL: w,
        OVERLAY_INITIALIZE: w,
        CACHE_LOADED: L,
        CACHE_LOADED_LAZY: L,
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            t.forEach((e) => {
                ((0, E.hv)(e.type) || O.has(e.id)) && O.set(e.id, F(e));
            });
        },
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, E.hv)(t.type) || t.id === y.V) return !1;
            O.set(t.id, F(t));
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return O.delete(t.id);
        },
        MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e;
            if (!O.has(t)) return !1;
            let i = S.Z.getChannel(t);
            return null != i && O.set(t, F(i, n.id));
        },
        GUILD_CREATE: function (e) {
            let t = e.guild.id;
            return O.delete(t);
        },
        LOGOUT: function () {
            O.clear();
        }
    }));
