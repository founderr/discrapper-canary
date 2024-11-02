n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(58540),
    o = n(905405),
    s = n(937889),
    c = n(267128),
    u = n(123145),
    d = n(699516),
    m = n(217702),
    f = n(825193);
function h(e) {
    let { message: t, channel: n } = e,
        h = (0, l.e7)([d.Z], () => d.Z.isBlockedForMessage(t)),
        p = (0, o.p)(),
        g = r.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, a.$)(g);
    let _ = r.useMemo(
        () =>
            null != t.content && '' !== t.content
                ? (0, s.ZP)(t, {
                      formatInline: !0,
                      shouldFilterKeywords: p
                  }).content
                : null,
        [t, p]
    );
    return (0, i.jsxs)('div', {
        className: f.threadMessageAccessory,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: t.author.getAvatarURL(n.guild_id, 16),
                className: f.threadMessageAccessoryAvatar
            }),
            (0, i.jsx)(u.Z, {
                message: t,
                channel: n,
                compact: !0
            }),
            (0, i.jsx)('div', {
                className: f.threadMessageAccessoryPreview,
                children: (function (e, t, n) {
                    let {
                        contentPlaceholder: r,
                        renderedContent: l,
                        leadingIcon: a,
                        trailingIcon: o
                    } = (0, c.f)(e, t, n, f.threadMessageAccessoryContent, {
                        trailingIconClass: f.threadMessageAccessoryContentTrailingIcon,
                        leadingIconClass: f.threadMessageAccessoryContentLeadingIcon,
                        iconSize: m.WW
                    });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            a,
                            null != l
                                ? l
                                : (0, i.jsx)('span', {
                                      className: f.threadMessageAccessoryPlaceholder,
                                      children: r
                                  }),
                            o
                        ]
                    });
                })(t, _, h)
            })
        ]
    });
}
