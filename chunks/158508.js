n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(194359),
    o = n(922611),
    l = n(699516),
    u = n(594174),
    c = n(388032);
function d(e) {
    let { user: t, onIgnore: n, onUnignore: d, location: f = 'ContextMenu' } = e,
        { id: _ } = t,
        p = (0, i.e7)(
            [u.default],
            () => {
                var e;
                return (null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === _;
            },
            [_]
        ),
        { isIgnored: h, isBlocked: m } = (0, i.cj)(
            [l.Z],
            () => ({
                isIgnored: l.Z.isIgnored(_),
                isBlocked: l.Z.isBlocked(_)
            }),
            [_]
        );
    return !(0, o.Do)({ location: 'use-block-user-item-web' }) || p || m
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'ignore',
              color: 'default',
              label: h ? c.intl.string(c.t['8wXU9P']) : c.intl.string(c.t.ytCpKi),
              action: h
                  ? () => {
                        null == d || d(), s.Z.unignoreUser(_, null != f ? f : 'use-ignore-user-item-web');
                    }
                  : () => {
                        null == n || n(), s.Z.ignoreUser(_, null != f ? f : 'use-ignore-user-item-web');
                    }
          });
}
