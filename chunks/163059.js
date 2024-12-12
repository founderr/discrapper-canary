r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    buttonLabel: 'Mostrar sugerencias',
    countAnnouncement: (e, n) =>
        `${n.plural(e.optionCount, {
            one: () => `${n.number(e.optionCount)} opci\xf3n`,
            other: () => `${n.number(e.optionCount)} opciones`
        })} disponible(s).`,
    focusAnnouncement: (e, n) =>
        `${n.select(
            {
                true: () =>
                    `Se ha unido al grupo ${e.groupTitle}, con ${n.plural(e.groupCount, {
                        one: () => `${n.number(e.groupCount)} opci\xf3n`,
                        other: () => `${n.number(e.groupCount)} opciones`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${n.select(
            {
                true: ', seleccionado',
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: 'Sugerencias',
    selectedAnnouncement: (e) => `${e.optionText}, seleccionado`
};
