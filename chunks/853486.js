var n = a(735250),
  t = a(470079),
  l = a(481060),
  r = a(502568),
  i = a(51144),
  o = a(246364),
  c = a(666233),
  I = a(50662),
  d = a(395716),
  u = a(673885),
  E = a(981631),
  T = a(689938),
  _ = a(539086);
s.Z = function(e) {
  let {
    guild: s,
    guildJoinRequest: N,
    guildJoinRequestUser: R,
    onClose: M
  } = e, C = t.useMemo(() => {
    var e;
    return null !== (e = N.formResponses) && void 0 !== e ? e : []
  }, [N.formResponses]), m = s.hasFeature(E.oNc.CLAN) && N.applicationStatus === o.wB.SUBMITTED, A = t.useCallback(() => (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([a.e("99387"), a.e("17945")]).then(a.bind(a, 223926));
    return a => (0, n.jsx)(e, {
      ...a,
      guild: s,
      guildJoinRequest: N,
      user: R
    })
  }), [s, N, R]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(r.ZP, {
      toolbar: (0, n.jsx)(r.ZP.Icon, {
        icon: l.CloseSmallIcon,
        onClick: M,
        tooltip: T.Z.Messages.CLOSE
      }),
      children: [(0, n.jsx)(r.ZP.Icon, {
        icon: l.UserIcon,
        disabled: !0,
        "aria-label": T.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION
      }), (0, n.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        children: i.ZP.getName(R)
      })]
    }), (0, n.jsx)(I.Z, {
      guildJoinRequest: N,
      guildJoinRequestUser: R,
      guild: s
    }), (0, n.jsxs)(l.Scroller, {
      children: [(0, n.jsxs)("div", {
        className: _.container,
        children: [(0, n.jsx)(u.Z, {
          user: R,
          guildId: s.id
        }), m && (0, n.jsxs)("div", {
          className: _.actionButtons,
          children: [(0, n.jsx)(d.Z, {
            joinRequest: N
          }), (0, n.jsx)(l.Button, {
            color: l.ButtonColors.PRIMARY,
            onClick: A,
            children: T.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_CTA
          })]
        })]
      }), (0, n.jsx)("div", {
        className: _.disabledFormRenderer,
        children: (0, n.jsx)(c.Z, {
          guildId: s.id,
          formFields: C,
          user: R
        })
      })]
    })]
  })
}