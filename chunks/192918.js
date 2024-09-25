n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(442837),
    o = n(594174),
    s = n(823379);
let l = [];
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        n = (0, a.Wu)(
            [o.default],
            () => {
                let t = e.participants.map((e) => o.default.getUser(e)).filter(s.lm),
                    n = t.find((t) => t.id === e.author_id),
                    r = t.filter((t) => t.id !== e.author_id);
                return null == n ? l : [...r, n];
            },
            [e]
        ),
        r = i.useMemo(() => n.slice(-t), [t, n]),
        u = r[r.length - 1],
        c = r[r.length - 2],
        d = Math.max(n.length - 1, 0);
    return {
        orderedParticipants: n,
        displayParticipants: r,
        participant1: u,
        participant2: c,
        numOtherParticipants: d
    };
}
