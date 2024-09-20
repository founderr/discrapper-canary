t.d(n, {
    y: function () {
        return a;
    }
});
var i,
    a,
    s = t(735250);
t(470079);
var l = t(120356),
    r = t.n(l),
    o = t(481060),
    c = t(689938),
    d = t(228020);
((i = a || (a = {})).DENY = 'DENY'), (i.PASSTHROUGH = 'PASSTHROUGH'), (i.ALLOW = 'ALLOW');
let u = Object.keys(a);
function I(e) {
    let { value: n = 'PASSTHROUGH', onChange: t, labelledBy: i, disabled: a = !1 } = e,
        l = (0, o.useRadioGroup)({
            orientation: 'horizontal',
            isDisabled: a,
            labelledBy: i
        });
    return (0, s.jsx)('div', {
        className: r()(d.group, { [d.disabled]: a }),
        ...l,
        children: u.map((e) =>
            (0, s.jsx)(
                m,
                {
                    type: e,
                    isSelected: n === e,
                    onSelect: (e) => {
                        n !== e && !a && t(e);
                    }
                },
                e
            )
        )
    });
}
function m(e) {
    let n,
        t,
        i,
        { type: a, onSelect: l, isSelected: u } = e;
    switch (a) {
        case 'DENY':
            (i = c.Z.Messages.PERMISSION_OVERRIDE_DENY), (n = o.XSmallIcon), (t = d.deny);
            break;
        case 'ALLOW':
            (i = c.Z.Messages.PERMISSION_OVERRIDE_ALLOW), (n = o.CheckmarkLargeIcon), (t = d.allow);
            break;
        default:
            (i = c.Z.Messages.PERMISSION_OVERRIDE_PASSTHROUGH), (n = o.SlashIcon), (t = d.passthrough);
    }
    let I = (0, o.useRadioItem)({
        isSelected: u,
        label: i
    });
    return (0, s.jsx)(o.Clickable, {
        className: r()(d.item, t, { [d.selected]: u }),
        onClick: () => l(a),
        ...I,
        children: (0, s.jsx)(n, {
            color: 'currentColor',
            size: 'xs'
        })
    });
}
(I.Types = a), (n.Z = I);
