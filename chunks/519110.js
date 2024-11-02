e.d(n, {
    Z: function () {
        return M;
    }
}),
    e(757143);
var i = e(200651),
    l = e(192379),
    a = e(442837),
    r = e(481060),
    u = e(80932),
    o = e(2052),
    s = e(543241),
    c = e(339085),
    d = e(633302),
    g = e(691251),
    S = e(268350),
    I = e(217590),
    b = e(453070),
    f = e(926491),
    E = e(378233),
    p = e(981631),
    m = e(388032);
function v(t) {
    return d.ZP.getByName(t.replace(/(^:|:$)/g, ''));
}
function M(t) {
    let { type: n, id: e, name: M, isInExpressionPicker: j = !1 } = t,
        { location: C } = (0, o.O)(),
        x = l.useMemo(
            () => ({
                ...C,
                section: j ? p.jXE.EXPRESSION_PICKER : p.jXE.CONTEXT_MENU
            }),
            [C, j]
        ),
        h = (0, b.Go)(),
        y = (0, a.e7)([f.Z], () => (n === g.S.STICKER && null != e ? f.Z.getStickerById(e) : null)),
        A = null != y && h.includes(y.id),
        Z = (0, a.e7)([c.ZP], () => {
            if (n === g.S.EMOJI) {
                if (null != e) return c.ZP.getDisambiguatedEmojiContext().getById(e);
                if (null != M) {
                    var t;
                    return null !== (t = v(M)) && void 0 !== t ? t : v(d.ZP.convertSurrogateToName(M));
                }
            }
        }),
        k = (0, s.C1)(null, Z);
    if (null != y && n === g.S.STICKER)
        return (0, E.J8)(y) && !(0, E.V9)(y)
            ? null
            : A
              ? (0, i.jsx)(r.MenuItem, {
                    id: 'unfavorite',
                    action: () => (0, S.hW)(y.id),
                    label: m.intl.string(m.t.XhzKyM)
                })
              : (0, i.jsx)(r.MenuItem, {
                    id: 'favorite',
                    action: () => {
                        (0, I.cQ)({
                            sticker: y,
                            location: {
                                ...x,
                                object: p.qAy.STICKER
                            }
                        }),
                            (0, S.SA)(null == y ? void 0 : y.id);
                    },
                    label: m.intl.string(m.t.kWmiPT)
                });
    if (null != Z && n === g.S.EMOJI)
        return k
            ? (0, i.jsx)(r.MenuItem, {
                  id: 'unfavorite',
                  action: () => (0, u.Xe)(Z),
                  label: m.intl.string(m.t.Ay49KC)
              })
            : (0, i.jsx)(r.MenuItem, {
                  id: 'favorite',
                  action: () => {
                      (0, s.J1)({
                          emoji: Z,
                          location: {
                              ...x,
                              object: p.qAy.EMOJI
                          }
                      }),
                          (0, u.$K)(Z);
                  },
                  label: m.intl.string(m.t['nNsr6+'])
              });
}
