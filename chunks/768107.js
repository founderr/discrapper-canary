r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: `\u{5D4}\u{5E6}\u{5D2} \u{5D4}\u{5E6}\u{5E2}\u{5D5}\u{5EA}`,
    countAnnouncement: (e, n) =>
        `${n.plural(e.optionCount, {
            one: () => `\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${n.number(e.optionCount)}`,
            other: () => `${n.number(e.optionCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`
        })} \u{5D1}\u{5DE}\u{5E6}\u{5D1} \u{5D6}\u{5DE}\u{5D9}\u{5DF}.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `\u{5E0}\u{5DB}\u{5E0}\u{5E1} \u{5DC}\u{5E7}\u{5D1}\u{5D5}\u{5E6}\u{5D4} ${e.groupTitle}, \u{5E2}\u{5DD} ${n.plural(e.groupCount, {
                        one: () => `\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${n.number(e.groupCount)}`,
                        other: () => `${n.number(e.groupCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: `, \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: `\u{5D4}\u{5E6}\u{5E2}\u{5D5}\u{5EA}`,
    selectedAnnouncement: (e) => `${e.optionText}, \u{5E0}\u{5D1}\u{5D7}\u{5E8}`
};
