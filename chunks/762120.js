r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: 'Suggesties weergeven',
    countAnnouncement: (e, n) =>
        `${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} optie`,
            other: () => `${n.number(e.optionCount)} opties`
        })} beschikbaar.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Groep ${e.groupTitle} ingevoerd met ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} optie`,
                        other: () => `${n.number(e.groupCount)} opties`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: ', geselecteerd',
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: 'Suggesties',
    selectedAnnouncement: (e) => `${e.optionText}, geselecteerd`
};
