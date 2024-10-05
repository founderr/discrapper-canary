var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(39154),
    l = n(739566),
    u = n(492593),
    c = n(930282),
    d = n(464891),
    _ = n(267128),
    E = n(25015),
    f = n(592125),
    h = n(217702),
    p = n(689938),
    I = n(195474);
t.Z = (e) => {
    let { message: t } = e,
        n = (0, l.ZP)(t),
        m = (0, a.e7)([f.Z], () => f.Z.getChannel(t.channel_id)),
        T = i.useMemo(() => (0, o.Z)(t), [t]),
        { content: S } = (0, E.Z)(T, { hideSimpleEmbedContent: !1 }),
        g = i.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, _.f)(t, S, !1, '', {
                leadingIconClass: I.attachmentIcon,
                trailingIconClass: I.attachmentIcon,
                iconSize: h.WW
            });
            return (0, r.jsxs)('div', {
                className: I.contentContainer,
                children: [
                    e,
                    (0, r.jsx)(c.ZP, {
                        message: t,
                        content: S
                    }),
                    n
                ]
            });
        }, [t, S]);
    return null == m
        ? null
        : (0, r.jsxs)('div', {
              className: I.container,
              children: [
                  (0, r.jsx)(s.Heading, {
                      className: I.header,
                      variant: 'heading-sm/semibold',
                      children: p.Z.Messages.MOBILE_REPORTS_MESSAGE_PREVIEW_TITLE
                  }),
                  (0, r.jsx)(s.Scroller, {
                      className: I.messagePreviewContainer,
                      children: (0, r.jsx)(u.Z, {
                          childrenMessageContent: g(),
                          childrenHeader: (0, r.jsx)(d.ZP, {
                              message: t,
                              channel: m,
                              author: n,
                              guildId: m.guild_id
                          }),
                          disableInteraction: !0
                      })
                  })
              ]
          });
};
