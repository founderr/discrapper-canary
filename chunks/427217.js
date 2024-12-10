n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(788307),
    o = n(874751);
function s(e) {
    let { activity: t, className: n, emojiClassName: r, textClassName: s, placeholderText: c, soloEmojiClassName: d, animate: u = !0, hideTooltip: h = !1, hideEmoji: m = !1, children: p } = e;
    if (null == t) return null;
    let { emoji: g } = t,
        f = null != t.state && '' !== t.state ? t.state : c;
    return (0, i.jsxs)('div', {
        className: l()(o.__invalid_container, n),
        children: [
            m || null == g
                ? null
                : (0, i.jsx)(a.Iv, {
                      emoji: g,
                      className: l()(o.emoji, r, null != d ? { [d]: null == f || '' === f } : null),
                      animate: u,
                      hideTooltip: h
                  }),
            null != f && f.length > 0
                ? (0, i.jsx)('span', {
                      className: s,
                      children: f
                  })
                : null,
            p
        ]
    });
}
