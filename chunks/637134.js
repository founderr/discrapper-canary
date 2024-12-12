t.d(n, {
    Z: function () {
        return o;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(481060),
    a = t(934269),
    s = t(910200),
    c = t(313340);
function o(e) {
    let { guildId: n } = e,
        { guildProfile: t, fetchGuildProfile: o } = (0, a.u)(n);
    return (i.useEffect(() => {
        o();
    }, [o]),
    null == t)
        ? (0, l.jsx)('div', {
              className: c.container,
              children: (0, l.jsx)(r.Spinner, {})
          })
        : (0, l.jsx)(r.Dialog, {
              'aria-label': t.name,
              children: (0, l.jsx)('div', {
                  className: c.container,
                  children: (0, l.jsx)(s.Z, { profile: t })
              })
          });
}
