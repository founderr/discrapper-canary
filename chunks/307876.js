r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(232567),
    a = r(147913),
    s = r(592125),
    o = r(944486),
    l = r(594174),
    u = r(894257),
    c = r(981631);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = !1;
function _(e) {
    if (__OVERLAY__) return;
    let n = l.default.getCurrentUser();
    if (null == n) return;
    let r = o.Z.getChannelId(),
        i = s.Z.getDMFromUserId(u.I);
    if (!n.hasUrgentMessages() || i === r) return h({ channelId: r });
    !f && ((f = !0), e());
}
function h(e) {
    let { channelId: n } = e,
        r = l.default.getCurrentUser(),
        a = n === s.Z.getDMFromUserId(u.I);
    null != r && r.hasUrgentMessages() && a && ((f = !1), i.mB(c.xW$.HAS_UNREAD_URGENT_MESSAGES, !1));
}
class p extends a.Z {
    constructor(e) {
        super(),
            d(this, 'handleShowUrgentMessageAlert', void 0),
            d(this, 'actions', void 0),
            (this.handleShowUrgentMessageAlert = e),
            (this.actions = {
                POST_CONNECTION_OPEN: () => _(this.handleShowUrgentMessageAlert),
                MESSAGE_CREATE: () => _(this.handleShowUrgentMessageAlert),
                CHANNEL_SELECT: h
            });
    }
}
