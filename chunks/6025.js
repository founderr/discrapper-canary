var i = r(570140),
    a = r(904245),
    s = r(593472),
    o = r(526120),
    l = r(348245),
    u = r(897473),
    c = r(176505);
n.Z = {
    openPrivateChannelAsSidebar(e) {
        let { channelId: n, messageId: r, baseChannelId: s, hasSingleMessageRequest: o } = e;
        i.Z.dispatch({
            type: 'SIDEBAR_VIEW_CHANNEL',
            sidebarType: u.tI.VIEW_MESSAGE_REQUEST,
            baseChannelId: s,
            channelId: n,
            details: {
                type: u.Ff.MESSAGE_REQUEST,
                hasSingleMessageRequest: o
            }
        }),
            null != r
                ? a.Z.jumpToMessage({
                      channelId: n,
                      messageId: r,
                      flash: !0
                  })
                : l.Z.fetchMessages({ channelId: n });
    },
    openChannelAsSidebar(e) {
        let { guildId: n, channelId: r, baseChannelId: o, flash: c = !0, details: d } = e;
        i.Z.dispatch({
            type: 'SIDEBAR_VIEW_CHANNEL',
            sidebarType: u.tI.VIEW_CHANNEL,
            guildId: n,
            baseChannelId: o,
            channelId: r,
            details: d
        });
        let f = null == d ? void 0 : d.initialMessageId;
        null != f
            ? a.Z.jumpToMessage({
                  channelId: r,
                  messageId: f,
                  flash: c,
                  jumpType: s.SR.INSTANT
              })
            : l.Z.fetchMessages({
                  guildId: n,
                  channelId: r
              });
    },
    openResourceChannelAsSidebar(e) {
        let { guildId: n, channelId: r } = e;
        null != n &&
            ((0, o.C3)(n, r, !1),
            i.Z.dispatch({
                type: 'SIDEBAR_VIEW_CHANNEL',
                sidebarType: u.tI.VIEW_CHANNEL,
                guildId: n,
                baseChannelId: c.oC.GUILD_HOME,
                channelId: r
            }));
    },
    openThreadAsSidebar(e) {
        let { guildId: n, baseChannelId: r, channelId: o, flash: c = !0, details: d } = e;
        i.Z.dispatch({
            type: 'SIDEBAR_VIEW_CHANNEL',
            sidebarType: u.tI.VIEW_THREAD,
            baseChannelId: r,
            channelId: o,
            details: d
        }),
            (null == d ? void 0 : d.initialMessageId) != null
                ? a.Z.jumpToMessage({
                      channelId: o,
                      messageId: d.initialMessageId,
                      flash: c,
                      jumpType: s.SR.INSTANT
                  })
                : l.Z.fetchMessages({
                      guildId: n,
                      channelId: o
                  });
    },
    closeChannelSidebar(e) {
        i.Z.dispatch({
            type: 'SIDEBAR_CLOSE',
            baseChannelId: e
        });
    },
    openGuildSidebar(e) {
        let { guildId: n, baseChannelId: r, sidebarType: a, details: s } = e;
        return i.Z.dispatch({
            type: 'SIDEBAR_VIEW_GUILD',
            sidebarType: a,
            baseChannelId: r,
            guildId: n,
            details: s
        });
    },
    closeGuildSidebar(e) {
        i.Z.dispatch({
            type: 'SIDEBAR_CLOSE_GUILD',
            guildId: e
        });
    }
};
