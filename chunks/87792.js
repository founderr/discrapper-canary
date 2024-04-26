"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("512722"),
  i = a.n(l),
  r = a("399606"),
  o = a("481060"),
  u = a("794358"),
  d = a("507893"),
  c = a("626135"),
  f = a("709054"),
  E = a("914788"),
  h = a("546791"),
  _ = a("259756"),
  C = a("785681"),
  m = a("985002"),
  S = a("858719"),
  p = a("780985"),
  I = a("880257"),
  T = a("631885"),
  g = a("240351"),
  A = a("792258"),
  N = a("657825"),
  v = a("198952"),
  R = a("329242"),
  L = a("895328"),
  O = a("292352"),
  M = a("981631"),
  P = a("689938"),
  x = a("27155");

function y() {
  let e = s.useCallback(() => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("66462")]).then(a.bind(a, "756226"));
      return t => (0, n.jsx)(e, {
        ...t
      })
    })
  }, []);
  return (0, n.jsx)(o.Clickable, {
    className: x.tooltip,
    onClick: e,
    children: (0, n.jsx)(d.default, {
      className: x.icon,
      width: 15,
      height: 15
    })
  })
}

function D(e) {
  let {
    displayType: t
  } = e, a = s.useCallback(() => {
    (0, o.showToast)((0, o.createToast)(P.default.Messages.FAMILY_CENTER_ERROR_GENERIC_TOAST, o.ToastType.FAILURE))
  }, []), l = (0, I.default)(), r = (0, S.useActionsForDisplayType)(t), u = (0, S.useActionTotalsForDisplayType)(t), {
    loadMore: d,
    isMoreLoading: c
  } = (0, m.useFamilyCenterActions)({
    onError: a
  }), E = O.ACTION_TO_TEXT.get(t), [C, p] = s.useState(O.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS), T = (0, _.useIsEligibleForFamilyCenterVCJoin)({
    location: "family_center_activity_section_web"
  }), g = s.useCallback(() => {
    p(e => e + O.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS), d(t)
  }, [t, d]);
  i()(E, "No text for action type");
  let v = E.sectionHeader(u),
    R = s.useCallback(e => {
      let {
        row: t
      } = e, a = r[t];
      return (0, h.isUserAction)(a) ? (0, n.jsx)(N.default, {
        userId: a.entity_id,
        timestamp: f.default.extractTimestamp(a.event_id),
        timestampFormatter: E.timestampFormatter
      }, a.event_id) : (0, h.isGuildAction)(a) ? (0, n.jsx)(A.default, {
        guildId: a.entity_id
      }, a.event_id) : void 0
    }, [r, E.timestampFormatter]),
    L = s.useCallback(() => (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(o.Text, {
        className: x.sectionHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: v
      }), void 0 !== E.sectionDescription ? (0, n.jsx)(o.Text, {
        className: x.sectionDescription,
        variant: "text-md/medium",
        color: "text-muted",
        children: E.sectionDescription(null != l && l, T)
      }) : null]
    }), [v, E, l, T]);
  if (0 === r.length) return null;
  let M = r.slice(0, C);
  return (0, n.jsxs)("div", {
    className: x.actionSection,
    children: [L(), (0, n.jsx)("div", {
      className: x.actions,
      style: {
        maxHeight: 65 * M.length
      },
      children: M.map((e, t) => R({
        row: t
      }))
    }), M.length !== u ? (0, n.jsx)(o.Clickable, {
      className: x.loadMoreBar,
      onClick: g,
      role: "button",
      children: c ? (0, n.jsx)(o.Spinner, {
        type: o.Spinner.Type.PULSING_ELLIPSIS,
        className: x.spinner
      }) : (0, n.jsx)(o.Text, {
        className: x.loadMore,
        variant: "text-sm/bold",
        children: P.default.Messages.FAMILY_CENTER_ACTIVITY_MORE.format({
          pageSize: Math.min(u - M.length, O.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS)
        })
      })
    }) : null]
  })
}
let b = () => {
    let e = (0, I.default)(),
      t = (0, T.useUserForLinkStatus)(O.UserLinkStatus.ACTIVE),
      a = (0, C.useAgeSpecificText)(P.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_TEEN.format({
        activeLinks: t.length
      }), P.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_PARENT),
      s = (0, h.getActivityWindowTimestampFormatter)(!!e),
      l = (0, T.useActivityWindowTimeStamp)(s);
    return e && t.length > 1 ? (0, n.jsx)(o.Text, {
      variant: "eyebrow",
      children: l
    }) : (0, n.jsxs)(n.Fragment, {
      children: [e ? null : (0, n.jsx)(u.default, {
        className: x.icon
      }), (0, n.jsx)(o.Text, {
        variant: "eyebrow",
        children: a
      })]
    })
  },
  U = e => {
    let {
      userId: t,
      subText: a,
      avatarSize: s = o.AvatarSizes.SIZE_40
    } = e, l = (0, p.useTeenUserForId)(t);
    return void 0 === l ? null : (0, n.jsxs)("div", {
      className: x.accountRow,
      children: [(0, n.jsx)(v.FamilyCenterAvatar, {
        user: l,
        avatarSize: s
      }), (0, n.jsxs)("div", {
        className: x.headerText,
        children: [(0, n.jsx)(R.default, {
          user: l
        }), void 0 !== a ? (0, n.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: a
        }) : null]
      })]
    })
  },
  j = () => {
    let e = (0, T.useUserForLinkStatus)(O.UserLinkStatus.ACTIVE),
      t = (0, r.useStateFromStores)([E.default], () => E.default.getSelectedTeenId()),
      {
        selectTeenUser: a
      } = (0, m.useFamilyCenterActions)({}),
      l = e.map(e => ({
        label: e.id,
        value: e.id
      })),
      i = s.useCallback(e => (0, n.jsx)(U, {
        userId: e.value,
        avatarSize: o.AvatarSizes.SIZE_24
      }), []);
    return (0, n.jsx)(o.Select, {
      className: x.select,
      renderOptionLabel: i,
      renderOptionValue: e => {
        let [t] = e;
        return i(t)
      },
      serialize: e => e,
      select: e => {
        a(e), c.default.track(M.AnalyticEvents.FAMILY_CENTER_ACTION, {
          action: O.FamilyCenterAction.SelectTeen
        })
      },
      isSelected: e => e === t,
      options: l
    })
  },
  G = e => {
    let {
      userId: t
    } = e, a = (0, I.default)(), s = (0, T.useUserForLinkStatus)(O.UserLinkStatus.ACTIVE), l = (0, h.getActivityWindowTimestampFormatter)(!!a), i = (0, T.useActivityWindowTimeStamp)(l);
    return a && 1 !== s.length ? (0, n.jsx)(j, {}) : (0, n.jsx)(U, {
      userId: t,
      subText: i
    })
  };
