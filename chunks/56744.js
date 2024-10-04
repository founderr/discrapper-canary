n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(905405),
    s = n(869765),
    l = n(699516),
    u = n(937889),
    c = n(739566),
    d = n(267128),
    _ = n(981631);
let E = i.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: _, compact: E = !1 } = e,
        f = _.state === s.Y.LOADED ? _.message : void 0,
        h = (0, o.p)(),
        p = i.useMemo(
            () =>
                (null == f ? void 0 : f.content) != null && '' !== f.content
                    ? (0, u.ZP)(f, {
                          formatInline: !0,
                          shouldFilterKeywords: h
                      }).content
                    : null,
            [f, h]
        ),
        m = (0, a.e7)([l.Z], () => null != f && l.Z.isBlockedForMessage(f), [f]),
        I = (0, c.Uj)(f),
        T = (0, c.Uj)(t);
    return (0, r.jsx)(d.Z, {
        repliedAuthor: I,
        baseAuthor: T,
        baseMessage: t,
        channel: n,
        referencedMessage: _,
        content: p,
        compact: E,
        isReplyAuthorBlocked: m,
        isReplySpineClickable: !1,
        showReplySpine: !0
    });
});
function f(e, t, n, i, a) {
    return e.type !== _.uaV.REPLY || null == n
        ? null
        : (0, r.jsx)(E, {
              baseMessage: e,
              channel: t,
              referencedMessage: i,
              compact: a
          });
}
