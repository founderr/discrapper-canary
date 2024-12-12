r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: 'Kuva soovitused',
    countAnnouncement: (e, n) =>
        `${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} valik`,
            other: () => `${n.number(e.optionCount)} valikud`
        })} saadaval.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Sisestatud r\xfchm ${e.groupTitle}, valikuga ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} valik`,
                        other: () => `${n.number(e.groupCount)} valikud`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: ', valitud',
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: 'Soovitused',
    selectedAnnouncement: (e) => `${e.optionText}, valitud`
};
