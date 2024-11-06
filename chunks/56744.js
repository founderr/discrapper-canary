n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(905405),
    o = n(869765),
    s = n(699516),
    c = n(937889),
    u = n(739566),
    d = n(267128),
    m = n(981631);
let h = r.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: m, compact: h = !1 } = e,
        f = m.state === o.Y.LOADED ? m.message : void 0,
        p = (0, a.p)(),
        g = r.useMemo(
            () =>
                (null == f ? void 0 : f.content) != null && '' !== f.content
                    ? (0, c.ZP)(f, {
                          formatInline: !0,
                          shouldFilterKeywords: p
                      }).content
                    : null,
            [f, p]
        ),
        _ = (0, l.e7)([s.Z], () => null != f && s.Z.isBlockedForMessage(f), [f]),
        E = (0, u.Uj)(f),
        C = (0, u.Uj)(t);
    return (0, i.jsx)(d.Z, {
        repliedAuthor: E,
        baseAuthor: C,
        baseMessage: t,
        channel: n,
        referencedMessage: m,
        content: g,
        compact: h,
        isReplyAuthorBlocked: _,
        isReplySpineClickable: !1,
        showReplySpine: !0
    });
});
function f(e, t, n, r, l) {
    return e.type !== m.uaV.REPLY || null == n
        ? null
        : (0, i.jsx)(h, {
              baseMessage: e,
              channel: t,
              referencedMessage: r,
              compact: l
          });
}
