n.d(t, {
    Z: function () {
        return m;
    }
});
var l = n(200651);
n(192379);
var o = n(498607),
    i = n.n(o),
    a = n(913527),
    r = n.n(a),
    s = n(399606),
    c = n(893966),
    C = n(527379),
    d = n(932039),
    u = n(388032);
function m(e) {
    let { guildId: t, onClose: n } = e,
        o = (0, s.e7)([c.Z], () => c.Z.getSearchStateByGuildId(t), [t], i()),
        { selectedAccountAgeOption: a } = o,
        { afterDate: m, beforeDate: h, optionId: x } = a,
        b = x === d.Ol.CUSTOM,
        f = b && null != m ? r()(m).format(d.N2) : null,
        g = b && null != h ? r()(h).format(d.N2) : null;
    return (0, l.jsx)(d.ZP, {
        startDateLabel: f,
        endDateLabel: g,
        afterDate: m,
        beforeDate: h,
        selectedOption: x,
        isCustomDateRange: b,
        menuName: 'account-age',
        accessibilityLabel: u.intl.string(u.t['D++TgY']),
        onClose: n,
        onSelectDateOption: function (e, n) {
            let l = null != n ? r()().subtract(n.input, n.unit).valueOf() : null;
            (0, C.Dr)(t, {
                ...o,
                selectedAccountAgeOption: {
                    optionId: e,
                    afterDate: l,
                    beforeDate: null
                }
            });
        },
        onToggleCustomDateRange: function () {
            (0, C.Dr)(t, {
                ...o,
                selectedAccountAgeOption: {
                    optionId: d.Ol.CUSTOM,
                    afterDate: b ? m : null,
                    beforeDate: b ? h : null
                }
            });
        },
        onSelectStartDate: function (e) {
            (0, C.Dr)(t, {
                ...o,
                selectedAccountAgeOption: {
                    optionId: d.Ol.CUSTOM,
                    afterDate: e.valueOf(),
                    beforeDate: h
                }
            });
        },
        onSelectEndDate: function (e) {
            (0, C.Dr)(t, {
                ...o,
                selectedAccountAgeOption: {
                    optionId: d.Ol.CUSTOM,
                    afterDate: m,
                    beforeDate: e.valueOf()
                }
            });
        }
    });
}
