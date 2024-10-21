n.d(t, {
    Z: function () {
        return g;
    }
});
var s = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(481060),
    l = n(388905),
    o = n(661824),
    c = n(720196),
    u = n(981631),
    d = n(689938),
    _ = n(340214),
    h = n(113207);
function E(e) {
    let { children: t } = e;
    return (0, s.jsx)('li', {
        className: _.listItem,
        children: (0, s.jsx)(a.Text, {
            variant: 'text-sm/medium',
            color: 'text-normal',
            children: t
        })
    });
}
function g(e) {
    let { setSlide: t, transitionTo: r } = e;
    return (0, s.jsxs)('div', {
        children: [
            (0, s.jsx)(l.Ee, {
                src: n(26230),
                className: i()(h.marginBottom20, h.marginTop8)
            }),
            (0, s.jsx)(l.Dx, {
                className: h.marginBottom8,
                children: d.Z.Messages.ACCOUNT_REVERT_SLIDE_TITLE
            }),
            (0, s.jsx)(a.Text, {
                variant: 'text-md/normal',
                children: d.Z.Messages.ACCOUNT_REVERT_EXPLAINER_INTRO_TEXT
            }),
            (0, s.jsxs)(l.gO, {
                className: i()(h.marginBottom20, h.marginTop20),
                children: [
                    (0, s.jsx)(a.Text, { variant: 'text-sm/normal' }),
                    (0, s.jsxs)('ul', {
                        className: _.listContainer,
                        children: [(0, s.jsx)(E, { children: d.Z.Messages.ACCOUNT_REVERT_EXPLAINER_ITEM_CHANGE_EMAIL }), (0, s.jsx)(o.Z, {}), (0, s.jsx)(E, { children: d.Z.Messages.ACCOUNT_REVERT_EXPLAINER_ITEM_REMOVE_PHONE }), (0, s.jsx)(o.Z, {}), (0, s.jsx)(E, { children: d.Z.Messages.ACCOUNT_REVERT_EXPLAINER_ITEM_CHANGE_PASS }), (0, s.jsx)(o.Z, {}), (0, s.jsx)(E, { children: d.Z.Messages.ACCOUNT_REVERT_EXPLAINER_ITEM_REMOVE_MFA }), (0, s.jsx)(o.Z, {}), (0, s.jsx)(E, { children: d.Z.Messages.ACCOUNT_REVERT_EXPLAINER_ITEM_REVOKE_OTHER_URLS })]
                    })
                ]
            }),
            (0, s.jsx)(a.Text, {
                variant: 'text-md/normal',
                children: d.Z.Messages.ACCOUNT_REVERT_CONFIRM_CERTAIN_TEXT
            }),
            (0, s.jsxs)('div', {
                className: _.buttonContainer,
                children: [
                    (0, s.jsx)(l.zx, {
                        look: l.zx.Looks.OUTLINED,
                        onClick: () => t(c.n.PASSWORD),
                        children: d.Z.Messages.ACCOUNT_REVERT_CONFIRM_PROCEED
                    }),
                    (0, s.jsx)(l.zx, {
                        color: l.zx.Colors.RED,
                        onClick: () => r(u.Z5c.LOGIN),
                        children: d.Z.Messages.ACCOUNT_REVERT_JUST_VISITING
                    })
                ]
            })
        ]
    });
}
