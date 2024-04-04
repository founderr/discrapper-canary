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
  f = s("673885"),
  T = s("981631"),
  _ = s("689938"),
  R = s("35913");
t.default = function(e) {
  let {
    guild: t,
    guildJoinRequest: s,
    guildJoinRequestUser: S,
    onClose: N
  } = e, A = l.useMemo(() => {
    var e;
    return null !== (e = s.formResponses) && void 0 !== e ? e : []
  }, [s.formResponses]), M = t.hasFeature(T.GuildFeatures.CLAN) && s.applicationStatus === d.GuildJoinRequestApplicationStatuses.SUBMITTED;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(u.default, {
      toolbar: (0, a.jsx)(u.default.Icon, {
        icon: n.default,
        onClick: N,
        tooltip: _.default.Messages.CLOSE
      }),
      children: [(0, a.jsx)(u.default.Icon, {
        icon: r.default,
        disabled: !0,
        "aria-label": _.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION
      }), (0, a.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        children: o.default.getName(S)
      })]
    }), (0, a.jsx)(E.default, {
      guildJoinRequest: s,
      guildJoinRequestUser: S,
      guild: t
    }), (0, a.jsxs)(i.Scroller, {
      children: [(0, a.jsxs)("div", {
        className: R.container,
        children: [(0, a.jsx)(f.default, {
          user: S,
          guildId: t.id
        }), M && (0, a.jsx)(I.default, {
          joinRequest: s
        })]
      }), (0, a.jsx)("div", {
        className: R.disabledFormRenderer,
        children: (0, a.jsx)(c.default, {
          guildId: t.id,
          formFields: A,
          user: S
        })
      })]
    })]
  })
}