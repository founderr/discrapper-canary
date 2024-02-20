"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("913144"),
  a = n("819689"),
  l = n("115718"),
  r = n("347895"),
  u = n("341329"),
  s = n("582713"),
  o = n("724210"),
  d = {
    openPrivateChannelAsSidebar(e) {
      let {
        channelId: t,
        messageId: n,
        baseChannelId: l,
        hasSingleMessageRequest: r
      } = e;
      i.default.dispatch({
        type: "SIDEBAR_VIEW_CHANNEL",
        sidebarType: s.SidebarType.VIEW_MESSAGE_REQUEST,
        baseChannelId: l,
        channelId: t,
        details: {
          type: s.SidebarOpenDetailsType.MESSAGE_REQUEST,
          hasSingleMessageRequest: r
        }
      }), null != n ? a.default.jumpToMessage({
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
        baseChannelId: r,
        flash: o = !0,
        details: d
      } = e;
      i.default.dispatch({
        type: "SIDEBAR_VIEW_CHANNEL",
        sidebarType: s.SidebarType.VIEW_CHANNEL,
        guildId: t,
        baseChannelId: r,
        channelId: n,
        details: d
      });
      let c = null == d ? void 0 : d.initialMessageId;
      null != c ? a.default.jumpToMessage({
        channelId: n,
        messageId: c,
        flash: o,
        jumpType: l.JumpTypes.INSTANT
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
      null != t && ((0, r.selectHomeResourceChannel)(t, n, !1), i.default.dispatch({
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
        channelId: r,
        flash: o = !0,
        details: d
      } = e;
      i.default.dispatch({
        type: "SIDEBAR_VIEW_CHANNEL",
        sidebarType: s.SidebarType.VIEW_THREAD,
        baseChannelId: n,
        channelId: r,
        details: d
      }), (null == d ? void 0 : d.initialMessageId) != null ? a.default.jumpToMessage({
        channelId: r,
        messageId: d.initialMessageId,
        flash: o,
        jumpType: l.JumpTypes.INSTANT
      }) : u.default.fetchMessages({
        guildId: t,
        channelId: r
      })
    },
    closeChannelSidebar(e) {
      i.default.dispatch({
        type: "SIDEBAR_CLOSE",
        baseChannelId: e
      })
    },
    openGuildSidebar(e) {
      let {
        guildId: t,
        baseChannelId: n,
        sidebarType: a,
        details: l
      } = e;
      return i.default.dispatch({
        type: "SIDEBAR_VIEW_GUILD",
        sidebarType: a,
        baseChannelId: n,
        guildId: t,
        details: l
      })
    },
    closeGuildSidebar(e) {
      i.default.dispatch({
        type: "SIDEBAR_CLOSE_GUILD",
        guildId: e
      })
    }
  }