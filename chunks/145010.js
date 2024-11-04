n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var l = n(399606),
    r = n(481060),
    s = n(125268),
    a = n(673125),
    o = n(292793),
    c = n(390322),
    u = n(871499),
    d = n(12168),
    h = n(304388),
    m = n(388032);
function p(e) {
    let { channel: t } = e,
        n = (0, l.e7)([a.Z], () => a.Z.getDrawMode()),
        p = (null == n ? void 0 : n.type) === o.W.EMOJI_HOSE,
        f = (e, t) => {
            null != e
                ? (0, s.Bo)({
                      type: o.W.EMOJI_HOSE,
                      emojiName: e.name,
                      emojiId: e.id
                  })
                : p && (0, s.Bo)(null),
                null == t || t();
        };
    return (0, i.jsx)(h.Z, {
        renderPopout: (e) => {
            let { closePopout: n, onFocus: l } = e;
            return (0, i.jsx)(c.Z, {
                children: (0, i.jsx)(d.Z, {
                    title: m.intl.string(m.t.XYLOyM),
                    channel: t,
                    closePopout: n,
                    onFocus: l,
                    onSelectEmoji: (e) => f(e, n)
                })
            });
        },
        children: (e) =>
            (0, i.jsx)(u.Z, {
                ...e,
                iconComponent: r.PaintbrushThinIcon,
                isActive: p || e.isActive,
                onClick: (t) => {
                    f(null), e.onClick(t);
                }
            })
    });
}
