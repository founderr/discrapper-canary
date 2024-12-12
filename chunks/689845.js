r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: `Visa f\xf6rslag`,
    countAnnouncement: (e, n) =>
        `${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} alternativ`,
            other: () => `${n.number(e.optionCount)} alternativ`
        })} tillg\xe4ngliga.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Ingick i gruppen ${e.groupTitle} med ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} alternativ`,
                        other: () => `${n.number(e.groupCount)} alternativ`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: ', valda',
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: `F\xf6rslag`,
    selectedAnnouncement: (e) => `${e.optionText}, valda`
};
