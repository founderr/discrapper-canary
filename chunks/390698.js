n.d(t, {
    U: function () {
        return c;
    }
});
var r = n(200651);
n(192379);
var s = n(120356),
    a = n.n(s),
    i = n(481060),
    l = n(689938),
    o = n(74708);
let c = (e) => {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, r.jsx)(i.Tooltip, {
              tooltipClassName: o.partiallyOwnedDisclaimer,
              position: 'top',
              align: 'left',
              text: l.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED_DISCLAIMER,
              children: (e) =>
                  (0, r.jsxs)('div', {
                      className: a()(o.partialOwnStateContainer, t),
                      ...e,
                      children: [
                          (0, r.jsx)('span', {
                              className: o.iconWrapper,
                              children: (0, r.jsx)(i.CircleInformationIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o.infoIcon
                              })
                          }),
                          (0, r.jsx)(i.Text, {
                              variant: 'text-md/semibold',
                              children: l.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED
                          })
                      ]
                  })
          })
        : (0, r.jsx)(i.Text, {
              variant: 'text-md/semibold',
              className: t,
              children: l.Z.Messages.COLLECTIBLES_ALREADY_OWNED
          });
};
