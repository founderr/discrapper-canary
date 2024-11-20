n.d(t, {
    U: function () {
        return c;
    }
});
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    s = n(481060),
    l = n(388032),
    o = n(74708);
let c = (e) => {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, r.jsx)(s.Tooltip, {
              tooltipClassName: o.partiallyOwnedDisclaimer,
              position: 'top',
              align: 'left',
              text: l.intl.string(l.t['2MCxfX']),
              children: (e) =>
                  (0, r.jsxs)('div', {
                      className: i()(o.partialOwnStateContainer, t),
                      ...e,
                      children: [
                          (0, r.jsx)('span', {
                              className: o.iconWrapper,
                              children: (0, r.jsx)(s.CircleInformationIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o.infoIcon
                              })
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: 'text-md/semibold',
                              children: l.intl.string(l.t['5b+JhY'])
                          })
                      ]
                  })
          })
        : (0, r.jsx)(s.Text, {
              variant: 'text-md/semibold',
              className: t,
              children: l.intl.string(l.t['/bUsx8'])
          });
};
