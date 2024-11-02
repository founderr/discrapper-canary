t.d(n, {
    y: function () {
        return l;
    }
});
var i,
    l,
    r = t(200651);
t(192379);
var a = t(120356),
    o = t.n(a),
    s = t(481060),
    d = t(388032),
    c = t(228020);
((i = l || (l = {})).DENY = 'DENY'), (i.PASSTHROUGH = 'PASSTHROUGH'), (i.ALLOW = 'ALLOW');
let u = Object.keys(l);
function m(e) {
    let { value: n = 'PASSTHROUGH', onChange: t, labelledBy: i, disabled: l = !1 } = e,
        a = (0, s.useRadioGroup)({
            orientation: 'horizontal',
            isDisabled: l,
            labelledBy: i
        });
    return (0, r.jsx)('div', {
        className: o()(c.group, { [c.disabled]: l }),
        ...a,
        children: u.map((e) =>
            (0, r.jsx)(
                h,
                {
                    type: e,
                    isSelected: n === e,
                    onSelect: (e) => {
                        n !== e && !l && t(e);
                    }
                },
                e
            )
        )
    });
}
function h(e) {
    let n,
        t,
        i,
        { type: l, onSelect: a, isSelected: u } = e;
    switch (l) {
        case 'DENY':
            (i = d.intl.string(d.t['6639Oz'])), (n = s.XSmallIcon), (t = c.deny);
            break;
        case 'ALLOW':
            (i = d.intl.string(d.t.RzDfSk)), (n = s.CheckmarkLargeIcon), (t = c.allow);
            break;
        default:
            (i = d.intl.string(d.t.ujC3ZW)), (n = s.SlashIcon), (t = c.passthrough);
    }
    let m = (0, s.useRadioItem)({
        isSelected: u,
        label: i
    });
    return (0, r.jsx)(s.Clickable, {
        className: o()(c.item, t, { [c.selected]: u }),
        onClick: () => a(l),
        ...m,
        children: (0, r.jsx)(n, {
            color: 'currentColor',
            size: 'xs'
        })
    });
}
(m.Types = l), (n.Z = m);
