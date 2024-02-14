"use strict";
n.r(t), n.d(t, {
  MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID: function() {
    return l
  },
  MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID: function() {
    return a
  },
  MESSAGE_REACTIONS_LABEL_SEGMENT_ID: function() {
    return s
  },
  IMAGE_OPEN_DIALOG_DESCRIPTION: function() {
    return o
  },
  insertAccessibilityLabelElements: function() {
    return u
  }
});
var i = n("476765"),
  r = n("782340");
let l = (0, i.uid)(),
  a = (0, i.uid)(),
  s = (0, i.uid)(),
  o = (0, i.uid)();

function u() {
  [{
    id: l,
    text: ","
  }, {
    id: a,
    text: ","
  }, {
    id: s,
    text: r.default.Messages.REACTIONS
  }, {
    id: o,
    text: r.default.Messages.OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION
  }].forEach(e => {
    let {
      id: t,
      text: n
    } = e, i = document.getElementById(t);
    null == i && ((i = document.createElement("div")).setAttribute("id", t), i.innerText = n, i.style.display = "none", document.body.appendChild(i))
  })
}