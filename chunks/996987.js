t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var a = t(481060),
    l = t(600164),
    s = t(313201),
    o = t(63063),
    r = t(453628),
    d = t(689938),
    c = t(113207);
function u(e) {
    let { value: n, onChange: t, children: u, note: I, helpdeskArticleId: m, style: _, disabled: N = !1, hideBorder: E = !1, className: T = c.marginBottom20 } = e,
        h = (0, s.Dt)();
    return (0, i.jsxs)(l.Z, {
        style: _,
        className: T,
        direction: l.Z.Direction.VERTICAL,
        children: [
            (0, i.jsxs)(l.Z, {
                children: [
                    (0, i.jsx)(l.Z.Child, {
                        children: (0, i.jsx)(a.FormTitle, {
                            id: h,
                            className: c.marginReset,
                            tag: a.FormTitleTags.H3,
                            disabled: N,
                            children: u
                        })
                    }),
                    (0, i.jsx)(l.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(r.Z, {
                            value: n,
                            onChange: t,
                            disabled: N,
                            labelledBy: h
                        })
                    })
                ]
            }),
            null != I &&
                (0, i.jsx)(l.Z.Child, {
                    className: c.marginTop4,
                    children: (0, i.jsx)(a.FormText, {
                        type: a.FormTextTypes.DESCRIPTION,
                        children: I
                    })
                }),
            null != m &&
                (0, i.jsx)(l.Z.Child, {
                    className: c.marginTop4,
                    children: (0, i.jsx)(a.FormText, {
                        disabled: N,
                        type: a.FormTextTypes.DESCRIPTION,
                        children: (0, i.jsx)(a.Anchor, {
                            href: o.Z.getArticleURL(m),
                            children: d.Z.Messages.LEARN_MORE
                        })
                    })
                }),
            !E &&
                (0, i.jsx)(l.Z.Child, {
                    className: c.marginTop20,
                    children: (0, i.jsx)(a.FormDivider, {})
                })
        ]
    });
}
r.Z.Types, (u.Types = r.Z.Types);
