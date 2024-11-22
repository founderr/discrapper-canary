let r;
n.d(t, {
    H: function () {
        return E;
    }
}),
    n(47120),
    n(733860);
var i,
    a,
    s,
    o,
    l = n(392711),
    u = n(442837),
    c = n(780384),
    d = n(570140),
    f = n(70956),
    _ = n(963838),
    p = n(354459);
let h = [],
    m = {},
    g = [],
    E = (e) => {
        null != e &&
            d.Z.dispatch({
                type: 'VOICE_CHANNEL_EFFECT_CLEAR',
                userId: e
            });
    },
    v = [],
    I = 10 * f.Z.Millis.SECOND,
    b = (0, l.debounce)(() => {
        let e = (0, _.cX)(g);
        c.uv.announce(e, 'polite'), (g = []);
    }, 500);
class T extends (i = u.ZP.Store) {
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
        return m[e];
    }
}
(o = 'VoiceChannelEffectsStore'),
    (s = 'displayName') in (a = T)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new T(d.Z, {
        VOICE_CHANNEL_EFFECT_CLEAR: (e) => {
            let { userId: t } = e;
            null != m[t] && delete m[t];
        },
        VOICE_CHANNEL_EFFECT_RECENT_EMOJI: (e) => {
            let { emoji: t } = e;
            if (null != t) h.unshift(t), (h = (0, l.uniqBy)(h, 'name')).length > p.e5 + 1 && h.pop();
        },
        VOICE_CHANNEL_EFFECT_SEND: (e) => {
            let { emoji: t, userId: n, animationType: r } = e;
            null != t &&
                null != r &&
                ((m[n] = {
                    emoji: t,
                    sentAt: Date.now(),
                    animationType: r
                }),
                (g = [
                    ...g,
                    {
                        emojiName: t.name,
                        userId: n
                    }
                ]),
                b());
        },
        VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
            let e = new Date();
            if ((v = [e, ...v].slice(0, 20)).length >= 20) {
                let t = v[v.length - 1],
                    n = e.getTime() - t.getTime();
                n < I && (r = new Date(e.getTime() + I - n));
            }
        },
        VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: (e) => {
            let { cooldownEndsAtMs: t } = e;
            r = new Date(Date.now() + t);
        }
    }));
