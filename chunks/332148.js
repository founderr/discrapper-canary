"use strict";
s.r(t);
var n = s("544891"),
  a = s("570140"),
  l = s("346479"),
  i = s("624453"),
  u = s("668781"),
  d = s("981631"),
  r = s("689938");
let o = {
  async pinMessage(e, t) {
    let {
      id: s,
      name: a
    } = e;
    await l.default.unarchiveThreadIfNecessary(e.id), n.HTTP.put({
      url: d.Endpoints.PIN(s, t),
      oldFormErrors: !0
    }).catch(() => {
      let t;
      t = e.isPrivate() ? r.default.Messages.PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL.format({
        maxPins: d.MAX_PINS_PER_CHANNEL
      }) : r.default.Messages.PIN_MESSAGE_TOO_MANY_BODY.format({
        maxPins: d.MAX_PINS_PER_CHANNEL,
        channelName: a
      }), u.default.show({
        title: r.default.Messages.PIN_MESSAGE_TOO_MANY_TITLE,
        body: t,
        confirmText: r.default.Messages.OKAY
      })
    })
  },
  async unpinMessage(e, t) {
    await l.default.unarchiveThreadIfNecessary(e.id), n.HTTP.del({
      url: d.Endpoints.PIN(e.id, t),
      oldFormErrors: !0
    }).catch(() => u.default.show({
      title: r.default.Messages.UNPIN_MESSAGE_FAILED_TITLE,
      body: r.default.Messages.UNPIN_MESSAGE_FAILED_BODY,
      confirmText: r.default.Messages.TRY_AGAIN,
      cancelText: r.default.Messages.CANCEL,
      onConfirm: o.unpinMessage.bind(o, e, t)
    }))
  },
  ackPins(e) {
    a.default.dispatch({
      type: "CHANNEL_PINS_ACK",
      channelId: e
    })
  },
  fetchPins(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      s = i.default.getPinnedMessages(e);
    (t || null == s || !s.loaded && !s.loading) && (a.default.dispatch({
      type: "LOAD_PINNED_MESSAGES",
      channelId: e
    }), n.HTTP.get({
      url: d.Endpoints.PINS(e),
      retries: 2,
      oldFormErrors: !0
    }).then(t => {
      a.default.dispatch({
        type: "LOAD_PINNED_MESSAGES_SUCCESS",
        messages: t.body,
        channelId: e
      })
    }, () => {
      a.default.dispatch({
        type: "LOAD_PINNED_MESSAGES_FAILURE",
        channelId: e
      })
    }))
  }
};
t.default = o