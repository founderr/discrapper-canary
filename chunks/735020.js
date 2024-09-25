var r,
    i = n(724458);
var a = n(442837),
    o = n(570140),
    s = n(786761),
    l = n(651530),
    u = n(163268);
function c(e, t, n) {
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
let d = {};
function _(e) {
    return ''.concat(e.channel_id, ':').concat(e.id);
}
function E(e) {
    return (
        !!(0, l.Kh)() &&
        null != e.messages &&
        ((d = e.messages.reduce(
            (e, t) => (
                t.forEach((t) => {
                    e[_(t)] = (0, s.e5)(t);
                }),
                e
            ),
            {}
        )),
        !0)
    );
}
function f(e) {
    let { message: t } = e;
    if (!(0, l.Kh)() || null == t.id || null == t.channel_id) return !1;
    let n = _(t),
        r = d[n];
    return (
        null != r &&
        ((d[n] = (0, s.wi)(r, {
            attachments: t.attachments,
            embeds: t.embeds
        })),
        !0)
    );
}
function h(e) {
    let { messageId: t, channelId: n } = e,
        r = _({
            id: t,
            channel_id: n
        }),
        i = d[r];
    null != i && (d[r] = (0, u.Cm)(i));
}
function p() {
    I();
}
function m() {
    I();
}
function I() {
    d = {};
}
class T extends (r = a.ZP.Store) {
    getMessage(e, t) {
        return d[
            _({
                id: e,
                channel_id: t
            })
        ];
    }
}
c(T, 'displayName', 'SearchMessageStore'),
    (t.Z = new T(o.Z, {
        SEARCH_FINISH: E,
        MOD_VIEW_SEARCH_FINISH: E,
        MESSAGE_UPDATE: f,
        LOGOUT: p,
        CONNECTION_OPEN: m,
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: h
    }));
