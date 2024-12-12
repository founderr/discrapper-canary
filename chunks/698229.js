r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    deselectedItem: (e) => `${e.item} nicht ausgew\xe4hlt.`,
    longPressToSelect: `Gedr\xfcckt halten, um Auswahlmodus zu \xf6ffnen.`,
    select: `Ausw\xe4hlen`,
    selectedAll: `Alle Elemente ausgew\xe4hlt.`,
    selectedCount: (e, n) =>
        `${n.plural(e.count, {
            '=0': `Keine Elemente ausgew\xe4hlt`,
            one: () => `${n.number(e.count)} Element ausgew\xe4hlt`,
            other: () => `${n.number(e.count)} Elemente ausgew\xe4hlt`
        })}.`,
    selectedItem: (e) => `${e.item} ausgew\xe4hlt.`
};
