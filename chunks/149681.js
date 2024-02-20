"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007"), n("70102"), n("913144");
var i = n("689988");
n("721698");
var a = n("560208"),
  l = n("883069"),
  s = n("569808");
n("487946"), n("337543");
var r = n("139514"),
  o = n("312016");
let u = new Set;

function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (t && !u.has(e.channel_id)) return;
  let n = (0, o.default)(e.content);
  null != n && 0 !== n.length && n.forEach(e => {
    let {
      type: t,
      code: n
    } = e;
    if (t === r.CodedLinkType.INVITE);
    else if (t === r.CodedLinkType.TEMPLATE) null == s.default.getGuildTemplate(n) && l.default.resolveGuildTemplate(n);
    else if (t === r.CodedLinkType.BUILD_OVERRIDE || t === r.CodedLinkType.MANUAL_BUILD_OVERRIDE);
    else if (t === r.CodedLinkType.EVENT);
    else if (t === r.CodedLinkType.CHANNEL_LINK);
    else if (t === r.CodedLinkType.APP_DIRECTORY_PROFILE);
    else if (t === r.CodedLinkType.ACTIVITY_BOOKMARK);
    else if (t === r.CodedLinkType.EMBEDDED_ACTIVITY_INVITE);
    else if (t === r.CodedLinkType.GUILD_PRODUCT);
    else if (t === r.CodedLinkType.SERVER_SHOP);
    else if (t === r.CodedLinkType.CLYDE_PROFILE);
    else if (t === r.CodedLinkType.QUESTS_EMBED);
    else throw Error("Unknown coded link type: ".concat(t))
  })
}
class c extends i.default {
  handleConnectionOpen() {
    u.clear()
  }
  handleChannelSelect(e) {
    let {
      channelId: t
    } = e;
    null != t && u.add(t)
  }
  handleMessage(e) {
    let {
      message: t
    } = e;
    return d(t, !0)
  }
  handleLoadMessages(e) {
    let {
      channelId: t,
      messages: n
    } = e;
    u.add(t), n.forEach(e => d(e, !0))
  }
  handleLoadRecentMentions(e) {
    let {
      messages: t
    } = e;
    t.forEach(e => d(e))
  }
  handleLoadPinnedMessages(e) {
    let {
      messages: t
    } = e;
    t.forEach(e => d(e))
  }
  handleSearchFinish(e) {
    e.messages.forEach(e => {
      e.forEach(e => d(e))
    })
  }
  handleGuildFeedFetchSuccess(e) {
    let {
      data: t
    } = e;
    (0, a.getMessagesFromGuildFeedFetch)(t).forEach(e => d(e))
  }
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: this.handleConnectionOpen,
      MESSAGE_CREATE: {
        callback: this.handleMessage,
        autoSubscribe: !1
      },
      MESSAGE_UPDATE: this.handleMessage,
      LOAD_MESSAGES_SUCCESS: this.handleLoadMessages,
      LOAD_MESSAGES_AROUND_SUCCESS: this.handleLoadMessages,
      LOAD_RECENT_MENTIONS_SUCCESS: this.handleLoadRecentMentions,
      LOAD_PINNED_MESSAGES_SUCCESS: this.handleLoadPinnedMessages,
      SEARCH_FINISH: this.handleSearchFinish,
      MOD_VIEW_SEARCH_FINISH: this.handleSearchFinish,
      GUILD_FEED_FETCH_SUCCESS: this.handleGuildFeedFetchSuccess,
      CHANNEL_SELECT: {
        callback: this.handleChannelSelect,
        autoSubscribe: !1
      }
    }
  }
}
var f = new c