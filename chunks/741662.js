n.d(t, {
    P: function () {
        return o;
    }
});
var r = n(346110),
    i = n(192379);
let a = 0,
    s = new Map();
function o(e) {
    let [t, n] = (0, i.useState)();
    return (
        (0, r.b)(() => {
            if (!e) return;
            let t = s.get(e);
            if (t) n(t.element.id);
            else {
                let r = `react-aria-description-${a++}`;
                n(r);
                let i = document.createElement('div');
                (i.id = r),
                    (i.style.display = 'none'),
                    (i.textContent = e),
                    document.body.appendChild(i),
                    (t = {
                        refCount: 0,
                        element: i
                    }),
                    s.set(e, t);
            }
            return (
                t.refCount++,
                () => {
                    t && 0 == --t.refCount && (t.element.remove(), s.delete(e));
                }
            );
        }, [e]),
        { 'aria-describedby': e ? t : void 0 }
    );
}
