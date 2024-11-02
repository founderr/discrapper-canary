l.d(n, {
    Z: function () {
        return s;
    }
}),
    l(47120);
var t = l(192379),
    i = l(442837),
    r = l(594174),
    a = l(823379);
let d = [];
function s(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        l = (0, i.Wu)(
            [r.default],
            () => {
                let n = e.participants.map((e) => r.default.getUser(e)).filter(a.lm),
                    l = n.find((n) => n.id === e.author_id),
                    t = n.filter((n) => n.id !== e.author_id);
                return null == l ? d : [...t, l];
            },
            [e]
        ),
        s = t.useMemo(() => l.slice(-n), [n, l]),
        u = s[s.length - 1],
        c = s[s.length - 2],
        o = Math.max(l.length - 1, 0);
    return {
        orderedParticipants: l,
        displayParticipants: s,
        participant1: u,
        participant2: c,
        numOtherParticipants: o
    };
}
