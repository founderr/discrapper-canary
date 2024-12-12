r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    deselectedItem: (e) => `${e.item} nije izabrano.`,
    longPressToSelect: `Dugo pritisnite za ulazak u re\u{17E}im biranja.`,
    select: 'Izaberite',
    selectedAll: 'Izabrane su sve stavke.',
    selectedCount: (e, n) =>
        `${n.plural(e.count, {
            '=0': 'Nije izabrana nijedna stavka',
            one: () => `Izabrana je ${n.number(e.count)} stavka`,
            other: () => `Izabrano je ${n.number(e.count)} stavki`
        })}.`,
    selectedItem: (e) => `${e.item} je izabrano.`
};
