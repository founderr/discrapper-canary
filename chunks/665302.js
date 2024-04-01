"use strict";
n.r(t), n.d(t, {
  BackToPreviousScreenNotice: function() {
    return u
  }
});
var s = n("735250");
n("470079");
var l = n("481060"),
  a = n("671533"),
  i = n("644766"),
  r = n("981631"),
  o = n("762757");

function u(e) {
  let {
    buttonText: t,
    onGoBack: n,
    onDismiss: u,
    showCloseButton: d
  } = e;
  return (0, s.jsxs)(i.default, {
    className: o.backNotice,
    children: [d && (0, s.jsx)(i.NoticeCloseButton, {
      onClick: u,
      noticeType: r.NoticeTypes.BACK_TO_PREVIOUS_SCREEN
    }), (0, s.jsxs)(l.Button, {
      className: o.backButton,
      innerClassName: o.backButtonInner,
      look: l.Button.Looks.OUTLINED,
      color: l.Button.Colors.WHITE,
      size: l.Button.Sizes.NONE,
      onClick: n,
      children: [(0, s.jsx)(a.default, {
        width: 16,
        height: 16,
        direction: a.default.Directions.LEFT,
        className: o.__invalid_backArrow
      }), t]
    })]
  })
}