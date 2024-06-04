"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  },
  isForwardServerMessage: function() {
    return s
  }
});
var i = n("981631");

function r(e) {
  var t;
  return (null === (t = e.messageReference) || void 0 === t ? void 0 : t.type) === i.MessageReferenceTypes.FORWARD
}

function s(e) {
  var t;
  return (null === (t = e.message_reference) || void 0 === t ? void 0 : t.type) === i.MessageReferenceTypes.FORWARD
}