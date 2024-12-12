n(47120);
var i,
    l,
    r,
    o,
    a = n(442837),
    s = n(570140),
    c = n(131704),
    d = n(251625),
    u = n(592125),
    h = n(306680),
    p = n(944486),
    m = n(55589);
let f = [];
function g() {
    let e = m.Z.getPrivateChannelIds().filter((e) => h.ZP.getMentionCount(e) > 0);
    return e.length > 20 && (e.length = 20), !(0, d.EF)(e, f) && ((f = e), !0);
}
function C() {
    return g();
}
function v(e) {
    let { channelId: t } = e,
        n = u.Z.getChannel(t);
    return !!(null != n && (0, c.hv)(n.type)) && g();
}
class _ extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, u.Z, p.Z, h.ZP);
    }
    getUnreadPrivateChannelIds() {
        return f;
    }
}
(o = 'PrivateChannelReadStateStore'),
    (r = 'displayName') in (l = _)
        ? Object.defineProperty(l, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = o),
    (t.Z = new _(s.Z, {
        CONNECTION_OPEN: C,
        OVERLAY_INITIALIZE: C,
        MESSAGE_CREATE: v,
        MESSAGE_ACK: v,
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e,
                n = u.Z.getChannel(t);
            return !!(null != n && (0, c.hv)(n.type)) && g();
        },
        CHANNEL_DELETE: function (e) {
            let {
                    channel: { id: t }
                } = e,
                n = u.Z.getChannel(t);
            return !!(null != n && (0, c.hv)(n.type)) && g();
        },
        WINDOW_FOCUS: function () {
            let e = u.Z.getChannel(p.Z.getChannelId());
            return !!(null != e && (0, c.hv)(e.type)) && g();
        },
        CHANNEL_CREATE: function (e) {
            let {
                    channel: { id: t }
                } = e,
                n = u.Z.getChannel(t);
            return !!(null != n && (0, c.hv)(n.type)) && g();
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e,
                n = !1;
            for (let { id: e } of t) {
                let t = u.Z.getChannel(e);
                null != t && (0, c.hv)(t.type) && (n = !0);
            }
            return !!n && g();
        }
    }));
