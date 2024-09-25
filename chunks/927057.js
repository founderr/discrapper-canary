n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(481060),
    o = n(471445),
    s = n(592125),
    l = n(430824),
    u = n(970184),
    c = n(811654),
    d = n(344991),
    _ = n(981631),
    E = n(967831);
function f(e) {
    var t;
    let { channelTypes: n } = e,
        f = (0, u.CJ)(),
        h = null == f ? void 0 : null === (t = f.message) || void 0 === t ? void 0 : t.getChannelId(),
        p = s.Z.getChannel(h),
        m = l.Z.getGuild(null == p ? void 0 : p.getGuildId()),
        I = (e) => (0, c.af)(e, h, n),
        T = (e, t) => {
            let n = s.Z.getChannel(null == e ? void 0 : e.value);
            if (null == n) return null;
            let i = n.type === _.d4z.GUILD_CATEGORY ? a.FolderIcon : (0, o.KS)(n);
            return null != i
                ? (0, r.jsx)(i, {
                      size: 'custom',
                      color: 'currentColor',
                      width: t,
                      height: t
                  })
                : null;
        },
        g = (e) =>
            (0, r.jsx)('span', {
                className: E.label,
                children: e.label
            }),
        S = i.useMemo(() => (0, c.tx)(e.defaultValues, null == m ? void 0 : m.id, n), [e.defaultValues, m, n]);
    return (0, r.jsx)(d.ZP, {
        selectActionComponent: e,
        queryOptions: I,
        renderIcon: T,
        renderOptionLabel: g,
        defaultValues: S
    });
}
