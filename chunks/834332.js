var r = n(47120);
var i = n(275726),
    a = n(904245),
    o = n(147913),
    s = n(314897),
    l = n(592125),
    u = n(375954),
    c = n(496675),
    d = n(944486),
    _ = n(594174),
    E = n(146085),
    f = n(96052),
    h = n(981631);
function p(e, t, n) {
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
class m extends o.Z {
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            let { channelId: t, userId: n, suppress: r, requestToSpeakTimestamp: o } = e;
            if (d.Z.getVoiceChannelId() === t && !!r && null != t && n !== s.default.getId()) {
                if (c.Z.can(E.yP, l.Z.getChannel(t))) {
                    if (null != o) {
                        let e = _.default.getUser(n);
                        null != e && (0, f.U)(t, e, o);
                    } else {
                        let e = u.Z.getMessages(t).findNewest((e) => e.type === i.u.STAGE_RAISE_HAND && e.hasFlag(h.iLy.EPHEMERAL) && e.author.id === n);
                        null != e && a.Z.deleteMessage(t, e.id, !0);
                    }
                }
            }
        });
    }
    constructor(...e) {
        super(...e), p(this, 'actions', { VOICE_STATE_UPDATES: this.handleVoiceStateUpdates });
    }
}
t.Z = new m();
