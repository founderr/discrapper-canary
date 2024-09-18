t.d(n, {
    T: function () {
        return s;
    }
});
var a = t(470079),
    c = t(127255);
function s(e, n) {
    let t = (0, c.Z)({ guildId: e });
    return a.useMemo(() => {
        var e;
        return null !== (e = t.find((e) => e.application.id === n)) && void 0 !== e ? e : null;
    }, [t, n]);
}
