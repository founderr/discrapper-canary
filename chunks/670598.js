r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: `Wy\u{15B}wietlaj sugestie`,
    countAnnouncement: (e, n) =>
        `dost\u{119}pna/dost\u{119}pne(-nych) ${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} opcja`,
            other: () => `${n.number(e.optionCount)} opcje(-i)`
        })}.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Do\u{142}\u{105}czono do grupy ${e.groupTitle}, z ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} opcj\u{105}`,
                        other: () => `${n.number(e.groupCount)} opcjami`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: ', wybrano',
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: 'Sugestie',
    selectedAnnouncement: (e) => `${e.optionText}, wybrano`
};
