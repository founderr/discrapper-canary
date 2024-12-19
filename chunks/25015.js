r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(192379),
    a = r(905405),
    s = r(626135),
    o = r(937889),
    l = r(761910),
    u = r(981631),
    c = r(388032),
    d = r(617768);
function f(e, n) {
    let { hideSimpleEmbedContent: r, formatInline: f = !1, noStyleAndInteraction: _ = !1, isInteracting: h = !1, allowHeading: p = !1, allowList: m = !1, allowLinks: g = !1, allowDevLinks: E = !1, previewLinkTarget: v = !1, viewingChannelId: I } = n,
        T = (0, a.p)();
    return i.useMemo(
        () =>
            null != e.customRenderedContent
                ? e.customRenderedContent
                : e.isUnsupported
                  ? {
                        content: c.intl.string(c.t.sWi5ER),
                        hasSpoilerEmbeds: !1
                    }
                  : (e.isCommandType() && 0 === e.content.length) || e.hasFlag(u.iLy.LOADING)
                    ? (0, l.Z)(e)
                    : e.type === u.uaV.CHANGELOG
                      ? (0, o.n0)(e, d, {
                            track: (e, n) => {
                                s.default.track(e, n);
                            }
                        })
                      : (0, o.ZP)(e, {
                            hideSimpleEmbedContent: r,
                            formatInline: f,
                            noStyleAndInteraction: _,
                            isInteracting: h,
                            allowHeading: p,
                            allowList: m,
                            allowLinks: g,
                            allowDevLinks: E,
                            previewLinkTarget: v,
                            shouldFilterKeywords: T,
                            viewingChannelId: I
                        }),
        [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, r, f, _, h, p, m, g, v, T]
    );
}
