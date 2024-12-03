var s = i(200651);
i(192379);
var a = i(120356),
    n = i.n(a),
    r = i(481060),
    l = i(285888),
    o = i(456268),
    d = i(526429),
    c = i(450474),
    m = i(128449),
    u = i(388032),
    x = i(89388);
t.Z = (e) => {
    let { guild: t, guildMetadata: i, headerId: a } = e,
        g = d.Z.getPrimaryCategories().map((e) => {
            let { categoryId: t, name: i } = e;
            return {
                value: t,
                label: i
            };
        });
    return (0, s.jsxs)('div', {
        className: x.container,
        children: [
            (0, s.jsxs)('div', {
                className: x.content,
                children: [
                    (0, s.jsx)('div', { className: n()(x.stepImage, x.tagImage) }),
                    (0, s.jsx)(r.Heading, {
                        variant: 'heading-xl/semibold',
                        className: x.header,
                        id: a,
                        children: u.intl.string(u.t.Rv9An5)
                    }),
                    (0, s.jsx)(r.Text, {
                        color: 'none',
                        variant: 'text-md/normal',
                        className: x.headerCaption,
                        children: u.intl.string(u.t.MMEJFB)
                    })
                ]
            }),
            (0, s.jsxs)(r.FormSection, {
                className: x.form,
                children: [
                    (0, s.jsx)(r.FormTitle, {
                        required: !0,
                        children: u.intl.string(u.t.Rv9An5)
                    }),
                    (0, s.jsx)(r.FormText, {
                        type: r.FormTextTypes.DESCRIPTION,
                        className: x.description,
                        children: u.intl.string(u.t.CE5Gyc)
                    }),
                    (0, s.jsx)(l.Z, {
                        value: i.primaryCategoryId === m.o3 ? null : i.primaryCategoryId,
                        placeholder: u.intl.string(u.t.XqMe3N),
                        searchable: !0,
                        clearable: !1,
                        options: g,
                        onChange: (e) => {
                            var i;
                            (null == t ? void 0 : t.id) != null && (0, o.TA)(null == t ? void 0 : t.id, null !== (i = null == e ? void 0 : e.value) && void 0 !== i ? i : m.o3);
                        },
                        maxMenuHeight: 250
                    })
                ]
            }),
            (0, s.jsxs)(r.FormSection, {
                className: x.form,
                children: [
                    (0, s.jsx)(r.FormTitle, { children: u.intl.string(u.t.pcrcpK) }),
                    (0, s.jsx)(r.FormText, {
                        type: r.FormTextTypes.DESCRIPTION,
                        className: x.description,
                        children: u.intl.string(u.t['4jnzlZ'])
                    }),
                    (0, s.jsx)(c.Z, {
                        guild: t,
                        guildMetadata: i,
                        menuPlacement: l.Z.MenuPlacements.TOP
                    })
                ]
            })
        ]
    });
};
