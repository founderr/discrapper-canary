n.d(t, {
    Lx: function () {
        return A;
    },
    kq: function () {
        return y;
    },
    vy: function () {
        return S;
    },
    yX: function () {
        return i;
    }
});
var r,
    i,
    a = n(392711),
    s = n(544891),
    o = n(570140),
    l = n(100527),
    u = n(367907),
    c = n(339085),
    d = n(697426),
    f = n(100986),
    _ = n(944486),
    p = n(70956),
    h = n(176354),
    m = n(696900),
    g = n(456631),
    E = n(963838),
    v = n(353368),
    I = n(981631),
    b = n(710111);
function T(e) {
    let t = new AbortController(),
        n = (0, a.throttle)((n) => {
            _.Z.getVoiceChannelId() !== e && t.abort();
        }, 1000);
    return {
        abortController: t,
        onRequestProgress: n
    };
}
function S(e, t, n) {
    var r;
    let { abortController: i, onRequestProgress: a } = T(e),
        o = null !== (r = m.Z.getState().animationType) && void 0 !== r ? r : v.q.BASIC,
        u = {
            animation_type: o,
            animation_id: (0, E.Iu)(o, E.v)
        };
    s.tn
        .post({
            url: I.ANM.CUSTOM_CALL_SOUNDS(e),
            body: u,
            signal: i.signal,
            onRequestProgress: a,
            rejectWithError: !0
        })
        .then(I.VqG, () => {
            if (i.signal.aborted) return;
        }),
        (0, f.Z)([l.Z.CHANNEL_CALL], n, t, d.jy.ENTRY);
}
function y(e, t, n, r) {
    var i, a;
    let o = c.ZP.getCustomEmojiById(null !== (i = t.emojiId) && void 0 !== i ? i : ''),
        { abortController: l, onRequestProgress: u } = T(e),
        _ = {
            sound_id: t.soundId,
            emoji_id: t.emojiId,
            emoji_name: null !== (a = t.emojiName) && void 0 !== a ? a : null == o ? void 0 : o.name
        };
    t.guildId !== b.X8 && (_.source_guild_id = t.guildId),
        s.tn
            .post({
                url: I.ANM.SEND_SOUNDBOARD_SOUND(e),
                body: _,
                signal: l.signal,
                onRequestProgress: u,
                rejectWithError: !0
            })
            .then(I.VqG, () => {
                if (l.signal.aborted) return;
            }),
        (0, f.Z)(null != r ? r : [], n, t, d.jy.DEFAULT);
}
((r = i || (i = {})).EMOJI_PICKER = 'emoji_picker'), (r.EFFECT_BAR = 'effect_bar');
let A = async (e) => {
        let { channel: t, emoji: n, location: r, animationType: i, animationId: a, isPremium: l } = e;
        if (null == n || g.Z.isOnCooldown) return;
        let u = l && null != i ? i : v.q.BASIC;
        try {
            let e =
                null != n.id
                    ? {
                          emoji_id: n.id,
                          emoji_name: n.name,
                          animation_type: u,
                          animation_id: a
                      }
                    : {
                          emoji_id: null,
                          emoji_name: n.optionallyDiverseSequence,
                          animation_type: u,
                          animation_id: a
                      };
            await s.tn.post({
                url: I.ANM.VOICE_CHANNEL_EFFECTS(t.id),
                body: e,
                rejectWithError: !1
            }),
                C(t, n, r, u),
                o.Z.dispatch({ type: 'VOICE_CHANNEL_EFFECT_SENT_LOCAL' });
        } catch (e) {
            if (429 === e.status && null != e.body.retry_after) {
                let t = e.body.retry_after * p.Z.Millis.SECOND;
                o.Z.dispatch({
                    type: 'VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP',
                    cooldownEndsAtMs: t
                });
            }
        }
    },
    N = {
        [v.q.BASIC]: 'Basic',
        [v.q.PREMIUM]: 'Premium'
    },
    C = (e, t, n, r) => {
        let { unicode: i, custom: a, customExternal: s, managed: o, managedExternal: l, animated: c } = (0, h.sp)([t], e.getGuildId()),
            d = N[r];
        u.ZP.trackWithMetadata(I.rMx.VOICE_CHANNEL_EFFECT_SENT, {
            channel_id: e.id,
            guild_id: e.getGuildId(),
            location: n,
            emoji_unicode: i,
            emoji_custom: a,
            emoji_custom_external: s,
            emoji_managed: o,
            emoji_managed_external: l,
            emoji_animated: c,
            animation_type: d
        });
    };
