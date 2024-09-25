n.d(t, {
    S: function () {
        return r;
    }
});
var r,
    i,
    a = n(47120);
var o = n(442837),
    s = n(846519),
    l = n(570140),
    u = n(70956),
    c = n(592125),
    d = n(496675),
    _ = n(981631);
function E(e, t, n) {
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
let f = 100;
!(function (e) {
    (e[(e.SendMessage = 0)] = 'SendMessage'), (e[(e.CreateThread = 1)] = 'CreateThread');
})(r || (r = {}));
let h = {
    0: {},
    1: {}
};
function p(e, t, n) {
    if ((m(e, t), T(e, t) || n <= 0)) return;
    let r = n + Date.now();
    (h[t][e.id] = {
        rateLimitPerUser: e.rateLimitPerUser,
        cooldownMs: n,
        cooldownEndTimestamp: r,
        timer: new s.V7()
    }),
        h[t][e.id].timer.start(
            1000,
            () => {
                l.Z.dispatch({
                    type: 'SLOWMODE_SET_COOLDOWN',
                    channelId: e.id,
                    slowmodeType: t,
                    cooldownMs: Math.max(r - Date.now(), 0)
                });
            },
            !0
        );
}
function m(e, t) {
    null != h[t][e.id] && (h[t][e.id].timer.stop(), delete h[t][e.id]);
}
function I(e, t) {
    let n = c.Z.getChannel(e);
    if (null == n) return !1;
    p(n, t, 0 === n.rateLimitPerUser ? 0 : n.rateLimitPerUser * u.Z.Millis.SECOND + f);
}
function T(e, t) {
    return 0 === t ? d.Z.can(_.Plq.MANAGE_CHANNELS, e) || d.Z.can(_.Plq.MANAGE_MESSAGES, e) : d.Z.can(_.Plq.MANAGE_THREADS, e);
}
function g(e) {
    let { channelId: t } = e;
    return I(t, 0);
}
function S(e) {
    let { file: t } = e,
        n = c.Z.getChannel(t.channelId);
    return null != n && p(n, 0, 0);
}
function A(e) {
    let { channelId: t, slowmodeType: n } = e;
    return I(t, n);
}
function v(e) {
    let { channelId: t, slowmodeType: n, cooldownMs: r } = e,
        i = c.Z.getChannel(t);
    if (null == i) return !1;
    p(i, n, 0 === r ? 0 : r + f);
}
function N(e) {
    let { channels: t } = e;
    [0, 1].forEach((e) => {
        for (let r of t) {
            var n;
            let t = h[e][r.id],
                i = r.rateLimitPerUser;
            if (null != t && t.rateLimitPerUser !== i) p(r, e, Math.min(null !== (n = null == t ? void 0 : t.cooldownMs) && void 0 !== n ? n : 0, i * u.Z.Millis.SECOND));
        }
    });
}
function O() {
    [0, 1].forEach((e) => {
        Object.keys(h[e]).forEach((t) => h[e][t].timer.stop()), (h[e] = {});
    });
}
class R extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    getSlowmodeCooldownGuess(e, t) {
        let n = h[null != t ? t : 0][e];
        return null != n ? n.cooldownMs : 0;
    }
}
E(R, 'displayName', 'SlowmodeStore'),
    (t.Z = new R(l.Z, {
        SLOWMODE_RESET_COOLDOWN: A,
        SLOWMODE_SET_COOLDOWN: v,
        UPLOAD_START: g,
        UPLOAD_FAIL: S,
        UPLOAD_CANCEL_REQUEST: S,
        CHANNEL_UPDATES: N,
        LOGOUT: O
    }));
