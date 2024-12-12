r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: `N\xe4yt\xe4 ehdotukset`,
    countAnnouncement: (e, n) =>
        `${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} vaihtoehto`,
            other: () => `${n.number(e.optionCount)} vaihtoehdot`
        })} saatavilla.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Mentiin ryhm\xe4\xe4n ${e.groupTitle}, ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} vaihtoehdon`,
                        other: () => `${n.number(e.groupCount)} vaihtoehdon`
                    })} kanssa.`,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: ', valittu',
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: 'Ehdotukset',
    selectedAnnouncement: (e) => `${e.optionText}, valittu`
};
