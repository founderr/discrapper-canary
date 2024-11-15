n.d(t, {
    T: function () {
        return d;
    }
}),
    n(47120);
var r = n(200651),
    i = n(976649),
    a = n(442837),
    s = n(241601),
    o = n(406128),
    l = n(706454),
    u = n(388032),
    c = n(88719);
function d(e) {
    let { children: t } = e,
        n = (0, a.e7)([l.default], () => l.default.locale),
        [d, f] = (0, s.R_)((e) => [e.isLoading, e.error], i.X);
    return null != f
        ? (0, r.jsx)(o.Z, {
              title: u.intl.formatToPlainString(u.t['7basa2'], { locale: n }),
              note: (0, r.jsx)('span', { children: f.message })
          })
        : d
          ? __OVERLAY__
              ? null
              : (0, r.jsx)('div', { className: c.loading })
          : null != t
            ? t
            : null;
}
