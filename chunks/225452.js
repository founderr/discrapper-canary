n.d(t, {
    D: function () {
        return i;
    }
});
function i(e) {
    return e.map((e, t) => {
        var n, i;
        return {
            file: e.file,
            name: null !== (i = e.id) && void 0 !== i ? i : 'attachment_'.concat(t),
            filename: null === (n = e.file) || void 0 === n ? void 0 : n.name
        };
    });
}
