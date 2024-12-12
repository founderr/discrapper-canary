r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    deselectedItem: (e) => `${e.item} ej markerat.`,
    longPressToSelect: `Tryck l\xe4nge n\xe4r du vill \xf6ppna v\xe4ljarl\xe4ge.`,
    select: 'Markera',
    selectedAll: 'Alla markerade objekt.',
    selectedCount: (e, n) =>
        `${n.plural(e.count, {
            '=0': 'Inga markerade objekt',
            one: () => `${n.number(e.count)} markerat objekt`,
            other: () => `${n.number(e.count)} markerade objekt`
        })}.`,
    selectedItem: (e) => `${e.item} markerat.`
};
