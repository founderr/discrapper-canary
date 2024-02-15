"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("171644"),
  a = n("782340");

function s(e) {
  switch (e) {
    case l.GameConsoleTypes.XBOX:
      return a.default.Messages.XBOX_REMOTE_CONNECTED_RAW;
    case l.GameConsoleTypes.PLAYSTATION:
      return a.default.Messages.PLAYSTATION_REMOTE_CONNECTED_RAW
  }
}