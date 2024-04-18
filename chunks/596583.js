"use strict";
s.r(t), s("47120");
var i = s("735250");
s("470079");
var a = s("727075"),
  l = s("780384"),
  r = s("481060"),
  C = s("493683"),
  n = s("410030"),
  d = s("204197"),
  o = s("63063"),
  c = s("51144"),
  f = s("792451"),
  u = s("814667"),
  x = s("981631"),
  h = s("689938"),
  p = s("970422");
let _ = (e, t) => {
    C.default.openPrivateChannel(e), t()
  },
  j = e => {
    let {
      user: t,
      onClose: s
    } = e, {
      avatarSrc: a,
      eventHandlers: l
    } = (0, d.default)({
      user: t,
      size: r.AvatarSizes.SIZE_56
    }), C = c.default.getName(t), n = t.username !== C;
    return (0, i.jsxs)("div", {
      className: p.referredUserRowContainer,
      children: [(0, i.jsx)(r.Avatar, {
        src: a,
        "aria-label": C,
        size: r.AvatarSizes.SIZE_56,
        ...l
      }), (0, i.jsxs)("div", {
        className: p.referredUserRowBody,
        children: [(0, i.jsx)(r.Tooltip, {
          text: h.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_TOOL_TOP,
          position: "right",
          children: e => {
            let {
              onMouseEnter: a,
              onMouseLeave: l
            } = e;
            return (0, i.jsx)(r.Clickable, {
              onClick: () => _(t.id, s),
              className: p.displayNameClickableContainer,
              onMouseEnter: a,
              onMouseLeave: l,
              children: (0, i.jsx)(r.Text, {
                variant: "text-md/medium",
                className: p.displayName,
                children: C
              })
            })
          }
        }), n && (0, i.jsx)(r.Text, {
          variant: "text-md/medium",
          className: p.userName,
          children: t.username
        })]
      })]
    })
  };
t.default = e => {
  let {
    selectedUsers: t,
    onClose: s
  } = e, C = [...t].map(e => (0, i.jsx)(j, {
    user: e,
    onClose: s
  }, e.id)), d = (0, n.useTheme)(), c = (0, l.isThemeLight)(d) ? u.default : f.default;
  return (0, i.jsxs)("div", {
    className: p.confrimationContainer,
    children: [(0, i.jsx)(r.Clickable, {
      onClick: s,
      className: p.closeButtonContainer,
      children: (0, i.jsx)(a.CloseSmallIcon, {
        width: 20,
        height: 20
      })
    }), (0, i.jsx)(c, {
      className: p.headerIcon
    }), (0, i.jsx)(r.Heading, {
      variant: "heading-lg/bold",
      className: p.heading,
      children: h.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_HEADER.format({
        numReferrals: C.length
      })
    }), (0, i.jsx)("div", {
      className: p.confirmedUserContainer,
      children: C
    }), (0, i.jsx)(r.Text, {
      variant: "text-md/medium",
      children: h.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_SUBHEADER.format({
        days: 10,
        helpdeskArticle: o.default.getArticleURL(x.HelpdeskArticles.REFERRAL_PROGRAM)
      })
    })]
  })
}