t.d(n, {
    b: function () {
        return s;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(991862);
function s(e) {
    let { currencies: n, className: t, children: l } = e;
    return n.length < 2
        ? null
        : (0, i.jsx)('div', {
              className: t,
              children: l
          });
}
n.Z = function (e) {
    let { currencies: n, onChange: t, selectedCurrency: s, className: a, disabled: c = !1 } = e;
    if (n.length < 2) return null;
    let o = n.map((e, n) => ({
        key: n,
        value: e,
        label: ''.concat(e.toUpperCase(), ' - ').concat((0, r.T)(e))
    }));
    return (0, i.jsx)(l.SingleSelect, {
        value: s,
        options: o,
        onChange: (e) => {
            null != e && t(e);
        },
        className: a,
        isDisabled: c
    });
};
