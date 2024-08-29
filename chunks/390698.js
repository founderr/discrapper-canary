n.d(t, {
    U: function () {
        return c;
    }
});
var a = n(735250);
n(470079);
var r = n(120356),
    s = n.n(r),
    o = n(481060),
    i = n(689938),
    l = n(613616);
let c = (e) => {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, a.jsx)(o.Tooltip, {
              tooltipClassName: l.partiallyOwnedDisclaimer,
              position: 'top',
              align: 'left',
              text: i.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED_DISCLAIMER,
              children: (e) =>
                  (0, a.jsxs)('div', {
                      className: s()(l.partialOwnStateContainer, t),
                      ...e,
                      children: [
                          (0, a.jsx)('span', {
                              className: l.iconWrapper,
                              children: (0, a.jsx)(o.CircleInformationIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: l.infoIcon
                              })
                          }),
                          (0, a.jsx)(o.Text, {
                              variant: 'text-md/semibold',
                              children: i.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED
                          })
                      ]
                  })
          })
        : (0, a.jsx)(o.Text, {
              variant: 'text-md/semibold',
              className: t,
              children: i.Z.Messages.COLLECTIBLES_ALREADY_OWNED
          });
};
