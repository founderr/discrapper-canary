t(47120);
var a = t(735250),
    l = t(470079),
    i = t(704215),
    r = t(481060),
    s = t(243778),
    o = t(689938),
    c = t(576306),
    u = t(442937);
let d = () =>
    (0, a.jsxs)('div', {
        className: c.coachtipInner,
        children: [
            (0, a.jsx)('img', {
                src: u,
                alt: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_IMAGE_ALT,
                className: c.coachtipAsset
            }),
            (0, a.jsxs)('div', {
                className: c.coachtipTextContainer,
                children: [
                    (0, a.jsx)(r.Heading, {
                        variant: 'heading-lg/semibold',
                        children: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_HEADER
                    }),
                    (0, a.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'text-secondary',
                        children: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_TEXT
                    })
                ]
            })
        ]
    });
n.Z = (e) => {
    let { children: n } = e,
        [t] = (0, s.US)([i.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [o, u] = l.useState(!1);
    return (l.useEffect(() => {
        setTimeout(() => {
            u(!0);
        }, 300);
    }),
    t !== i.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP)
        ? (0, a.jsx)(a.Fragment, { children: n })
        : (0, a.jsx)(r.Tooltip, {
              text: (0, a.jsx)(d, {}),
              tooltipClassName: c.coachtip,
              tooltipContentClassName: c.coachtipContent,
              position: 'left',
              allowOverflow: !0,
              forceOpen: o,
              shouldShow: o,
              hideOnClick: !1,
              'aria-label': 'test',
              children: (e) =>
                  (0, a.jsx)('div', {
                      ...e,
                      children: n
                  })
          });
};
