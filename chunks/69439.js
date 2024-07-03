n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(735250), s = n(470079), a = n(481060), r = n(617136), l = n(272008), o = n(497505), c = n(667105), d = n(689938), u = n(207637);
function _(e) {
    var t, n, _, h;
    let {quest: E} = e, I = (null === (t = E.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, m = (null === (n = E.userStatus) || void 0 === n ? void 0 : n.completedAt) != null && (null === (_ = E.userStatus) || void 0 === _ ? void 0 : _.claimedAt) == null, g = (null === (h = E.userStatus) || void 0 === h ? void 0 : h.claimedAt) != null, p = (0, c.hf)({
            quest: E,
            location: o.jn.QUEST_BAR
        }), T = s.useCallback(() => {
            (0, l.AH)(E.id, {
                questContent: o.jn.QUEST_HOME_DESKTOP,
                questContentCTA: r.jZ.ACCEPT_QUEST
            });
        }, [E]);
    return m ? (0, i.jsx)('div', {
        className: u.container,
        children: (0, i.jsx)(a.Button, {
            color: a.ButtonColors.BRAND,
            onClick: p,
            className: u.button,
            children: d.Z.Messages.QUESTS_CLAIM_REWARD
        })
    }) : I && !g ? (0, i.jsx)('div', {
        className: u.container,
        children: (0, i.jsx)(a.Button, {
            color: a.ButtonColors.PRIMARY,
            disabled: !0,
            className: u.button,
            children: d.Z.Messages.QUEST_ACCEPTED
        })
    }) : (0, i.jsx)('div', {
        className: u.container,
        children: (0, i.jsx)(a.Button, {
            color: a.ButtonColors.BRAND,
            onClick: T,
            className: u.button,
            children: d.Z.Messages.QUESTS_ACCEPT
        })
    });
}
