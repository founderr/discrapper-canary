r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    deselectedItem: (e) => `${e.item} ikke valgt.`,
    longPressToSelect: 'Lav et langt tryk for at aktivere valgtilstand.',
    select: `V\xe6lg`,
    selectedAll: 'Alle elementer valgt.',
    selectedCount: (e, n) =>
        `${n.plural(e.count, {
            '=0': 'Ingen elementer valgt',
            one: () => `${n.number(e.count)} element valgt`,
            other: () => `${n.number(e.count)} elementer valgt`
        })}.`,
    selectedItem: (e) => `${e.item} valgt.`
};
