n(411104);
var i,
    r,
    a = n(200651);
n(192379);
var l = n(120356),
    s = n.n(l),
    o = n(442837),
    c = n(481060),
    d = n(700582),
    u = n(451478),
    h = n(388032),
    m = n(273027);
(r = i || (i = {}))[(r.STAFF_NOTES = 1)] = 'STAFF_NOTES';
let p = o.ZP.connectStores([u.Z], () => ({ animate: u.Z.isFocused() }))((e) => {
        let { user: t, className: n, animate: i } = e;
        return (0, a.jsxs)('div', {
            className: s()(m.staffReviewHeader, n),
            children: [
                (0, a.jsx)(d.Z, {
                    size: c.AvatarSizes.SIZE_32,
                    user: t,
                    animate: i
                }),
                (0, a.jsxs)('div', {
                    className: m.headerText,
                    children: [
                        (0, a.jsx)('div', {
                            className: m.label,
                            children: h.intl.string(h.t.vmzMZG)
                        }),
                        (0, a.jsx)('div', {
                            className: m.username,
                            children: t.username
                        })
                    ]
                })
            ]
        });
    }),
    g = (e) => {
        let { data: t, className: n } = e;
        if (1 === t.type) {
            if (null == t.staffNotes) return null;
            let { user: e, content: i } = t.staffNotes;
            return null == e
                ? null
                : (0, a.jsxs)('div', {
                      className: n,
                      children: [
                          (0, a.jsx)(p, {
                              user: e,
                              className: m.header
                          }),
                          (0, a.jsx)('div', {
                              className: m.notes,
                              children: i
                          })
                      ]
                  });
        }
        throw Error('Unknown type');
    };
(g.Types = i), (t.Z = g);
