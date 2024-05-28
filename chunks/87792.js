"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("512722"),
  i = s.n(l),
  r = s("399606"),
  u = s("481060"),
  o = s("794358"),
  d = s("507893"),
  c = s("626135"),
  E = s("709054"),
  _ = s("914788"),
  f = s("546791"),
  h = s("259756"),
  m = s("785681"),
  T = s("985002"),
  C = s("858719"),
  g = s("780985"),
  A = s("880257"),
  N = s("631885"),
  p = s("240351"),
  S = s("792258"),
  I = s("657825"),
  v = s("198952"),
  R = s("329242"),
  x = s("895328"),
  M = s("292352"),
  O = s("981631"),
  L = s("689938"),
  y = s("334611");

function D() {
  let e = n.useCallback(() => {
    (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("66462")]).then(s.bind(s, "756226"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    })
  }, []);
  return (0, a.jsx)(u.Clickable, {
    className: y.tooltip,
    onClick: e,
    children: (0, a.jsx)(d.default, {
      className: y.icon,
      width: 15,
      height: 15
    })
  })
}

function j(e) {
  let {
    displayType: t
  } = e, s = n.useCallback(() => {
    (0, u.showToast)((0, u.createToast)(L.default.Messages.FAMILY_CENTER_ERROR_GENERIC_TOAST, u.ToastType.FAILURE))
  }, []), l = (0, A.default)(), r = (0, C.useActionsForDisplayType)(t), o = (0, C.useActionTotalsForDisplayType)(t), {
    loadMore: d,
    isMoreLoading: c
  } = (0, T.useFamilyCenterActions)({
    onError: s
  }), _ = M.ACTION_TO_TEXT.get(t), [m, g] = n.useState(M.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS), N = (0, h.useIsEligibleForFamilyCenterVCJoin)({
    location: "family_center_activity_section_web"
  }), p = n.useCallback(() => {
    g(e => e + M.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS), d(t)
  }, [t, d]);
  i()(_, "No text for action type");
  let v = _.sectionHeader(o),
    R = n.useCallback(e => {
      let {
        row: t
      } = e, s = r[t];
      return (0, f.isUserAction)(s) ? (0, a.jsx)(I.default, {
        userId: s.entity_id,
        timestamp: E.default.extractTimestamp(s.event_id),
        timestampFormatter: _.timestampFormatter
      }, s.event_id) : (0, f.isGuildAction)(s) ? (0, a.jsx)(S.default, {
        guildId: s.entity_id
      }, s.event_id) : void 0
    }, [r, _.timestampFormatter]),
    x = n.useCallback(() => (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.Text, {
        className: y.sectionHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: v
      }), void 0 !== _.sectionDescription ? (0, a.jsx)(u.Text, {
        className: y.sectionDescription,
        variant: "text-md/medium",
        color: "text-muted",
        children: _.sectionDescription(null != l && l, N)
      }) : null]
    }), [v, _, l, N]);
  if (0 === r.length) return null;
  let O = r.slice(0, m);
  return (0, a.jsxs)("div", {
    className: y.actionSection,
    children: [x(), (0, a.jsx)("div", {
      className: y.actions,
      style: {
        maxHeight: 65 * O.length
      },
      children: O.map((e, t) => R({
        row: t
      }))
    }), O.length !== o ? (0, a.jsx)(u.Clickable, {
      className: y.loadMoreBar,
      onClick: p,
      role: "button",
      children: c ? (0, a.jsx)(u.Spinner, {
        type: u.Spinner.Type.PULSING_ELLIPSIS,
        className: y.spinner
      }) : (0, a.jsx)(u.Text, {
        className: y.loadMore,
        variant: "text-sm/bold",
        children: L.default.Messages.FAMILY_CENTER_ACTIVITY_MORE.format({
          pageSize: Math.min(o - O.length, M.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS)
        })
      })
    }) : null]
  })
}
let b = () => {
    let e = (0, A.default)(),
      t = (0, N.useUserForLinkStatus)(M.UserLinkStatus.ACTIVE),
      s = (0, m.useAgeSpecificText)(L.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_TEEN.format({
        activeLinks: t.length
      }), L.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_PARENT),
      n = (0, f.getActivityWindowTimestampFormatter)(!!e),
      l = (0, N.useActivityWindowTimeStamp)(n);
    return e && t.length > 1 ? (0, a.jsx)(u.Text, {
      variant: "eyebrow",
      children: l
    }) : (0, a.jsxs)(a.Fragment, {
      children: [e ? null : (0, a.jsx)(o.default, {
        className: y.icon
      }), (0, a.jsx)(u.Text, {
        variant: "eyebrow",
        children: s
      })]
    })
  },
  U = e => {
    let {
      userId: t,
      subText: s,
      avatarSize: n = u.AvatarSizes.SIZE_40
    } = e, l = (0, g.useTeenUserForId)(t);
    return void 0 === l ? null : (0, a.jsxs)("div", {
      className: y.accountRow,
      children: [(0, a.jsx)(v.FamilyCenterAvatar, {
        user: l,
        avatarSize: n
      }), (0, a.jsxs)("div", {
        className: y.headerText,
        children: [(0, a.jsx)(R.default, {
          user: l
        }), void 0 !== s ? (0, a.jsx)(u.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: s
        }) : null]
      })]
    })
  },
  P = () => {
    let e = (0, N.useUserForLinkStatus)(M.UserLinkStatus.ACTIVE),
      t = (0, r.useStateFromStores)([_.default], () => _.default.getSelectedTeenId()),
      {
        selectTeenUser: s
      } = (0, T.useFamilyCenterActions)({}),
      l = e.map(e => ({
        label: e.id,
        value: e.id
      })),
      i = n.useCallback(e => (0, a.jsx)(U, {
        userId: e.value,
        avatarSize: u.AvatarSizes.SIZE_24
      }), []);
    return (0, a.jsx)(u.Select, {
      className: y.select,
      renderOptionLabel: i,
      renderOptionValue: e => {
        let [t] = e;
        return i(t)
      },
      serialize: e => e,
      select: e => {
        s(e), c.default.track(O.AnalyticEvents.FAMILY_CENTER_ACTION, {
          action: M.FamilyCenterAction.SelectTeen
        })
      },
      isSelected: e => e === t,
      options: l
    })
  },
  G = e => {
    let {
      userId: t
    } = e, s = (0, A.default)(), n = (0, N.useUserForLinkStatus)(M.UserLinkStatus.ACTIVE), l = (0, f.getActivityWindowTimestampFormatter)(!!s), i = (0, N.useActivityWindowTimeStamp)(l);
    return s && 1 !== n.length ? (0, a.jsx)(P, {}) : (0, a.jsx)(U, {
      userId: t,
      subText: i
    })
  };
