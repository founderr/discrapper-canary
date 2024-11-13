t.d(n, {
    Z: function () {
        return p;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(481060),
    a = t(471445),
    o = t(592125),
    s = t(430824),
    c = t(970184),
    u = t(811654),
    d = t(344991),
    m = t(981631),
    f = t(967831);
function p(e) {
    var n;
    let { channelTypes: t } = e,
        p = (0, c.CJ)(),
        x = null == p ? void 0 : null === (n = p.message) || void 0 === n ? void 0 : n.getChannelId(),
        h = o.Z.getChannel(x),
        v = s.Z.getGuild(null == h ? void 0 : h.getGuildId()),
        C = i.useMemo(() => (0, u.tx)(e.defaultValues, null == v ? void 0 : v.id, t), [e.defaultValues, v, t]);
    return (0, l.jsx)(d.ZP, {
        selectActionComponent: e,
        queryOptions: (e) => (0, u.af)(e, x, t),
        renderIcon: (e, n) => {
            let t = o.Z.getChannel(null == e ? void 0 : e.value);
            if (null == t) return null;
            let i = t.type === m.d4z.GUILD_CATEGORY ? r.FolderIcon : (0, a.KS)(t);
            return null != i
                ? (0, l.jsx)(i, {
                      size: 'custom',
                      color: 'currentColor',
                      width: n,
                      height: n
                  })
                : null;
        },
        renderOptionLabel: (e) =>
            (0, l.jsx)('span', {
                className: f.label,
                children: e.label
            }),
        defaultValues: C
    });
}
