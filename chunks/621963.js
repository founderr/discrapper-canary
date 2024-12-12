r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: `\u{41F}\u{43E}\u{43A}\u{430}\u{436}\u{438} \u{43F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
    countAnnouncement: (e, n) =>
        `${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,
            other: () => `${n.number(e.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`
        })} \u{43D}\u{430} \u{440}\u{430}\u{437}\u{43F}\u{43E}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{435}.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `\u{412}\u{44A}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${e.groupTitle}, \u{441} ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,
                        other: () => `${n.number(e.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: `, \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`,
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: `\u{41F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
    selectedAnnouncement: (e) => `${e.optionText}, \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`
};
