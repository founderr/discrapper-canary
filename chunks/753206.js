var i = t(200651),
    r = t(192379),
    l = t(120356),
    o = t.n(l),
    u = t(628238),
    a = t(492593),
    s = t(25015),
    c = t(963550),
    d = t(845080),
    f = t(916315);
n.Z = r.memo(function (e) {
    var n;
    let { message: t, channel: r, compact: l, className: p, isGroupStart: _, hideSimpleEmbedContent: m = !0, disableInteraction: g } = e,
        E = (0, u.A)((null !== (n = t.editedTimestamp) && void 0 !== n ? n : t.timestamp).valueOf()),
        { content: h } = (0, s.Z)(t, {
            hideSimpleEmbedContent: m,
            allowList: E,
            allowHeading: E,
            allowLinks: !0,
            previewLinkTarget: !0
        });
    return (0, i.jsx)(a.Z, {
        compact: l,
        className: o()(p, {
            [f.message]: !0,
            [f.cozyMessage]: !l,
            [f.groupStart]: _
        }),
        childrenHeader: (0, d.Z)({
            ...e,
            channel: r,
            guildId: void 0
        }),
        childrenMessageContent: (0, c.Z)(e, h),
        disableInteraction: g
    });
});
