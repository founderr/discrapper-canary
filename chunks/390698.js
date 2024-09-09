r.d(t, {
    U: function () {
        return c;
    }
});
var a = r(735250);
r(470079);
var n = r(120356),
    s = r.n(n),
    i = r(481060),
    o = r(689938),
    l = r(613616);
let c = (e) => {
    let { className: t, isPartiallyPurchased: r } = e;
    return r
        ? (0, a.jsx)(i.Tooltip, {
              tooltipClassName: l.partiallyOwnedDisclaimer,
              position: 'top',
              align: 'left',
              text: o.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED_DISCLAIMER,
              children: (e) =>
                  (0, a.jsxs)('div', {
                      className: s()(l.partialOwnStateContainer, t),
                      ...e,
                      children: [
                          (0, a.jsx)('span', {
                              className: l.iconWrapper,
                              children: (0, a.jsx)(i.CircleInformationIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: l.infoIcon
                              })
                          }),
                          (0, a.jsx)(i.Text, {
                              variant: 'text-md/semibold',
                              children: o.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED
                          })
                      ]
                  })
          })
        : (0, a.jsx)(i.Text, {
              variant: 'text-md/semibold',
              className: t,
              children: o.Z.Messages.COLLECTIBLES_ALREADY_OWNED
          });
};
