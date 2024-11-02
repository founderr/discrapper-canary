n.d(t, {
    S: function () {
        return r;
    }
}),
    n(47120);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(442837),
    c = n(846519),
    d = n(570140),
    f = n(70956),
    _ = n(592125),
    h = n(496675),
    p = n(981631);
((a = r || (r = {}))[(a.SendMessage = 0)] = 'SendMessage'), (a[(a.CreateThread = 1)] = 'CreateThread');
let m = {
    0: {},
    1: {}
};
function g(e, t, n) {
    if (
        ((function (e, t) {
            null != m[t][e.id] && (m[t][e.id].timer.stop(), delete m[t][e.id]);
        })(e, t),
        (function (e, t) {
            return 0 === t ? h.Z.can(p.Plq.MANAGE_CHANNELS, e) || h.Z.can(p.Plq.MANAGE_MESSAGES, e) : h.Z.can(p.Plq.MANAGE_THREADS, e);
        })(e, t) || n <= 0)
    )
        return;
    let r = n + Date.now();
    (m[t][e.id] = {
        rateLimitPerUser: e.rateLimitPerUser,
        cooldownMs: n,
        cooldownEndTimestamp: r,
        timer: new c.V7()
    }),
        m[t][e.id].timer.start(
            1000,
            () => {
                d.Z.dispatch({
                    type: 'SLOWMODE_SET_COOLDOWN',
                    channelId: e.id,
                    slowmodeType: t,
                    cooldownMs: Math.max(r - Date.now(), 0)
                });
            },
            !0
        );
}
function E(e, t) {
    let n = _.Z.getChannel(e);
    if (null == n) return !1;
    g(n, t, 0 === n.rateLimitPerUser ? 0 : n.rateLimitPerUser * f.Z.Millis.SECOND + 100);
}
function v(e) {
    let { file: t } = e,
        n = _.Z.getChannel(t.channelId);
    return null != n && g(n, 0, 0);
}
class I extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(_.Z);
    }
    getSlowmodeCooldownGuess(e, t) {
        let n = m[null != t ? t : 0][e];
        return null != n ? n.cooldownMs : 0;
    }
}
(l = 'SlowmodeStore'),
    (o = 'displayName') in (s = I)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.Z = new I(d.Z, {
        SLOWMODE_RESET_COOLDOWN: function (e) {
            let { channelId: t, slowmodeType: n } = e;
            return E(t, n);
        },
        SLOWMODE_SET_COOLDOWN: function (e) {
            let { channelId: t, slowmodeType: n, cooldownMs: r } = e,
                i = _.Z.getChannel(t);
            if (null == i) return !1;
            g(i, n, 0 === r ? 0 : r + 100);
        },
        UPLOAD_START: function (e) {
            let { channelId: t } = e;
            return E(t, 0);
        },
        UPLOAD_FAIL: v,
        UPLOAD_CANCEL_REQUEST: v,
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            [0, 1].forEach((e) => {
                for (let r of t) {
                    var n;
                    let t = m[e][r.id],
                        i = r.rateLimitPerUser;
                    if (null != t && t.rateLimitPerUser !== i) g(r, e, Math.min(null !== (n = null == t ? void 0 : t.cooldownMs) && void 0 !== n ? n : 0, i * f.Z.Millis.SECOND));
                }
            });
        },
        LOGOUT: function () {
            [0, 1].forEach((e) => {
                Object.keys(m[e]).forEach((t) => m[e][t].timer.stop()), (m[e] = {});
            });
        }
    }));
