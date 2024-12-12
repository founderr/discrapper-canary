r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    deselectedItem: (e) => `${e.item} niet geselecteerd.`,
    longPressToSelect: 'Druk lang om de selectiemodus te openen.',
    select: 'Selecteren',
    selectedAll: 'Alle items geselecteerd.',
    selectedCount: (e, n) =>
        `${n.plural(e.count, {
            '=0': 'Geen items geselecteerd',
            one: () => `${n.number(e.count)} item geselecteerd`,
            other: () => `${n.number(e.count)} items geselecteerd`
        })}.`,
    selectedItem: (e) => `${e.item} geselecteerd.`
};
