let i, r, a;
n(47120), n(653041);
var o,
    d,
    f,
    c,
    l,
    s,
    u = n(913527),
    _ = n.n(u),
    h = n(442837),
    b = n(759174),
    p = n(570140),
    I = n(355298),
    m = n(333984),
    E = n(131704),
    v = n(592125),
    g = n(430824),
    A = n(306680),
    S = n(9156),
    C = n(594174),
    F = n(709054),
    y = n(176505);
((f = o || (o = {})).DEFAULT = 'DEFAULT'), (f.FAVORITE = 'FAVORITE');
let R = new b.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -t;
    }
);
function T(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let i = null !== (n = null !== (t = A.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                      r = e.isMessageRequestTimestamp;
                  if (null != r) {
                      let e = _()(r).valueOf(),
                          t = F.default.fromTimestamp(e);
                      return F.default.compare(i, t) > 0 ? i : t;
                  }
                  return i;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: I.Z.isMessageRequest(e.id) || m.Z.isSpam(e.id)
    };
}
function w() {
    R.clear(),
        Object.values(v.Z.getMutablePrivateChannels()).forEach((e) => {
            R.set(e.id, T(e));
        });
}
function L() {
    let e = v.Z.getMutablePrivateChannels();
    for (let t in e) R.set(t, T(e[t]));
}
let U =
    ((i = []),
    (r = []),
    (a = []),
    () => {
        let e = R.values('FAVORITE'),
            t = R.values('DEFAULT');
        return (
            (i !== e || r !== t) &&
                ((a = []),
                e.forEach((e) => {
                    let { channelId: t } = e;
                    return a.push(t);
                }),
                (i = e),
                t.forEach((e) => {
                    let { channelId: t } = e;
                    return a.push(t);
                }),
                (r = t)),
            a
        );
    });
class N extends (d = h.ZP.Store) {
    initialize() {
        this.waitFor(v.Z, g.Z, C.default, I.Z, S.ZP), this.syncWith([S.ZP, I.Z], w);
    }
    getPrivateChannelIds() {
        return U();
    }
    getSortedChannels() {
        return [R.values('FAVORITE'), R.values('DEFAULT')];
    }
    serializeForOverlay() {
        let e = {};
        return (
            R.values().forEach((t) => {
                let { channelId: n, lastMessageId: i } = t;
                e[n] = i;
            }),
            e
        );
    }
}
(s = 'PrivateChannelSortStore'),
    (l = 'displayName') in (c = N)
        ? Object.defineProperty(c, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[l] = s),
    (t.Z = new N(p.Z, {
        CONNECTION_OPEN: w,
        CONNECTION_OPEN_SUPPLEMENTAL: w,
        OVERLAY_INITIALIZE: w,
        CACHE_LOADED: L,
        CACHE_LOADED_LAZY: L,
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            t.forEach((e) => {
                ((0, E.hv)(e.type) || R.has(e.id)) && R.set(e.id, T(e));
            });
        },
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, E.hv)(t.type) || t.id === y.V) return !1;
            R.set(t.id, T(t));
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return R.delete(t.id);
        },
        MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e;
            if (!R.has(t)) return !1;
            let i = v.Z.getChannel(t);
            return null != i && R.set(t, T(i, n.id));
        },
        GUILD_CREATE: function (e) {
            let t = e.guild.id;
            return R.delete(t);
        },
        LOGOUT: function () {
            R.clear();
        }
    }));
