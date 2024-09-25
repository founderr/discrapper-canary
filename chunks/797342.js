n.d(t, {
    n: function () {
        return l;
    }
});
var r = n(442837),
    i = n(594174),
    a = n(162461),
    o = n(26033),
    s = n(561308);
function l(e) {
    var t, n, l, u, c;
    let d = (0, r.e7)([i.default], () => i.default.getUser(e.author_id)),
        { activity: _, embeddedActivity: E } = (0, s.qy)(e),
        f = (0, a.wh)('useRichActivityDataForEntry');
    if (!f || null == _)
        return {
            isRich: !1,
            appName: (0, o.dX)(e) ? e.extra.game_name : void 0,
            user: d,
            inExperiment: f,
            activity: void 0,
            embeddedActivity: void 0,
            state: void 0,
            details: void 0,
            party: void 0
        };
    let h = (null === (t = _.assets) || void 0 === t ? void 0 : t.large_image) != null || (null === (n = _.assets) || void 0 === n ? void 0 : n.small_image) != null,
        p = (null === (l = _.assets) || void 0 === l ? void 0 : l.large_text) != null || (null === (u = _.assets) || void 0 === u ? void 0 : u.small_text) != null,
        m = null !== (c = _.name) && void 0 !== c ? c : 'game_name' in e.extra ? e.extra.game_name : void 0,
        I = _.details,
        T = _.state,
        g = _.party;
    return {
        isRich: h || p || null != I || null != T || null != g,
        user: d,
        activity: _,
        state: T,
        details: I,
        party: g,
        appName: m,
        inExperiment: f,
        embeddedActivity: E
    };
}
