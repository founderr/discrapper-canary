t.d(s, {
    Z: function () {
        return S;
    }
}),
    t(733860);
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(565138),
    l = t(430824),
    c = t(771845),
    d = t(823379),
    _ = t(997950),
    u = t(689938),
    E = t(729520);
let T = {
    label: () => u.Z.Messages.PRIVACY_AND_SAFETY_ALL_SERVERS_OPTION_TITLE,
    value: _.T
};
function S() {
    let { selectedGuildId: e, setSelectedGuildId: s } = (0, _.x)(),
        t = (0, i.e7)([c.ZP], () => c.ZP.getFlattenedGuildIds()),
        u = (0, i.e7)([l.Z], () => l.Z.getGuilds()),
        S = a.useMemo(() => {
            let e = t
                .map((e) => {
                    let s = u[e];
                    return null == s
                        ? null
                        : {
                              label: s.name,
                              value: s.id
                          };
                })
                .filter(d.lm);
            return (
                e.unshift({
                    ...T,
                    label: T.label()
                }),
                e
            );
        }, [t, u]),
        I = a.useCallback(
            (e) => {
                let s = (null == e ? void 0 : e.label) === T.label() && (null == e ? void 0 : e.value) === T.value;
                return null == e || '' === e.value || s
                    ? (0, n.jsx)('div', {
                          className: E.clydeIconContainer,
                          children: (0, n.jsx)(r.ClydeIcon, {
                              size: 'sm',
                              color: 'currentColor',
                              'aria-hidden': !0,
                              className: E.guildSelectOptionIcon
                          })
                      })
                    : (0, n.jsx)(o.Z, {
                          className: E.guildSelectOptionIcon,
                          guild: u[e.value],
                          size: o.Z.Sizes.SMALLER,
                          active: !0
                      });
            },
            [u]
        );
    return (0, n.jsx)(r.SearchableSelect, {
        wrapperClassName: E.searchableSelect,
        onChange: (e) => {
            s(e);
        },
        value: e,
        options: S,
        renderOptionPrefix: I
    });
}
