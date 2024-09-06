n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(44136),
    s = n(354459);
function a(e, t) {
    var n, a;
    let l = null,
        r = null,
        o = null,
        c = !1,
        u = !1;
    switch (e.type) {
        case s.fO.ACTIVITY:
            break;
        case s.fO.USER:
            (l = e.streamId), (o = e.voiceState), (c = e.speaking), (u = e.ringing);
            break;
        case s.fO.STREAM:
            (l = e.streamId), (r = e.stream);
    }
    return {
        streamId: l,
        stream: r,
        speaking: c,
        ringing: u,
        muted: null !== (n = null == o ? void 0 : o.isVoiceMuted()) && void 0 !== n && n,
        deafen: null !== (a = null == o ? void 0 : o.isVoiceDeafened()) && void 0 !== a && a,
        mirror: e.type === s.fO.USER && e.user.id === t,
        hasVideo: (0, i.ZP)(e)
    };
}
