r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    deselectedItem: (e) => `${e.item} non s\xe9lectionn\xe9.`,
    longPressToSelect: `Appuyez de mani\xe8re prolong\xe9e pour passer en mode de s\xe9lection.`,
    select: `S\xe9lectionner`,
    selectedAll: `Tous les \xe9l\xe9ments s\xe9lectionn\xe9s.`,
    selectedCount: (e, n) =>
        `${n.plural(e.count, {
            '=0': `Aucun \xe9l\xe9ment s\xe9lectionn\xe9`,
            one: () => `${n.number(e.count)} \xe9l\xe9ment s\xe9lectionn\xe9`,
            other: () => `${n.number(e.count)} \xe9l\xe9ments s\xe9lectionn\xe9s`
        })}.`,
    selectedItem: (e) => `${e.item} s\xe9lectionn\xe9.`
};
