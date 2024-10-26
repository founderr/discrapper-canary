n.d(t, {
    C: function () {
        return _;
    },
    Z: function () {
        return a;
    }
}),
    n(47120);
var a,
    r,
    s = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    c = n(793030),
    d = n(689938),
    u = n(522840);
function _(e) {
    var t;
    let { game: n, application: a, size: r, className: o } = e,
        [_, E] = i.useState(!1),
        m = null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : n.name,
        I = null != n.firstReleaseDate ? new Date(n.firstReleaseDate) : null;
    return null == n.coverImageUrl || _
        ? (0, s.jsxs)('div', {
              className: l()(u.fallback, o),
              children: [
                  (0, s.jsx)('div', { className: u.spacer }),
                  (0, s.jsx)(c.xv, {
                      variant: 1 === r ? 'text-md/medium' : 'text-xs/medium',
                      color: 'always-white',
                      lineClamp: 1 === r ? 4 : 3,
                      children: m
                  }),
                  (0, s.jsx)('div', { className: u.spacer }),
                  (0, s.jsx)(c.xv, {
                      variant: 1 === r ? 'text-sm/normal' : 'text-xxs/normal',
                      color: 'always-white',
                      children: null != I ? '('.concat(null == I ? void 0 : I.getFullYear(), ')') : null
                  })
              ]
          })
        : (0, s.jsx)('img', {
              className: o,
              src: n.coverImageUrl,
              alt: d.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: m }),
              onError: () => {
                  E(!0);
              },
              onLoad: () => {
                  E(!1);
              }
          });
}
((r = a || (a = {}))[(r.SMALL = 0)] = 'SMALL'), (r[(r.LARGE = 1)] = 'LARGE');
