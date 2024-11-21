n.d(t, {
    l: function () {
        return i;
    }
});
var r = n(346110);
function i(e, t) {
    (0, r.b)(() => {
        if (e && e.ref && t)
            return (
                (e.ref.current = t.current),
                () => {
                    e.ref && (e.ref.current = null);
                }
            );
    });
}
