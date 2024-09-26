n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(470079),
    o = n(768943),
    s = n(818260);
function l() {
    return o.Z.getSavedMessages().map((e) => e.saveData);
}
function u() {
    let [e, t] = a.useState(l);
    return (
        a.useEffect(() => {
            let e = o.Z.getLastChanged();
            function n() {
                let n = o.Z.getLastChanged();
                e !== n &&
                    ((e = n),
                    t((e) => {
                        let t = [...e],
                            n = new Map(o.Z.getSavedMessages().map((e) => [e.saveData.messageId, e]));
                        for (let r of e) n.has(r.messageId) ? n.delete(r.messageId) : t.splice(t.indexOf(r), 1);
                        for (let e of n.values()) t.push(e.saveData);
                        return t;
                    }));
            }
            return (
                o.Z.addChangeListener(n),
                () => {
                    o.Z.removeChangeListener(n);
                }
            );
        }, []),
        (0, s.Z)(),
        e
    );
}
