n.d(t, {
    n: function () {
        return p;
    }
});
var r = n(411104);
var i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(910111),
    u = n(732559),
    c = n(723851),
    d = n(981631),
    _ = n(689938),
    E = n(500792);
let f = {
    [d.TaA.WINDOWS]: {
        icon: c.Z,
        getLabel: () => _.Z.Messages.WINDOWS
    },
    [d.TaA.MACOS]: {
        icon: u.Z,
        getLabel: () => _.Z.Messages.MACOS
    },
    [d.TaA.LINUX]: {
        icon: l.Z,
        getLabel: () => _.Z.Messages.LINUX
    }
};
function h(e) {
    let { operatingSystem: t, className: n } = e,
        r = f[t];
    if (null == r) throw Error('Unexpected operating system: '.concat(t));
    let a = r.icon;
    return (0, i.jsx)(s.Tooltip, {
        text: r.getLabel(),
        children: (e) =>
            (0, i.jsx)(a, {
                ...e,
                className: n
            })
    });
}
let p = (e) => {
    let { systems: t, className: n, iconClassName: r } = e;
    return (0, i.jsx)('div', {
        className: o()(E.OSSection, n),
        children: t.map((e) =>
            (0, i.jsx)(
                h,
                {
                    operatingSystem: e,
                    className: o()(E.purchaseUnitOperatingSystem, r)
                },
                e
            )
        )
    });
};
