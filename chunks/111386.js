n(47120);
var i = n(200651),
    l = n(192379),
    a = n(704215),
    r = n(481060),
    o = n(243778),
    s = n(388032),
    u = n(765388),
    c = n(442937);
let d = () =>
    (0, i.jsxs)('div', {
        className: u.coachtipInner,
        children: [
            (0, i.jsx)('img', {
                src: c,
                alt: s.intl.string(s.t['9wkT19']),
                className: u.coachtipAsset
            }),
            (0, i.jsxs)('div', {
                className: u.coachtipTextContainer,
                children: [
                    (0, i.jsx)(r.Heading, {
                        variant: 'heading-lg/semibold',
                        children: s.intl.string(s.t.V5y3qa)
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'text-secondary',
                        children: s.intl.string(s.t.eSDHDg)
                    })
                ]
            })
        ]
    });
t.Z = (e) => {
    let { children: t } = e,
        [n] = (0, o.US)([a.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [s, c] = l.useState(!1);
    return (l.useEffect(() => {
        setTimeout(() => {
            c(!0);
        }, 300);
    }),
    n !== a.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP)
        ? (0, i.jsx)(i.Fragment, { children: t })
        : (0, i.jsx)(r.Tooltip, {
              text: (0, i.jsx)(d, {}),
              tooltipClassName: u.coachtip,
              tooltipContentClassName: u.coachtipContent,
              position: 'left',
              allowOverflow: !0,
              forceOpen: s,
              shouldShow: s,
              hideOnClick: !1,
              'aria-label': 'test',
              children: (e) =>
                  (0, i.jsx)('div', {
                      ...e,
                      children: t
                  })
          });
};
