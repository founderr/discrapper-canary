t.d(n, {
    g: function () {
        return p;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    a = t.n(l),
    r = t(704215),
    o = t(481060),
    u = t(605236),
    d = t(434404),
    c = t(41776),
    s = t(703656),
    g = t(981631),
    I = t(388032),
    f = t(214201);
let p = (e) => {
    let { guild: n } = e,
        l = n.id,
        p = async () => {
            let e = c.Z.isLurking(l);
            await d.Z.leaveGuild(l),
                e
                    ? (0, s.uL)(g.Z5c.GUILD_DISCOVERY)
                    : !(0, u.un)(r.z.GUILD_LEAVE_FEEDBACK) &&
                      (0, o.openModalLazy)(async () => {
                          let { default: e } = await t.e('74920').then(t.bind(t, 131102));
                          return (t) =>
                              (0, i.jsx)(e, {
                                  ...t,
                                  guildId: l,
                                  guildName: n.name
                              });
                      });
        };
    return (0, i.jsx)(o.ConfirmModal, {
        className: a()(f.__invalid_confirmModal),
        bodyClassName: a()(f.__invalid_confirmModalBody),
        header: I.intl.formatToPlainString(I.t['1GX6Pz'], { name: n.name }),
        confirmText: n.hasFeature(g.oNc.HUB) ? I.intl.string(I.t.Dv8gFR) : I.intl.string(I.t.J2TBi4),
        cancelText: I.intl.string(I.t['ETE/oK']),
        onConfirm: p,
        ...e,
        children: (0, i.jsx)(o.Text, {
            variant: 'text-md/normal',
            children: n.hasFeature(g.oNc.HUB) ? I.intl.format(I.t.ZHTXVF, { name: n.name }) : I.intl.format(I.t.ZEXC0t, { name: n.name })
        })
    });
};
