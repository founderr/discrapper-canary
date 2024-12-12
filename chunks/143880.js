r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: `Zobrazi\u{165} n\xe1vrhy`,
    countAnnouncement: (e, n) =>
        `${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} mo\u{17E}nos\u{165}`,
            other: () => `${n.number(e.optionCount)} mo\u{17E}nosti/-\xed`
        })} k dispoz\xedcii.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Zadan\xe1 skupina ${e.groupTitle}, s ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} mo\u{17E}nos\u{165}ou`,
                        other: () => `${n.number(e.groupCount)} mo\u{17E}nos\u{165}ami`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: `, vybrat\xe9`,
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: `N\xe1vrhy`,
    selectedAnnouncement: (e) => `${e.optionText}, vybrat\xe9`
};
