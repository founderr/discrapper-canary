n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var o = n(192379),
    i = n(442837),
    a = n(594174),
    r = n(823379);
let c = [];
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        n = (0, i.Wu)(
            [a.default],
            () => {
                let t = e.participants.map((e) => a.default.getUser(e)).filter(r.lm),
                    n = t.find((t) => t.id === e.author_id),
                    o = t.filter((t) => t.id !== e.author_id);
                return null == n ? c : [...o, n];
            },
            [e]
        ),
        l = o.useMemo(() => n.slice(-t), [t, n]),
        s = l[l.length - 1],
        u = l[l.length - 2],
        d = Math.max(n.length - 1, 0);
    return {
        orderedParticipants: n,
        displayParticipants: l,
        participant1: s,
        participant2: u,
        numOtherParticipants: d
    };
}
