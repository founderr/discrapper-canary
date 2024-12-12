r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    deselectedItem: (e) => `Stavka ${e.item} nije odabrana.`,
    longPressToSelect: `Dugo pritisnite za ulazak u na\u{10D}in odabira.`,
    select: 'Odaberite',
    selectedAll: 'Odabrane su sve stavke.',
    selectedCount: (e, n) =>
        `${n.plural(e.count, {
            '=0': 'Nije odabrana nijedna stavka',
            one: () => `Odabrana je ${n.number(e.count)} stavka`,
            other: () => `Odabrano je ${n.number(e.count)} stavki`
        })}.`,
    selectedItem: (e) => `Stavka ${e.item} je odabrana.`
};
