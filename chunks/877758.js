n.d(t, {
    Z: function () {
        return r;
    }
});
var s = n(200651);
n(192379);
var a = n(120356),
    o = n.n(a),
    i = n(785997),
    l = n(700793);
function r(e) {
    let { step: t } = e,
        n = t === i.F.AGE_GATE,
        a = t === i.F.CHOOSE_TEMPLATE || t === i.F.CREATION_INTENT,
        r = t === i.F.CUSTOMIZE_GUILD,
        c = t === i.F.CHANNEL_PROMPT || t === i.F.JOIN_GUILD,
        d = r || c,
        u = a || d;
    return (0, s.jsxs)('div', {
        className: l.sidebar,
        children: [(0, s.jsx)('div', { className: o()(l.step1, { [l.show]: n }) }), (0, s.jsx)('div', { className: o()(l.step24Clouds, { [l.show]: u }) }), (0, s.jsx)('div', { className: o()(l.step34Flag, { [l.show]: d }) }), (0, s.jsx)('div', { className: o()(l.step24Base, { [l.show]: u }) }), (0, s.jsx)('div', { className: o()(l.step24Ground, { [l.show]: u }) }), (0, s.jsx)('div', { className: o()(l.step2Base, { [l.show]: a }) }), (0, s.jsx)('div', { className: o()(l.step2Character, { [l.show]: a }) }), (0, s.jsx)('div', { className: o()(l.step34Base, { [l.show]: d }) }), (0, s.jsx)('div', { className: o()(l.step3Character, { [l.show]: r }) }), (0, s.jsx)('div', { className: o()(l.step4Character, { [l.show]: c }) }), (0, s.jsx)('div', { className: o()(l.step24Foreground, { [l.show]: u }) })]
    });
}
