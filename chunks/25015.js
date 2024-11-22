n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(192379),
    i = n(905405),
    a = n(626135),
    s = n(937889),
    o = n(761910),
    l = n(981631),
    u = n(388032),
    c = n(170714);
function d(e, t) {
    let { hideSimpleEmbedContent: n, formatInline: d = !1, noStyleAndInteraction: f = !1, isInteracting: _ = !1, allowHeading: p = !1, allowList: h = !1, allowLinks: m = !1, allowDevLinks: g = !1, allowSubtext: E = !1, previewLinkTarget: v = !1, viewingChannelId: I } = t,
        b = (0, i.p)();
    return r.useMemo(
        () =>
            null != e.customRenderedContent
                ? e.customRenderedContent
                : e.isUnsupported
                  ? {
                        content: u.intl.string(u.t.sWi5ER),
                        hasSpoilerEmbeds: !1
                    }
                  : (e.isCommandType() && 0 === e.content.length) || e.hasFlag(l.iLy.LOADING)
                    ? (0, o.Z)(e)
                    : e.type === l.uaV.CHANGELOG
                      ? (0, s.n0)(e, c, {
                            track: (e, t) => {
                                a.default.track(e, t);
                            }
                        })
                      : (0, s.ZP)(e, {
                            hideSimpleEmbedContent: n,
                            formatInline: d,
                            noStyleAndInteraction: f,
                            isInteracting: _,
                            allowHeading: p,
                            allowList: h,
                            allowLinks: m,
                            allowSubtext: E,
                            allowDevLinks: g,
                            previewLinkTarget: v,
                            shouldFilterKeywords: b,
                            viewingChannelId: I
                        }),
        [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, n, d, f, _, p, h, m, v, E, b]
    );
}
