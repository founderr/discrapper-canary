n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(390547);
var l = n(200651);
n(192379);
var s = n(120356),
    i = n.n(s),
    r = n(392711),
    a = n.n(r),
    o = n(442837),
    c = n(481060),
    d = n(565138),
    u = n(984933),
    f = n(430824),
    h = n(496675),
    m = n(771845),
    x = n(259580),
    _ = n(382182),
    g = n(148381),
    p = n(689938),
    C = n(410894),
    S = n(939525);
function E(e) {
    let { guildId: t, onClick: n } = e,
        s = (0, o.e7)([f.Z], () => f.Z.getGuild(t)),
        i = (0, o.e7)([u.ZP, f.Z, h.Z], () =>
            u.ZP.getChannels(t)[u.Zb].some((e) => {
                let { channel: t } = e;
                return (0, _.JL)(t, f.Z, h.Z);
            })
        );
    return null != s && i
        ? (0, l.jsxs)(c.Clickable, {
              onClick: () => n(t),
              className: S.guildRow,
              children: [
                  (0, l.jsx)(d.Z, {
                      guild: s,
                      size: d.Z.Sizes.SMALL,
                      className: S.guildIcon
                  }),
                  (0, l.jsx)(c.Text, {
                      variant: 'text-md/normal',
                      className: S.guildName,
                      children: s.toString()
                  }),
                  (0, l.jsx)(x.Z, {
                      direction: x.Z.Directions.RIGHT,
                      className: S.guildArrow
                  })
              ]
          })
        : null;
}
function v(e) {
    let { onSelectGuild: t } = e,
        n = (0, o.e7)([m.ZP], () => m.ZP.getGuildFolders());
    return (0, l.jsx)(g.Z, {
        title: p.Z.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
        scrollerClassName: i()(S.guildScroller, C.marginBottom),
        children: a().flatMap(n, (e) => {
            let { guildIds: n } = e;
            return n.map((e) =>
                (0, l.jsx)(
                    E,
                    {
                        guildId: e,
                        onClick: t
                    },
                    e
                )
            );
        })
    });
}
