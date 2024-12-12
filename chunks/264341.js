r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    deselectedItem: (e) => `${e.item} non selezionato.`,
    longPressToSelect: `Premi a lungo per passare alla modalit\xe0 di selezione.`,
    select: 'Seleziona',
    selectedAll: 'Tutti gli elementi selezionati.',
    selectedCount: (e, n) =>
        `${n.plural(e.count, {
            '=0': 'Nessun elemento selezionato',
            one: () => `${n.number(e.count)} elemento selezionato`,
            other: () => `${n.number(e.count)} elementi selezionati`
        })}.`,
    selectedItem: (e) => `${e.item} selezionato.`
};
