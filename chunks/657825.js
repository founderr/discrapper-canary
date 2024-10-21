var s = n(200651);
n(192379);
var a = n(399606),
    r = n(481060),
    i = n(594174),
    l = n(51144),
    o = n(546791),
    c = n(198952),
    _ = n(939941);
t.Z = (e) => {
    let { userId: t, timestamp: n, timestampFormatter: d } = e,
        E = (0, a.e7)([i.default], () => i.default.getUser(t));
    return void 0 === E
        ? null
        : (0, s.jsxs)('div', {
              className: _.container,
              children: [
                  (0, s.jsx)(c.r, {
                      user: E,
                      avatarSize: r.AvatarSizes.SIZE_40
                  }),
                  (0, s.jsx)('div', {
                      children: (0, s.jsxs)('div', {
                          className: _.descriptors,
                          children: [
                              (0, s.jsx)(r.Text, {
                                  variant: 'text-md/semibold',
                                  children: l.ZP.getName(E)
                              }),
                              (0, s.jsx)(r.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-muted',
                                  children: (0, o.LI)(new Date(n).getTime(), d)
                              })
                          ]
                      })
                  })
              ]
          });
};
