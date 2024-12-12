r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: `\u{C81C}\u{C548} \u{C0AC}\u{D56D} \u{D45C}\u{C2DC}`,
    countAnnouncement: (e, n) =>
        `${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`,
            other: () => `${n.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`
        })}\u{C744} \u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C788}\u{C2B5}\u{B2C8}\u{B2E4}.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `\u{C785}\u{B825}\u{D55C} \u{ADF8}\u{B8F9} ${e.groupTitle}, ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`,
                        other: () => `${n.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: `, \u{C120}\u{D0DD}\u{B428}`,
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: `\u{C81C}\u{C548}`,
    selectedAnnouncement: (e) => `${e.optionText}, \u{C120}\u{D0DD}\u{B428}`
};
