r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: `Javaslatok megjelen\xedt\xe9se`,
    countAnnouncement: (e, n) =>
        `${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} lehet\u{151}s\xe9g`,
            other: () => `${n.number(e.optionCount)} lehet\u{151}s\xe9g`
        })} \xe1ll rendelkez\xe9sre.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Bel\xe9pett a(z) ${e.groupTitle} csoportba, amely ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} lehet\u{151}s\xe9get`,
                        other: () => `${n.number(e.groupCount)} lehet\u{151}s\xe9get`
                    })} tartalmaz. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: `, kijel\xf6lve`,
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: 'Javaslatok',
    selectedAnnouncement: (e) => `${e.optionText}, kijel\xf6lve`
};
