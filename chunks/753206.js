var i = t(735250),
    r = t(470079),
    l = t(120356),
    s = t.n(l),
    o = t(628238),
    u = t(492593),
    a = t(25015),
    c = t(963550),
    _ = t(845080),
    d = t(916315);
n.Z = r.memo(function (e) {
    var n;
    let { message: t, channel: r, compact: l, className: f, isGroupStart: E, hideSimpleEmbedContent: A = !0, disableInteraction: I } = e,
        v = (0, o.A)((null !== (n = t.editedTimestamp) && void 0 !== n ? n : t.timestamp).valueOf()),
        { content: L } = (0, a.Z)(t, {
            hideSimpleEmbedContent: A,
            allowList: v,
            allowHeading: v,
            allowLinks: !0,
            previewLinkTarget: !0
        });
    return (0, i.jsx)(u.Z, {
        compact: l,
        className: s()(f, {
            [d.message]: !0,
            [d.cozyMessage]: !l,
            [d.groupStart]: E
        }),
        childrenHeader: (0, _.Z)({
            ...e,
            channel: r,
            guildId: void 0
        }),
        childrenMessageContent: (0, c.Z)(e, L),
        disableInteraction: I
    });
});
