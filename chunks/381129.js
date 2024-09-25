var r = n(47120);
var i = n(512722),
    a = n.n(i),
    o = n(957730),
    s = n(439170),
    l = n(496675),
    u = n(981631);
let c = new RegExp(/@(:?everyone|here)/),
    d = 30;
function _(e, t) {
    let n = t.getGuildId();
    return a()(n, 'isGuildChannel with null guildId'), E(e, t) > d && l.Z.can(u.Plq.MENTION_EVERYONE, t);
}
function E(e, t) {
    let n = 0;
    if (t.isThread()) {
        var r;
        return null !== (r = t.memberCount) && void 0 !== r ? r : 0;
    }
    return (
        s.ZP.getProps(t.getGuildId(), t.id).groups.forEach((t) => {
            ('@everyone' === e || t.id !== u.Skl.OFFLINE) && (n += t.count);
        }),
        n
    );
}
function f(e) {
    if ('string' == typeof e.content) {
        var t;
        if ('inlineCode' === e.type || 'codeBlock' === e.type) return null;
        let n = null === (t = e.content) || void 0 === t ? void 0 : t.match(c);
        if (null != n) {
            let [e] = n;
            return e;
        }
    } else if (Array.isArray(e.content))
        for (let t of e.content) {
            let e = f(t);
            if (null != e) return e;
        }
    return null;
}
function h(e, t) {
    for (let n of o.ZP.parsePreprocessor(t, e)) {
        let e = f(n);
        if (null != e) return e;
    }
    return null;
}
t.Z = {
    shouldShowEveryoneGuard: _,
    everyoneMemberCount: E,
    extractEveryoneRole: h
};
