n.d(t, {
    Lx: function () {
        return N;
    },
    kq: function () {
        return v;
    },
    vy: function () {
        return A;
    },
    yX: function () {
        return r;
    }
});
var r,
    i = n(392711);
var a = n(544891),
    o = n(570140),
    s = n(100527),
    l = n(367907),
    u = n(339085),
    c = n(697426),
    d = n(100986),
    _ = n(944486),
    E = n(70956),
    f = n(176354),
    h = n(696900),
    p = n(456631),
    m = n(963838),
    I = n(353368),
    T = n(981631),
    g = n(710111);
function S(e) {
    let t = new AbortController(),
        n = (0, i.throttle)((n) => {
            _.Z.getVoiceChannelId() !== e && t.abort();
        }, 1000);
    return {
        abortController: t,
        onRequestProgress: n
    };
}
function A(e, t, n) {
    var r;
    let { abortController: i, onRequestProgress: o } = S(e),
        l = null !== (r = h.Z.getState().animationType) && void 0 !== r ? r : I.q.BASIC,
        u = {
            animation_type: l,
            animation_id: (0, m.Iu)(l, m.v)
        };
    a.tn
        .post({
            url: T.ANM.CUSTOM_CALL_SOUNDS(e),
            body: u,
            signal: i.signal,
            onRequestProgress: o
        })
        .then(T.VqG, () => {
            if (i.signal.aborted) return;
        }),
        (0, d.Z)([s.Z.CHANNEL_CALL], n, t, c.jy.ENTRY);
}
function v(e, t, n, r) {
    var i, o;
    let s = u.ZP.getCustomEmojiById(null !== (i = t.emojiId) && void 0 !== i ? i : ''),
        { abortController: l, onRequestProgress: _ } = S(e),
        E = {
            sound_id: t.soundId,
            emoji_id: t.emojiId,
            emoji_name: null !== (o = t.emojiName) && void 0 !== o ? o : null == s ? void 0 : s.name
        };
    t.guildId !== g.X8 && (E.source_guild_id = t.guildId),
        a.tn
            .post({
                url: T.ANM.SEND_SOUNDBOARD_SOUND(e),
                body: E,
                signal: l.signal,
                onRequestProgress: _
            })
            .then(T.VqG, () => {
                if (l.signal.aborted) return;
            }),
        (0, d.Z)(null != r ? r : [], n, t, c.jy.DEFAULT);
}
!(function (e) {
    (e.EMOJI_PICKER = 'emoji_picker'), (e.EFFECT_BAR = 'effect_bar');
})(r || (r = {}));
let N = async (e) => {
        let { channel: t, emoji: n, location: r, animationType: i, animationId: s, isPremium: l } = e;
        if (null == n || p.Z.isOnCooldown) return;
        let u = l && null != i ? i : I.q.BASIC;
        try {
            let e =
                null != n.id
                    ? {
                          emoji_id: n.id,
                          emoji_name: n.name,
                          animation_type: u,
                          animation_id: s
                      }
                    : {
                          emoji_id: null,
                          emoji_name: n.optionallyDiverseSequence,
                          animation_type: u,
                          animation_id: s
                      };
            await a.tn.post({
                url: T.ANM.VOICE_CHANNEL_EFFECTS(t.id),
                body: e
            }),
                R(t, n, r, u),
                o.Z.dispatch({ type: 'VOICE_CHANNEL_EFFECT_SENT_LOCAL' });
        } catch (e) {
            if (429 === e.status && null != e.body.retry_after) {
                let t = e.body.retry_after * E.Z.Millis.SECOND;
                o.Z.dispatch({
                    type: 'VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP',
                    cooldownEndsAtMs: t
                });
            }
        }
    },
    O = {
        [I.q.BASIC]: 'Basic',
        [I.q.PREMIUM]: 'Premium'
    },
    R = (e, t, n, r) => {
        let { unicode: i, custom: a, customExternal: o, managed: s, managedExternal: u, animated: c } = (0, f.sp)([t], e.getGuildId()),
            d = O[r];
        l.ZP.trackWithMetadata(T.rMx.VOICE_CHANNEL_EFFECT_SENT, {
            channel_id: e.id,
            guild_id: e.getGuildId(),
            location: n,
            emoji_unicode: i,
            emoji_custom: a,
            emoji_custom_external: o,
            emoji_managed: s,
            emoji_managed_external: u,
            emoji_animated: c,
            animation_type: d
        });
    };
