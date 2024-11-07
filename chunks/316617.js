var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(39154),
    l = n(739566),
    u = n(492593),
    c = n(930282),
    d = n(464891),
    f = n(267128),
    _ = n(25015),
    h = n(592125),
    p = n(217702),
    m = n(388032),
    g = n(386860);
t.Z = (e) => {
    let { message: t } = e,
        n = (0, l.ZP)(t),
        E = (0, a.e7)([h.Z], () => h.Z.getChannel(t.channel_id)),
        v = i.useMemo(() => (0, o.Z)(t), [t]),
        { content: I } = (0, _.Z)(v, { hideSimpleEmbedContent: !1 }),
        S = i.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, f.f)(t, I, !1, '', {
                leadingIconClass: g.attachmentIcon,
                trailingIconClass: g.attachmentIcon,
                iconSize: p.WW
            });
            return (0, r.jsxs)('div', {
                className: g.contentContainer,
                children: [
                    e,
                    (0, r.jsx)(c.ZP, {
                        message: t,
                        content: I
                    }),
                    n
                ]
            });
        }, [t, I]);
    return null == E
        ? null
        : (0, r.jsxs)('div', {
              className: g.container,
              children: [
                  (0, r.jsx)(s.Heading, {
                      className: g.header,
                      variant: 'heading-sm/semibold',
                      children: m.intl.string(m.t.iouM3d)
                  }),
                  (0, r.jsx)(s.Scroller, {
                      className: g.messagePreviewContainer,
                      children: (0, r.jsx)(u.Z, {
                          childrenMessageContent: S(),
                          childrenHeader: (0, r.jsx)(d.ZP, {
                              message: t,
                              channel: E,
                              author: n,
                              guildId: E.guild_id
                          }),
                          disableInteraction: !0
                      })
                  })
              ]
          });
};
