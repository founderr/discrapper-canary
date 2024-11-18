t.d(e, {
    x: function () {
        return o;
    }
});
var i = t(442837),
    r = t(594174),
    l = t(359119),
    u = t(237292),
    a = t(13279);
let o = (n) => {
    let e = (0, u.y0)({ location: 'context-menu-item' }),
        t = (0, i.e7)([r.default], () => r.default.getCurrentUser()),
        o = (0, a.z)(n.id, 'context-menu-item');
    if ((null == t ? void 0 : t.isStaff()) !== !0 || !e || !n.isDM()) return null;
    let d = (null == o ? void 0 : o.type) === l.pj.INAPPROPRIATE_CONVERSATION_TIER_1;
    return {
        isTier1: d,
        isTier2: (null == o ? void 0 : o.type) === l.pj.INAPPROPRIATE_CONVERSATION_TIER_2
    };
};
