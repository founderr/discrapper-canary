r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: `R\u{101}d\u{12B}t ieteikumus`,
    countAnnouncement: (e, n) =>
        `Pieejamo opciju skaits: ${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} opcija`,
            other: () => `${n.number(e.optionCount)} opcijas`
        })}.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Ievad\u{12B}ta grupa ${e.groupTitle}, ar ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} opciju`,
                        other: () => `${n.number(e.groupCount)} opcij\u{101}m`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: `, atlas\u{12B}ta`,
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: 'Ieteikumi',
    selectedAnnouncement: (e) => `${e.optionText}, atlas\u{12B}ta`
};
