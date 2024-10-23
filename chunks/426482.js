t.d(n, {
    C: function () {
        return _;
    },
    Z: function () {
        return a;
    }
}),
    t(47120);
var a,
    r,
    s = t(200651),
    i = t(192379),
    o = t(120356),
    l = t.n(o),
    c = t(793030),
    d = t(689938),
    u = t(522840);
function _(e) {
    var n;
    let { game: t, application: a, size: r, className: o } = e,
        [_, E] = i.useState(!1),
        m = null !== (n = null == a ? void 0 : a.name) && void 0 !== n ? n : t.name,
        I = null != t.firstReleaseDate ? new Date(t.firstReleaseDate) : null;
    return null == t.coverImageUrl || _
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
              src: t.coverImageUrl,
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
