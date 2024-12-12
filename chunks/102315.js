r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: `Mostrar sugest\xf5es`,
    countAnnouncement: (e, n) =>
        `${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} op\xe7\xe3o`,
            other: () => `${n.number(e.optionCount)} op\xe7\xf5es`
        })} dispon\xedvel.`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Grupo inserido ${e.groupTitle}, com ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} op\xe7\xe3o`,
                        other: () => `${n.number(e.groupCount)} op\xe7\xf5es`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: ', selecionado',
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: `Sugest\xf5es`,
    selectedAnnouncement: (e) => `${e.optionText}, selecionado`
};
