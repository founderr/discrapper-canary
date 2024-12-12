r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    deselectedItem: (e) => `${e.item} not selected.`,
    select: 'Select',
    selectedCount: (e, n) =>
        `${n.plural(e.count, {
            '=0': 'No items selected',
            one: () => `${n.number(e.count)} item selected`,
            other: () => `${n.number(e.count)} items selected`
        })}.`,
    selectedAll: 'All items selected.',
    selectedItem: (e) => `${e.item} selected.`,
    longPressToSelect: 'Long press to enter selection mode.'
};
