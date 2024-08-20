l.d(n, {
    Z: function () {
        return E;
    }
});
var t = l(735250),
    r = l(470079),
    i = l(481060),
    a = l(471445),
    s = l(592125),
    u = l(430824),
    o = l(970184),
    c = l(811654),
    d = l(344991),
    m = l(981631),
    f = l(296555);
function E(e) {
    var n;
    let { channelTypes: l } = e,
        E = (0, o.CJ)(),
        p = null == E ? void 0 : null === (n = E.message) || void 0 === n ? void 0 : n.getChannelId(),
        C = s.Z.getChannel(p),
        N = u.Z.getGuild(null == C ? void 0 : C.getGuildId()),
        v = r.useMemo(() => (0, c.tx)(e.defaultValues, null == N ? void 0 : N.id, l), [e.defaultValues, N, l]);
    return (0, t.jsx)(d.ZP, {
        selectActionComponent: e,
        queryOptions: (e) => (0, c.af)(e, p, l),
        renderIcon: (e, n) => {
            let l = s.Z.getChannel(null == e ? void 0 : e.value);
            if (null == l) return null;
            let r = l.type === m.d4z.GUILD_CATEGORY ? i.FolderIcon : (0, a.KS)(l);
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
                className: f.label,
                children: e.label
            }),
        defaultValues: v
    });
}
