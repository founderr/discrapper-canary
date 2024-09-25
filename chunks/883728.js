var r = n(735250);
n(470079);
var i = n(374470),
    a = n(239091);
let o = (e) => {
    let { facepileRef: t, goToThread: o, channel: s } = e;
    return {
        handleLeftClick: (e) => {
            var n;
            !((0, i.k)(e.target) && (null === (n = t.current) || void 0 === n ? void 0 : n.contains(e.target))) && o(s, e.shiftKey);
        },
        handleRightClick: (e) =>
            (0, a.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('39285'), n.e('40157')]).then(n.bind(n, 422200));
                return (t) =>
                    (0, r.jsx)(e, {
                        ...t,
                        channel: s
                    });
            })
    };
};
t.Z = o;
