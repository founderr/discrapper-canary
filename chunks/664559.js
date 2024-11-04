n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120),
    n(653041);
var i = n(192379),
    r = n(768943),
    l = n(429828);
function a() {
    return r.Z.getSavedMessages().map((e) => e.saveData);
}
function o() {
    let [e, t] = i.useState(a),
        n = i.useRef(r.Z.getIsStale());
    return (
        i.useEffect(() => {
            let e = r.Z.getLastChanged();
            function i() {
                let i = r.Z.getLastChanged();
                if (e !== i) {
                    if (((e = i), n.current && !r.Z.getIsStale())) {
                        (n.current = !1), t(a());
                        return;
                    }
                    t((e) => {
                        let t = [...e],
                            n = new Map(r.Z.getSavedMessages().map((e) => [e.saveData.messageId, e]));
                        for (let i of e) n.has(i.messageId) ? n.delete(i.messageId) : t.splice(t.indexOf(i), 1);
                        for (let e of n.values()) t.push(e.saveData);
                        return t;
                    });
                }
            }
            return (
                r.Z.addChangeListener(i),
                () => {
                    r.Z.removeChangeListener(i);
                }
            );
        }, []),
        (0, l.Z)(),
        e
    );
}
