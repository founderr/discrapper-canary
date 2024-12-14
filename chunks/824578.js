n.d(t, {
    Q: function () {
        return l;
    }
}),
    n(653041);
var i = n(442837),
    o = n(699516),
    a = n(111583),
    s = n(594174);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
    return (0, i.Wu)(
        [s.default, a.Z, o.Z],
        () => {
            var n;
            let i = null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
                l = a.Z.getTypingUsers(e),
                r = [];
            for (let e in l) {
                if (r.length >= t) break;
                let n = s.default.getUser(e);
                if (!(null == n || n.id === i || o.Z.isBlockedOrIgnored(n.id))) r.push(n.id);
            }
            return r;
        },
        [e, t]
    );
}
