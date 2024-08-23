n.d(t, {
    n: function () {
        return l;
    }
});
var r = n(442837),
    i = n(594174),
    a = n(162461),
    s = n(26033),
    o = n(561308);
function l(e) {
    var t, n, l, u, c;
    let d = (0, r.e7)([i.default], () => i.default.getUser(e.author_id)),
        { activity: _ } = (0, o.qy)(e),
        E = (0, a.wh)('useRichActivityDataForEntry');
    if (!E || null == _)
        return {
            isRich: !1,
            appName: (0, s.dX)(e) ? e.extra.game_name : void 0,
            user: d,
            inExperiment: E,
            activity: void 0,
            state: void 0,
            details: void 0,
            party: void 0
        };
    let f = (null === (t = _.assets) || void 0 === t ? void 0 : t.large_image) != null || (null === (n = _.assets) || void 0 === n ? void 0 : n.small_image) != null,
        h = (null === (l = _.assets) || void 0 === l ? void 0 : l.large_text) != null || (null === (u = _.assets) || void 0 === u ? void 0 : u.small_text) != null,
        p = null !== (c = _.name) && void 0 !== c ? c : 'game_name' in e.extra ? e.extra.game_name : void 0,
        I = _.details,
        m = _.state,
        T = _.party;
    return {
        isRich: f || h || null != I || null != m || null != T,
        user: d,
        activity: _,
        state: m,
        details: I,
        party: T,
        appName: p,
        inExperiment: E
    };
}
