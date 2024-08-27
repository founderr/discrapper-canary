t.d(n, {
    Z: function () {
        return N;
    }
}),
    t(390547);
var l = t(735250);
t(470079);
var s = t(120356),
    a = t.n(s),
    r = t(392711),
    i = t.n(r),
    o = t(442837),
    u = t(481060),
    c = t(565138),
    d = t(984933),
    m = t(430824),
    E = t(496675),
    S = t(771845),
    _ = t(259580),
    g = t(382182),
    h = t(148381),
    x = t(689938),
    Z = t(458623),
    f = t(544347);
function C(e) {
    let { guildId: n, onClick: t } = e,
        s = (0, o.e7)([m.Z], () => m.Z.getGuild(n)),
        a = (0, o.e7)([d.ZP, m.Z, E.Z], () =>
            d.ZP.getChannels(n)[d.Zb].some((e) => {
                let { channel: n } = e;
                return (0, g.JL)(n, m.Z, E.Z);
            })
        );
    return null != s && a
        ? (0, l.jsxs)(u.Clickable, {
              onClick: () => t(n),
              className: f.guildRow,
              children: [
                  (0, l.jsx)(c.Z, {
                      guild: s,
                      size: c.Z.Sizes.SMALL,
                      className: f.guildIcon
                  }),
                  (0, l.jsx)(u.Text, {
                      variant: 'text-md/normal',
                      className: f.guildName,
                      children: s.toString()
                  }),
                  (0, l.jsx)(_.Z, {
                      direction: _.Z.Directions.RIGHT,
                      className: f.guildArrow
                  })
              ]
          })
        : null;
}
function N(e) {
    let { onSelectGuild: n } = e,
        t = (0, o.e7)([S.ZP], () => S.ZP.getGuildFolders());
    return (0, l.jsx)(h.Z, {
        title: x.Z.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
        scrollerClassName: a()(f.guildScroller, Z.marginBottom),
        children: i().flatMap(t, (e) => {
            let { guildIds: t } = e;
            return t.map((e) =>
                (0, l.jsx)(
                    C,
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
