r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: 'Empfehlungen anzeigen',
    countAnnouncement: (e, n) =>
        `${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} Option`,
            other: () => `${n.number(e.optionCount)} Optionen`
        })} verf\xfcgbar.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Eingetretene Gruppe ${e.groupTitle}, mit ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} Option`,
                        other: () => `${n.number(e.groupCount)} Optionen`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: `, ausgew\xe4hlt`,
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: 'Empfehlungen',
    selectedAnnouncement: (e) => `${e.optionText}, ausgew\xe4hlt`
};
