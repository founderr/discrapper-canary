n.d(t, {
  Z: function() {
    return U
  }
}), n(411104);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(399606),
  o = n(481060),
  u = n(588705),
  c = n(100527),
  d = n(906732),
  h = n(388905),
  g = n(792766),
  p = n(451603),
  m = n(885714),
  C = n(973616),
  E = n(594174),
  f = n(285952),
  _ = n(672752),
  I = n(153124),
  N = n(855981),
  Z = n(55543),
  S = n(626135),
  x = n(768581),
  T = n(358085),
  L = n(998502),
  v = n(379164),
  A = n(590965),
  M = n(981631),
  R = n(474936),
  O = n(689938),
  P = n(71044),
  j = n(331651);

function b() {
  let {
    analyticsLocations: e,
    sourceAnalyticsLocations: t
  } = (0, d.ZP)(c.Z.PREMIUM_UPSELL_TOOLTIP);
  return i.useEffect(() => {
    S.default.track(M.rMx.PREMIUM_UPSELL_VIEWED, {
      type: R.cd.GUILD_CAP_INLINE_INVITE_MODAL,
      location: {
        page: M.ZY5.NATIVE_INVITE_MODAL
      },
      location_stack: t
    })
  }, [t]), (0, l.jsxs)(o.Clickable, {
    onClick: () => (0, m.Z)({
      analyticsSource: {
        page: M.Sbl.EXTERNAL_INVITE_LINK_MODAL
      },
      analyticsLocation: {
        page: M.Sbl.EXTERNAL_INVITE_LINK_MODAL,
        section: M.jXE.GUILD_CAP_UPSELL_MODAL
      },
      analyticsLocations: e
    }),
    className: P.experimentUpsellError,
    children: [(0, l.jsx)(o.NitroWheelIcon, {
      size: "md",
      className: P.experimentUpsellIcon,
      color: _.JX.PREMIUM_TIER_2
    }), (0, l.jsx)("span", {
      className: P.experimentUpsellText,
      children: O.Z.Messages.GUILD_CAP_UPSELL_TOOLTIP
    }), (0, l.jsx)("span", {
      className: P.experimentGetNitro,
      children: O.Z.Messages.GUILD_CAP_UPSELL_GET_NITRO
    })]
  })
}

function D(e) {
  let {
    className: t
  } = e;
  return (0, l.jsxs)("div", {
    "aria-hidden": "true",
    className: r()(P.iconContainer, t),
    children: [(0, l.jsx)(N.Z, {
      className: P.iconSparklePlus
    }), (0, l.jsx)(o.LinkIcon, {
      size: "custom",
      color: "currentColor",
      className: P.iconLink,
      width: 40,
      height: 40
    }), (0, l.jsx)(Z.Z, {
      className: P.iconSparkleStar
    })]
  })
}

function y(e) {
  let {
    transitionState: t
  } = e, n = (0, I.Dt)(), {
    analyticsLocations: i
  } = (0, d.ZP)(c.Z.INVITE_MODAL);
  return (0, l.jsx)(d.Gt, {
    value: i,
    children: (0, l.jsx)(o.ModalRoot, {
      size: o.ModalSize.DYNAMIC,
      "aria-labelledby": n,
      transitionState: t,
      children: (0, l.jsxs)(o.ModalContent, {
        className: P.errorContent,
        children: [(0, l.jsx)(D, {
          className: P.errorImage
        }), (0, l.jsx)(o.Heading, {
          id: n,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: O.Z.Messages.INVITE_MODAL_ERROR_INVALID_TITLE
        }), (0, l.jsx)("div", {
          className: P.errorBody,
          children: O.Z.Messages.INVITE_MODAL_ERROR_INVALID_BODY
        }), (0, l.jsx)(h.zx, {
          size: h.zx.Sizes.LARGE,
          onClick: () => v.Z.close(),
          color: h.zx.Colors.BRAND,
          children: O.Z.Messages.INVITE_MODAL_ERROR_BUTTON_TEXT
        })]
      })
    })
  })
}

