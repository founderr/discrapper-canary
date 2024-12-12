r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    deselectedItem: (e) => `${e.item} er ikke valgt.`,
    longPressToSelect: `Bruk et langt trykk for \xe5 g\xe5 inn i valgmodus.`,
    select: 'Velg',
    selectedAll: 'Alle elementer er valgt.',
    selectedCount: (e, n) =>
        `${n.plural(e.count, {
            '=0': 'Ingen elementer er valgt',
            one: () => `${n.number(e.count)} element er valgt`,
            other: () => `${n.number(e.count)} elementer er valgt`
        })}.`,
    selectedItem: (e) => `${e.item} er valgt.`
};
