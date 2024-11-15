n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(872810),
    u = n(199902),
    c = n(314897),
    d = n(685203),
    f = n(112560),
    _ = n(388032),
    p = n(71734);
let h = n(978538);
function m(e) {
    let { participant: t, width: n, noArt: i = !1, selected: m = !1 } = e,
        g = n < 195,
        E = (0, s.e7)([u.Z, c.default], () =>
            u.Z.getAllActiveStreams().some((e) => {
                let { ownerId: t } = e;
                return t !== c.default.getId();
            })
        );
    return (0, r.jsx)('div', {
        className: a()(p.content, p.streamHidden, { [p.__invalid_small]: g }),
        children: (0, r.jsx)(f.Z, {
            className: p.streamHiddenEmptyState,
            artURL: h,
            noArt: i,
            selected: m,
            size: (0, f.L)(n),
            header: g ? null : _.intl.string(_.t.epU4ER),
            description: m
                ? null
                : (0, r.jsxs)('div', {
                      className: a()(p.streamHiddenCTA, { [p.largePaddingTop]: !g }),
                      children: [
                          (0, r.jsx)(d.a, {
                              isSmall: g,
                              children: (0, r.jsx)(o.Text, {
                                  variant: g ? 'text-sm/semibold' : 'text-md/semibold',
                                  color: 'none',
                                  children: n < 175 ? _.intl.string(_.t['I6JG4+']) : _.intl.string(_.t['7Xq/nZ'])
                              })
                          }),
                          E
                              ? (0, r.jsx)(d.a, {
                                    className: p.addCTA,
                                    tooltip: _.intl.string(_.t.wCrzur),
                                    onClick: (e) => {
                                        e.stopPropagation(), (0, l.rn)(t.stream, { forceMultiple: !0 });
                                    },
                                    isSmall: g,
                                    children: (0, r.jsx)(o.EyePlusIcon, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: p.addStreamIcon
                                    })
                                })
                              : null
                      ]
                  })
        })
    });
}
