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
  E = s("50662"),
  I = s("395716"),
  T = s("673885"),
  f = s("981631"),
  R = s("689938"),
  _ = s("886050");
t.default = function(e) {
  let {
    guild: t,
    guildJoinRequest: S,
    guildJoinRequestUser: N,
    onClose: A
  } = e, m = l.useMemo(() => {
    var e;
    return null !== (e = S.formResponses) && void 0 !== e ? e : []
  }, [S.formResponses]), M = t.hasFeature(f.GuildFeatures.CLAN) && S.applicationStatus === d.GuildJoinRequestApplicationStatuses.SUBMITTED, C = l.useCallback(() => (0, i.openModalLazy)(async () => {
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
        onClick: A,
        tooltip: R.default.Messages.CLOSE
      }),
      children: [(0, a.jsx)(u.default.Icon, {
        icon: r.default,
        disabled: !0,
        "aria-label": R.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION
      }), (0, a.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        children: o.default.getName(N)
      })]
    }), (0, a.jsx)(E.default, {
      guildJoinRequest: S,
      guildJoinRequestUser: N,
      guild: t
    }), (0, a.jsxs)(i.Scroller, {
      children: [(0, a.jsxs)("div", {
        className: _.container,
        children: [(0, a.jsx)(T.default, {
          user: N,
          guildId: t.id
        }), M && (0, a.jsxs)("div", {
          className: _.actionButtons,
          children: [(0, a.jsx)(I.default, {
            joinRequest: S
          }), (0, a.jsx)(i.Button, {
            color: i.ButtonColors.PRIMARY,
            onClick: C,
            children: R.default.Messages.CLAN_MEMBER_APPLICATION_REPORT_CTA
          })]
        })]
      }), (0, a.jsx)("div", {
        className: _.disabledFormRenderer,
        children: (0, a.jsx)(c.default, {
          guildId: t.id,
          formFields: m,
          user: N
        })
      })]
    })]
  })
}