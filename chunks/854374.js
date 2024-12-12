r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    deselectedItem: (e) => `${e.item} neselectat.`,
    longPressToSelect: `Ap\u{103}sa\u{21B}i lung pentru a intra \xeen modul de selectare.`,
    select: 'Selectare',
    selectedAll: 'Toate elementele selectate.',
    selectedCount: (e, n) =>
        `${n.plural(e.count, {
            '=0': 'Niciun element selectat',
            one: () => `${n.number(e.count)} element selectat`,
            other: () => `${n.number(e.count)} elemente selectate`
        })}.`,
    selectedItem: (e) => `${e.item} selectat.`
};
