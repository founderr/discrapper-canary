"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
}), a("222007");
var l = a("884691"),
  n = a("16470"),
  s = a("418009"),
  r = a("850391"),
  i = a("538282"),
  o = a("186859"),
  u = a("13030");

function c(e) {
  var t, a;
  let [c, d] = l.useState(null), [E, _, A, f] = (0, i.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.lastActiveView, e.pickerId], n.default), m = r.ChatInputTypes.CREATE_POLL, L = null != E && null != _ && _ === m;
  let p = (t = A, a = e, null != t && o.POLLS_SUPPORTED_EXPRESSION_PICKER_VIEW_TYPES.has(t) ? t : a === s.PollLayoutTypes.DEFAULT ? u.ExpressionPickerViewType.EMOJI : u.ExpressionPickerViewType.GIF),
    T = l.useCallback(e => {
      d(t => (t === e ? (0, i.toggleExpressionPicker)(p, m) : (0, i.openExpressionPicker)(p, m), e))
    }, [p, m]),
    C = l.useCallback(() => {
      (0, i.closeExpressionPicker)(m)
    }, [m]);
  return l.useEffect(() => () => {
    (0, i.closeExpressionPicker)(m)
  }, [m]), {
    showPollExpressionPicker: L,
    togglePollExpressionPicker: T,
    closePollExpressionPicker: C,
    pollExpressionPickerId: f,
    chatInputType: m,
    lastActiveParentIndex: c
  }
}