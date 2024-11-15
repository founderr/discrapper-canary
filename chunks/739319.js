n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(454585),
    u = n(572004),
    c = n(388032),
    d = n(487544);
function f(e) {
    let {
            element: {
                data: { title: t, body: n, sms: a, is_localized: f }
            }
        } = e,
        [_, p] = i.useState(!1),
        h = i.useRef(l.Z.reactParserFor(l.Z.defaultRules));
    return f
        ? (0, r.jsxs)('div', {
              className: d.container,
              children: [
                  (0, r.jsx)(o.Heading, {
                      variant: 'heading-sm/semibold',
                      color: 'header-secondary',
                      className: d.header,
                      children: t
                  }),
                  (0, r.jsx)(o.Text, {
                      variant: 'text-sm/normal',
                      className: d.bodyText,
                      children: h.current(n)
                  }),
                  (0, r.jsx)('div', {
                      className: d.__invalid_smsInfoContainer,
                      children: (0, r.jsxs)('div', {
                          className: s()(d.smsNumberContainer, { [d.copied]: _ }),
                          children: [
                              (0, r.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  selectable: !0,
                                  className: d.smsNumberText,
                                  children: a
                              }),
                              (0, r.jsx)(o.Button, {
                                  size: o.Button.Sizes.SMALL,
                                  className: d.__invalid_trailingButton,
                                  onClick: () => {
                                      (0, u.JG)(a) && p(!0);
                                  },
                                  color: o.Button.Colors.PRIMARY,
                                  children: _ ? c.intl.string(c.t['t5VZ8/']) : c.intl.string(c.t.OpuAlJ)
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}
