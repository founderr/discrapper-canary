r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: `Afi\u{219}are sugestii`,
    countAnnouncement: (e, n) =>
        `${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} op\u{21B}iune`,
            other: () => `${n.number(e.optionCount)} op\u{21B}iuni`
        })} disponibile.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Grup ${e.groupTitle} introdus, cu ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} op\u{21B}iune`,
                        other: () => `${n.number(e.groupCount)} op\u{21B}iuni`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: ', selectat',
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: 'Sugestii',
    selectedAnnouncement: (e) => `${e.optionText}, selectat`
};
