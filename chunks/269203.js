n.d(t, {
  Z: function() {
    return p
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(805519),
  r = n(246364),
  o = n(705563),
  c = n(594174),
  u = n(346656),
  d = n(967128),
  h = n(689938),
  m = n(573475);

function E(e) {
  var t;
  let {
    joinRequest: n,
    guild: a
  } = e, o = (0, i.e7)([c.default], () => c.default.getUser(n.userId));
  return (0, l.jsxs)("div", {
    className: m.summaryContainer,
    children: [(0, l.jsxs)("div", {
      className: m.summaryHeader,
      children: [null != a && (0, l.jsxs)("div", {
        className: m.summaryHeaderClanInfo,
        children: [(0, l.jsx)(u.Z, {
          guild: a,
          active: !0,
          size: u.Z.Sizes.SMOL,
          className: m.guildIcon
        }), (0, l.jsx)(s.Heading, {
          variant: "heading-sm/semibold",
          color: "header-primary",
          children: a.name
        })]
      }), null != o && (0, l.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: h.Z.Messages.MEMBER_VERIFICATION_USERS_APPLICATION.format({
          username: o.globalName
        })
      })]
    }), null === (t = n.formResponses) || void 0 === t ? void 0 : t.filter(e => e.field_type !== r.QJ.TERMS).map(e => {
      let t = e.field_type === r.QJ.MULTIPLE_CHOICE && null != e.response ? e.choices[e.response] : e.response;
      return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("hr", {
          className: m.summarySeparator
        }), (0, l.jsxs)("div", {
          className: m.formResponseContainer,
          children: [(0, l.jsx)(s.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: e.label
          }), (0, l.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-primary",
            children: t
          })]
        })]
      })
    })]
  })
}

function p(e) {
  let {
    channel: t
  } = e, {
    loading: n,
    joinRequest: i,
    joinRequestGuild: r
  } = (0, a.Z)(t.id);
  return (0, l.jsx)(d.ZP, {
    channelId: t.id,
    className: m.container,
    children: (0, l.jsx)(d.jz, {
      children: null != i && null != i.formResponses ? (0, l.jsxs)("div", {
        className: m.formContainer,
        children: [(0, l.jsx)("div", {
          children: (0, l.jsx)(E, {
            guild: r,
            joinRequest: i
          })
        }), (0, l.jsx)(o.Z, {
          channelId: t.id,
          showProfile: !0
        })]
      }) : n ? (0, l.jsx)(s.Spinner, {}) : null
    })
  })
}