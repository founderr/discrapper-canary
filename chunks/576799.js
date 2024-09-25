n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(58540),
    s = n(905405),
    l = n(937889),
    u = n(267128),
    c = n(123145),
    d = n(699516),
    _ = n(217702),
    E = n(825193);
function f(e) {
    let { message: t, channel: n } = e,
        u = (0, a.e7)([d.Z], () => d.Z.isBlockedForMessage(t)),
        _ = (0, s.p)(),
        f = i.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, o.$)(f);
    let p = i.useMemo(
        () =>
            null != t.content && '' !== t.content
                ? (0, l.ZP)(t, {
                      formatInline: !0,
                      shouldFilterKeywords: _
                  }).content
                : null,
        [t, _]
    );
    return (0, r.jsxs)('div', {
        className: E.threadMessageAccessory,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                src: t.author.getAvatarURL(n.guild_id, 16),
                className: E.threadMessageAccessoryAvatar
            }),
            (0, r.jsx)(c.Z, {
                message: t,
                channel: n,
                compact: !0
            }),
            (0, r.jsx)('div', {
                className: E.threadMessageAccessoryPreview,
                children: h(t, p, u)
            })
        ]
    });
}
function h(e, t, n) {
    let {
        contentPlaceholder: i,
        renderedContent: a,
        leadingIcon: o,
        trailingIcon: s
    } = (0, u.f)(e, t, n, E.threadMessageAccessoryContent, {
        trailingIconClass: E.threadMessageAccessoryContentTrailingIcon,
        leadingIconClass: E.threadMessageAccessoryContentLeadingIcon,
        iconSize: _.WW
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o,
            null != a
                ? a
                : (0, r.jsx)('span', {
                      className: E.threadMessageAccessoryPlaceholder,
                      children: i
                  }),
            s
        ]
    });
}
