n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(689938),
    l = n(774056);
function u(e) {
    let { className: t, src: n, unicodeEmoji: i, name: u, size: c = 20, enableTooltip: d = !0, enableHeight: _ = !0, onClick: E } = e;
    if (null == n && null == i) return null;
    let f = () => {
        let e = (0, r.jsx)('img', {
            alt: '',
            'aria-label': s.Z.Messages.ROLE_ICON_ALT_TEXT.format({ name: u }),
            className: a()(l.roleIcon, t, { [l.clickable]: null != E }),
            height: _ ? c : void 0,
            src: n,
            width: c
        });
        return (null != i &&
            (e = (0, r.jsx)('img', {
                alt: '',
                'aria-label': i.allNamesString,
                className: a()(l.roleIcon, t, { [l.clickable]: null != E }),
                height: _ ? c : void 0,
                src: i.url,
                width: c
            })),
        null == E)
            ? (0, r.jsx)(o.FocusRing, {
                  offset: { left: 5 },
                  children: e
              })
            : (0, r.jsx)(o.Clickable, {
                  onClick: E,
                  tag: 'span',
                  focusProps: { offset: { left: 5 } },
                  children: e
              });
    };
    return (0, r.jsx)(o.TooltipContainer, {
        text: u,
        'aria-label': !1,
        shouldShow: d,
        element: 'span',
        children: f()
    });
}
