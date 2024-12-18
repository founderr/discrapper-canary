var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(628238),
    a = n(492593),
    s = n(25015),
    c = n(963550),
    d = n(845080),
    f = n(46124);
t.Z = r.memo(function (e) {
    var t;
    let { message: n, channel: r, compact: o, className: _, isGroupStart: p, hideSimpleEmbedContent: g = !0, disableInteraction: E } = e,
        m = (0, u.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        { content: I } = (0, s.Z)(n, {
            hideSimpleEmbedContent: g,
            allowList: m,
            allowHeading: m,
            allowLinks: !0,
            previewLinkTarget: !0
        });
    return (0, i.jsx)(a.Z, {
        compact: o,
        className: l()(_, {
            [f.message]: !0,
            [f.cozyMessage]: !o,
            [f.groupStart]: p
        }),
        childrenHeader: (0, d.Z)({
            ...e,
            channel: r,
            guildId: void 0
        }),
        childrenMessageContent: (0, c.Z)(e, I),
        disableInteraction: E
    });
});
