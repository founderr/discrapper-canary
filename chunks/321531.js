r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: `\u{5019}\u{88DC}\u{3092}\u{8868}\u{793A}`,
    countAnnouncement: (e, n) =>
        `${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,
            other: () => `${n.number(e.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`
        })}\u{3092}\u{5229}\u{7528}\u{3067}\u{304D}\u{307E}\u{3059}\u{3002}`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `\u{5165}\u{529B}\u{3055}\u{308C}\u{305F}\u{30B0}\u{30EB}\u{30FC}\u{30D7} ${e.groupTitle}\u{3001}${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,
                        other: () => `${n.number(e.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`
                    })}\u{3092}\u{542B}\u{3080}\u{3002}`,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: `\u{3001}\u{9078}\u{629E}\u{6E08}\u{307F}`,
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: `\u{5019}\u{88DC}`,
    selectedAnnouncement: (e) => `${e.optionText}\u{3001}\u{9078}\u{629E}\u{6E08}\u{307F}`
};
