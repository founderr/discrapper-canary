n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(789020);
var i = n(928801),
    a = n(924557),
    o = n(435064),
    s = n(779618),
    l = n(594190),
    u = n(441167),
    c = n(695346),
    d = n(199902),
    _ = n(592125),
    E = n(131951),
    f = n(936349),
    h = n(630388),
    p = n(981631);
function m(e, t, n) {
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
class I extends i.Z {
    get guildId() {
        return this.getState().guildId;
    }
    get channelId() {
        return this.getState().channelId;
    }
    computeVoiceFlags() {
        var e, t, n;
        let r = 0,
            i = c.tU.getSetting();
        r = (0, h.mB)(r, p.BVn.ALLOW_VOICE_RECORDING, i);
        let _ = (0, s.Z)(E.Z),
            f = (0, a.ln)() && o.Z.getSettings().clipsEnabled && ((null === (e = d.Z.getCurrentUserActiveStream()) || void 0 === e ? void 0 : e.state) === p.jm8.ACTIVE || (null === (t = d.Z.getCurrentUserActiveStream()) || void 0 === t ? void 0 : t.state) === p.jm8.PAUSED),
            m = o.Z.isDecoupledGameClippingEnabled(),
            I = _ && o.Z.getSettings().decoupledClipsEnabled && (null === (n = l.ZP.getVisibleGame()) || void 0 === n ? void 0 : n.windowHandle) != null && m;
        r = (0, h.mB)(r, p.BVn.CLIPS_ENABLED, f || I);
        let { enableViewerClipping: T } = u.Z.getCurrentConfig({ location: 'computeVoiceFlags' }, { autoTrackExposure: !1 }),
            g = T && _ && o.Z.getSettings().viewerClipsEnabled;
        return (r = (0, h.mB)(r, p.BVn.ALLOW_ANY_VIEWER_CLIPS, g));
    }
    getInitialState() {
        return {
            guildId: null,
            channelId: null,
            selfMute: E.Z.isSelfMute(),
            selfDeaf: E.Z.isSelfDeaf(),
            selfVideo: E.Z.isVideoEnabled(),
            preferredRegion: null,
            preferredRegions: null,
            videoStreamParameters: null,
            flags: 0
        };
    }
    getNextState(e) {
        let { guildId: t, channelId: n } = e;
        return {
            guildId: t,
            channelId: n,
            selfMute: E.Z.isSelfMute(),
            selfDeaf: E.Z.isSelfDeaf(),
            selfVideo: E.Z.isVideoEnabled(),
            preferredRegion: f.Z.getPreferredRegion(),
            preferredRegions: f.Z.getPreferredRegions(),
            videoStreamParameters: E.Z.getVideoStreamParameters(),
            flags: this.computeVoiceFlags()
        };
    }
    shouldCommit() {
        return this.socket.isSessionEstablished();
    }
    didCommit(e) {
        var t;
        let { guildId: n, channelId: r, selfMute: i, selfDeaf: a, selfVideo: o, preferredRegion: s, preferredRegions: l, videoStreamParameters: u, flags: c = 0 } = e;
        o && (null === (t = _.Z.getChannel(r)) || void 0 === t ? void 0 : t.type) === p.d4z.GUILD_STAGE_VOICE
            ? this.socket.voiceStateUpdate({
                  guildId: n,
                  channelId: r,
                  selfMute: i,
                  selfDeaf: a,
                  selfVideo: o,
                  preferredRegion: s,
                  preferredRegions: l,
                  videoStreamParameters: u,
                  flags: c
              })
            : this.socket.voiceStateUpdate({
                  guildId: n,
                  channelId: r,
                  selfMute: i,
                  selfDeaf: a,
                  selfVideo: o,
                  preferredRegion: s,
                  preferredRegions: l,
                  flags: c
              });
    }
    constructor(e) {
        super(), m(this, 'socket', void 0), (this.socket = e);
    }
}
