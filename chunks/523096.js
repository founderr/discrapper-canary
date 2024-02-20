"use strict";
n.r(t), n.d(t, {
  getAutomodAvatarURL: function() {
    return L
  },
  default: function() {
    return p
  }
});
var r = n("560528"),
  i = n("324241"),
  o = n("307757"),
  l = n("548520"),
  u = n("445724"),
  a = n("170382"),
  s = n("593285"),
  E = n("575603"),
  _ = n("181815"),
  c = n("521089"),
  d = n("366942"),
  T = n("125707"),
  A = n("785744"),
  I = n("297384"),
  S = n("573220"),
  f = n("265284"),
  O = n("320436"),
  R = n("348044"),
  N = n("36409");

function L() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return e ? N : i
}
var p = {
  DEFAULT_AVATARS: [o, l, u, a, s, E],
  DEFAULT_GROUP_DM_AVATARS: [_, c, d, T, A, I, S, f],
  BOT_AVATARS: {
    clyde: R
  },
  DEFAULT_CHANNEL_ICON: O,
  canUseWebp: function() {
    return r.canUseWebp()
  }
}