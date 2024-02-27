"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("65597"),
  i = n("151426"),
  r = n("77078"),
  o = n("272030"),
  u = n("812204"),
  d = n("685665"),
  c = n("235145"),
  f = n("244390"),
  E = n("42887"),
  h = n("754576"),
  _ = n("78581"),
  C = n("429829"),
  I = n("191191"),
  S = n("994428"),
  m = n("782340");

function p(e) {
  let {
    channel: t,
    iconClassName: p,
    className: T,
    innerClassName: g,
    ...A
  } = e, {
    mute: N,
    suppress: R
  } = (0, f.default)(t), O = (0, l.default)([E.default], () => E.default.isDeaf()), v = N || R || O, [L, M] = s.useState(!1), P = t.getGuildId(), D = (0, _.useSoundBoardDismissContentTypes)({
    isSoundboardButtonDisabled: v
  }), [y, x] = (0, c.useGetDismissibleContent)(D), {
    AnalyticsLocationProvider: b
  } = (0, d.default)(u.default.SOUNDBOARD_BUTTON);

  function U(e) {
    null != P && (0, o.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("136137").then(n.bind(n, "136137"));
      return t => (0, a.jsx)(e, {
        guildId: P,
        ...t
      })
    })
  }
  let G = e => (0, a.jsx)(r.Popout, {
    shouldShow: L,
    position: "top",
    onRequestClose: () => M(!1),
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, a.jsx)(I.default, {
        guildId: P,
        channel: t,
        onClose: n,
        gridNotice: y === i.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, a.jsx)(C.CustomCallSoundUpsell, {
          onClose: n,
          markAsDismissed: x
        }),
        analyticsSource: "rtc panel"
      })
    },
    children: t => (0, a.jsx)("div", {
      children: (0, a.jsx)(r.Button, {
        ...e,
        ...t,
        className: T,
        wrapperClassName: T,
        innerClassName: g,
        disabled: v,
        onClick: () => {
          var t, n;
          null == n || n(), null != y && y !== i.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && x(S.ContentDismissActionType.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), M(!L)
        },
        onContextMenu: U,
        fullWidth: !0,
        size: r.Button.Sizes.SMALL,
        ...A,
        children: (0, a.jsx)(h.default, {
          className: p
        })
      })
    })
  });
  return (0, a.jsx)(b, {
    children: (0, a.jsx)(r.Tooltip, {
      text: function() {
        if (N) return m.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_GUILD_MUTE;
        if (R) return m.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_SUPPRESSED;
        if (O) return m.default.Messages.SOUNDBOARD_OPEN_SOUNBOARRD_ERROR_DEAFENED;
        return m.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD
      }(),
      children: e => G(e)
    })
  })
}