n.d(t, {
  h: function() {
    return o
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(671533),
  a = n(981631),
  r = n(658216);

function o(e) {
  let {
    buttonText: t,
    onGoBack: n,
    onDismiss: o,
    showCloseButton: c
  } = e;
  return (0, s.jsxs)(i.Notice, {
    className: r.backNotice,
    children: [c && (0, s.jsx)(i.NoticeCloseButton, {
      onClick: o,
      noticeType: a.kVF.BACK_TO_PREVIOUS_SCREEN
    }), (0, s.jsxs)(i.Button, {
      className: r.backButton,
      innerClassName: r.backButtonInner,
      look: i.Button.Looks.OUTLINED,
      color: i.Button.Colors.WHITE,
      size: i.Button.Sizes.NONE,
      onClick: n,
      children: [(0, s.jsx)(l.Z, {
        width: 16,
        height: 16,
        direction: l.Z.Directions.LEFT,
        className: r.__invalid_backArrow
      }), t]
    })]
  })
}