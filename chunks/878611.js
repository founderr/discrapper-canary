var r = n(200651);
n(192379);
var i = n(239091),
    a = n(644956),
    s = n(819366),
    o = n(592125);
t.Z = {
    handleUserContextMenu(e, t, a, s) {
        let l = o.Z.getChannel(t);
        null != l &&
            (0, i.jW)(s, async () => {
                let { default: t } = await Promise.all([n.e('50506'), n.e('79695'), n.e('51269'), n.e('13351'), n.e('50050'), n.e('92453'), n.e('13125'), n.e('13441')]).then(n.bind(n, 757387));
                return (n) =>
                    (0, r.jsx)(t, {
                        ...n,
                        user: e,
                        channel: l,
                        guildId: a
                    });
            });
    },
    react(e, t, n) {
        let { userId: i, channelId: o, parsedUserId: l, roleId: u, roleName: c, viewingChannelId: d } = e;
        return null == i && (null != u || '@everyone' === c || '@here' === c)
            ? (0, r.jsx)(
                  a.Z,
                  {
                      inlinePreview: n.formatInline,
                      ...e,
                      children: t(e.content, n)
                  },
                  n.key
              )
            : (0, r.jsx)(
                  s.Z,
                  {
                      className: 'mention',
                      userId: i,
                      channelId: o,
                      viewingChannelId: d,
                      parsedUserId: l,
                      content: t(e.content, n),
                      inlinePreview: n.noStyleAndInteraction
                  },
                  n.key
              );
    }
};
