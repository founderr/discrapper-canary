n.d(t, {
  Z: function() {
    return E
  }
});
var l = n(735250),
  i = n(470079),
  s = n(399606),
  a = n(481060),
  r = n(69882),
  o = n(815790),
  c = n(893966),
  u = n(373791),
  d = n(776767),
  h = n(689938),
  m = n(332513);

function E(e) {
  let {
    member: t
  } = e, n = t.userId, E = t.guildId, p = (0, s.e7)([c.Z], () => c.Z.getEnhancedMember(E, n), [n, E]), g = (null != p ? p : t).unusualDMActivityUntil, f = i.useCallback(e => {
    if (null == e) return null;
    let t = new Date(e).getTime();
    return (0, o.fv)(t, o.jq.JOINED_AT)
  }, []), C = i.useMemo(() => null == t ? null : f(g), [t, f, g]), _ = i.useMemo(() => (0, r.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), I = i.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
  return null != g || _ ? (0, l.jsx)(a.FormItem, {
    title: h.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_FLAGS,
    titleClassName: m.infoTitle,
    children: (0, l.jsxs)(d.WM, {
      children: [null != g && (0, l.jsx)(d._2, {
        icon: (0, l.jsx)(a.ChatAlertIcon, {
          size: "custom",
          color: "currentColor",
          width: d.Mn,
          height: d.Mn,
          className: m.__invalid_unusualDMLabelIcon
        }),
        name: (0, l.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: h.Z.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY
        }),
        description: (0, l.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: C
        })
      }), _ && null != I && (0, l.jsx)(d._2, {
        icon: (0, l.jsx)(a.ClockWarningIcon, {
          size: "custom",
          color: "currentColor",
          width: d.Mn,
          height: d.Mn,
          className: m.__invalid_unusualDMLabelIcon
        }),
        name: (0, l.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: h.Z.Messages.GUILD_COMMUNICATION_DISABLED_ON_MEMBER
        }),
        description: (0, l.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: (0, l.jsx)(u.Z, {
            deadline: I,
            showUnits: !0,
            stopAtOneSec: !0
          })
        })
      })]
    })
  }) : null
}