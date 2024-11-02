let i, a, r;
t(47120), t(653041);
var o,
    l,
    c,
    u,
    d,
    s,
    _ = t(913527),
    I = t.n(_),
    f = t(442837),
    T = t(759174),
    N = t(570140),
    m = t(355298),
    g = t(333984),
    h = t(131704),
    E = t(592125),
    p = t(430824),
    S = t(306680),
    O = t(9156),
    v = t(594174),
    P = t(709054),
    C = t(176505);
((c = o || (o = {})).DEFAULT = 'DEFAULT'), (c.FAVORITE = 'FAVORITE');
let b = new T.h(
    (e) => {
        let { isRequest: n, isFavorite: t } = e;
        return n ? [] : [t ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: n } = e;
        return -n;
    }
);
function x(e) {
    let n =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var n, t;
                  let i = null !== (t = null !== (n = S.ZP.lastMessageId(e.id)) && void 0 !== n ? n : e.lastMessageId) && void 0 !== t ? t : e.id,
                      a = e.isMessageRequestTimestamp;
                  if (null != a) {
                      let e = I()(a).valueOf(),
                          n = P.default.fromTimestamp(e);
                      return P.default.compare(i, n) > 0 ? i : n;
                  }
                  return i;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: n,
        isFavorite: !1,
        isRequest: m.Z.isMessageRequest(e.id) || g.Z.isSpam(e.id)
    };
}
function U() {
    b.clear(),
        Object.values(E.Z.getMutablePrivateChannels()).forEach((e) => {
            b.set(e.id, x(e));
        });
}
function D() {
    let e = E.Z.getMutablePrivateChannels();
    for (let n in e) b.set(n, x(e[n]));
}
let M =
    ((i = []),
    (a = []),
    (r = []),
    () => {
        let e = b.values('FAVORITE'),
            n = b.values('DEFAULT');
        return (
            (i !== e || a !== n) &&
                ((r = []),
                e.forEach((e) => {
                    let { channelId: n } = e;
                    return r.push(n);
                }),
                (i = e),
                n.forEach((e) => {
                    let { channelId: n } = e;
                    return r.push(n);
                }),
                (a = n)),
            r
        );
    });
class R extends (l = f.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, p.Z, v.default, m.Z, O.ZP), this.syncWith([O.ZP, m.Z], U);
    }
    getPrivateChannelIds() {
        return M();
    }
    getSortedChannels() {
        return [b.values('FAVORITE'), b.values('DEFAULT')];
    }
    serializeForOverlay() {
        let e = {};
        return (
            b.values().forEach((n) => {
                let { channelId: t, lastMessageId: i } = n;
                e[t] = i;
            }),
            e
        );
    }
}
(s = 'PrivateChannelSortStore'),
    (d = 'displayName') in (u = R)
        ? Object.defineProperty(u, d, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[d] = s),
    (n.Z = new R(N.Z, {
        CONNECTION_OPEN: U,
        CONNECTION_OPEN_SUPPLEMENTAL: U,
        OVERLAY_INITIALIZE: U,
        CACHE_LOADED: D,
        CACHE_LOADED_LAZY: D,
        CHANNEL_UPDATES: function (e) {
            let { channels: n } = e;
            n.forEach((e) => {
                ((0, h.hv)(e.type) || b.has(e.id)) && b.set(e.id, x(e));
            });
        },
        CHANNEL_CREATE: function (e) {
            let { channel: n } = e;
            if (!(0, h.hv)(n.type) || n.id === C.V) return !1;
            b.set(n.id, x(n));
        },
        CHANNEL_DELETE: function (e) {
            let { channel: n } = e;
            return b.delete(n.id);
        },
        MESSAGE_CREATE: function (e) {
            let { channelId: n, message: t } = e;
            if (!b.has(n)) return !1;
            let i = E.Z.getChannel(n);
            return null != i && b.set(n, x(i, t.id));
        },
        GUILD_CREATE: function (e) {
            let n = e.guild.id;
            return b.delete(n);
        },
        LOGOUT: function () {
            b.clear();
        }
    }));
