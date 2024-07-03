n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(735250);
n(470079);
var s = n(120356), a = n.n(s), r = n(481060), l = n(100527), o = n(360048), c = n(709158), d = n(689938), u = n(139510);
function _(e) {
    let {
        isSelected: t,
        onClick: n
    } = e;
    return (0, c.Z)(l.Z.QUEST_HOME_PAGE) ? (0, i.jsx)(o.Z, {
        avatar: (0, i.jsx)(r.QuestsIcon, { className: a()({ [u.iconSelected]: t }) }),
        name: d.Z.Messages.QUESTS,
        focusProps: {
            offset: {
                right: 4,
                top: 1,
                bottom: 1
            }
        },
        onClick: n,
        wrapContent: !0,
        selected: t,
        className: u.categoryItem,
        selectedClassName: u.selectedCategoryItem,
        innerClassName: u.itemInner
    }, 'quest-home') : null;
}
