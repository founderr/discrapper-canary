r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    deselectedItem: (e) => `Kohdetta ${e.item} ei valittu.`,
    longPressToSelect: `Siirry valintatilaan painamalla pitk\xe4\xe4n.`,
    select: 'Valitse',
    selectedAll: 'Kaikki kohteet valittu.',
    selectedCount: (e, n) =>
        `${n.plural(e.count, {
            '=0': `Ei yht\xe4\xe4n kohdetta valittu`,
            one: () => `${n.number(e.count)} kohde valittu`,
            other: () => `${n.number(e.count)} kohdetta valittu`
        })}.`,
    selectedItem: (e) => `${e.item} valittu.`
};