function U(e) {
  let t, n, {
    transitionState: s
  } = e;
  (0, a.e7)([E.default], () => {
    var e;
    return null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.premiumType
  });
  let {
    invite: m,
    error: _,
    submitting: N
  } = (0, a.cj)([A.Z], () => A.Z.getProps());
  i.useEffect(() => {
    !__OVERLAY__ && T.isPlatformEmbedded && ((0, T.isWindows)() ? L.ZP.minimize() : L.ZP.restore(), L.ZP.focus())
  }, []);
  let Z = (0, I.Dt)(),
    {
      analyticsLocations: S
    } = (0, d.ZP)(c.Z.INVITE_MODAL);
  if (null == m) return null;
  if (m.state === M.r2o.EXPIRED || m.state === M.r2o.BANNED || m.state === M.r2o.ERROR) return (0, l.jsx)(y, {
    transitionState: s
  });
  if (null == m.channel) return null;

  function R() {
    null != m && v.Z.acceptInvite(m)
  }
  let {
    guild: D,
    channel: U,
    inviter: G,
    target_application: w
  } = m, k = null != D, B = null != m.stage_instance, V = null == m.guild && null == m.channel && null != m.inviter;
  if (null != w) t = null == D ? void 0 : D.name, n = C.Z.createFromServer(w).getCoverImageURL(1024);
  else if (null != D) t = D.name, n = x.ZP.getGuildSplashURL({
    id: D.id,
    splash: D.splash
  });
  else if ((null == (t = U.name) || "" === t) && null != G && (t = G.username), null == t) throw Error("no name for group DM invite");
  let H = (0, p.yU)(),
    F = B ? O.Z.Messages.INSTANT_INVITE_ACCEPT_STAGE : O.Z.Messages.INVITE_MODAL_BUTTON.format({
      guildName: t
    });
  return V && (F = O.Z.Messages.ACCEPT_INVITE_MODAL_BUTTON), (0, l.jsx)(d.Gt, {
    value: S,
    children: (0, l.jsxs)(o.ModalRoot, {
      size: o.ModalSize.DYNAMIC,
      "aria-labelledby": Z,
      transitionState: s,
      className: P.container,
      children: [(0, l.jsx)("div", {
        className: P.contentWrapper,
        children: (0, l.jsx)(o.Scroller, {
          className: P.scroller,
          children: (0, l.jsxs)(f.Z, {
            className: P.inviteContent,
            direction: f.Z.Direction.VERTICAL,
            justify: f.Z.Justify.BETWEEN,
            children: [(0, l.jsx)("div", {
              id: Z,
              className: j.marginBottom20,
              children: (0, l.jsx)(u.Z, {
                invite: m,
                disableUser: k,
                error: _
              })
            }), B && null != D ? (0, l.jsx)("div", {
              className: r()(j.marginBottom20, P.stage),
              children: (0, l.jsx)(g.Z, {
                isCard: !0,
                stageInstance: m.stage_instance,
                guild: D
              })
            }) : null, (0, l.jsxs)("div", {
              children: [H ? (0, l.jsx)(b, {}) : null, null == w ? (0, l.jsx)(o.Tooltip, {
                text: H ? O.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION : null,
                position: "bottom",
                children: e => {
                  let {
                    onMouseEnter: t,
                    onMouseLeave: n
                  } = e;
                  return (0, l.jsx)(h.zx, {
                    size: h.zx.Sizes.LARGE,
                    onClick: R,
                    submitting: N,
                    disabled: H,
                    color: B ? h.zx.Colors.GREEN : h.zx.Colors.BRAND,
                    onMouseEnter: t,
                    onMouseLeave: n,
                    children: H ? O.Z.Messages.GUILD_CAP_INVITE_MODAL_BUTTON : F
                  })
                }
              }) : (0, l.jsxs)("div", {
                className: P.buttonGroup,
                children: [(0, l.jsx)(h.zx, {
                  size: h.zx.Sizes.LARGE,
                  onClick: R,
                  submitting: N,
                  children: O.Z.Messages.PLAY
                }), (0, l.jsx)(h.zx, {
                  color: h.zx.Colors.PRIMARY,
                  size: h.zx.Sizes.LARGE,
                  onClick: R,
                  submitting: N,
                  children: O.Z.Messages.SPECTATE
                })]
              }), (0, l.jsx)(f.Z, {
                justify: f.Z.Justify.CENTER,
                className: j.marginTop8,
                children: (0, l.jsx)(h.zx, {
                  look: h.zx.Looks.LINK,
                  className: P.noThanksButton,
                  onClick: function() {
                    v.Z.close()
                  },
                  color: h.zx.Colors.TRANSPARENT,
                  children: O.Z.Messages.INIVTE_MODAL_NO_THANKS
                })
              })]
            })]
          })
        })
      }), null != n && (0, l.jsx)("div", {
        className: P.inviteSplash,
        style: {
          backgroundImage: "url(".concat(n, ")")
        }
      })]
    })
  })
}