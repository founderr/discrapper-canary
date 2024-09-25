let r;
n.d(t, {
    H: function () {
        return I;
    }
});
var i,
    a = n(47120);
var o = n(733860);
var s = n(392711);
var l = n(442837),
    u = n(780384),
    c = n(570140),
    d = n(70956),
    _ = n(963838),
    E = n(354459);
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
let h = [],
    p = {},
    m = [],
    I = (e) => {
        null != e &&
            c.Z.dispatch({
                type: 'VOICE_CHANNEL_EFFECT_CLEAR',
                userId: e
            });
    },
    T = [],
    g = 20,
    S = 10 * d.Z.Millis.SECOND,
    A = () => {
        let e = new Date();
        if ((T = [e, ...T].slice(0, g)).length >= g) {
            let t = T[T.length - 1],
                n = e.getTime() - t.getTime();
            n < S && (r = new Date(e.getTime() + S - n));
        }
    },
    v = (e) => {
        let { cooldownEndsAtMs: t } = e;
        r = new Date(Date.now() + t);
    },
    N = (0, s.debounce)(() => {
        let e = (0, _.cX)(m);
        u.uv.announce(e, 'polite'), (m = []);
    }, 500),
    O = (e) => {
        let { emoji: t, userId: n, animationType: r } = e;
        null != t &&
            null != r &&
            ((p[n] = {
                emoji: t,
                sentAt: Date.now(),
                animationType: r
            }),
            (m = [
                ...m,
                {
                    emojiName: t.name,
                    userId: n
                }
            ]),
            N());
    },
    R = (e) => {
        let { emoji: t } = e;
        if (null != t) h.unshift(t), (h = (0, s.uniqBy)(h, 'name')).length > E.e5 + 1 && h.pop();
    },
    C = (e) => {
        let { userId: t } = e;
        null != p[t] && delete p[t];
    };
class y extends (i = l.ZP.Store) {
    get recentlyUsedEmojis() {
        return h;
    }
    get isOnCooldown() {
        return null != r && new Date() < r;
    }
    get effectCooldownEndTime() {
        return r;
    }
    getEffectForUserId(e) {
        return p[e];
    }
}
f(y, 'displayName', 'VoiceChannelEffectsStore'),
    (t.Z = new y(c.Z, {
        VOICE_CHANNEL_EFFECT_CLEAR: C,
        VOICE_CHANNEL_EFFECT_RECENT_EMOJI: R,
        VOICE_CHANNEL_EFFECT_SEND: O,
        VOICE_CHANNEL_EFFECT_SENT_LOCAL: A,
        VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: v
    }));
