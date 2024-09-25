var r = n(47120);
var i = n(735250);
n(470079);
var a = n(481060),
    o = n(259580),
    s = n(78648);
let l = (e) => {
        let { child: t, onClick: n } = e,
            [r] = t;
        return (0, i.jsxs)(a.Clickable, {
            className: s.childButton,
            onClick: () => n(t),
            children: [
                (0, i.jsx)(a.Text, {
                    className: s.childText,
                    variant: 'text-md/semibold',
                    children: r
                }),
                (0, i.jsx)(o.Z, {
                    className: s.childIcon,
                    direction: o.Z.Directions.RIGHT
                })
            ]
        });
    },
    u = (e) => {
        let {
            node: { children: t },
            onSelectChild: n
        } = e;
        if (null == t || 0 === t.length) return null;
        let r = t.map((e) => {
            let [t, r] = e;
            return (0, i.jsx)(
                l,
                {
                    child: e,
                    onClick: n
                },
                ''.concat(t, '+').concat(r)
            );
        });
        return (0, i.jsx)('div', {
            className: s.__invalid_childrenContainer,
            children: r
        });
    };
t.Z = u;
