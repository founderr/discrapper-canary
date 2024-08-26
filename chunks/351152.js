t.d(n, {
    Z: function () {
        return Z;
    }
}),
    t(390547);
var l = t(735250);
t(470079);
var s = t(120356),
    a = t.n(s),
    i = t(392711),
    r = t.n(i),
    o = t(442837),
    c = t(481060),
    u = t(565138),
    d = t(984933),
    m = t(430824),
    E = t(496675),
    _ = t(771845),
    S = t(259580),
    h = t(382182),
    x = t(148381),
    C = t(689938),
    g = t(458623),
    I = t(544347);
function N(e) {
    let { guildId: n, onClick: t } = e,
        s = (0, o.e7)([m.Z], () => m.Z.getGuild(n)),
        a = (0, o.e7)([d.ZP, m.Z, E.Z], () =>
            d.ZP.getChannels(n)[d.Zb].some((e) => {
                let { channel: n } = e;
                return (0, h.JL)(n, m.Z, E.Z);
            })
        );
    return null != s && a
        ? (0, l.jsxs)(c.Clickable, {
              onClick: () => t(n),
              className: I.guildRow,
              children: [
                  (0, l.jsx)(u.Z, {
                      guild: s,
                      size: u.Z.Sizes.SMALL,
                      className: I.guildIcon
                  }),
                  (0, l.jsx)(c.Text, {
                      variant: 'text-md/normal',
                      className: I.guildName,
                      children: s.toString()
                  }),
                  (0, l.jsx)(S.Z, {
                      direction: S.Z.Directions.RIGHT,
                      className: I.guildArrow
                  })
              ]
          })
        : null;
}
function Z(e) {
    let { onSelectGuild: n } = e,
        t = (0, o.e7)([_.ZP], () => _.ZP.getGuildFolders());
    return (0, l.jsx)(x.Z, {
        title: C.Z.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
        scrollerClassName: a()(I.guildScroller, g.marginBottom),
        children: r().flatMap(t, (e) => {
            let { guildIds: t } = e;
            return t.map((e) =>
                (0, l.jsx)(
                    N,
                    {
                        guildId: e,
                        onClick: n
                    },
                    e
                )
            );
        })
    });
}
