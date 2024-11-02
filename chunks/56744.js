n.d(t, {
    Z: function () {
        return h;
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
let f = r.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: m, compact: f = !1 } = e,
        h = m.state === o.Y.LOADED ? m.message : void 0,
        p = (0, a.p)(),
        g = r.useMemo(
            () =>
                (null == h ? void 0 : h.content) != null && '' !== h.content
                    ? (0, c.ZP)(h, {
                          formatInline: !0,
                          shouldFilterKeywords: p
                      }).content
                    : null,
            [h, p]
        ),
        _ = (0, l.e7)([s.Z], () => null != h && s.Z.isBlockedForMessage(h), [h]),
        C = (0, u.Uj)(h),
        E = (0, u.Uj)(t);
    return (0, i.jsx)(d.Z, {
        repliedAuthor: C,
        baseAuthor: E,
        baseMessage: t,
        channel: n,
        referencedMessage: m,
        content: g,
        compact: f,
        isReplyAuthorBlocked: _,
        isReplySpineClickable: !1,
        showReplySpine: !0
    });
});
function h(e, t, n, r, l) {
    return e.type !== m.uaV.REPLY || null == n
        ? null
        : (0, i.jsx)(f, {
              baseMessage: e,
              channel: t,
              referencedMessage: r,
              compact: l
          });
}