t.default = e => {
  let {
    user: t
  } = e, s = Array.from(M.ACTION_TO_TEXT.entries()), n = (0, C.useHasActionForAnyDisplayType)(), l = (0, f.getEmptyActivityFormatter)(), i = (0, N.useActivityWindowTimeStamp)(l);
  return (0, a.jsxs)("div", {
    className: y.container,
    children: [(0, a.jsxs)("div", {
      className: y.connectedCounter,
      children: [(0, a.jsx)(b, {}), (0, a.jsx)(D, {})]
    }), (0, a.jsxs)("div", {
      className: y.card,
      children: [(0, a.jsx)("div", {
        className: y.header,
        children: (0, a.jsx)(G, {
          userId: t.id
        })
      }), (0, a.jsxs)("div", {
        className: y.content,
        children: [(0, a.jsx)("div", {
          className: y.activityCounterRow,
          children: s.map(e => {
            let [t, s] = e;
            return (0, a.jsx)(p.default, {
              displayType: t,
              header: s.tooltipHeader()
            }, "counter-".concat(t))
          })
        }), (0, a.jsx)("div", {
          className: y.activityOverview,
          children: n ? s.map(e => {
            let [t] = e;
            return (0, a.jsx)(j, {
              displayType: t
            }, "".concat(t, "-list"))
          }) : (0, a.jsx)(x.default, {
            className: y.emptyActivity,
            text: null != i ? i : ""
          })
        })]
      })]
    })]
  })
}