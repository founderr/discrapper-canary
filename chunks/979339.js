n.d(t, {
    Z: function () {
        return r;
    }
}),
    n(47120),
    n(653041);
var i = n(442837),
    s = n(136015),
    a = n(565799),
    l = n(501655);
function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        [n] = (0, i.e7)(
            [a.Z],
            () => {
                let n = a.Z.getMutableParticipants(e).filter((e) => e.type === l.Ui.VOICE),
                    i = [];
                for (let e of n) {
                    if (i.length >= t) break;
                    if (null == i.find((t) => t.id === e.user.id)) i.push(e.user);
                }
                return [
                    {
                        participants: n,
                        usersInSummary: i
                    },
                    a.Z.getParticipantsVersion(e)
                ];
            },
            [e, t],
            s.Q
        );
    return n;
}
