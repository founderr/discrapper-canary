n.d(t, {
    T: function () {
        return c;
    }
}),
    n(47120);
var r = n(200651),
    i = n(442837),
    a = n(241601),
    s = n(406128),
    o = n(706454),
    l = n(388032),
    u = n(316184);
function c(e) {
    let { children: t } = e,
        n = (0, i.e7)([o.default], () => o.default.locale),
        [c, d] = (0, a.R_)((e) => [e.isLoading, e.error]);
    return null != d
        ? (0, r.jsx)(s.Z, {
              title: l.intl.formatToPlainString(l.t['7basa2'], { locale: n }),
              note: (0, r.jsx)('span', { children: d.message })
          })
        : c
          ? __OVERLAY__
              ? null
              : (0, r.jsx)('div', { className: u.loading })
          : null != t
            ? t
            : null;
}
