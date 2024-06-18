"use strict";
var i = n(735250),
  r = n(470079),
  s = n(477690),
  o = n(481060),
  a = n(880949),
  l = n(806966),
  u = n(65029),
  _ = n(430824),
  c = n(624138),
  d = n(926491),
  E = n(373228),
  I = n(378233),
  T = n(419922),
  h = n(689938),
  S = n(824620);
let f = (0, c.Mg)(s.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
  N = (0, c.Mg)(s.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
  A = e => {
    let t = null,
      n = null;
    if (!(0, I.jl)(e) && !(0, I.J8)(e) || (0, I.J8)(e)) {
      let r = _.Z.getGuild(e.guild_id);
      null != r && (t = h.Z.Messages.STICKER_FROM_SOURCE.format({
        source: r.name
      }), n = (0, i.jsx)(a.Z, {
        guild: r
      }))
    } else if ((0, I.jl)(e)) {
      let r = d.Z.getStickerPack(e.pack_id);
      null != r && (t = h.Z.Messages.STICKER_FROM_SOURCE.format({
        source: r.name
      }), n = (0, i.jsx)(T.ZP, {
        size: N,
        sticker: (0, I.Zt)(r),
        disableAnimation: !0
      }))
    }
    return {
      title: t,
      graphic: n
    }
  },
  m = r.memo(function(e) {
    let {
      stickersGrid: t
    } = e, n = l.ZN.useStore(e => e.inspectedExpressionPosition), s = r.useMemo(() => {
      var e;
      let {
        rowIndex: i,
        columnIndex: r
      } = n, s = null === (e = t[i]) || void 0 === e ? void 0 : e[r];
      return (null == s ? void 0 : s.type) === E.al.CREATE_STICKER ? {
        guild_id: s.guild_id,
        name: s.name
      } : (null == s ? void 0 : s.type) !== E.al.STICKER ? null : s.sticker
    }, [t, n]);
    if (null == s) return null;
    let {
      graphic: a,
      title: _
    } = A(s), c = (0, I.jl)(s) || (0, I.J8)(s) ? (0, i.jsx)(T.ZP, {
      isInteracting: !0,
      size: f,
      sticker: s,
      disableAnimation: !0
    }) : (0, i.jsx)("div", {
      className: S.iconWrapper,
      children: (0, i.jsx)(o.PlusSmallIcon, {
        size: "md",
        color: "currentColor",
        className: S.icon
      })
    });
    return (0, i.jsx)(u.Z, {
      graphicPrimary: c,
      graphicSecondary: a,
      titlePrimary: s.name,
      titleSecondary: (0, I.jl)(s) || (0, I.J8)(s) ? _ : null
    })
  });
t.Z = m