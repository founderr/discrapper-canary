n(47120);
var r = n(275726),
    i = n(904245),
    a = n(147913),
    s = n(314897),
    o = n(592125),
    l = n(375954),
    u = n(496675),
    c = n(944486),
    d = n(594174),
    f = n(146085),
    _ = n(96052),
    h = n(981631);
class p extends a.Z {
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            let { channelId: t, userId: n, suppress: a, requestToSpeakTimestamp: p } = e;
            if (c.Z.getVoiceChannelId() === t && !!a && null != t && n !== s.default.getId()) {
                if (u.Z.can(f.yP, o.Z.getChannel(t))) {
                    if (null != p) {
                        let e = d.default.getUser(n);
                        null != e && (0, _.U)(t, e, p);
                    } else {
                        let e = l.Z.getMessages(t).findNewest((e) => e.type === r.u.STAGE_RAISE_HAND && e.hasFlag(h.iLy.EPHEMERAL) && e.author.id === n);
                        null != e && i.Z.deleteMessage(t, e.id, !0);
                    }
                }
            }
        });
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = { VOICE_STATE_UPDATES: this.handleVoiceStateUpdates }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new p();
