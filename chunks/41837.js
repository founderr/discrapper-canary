"use strict";
l.r(t), l.d(t, {
  ALLOWED_TYPES: function() {
    return a
  },
  isAllowedType: function() {
    return n
  }
});
var s = l("212819");
let a = Array.from([s.AutocompleterResultTypes.USER, s.AutocompleterResultTypes.TEXT_CHANNEL, s.AutocompleterResultTypes.VOICE_CHANNEL, s.AutocompleterResultTypes.GROUP_DM]);

function n(e) {
  return a.includes(e.type)
}