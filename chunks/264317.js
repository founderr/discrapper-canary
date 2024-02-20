"use strict";
a.r(t), a.d(t, {
  useToggleExpressionPicker: function() {
    return E
  },
  default: function() {
    return A
  }
}), a("222007");
var l = a("884691"),
  n = a("418009"),
  s = a("850391"),
  r = a("538282"),
  i = a("957255"),
  o = a("186859"),
  u = a("13030"),
  c = a("843455");
let d = s.ChatInputTypes.CREATE_POLL;

function E(e, t) {
  let [a, s] = l.useState(null), E = l.useCallback(a => {
    var l, E, A;
    let _ = r.useExpressionPickerStore.getState().lastActiveView,
      f = e.isPrivate() || i.default.can(c.Permissions.ATTACH_FILES, e);
    let m = (l = f, E = _, A = t, l ? null != E && o.POLLS_SUPPORTED_EXPRESSION_PICKER_VIEW_TYPES.has(E) ? E : A === n.PollLayoutTypes.DEFAULT ? u.ExpressionPickerViewType.EMOJI : u.ExpressionPickerViewType.GIF : u.ExpressionPickerViewType.EMOJI);
    s(e => (e === a ? (0, r.toggleExpressionPicker)(m, d) : (0, r.openExpressionPicker)(m, d), a))
  }, [e, t]);
  return {
    lastActiveInputIndex: a,
    togglePollExpressionPicker: E
  }
}

function A() {
  let e = (0, r.useExpressionPickerStore)(e => null != e.activeView && e.activeViewType === d),
    t = l.useCallback(() => {
      (0, r.closeExpressionPicker)(d)
    }, []);
  return l.useEffect(() => () => {
    (0, r.closeExpressionPicker)(d)
  }, []), {
    showPollExpressionPicker: e,
    closePollExpressionPicker: t
  }
}