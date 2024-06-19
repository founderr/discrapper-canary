n.d(t, {
  m: function() {
    return r
  }
});
var s = n(806966),
  i = n(585483),
  l = n(981631),
  a = n(957825);

function r(e) {
  let {
    stickerPack: t,
    stickerPickerCategories: n
  } = e;
  i.S.dispatchToLastSubscribed(l.CkL.OPEN_EXPRESSION_PICKER, {
    activeView: a.X1.STICKER
  });
  let r = n.findIndex(e => e.id === t.id); - 1 !== r && s.ZN.setActiveCategoryIndex(r)
}