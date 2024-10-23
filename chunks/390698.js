r.d(t, {
    U: function () {
        return c;
    }
});
var s = r(200651);
r(192379);
var n = r(120356),
    a = r.n(n),
    i = r(481060),
    l = r(689938),
    o = r(74708);
let c = (e) => {
    let { className: t, isPartiallyPurchased: r } = e;
    return r
        ? (0, s.jsx)(i.Tooltip, {
              tooltipClassName: o.partiallyOwnedDisclaimer,
              position: 'top',
              align: 'left',
              text: l.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED_DISCLAIMER,
              children: (e) =>
                  (0, s.jsxs)('div', {
                      className: a()(o.partialOwnStateContainer, t),
                      ...e,
                      children: [
                          (0, s.jsx)('span', {
                              className: o.iconWrapper,
                              children: (0, s.jsx)(i.CircleInformationIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o.infoIcon
                              })
                          }),
                          (0, s.jsx)(i.Text, {
                              variant: 'text-md/semibold',
                              children: l.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED
                          })
                      ]
                  })
          })
        : (0, s.jsx)(i.Text, {
              variant: 'text-md/semibold',
              className: t,
              children: l.Z.Messages.COLLECTIBLES_ALREADY_OWNED
          });
};
