n.d(t, {
    Z: function () {
        return v;
    }
});
var r = n(200651);
n(192379);
var a = n(120356),
    l = n.n(a),
    i = n(772848),
    o = n(442837),
    c = n(481060),
    s = n(765250),
    d = n(13245),
    u = n(610394),
    h = n(355863),
    m = n(981631),
    x = n(501787),
    f = n(27731),
    p = n(941469);
let b = (e) => ({
        type: m.Odu.CLICK_ZONE_DEBUG,
        id: (0, i.Z)(),
        layoutId: e,
        anchor: {
            top: 0.35,
            right: 0.35
        },
        size: {
            width: 100,
            height: 100
        },
        ...h.Z.getWidgetDefaultSettings(m.Odu.CLICK_ZONE_DEBUG),
        pinned: !0
    }),
    g = (e, t) => e.find((e) => e.type === t);
function v() {
    let e = (0, o.Wu)([h.Z], () => h.Z.getWidgetsForLayout(x.OVERLAY_V3_LAYOUT_ID)),
        t = (0, o.e7)([u.Z], () => u.Z.clickZoneDebugMode),
        n = (0, o.e7)([u.Z], () => u.Z.renderDebugMode),
        a = () => {
            d.Z.setClickZoneDebugMode(!u.Z.clickZoneDebugMode);
        },
        i = () => {
            d.Z.setRenderDebugMode(!u.Z.renderDebugMode);
        },
        v = g(Object.values(e), m.Odu.CLICK_ZONE_DEBUG),
        C = () => {
            if (null != v) (0, s.E9)(v.id);
            else {
                let e = b(x.OVERLAY_V3_LAYOUT_ID);
                (0, s.A4)(e);
            }
        };
    return (0, r.jsxs)('div', {
        className: l()(p.panel, f.panel),
        children: [
            (0, r.jsx)(c.Tooltip, {
                position: 'left',
                text: 'Enables a red border around click zones to help with debugging.',
                children: (e) =>
                    (0, r.jsx)('div', {
                        ...e,
                        children: (0, r.jsx)(c.Checkbox, {
                            value: t,
                            onChange: () => a(),
                            size: 18,
                            type: c.Checkbox.Types.INVERTED,
                            shape: c.Checkbox.Shapes.BOX,
                            children: (0, r.jsx)(c.Text, {
                                tag: 'span',
                                variant: 'text-md/normal',
                                color: 'text-muted',
                                children: 'Enable Click Zone Debug Mode'
                            })
                        })
                    })
            }),
            (0, r.jsx)(c.Tooltip, {
                position: 'left',
                text: 'Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets',
                children: (e) =>
                    (0, r.jsx)('div', {
                        ...e,
                        children: (0, r.jsx)(c.Checkbox, {
                            value: n,
                            onChange: () => i(),
                            size: 18,
                            type: c.Checkbox.Types.INVERTED,
                            shape: c.Checkbox.Shapes.BOX,
                            children: (0, r.jsx)(c.Text, {
                                tag: 'span',
                                variant: 'text-md/normal',
                                color: 'text-muted',
                                children: 'Enable Render Debug Mode'
                            })
                        })
                    })
            }),
            (0, r.jsx)(c.Tooltip, {
                position: 'left',
                text: 'Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.',
                children: (e) =>
                    (0, r.jsx)('div', {
                        ...e,
                        children: (0, r.jsx)(c.Checkbox, {
                            value: null != v,
                            onChange: () => C(),
                            size: 18,
                            type: c.Checkbox.Types.INVERTED,
                            shape: c.Checkbox.Shapes.BOX,
                            children: (0, r.jsx)(c.Text, {
                                tag: 'span',
                                variant: 'text-md/normal',
                                color: 'text-muted',
                                children: 'Click Zone Debug Widget'
                            })
                        })
                    })
            })
        ]
    });
}
