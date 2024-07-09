n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250), a = n(470079), s = n(442837), r = n(905405), l = n(869765), o = n(699516), c = n(937889), d = n(739566), u = n(267128), _ = n(981631);
let E = a.memo(function (e) {
    let {
            baseMessage: t,
            channel: n,
            referencedMessage: _,
            compact: E = !1
        } = e, m = _.state === l.Y.LOADED ? _.message : void 0, I = (0, r.p)(), T = a.useMemo(() => (null == m ? void 0 : m.content) != null && '' !== m.content ? (0, c.ZP)(m, {
            formatInline: !0,
            shouldFilterKeywords: I
        }).content : null, [
            m,
            I
        ]), h = (0, s.e7)([o.Z], () => null != m && o.Z.isBlockedForMessage(m), [m]), N = (0, d.Uj)(m), p = (0, d.Uj)(t);
    return (0, i.jsx)(u.Z, {
        repliedAuthor: N,
        baseAuthor: p,
        baseMessage: t,
        channel: n,
        referencedMessage: _,
        content: T,
        compact: E,
        isReplyAuthorBlocked: h
    });
});
function m(e, t, n, a, s) {
    return e.type !== _.uaV.REPLY || null == n ? null : (0, i.jsx)(E, {
        baseMessage: e,
        channel: t,
        referencedMessage: a,
        compact: s
    });
}
