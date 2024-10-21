n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(757143);
var a = n(200651),
    i = n(192379),
    l = n(442837),
    u = n(481060),
    s = n(80932),
    o = n(2052),
    r = n(543241),
    c = n(339085),
    I = n(633302),
    d = n(691251),
    E = n(268350),
    M = n(217590),
    S = n(453070),
    g = n(926491),
    O = n(378233),
    C = n(981631),
    b = n(689938);
function f(e) {
    return I.ZP.getByName(e.replace(/(^:|:$)/g, ''));
}
function Z(e) {
    let { type: t, id: n, name: Z, isInExpressionPicker: _ = !1 } = e,
        { location: p } = (0, o.O)(),
        R = i.useMemo(
            () => ({
                ...p,
                section: _ ? C.jXE.EXPRESSION_PICKER : C.jXE.CONTEXT_MENU
            }),
            [p, _]
        ),
        T = (0, S.Go)(),
        v = (0, l.e7)([g.Z], () => (t === d.S.STICKER && null != n ? g.Z.getStickerById(n) : null)),
        A = null != v && T.includes(v.id),
        m = (0, l.e7)([c.ZP], () => {
            if (t === d.S.EMOJI) {
                if (null != n) return c.ZP.getDisambiguatedEmojiContext().getById(n);
                if (null != Z) {
                    var e;
                    return null !== (e = f(Z)) && void 0 !== e ? e : f(I.ZP.convertSurrogateToName(Z));
                }
            }
        }),
        j = (0, r.C1)(null, m);
    if (null != v && t === d.S.STICKER)
        return (0, O.J8)(v) && !(0, O.V9)(v)
            ? null
            : A
              ? (0, a.jsx)(u.MenuItem, {
                    id: 'unfavorite',
                    action: () => (0, E.hW)(v.id),
                    label: b.Z.Messages.UNFAVORITE_STICKER
                })
              : (0, a.jsx)(u.MenuItem, {
                    id: 'favorite',
                    action: () => {
                        (0, M.cQ)({
                            sticker: v,
                            location: {
                                ...R,
                                object: C.qAy.STICKER
                            }
                        }),
                            (0, E.SA)(null == v ? void 0 : v.id);
                    },
                    label: b.Z.Messages.FAVORITE_STICKER
                });
    if (null != m && t === d.S.EMOJI)
        return j
            ? (0, a.jsx)(u.MenuItem, {
                  id: 'unfavorite',
                  action: () => (0, s.Xe)(m),
                  label: b.Z.Messages.UNFAVORITE_EMOJI
              })
            : (0, a.jsx)(u.MenuItem, {
                  id: 'favorite',
                  action: () => {
                      (0, r.J1)({
                          emoji: m,
                          location: {
                              ...R,
                              object: C.qAy.EMOJI
                          }
                      }),
                          (0, s.$K)(m);
                  },
                  label: b.Z.Messages.FAVORITE_EMOJI
              });
}
