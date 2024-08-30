t.d(s, {
    a: function () {
        return l;
    }
});
var n = t(442837),
    a = t(663389),
    i = t(996733),
    r = t(394644),
    o = t(295545);
function l(e, s) {
    var t;
    let l = (0, o.eA)({ location: 'settingsTabs' }),
        c = (0, r.Gj)(s),
        d = (0, i.Z7)(),
        u = (0, n.e7)([a.Z], () => a.Z.getSubsection()),
        _ = e.filter((e) => null == e.predicate || e.predicate());
    if (l) {
        if (null != c && c.size > 0) {
            let e = _.filter((e) => c.has(e.setting));
            _ = e.length > 0 ? e : _;
        }
        if (null != d && d.length > 0 && null == u) {
            let e = _.find((e) => e.title.toLowerCase() === d.toLowerCase());
            if (null != e)
                return {
                    viewableTabs: _,
                    selectedTab: e
                };
        }
    }
    let E = null !== (t = _.find((e) => null != e && e.setting === u)) && void 0 !== t ? t : _[0];
    return {
        viewableTabs: _,
        selectedTab: E
    };
}
