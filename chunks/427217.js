n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var a = n(120356),
    s = n.n(a),
    r = n(788307),
    l = n(338133);
function o(e) {
    let { activity: t, className: n, emojiClassName: a, textClassName: o, placeholderText: c, soloEmojiClassName: d, animate: u = !0, hideTooltip: _ = !1, hideEmoji: E = !1, children: h } = e;
    if (null == t) return null;
    let { emoji: m } = t,
        I = null != t.state && '' !== t.state ? t.state : c;
    return (0, i.jsxs)('div', {
        className: s()(l.__invalid_container, n),
        children: [
            E || null == m
                ? null
                : (0, i.jsx)(r.Iv, {
                      emoji: m,
                      className: s()(l.emoji, a, null != d ? { [d]: null == I || '' === I } : null),
                      animate: u,
                      hideTooltip: _
                  }),
            null != I && I.length > 0
                ? (0, i.jsx)('span', {
                      className: o,
                      children: I
                  })
                : null,
            h
        ]
    });
}
