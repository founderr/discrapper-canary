r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: 'Mostra suggerimenti',
    countAnnouncement: (e, n) =>
        `${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} opzione disponibile`,
            other: () => `${n.number(e.optionCount)} opzioni disponibili`
        })}.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Ingresso nel gruppo ${e.groupTitle}, con ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} opzione`,
                        other: () => `${n.number(e.groupCount)} opzioni`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: ', selezionato',
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: 'Suggerimenti',
    selectedAnnouncement: (e) => `${e.optionText}, selezionato`
};
