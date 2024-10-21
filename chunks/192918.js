l.d(n, {
    Z: function () {
        return d;
    }
}),
    l(47120);
var t = l(192379),
    i = l(442837),
    r = l(594174),
    a = l(823379);
let s = [];
function d(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        l = (0, i.Wu)(
            [r.default],
            () => {
                let n = e.participants.map((e) => r.default.getUser(e)).filter(a.lm),
                    l = n.find((n) => n.id === e.author_id),
                    t = n.filter((n) => n.id !== e.author_id);
                return null == l ? s : [...t, l];
            },
            [e]
        ),
        d = t.useMemo(() => l.slice(-n), [n, l]),
        u = d[d.length - 1],
        c = d[d.length - 2],
        o = Math.max(l.length - 1, 0);
    return {
        orderedParticipants: l,
        displayParticipants: d,
        participant1: u,
        participant2: c,
        numOtherParticipants: o
    };
}
