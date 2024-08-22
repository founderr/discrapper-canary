t.d(n, {
    Z: function () {
        return f;
    }
});
var l = t(735250),
    a = t(470079),
    i = t(481060),
    r = t(471445),
    o = t(592125),
    s = t(430824),
    c = t(970184),
    u = t(811654),
    d = t(344991),
    m = t(981631),
    _ = t(296555);
function f(e) {
    var n;
    let { channelTypes: t } = e,
        f = (0, c.CJ)(),
        p = null == f ? void 0 : null === (n = f.message) || void 0 === n ? void 0 : n.getChannelId(),
        E = o.Z.getChannel(p),
        I = s.Z.getGuild(null == E ? void 0 : E.getGuildId()),
        C = a.useMemo(() => (0, u.tx)(e.defaultValues, null == I ? void 0 : I.id, t), [e.defaultValues, I, t]);
    return (0, l.jsx)(d.ZP, {
        selectActionComponent: e,
        queryOptions: (e) => (0, u.af)(e, p, t),
        renderIcon: (e, n) => {
            let t = o.Z.getChannel(null == e ? void 0 : e.value);
            if (null == t) return null;
            let a = t.type === m.d4z.GUILD_CATEGORY ? i.FolderIcon : (0, r.KS)(t);
            return null != a
                ? (0, l.jsx)(a, {
                      size: 'custom',
                      color: 'currentColor',
                      width: n,
                      height: n
                  })
                : null;
        },
        renderOptionLabel: (e) =>
            (0, l.jsx)('span', {
                className: _.label,
                children: e.label
            }),
        defaultValues: C
    });
}
