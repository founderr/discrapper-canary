r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    deselectedItem: (e) => `${e.item} pole valitud.`,
    longPressToSelect: `Valikure\u{17E}iimi sisenemiseks vajutage pikalt.`,
    select: 'Vali',
    selectedAll: `K\xf5ik \xfcksused valitud.`,
    selectedCount: (e, n) =>
        `${n.plural(e.count, {
            '=0': `\xdcksusi pole valitud`,
            one: () => `${n.number(e.count)} \xfcksus valitud`,
            other: () => `${n.number(e.count)} \xfcksust valitud`
        })}.`,
    selectedItem: (e) => `${e.item} valitud.`
};
