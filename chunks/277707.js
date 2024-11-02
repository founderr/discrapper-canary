n.d(t, {
    e: function () {
        return r;
    }
});
var i = n(388032);
function r(e) {
    let { isVoiceChannel: t, isHubGuild: n, isOwnInvite: r, isGuest: l, isStage: a, isStream: o } = e;
    if (t) {
        if (r) {
            if (o) return i.intl.string(i.t.N85DCg);
            if (a) return i.intl.string(i.t.TJQcNj);
            else if (l) return i.intl.string(i.t.mJyBio);
            else return i.intl.string(i.t.lxTgPz);
        }
        if (o) return i.intl.string(i.t.Mnvc3N);
        if (a) return i.intl.string(i.t.FdPNr6);
        else if (l) return i.intl.string(i.t.f4gmra);
        else return i.intl.string(i.t.H39rER);
    }
    return n ? (r ? i.intl.string(i.t.UxmnHx) : i.intl.string(i.t.sigPER)) : r ? i.intl.string(i.t['oU/lsr']) : i.intl.string(i.t.BoQUFR);
}
