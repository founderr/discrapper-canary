r.d(n, {
    Lx: function () {
        return A;
    },
    kq: function () {
        return S;
    },
    vy: function () {
        return y;
    },
    yX: function () {
        return i;
    }
});
var i,
    a = r(392711);
var s = r(544891),
    o = r(570140),
    l = r(100527),
    u = r(367907),
    c = r(339085),
    d = r(697426),
    f = r(100986),
    _ = r(944486),
    h = r(70956),
    p = r(176354),
    m = r(696900),
    g = r(456631),
    E = r(963838),
    v = r(353368),
    I = r(981631),
    T = r(710111);
function b(e) {
    let n = new AbortController(),
        r = (0, a.throttle)((r) => {
            _.Z.getVoiceChannelId() !== e && n.abort();
        }, 1000);
    return {
        abortController: n,
        onRequestProgress: r
    };
}
function y(e, n, r) {
    var i;
    let { abortController: a, onRequestProgress: o } = b(e),
        u = null !== (i = m.Z.getState().animationType) && void 0 !== i ? i : v.q.BASIC,
        c = {
            animation_type: u,
            animation_id: (0, E.Iu)(u, E.v)
        };
    s.tn
        .post({
            url: I.ANM.CUSTOM_CALL_SOUNDS(e),
            body: c,
            signal: a.signal,
            onRequestProgress: o,
            rejectWithError: !0
        })
        .then(I.VqG, () => {
            if (a.signal.aborted) return;
        }),
        (0, f.Z)([l.Z.CHANNEL_CALL], r, n, d.jy.ENTRY);
}
function S(e, n, r, i) {
    var a, o;
    let l = c.ZP.getCustomEmojiById(null !== (a = n.emojiId) && void 0 !== a ? a : ''),
        { abortController: u, onRequestProgress: _ } = b(e),
        h = {
            sound_id: n.soundId,
            emoji_id: n.emojiId,
            emoji_name: null !== (o = n.emojiName) && void 0 !== o ? o : null == l ? void 0 : l.name
        };
    n.guildId !== T.X8 && (h.source_guild_id = n.guildId),
        s.tn
            .post({
                url: I.ANM.SEND_SOUNDBOARD_SOUND(e),
                body: h,
                signal: u.signal,
                onRequestProgress: _,
                rejectWithError: !0
            })
            .then(I.VqG, () => {
                if (u.signal.aborted) return;
            }),
        (0, f.Z)(null != i ? i : [], r, n, d.jy.DEFAULT);
}
!(function (e) {
    (e.EMOJI_PICKER = 'emoji_picker'), (e.EFFECT_BAR = 'effect_bar');
})(i || (i = {}));
let A = async (e) => {
        let { channel: n, emoji: r, location: i, animationType: a, animationId: l, isPremium: u } = e;
        if (null == r || g.Z.isOnCooldown) return;
        let c = u && null != a ? a : v.q.BASIC;
        try {
            let e =
                null != r.id
                    ? {
                          emoji_id: r.id,
                          emoji_name: r.name,
                          animation_type: c,
                          animation_id: l
                      }
                    : {
                          emoji_id: null,
                          emoji_name: r.optionallyDiverseSequence,
                          animation_type: c,
                          animation_id: l
                      };
            await s.tn.post({
                url: I.ANM.VOICE_CHANNEL_EFFECTS(n.id),
                body: e,
                rejectWithError: !1
            }),
                C(n, r, i, c),
                o.Z.dispatch({ type: 'VOICE_CHANNEL_EFFECT_SENT_LOCAL' });
        } catch (e) {
            if (429 === e.status && null != e.body.retry_after) {
                let n = e.body.retry_after * h.Z.Millis.SECOND;
                o.Z.dispatch({
                    type: 'VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP',
                    cooldownEndsAtMs: n
                });
            }
        }
    },
    N = {
        [v.q.BASIC]: 'Basic',
        [v.q.PREMIUM]: 'Premium'
    },
    C = (e, n, r, i) => {
        let { unicode: a, custom: s, customExternal: o, managed: l, managedExternal: c, animated: d } = (0, p.sp)([n], e.getGuildId()),
            f = N[i];
        u.ZP.trackWithMetadata(I.rMx.VOICE_CHANNEL_EFFECT_SENT, {
            channel_id: e.id,
            guild_id: e.getGuildId(),
            location: r,
            emoji_unicode: a,
            emoji_custom: s,
            emoji_custom_external: o,
            emoji_managed: l,
            emoji_managed_external: c,
            emoji_animated: d,
            animation_type: f
        });
    };
