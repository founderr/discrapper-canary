var r = n(200651),
    i = n(192379),
    a = n(477690),
    s = n(481060),
    o = n(880949),
    l = n(806966),
    u = n(65029),
    c = n(430824),
    d = n(624138),
    f = n(926491),
    _ = n(373228),
    p = n(378233),
    h = n(419922),
    m = n(388032),
    g = n(797479);
let E = (0, d.Mg)(a.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    v = (0, d.Mg)(a.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    I = (e) => {
        let t = null,
            n = null;
        if ((!(0, p.jl)(e) && !(0, p.J8)(e)) || (0, p.J8)(e)) {
            let i = c.Z.getGuild(e.guild_id);
            null != i && ((t = m.intl.format(m.t.cZOkbm, { source: i.name })), (n = (0, r.jsx)(o.Z, { guild: i })));
        } else if ((0, p.jl)(e)) {
            let i = f.Z.getStickerPack(e.pack_id);
            null != i &&
                ((t = m.intl.format(m.t.cZOkbm, { source: i.name })),
                (n = (0, r.jsx)(h.ZP, {
                    size: v,
                    sticker: (0, p.Zt)(i),
                    disableAnimation: !0
                })));
        }
        return {
            title: t,
            graphic: n
        };
    },
    b = i.memo(function (e) {
        let { stickersGrid: t } = e,
            n = l.ZN.useStore((e) => e.inspectedExpressionPosition),
            a = i.useMemo(() => {
                var e;
                let { rowIndex: r, columnIndex: i } = n,
                    a = null === (e = t[r]) || void 0 === e ? void 0 : e[i];
                return (null == a ? void 0 : a.type) === _.al.CREATE_STICKER
                    ? {
                          guild_id: a.guild_id,
                          name: a.name
                      }
                    : (null == a ? void 0 : a.type) !== _.al.STICKER
                      ? null
                      : a.sticker;
            }, [t, n]);
        if (null == a) return null;
        let { graphic: o, title: c } = I(a),
            d =
                (0, p.jl)(a) || (0, p.J8)(a)
                    ? (0, r.jsx)(h.ZP, {
                          isInteracting: !0,
                          size: E,
                          sticker: a,
                          disableAnimation: !0
                      })
                    : (0, r.jsx)('div', {
                          className: g.iconWrapper,
                          children: (0, r.jsx)(s.PlusSmallIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: g.icon
                          })
                      });
        return (0, r.jsx)(u.Z, {
            graphicPrimary: d,
            graphicSecondary: o,
            titlePrimary: a.name,
            titleSecondary: (0, p.jl)(a) || (0, p.J8)(a) ? c : null
        });
    });
t.Z = b;
