"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var l = n("37983"),
  r = n("884691"),
  a = n("65597"),
  i = n("77078"),
  s = n("812204"),
  u = n("685665"),
  o = n("271938"),
  d = n("26989"),
  c = n("305961"),
  I = n("476263"),
  f = n("533930"),
  _ = n("599110"),
  E = n("681937"),
  h = n("956967"),
  T = n("143460"),
  N = n("49111"),
  L = n("657944"),
  p = n("782340"),
  S = n("261591");

function g(e) {
  var t;
  let {
    onClose: n,
    transitionState: g,
    guildId: A
  } = e, D = (0, a.default)([o.default], () => o.default.getId()), R = (0, a.default)([d.default], () => d.default.getMember(A, D), [A, D]), M = (0, a.default)([c.default], () => c.default.getGuild(A), [A]), G = null !== (t = null == M ? void 0 : M.name) && void 0 !== t ? t : "", U = (0, E.getAutomodQuarantinedGuildMemberFlags)(R), {
    analyticsLocations: C
  } = (0, u.default)(s.default.AUTOMOD_PROFILE_QUARANTINE_ALERT), [m, O] = (0, h.useOpenFixQuarantinedProfileModal)({
    guildId: A,
    analyticsLocations: C,
    openWithoutBackstack: !0
  }), y = U.has(L.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? p.default.Messages.GUILD_AUTOMOD_USERNAME_INVALID_MODAL_DESCRIPTION_MOBILE : p.default.Messages.GUILD_AUTOMOD_BIO_INVALID_MODAL_DESCRIPTION_MOBILE;
  !O && (y = p.default.Messages.GUILD_AUTOMOD_USERNAME_INVALID_NO_PERMS_MODAL_DESCRIPTION_MOBILE);
  let v = O ? p.default.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA : p.default.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
  return (r.useEffect(() => {
    _.default.track(N.AnalyticEvents.OPEN_MODAL, {
      type: T.QUARANTINE_USER_ALERT_KEY,
      guild_id: A,
      other_user_id: D
    })
  }, []), r.useEffect(() => {
    if (null == M) {
      n();
      return
    }
  }, [M, n]), null == M) ? null : (0, l.jsxs)(i.ModalRoot, {
    transitionState: g,
    size: i.ModalSize.SMALL,
    children: [(0, l.jsx)(i.ModalHeader, {
      separator: !1,
      children: (0, l.jsxs)("div", {
        className: S.headerContainer,
        children: [(0, l.jsxs)("div", {
          className: S.guildIconContainer,
          children: [(0, l.jsx)(I.default, {
            guild: M,
            size: I.default.Sizes.LARGER
          }), (0, l.jsx)("div", {
            className: S.statusContainer,
            children: (0, l.jsx)(f.default, {
              className: S.statusIcon,
              width: 24,
              height: 24
            })
          })]
        }), (0, l.jsx)(i.Heading, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: p.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format({
            guildName: G
          })
        })]
      })
    }), (0, l.jsx)(i.ModalContent, {
      children: (0, l.jsx)("div", {
        className: S.descriptionContainer,
        children: (0, l.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: y
        })
      })
    }), (0, l.jsxs)(i.ModalFooter, {
      children: [(0, l.jsx)(i.Button, {
        onClick: () => {
          m(), n()
        },
        color: i.Button.Colors.BRAND_NEW,
        look: i.Button.Looks.FILLED,
        children: v
      }), (0, l.jsx)(i.Button, {
        onClick: n,
        color: i.Button.Colors.PRIMARY,
        look: i.Button.Looks.LINK,
        children: p.default.Messages.CANCEL
      })]
    })]
  })
}