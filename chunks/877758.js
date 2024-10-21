s.d(t, {
    Z: function () {
        return i;
    }
});
var a = s(200651);
s(192379);
var n = s(120356),
    o = s.n(n),
    l = s(785997),
    r = s(954694);
function i(e) {
    let { step: t } = e,
        s = t === l.F.AGE_GATE,
        n = t === l.F.CHOOSE_TEMPLATE || t === l.F.CREATION_INTENT,
        i = t === l.F.CUSTOMIZE_GUILD,
        c = t === l.F.CHANNEL_PROMPT || t === l.F.JOIN_GUILD,
        d = i || c,
        u = n || d;
    return (0, a.jsxs)('div', {
        className: r.sidebar,
        children: [(0, a.jsx)('div', { className: o()(r.step1, { [r.show]: s }) }), (0, a.jsx)('div', { className: o()(r.step24Clouds, { [r.show]: u }) }), (0, a.jsx)('div', { className: o()(r.step34Flag, { [r.show]: d }) }), (0, a.jsx)('div', { className: o()(r.step24Base, { [r.show]: u }) }), (0, a.jsx)('div', { className: o()(r.step24Ground, { [r.show]: u }) }), (0, a.jsx)('div', { className: o()(r.step2Base, { [r.show]: n }) }), (0, a.jsx)('div', { className: o()(r.step2Character, { [r.show]: n }) }), (0, a.jsx)('div', { className: o()(r.step34Base, { [r.show]: d }) }), (0, a.jsx)('div', { className: o()(r.step3Character, { [r.show]: i }) }), (0, a.jsx)('div', { className: o()(r.step4Character, { [r.show]: c }) }), (0, a.jsx)('div', { className: o()(r.step24Foreground, { [r.show]: u }) })]
    });
}
