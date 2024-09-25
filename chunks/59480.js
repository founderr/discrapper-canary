n.d(t, {
    a: function () {
        return l;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(271383),
    o = n(594174),
    s = n(981631);
class l {
    static fromMessage(e, t, n, r) {
        let [i, a] = l.deriveMemberUsers(e, n);
        return {
            id: n.id,
            channelId: t,
            message: n,
            members: i,
            users: a,
            connectionId: r
        };
    }
    static deriveMemberUsers(e, t) {
        var n, r, i, l;
        let u = new Set([null === (n = t.author) || void 0 === n ? void 0 : n.id, null === (r = t.interaction) || void 0 === r ? void 0 : r.user.id, ...(null !== (l = null === (i = t.mentions) || void 0 === i ? void 0 : i.map((e) => e.id)) && void 0 !== l ? l : [])]),
            c = [],
            d = [];
        for (let t of u) {
            if (null == t) continue;
            let n = o.default.getUser(t),
                r = a.ZP.getTrueMember(null != e ? e : s.lds, t);
            null != n && d.push(n), null != r && c.push(r);
        }
        return [c, d];
    }
}
