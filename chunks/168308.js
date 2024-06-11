"use strict";
s.r(t), s.d(t, {
  shouldShowRegisteredGamesSettings: function() {
    return l
  },
  useShouldShowOverlaySettings: function() {
    return r
  }
});
var a = s("442837"),
  n = s("808506"),
  i = s("358085");

function l() {
  return i.isPlatformEmbedded
}

function r() {
  return (0, a.useStateFromStores)([n.default], () => n.default.isSupported()) || !1
}