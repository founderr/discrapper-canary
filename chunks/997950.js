t.d(s, {
    T: function () {
        return a;
    },
    x: function () {
        return r;
    }
});
var n = t(652874);
let a = '0',
    i = { selectedGuildId: a },
    r = (0, n.Z)((e) => ({
        ...i,
        setSelectedGuildId: (s) => {
            e({ selectedGuildId: s });
        },
        reset: () => {
            e(i);
        }
    }));
