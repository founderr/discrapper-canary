"use strict";
n.r(t), n.d(t, {
  loadInviteSuggestions: function() {
    return a
  },
  searchInviteSuggestions: function() {
    return s
  }
}), n("222007");
var l = n("913144"),
  i = n("777273");

function a(e) {
  let {
    omitUserIds: t,
    guild: n,
    channel: a,
    applicationId: s,
    inviteTargetType: r
  } = e;
  return (0, i.fetchUserAffinities)().then(() => {
    l.default.dispatch({
      type: "LOAD_INVITE_SUGGESTIONS",
      omitUserIds: null != t ? t : new Set,
      guild: n,
      channel: a,
      applicationId: s,
      inviteTargetType: r
    })
  })
}

function s(e) {
  l.default.dispatch({
    type: "INVITE_SUGGESTIONS_SEARCH",
    query: e
  })
}