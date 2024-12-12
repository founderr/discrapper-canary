r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: `\xd6nerileri g\xf6ster`,
    countAnnouncement: (e, n) =>
        `${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} se\xe7enek`,
            other: () => `${n.number(e.optionCount)} se\xe7enekler`
        })} kullan\u{131}labilir.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Girilen grup ${e.groupTitle}, ile ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} se\xe7enek`,
                        other: () => `${n.number(e.groupCount)} se\xe7enekler`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: `, se\xe7ildi`,
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: `\xd6neriler`,
    selectedAnnouncement: (e) => `${e.optionText}, se\xe7ildi`
};
