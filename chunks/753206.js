var i = e(200651),
    r = e(192379),
    l = e(120356),
    o = e.n(l),
    u = e(628238),
    a = e(492593),
    s = e(25015),
    c = e(963550),
    d = e(845080),
    f = e(916315);
n.Z = r.memo(function (t) {
    var n;
    let { message: e, channel: r, compact: l, className: _, isGroupStart: p, hideSimpleEmbedContent: E = !0, disableInteraction: g } = t,
        m = (0, u.A)((null !== (n = e.editedTimestamp) && void 0 !== n ? n : e.timestamp).valueOf()),
        { content: h } = (0, s.Z)(e, {
            hideSimpleEmbedContent: E,
            allowList: m,
            allowHeading: m,
            allowLinks: !0,
            previewLinkTarget: !0
        });
    return (0, i.jsx)(a.Z, {
        compact: l,
        className: o()(_, {
            [f.message]: !0,
            [f.cozyMessage]: !l,
            [f.groupStart]: p
        }),
        childrenHeader: (0, d.Z)({
            ...t,
            channel: r,
            guildId: void 0
        }),
        childrenMessageContent: (0, c.Z)(t, h),
        disableInteraction: g
    });
});
