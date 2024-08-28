n.d(t, {
    U: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var s = n(120356),
    a = n.n(s),
    i = n(481060),
    o = n(689938),
    l = n(613616);
let c = (e) => {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, r.jsx)(i.Tooltip, {
              tooltipClassName: l.partiallyOwnedDisclaimer,
              position: 'top',
              align: 'left',
              text: o.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED_DISCLAIMER,
              children: (e) =>
                  (0, r.jsxs)('div', {
                      className: a()(l.partialOwnStateContainer, t),
                      ...e,
                      children: [
                          (0, r.jsx)('span', {
                              className: l.iconWrapper,
                              children: (0, r.jsx)(i.CircleInformationIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: l.infoIcon
                              })
                          }),
                          (0, r.jsx)(i.Text, {
                              variant: 'text-md/semibold',
                              children: o.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED
                          })
                      ]
                  })
          })
        : (0, r.jsx)(i.Text, {
              variant: 'text-md/semibold',
              className: t,
              children: o.Z.Messages.COLLECTIBLES_ALREADY_OWNED
          });
};
