s.d(t, {
    U: function () {
        return c;
    }
});
var a = s(200651);
s(192379);
var r = s(120356),
    n = s.n(r),
    i = s(481060),
    l = s(689938),
    o = s(74708);
let c = (e) => {
    let { className: t, isPartiallyPurchased: s } = e;
    return s
        ? (0, a.jsx)(i.Tooltip, {
              tooltipClassName: o.partiallyOwnedDisclaimer,
              position: 'top',
              align: 'left',
              text: l.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED_DISCLAIMER,
              children: (e) =>
                  (0, a.jsxs)('div', {
                      className: n()(o.partialOwnStateContainer, t),
                      ...e,
                      children: [
                          (0, a.jsx)('span', {
                              className: o.iconWrapper,
                              children: (0, a.jsx)(i.CircleInformationIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o.infoIcon
                              })
                          }),
                          (0, a.jsx)(i.Text, {
                              variant: 'text-md/semibold',
                              children: l.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED
                          })
                      ]
                  })
          })
        : (0, a.jsx)(i.Text, {
              variant: 'text-md/semibold',
              className: t,
              children: l.Z.Messages.COLLECTIBLES_ALREADY_OWNED
          });
};
