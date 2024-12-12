r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(789020);
var a = r(928801),
    s = r(924557),
    o = r(435064),
    l = r(779618),
    u = r(594190),
    c = r(441167),
    d = r(695346),
    f = r(199902),
    _ = r(592125),
    h = r(131951),
    p = r(936349),
    m = r(630388),
    g = r(981631);
function E(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class v extends a.Z {
    get guildId() {
        return this.getState().guildId;
    }
    get channelId() {
        return this.getState().channelId;
    }
    computeVoiceFlags() {
        var e, n, r;
        let i = 0,
            a = d.tU.getSetting();
        i = (0, m.mB)(i, g.BVn.ALLOW_VOICE_RECORDING, a);
        let _ = (0, l.Z)(h.Z),
            p = (0, s.ln)() && o.Z.getSettings().clipsEnabled && ((null === (e = f.Z.getCurrentUserActiveStream()) || void 0 === e ? void 0 : e.state) === g.jm8.ACTIVE || (null === (n = f.Z.getCurrentUserActiveStream()) || void 0 === n ? void 0 : n.state) === g.jm8.PAUSED),
            E = o.Z.isDecoupledGameClippingEnabled(),
            v = _ && o.Z.getSettings().decoupledClipsEnabled && (null === (r = u.ZP.getVisibleGame()) || void 0 === r ? void 0 : r.windowHandle) != null && E;
        i = (0, m.mB)(i, g.BVn.CLIPS_ENABLED, p || v);
        let { enableViewerClipping: I } = c.Z.getCurrentConfig({ location: 'computeVoiceFlags' }, { autoTrackExposure: !1 }),
            T = I && _ && o.Z.getSettings().viewerClipsEnabled;
        return (i = (0, m.mB)(i, g.BVn.ALLOW_ANY_VIEWER_CLIPS, T));
    }
    getInitialState() {
        return {
            guildId: null,
            channelId: null,
            selfMute: h.Z.isSelfMute(),
            selfDeaf: h.Z.isSelfDeaf(),
            selfVideo: h.Z.isVideoEnabled(),
            preferredRegion: null,
            preferredRegions: null,
            videoStreamParameters: null,
            flags: 0
        };
    }
    getNextState(e) {
        let { guildId: n, channelId: r } = e;
        return {
            guildId: n,
            channelId: r,
            selfMute: h.Z.isSelfMute(),
            selfDeaf: h.Z.isSelfDeaf(),
            selfVideo: h.Z.isVideoEnabled(),
            preferredRegion: p.Z.getPreferredRegion(),
            preferredRegions: p.Z.getPreferredRegions(),
            videoStreamParameters: h.Z.getVideoStreamParameters(),
            flags: this.computeVoiceFlags()
        };
    }
    shouldCommit() {
        return this.socket.isSessionEstablished();
    }
    didCommit(e) {
        var n;
        let { guildId: r, channelId: i, selfMute: a, selfDeaf: s, selfVideo: o, preferredRegion: l, preferredRegions: u, videoStreamParameters: c, flags: d = 0 } = e;
        o && (null === (n = _.Z.getChannel(i)) || void 0 === n ? void 0 : n.type) === g.d4z.GUILD_STAGE_VOICE
            ? this.socket.voiceStateUpdate({
                  guildId: r,
                  channelId: i,
                  selfMute: a,
                  selfDeaf: s,
                  selfVideo: o,
                  preferredRegion: l,
                  preferredRegions: u,
                  videoStreamParameters: c,
                  flags: d
              })
            : this.socket.voiceStateUpdate({
                  guildId: r,
                  channelId: i,
                  selfMute: a,
                  selfDeaf: s,
                  selfVideo: o,
                  preferredRegion: l,
                  preferredRegions: u,
                  flags: d
              });
    }
    constructor(e) {
        super(), E(this, 'socket', void 0), (this.socket = e);
    }
}
