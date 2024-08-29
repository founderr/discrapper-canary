l.d(n, {
    Z: function () {
        return p;
    }
});
var t = l(735250),
    r = l(470079),
    a = l(481060),
    i = l(471445),
    s = l(592125),
    u = l(430824),
    o = l(970184),
    c = l(811654),
    d = l(344991),
    m = l(981631),
    E = l(296555);
function p(e) {
    var n;
    let { channelTypes: l } = e,
        p = (0, o.CJ)(),
        N = null == p ? void 0 : null === (n = p.message) || void 0 === n ? void 0 : n.getChannelId(),
        f = s.Z.getChannel(N),
        _ = u.Z.getGuild(null == f ? void 0 : f.getGuildId()),
        C = r.useMemo(() => (0, c.tx)(e.defaultValues, null == _ ? void 0 : _.id, l), [e.defaultValues, _, l]);
    return (0, t.jsx)(d.ZP, {
        selectActionComponent: e,
        queryOptions: (e) => (0, c.af)(e, N, l),
        renderIcon: (e, n) => {
            let l = s.Z.getChannel(null == e ? void 0 : e.value);
            if (null == l) return null;
            let r = l.type === m.d4z.GUILD_CATEGORY ? a.FolderIcon : (0, i.KS)(l);
            return null != r
                ? (0, t.jsx)(r, {
                      size: 'custom',
                      color: 'currentColor',
                      width: n,
                      height: n
                  })
                : null;
        },
        renderOptionLabel: (e) =>
            (0, t.jsx)('span', {
                className: E.label,
                children: e.label
            }),
        defaultValues: C
    });
}
