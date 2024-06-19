t(47120);
var a = t(735250);
t(470079);
var i = t(120356),
  r = t.n(i),
  l = t(512722),
  n = t.n(l),
  C = t(442837),
  o = t(780384),
  d = t(481060),
  c = t(493683),
  x = t(37234),
  _ = t(410030),
  p = t(204197),
  h = t(819640),
  u = t(63063),
  f = t(51144),
  R = t(281494),
  E = t(276444),
  j = t(792451),
  L = t(814667),
  m = t(981631),
  g = t(689938),
  S = t(674471);
let A = (e, s) => {
    h.Z.hasLayers() && (0, x.xf)(), c.Z.openPrivateChannel(e), s()
  },
  M = e => {
    let {
      user: s,
      trialCreationResult: t,
      onClose: i
    } = e, {
      avatarSrc: l,
      eventHandlers: n
    } = (0, p.Z)({
      user: s,
      size: d.AvatarSizes.SIZE_56
    }), C = f.ZP.getName(s), o = s.username !== C && t === R.Fz.SUCCESS, c = t === R.Fz.FAIL;
    return (0, a.jsxs)("div", {
      className: S.referredUserRowContainer,
      children: [(0, a.jsx)(d.Avatar, {
        imageClassName: r()({
          [S.erroredAvatar]: c
        }),
        src: l,
        "aria-label": C,
        size: d.AvatarSizes.SIZE_56,
        ...n
      }), (0, a.jsxs)("div", {
        className: S.referredUserRowBody,
        children: [c ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(d.Text, {
            className: S.errorDisplayName,
            variant: "text-md/medium",
            children: C
          }), (0, a.jsx)(d.Text, {
            variant: "text-md/medium",
            className: S.userName,
            children: g.Z.Messages.REFERRAL_PROGRAM_CONFIRMATION_ERROR_PAGE.format({
              userName: C
            })
          })]
        }) : (0, a.jsx)(d.Tooltip, {
          text: g.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_TOOL_TOP,
          position: "right",
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: r
            } = e;
            return (0, a.jsx)(d.Clickable, {
              onClick: () => A(s.id, i),
              className: S.displayNameClickableContainer,
              onMouseEnter: t,
              onMouseLeave: r,
              children: (0, a.jsx)(d.Text, {
                variant: "text-md/medium",
                className: S.displayName,
                children: C
              })
            })
          }
        }), o && (0, a.jsx)(d.Text, {
          variant: "text-md/medium",
          className: S.userName,
          children: s.username
        })]
      })]
    })
  };
s.Z = e => {
  let {
    selectedUsers: s,
    trialCreationResult: t,
    onClose: i
  } = e, r = [...s].map(e => (0, a.jsx)(M, {
    user: e,
    trialCreationResult: t.get(e.id),
    onClose: i
  }, e.id)), l = (0, C.e7)([E.Z], () => E.Z.getReferralsRemaining());
  n()(null !== l, "Referrals remaining should not be null");
  let c = (0, _.Fg)(),
    x = (0, o.ap)(c) ? L.Z : j.Z,
    p = g.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_RESENT_COMPLETE_HEADER,
    h = [...t.values()].filter(e => e === R.Fz.SUCCESS).length;
  return l > 0 && (p = g.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_HEADER.format({
    numReferrals: h
  })), 0 === h && (p = g.Z.Messages.REFERRAL_PROGRAM_CONFIRMATION_ERROR_PAGE_HEADER), (0, a.jsxs)("div", {
    className: S.confrimationContainer,
    children: [(0, a.jsx)(d.Clickable, {
      onClick: i,
      className: S.closeButtonContainer,
      children: (0, a.jsx)(d.CloseSmallIcon, {
        size: "custom",
        width: 20,
        height: 20
      })
    }), (0, a.jsx)(x, {
      className: S.headerIcon
    }), (0, a.jsx)(d.Heading, {
      variant: "heading-lg/bold",
      className: S.heading,
      children: p
    }), (0, a.jsx)("div", {
      className: S.confirmedUserContainer,
      children: r
    }), (0, a.jsx)(d.Text, {
      variant: "text-md/medium",
      children: g.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_SUBHEADER.format({
        days: 10,
        helpdeskArticle: u.Z.getArticleURL(m.BhN.REFERRAL_PROGRAM)
      })
    })]
  })
}