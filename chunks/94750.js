r.d(n, {
    Z: function () {
        return i;
    }
});
var i = {};
i = {
    deselectedItem: (e) => `${e.item} n\xe3o selecionado.`,
    longPressToSelect: `Prima continuamente para entrar no modo de sele\xe7\xe3o.`,
    select: 'Selecionar',
    selectedAll: 'Todos os itens selecionados.',
    selectedCount: (e, n) =>
        `${n.plural(e.count, {
            '=0': 'Nenhum item selecionado',
            one: () => `${n.number(e.count)} item selecionado`,
            other: () => `${n.number(e.count)} itens selecionados`
        })}.`,
    selectedItem: (e) => `${e.item} selecionado.`
};
