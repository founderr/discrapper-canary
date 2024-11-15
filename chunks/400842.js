i.d(t, {
    d: function () {
        return d;
    }
});
var n = i(200651);
i(192379);
var o = i(120356),
    l = i.n(o),
    a = i(692547),
    r = i(481060);
i(651711);
var s = i(551556);
i(388032);
var c = i(212715);
i(347157), i(177266);
let d = (e) => {
    let { name: t, description: i, checked: o, actionLabel: d, actionHandler: u } = e,
        _ = null;
    return (
        (_ = o
            ? (0, n.jsx)(s.Z, {
                  width: 20,
                  height: 20
              })
            : (0, n.jsx)(r.CircleXIcon, {
                  size: 'custom',
                  color: a.Z.unsafe_rawColors.RED_400.css,
                  width: 20,
                  height: 20
              })),
        (0, n.jsxs)('div', {
            className: c.checklistItem,
            children: [
                (0, n.jsx)('div', {
                    className: c.checklistIcon,
                    children: _
                }),
                (0, n.jsxs)('div', {
                    className: l()(c.__invalid_checklistText, o && c.ineligibleRow),
                    children: [
                        (0, n.jsx)(r.Heading, {
                            variant: 'heading-md/semibold',
                            className: c.checklistItemName,
                            children: t
                        }),
                        (0, n.jsx)(r.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: i
                        })
                    ]
                }),
                null != d &&
                    (0, n.jsx)('div', {
                        className: c.eligibilityActionContainer,
                        children: (0, n.jsx)(r.Button, {
                            className: c.eligibilityActionButton,
                            look: r.ButtonLooks.OUTLINED,
                            color: r.ButtonColors.PRIMARY,
                            onClick: u,
                            grow: !0,
                            children: d
                        })
                    })
            ]
        })
    );
};
