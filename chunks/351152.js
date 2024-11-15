n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(390547);
var l = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    s = n(392711),
    a = n.n(s),
    o = n(442837),
    c = n(481060),
    d = n(565138),
    u = n(984933),
    f = n(430824),
    h = n(496675),
    m = n(771845),
    x = n(259580),
    g = n(102172),
    p = n(148381),
    v = n(388032),
    j = n(507178),
    C = n(927166);
function S(e) {
    let { guildId: t, onClick: n } = e,
        i = (0, o.e7)([f.Z], () => f.Z.getGuild(t)),
        r = (0, o.e7)([u.ZP, f.Z, h.Z], () =>
            u.ZP.getChannels(t)[u.Zb].some((e) => {
                let { channel: t } = e;
                return (0, g.JL)(t, f.Z, h.Z);
            })
        );
    return null != i && r
        ? (0, l.jsxs)(c.Clickable, {
              onClick: () => n(t),
              className: C.guildRow,
              children: [
                  (0, l.jsx)(d.Z, {
                      guild: i,
                      size: d.Z.Sizes.SMALL,
                      className: C.guildIcon
                  }),
                  (0, l.jsx)(c.Text, {
                      variant: 'text-md/normal',
                      className: C.guildName,
                      children: i.toString()
                  }),
                  (0, l.jsx)(x.Z, {
                      direction: x.Z.Directions.RIGHT,
                      className: C.guildArrow
                  })
              ]
          })
        : null;
}
function _(e) {
    let { onSelectGuild: t } = e,
        n = (0, o.e7)([m.ZP], () => m.ZP.getGuildFolders());
    return (0, l.jsx)(p.Z, {
        title: v.intl.string(v.t.JsqeEh),
        scrollerClassName: r()(C.guildScroller, j.marginBottom),
        children: a().flatMap(n, (e) => {
            let { guildIds: n } = e;
            return n.map((e) =>
                (0, l.jsx)(
                    S,
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
