var i = n(200651);
n(192379);
var o = n(374470),
    s = n(239091);
t.Z = (e) => {
    let { facepileRef: t, goToThread: a, channel: l } = e;
    return {
        handleLeftClick: (e) => {
            var n;
            !((0, o.k)(e.target) && (null === (n = t.current) || void 0 === n ? void 0 : n.contains(e.target))) && a(l, e.shiftKey);
        },
        handleRightClick: (e) =>
            (0, s.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('38902'), n.e('77564'), n.e('92304')]).then(n.bind(n, 422200));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        channel: l
                    });
            })
    };
};
