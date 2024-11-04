n.d(t, {
    W: function () {
        return c;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(481060),
    s = n(388032),
    a = n(649763),
    o = n(560580);
function c(e) {
    let { header: t, description: n, onDismiss: c, buttons: u, dismissible: d = !0 } = e,
        h = l.useCallback(() => {
            null == c || c();
        }, [c]);
    return (0, i.jsxs)('div', {
        className: a.safetyBanner,
        children: [
            (0, i.jsxs)('div', {
                className: a.shieldAndHeading,
                children: [
                    (0, i.jsx)('img', {
                        className: a.safetyShieldIcon,
                        src: o,
                        alt: ''
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(r.Heading, {
                                variant: 'heading-md/semibold',
                                color: 'text-primary',
                                children: t
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-primary',
                                children: n
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: a.buttons,
                children:
                    null == u
                        ? void 0
                        : u.map((e, t) => {
                              var n;
                              return (0, i.jsx)(
                                  r.Button,
                                  {
                                      size: null !== (n = e.size) && void 0 !== n ? n : r.Button.Sizes.SMALL,
                                      color: e.color,
                                      'aria-label': e.text,
                                      onClick: e.onclick,
                                      className: a.ctaButton,
                                      children: e.text
                                  },
                                  t
                              );
                          })
            }),
            d
                ? (0, i.jsx)(r.Clickable, {
                      className: a.closeButton,
                      onClick: h,
                      role: 'button',
                      'aria-label': s.intl.string(s.t.WAI6xs),
                      children: (0, i.jsx)(r.XSmallIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: a.closeButton
                      })
                  })
                : null
        ]
    });
}
