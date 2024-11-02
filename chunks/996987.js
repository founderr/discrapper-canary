t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(600164),
    a = t(313201),
    o = t(63063),
    s = t(453628),
    d = t(388032),
    c = t(113207);
function u(e) {
    let { value: n, onChange: t, children: u, note: m, helpdeskArticleId: h, style: p, disabled: g = !1, hideBorder: f = !1, className: x = c.marginBottom20 } = e,
        b = (0, a.Dt)();
    return (0, i.jsxs)(r.Z, {
        style: p,
        className: x,
        direction: r.Z.Direction.VERTICAL,
        children: [
            (0, i.jsxs)(r.Z, {
                children: [
                    (0, i.jsx)(r.Z.Child, {
                        children: (0, i.jsx)(l.FormTitle, {
                            id: b,
                            className: c.marginReset,
                            tag: l.FormTitleTags.H3,
                            disabled: g,
                            children: u
                        })
                    }),
                    (0, i.jsx)(r.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(s.Z, {
                            value: n,
                            onChange: t,
                            disabled: g,
                            labelledBy: b
                        })
                    })
                ]
            }),
            null != m &&
                (0, i.jsx)(r.Z.Child, {
                    className: c.marginTop4,
                    children: (0, i.jsx)(l.FormText, {
                        type: l.FormTextTypes.DESCRIPTION,
                        children: m
                    })
                }),
            null != h &&
                (0, i.jsx)(r.Z.Child, {
                    className: c.marginTop4,
                    children: (0, i.jsx)(l.FormText, {
                        disabled: g,
                        type: l.FormTextTypes.DESCRIPTION,
                        children: (0, i.jsx)(l.Anchor, {
                            href: o.Z.getArticleURL(h),
                            children: d.intl.string(d.t.hvVgAQ)
                        })
                    })
                }),
            !f &&
                (0, i.jsx)(r.Z.Child, {
                    className: c.marginTop20,
                    children: (0, i.jsx)(l.FormDivider, {})
                })
        ]
    });
}
s.Z.Types, (u.Types = s.Z.Types);
