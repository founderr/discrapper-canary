"use strict";
s.r(t);
var a = s("735250"),
  l = s("470079"),
  i = s("481060"),
  n = s("465670"),
  r = s("964309"),
  u = s("502568"),
  o = s("51144"),
  d = s("246364"),
  c = s("666233"),
  I = s("50662"),
  E = s("395716"),
  T = s("673885"),
  f = s("981631"),
  _ = s("689938"),
  R = s("886050");
t.default = function(e) {
  let {
    guild: t,
    guildJoinRequest: S,
    guildJoinRequestUser: N,
    onClose: m
  } = e, M = l.useMemo(() => {
    var e;
    return null !== (e = S.formResponses) && void 0 !== e ? e : []
  }, [S.formResponses]), A = t.hasFeature(f.GuildFeatures.CLAN) && S.applicationStatus === d.GuildJoinRequestApplicationStatuses.SUBMITTED, C = l.useCallback(() => (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([s.e("99387"), s.e("17945")]).then(s.bind(s, "223926"));
    return s => (0, a.jsx)(e, {
      ...s,
      guild: t,
      guildJoinRequest: S,
      user: N
    })
  }), [t, S, N]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(u.default, {
      toolbar: (0, a.jsx)(u.default.Icon, {
        icon: n.default,
        onClick: m,
        tooltip: _.default.Messages.CLOSE
      }),
      children: [(0, a.jsx)(u.default.Icon, {
        icon: r.default,
        disabled: !0,
        "aria-label": _.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION
      }), (0, a.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        children: o.default.getName(N)
      })]
    }), (0, a.jsx)(I.default, {
      guildJoinRequest: S,
      guildJoinRequestUser: N,
      guild: t
    }), (0, a.jsxs)(i.Scroller, {
      children: [(0, a.jsxs)("div", {
        className: R.container,
        children: [(0, a.jsx)(T.default, {
          user: N,
          guildId: t.id
        }), A && (0, a.jsxs)("div", {
          className: R.actionButtons,
          children: [(0, a.jsx)(E.default, {
            joinRequest: S
          }), (0, a.jsx)(i.Button, {
            color: i.ButtonColors.PRIMARY,
            onClick: C,
            children: _.default.Messages.CLAN_MEMBER_APPLICATION_REPORT_CTA
          })]
        })]
      }), (0, a.jsx)("div", {
        className: R.disabledFormRenderer,
        children: (0, a.jsx)(c.default, {
          guildId: t.id,
          formFields: M,
          user: N
        })
      })]
    })]
  })
}