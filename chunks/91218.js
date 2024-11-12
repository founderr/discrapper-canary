n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(388032),
    l = n(774056);
function u(e) {
    let t,
        { className: n, src: i, unicodeEmoji: u, name: c, size: d = 20, enableTooltip: f = !0, enableHeight: _ = !0, onClick: p } = e;
    if (null == i && null == u) return null;
    return (0, r.jsx)(s.TooltipContainer, {
        text: c,
        'aria-label': !1,
        shouldShow: f,
        element: 'span',
        children:
            ((t = (0, r.jsx)('img', {
                alt: '',
                'aria-label': o.intl.formatToPlainString(o.t['9+YWrK'], { name: c }),
                className: a()(l.roleIcon, n, { [l.clickable]: null != p }),
                height: _ ? d : void 0,
                src: i,
                width: d
            })),
            (null != u &&
                (t = (0, r.jsx)('img', {
                    alt: '',
                    'aria-label': u.allNamesString,
                    className: a()(l.roleIcon, n, { [l.clickable]: null != p }),
                    height: _ ? d : void 0,
                    src: u.url,
                    width: d
                })),
            null == p)
                ? (0, r.jsx)(s.FocusRing, {
                      offset: { left: 5 },
                      children: t
                  })
                : (0, r.jsx)(s.Clickable, {
                      onClick: p,
                      tag: 'span',
                      focusProps: { offset: { left: 5 } },
                      children: t
                  }))
    });
}
