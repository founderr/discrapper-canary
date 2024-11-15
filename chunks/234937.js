var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(565138),
    o = n(430824),
    l = n(388032),
    u = n(55747);
t.Z = (e) => {
    let { event: t } = e,
        n = (0, i.e7)([o.Z], () => o.Z.getGuild(t.guild_id));
    return null == n
        ? null
        : (0, r.jsxs)('div', {
              className: u.container,
              children: [
                  (0, r.jsx)(a.Heading, {
                      className: u.header,
                      variant: 'heading-sm/semibold',
                      children: l.intl.string(l.t.SDTOLy)
                  }),
                  (0, r.jsxs)('div', {
                      className: u.guildContainer,
                      children: [
                          (0, r.jsxs)('div', {
                              className: u.guildInfo,
                              children: [
                                  (0, r.jsx)(s.Z, {
                                      guild: n,
                                      size: s.Z.Sizes.MINI,
                                      className: u.guildIcon
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: n.name
                                  })
                              ]
                          }),
                          (0, r.jsx)(a.Text, {
                              variant: 'text-md/semibold',
                              color: 'header-primary',
                              children: t.name
                          })
                      ]
                  })
              ]
          });
};
