"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("872717"),
  a = n("913144"),
  l = n("263024"),
  i = n("508229"),
  r = n("404118"),
  d = n("49111"),
  u = n("782340");
let o = {
  async pinMessage(e, t) {
    let {
      id: n,
      name: a
    } = e;
    await l.default.unarchiveThreadIfNecessary(e.id), s.default.put({
      url: d.Endpoints.PIN(n, t),
      oldFormErrors: !0
    }).catch(() => {
      let t;
      t = e.isPrivate() ? u.default.Messages.PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL.format({
        maxPins: d.MAX_PINS_PER_CHANNEL
      }) : u.default.Messages.PIN_MESSAGE_TOO_MANY_BODY.format({
        maxPins: d.MAX_PINS_PER_CHANNEL,
        channelName: a
      }), r.default.show({
        title: u.default.Messages.PIN_MESSAGE_TOO_MANY_TITLE,
        body: t,
        confirmText: u.default.Messages.OKAY
      })
    })
  },
  async unpinMessage(e, t) {
    await l.default.unarchiveThreadIfNecessary(e.id), s.default.delete({
      url: d.Endpoints.PIN(e.id, t),
      oldFormErrors: !0
    }).catch(() => r.default.show({
      title: u.default.Messages.UNPIN_MESSAGE_FAILED_TITLE,
      body: u.default.Messages.UNPIN_MESSAGE_FAILED_BODY,
      confirmText: u.default.Messages.TRY_AGAIN,
      cancelText: u.default.Messages.CANCEL,
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
      n = i.default.getPinnedMessages(e);
    (t || null == n || !n.loaded && !n.loading) && (a.default.dispatch({
      type: "LOAD_PINNED_MESSAGES",
      channelId: e
    }), s.default.get({
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
var c = o