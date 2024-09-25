var r = n(47120);
var i = n(259443),
    a = n(442837),
    o = n(570140),
    s = n(443296),
    l = n(873741),
    u = n(592125),
    c = n(650774),
    d = n(866960),
    _ = n(626135),
    E = n(981631);
function f(e, t, n) {
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
let h = new i.Y('MessageRoundtripTrackerStore');
function p(e) {
    return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp;
}
function m(e) {
    let t = u.Z.getBasicChannel(e.channelId);
    if (null == t) {
        h.warn('Ignoring a messageData for channel '.concat(e.channelId, " because we can't find that channel."));
        return;
    }
    if (Math.random() > 0.1) return;
    let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        r = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
        i = (0, l.d)();
    _.default.track(E.rMx.SEND_MESSAGE_ROUNDTRIP, {
        ...(0, s.Z)(),
        api_latency_ms: n,
        gateway_latency_ms: r,
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.guild_id,
        guild_size: c.Z.getMemberCount(t.guild_id),
        mobile_network_type: d.Z.getType(),
        ...(null != i && { mobile_signal_strength_level: i })
    });
}
function I(e) {
    let { optimistic: t, message: n } = e,
        r = n.nonce;
    if (!t && null != r) g.recordGatewayResponse(r);
}
class T extends a.ZP.Store {
    recordMessageSendAttempt(e, t) {
        let n = {
            initialSendTimestamp: Date.now(),
            apiResponseTimestamp: null,
            gatewaySeenTimestamp: null,
            channelId: e
        };
        this.pendingMessages.set(t, n),
            setTimeout(() => {
                let e = this.pendingMessages.get(t);
                null != e && (m(e), this.pendingMessages.delete(t));
            }, 30000);
    }
    recordMessageSendApiResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = {
                ...t,
                apiResponseTimestamp: Date.now()
            };
            p(n) ? (m(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
    recordGatewayResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = {
                ...t,
                gatewaySeenTimestamp: Date.now()
            };
            p(n) ? (m(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
    constructor(...e) {
        super(...e), f(this, 'pendingMessages', new Map());
    }
}
let g = new T(o.Z, { MESSAGE_CREATE: I });
t.Z = g;
