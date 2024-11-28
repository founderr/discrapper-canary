var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    u = n(628238),
    a = n(492593),
    s = n(25015),
    c = n(963550),
    d = n(845080),
    f = n(46124);
t.Z = r.memo(function (e) {
    var t;
    let { message: n, channel: r, compact: l, className: _, isGroupStart: p, hideSimpleEmbedContent: g = !0, disableInteraction: m } = e,
        E = (0, u.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        { content: I } = (0, s.Z)(n, {
            hideSimpleEmbedContent: g,
            allowList: E,
            allowHeading: E,
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
            ...e,
            channel: r,
            guildId: void 0
        }),
        childrenMessageContent: (0, c.Z)(e, I),
        disableInteraction: m
    });
});
