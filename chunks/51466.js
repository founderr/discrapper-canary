function i(e, n) {
    let { style: r } = e;
    n.backgroundColor && (r.backgroundColor = n.backgroundColor), n.width && (r.width = `${n.width}px`), n.height && (r.height = `${n.height}px`);
    let i = n.style;
    return (
        null != i &&
            Object.keys(i).forEach((e) => {
                r[e] = i[e];
            }),
        e
    );
}
r.d(n, {
    b: function () {
        return i;
    }
});
