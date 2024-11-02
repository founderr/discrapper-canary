n(47120);
var i,
    l,
    r,
    a,
    o = n(442837),
    s = n(570140),
    c = n(131704),
    u = n(251625),
    d = n(592125),
    h = n(306680),
    p = n(944486),
    f = n(55589);
let m = [];
function g() {
    let e = f.Z.getPrivateChannelIds().filter((e) => h.ZP.getMentionCount(e) > 0);
    return e.length > 20 && (e.length = 20), !(0, u.EF)(e, m) && ((m = e), !0);
}
function C() {
    return g();
}
function _(e) {
    let { channelId: t } = e,
        n = d.Z.getChannel(t);
    return !!(null != n && (0, c.hv)(n.type)) && g();
}
class x extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, d.Z, p.Z, h.ZP);
    }
    getUnreadPrivateChannelIds() {
        return m;
    }
}
(a = 'PrivateChannelReadStateStore'),
    (r = 'displayName') in (l = x)
        ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = a),
    (t.Z = new x(s.Z, {
        CONNECTION_OPEN: C,
        OVERLAY_INITIALIZE: C,
        MESSAGE_CREATE: _,
        MESSAGE_ACK: _,
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e,
                n = d.Z.getChannel(t);
            return !!(null != n && (0, c.hv)(n.type)) && g();
        },
        CHANNEL_DELETE: function (e) {
            let {
                    channel: { id: t }
                } = e,
                n = d.Z.getChannel(t);
            return !!(null != n && (0, c.hv)(n.type)) && g();
        },
        WINDOW_FOCUS: function () {
            let e = d.Z.getChannel(p.Z.getChannelId());
            return !!(null != e && (0, c.hv)(e.type)) && g();
        },
        CHANNEL_CREATE: function (e) {
            let {
                    channel: { id: t }
                } = e,
                n = d.Z.getChannel(t);
            return !!(null != n && (0, c.hv)(n.type)) && g();
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e,
                n = !1;
            for (let { id: e } of t) {
                let t = d.Z.getChannel(e);
                null != t && (0, c.hv)(t.type) && (n = !0);
            }
            return !!n && g();
        }
    }));
