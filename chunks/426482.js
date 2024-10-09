a.d(n, {
    C: function () {
        return _;
    },
    Z: function () {
        return t;
    }
}),
    a(47120);
var t,
    r,
    s = a(735250),
    i = a(470079),
    o = a(120356),
    l = a.n(o),
    c = a(793030),
    d = a(689938),
    u = a(522840);
function _(e) {
    var n;
    let { game: a, application: t, size: r, className: o } = e,
        [_, E] = i.useState(!1),
        m = null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : a.name,
        I = null != a.firstReleaseDate ? new Date(a.firstReleaseDate) : null;
    return null == a.coverImageUrl || _
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
              src: a.coverImageUrl,
              alt: d.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: m }),
              onError: () => {
                  E(!0);
              },
              onLoad: () => {
                  E(!1);
              }
          });
}
((r = t || (t = {}))[(r.SMALL = 0)] = 'SMALL'), (r[(r.LARGE = 1)] = 'LARGE');
