t.d(n, {
    q: function () {
        return r;
    }
}),
    t(724458),
    t(653041);
var a = t(442837),
    l = t(146085),
    s = t(984933),
    i = t(496675);
function r(e) {
    var n;
    let t = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null;
    return (0, a.Wu)(
        [s.ZP, i.Z],
        () =>
            s.ZP.getChannels(t)[s.Zb].reduce((e, n) => {
                let t = n.channel;
                return t.isGuildStageVoice()
                    ? ((function (e) {
                          let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
                          return !!e.isGuildStageVoice() && n.can(l.yP, e);
                      })(n.channel, i.Z) && e.push(t),
                      e)
                    : e;
            }, []),
        [t]
    );
}
