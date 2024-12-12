r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    deselectedItem: (e) => `Nevybrat\xe9 polo\u{17E}ky: ${e.item}.`,
    longPressToSelect: `Dlh\u{161}\xedm stla\u{10D}en\xedm prejdite do re\u{17E}imu v\xfdberu.`,
    select: `Vybra\u{165}`,
    selectedAll: `V\u{161}etky vybrat\xe9 polo\u{17E}ky.`,
    selectedCount: (e, n) =>
        `${n.plural(e.count, {
            '=0': `\u{17D}iadne vybrat\xe9 polo\u{17E}ky`,
            one: () => `${n.number(e.count)} vybrat\xe1 polo\u{17E}ka`,
            other: () => `Po\u{10D}et vybrat\xfdch polo\u{17E}iek:${n.number(e.count)}`
        })}.`,
    selectedItem: (e) => `Vybrat\xe9 polo\u{17E}ky: ${e.item}.`
};
