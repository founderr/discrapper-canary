i.d(t, {
    Z: function () {
        return o;
    }
});
var n = i(192379),
    l = i(512722),
    d = i.n(l),
    r = i(442837),
    s = i(430824),
    a = i(771845),
    u = i(594174);
function o(e) {
    let { isGuildIncluded: t, selectedGuildId: i } = e,
        l = (0, r.e7)([a.ZP], () => a.ZP.getFlattenedGuildIds()),
        o = (0, r.e7)([s.Z], () => s.Z.getGuilds()),
        c = (0, r.e7)([u.default], () => u.default.getCurrentUser());
    return {
        options: n.useMemo(
            () =>
                null == c
                    ? []
                    : (null == t
                          ? l
                          : l.filter((e) => {
                                let i = o[e];
                                return d()(null != i, 'guild should not be null'), t(i, c);
                            })
                      ).map((e) => {
                          let t = o[e];
                          return (
                              d()(null != t, 'guild should not be null'),
                              {
                                  label: t.name,
                                  value: t.id
                              }
                          );
                      }),
            [l, o, c, t]
        ),
        selectedGuild: null == i ? void 0 : o[i]
    };
}