t.default = e => {
  let {
    user: t
  } = e, a = Array.from(O.ACTION_TO_TEXT.entries()), s = (0, S.useHasActionForAnyDisplayType)(), l = (0, h.getEmptyActivityFormatter)(), i = (0, T.useActivityWindowTimeStamp)(l);
  return (0, n.jsxs)("div", {
    className: x.container,
    children: [(0, n.jsxs)("div", {
      className: x.connectedCounter,
      children: [(0, n.jsx)(b, {}), (0, n.jsx)(y, {})]
    }), (0, n.jsxs)("div", {
      className: x.card,
      children: [(0, n.jsx)("div", {
        className: x.header,
        children: (0, n.jsx)(G, {
          userId: t.id
        })
      }), (0, n.jsxs)("div", {
        className: x.content,
        children: [(0, n.jsx)("div", {
          className: x.activityCounterRow,
          children: a.map(e => {
            let [t, a] = e;
            return (0, n.jsx)(g.default, {
              displayType: t,
              header: a.tooltipHeader()
            }, "counter-".concat(t))
          })
        }), (0, n.jsx)("div", {
          className: x.activityOverview,
          children: s ? a.map(e => {
            let [t] = e;
            return (0, n.jsx)(D, {
              displayType: t
            }, "".concat(t, "-list"))
          }) : (0, n.jsx)(L.default, {
            className: x.emptyActivity,
            text: null != i ? i : ""
          })
        })]
      })]
    })]
  })
}