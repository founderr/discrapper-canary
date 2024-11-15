n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(789020);
var r = n(928801),
    i = n(924557),
    a = n(435064),
    s = n(779618),
    o = n(594190),
    l = n(441167),
    u = n(695346),
    c = n(199902),
    d = n(592125),
    f = n(131951),
    _ = n(936349),
    p = n(630388),
    h = n(981631);
class m extends r.Z {
    get guildId() {
        return this.getState().guildId;
    }
    get channelId() {
        return this.getState().channelId;
    }
    computeVoiceFlags() {
        var e, t, n;
        let r = 0,
            d = u.tU.getSetting();
        r = (0, p.mB)(r, h.BVn.ALLOW_VOICE_RECORDING, d);
        let _ = (0, s.Z)(f.Z),
            m = (0, i.ln)() && a.Z.getSettings().clipsEnabled && ((null === (e = c.Z.getCurrentUserActiveStream()) || void 0 === e ? void 0 : e.state) === h.jm8.ACTIVE || (null === (t = c.Z.getCurrentUserActiveStream()) || void 0 === t ? void 0 : t.state) === h.jm8.PAUSED),
            g = a.Z.isDecoupledGameClippingEnabled(),
            E = _ && a.Z.getSettings().decoupledClipsEnabled && (null === (n = o.ZP.getVisibleGame()) || void 0 === n ? void 0 : n.windowHandle) != null && g;
        r = (0, p.mB)(r, h.BVn.CLIPS_ENABLED, m || E);
        let { enableViewerClipping: v } = l.Z.getCurrentConfig({ location: 'computeVoiceFlags' }, { autoTrackExposure: !1 }),
            b = v && _ && a.Z.getSettings().viewerClipsEnabled;
        return (r = (0, p.mB)(r, h.BVn.ALLOW_ANY_VIEWER_CLIPS, b));
    }
    getInitialState() {
        return {
            guildId: null,
            channelId: null,
            selfMute: f.Z.isSelfMute(),
            selfDeaf: f.Z.isSelfDeaf(),
            selfVideo: f.Z.isVideoEnabled(),
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
            selfMute: f.Z.isSelfMute(),
            selfDeaf: f.Z.isSelfDeaf(),
            selfVideo: f.Z.isVideoEnabled(),
            preferredRegion: _.Z.getPreferredRegion(),
            preferredRegions: _.Z.getPreferredRegions(),
            videoStreamParameters: f.Z.getVideoStreamParameters(),
            flags: this.computeVoiceFlags()
        };
    }
    shouldCommit() {
        return this.socket.isSessionEstablished();
    }
    didCommit(e) {
        var t;
        let { guildId: n, channelId: r, selfMute: i, selfDeaf: a, selfVideo: s, preferredRegion: o, preferredRegions: l, videoStreamParameters: u, flags: c = 0 } = e;
        s && (null === (t = d.Z.getChannel(r)) || void 0 === t ? void 0 : t.type) === h.d4z.GUILD_STAGE_VOICE
            ? this.socket.voiceStateUpdate({
                  guildId: n,
                  channelId: r,
                  selfMute: i,
                  selfDeaf: a,
                  selfVideo: s,
                  preferredRegion: o,
                  preferredRegions: l,
                  videoStreamParameters: u,
                  flags: c
              })
            : this.socket.voiceStateUpdate({
                  guildId: n,
                  channelId: r,
                  selfMute: i,
                  selfDeaf: a,
                  selfVideo: s,
                  preferredRegion: o,
                  preferredRegions: l,
                  flags: c
              });
    }
    constructor(e) {
        var t, n, r;
        super(),
            (t = this),
            (r = void 0),
            (n = 'socket') in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r),
            (this.socket = e);
    }
}
