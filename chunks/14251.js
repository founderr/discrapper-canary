n.d(e, {
    a: function () {
        return _;
    },
    r: function () {
        return u;
    }
}),
    n(47120);
var a = n(200651),
    s = n(481060),
    i = n(785232),
    r = n(594174),
    o = n(5192),
    l = n(388032),
    d = n(17222);
let u = (t, e) => {
        if (1 === t.length) {
            let n = r.default.getUser(t[0]);
            return null != n
                ? (0, a.jsx)(s.Avatar, {
                      src: n.getAvatarURL(e, 32),
                      size: s.AvatarSizes.SIZE_32,
                      'aria-hidden': !0
                  })
                : (0, a.jsx)(s.UserIcon, {});
        }
        return (0, a.jsx)(i.Z, {
            recipients: t,
            size: s.AvatarSizes.SIZE_32
        });
    },
    _ = (t, e, n, i) => {
        let u = [...t].map((t) => r.default.getUser(t)),
            _ = (t) =>
                (0, a.jsx)(s.Text, {
                    variant: 'text-md/semibold',
                    className: d.username,
                    children: o.ZP.getName(n, i, t)
                });
        return e >= 4
            ? l.intl.format(l.t.qfo6KS, {
                  usernameHook1: () => _(u[0]),
                  usernameHook2: () => _(u[1]),
                  numberOfOtherUsers: e - t.length
              })
            : 3 === e
              ? l.intl.format(l.t['67ZE+/'], {
                    usernameHook1: () => _(u[0]),
                    usernameHook2: () => _(u[1])
                })
              : 2 === e
                ? l.intl.format(l.t.veV4IC, {
                      usernameHook1: () => _(u[0]),
                      usernameHook2: () => _(u[1])
                  })
                : l.intl.format(l.t['4WHCtr'], { usernameHook: () => _(u[0]) });
    };
