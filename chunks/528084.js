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
    let t = (0, o.eA)({ location: 'settingsTabs' }),
        l = (0, r.Gj)(s),
        c = (0, i.Z7)(),
        d = (0, n.e7)([a.Z], () => a.Z.getSubsection()),
        _ = e.filter((e) => null == e.predicate || e.predicate());
    if (t) {
        if (null != l && l.size > 0) {
            let e = _.filter((e) => l.has(e.setting));
            _ = e.length > 0 ? e : _;
        }
        if (null != c && c.length > 0 && null == d) {
            let e = _.find((e) => e.title.toLowerCase() === c.toLowerCase());
            if (null != e)
                return {
                    viewableTabs: _,
                    filteredTab: e
                };
        }
    }
    let u = _.find((e) => null != e && e.setting === d);
    return {
        viewableTabs: _,
        filteredTab: u
    };
}
