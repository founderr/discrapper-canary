r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: `Rodyti pasi\u{16B}lymus`,
    countAnnouncement: (e, n) =>
        `Yra ${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} parinktis`,
            other: () => `${n.number(e.optionCount)} parinktys (-i\u{173})`
        })}.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `\u{12E}vesta grup\u{117} ${e.groupTitle}, su ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} parinktimi`,
                        other: () => `${n.number(e.groupCount)} parinktimis (-i\u{173})`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: ', pasirinkta',
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: `Pasi\u{16B}lymai`,
    selectedAnnouncement: (e) => `${e.optionText}, pasirinkta`
};
