r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: 'Vis forslag',
    countAnnouncement: (e, n) =>
        `${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} alternativ`,
            other: () => `${n.number(e.optionCount)} alternativer`
        })} finnes.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Angitt gruppe ${e.groupTitle}, med ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} alternativ`,
                        other: () => `${n.number(e.groupCount)} alternativer`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: ', valgt',
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: 'Forslag',
    selectedAnnouncement: (e) => `${e.optionText}, valgt`
};
