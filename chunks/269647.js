var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(314897),
    c = n(592125),
    d = n(131951),
    f = n(496675),
    _ = n(19780),
    p = n(979651),
    h = n(981631);
let m = !0,
    g = !0;
function E() {
    let e;
    let t = _.Z.getChannelId();
    if (null == t) e = !0;
    else {
        var n;
        let r = c.Z.getChannel(t),
            i = p.Z.getVoiceState(null == r ? void 0 : r.getGuildId(), u.default.getId());
        e = d.Z.getMode() !== h.pM4.VOICE_ACTIVITY || null == r || r.isPrivate() || r.isGuildStageVoice() || f.Z.can(h.Plq.USE_VAD, r) || null == (n = i) || !!n.suppress || null != n.requestToSpeakTimestamp || !1;
    }
    if (m === e) return !1;
    (g = e),
        (m = e),
        l.Z.dispatch({
            type: 'SET_VAD_PERMISSION',
            hasPermission: m
        });
}
class v extends (s = o.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, d.Z, _.Z, p.Z);
    }
    shouldShowWarning() {
        return !g;
    }
    canUseVoiceActivity() {
        return m;
    }
}
(a = 'PermissionVADStore'),
    (i = 'displayName') in (r = v)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new v(l.Z, {
        RTC_CONNECTION_STATE: E,
        MEDIA_ENGINE_SET_AUDIO_ENABLED: E,
        AUDIO_SET_MODE: E,
        CHANNEL_UPDATES: E,
        THREAD_UPDATE: E,
        GUILD_ROLE_UPDATE: E,
        GUILD_MEMBER_UPDATE: E,
        IMPERSONATE_UPDATE: E,
        IMPERSONATE_STOP: E,
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.some((e) => {
                let { userId: t } = e;
                return t === u.default.getId() && E();
            });
        },
        AUDIO_TOGGLE_SELF_MUTE: function () {
            g = m;
        },
        PERMISSION_CLEAR_VAD_WARNING: function () {
            g = !0;
        }
    }));
