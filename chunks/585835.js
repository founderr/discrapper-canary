"use strict";
l.r(t), l.d(t, {
  default: function() {
    return x
  }
}), l("653041"), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("243814"),
  o = l("442837"),
  d = l("481060"),
  u = l("367907"),
  c = l("213459"),
  f = l("488915"),
  m = l("970731"),
  I = l("598077"),
  T = l("285952"),
  N = l("377617"),
  E = l("692437"),
  S = l("912527"),
  g = l("202597"),
  p = l("626135"),
  h = l("486199"),
  _ = l("929507"),
  O = l("981631"),
  A = l("689938"),
  C = l("514986");

function x(e) {
  var t, l, s, x, R, M, v;
  let {
    name: L,
    icon: j,
    imageSrc: P,
    iconBackgroundColor: b,
    iconClassName: D,
    details: y,
    integration: G,
    buttonText: B,
    buttonDisabled: k,
    hasNextSection: H,
    onButtonClick: U,
    guildId: F,
    isScrolling: W,
    canShowMigrationTooltip: w
  } = e, [V, Y] = a.useState(!1), [K, z] = a.useState(!1);
  let Z = (x = B, R = k, M = H, v = U, null == x || null == v ? null : M ? (0, n.jsxs)(T.default, {
      align: T.default.Align.CENTER,
      children: [(0, n.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: x
      }), M ? (0, n.jsx)(E.default, {
        width: 10,
        height: 10,
        className: C.caret
      }) : null]
    }) : (0, n.jsx)(d.Button, {
      size: d.Button.Sizes.SMALL,
      look: M ? d.Button.Looks.LINK : d.Button.Looks.FILLED,
      color: M ? d.Button.Colors.PRIMARY : d.Button.Colors.BRAND,
      disabled: R,
      onClick: v,
      children: x
    })),
    q = w && !W && !K && void 0 !== F && null != G;
  a.useEffect(() => {
    q && p.default.track(O.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
      ...(0, u.collectGuildAnalyticsMetadata)(F),
      application_id: null == G ? void 0 : G.application.id,
      location: "overview"
    })
  }, [F, null == G ? void 0 : G.application.id, q]);
  let J = q ? (0, n.jsx)(d.Popout, {
      renderPopout: () => (0, n.jsx)(d.Clickable, {
        onClick: e => {
          e.stopPropagation(), z(!0), _.default.dismissOverviewTooltip(F, G.integration)
        },
        children: (0, n.jsx)(m.default, {
          content: A.default.Messages.COMMANDS_SCOPE_MIGRATION_OVERVIEW_TOOLTIP,
          onClick: () => {}
        })
      }),
      position: "bottom",
      align: "center",
      animation: d.Popout.Animation.TRANSLATE,
      shouldShow: !0,
      children: () => Z
    }) : Z,
    X = (0, o.useStateFromStoresArray)([f.default], () => {
      var e;
      return null != G && null != F && null !== (e = f.default.getApplicationEntitlementsForGuild(G.application.id, F)) && void 0 !== e ? e : []
    }),
    Q = (0, c.useGuildIndexState)(F, !0),
    $ = (null == G ? void 0 : G.application) != null && Object.keys(null !== (s = null === (l = Q.result) || void 0 === l ? void 0 : null === (t = l.sections[G.application.id]) || void 0 === t ? void 0 : t.commands) && void 0 !== s ? s : {}).length > 0,
    ee = (0, n.jsxs)(T.default, {
      children: [(0, n.jsx)(h.default, {
        name: L,
        icon: j,
        imageSrc: P,
        iconBackgroundColor: b,
        iconClassName: D,
        details: y,
        isPremium: X.length > 0
      }), (0, n.jsx)(T.default.Child, {
        shrink: 0,
        grow: 0,
        children: (0, n.jsxs)(T.default, {
          align: T.default.Align.CENTER,
          justify: T.default.Justify.END,
          children: [function(e, t, l) {
            var a;
            if (null == e) return null;
            let s = [],
              {
                application: i,
                integration: o,
                webhooks: u
              } = e;
            return null != i.bot && s.push((0, n.jsx)(d.TooltipContainer, {
              forceOpen: t,
              text: new I.default(i.bot).isVerifiedBot() ? A.default.Messages.INTEGRATIONS_APPLICATION_VERIFIED_BOT : A.default.Messages.INTEGRATIONS_APPLICATION_BOT,
              className: C.feature,
              children: (0, n.jsx)(S.default, {
                width: 24,
                height: 24,
                className: C.featureIcon
              })
            }, "bot")), u.length > 0 && s.push((0, n.jsx)(d.TooltipContainer, {
              forceOpen: t,
              text: A.default.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({
                count: u.length
              }),
              className: C.feature,
              children: (0, n.jsx)(g.default, {
                width: 24,
                height: 24,
                className: C.featureIcon
              })
            }, "webhooks")), (null == o ? void 0 : null === (a = o.scopes) || void 0 === a ? void 0 : a.includes(r.OAuth2Scopes.APPLICATIONS_COMMANDS)) === !0 && l && s.push((0, n.jsx)("div", {
              className: C.feature,
              children: (0, n.jsx)(N.default, {
                width: 24,
                height: 24,
                className: C.featureIcon
              })
            }, "commands")), s
          }(G, V, $), J]
        })
      })]
    });
  return H ? (0, n.jsx)(d.Clickable, {
    onClick: () => {
      w && null != F && null != G && _.default.dismissOverviewTooltip(F, G.integration), null == U || U()
    },
    onFocus: () => Y(!0),
    onBlur: () => Y(!1),
    children: (0, n.jsx)(d.Card, {
      editable: !0,
      className: i()(C.card, C.clickable),
      children: ee
    })
  }) : (0, n.jsx)(d.Card, {
    editable: !0,
    className: C.card,
    children: ee
  })
}