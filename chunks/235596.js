r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    deselectedItem: (e) => `${e.item} no seleccionado.`,
    longPressToSelect: `Mantenga pulsado para abrir el modo de selecci\xf3n.`,
    select: 'Seleccionar',
    selectedAll: 'Todos los elementos seleccionados.',
    selectedCount: (e, n) =>
        `${n.plural(e.count, {
            '=0': `Ning\xfan elemento seleccionado`,
            one: () => `${n.number(e.count)} elemento seleccionado`,
            other: () => `${n.number(e.count)} elementos seleccionados`
        })}.`,
    selectedItem: (e) => `${e.item} seleccionado.`
};
