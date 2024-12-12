r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    deselectedItem: (e) => `${e.item} nepasirinkta.`,
    longPressToSelect: `Nor\u{117}dami \u{12F}jungti pasirinkimo re\u{17E}im\u{105}, paspauskite ir palaikykite.`,
    select: 'Pasirinkti',
    selectedAll: 'Pasirinkti visi elementai.',
    selectedCount: (e, n) =>
        `${n.plural(e.count, {
            '=0': `Nepasirinktas n\u{117} vienas elementas`,
            one: () => `Pasirinktas ${n.number(e.count)} elementas`,
            other: () => `Pasirinkta element\u{173}: ${n.number(e.count)}`
        })}.`,
    selectedItem: (e) => `Pasirinkta: ${e.item}.`
};
