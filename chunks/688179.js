n.d(t, {
    m: function () {
        return o;
    }
});
var i = n(806966),
    r = n(585483),
    l = n(981631),
    a = n(957825);
function o(e) {
    let { stickerPack: t, stickerPickerCategories: n } = e;
    r.S.dispatchToLastSubscribed(l.CkL.OPEN_EXPRESSION_PICKER, { activeView: a.X1.STICKER });
    let o = n.findIndex((e) => e.id === t.id);
    -1 !== o && i.ZN.setActiveCategoryIndex(o);
}
