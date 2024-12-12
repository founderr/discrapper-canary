r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    deselectedItem: (e) => `${e.item} se\xe7ilmedi.`,
    longPressToSelect: `Se\xe7im moduna girmek i\xe7in uzun bas\u{131}n.`,
    select: `Se\xe7`,
    selectedAll: `T\xfcm \xf6geler se\xe7ildi.`,
    selectedCount: (e, n) =>
        `${n.plural(e.count, {
            '=0': `Hi\xe7bir \xf6ge se\xe7ilmedi`,
            one: () => `${n.number(e.count)} \xf6ge se\xe7ildi`,
            other: () => `${n.number(e.count)} \xf6ge se\xe7ildi`
        })}.`,
    selectedItem: (e) => `${e.item} se\xe7ildi.`
};
