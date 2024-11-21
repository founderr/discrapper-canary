function r(e) {
    if (!e) return;
    let t = !0;
    return (n) => {
        e({
            ...n,
            preventDefault() {
                n.preventDefault();
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
                console.error('stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.');
            },
            continuePropagation() {
                t = !1;
            }
        }),
            t && n.stopPropagation();
    };
}
n.d(t, {
    x: function () {
        return r;
    }
});
