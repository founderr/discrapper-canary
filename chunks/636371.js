"use strict";
n.r(t), n.d(t, {
  queueHighFive: function() {
    return a
  },
  removeHighFive: function() {
    return l
  },
  setHighFiveEnabled: function() {
    return s
  },
  completeHighFive: function() {
    return r
  },
  clearCompletedHighFive: function() {
    return o
  }
});
var i = n("913144");

function a(e, t, n) {
  i.default.dispatch({
    type: "HIGH_FIVE_QUEUE",
    userId: t,
    channelId: n,
    emoji: e
  })
}

function l(e, t) {
  i.default.dispatch({
    type: "HIGH_FIVE_REMOVE",
    channelId: t,
    userId: e
  })
}

function s(e) {
  i.default.dispatch({
    type: "HIGH_FIVE_SET_ENABLED",
    enabled: e
  })
}

function r(e, t, n, a) {
  i.default.dispatch({
    type: "HIGH_FIVE_COMPLETE",
    waitingUserId: e,
    completingUserId: t,
    channelId: n,
    completingEmoji: a
  })
}

function o(e, t, n) {
  i.default.dispatch({
    type: "HIGH_FIVE_COMPLETE_CLEAR",
    firstUserId: e,
    secondUserId: t,
    channelId: n
  })
}