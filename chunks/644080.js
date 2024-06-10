"use strict";
t.r(l);
var a = t("735250"),
  n = t("470079"),
  s = t("120356"),
  i = t.n(s),
  d = t("442837"),
  r = t("692547"),
  u = t("481060"),
  o = t("410030"),
  c = t("637853"),
  f = t("434404"),
  m = t("159300"),
  h = t("496675"),
  g = t("705600"),
  x = t("346656"),
  C = t("976644"),
  v = t("709586"),
  I = t("54264"),
  S = t("768581"),
  N = t("981631"),
  j = t("689938"),
  p = t("418304"),
  E = t("63190"),
  _ = t("102219");
let M = e => {
  let l = n.useMemo(() => null == e ? null : S.default.getGuildHomeHeaderURL({
    id: e.id,
    homeHeader: e.homeHeader
  }), [e]);
  return {
    homeHeaderImage: l,
    isHomeHeaderImageSet: null != l,
    homeHeaderScroll: null != l ? 200 : 0
  }
};

function b(e) {
  let {
    guild: l
  } = e, t = () => {
    f.default.open(l.id, N.GuildSettingsSections.ONBOARDING, void 0, N.GuildSettingsSubsections.SERVER_GUIDE)
  };
  return l.hasFeature(N.GuildFeatures.BANNER) ? (0, a.jsxs)(u.Button, {
    className: p.editButton,
    innerClassName: p.editButtonInner,
    type: "button",
    size: u.Button.Sizes.MEDIUM,
    color: u.Button.Colors.BRAND,
    onClick: t,
    children: [(0, a.jsx)(I.default, {
      height: 16,
      width: 16,
      color: r.default.unsafe_rawColors.WHITE_500.css
    }), j.default.Messages.EDIT_IMAGE]
  }) : (0, a.jsxs)(C.default, {
    color: u.Button.Colors.GREEN,
    className: p.editButton,
    innerClassName: p.editButtonInner,
    onClick: t,
    children: [(0, a.jsx)(v.default, {
      height: 16,
      width: 16
    }), j.default.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA]
  })
}
let A = n.memo(function(e) {
  let {
    guild: l,
    titleClassName: n
  } = e, {
    homeHeaderImage: s,
    isHomeHeaderImageSet: r
  } = M(l), f = (0, c.useGuildOnboardingSettingsAvailable)(l.id), C = (0, d.useStateFromStores)([h.default], () => (0, m.canViewInviteModal)(h.default, l)), v = (0, o.default)();
  return (0, a.jsxs)("div", {
    className: p.header,
    children: [(0, a.jsxs)("div", {
      className: p.headerArtWrapper,
      children: [(0, a.jsx)("div", {
        className: i()(p.headerArt, {
          [p.headerArtPlaceholder]: !r
        }),
        style: {
          backgroundImage: "url(".concat(r ? s : "dark" === v ? E : _, ")")
        }
      }), f && (0, a.jsx)(b, {
        guild: l
      })]
    }), (0, a.jsx)("div", {
      className: p.titleWrapper,
      children: (0, a.jsxs)("div", {
        className: n,
        children: [(0, a.jsx)(x.default, {
          className: p.headerIcon,
          guild: l,
          size: x.default.Sizes.XLARGE,
          active: !0
        }), (0, a.jsx)(u.HeadingLevel, {
          children: (0, a.jsxs)("div", {
            className: p.headerName,
            children: [(0, a.jsx)(u.Heading, {
              className: p.headerName,
              variant: "heading-xxl/bold",
              children: l.name
            }), (0, a.jsx)(g.default, {
              size: 24,
              guild: l,
              tooltipPosition: "bottom",
              tooltipColor: u.Tooltip.Colors.PRIMARY
            }), C && (0, a.jsx)(u.Button, {
              className: p.inviteButton,
              size: u.Button.Sizes.MEDIUM,
              color: u.Button.Colors.PRIMARY,
              onClick: () => (0, u.openModalLazy)(async () => {
                let {
                  default: e
                } = await Promise.all([t.e("99387"), t.e("7654")]).then(t.bind(t, "560114"));
                return t => (0, a.jsx)(e, {
                  ...t,
                  guild: l,
                  source: N.InstantInviteSources.GUILD_HOME
                })
              }),
              children: j.default.Messages.INSTANT_INVITE
            })]
          })
        })]
      })
    })]
  })
});
l.default = A