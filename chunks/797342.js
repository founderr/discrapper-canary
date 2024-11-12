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
        { activity: f, embeddedActivity: _ } = (0, o.qy)(e),
        p = (0, a.wh)('useRichActivityDataForEntry');
    if (!p || null == f)
        return {
            isRich: !1,
            appName: (0, s.dX)(e) ? e.extra.game_name : void 0,
            user: d,
            inExperiment: p,
            activity: void 0,
            embeddedActivity: void 0,
            state: void 0,
            details: void 0,
            party: void 0
        };
    let h = (null === (t = f.assets) || void 0 === t ? void 0 : t.large_image) != null || (null === (n = f.assets) || void 0 === n ? void 0 : n.small_image) != null,
        m = (null === (l = f.assets) || void 0 === l ? void 0 : l.large_text) != null || (null === (u = f.assets) || void 0 === u ? void 0 : u.small_text) != null,
        g = null !== (c = f.name) && void 0 !== c ? c : 'game_name' in e.extra ? e.extra.game_name : void 0,
        E = f.details,
        v = f.state,
        I = f.party;
    return {
        isRich: h || m || null != E || null != v || null != I,
        user: d,
        activity: f,
        state: v,
        details: E,
        party: I,
        appName: g,
        inExperiment: p,
        embeddedActivity: _
    };
}
