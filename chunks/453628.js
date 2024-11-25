n.d(t, {
    y: function () {
        return l;
    }
});
var i,
    l,
    r = n(200651);
n(192379);
var a = n(120356),
    o = n.n(a),
    s = n(481060),
    c = n(388032),
    d = n(222569);
((i = l || (l = {})).DENY = 'DENY'), (i.PASSTHROUGH = 'PASSTHROUGH'), (i.ALLOW = 'ALLOW');
let u = Object.keys(l);
function m(e) {
    let { value: t = 'PASSTHROUGH', onChange: n, labelledBy: i, disabled: l = !1 } = e,
        a = (0, s.useRadioGroup)({
            orientation: 'horizontal',
            isDisabled: l,
            labelledBy: i
        });
    return (0, r.jsx)('div', {
        className: o()(d.group, { [d.disabled]: l }),
        ...a,
        children: u.map((e) =>
            (0, r.jsx)(
                h,
                {
                    type: e,
                    isSelected: t === e,
                    onSelect: (e) => {
                        t !== e && !l && n(e);
                    }
                },
                e
            )
        )
    });
}
function h(e) {
    let t,
        n,
        i,
        { type: l, onSelect: a, isSelected: u } = e;
    switch (l) {
        case 'DENY':
            (i = c.intl.string(c.t['6639Oz'])), (t = s.XSmallIcon), (n = d.deny);
            break;
        case 'ALLOW':
            (i = c.intl.string(c.t.RzDfSk)), (t = s.CheckmarkLargeIcon), (n = d.allow);
            break;
        default:
            (i = c.intl.string(c.t.ujC3ZW)), (t = s.SlashIcon), (n = d.passthrough);
    }
    let m = (0, s.useRadioItem)({
        isSelected: u,
        label: i
    });
    return (0, r.jsx)(s.Clickable, {
        className: o()(d.item, n, { [d.selected]: u }),
        onClick: () => a(l),
        ...m,
        children: (0, r.jsx)(t, {
            color: 'currentColor',
            size: 'xs'
        })
    });
}
(m.Types = l), (t.Z = m);
