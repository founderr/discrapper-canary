s(47120);
var n = s(200651);
s(192379);
var l = s(120356),
    i = s.n(l),
    a = s(481060),
    r = s(968437),
    o = s(689938),
    c = s(469017);
t.Z = (e) => {
    let { autoArchiveDuration: t, onChange: s, isDisabled: l } = e,
        d = (0, r.nt)(),
        u = (e, t) =>
            (0, n.jsx)('span', {
                className: i()(c.optionLabel, { [c.dropdownOption]: t }),
                children: e.label
            });
    return (0, n.jsx)(a.FormSection, {
        title: o.Z.Messages.FORM_THREAD_AUTO_ARCHIVE_SECTION_LABEL,
        className: c.formSection,
        children: (0, n.jsx)(a.SingleSelect, {
            isDisabled: l,
            options: d,
            value: t,
            maxVisibleItems: d.length,
            onChange: s,
            optionClassName: c.dropdownOption,
            renderOptionLabel: (e) => u(e, !0),
            renderOptionValue: (e) => {
                let [t] = e;
                return u(t, !1);
            }
        })
    });
};
