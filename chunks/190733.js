i(47120);
var n = i(200651),
    a = i(192379),
    r = i(120356),
    o = i.n(r),
    l = i(481060),
    s = i(981631),
    c = i(388032),
    d = i(465690);
t.Z = a.forwardRef(function (e, t) {
    let { query: i, canShowCta: r = !1, onChange: u, onSubmit: h, className: p } = e,
        [m, _] = a.useState(!1);
    return (0, n.jsx)(l.SearchBox, {
        ref: t,
        className: o()(d.search, p),
        label: c.intl.string(c.t.APrAU1),
        placeholder: c.intl.string(c.t.APrAU1),
        searchTerm: i,
        cta: r && m && i.length > 0 ? c.intl.string(c.t['CU+6oK']) : null,
        onChange: u,
        onClear: () => u(''),
        onFocus: () => _(!0),
        onBlur: () => _(!1),
        onKeyPress: (e) => {
            e.charCode === s.yXg.ENTER && (null == h || h());
        },
        autoFocus: !0
    });
});
