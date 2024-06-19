t.r(n), t.d(n, {
  default: function() {
    return D
  }
}), t(47120);
var s = t(735250),
  l = t(470079),
  r = t(399606),
  o = t(481060),
  i = t(100527),
  a = t(906732),
  _ = t(314897),
  u = t(271383),
  d = t(430824),
  I = t(346656),
  A = t(626135),
  O = t(715903),
  c = t(295474),
  E = t(273504),
  M = t(981631),
  N = t(372897),
  L = t(689938),
  U = t(678417);

function D(e) {
  var n;
  let {
    onClose: t,
    transitionState: D,
    guildId: R
  } = e, T = (0, r.e7)([_.default], () => _.default.getId()), Z = (0, r.e7)([u.ZP], () => u.ZP.getMember(R, T), [R, T]), f = (0, r.e7)([d.Z], () => d.Z.getGuild(R), [R]), g = null !== (n = null == f ? void 0 : f.name) && void 0 !== n ? n : "", C = (0, O.no)(Z), {
    analyticsLocations: h
  } = (0, a.ZP)(i.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT), [P, m] = (0, c.ww)({
    guildId: R,
    analyticsLocations: h,
    openWithoutBackstack: !0
  }), G = C.has(N.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? L.Z.Messages.GUILD_AUTOMOD_USERNAME_INVALID_MODAL_DESCRIPTION_MOBILE : L.Z.Messages.GUILD_AUTOMOD_BIO_INVALID_MODAL_DESCRIPTION_MOBILE;
  !m && (G = L.Z.Messages.GUILD_AUTOMOD_USERNAME_INVALID_NO_PERMS_MODAL_DESCRIPTION_MOBILE);
  let x = m ? L.Z.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA : L.Z.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
  return (l.useEffect(() => {
    A.default.track(M.rMx.OPEN_MODAL, {
      type: E.dc,
      guild_id: R,
      other_user_id: T
    })
  }, []), l.useEffect(() => {
    if (null == f) {
      t();
      return
    }
  }, [f, t]), null == f) ? null : (0, s.jsxs)(o.ModalRoot, {
    transitionState: D,
    size: o.ModalSize.SMALL,
    children: [(0, s.jsx)(o.ModalHeader, {
      separator: !1,
      children: (0, s.jsxs)("div", {
        className: U.headerContainer,
        children: [(0, s.jsxs)("div", {
          className: U.guildIconContainer,
          children: [(0, s.jsx)(I.Z, {
            guild: f,
            size: I.Z.Sizes.LARGER
          }), (0, s.jsx)("div", {
            className: U.statusContainer,
            children: (0, s.jsx)(o.ChatXIcon, {
              size: "md",
              color: "currentColor",
              className: U.statusIcon
            })
          })]
        }), (0, s.jsx)(o.Heading, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: L.Z.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format({
            guildName: g
          })
        })]
      })
    }), (0, s.jsx)(o.ModalContent, {
      children: (0, s.jsx)("div", {
        className: U.descriptionContainer,
        children: (0, s.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: G
        })
      })
    }), (0, s.jsxs)(o.ModalFooter, {
      children: [(0, s.jsx)(o.Button, {
        onClick: () => {
          P(), t()
        },
        color: o.Button.Colors.BRAND,
        look: o.Button.Looks.FILLED,
        children: x
      }), (0, s.jsx)(o.Button, {
        onClick: t,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        children: L.Z.Messages.CANCEL
      })]
    })]
  })
}