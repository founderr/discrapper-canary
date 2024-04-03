"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("47120"), n("773603");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("933557"),
  o = n("693546"),
  u = n("826581"),
  d = n("246364"),
  c = n("705563"),
  f = n("666233"),
  h = n("430824"),
  m = n("496675"),
  p = n("709054"),
  E = n("967128"),
  C = n("981631"),
  g = n("591373");

function S(e) {
  var t;
  let {
    channel: n
  } = e, [S, _] = l.useState(!1), T = p.default.cast(n.id), {
    joinRequest: I
  } = (0, s.useStateFromStoresObject)([u.default, h.default, m.default], () => {
    let e = u.default.getRequest(T),
      t = h.default.getGuild(null == e ? void 0 : e.guildId);
    return {
      joinRequest: e,
      isModmin: null != t && m.default.can(C.Permissions.KICK_MEMBERS, t)
    }
  });
  l.useEffect(() => {
    null == I && (_(!0), o.default.fetchGuildJoinRequest(T).finally(() => {
      _(!1)
    }))
  }, [I, T]);
  let A = null !== (t = (0, r.default)(n)) && void 0 !== t ? t : "";
  return (0, a.jsxs)(E.default, {
    channelId: n.id,
    className: g.container,
    children: [(0, a.jsx)(E.EmptyMessageHeader, {
      children: A
    }), (0, a.jsx)(E.EmptyMessageBody, {
      children: null != I && null != I.formResponses ? (0, a.jsxs)("div", {
        className: g.formContainer,
        children: [(0, a.jsx)("div", {
          children: (0, a.jsx)(f.default, {
            guildId: I.guildId,
            formFields: I.formResponses.filter(e => e.field_type !== d.VerificationFormFieldTypes.TERMS),
            showRequirements: !1
          })
        }), (0, a.jsx)(c.default, {
          channelId: n.id,
          showProfile: !0
        })]
      }) : S ? (0, a.jsx)(i.Spinner, {}) : null
    })]
  })
}