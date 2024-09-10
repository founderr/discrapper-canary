n(47120);
var l = n(735250),
    a = n(470079),
    i = n(704215),
    r = n(481060),
    s = n(243778),
    o = n(689938),
    u = n(765388),
    c = n(442937);
let d = () =>
    (0, l.jsxs)('div', {
        className: u.coachtipInner,
        children: [
            (0, l.jsx)('img', {
                src: c,
                alt: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_IMAGE_ALT,
                className: u.coachtipAsset
            }),
            (0, l.jsxs)('div', {
                className: u.coachtipTextContainer,
                children: [
                    (0, l.jsx)(r.Heading, {
                        variant: 'heading-lg/semibold',
                        children: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_HEADER
                    }),
                    (0, l.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'text-secondary',
                        children: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_TEXT
                    })
                ]
            })
        ]
    });
t.Z = (e) => {
    let { children: t } = e,
        [n] = (0, s.US)([i.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [o, c] = a.useState(!1);
    return (a.useEffect(() => {
        setTimeout(() => {
            c(!0);
        }, 300);
    }),
    n !== i.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP)
        ? (0, l.jsx)(l.Fragment, { children: t })
        : (0, l.jsx)(r.Tooltip, {
              text: (0, l.jsx)(d, {}),
              tooltipClassName: u.coachtip,
              tooltipContentClassName: u.coachtipContent,
              position: 'left',
              allowOverflow: !0,
              forceOpen: o,
              shouldShow: o,
              hideOnClick: !1,
              'aria-label': 'test',
              children: (e) =>
                  (0, l.jsx)('div', {
                      ...e,
                      children: t
                  })
          });
};
