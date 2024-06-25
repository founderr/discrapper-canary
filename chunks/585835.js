t.d(n, {
  Z: function() {
    return x
  }
}), t(653041), t(47120);
var i = t(735250),
  l = t(470079),
  s = t(120356),
  a = t.n(s),
  r = t(243814),
  o = t(442837),
  c = t(481060),
  d = t(367907),
  u = t(213459),
  I = t(488915),
  N = t(970731),
  E = t(598077),
  T = t(285952),
  m = t(626135),
  _ = t(486199),
  h = t(929507),
  g = t(981631),
  O = t(689938),
  A = t(509770);

function x(e) {
  var n, t, s, x, C, S, p;
  let {
    name: R,
    icon: Z,
    imageSrc: f,
    iconBackgroundColor: M,
    iconClassName: L,
    details: v,
    integration: j,
    buttonText: b,
    buttonDisabled: P,
    hasNextSection: D,
    onButtonClick: B,
    guildId: G,
    isScrolling: y,
    canShowMigrationTooltip: k
  } = e, [U, H] = l.useState(!1), [W, w] = l.useState(!1);
  let F = (x = b, C = P, S = D, p = B, null == x || null == p ? null : S ? (0, i.jsxs)(T.Z, {
      align: T.Z.Align.CENTER,
      children: [(0, i.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: x
      }), S ? (0, i.jsx)(c.ChevronSmallRightIcon, {
        size: "custom",
        color: "currentColor",
        width: 10,
        height: 10,
        className: A.caret
      }) : null]
    }) : (0, i.jsx)(c.Button, {
      size: c.Button.Sizes.SMALL,
      look: S ? c.Button.Looks.LINK : c.Button.Looks.FILLED,
      color: S ? c.Button.Colors.PRIMARY : c.Button.Colors.BRAND,
      disabled: C,
      onClick: p,
      children: x
    })),
    V = k && !y && !W && void 0 !== G && null != j;
  l.useEffect(() => {
    V && m.default.track(g.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
      ...(0, d.hH)(G),
      application_id: null == j ? void 0 : j.application.id,
      location: "overview"
    })
  }, [G, null == j ? void 0 : j.application.id, V]);
  let K = V ? (0, i.jsx)(c.Popout, {
      renderPopout: () => (0, i.jsx)(c.Clickable, {
        onClick: e => {
          e.stopPropagation(), w(!0), h.Z.dismissOverviewTooltip(G, j.integration)
        },
        children: (0, i.jsx)(N.ZP, {
          content: O.Z.Messages.COMMANDS_SCOPE_MIGRATION_OVERVIEW_TOOLTIP,
          onClick: () => {}
        })
      }),
      position: "bottom",
      align: "center",
      animation: c.Popout.Animation.TRANSLATE,
      shouldShow: !0,
      children: () => F
    }) : F,
    Y = (0, o.Wu)([I.Z], () => {
      var e;
      return null != j && null != G && null !== (e = I.Z.getApplicationEntitlementsForGuild(j.application.id, G)) && void 0 !== e ? e : []
    }),
    z = (0, u.LD)(G, !0),
    q = (null == j ? void 0 : j.application) != null && Object.keys(null !== (s = null === (t = z.result) || void 0 === t ? void 0 : null === (n = t.sections[j.application.id]) || void 0 === n ? void 0 : n.commands) && void 0 !== s ? s : {}).length > 0,
    J = (0, i.jsxs)(T.Z, {
      children: [(0, i.jsx)(_.Z, {
        name: R,
        icon: Z,
        imageSrc: f,
        iconBackgroundColor: M,
        iconClassName: L,
        details: v,
        isPremium: Y.length > 0
      }), (0, i.jsx)(T.Z.Child, {
        shrink: 0,
        grow: 0,
        children: (0, i.jsxs)(T.Z, {
          align: T.Z.Align.CENTER,
          justify: T.Z.Justify.END,
          children: [function(e, n, t) {
            var l;
            if (null == e) return null;
            let s = [],
              {
                application: a,
                integration: o,
                webhooks: d
              } = e;
            return null != a.bot && s.push((0, i.jsx)(c.TooltipContainer, {
              forceOpen: n,
              text: new E.Z(a.bot).isVerifiedBot() ? O.Z.Messages.INTEGRATIONS_APPLICATION_VERIFIED_BOT : O.Z.Messages.INTEGRATIONS_APPLICATION_BOT,
              className: A.feature,
              children: (0, i.jsx)(c.RobotIcon, {
                size: "md",
                color: "currentColor",
                className: A.featureIcon
              })
            }, "bot")), d.length > 0 && s.push((0, i.jsx)(c.TooltipContainer, {
              forceOpen: n,
              text: O.Z.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({
                count: d.length
              }),
              className: A.feature,
              children: (0, i.jsx)(c.WebhookIcon, {
                size: "md",
                color: "currentColor",
                className: A.featureIcon
              })
            }, "webhooks")), (null == o ? void 0 : null === (l = o.scopes) || void 0 === l ? void 0 : l.includes(r.x.APPLICATIONS_COMMANDS)) === !0 && t && s.push((0, i.jsx)("div", {
              className: A.feature,
              children: (0, i.jsx)(c.SlashBoxIcon, {
                size: "md",
                color: "currentColor",
                className: A.featureIcon
              })
            }, "commands")), s
          }(j, U, q), K]
        })
      })]
    });
  return D ? (0, i.jsx)(c.Clickable, {
    onClick: () => {
      k && null != G && null != j && h.Z.dismissOverviewTooltip(G, j.integration), null == B || B()
    },
    onFocus: () => H(!0),
    onBlur: () => H(!1),
    children: (0, i.jsx)(c.Card, {
      editable: !0,
      className: a()(A.card, A.clickable),
      children: J
    })
  }) : (0, i.jsx)(c.Card, {
    editable: !0,
    className: A.card,
    children: J
  })
}