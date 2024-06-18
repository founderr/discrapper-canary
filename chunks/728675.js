"use strict";

function i(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    {
      onBeforeBatch: i
    } = n,
    r = new Set;

  function s(e) {
    null != e.channel_id && r.has(e.channel_id) && t(e)
  }

  function o(e) {
    let {
      message: t
    } = e;
    if (null != t.channel_id && !!r.has(t.channel_id)) null == i || i(), s(t)
  }

  function a(e) {
    let {
      channelId: t,
      messages: n
    } = e;
    r.add(t), null == i || i(), n.forEach(e => s(e))
  }

  function l(e) {
    null == i || i(), e.messages.forEach(e => {
      e.forEach(e => t(e))
    })
  }
  e.actions = {
    ...e.actions,
    POST_CONNECTION_OPEN: function() {
      r.clear()
    },
    MESSAGE_CREATE: {
      callback: o,
      autoSubscribe: !1
    },
    MESSAGE_UPDATE: o,
    LOAD_MESSAGES_SUCCESS: a,
    LOAD_MESSAGES_AROUND_SUCCESS: a,
    LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
      let {
        messages: n
      } = e;
      null == i || i(), n.forEach(e => t(e))
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
      let {
        messages: n
      } = e;
      null == i || i(), n.forEach(e => t(e))
    },
    SEARCH_FINISH: l,
    MOD_VIEW_SEARCH_FINISH: l,
    CHANNEL_SELECT: {
      callback: function(e) {
        let {
          channelId: t
        } = e;
        null != t && r.add(t)
      },
      autoSubscribe: !1
    }
  }
}
n.d(t, {
  Z: function() {
    return i
  }
}), n(47120)