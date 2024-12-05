n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(733860);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(565138),
    o = n(430824),
    c = n(771845),
    d = n(823379),
    u = n(997950),
    m = n(816108),
    g = n(388032),
    h = n(266759);
let p = {
    label: () => g.intl.string(g.t['32u1Dw']),
    value: u.Th
};
function x() {
    let { selectedGuildId: e, setSelectedGuildId: t } = (0, u.xu)(),
        n = (0, r.e7)([c.ZP], () => c.ZP.getFlattenedGuildIds()),
        g = (0, r.e7)([o.Z], () => o.Z.getGuilds()),
        { hideGuildOptions: x, hideGlobalOption: T } = (0, m.b)();
    s.useEffect(() => {
        e === u.Th && T && t(n[0]), e !== u.Th && x && t(u.Th);
    }, [e, t, T, x, n]);
    let S = s.useMemo(() => {
            let e = x
                ? []
                : n
                      .map((e) => {
                          let t = g[e];
                          return null == t
                              ? null
                              : {
                                    label: t.name,
                                    value: t.id
                                };
                      })
                      .filter(d.lm);
            return (
                !T &&
                    e.unshift({
                        ...p,
                        label: p.label()
                    }),
                e
            );
        }, [x, n, T, g]),
        _ = s.useCallback(
            (e) => {
                let t = (null == e ? void 0 : e.label) === p.label() && (null == e ? void 0 : e.value) === p.value;
                return null == e || '' === e.value || t
                    ? (0, i.jsx)('div', {
                          className: h.clydeIconContainer,
                          children: (0, i.jsx)(l.ClydeIcon, {
                              size: 'sm',
                              color: 'white',
                              'aria-hidden': !0,
                              className: h.guildSelectOptionIcon
                          })
                      })
                    : (0, i.jsx)(a.Z, {
                          className: h.guildSelectOptionIcon,
                          guild: g[e.value],
                          size: a.Z.Sizes.SMALLER,
                          active: !0
                      });
            },
            [g]
        );
    return (0, i.jsx)(l.SearchableSelect, {
        wrapperClassName: h.searchableSelect,
        onChange: (e) => {
            t(e);
        },
        value: e,
        options: S,
        renderOptionPrefix: _
    });
}
