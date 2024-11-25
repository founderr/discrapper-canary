n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(518950),
    c = n(357355),
    d = n(388032),
    f = n(910153);
function _() {
    let e = (0, o.e7)([c.Z], () => c.Z.affinities.slice(0, 3)),
        t = e[0],
        { avatarSrc: n, eventHandlers: a } = (0, u.Z)({
            user: t,
            size: l.AvatarSizes.SIZE_24,
            animateOnHover: !0
        }),
        _ = (e) => (null != e.globalName ? e.globalName : e.username),
        p = i.useMemo(() => (e.length >= 2 ? d.intl.formatToPlainString(d.t.c7ETJC, { username: _(e[0]) }) : 1 === e.length ? d.intl.formatToPlainString(d.t.dpjXPD, { username: _(e[0]) }) : ''), [e]);
    return 0 === e.length
        ? null
        : (0, r.jsxs)('div', {
              className: f.container,
              children: [
                  (0, r.jsx)(l.Avatar, {
                      className: f.__invalid_icon,
                      src: n,
                      'aria-label': t.username,
                      size: l.AvatarSizes.SIZE_24,
                      ...a
                  }),
                  (0, r.jsx)(l.Text, {
                      className: s()(f.text),
                      variant: 'text-sm/normal',
                      color: 'always-white',
                      children: p
                  })
              ]
          });
}
