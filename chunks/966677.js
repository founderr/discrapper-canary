"use strict";
a.r(e), a.d(e, {
  ConnectedSafetyHubViolationsContainer: function() {
    return R
  }
}), a("222007");
var n = a("37983"),
  s = a("884691"),
  i = a("414456"),
  l = a.n(i),
  u = a("446674"),
  r = a("779807"),
  c = a("77078"),
  o = a("461380"),
  d = a("543289"),
  _ = a("300113"),
  S = a("599110"),
  E = a("299039"),
  T = a("667963"),
  f = a("646356"),
  A = a("736393"),
  I = a("310888"),
  g = a("132206"),
  N = a("698609"),
  C = a("170213"),
  m = a("49111"),
  U = a("782340"),
  p = a("231180");
let h = t => {
    let {
      status: e,
      onClick: a,
      opened: s,
      count: i
    } = t;
    return (0, n.jsxs)(c.Clickable, {
      className: p.header,
      onClick: a,
      children: [(0, n.jsx)("div", {
        className: p.headerIconWrapper,
        children: (0, n.jsx)(r.WarningIcon, {
          color: "active" === e ? c.tokens.colors.INTERACTIVE_ACTIVE : c.tokens.colors.INTERACTIVE_MUTED,
          width: 24,
          height: 24
        })
      }), (0, n.jsxs)("div", {
        className: p.title,
        children: [(0, n.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          color: "text-normal",
          children: "active" === e ? U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_ACTIVE.format({
            count: i.toString()
          }) : U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_EXPIRED.format({
            count: i.toString()
          })
        }), (0, n.jsx)(c.Heading, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: "active" === e ? U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_ACTIVE : U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_EXPIRED
        })]
      }), (0, n.jsx)("div", {
        className: p.caret,
        children: (0, n.jsx)(o.default, {
          width: 18,
          height: 18,
          direction: s ? o.default.Directions.UP : o.default.Directions.DOWN
        })
      })]
    })
  },
  x = () => (0, n.jsxs)("div", {
    className: p.emptyState,
    children: [(0, n.jsxs)("div", {
      className: p.iconContainer,
      children: [(0, n.jsx)("div", {
        className: p.iconBackground,
        children: (0, n.jsx)(_.default, {
          className: p.icon
        })
      }), (0, n.jsx)(d.default, {
        className: p.stars
      })]
    }), (0, n.jsx)(c.Heading, {
      variant: "heading-md/bold",
      className: p.emptyStateText,
      children: U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_ACTIVE
    }), (0, n.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: p.emptyStateSubtext,
      children: U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_SUBTEXT_ACTIVE
    })]
  }),
  H = () => (0, n.jsx)("div", {
    className: p.emptyState,
    children: (0, n.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: p.emptyStateSubtext,
      children: U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_EXPIRED
    })
  }),
  O = t => {
    let {
      timestamp: e
    } = t;
    return (0, n.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: p.timestamp,
      children: (0, A.getClassificationRelativeIncidentTime)(e)
    })
  },
  D = () => (0, n.jsx)(c.Text, {
    variant: "text-xs/bold",
    className: p.newBadge,
    children: U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_NEW
  }),
  F = t => {
    var e;
    let {
      classification: s
    } = t, {
      id: i,
      description: u,
      max_expiration_time: r
    } = s, o = E.default.extractTimestamp(i), d = (0, I.useIsNewClassification)(s), _ = (0, T.useIsSafetyHubDisplayGuildViolationsEnabled)("violations_container"), S = new Date(r), f = S.toDateString();
    return (0, n.jsx)(c.Clickable, {
      onClick: () => {
        (0, c.openModalLazy)(async () => {
          let {
            default: t
          } = await a.el("825138").then(a.bind(a, "825138"));
          return e => (0, n.jsx)(t, {
            classificationId: i,
            source: C.SafetyHubAnalyticsActionSource.StandingTab,
            ...e
          })
        })
      },
      className: l(p.itemDetail, {
        [p.itemDetailNew]: d
      }),
      children: (0, n.jsxs)("div", {
        className: p.descriptionContainer,
        children: [d ? (0, n.jsx)(D, {}) : (0, n.jsx)(O, {
          timestamp: o
        }), (0, n.jsx)(c.Heading, {
          variant: "heading-lg/normal",
          children: _ && null != s.guild_metadata ? U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION_GUILD.format({
            guildName: null == s ? void 0 : null === (e = s.guild_metadata) || void 0 === e ? void 0 : e.name,
            description: u,
            descriptionHook: t => (0, n.jsx)(c.Text, {
              tag: "span",
              variant: "heading-lg/bold",
              children: t
            })
          }) : U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION.format({
            description: u,
            descriptionHook: t => (0, n.jsx)(c.Text, {
              tag: "span",
              variant: "heading-lg/bold",
              children: t
            })
          })
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: p.expirationDate,
          children: S > new Date ? U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_ACTIVE.format({
            expirationDate: f
          }) : U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_EXPIRED.format({
            expirationDate: f
          })
        })]
      })
    }, i)
  },
  v = t => {
    let {
      status: e,
      classifications: a
    } = t, [i, l] = s.useState(!1), [r, o] = s.useState(3), d = (0, g.useSafetyHubAccountStanding)(), _ = (0, u.useStateFromStores)([f.default], () => f.default.getIsDsaEligible()), E = s.useMemo(() => a.slice(0, r), [a, r]);
    s.useEffect(() => {
      i && S.default.track(m.AnalyticEvents.SAFETY_HUB_ACTION, {
        action: C.SafetyHubAnalyticsActions.ViewViolationsDropdown,
        account_standing: d.state,
        classification_ids: E.map(t => Number(t.id)),
        source: C.SafetyHubAnalyticsActionSource.StandingTab,
        is_violative_content_shown: !1,
        is_dsa_eligible: _
      })
    }, [i, d.state, E, _]);
    let T = a.length - E.length > 3 ? 3 : a.length - E.length;
    return (0, n.jsxs)("div", {
      className: p.dropdown,
      children: [(0, n.jsx)(h, {
        status: e,
        onClick: () => l(t => !t),
        opened: i,
        count: a.length
      }), i && (0, n.jsxs)("div", {
        className: p.items,
        children: [(0, n.jsx)(c.TabBar.Separator, {
          style: {
            height: "1px",
            width: "100%"
          }
        }), E.length > 0 && E.map(t => (0, n.jsx)(F, {
          classification: t
        }, t.id)), E.length < a.length && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(c.TabBar.Separator, {
            style: {
              height: "1px",
              width: "100%"
            }
          }), (0, n.jsx)("button", {
            className: p.paginationButton,
            onClick: () => o(t => t + T),
            children: U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_PAGINATION_BUTTON.format({
              nextPageSize: T
            })
          })]
        }), 0 === E.length && "active" === e && (0, n.jsx)(x, {}), 0 === E.length && "expired" === e && (0, n.jsx)(H, {})]
      })]
    })
  },
  R = () => {
    let t = (0, N.useActiveSafetyHubClassifications)(),
      e = (0, N.useExpiredSafetyHubClassifications)();
    return 0 === t.length && 0 === e.length ? null : (0, n.jsxs)("div", {
      children: [(0, n.jsx)(v, {
        status: "active",
        classifications: t
      }), (0, n.jsx)(v, {
        status: "expired",
        classifications: e
      })]
    })
  }