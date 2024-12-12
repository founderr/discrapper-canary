r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: `Prika\u{17E}i predloge`,
    countAnnouncement: (e, n) =>
        `Na voljo je ${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} opcija`,
            other: () => `${n.number(e.optionCount)} opcije`
        })}.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Vnesena skupina ${e.groupTitle}, z ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} opcija`,
                        other: () => `${n.number(e.groupCount)} opcije`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: ', izbrano',
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: 'Predlogi',
    selectedAnnouncement: (e) => `${e.optionText}, izbrano`
};
