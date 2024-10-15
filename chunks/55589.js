let a, i, r;
t(47120), t(653041);
var o,
    c,
    l,
    s,
    u,
    d,
    _ = t(913527),
    I = t.n(_),
    f = t(442837),
    E = t(759174),
    N = t(570140),
    T = t(355298),
    S = t(333984),
    m = t(131704),
    h = t(592125),
    g = t(430824),
    O = t(306680),
    p = t(9156),
    v = t(594174),
    P = t(709054),
    C = t(176505);
((l = o || (o = {})).DEFAULT = 'DEFAULT'), (l.FAVORITE = 'FAVORITE');
let b = new E.h(
    (e) => {
        let { isRequest: n, isFavorite: t } = e;
        return n ? [] : [t ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: n } = e;
        return -n;
    }
);
function U(e) {
    let n =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var n, t;
                  let a = null !== (t = null !== (n = O.ZP.lastMessageId(e.id)) && void 0 !== n ? n : e.lastMessageId) && void 0 !== t ? t : e.id,
                      i = e.isMessageRequestTimestamp;
                  if (null != i) {
                      let e = I()(i).valueOf(),
                          n = P.default.fromTimestamp(e);
                      return P.default.compare(a, n) > 0 ? a : n;
                  }
                  return a;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: n,
        isFavorite: !1,
        isRequest: T.Z.isMessageRequest(e.id) || S.Z.isSpam(e.id)
    };
}
function M() {
    b.clear(),
        Object.values(h.Z.getMutablePrivateChannels()).forEach((e) => {
            b.set(e.id, U(e));
        });
}
function R() {
    let e = h.Z.getMutablePrivateChannels();
    for (let n in e) b.set(n, U(e[n]));
}
let x =
    ((a = []),
    (i = []),
    (r = []),
    () => {
        let e = b.values('FAVORITE'),
            n = b.values('DEFAULT');
        return (
            (a !== e || i !== n) &&
                ((r = []),
                e.forEach((e) => {
                    let { channelId: n } = e;
                    return r.push(n);
                }),
                (a = e),
                n.forEach((e) => {
                    let { channelId: n } = e;
                    return r.push(n);
                }),
                (i = n)),
            r
        );
    });
class A extends (c = f.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, g.Z, v.default, T.Z, p.ZP), this.syncWith([p.ZP, T.Z], M);
    }
    getPrivateChannelIds() {
        return x();
    }
    getSortedChannels() {
        return [b.values('FAVORITE'), b.values('DEFAULT')];
    }
    serializeForOverlay() {
        let e = {};
        return (
            b.values().forEach((n) => {
                let { channelId: t, lastMessageId: a } = n;
                e[t] = a;
            }),
            e
        );
    }
}
(d = 'PrivateChannelSortStore'),
    (u = 'displayName') in (s = A)
        ? Object.defineProperty(s, u, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[u] = d),
    (n.Z = new A(N.Z, {
        CONNECTION_OPEN: M,
        CONNECTION_OPEN_SUPPLEMENTAL: M,
        OVERLAY_INITIALIZE: M,
        CACHE_LOADED: R,
        CACHE_LOADED_LAZY: R,
        CHANNEL_UPDATES: function (e) {
            let { channels: n } = e;
            n.forEach((e) => {
                ((0, m.hv)(e.type) || b.has(e.id)) && b.set(e.id, U(e));
            });
        },
        CHANNEL_CREATE: function (e) {
            let { channel: n } = e;
            if (!(0, m.hv)(n.type) || n.id === C.V) return !1;
            b.set(n.id, U(n));
        },
        CHANNEL_DELETE: function (e) {
            let { channel: n } = e;
            return b.delete(n.id);
        },
        MESSAGE_CREATE: function (e) {
            let { channelId: n, message: t } = e;
            if (!b.has(n)) return !1;
            let a = h.Z.getChannel(n);
            return null != a && b.set(n, U(a, t.id));
        },
        GUILD_CREATE: function (e) {
            let n = e.guild.id;
            return b.delete(n);
        },
        LOGOUT: function () {
            b.clear();
        }
    }));
