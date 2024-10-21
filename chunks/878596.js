var n = t(200651);
t(192379);
var a = t(481060),
    i = t(93560);
s.Z = (e) => {
    let { label: s, onClick: t, submitting: r } = e;
    return (0, n.jsx)(a.Clickable, {
        onClick: r ? void 0 : t,
        className: i.button,
        children: (0, n.jsxs)('div', {
            className: i.contentContainer,
            children: [
                r
                    ? (0, n.jsx)(a.Spinner, {
                          type: a.Spinner.Type.PULSING_ELLIPSIS,
                          className: i.__invalid_spinner
                      })
                    : (0, n.jsx)(a.Text, {
                          variant: 'text-md/medium',
                          className: i.label,
                          children: s
                      }),
                (0, n.jsx)(a.ChevronSmallDownIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: i.arrow
                })
            ]
        })
    });
};
