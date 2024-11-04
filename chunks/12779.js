var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(481060),
    o = n(194082),
    c = n(14338),
    u = n(7459);
t.Z = l.memo(function (e) {
    let { label: t, participantCount: n, onClick: l, className: r, collapsed: d, speakers: h, channel: m, isStreamLive: p } = e;
    return (0, i.jsxs)(a.Clickable, {
        onClick: l,
        className: s()(u.container, r),
        children: [
            null == h
                ? (0, i.jsx)(a.GroupIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20,
                      height: 20,
                      className: u.micIcon
                  })
                : (0, i.jsx)(a.MicrophoneIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20,
                      height: 20,
                      className: u.micIcon
                  }),
            (0, i.jsxs)(a.Text, {
                color: 'header-primary',
                variant: 'text-md/semibold',
                className: u.text,
                children: [t, ' \u2014 ', n]
            }),
            d &&
                null != m &&
                null != h &&
                h.length > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(c.Z, {
                            channel: m,
                            speakers: h
                        }),
                        p && (0, i.jsx)(o.ZP, {})
                    ]
                }),
            (0, i.jsx)(a.ChevronSmallDownIcon, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20,
                className: s()(u.downIcon, { [u.upIcon]: d })
            })
        ]
    });
});
