r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Entered group ${e.groupTitle}, with ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} option`,
                        other: () => `${n.number(e.groupCount)} options`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: ', selected',
                other: ''
            },
            e.isSelected
        )}`,
    countAnnouncement: (e, n) =>
        `${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} option`,
            other: () => `${n.number(e.optionCount)} options`
        })} available.`,
    selectedAnnouncement: (e) => `${e.optionText}, selected`,
    buttonLabel: 'Show suggestions',
    listboxLabel: 'Suggestions'
};
