"use strict";
a.r(e), a.d(e, {
  ConnectedSafetyHubViolationsContainer: function() {
    return b
  }
}), a("47120");
var n = a("735250"),
  i = a("470079"),
  s = a("120356"),
  l = a.n(s),
  u = a("442837"),
  r = a("495056"),
  o = a("481060"),
  c = a("259580"),
  d = a("499033"),
  _ = a("783539"),
  S = a("626135"),
  E = a("709054"),
  T = a("219230"),
  f = a("531441"),
  A = a("236289"),
  I = a("788080"),
  g = a("467432"),
  N = a("451284"),
  C = a("613734"),
  p = a("800530"),
  m = a("981631"),
  U = a("689938"),
  H = a("631853");
let h = t => {
    let {
      status: e,
      onClick: a,
      opened: i,
      count: s
    } = t;
    return (0, n.jsxs)(o.Clickable, {
      className: H.header,
      onClick: a,
      children: [(0, n.jsx)("div", {
        className: H.headerIconWrapper,
        children: (0, n.jsx)(r.WarningIcon, {
          color: "active" === e ? o.tokens.colors.INTERACTIVE_ACTIVE : o.tokens.colors.INTERACTIVE_MUTED,
          width: 24,
          height: 24
        })
      }), (0, n.jsxs)("div", {
        className: H.title,
        children: [(0, n.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          color: "text-normal",
          children: "active" === e ? U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_ACTIVE_V2.format({
            count: s.toString()
          }) : U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_EXPIRED_V2.format({
            count: s.toString()
          })
        }), (0, n.jsx)(o.Heading, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: "active" === e ? U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_ACTIVE_V2 : U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_EXPIRED_V2
        })]
      }), (0, n.jsx)("div", {
        className: H.caret,
        children: (0, n.jsx)(c.default, {
          width: 18,
          height: 18,
          direction: i ? c.default.Directions.UP : c.default.Directions.DOWN
        })
      })]
    })
  },
  x = () => (0, n.jsxs)("div", {
    className: H.emptyState,
    children: [(0, n.jsxs)("div", {
      className: H.iconContainer,
      children: [(0, n.jsx)("div", {
        className: H.iconBackground,
        children: (0, n.jsx)(_.default, {
          className: H.icon
        })
      }), (0, n.jsx)(d.default, {
        className: H.stars
      })]
    }), (0, n.jsx)(o.Heading, {
      variant: "heading-md/bold",
      className: H.emptyStateText,
      children: U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_ACTIVE
    }), (0, n.jsx)(o.Text, {
      variant: "text-xs/normal",
      className: H.emptyStateSubtext,
      children: U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_SUBTEXT_ACTIVE
    })]
  }),
  O = () => (0, n.jsx)("div", {
    className: H.emptyState,
    children: (0, n.jsx)(o.Text, {
      variant: "text-xs/normal",
      className: H.emptyStateSubtext,
      children: U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_EXPIRED
    })
  }),
  D = t => {
    let {
      timestamp: e
    } = t;
    return (0, n.jsx)(o.Text, {
      variant: "text-xs/normal",
      className: H.timestamp,
      children: (0, I.getClassificationRelativeIncidentTime)(e)
    })
  },
  F = () => (0, n.jsx)(o.Text, {
    variant: "text-xs/bold",
    className: H.newBadge,
    children: U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_NEW
  }),
  v = t => {
    let {
      classification: e
    } = t, {
      id: s,
      description: u,
      max_expiration_time: r
    } = e, c = E.default.extractTimestamp(s), d = (0, g.useIsNewClassification)(e), _ = (0, T.useIsSafetyHubDisplayGuildViolationsEnabled)("violations_container"), S = i.useMemo(() => {
      var t, a, i;
      let s = {
        description: u,
        descriptionHook: t => (0, n.jsx)(o.Text, {
          tag: "span",
          variant: "heading-lg/bold",
          children: t
        })
      };
      if (!(_ && (0, I.isGuildClassification)(e))) return U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION.format(s);
      return (null == e ? void 0 : null === (t = e.guild_metadata) || void 0 === t ? void 0 : t.member_type) === f.MemberType.OWNER ? U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION_GUILD.format({
        ...s,
        guildName: null == e ? void 0 : null === (a = e.guild_metadata) || void 0 === a ? void 0 : a.name
      }) : U.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD_PRESENCE.format({
        guildName: null == e ? void 0 : null === (i = e.guild_metadata) || void 0 === i ? void 0 : i.name,
        classification_type: s.description,
        classificationHook: s.descriptionHook
      })
    }, [e, u, _]), A = new Date(r), N = A.toDateString();
    return (0, n.jsx)(o.Clickable, {
      onClick: () => {
        (0, o.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([a.e("49237"), a.e("99387"), a.e("58286"), a.e("18831"), a.e("98154")]).then(a.bind(a, "41164"));
          return e => (0, n.jsx)(t, {
            classificationId: s,
            source: p.SafetyHubAnalyticsActionSource.StandingTab,
            ...e
          })
        })
      },
      className: l()(H.itemDetail, {
        [H.itemDetailNew]: d
      }),
      children: (0, n.jsxs)("div", {
        className: H.descriptionContainer,
        children: [d ? (0, n.jsx)(F, {}) : (0, n.jsx)(D, {
          timestamp: c
        }), (0, n.jsx)(o.Heading, {
          variant: "heading-lg/normal",
          children: S
        }), (0, n.jsx)(o.Text, {
          variant: "text-sm/normal",
          className: H.expirationDate,
          children: A > new Date ? U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_ACTIVE.format({
            expirationDate: N
          }) : U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_EXPIRED.format({
            expirationDate: N
          })
        })]
      })
    }, s)
  },
  R = t => {
    let {
      status: e,
      classifications: a
    } = t, [s, l] = i.useState(!1), [r, c] = i.useState(3), d = (0, N.useSafetyHubAccountStanding)(), _ = (0, u.useStateFromStores)([A.default], () => A.default.getIsDsaEligible()), E = i.useMemo(() => a.slice(0, r), [a, r]);
    i.useEffect(() => {
      s && S.default.track(m.AnalyticEvents.SAFETY_HUB_ACTION, {
        action: p.SafetyHubAnalyticsActions.ViewViolationsDropdown,
        account_standing: d.state,
        classification_ids: E.map(t => Number(t.id)),
        source: p.SafetyHubAnalyticsActionSource.StandingTab,
        is_violative_content_shown: !1,
        is_dsa_eligible: _
      })
    }, [s, d.state, E, _]);
    let T = a.length - E.length > 3 ? 3 : a.length - E.length;
    return (0, n.jsxs)("div", {
      className: H.dropdown,
      children: [(0, n.jsx)(h, {
        status: e,
        onClick: () => l(t => !t),
        opened: s,
        count: a.length
      }), s && (0, n.jsxs)("div", {
        className: H.items,
        children: [(0, n.jsx)(o.TabBar.Separator, {
          style: {
            height: "1px",
            width: "100%"
          }
        }), E.length > 0 && E.map(t => (0, n.jsx)(v, {
          classification: t
        }, t.id)), E.length < a.length && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(o.TabBar.Separator, {
            style: {
              height: "1px",
              width: "100%"
            }
          }), (0, n.jsx)("button", {
            className: H.paginationButton,
            onClick: () => c(t => t + T),
            children: U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_PAGINATION_BUTTON.format({
              nextPageSize: T
            })
          })]
        }), 0 === E.length && "active" === e && (0, n.jsx)(x, {}), 0 === E.length && "expired" === e && (0, n.jsx)(O, {})]
      })]
    })
  },
  b = () => {
    let t = (0, C.useActiveSafetyHubClassifications)(),
      e = (0, C.useExpiredSafetyHubClassifications)();
    return 0 === t.length && 0 === e.length ? null : (0, n.jsxs)("div", {
      children: [(0, n.jsx)(R, {
        status: "active",
        classifications: t
      }), (0, n.jsx)(R, {
        status: "expired",
        classifications: e
      })]
    })
  }