"use strict";
n.r(t), n.d(t, {
  BackToPreviousScreenNotice: function() {
    return o
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("671533"),
  i = n("981631"),
  r = n("575544");

function o(e) {
  let {
    buttonText: t,
    onGoBack: n,
    onDismiss: o,
    showCloseButton: u
  } = e;
  return (0, s.jsxs)(a.Notice, {
    className: r.backNotice,
    children: [u && (0, s.jsx)(a.NoticeCloseButton, {
      onClick: o,
      noticeType: i.NoticeTypes.BACK_TO_PREVIOUS_SCREEN
    }), (0, s.jsxs)(a.Button, {
      className: r.backButton,
      innerClassName: r.backButtonInner,
      look: a.Button.Looks.OUTLINED,
      color: a.Button.Colors.WHITE,
      size: a.Button.Sizes.NONE,
      onClick: n,
      children: [(0, s.jsx)(l.default, {
        width: 16,
        height: 16,
        direction: l.default.Directions.LEFT,
        className: r.__invalid_backArrow
      }), t]
    })]
  })
}