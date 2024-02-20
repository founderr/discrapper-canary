"use strict";
n.r(t), n.d(t, {
  getMessagesFromGuildFeedFetch: function() {
    return l
  },
  getThreadsFromGuildFeedFetch: function() {
    return u
  }
}), n("222007"), n("834022"), n("881410"), n("424973");
var r = n("611221"),
  i = n("449008");

function o(e) {
  let t = e.children.map(e => o(e));
  return [e.messages.map(e => e.message), ...t].flat()
}

function l(e) {
  return e.results.items.flatMap(e => {
    switch (e.type) {
      case r.GuildFeedItemTypes.MESSAGE:
      case r.GuildFeedItemTypes.FORUM_POST:
        return [e.message];
      case r.GuildFeedItemTypes.MESSAGE_BUNDLE:
        return e.messages.map(e => e.message);
      case r.GuildFeedItemTypes.CONVERSATION:
        return o(e.root);
      default:
        (0, i.assertNever)(e)
    }
  }).filter(i.isNotNullish)
}

function u(e) {
  return e.results.items.flatMap(e => {
    let t = [];
    switch (e.type) {
      case r.GuildFeedItemTypes.MESSAGE:
        t.push(e.message.thread);
        break;
      case r.GuildFeedItemTypes.FORUM_POST:
        t.push(e.message.thread, e.thread);
        break;
      case r.GuildFeedItemTypes.MESSAGE_BUNDLE:
        t.push(...e.messages.map(e => e.message.thread));
        break;
      case r.GuildFeedItemTypes.CONVERSATION:
        t.push(...o(e.root).map(e => e.thread));
        break;
      default:
        (0, i.assertNever)(e)
    }
    return t
  }).filter(i.isNotNullish)
}