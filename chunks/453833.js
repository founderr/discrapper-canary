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
            one: () => `${n.number(e.optionCount)} mulighed tilg\xe6ngelig`,
            other: () => `${n.number(e.optionCount)} muligheder tilg\xe6ngelige`
        })}.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Angivet gruppe ${e.groupTitle}, med ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} mulighed`,
                        other: () => `${n.number(e.groupCount)} muligheder`
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
