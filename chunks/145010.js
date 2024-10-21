n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var s = n(399606),
    a = n(481060),
    l = n(125268),
    r = n(673125),
    o = n(292793),
    c = n(390322),
    u = n(871499),
    d = n(12168),
    h = n(304388),
    p = n(689938);
function m(e) {
    let { channel: t } = e,
        n = (0, s.e7)([r.Z], () => r.Z.getDrawMode()),
        m = (null == n ? void 0 : n.type) === o.W.EMOJI_HOSE,
        _ = (e, t) => {
            null != e
                ? (0, l.Bo)({
                      type: o.W.EMOJI_HOSE,
                      emojiName: e.name,
                      emojiId: e.id
                  })
                : m && (0, l.Bo)(null),
                null == t || t();
        };
    return (0, i.jsx)(h.Z, {
        renderPopout: (e) => {
            let { closePopout: n, onFocus: s } = e;
            return (0, i.jsx)(c.Z, {
                children: (0, i.jsx)(d.Z, {
                    title: p.Z.Messages.SHARED_CANVAS_DRAW_MODE_EMOJI_HOSE,
                    channel: t,
                    closePopout: n,
                    onFocus: s,
                    onSelectEmoji: (e) => _(e, n)
                })
            });
        },
        children: (e) =>
            (0, i.jsx)(u.Z, {
                ...e,
                iconComponent: a.PaintbrushThinIcon,
                isActive: m || e.isActive,
                onClick: (t) => {
                    _(null), e.onClick(t);
                }
            })
    });
}
