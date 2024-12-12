r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: 'Afficher les suggestions',
    countAnnouncement: (e, n) =>
        `${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} option`,
            other: () => `${n.number(e.optionCount)} options`
        })} disponible(s).`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Groupe ${e.groupTitle} saisi, avec ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} option`,
                        other: () => `${n.number(e.groupCount)} options`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: `, s\xe9lectionn\xe9(s)`,
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: 'Suggestions',
    selectedAnnouncement: (e) => `${e.optionText}, s\xe9lectionn\xe9`
};
