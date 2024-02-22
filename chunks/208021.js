"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("913144"),
  o = n("819689"),
  l = n("115718"),
  a = n("347895"),
  u = n("341329"),
  d = n("582713"),
  s = n("724210"),
  r = {
    openPrivateChannelAsSidebar(e) {
      let {
        channelId: t,
        messageId: n,
        baseChannelId: l,
        hasSingleMessageRequest: a
      } = e;
      i.default.dispatch({
        type: "SIDEBAR_VIEW_CHANNEL",
        sidebarType: d.SidebarType.VIEW_MESSAGE_REQUEST,
        baseChannelId: l,
        channelId: t,
        details: {
          type: d.SidebarOpenDetailsType.MESSAGE_REQUEST,
          hasSingleMessageRequest: a
        }
      }), null != n ? o.default.jumpToMessage({
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
        baseChannelId: a,
        flash: s = !0,
        details: r
      } = e;
      i.default.dispatch({
        type: "SIDEBAR_VIEW_CHANNEL",
        sidebarType: d.SidebarType.VIEW_CHANNEL,
        guildId: t,
        baseChannelId: a,
        channelId: n,
        details: r
      });
      let E = null == r ? void 0 : r.initialMessageId;
      null != E ? o.default.jumpToMessage({
        channelId: n,
        messageId: E,
        flash: s,
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
      null != t && ((0, a.selectHomeResourceChannel)(t, n, !1), i.default.dispatch({
        type: "SIDEBAR_VIEW_CHANNEL",
        sidebarType: d.SidebarType.VIEW_CHANNEL,
        guildId: t,
        baseChannelId: s.StaticChannelRoute.GUILD_HOME,
        channelId: n
      }))
    },
    openThreadAsSidebar(e) {
      let {
        guildId: t,
        baseChannelId: n,
        channelId: a,
        flash: s = !0,
        details: r
      } = e;
      i.default.dispatch({
        type: "SIDEBAR_VIEW_CHANNEL",
        sidebarType: d.SidebarType.VIEW_THREAD,
        baseChannelId: n,
        channelId: a,
        details: r
      }), (null == r ? void 0 : r.initialMessageId) != null ? o.default.jumpToMessage({
        channelId: a,
        messageId: r.initialMessageId,
        flash: s,
        jumpType: l.JumpTypes.INSTANT
      }) : u.default.fetchMessages({
        guildId: t,
        channelId: a
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
        sidebarType: o,
        details: l
      } = e;
      return i.default.dispatch({
        type: "SIDEBAR_VIEW_GUILD",
        sidebarType: o,
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