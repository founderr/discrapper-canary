n(47120);
var i = n(200651);
n(192379);
var l = n(120356),
    s = n.n(l),
    r = n(481060),
    a = n(968437),
    o = n(388032),
    c = n(145579);
t.Z = (e) => {
    let { autoArchiveDuration: t, onChange: n, isDisabled: l } = e,
        d = (0, a.nt)(),
        u = (e, t) =>
            (0, i.jsx)('span', {
                className: s()(c.optionLabel, { [c.dropdownOption]: t }),
                children: e.label
            });
    return (0, i.jsx)(r.FormSection, {
        title: o.intl.string(o.t.FGjMZW),
        className: c.formSection,
        children: (0, i.jsx)(r.SingleSelect, {
            isDisabled: l,
            options: d,
            value: t,
            maxVisibleItems: d.length,
            onChange: n,
            optionClassName: c.dropdownOption,
            renderOptionLabel: (e) => u(e, !0),
            renderOptionValue: (e) => {
                let [t] = e;
                return u(t, !1);
            }
        })
    });
};
