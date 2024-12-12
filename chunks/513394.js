r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: `\u{639}\u{631}\u{636} \u{627}\u{644}\u{645}\u{642}\u{62A}\u{631}\u{62D}\u{627}\u{62A}`,
    countAnnouncement: (e, n) =>
        `${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}`,
            other: () => `${n.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`
        })} \u{645}\u{62A}\u{627}\u{62D}\u{629}.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `\u{627}\u{644}\u{645}\u{62C}\u{645}\u{648}\u{639}\u{629} \u{627}\u{644}\u{645}\u{62F}\u{62E}\u{644}\u{629} ${e.groupTitle}, \u{645}\u{639} ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}`,
                        other: () => `${n.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: `, \u{645}\u{62D}\u{62F}\u{62F}`,
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: `\u{645}\u{642}\u{62A}\u{631}\u{62D}\u{627}\u{62A}`,
    selectedAnnouncement: (e) => `${e.optionText}\u{60C} \u{645}\u{62D}\u{62F}\u{62F}`
};
