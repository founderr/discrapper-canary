"use strict";
n.r(t), n.d(t, {
  isRemix: function() {
    return s
  }
}), n("789020");
var i = n("630388"),
  r = n("981631");
let s = e => null != e && null != e.attachments && !(e.attachments.length < 1) && e.attachments.some(e => null != e.flags && (0, i.hasFlag)(e.flags, r.MessageAttachmentFlags.IS_REMIX))