e.r(n),
    e.d(n, {
        default: function () {
            return S;
        }
    });
var i = e(200651);
e(192379);
var l = e(828214),
    a = e(481060),
    r = e(239091),
    u = e(299206),
    o = e(519110),
    s = e(695346),
    c = e(572004),
    d = e(691251),
    g = e(388032);
function S(t) {
    let { target: n, onSelect: e } = t,
        S = n.getAttribute('data-type'),
        I = n.getAttribute('data-id'),
        b = n.getAttribute('data-name'),
        f = n.getAttribute('data-surrogates'),
        E = 'true' === n.getAttribute('data-animated'),
        p = s.Sb.useSetting(),
        m = (0, o.Z)({
            type: S,
            id: I,
            name: b,
            isInExpressionPicker: !0
        }),
        v =
            null != f
                ? (0, i.jsx)(l.sN, {
                      id: 'copy',
                      label: g.intl.string(g.t.ad58UF),
                      action: () => (0, c.JG)(f)
                  })
                : null,
        M = (0, u.Z)({
            id: I,
            shiftId:
                S === d.S.EMOJI
                    ? '<'
                          .concat(E ? 'a' : '', ':')
                          .concat(null == b ? void 0 : b.split('~')[0], ':')
                          .concat(I, '>')
                    : void 0,
            label: S === d.S.STICKER ? g.intl.string(g.t['SJ324+']) : g.intl.string(g.t.Ap2oV1)
        });
    return (0, i.jsx)(a.Menu, {
        navId: 'expression-picker',
        onClose: r.Zy,
        'aria-label': g.intl.string(g.t.XoasSE),
        onSelect: e,
        className: 'context-menu',
        children: (0, i.jsxs)(a.MenuGroup, {
            children: [m, c.wS && p ? (null != v ? v : M) : null]
        })
    });
}
