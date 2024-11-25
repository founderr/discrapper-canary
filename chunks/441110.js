var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(367907),
    o = n(524444),
    l = n(297047),
    u = n(592125),
    c = n(944486),
    d = n(626135),
    f = n(981631),
    _ = n(388032),
    p = n(202776);
t.Z = function (e) {
    let { guild: t, message: n, onClose: h } = e,
        m = u.Z.getChannel(c.Z.getChannelId(t.id));
    return (i.useEffect(() => {
        d.default.track(f.rMx.OPEN_POPOUT, {
            type: 'New Member Badge Popout',
            guild_id: t.id,
            channel_id: null == m ? void 0 : m.id
        });
    }, []),
    null == m)
        ? null
        : (0, r.jsx)(o.W_, {
              children: (0, r.jsxs)('div', {
                  className: p.popoutContainer,
                  children: [
                      (0, r.jsxs)('div', {
                          className: p.mainContent,
                          children: [
                              (0, r.jsx)('div', {
                                  className: p.iconContainer,
                                  children: (0, r.jsx)(a.NewUserIcon, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 40,
                                      height: 40
                                  })
                              }),
                              (0, r.jsxs)('div', {
                                  children: [
                                      (0, r.jsx)(a.Heading, {
                                          variant: 'heading-md/semibold',
                                          className: p.header,
                                          children: _.intl.string(_.t['v/OYd3'])
                                      }),
                                      (0, r.jsx)(a.Text, {
                                          variant: 'text-sm/normal',
                                          children: _.intl.string(_.t.Z85MlJ)
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, r.jsx)(a.Button, {
                          size: a.Button.Sizes.SMALL,
                          color: a.Button.Colors.BRAND,
                          className: p.ctaButton,
                          innerClassName: p.ctaButtonContent,
                          fullWidth: !0,
                          onClick: () => {
                              s.ZP.trackWithMetadata(f.rMx.NEW_MEMBER_MENTION_CTA_CLICKED, { target_user_id: n.author.id }), h(), (0, l.q)(n.author, m.id);
                          },
                          children: _.intl.format(_.t['+xsVS0'], { username: n.author.username })
                      })
                  ]
              })
          });
};
