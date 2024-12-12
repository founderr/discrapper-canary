r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    deselectedItem: (e) => `${e.item} nincs kijel\xf6lve.`,
    longPressToSelect: `Nyomja hosszan a kijel\xf6l\xe9shez.`,
    select: `Kijel\xf6l\xe9s`,
    selectedAll: `Az \xf6sszes elem kijel\xf6lve.`,
    selectedCount: (e, n) =>
        `${n.plural(e.count, {
            '=0': `Egy elem sincs kijel\xf6lve`,
            one: () => `${n.number(e.count)} elem kijel\xf6lve`,
            other: () => `${n.number(e.count)} elem kijel\xf6lve`
        })}.`,
    selectedItem: (e) => `${e.item} kijel\xf6lve.`
};
