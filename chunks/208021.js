"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("913144"),
  l = n("819689"),
  r = n("115718"),
  i = n("347895"),
  u = n("341329"),
  s = n("582713"),
  o = n("724210"),
  d = {
    openPrivateChannelAsSidebar(e) {
      let {
        channelId: t,
        messageId: n,
        baseChannelId: r,
        hasSingleMessageRequest: i
      } = e;
      a.default.dispatch({
        type: "SIDEBAR_VIEW_CHANNEL",
        sidebarType: s.SidebarType.VIEW_MESSAGE_REQUEST,
        baseChannelId: r,
        channelId: t,
        details: {
          type: s.SidebarOpenDetailsType.MESSAGE_REQUEST,
          hasSingleMessageRequest: i
        }
      }), null != n ? l.default.jumpToMessage({
        channelId: t,
        messageId: n,
        flash: !0
      }) : u.default.fetchMessages({
        channelId: t
      })
    },
    openChannelAsSidebar(e) {
      let {
        guildId: t,
        channelId: n,
        baseChannelId: i,
        flash: o = !0,
        details: d
      } = e;
      a.default.dispatch({
        type: "SIDEBAR_VIEW_CHANNEL",
        sidebarType: s.SidebarType.VIEW_CHANNEL,
        guildId: t,
        baseChannelId: i,
        channelId: n,
        details: d
      });
      let c = null == d ? void 0 : d.initialMessageId;
      null != c ? l.default.jumpToMessage({
        channelId: n,
        messageId: c,
        flash: o,
        jumpType: r.JumpTypes.INSTANT
      }) : u.default.fetchMessages({
        guildId: t,
        channelId: n
      })
    },
    openResourceChannelAsSidebar(e) {
      let {
        guildId: t,
        channelId: n
      } = e;
      null != t && ((0, i.selectHomeResourceChannel)(t, n, !1), a.default.dispatch({
        type: "SIDEBAR_VIEW_CHANNEL",
        sidebarType: s.SidebarType.VIEW_CHANNEL,
        guildId: t,
        baseChannelId: o.StaticChannelRoute.GUILD_HOME,
        channelId: n
      }))
    },
    openThreadAsSidebar(e) {
      let {
        guildId: t,
        baseChannelId: n,
        channelId: i,
        flash: o = !0,
        details: d
      } = e;
      a.default.dispatch({
        type: "SIDEBAR_VIEW_CHANNEL",
        sidebarType: s.SidebarType.VIEW_THREAD,
        baseChannelId: n,
        channelId: i,
        details: d
      }), (null == d ? void 0 : d.initialMessageId) != null ? l.default.jumpToMessage({
        channelId: i,
        messageId: d.initialMessageId,
        flash: o,
        jumpType: r.JumpTypes.INSTANT
      }) : u.default.fetchMessages({
        guildId: t,
        channelId: i
      })
    },
    closeChannelSidebar(e) {
      a.default.dispatch({
        type: "SIDEBAR_CLOSE",
        baseChannelId: e
      })
    },
    openGuildSidebar(e) {
      let {
        guildId: t,
        baseChannelId: n,
        sidebarType: l,
        details: r
      } = e;
      return a.default.dispatch({
        type: "SIDEBAR_VIEW_GUILD",
        sidebarType: l,
        baseChannelId: n,
        guildId: t,
        details: r
      })
    },
    closeGuildSidebar(e) {
      a.default.dispatch({
        type: "SIDEBAR_CLOSE_GUILD",
        guildId: e
      })
    }
  }