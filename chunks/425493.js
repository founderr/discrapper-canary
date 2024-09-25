var r,
    i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(873546),
    l = n(481060),
    u = n(689938),
    c = n(619558);
!(function (e) {
    (e.DEFAULT = ''), (e.BOLD = 'Bold'), (e.SOLID = 'Solid');
})(r || (r = {}));
let d = (e) => {
    let { closeAction: t, variant: n, keybind: r, className: a } = e;
    return (0, i.jsxs)('div', {
        className: o()(c.container, a),
        children: [
            (0, i.jsx)(l.Clickable, {
                className: o()(c.closeButton, {
                    [c.closeButtonBold]: 'Bold' === n,
                    [c.closeButtonSolid]: 'Solid' === n
                }),
                onClick: t,
                'aria-label': u.Z.Messages.CLOSE,
                children:
                    'Solid' === n
                        ? (0, i.jsx)(l.CircleXIcon, {
                              size: 'md',
                              color: 'currentColor',
                              'aria-hidden': !0
                          })
                        : (0, i.jsx)(l.XSmallIcon, {
                              size: 'sm',
                              color: 'currentColor',
                              'aria-hidden': !0
                          })
            }),
            s.tq
                ? null
                : (0, i.jsx)('div', {
                      className: o()(c.keybind),
                      'aria-hidden': !0,
                      children: r
                  })
        ]
    });
};
(d.defaultProps = { variant: '' }), (d.Variants = r), (t.Z = d);
