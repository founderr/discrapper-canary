r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: `Zobrazit doporu\u{10D}en\xed`,
    countAnnouncement: (e, n) =>
        `K dispozici ${n.plural(e.optionCount, {
            one: () => `je ${n.number(e.optionCount)} mo\u{17E}nost`,
            other: () => `jsou/je ${n.number(e.optionCount)} mo\u{17E}nosti/-\xed`
        })}.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Zadan\xe1 skupina \u{201E}${e.groupTitle}\u{201C} ${n.plural(e.groupCount, {
                        one: () => `s ${n.number(e.groupCount)} mo\u{17E}nost\xed`,
                        other: () => `se ${n.number(e.groupCount)} mo\u{17E}nostmi`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: ` (vybr\xe1no)`,
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: `N\xe1vrhy`,
    selectedAnnouncement: (e) => `${e.optionText}, vybr\xe1no`
};
