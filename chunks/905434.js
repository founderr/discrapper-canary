var r = n(735250);
n(470079);
var i = n(481060),
    a = n(565138),
    o = n(430824),
    s = n(689938),
    l = n(78883);
let u = (e) => {
    let { stageInstance: t } = e,
        n = o.Z.getGuild(t.guild_id);
    return null == n
        ? null
        : (0, r.jsxs)('div', {
              className: l.container,
              children: [
                  (0, r.jsx)(i.Heading, {
                      className: l.header,
                      variant: 'heading-sm/semibold',
                      children: s.Z.Messages.MOBILE_REPORTS_STAGE_CHANNEL_PREVIEW_TITLE
                  }),
                  (0, r.jsxs)('div', {
                      className: l.guildContainer,
                      children: [
                          (0, r.jsxs)('div', {
                              className: l.guildInfo,
                              children: [
                                  (0, r.jsx)(a.Z, {
                                      guild: n,
                                      size: a.Z.Sizes.MINI,
                                      className: l.guildIcon
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: n.name
                                  })
                              ]
                          }),
                          (0, r.jsx)(i.Text, {
                              variant: 'text-md/semibold',
                              color: 'header-primary',
                              children: t.topic
                          })
                      ]
                  })
              ]
          });
};
t.Z = u;
