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
    h = n(388032),
    g = n(967698);
let p = {
    label: () => h.intl.string(h.t['32u1Dw']),
    value: u.Th
};
function x() {
    let { selectedGuildId: e, setSelectedGuildId: t } = (0, u.xu)(),
        n = (0, r.e7)([c.ZP], () => c.ZP.getFlattenedGuildIds()),
        h = (0, r.e7)([o.Z], () => o.Z.getGuilds()),
        { hideGuildOptions: x, hideGlobalOption: S } = (0, m.b)();
    s.useEffect(() => {
        e === u.Th && S && t(n[0]), e !== u.Th && x && t(u.Th);
    }, [e, t, S, x, n]);
    let T = s.useMemo(() => {
            let e = x
                ? []
                : n
                      .map((e) => {
                          let t = h[e];
                          return null == t
                              ? null
                              : {
                                    label: t.name,
                                    value: t.id
                                };
                      })
                      .filter(d.lm);
            return (
                !S &&
                    e.unshift({
                        ...p,
                        label: p.label()
                    }),
                e
            );
        }, [x, n, S, h]),
        C = s.useCallback(
            (e) => {
                let t = (null == e ? void 0 : e.label) === p.label() && (null == e ? void 0 : e.value) === p.value;
                return null == e || '' === e.value || t
                    ? (0, i.jsx)('div', {
                          className: g.clydeIconContainer,
                          children: (0, i.jsx)(l.ClydeIcon, {
                              size: 'sm',
                              color: 'white',
                              'aria-hidden': !0,
                              className: g.guildSelectOptionIcon
                          })
                      })
                    : (0, i.jsx)(a.Z, {
                          className: g.guildSelectOptionIcon,
                          guild: h[e.value],
                          size: a.Z.Sizes.SMALLER,
                          active: !0
                      });
            },
            [h]
        );
    return (0, i.jsx)(l.SearchableSelect, {
        wrapperClassName: g.searchableSelect,
        onChange: (e) => {
            t(e);
        },
        value: e,
        options: T,
        renderOptionPrefix: C
    });
}
