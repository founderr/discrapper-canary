var i,
    a,
    s,
    l,
    r = t(442837),
    o = t(570140);
let u = {};
class d extends (l = r.ZP.Store) {
    getOptions(e) {
        return u[e];
    }
}
(s = 'SendMessageOptionsStore'),
    (a = 'displayName') in (i = d)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (n.Z = new d(o.Z, {
        MESSAGE_CREATE: function (e) {
            let { message: n, sendMessageOptions: t } = e;
            null != t && (u[n.id] = t), null != n.nonce && n.nonce in u && delete u[n.nonce];
        }
    }));
