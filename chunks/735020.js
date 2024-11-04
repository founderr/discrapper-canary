n(724458);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(786761),
    c = n(651530),
    d = n(247206);
let f = {};
function _(e) {
    return ''.concat(e.channel_id, ':').concat(e.id);
}
function h(e) {
    return (
        !!(0, c.Kh)() &&
        null != e.messages &&
        ((f = e.messages.reduce(
            (e, t) => (
                t.forEach((t) => {
                    e[_(t)] = (0, u.e5)(t);
                }),
                e
            ),
            {}
        )),
        !0)
    );
}
function p() {
    f = {};
}
class m extends (r = o.ZP.Store) {
    getMessage(e, t) {
        return f[
            _({
                id: e,
                channel_id: t
            })
        ];
    }
}
(s = 'SearchMessageStore'),
    (a = 'displayName') in (i = m)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new m(l.Z, {
        SEARCH_FINISH: h,
        MOD_VIEW_SEARCH_FINISH: h,
        MESSAGE_UPDATE: function (e) {
            let { message: t } = e;
            if (!(0, c.Kh)() || null == t.id || null == t.channel_id) return !1;
            let n = _(t),
                r = f[n];
            return (
                null != r &&
                ((f[n] = (0, u.wi)(r, {
                    attachments: t.attachments,
                    embeds: t.embeds
                })),
                !0)
            );
        },
        LOGOUT: function () {
            (function () {
                f = {};
            })();
        },
        CONNECTION_OPEN: function () {
            (function () {
                f = {};
            })();
        },
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
            let { messageId: t, channelId: n } = e,
                r = _({
                    id: t,
                    channel_id: n
                }),
                i = f[r];
            null != i && (f[r] = (0, d.Cm)(i));
        }
    }));
