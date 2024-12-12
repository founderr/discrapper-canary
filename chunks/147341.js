r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: `Prika\u{17E}i predloge`,
    countAnnouncement: (e, n) =>
        `Dostupno jo\u{161}: ${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} opcija`,
            other: () => `${n.number(e.optionCount)} opcije/a`
        })}.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Unesena grupa ${e.groupTitle}, s ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} opcijom`,
                        other: () => `${n.number(e.groupCount)} optione/a`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: ', izabranih',
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: 'Predlozi',
    selectedAnnouncement: (e) => `${e.optionText}, izabrano`
};
