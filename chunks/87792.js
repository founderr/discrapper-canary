"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("512722"),
  i = s.n(l),
  r = s("399606"),
  o = s("481060"),
  u = s("794358"),
  d = s("507893"),
  c = s("626135"),
  E = s("709054"),
  _ = s("914788"),
  f = s("546791"),
  h = s("259756"),
  m = s("785681"),
  C = s("985002"),
  T = s("858719"),
  g = s("780985"),
  A = s("880257"),
  p = s("631885"),
  N = s("240351"),
  S = s("792258"),
  I = s("657825"),
  x = s("198952"),
  R = s("329242"),
  v = s("895328"),
  M = s("292352"),
  L = s("981631"),
  O = s("689938"),
  y = s("334611");

function D() {
  let e = n.useCallback(() => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("66462")]).then(s.bind(s, "756226"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    })
  }, []);
  return (0, a.jsx)(o.Clickable, {
    className: y.tooltip,
    onClick: e,
    children: (0, a.jsx)(d.default, {
      className: y.icon,
      width: 15,
      height: 15
    })
  })
}

function b(e) {
  let {
    displayType: t
  } = e, s = n.useCallback(() => {
    (0, o.showToast)((0, o.createToast)(O.default.Messages.FAMILY_CENTER_ERROR_GENERIC_TOAST, o.ToastType.FAILURE))
  }, []), l = (0, A.default)(), r = (0, T.useActionsForDisplayType)(t), u = (0, T.useActionTotalsForDisplayType)(t), {
    loadMore: d,
    isMoreLoading: c
  } = (0, C.useFamilyCenterActions)({
    onError: s
  }), _ = M.ACTION_TO_TEXT.get(t), [m, g] = n.useState(M.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS), p = (0, h.useIsEligibleForFamilyCenterVCJoin)({
    location: "family_center_activity_section_web"
  }), N = n.useCallback(() => {
    g(e => e + M.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS), d(t)
  }, [t, d]);
  i()(_, "No text for action type");
  let x = _.sectionHeader(u),
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
    v = n.useCallback(() => (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.Text, {
        className: y.sectionHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: x
      }), void 0 !== _.sectionDescription ? (0, a.jsx)(o.Text, {
        className: y.sectionDescription,
        variant: "text-md/medium",
        color: "text-muted",
        children: _.sectionDescription(null != l && l, p)
      }) : null]
    }), [x, _, l, p]);
  if (0 === r.length) return null;
  let L = r.slice(0, m);
  return (0, a.jsxs)("div", {
    className: y.actionSection,
    children: [v(), (0, a.jsx)("div", {
      className: y.actions,
      style: {
        maxHeight: 65 * L.length
      },
      children: L.map((e, t) => R({
        row: t
      }))
    }), L.length !== u ? (0, a.jsx)(o.Clickable, {
      className: y.loadMoreBar,
      onClick: N,
      role: "button",
      children: c ? (0, a.jsx)(o.Spinner, {
        type: o.Spinner.Type.PULSING_ELLIPSIS,
        className: y.spinner
      }) : (0, a.jsx)(o.Text, {
        className: y.loadMore,
        variant: "text-sm/bold",
        children: O.default.Messages.FAMILY_CENTER_ACTIVITY_MORE.format({
          pageSize: Math.min(u - L.length, M.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS)
        })
      })
    }) : null]
  })
}
let j = () => {
    let e = (0, A.default)(),
      t = (0, p.useUserForLinkStatus)(M.UserLinkStatus.ACTIVE),
      s = (0, m.useAgeSpecificText)(O.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_TEEN.format({
        activeLinks: t.length
      }), O.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_PARENT),
      n = (0, f.getActivityWindowTimestampFormatter)(!!e),
      l = (0, p.useActivityWindowTimeStamp)(n);
    return e && t.length > 1 ? (0, a.jsx)(o.Text, {
      variant: "eyebrow",
      children: l
    }) : (0, a.jsxs)(a.Fragment, {
      children: [e ? null : (0, a.jsx)(u.default, {
        className: y.icon
      }), (0, a.jsx)(o.Text, {
        variant: "eyebrow",
        children: s
      })]
    })
  },
  U = e => {
    let {
      userId: t,
      subText: s,
      avatarSize: n = o.AvatarSizes.SIZE_40
    } = e, l = (0, g.useTeenUserForId)(t);
    return void 0 === l ? null : (0, a.jsxs)("div", {
      className: y.accountRow,
      children: [(0, a.jsx)(x.FamilyCenterAvatar, {
        user: l,
        avatarSize: n
      }), (0, a.jsxs)("div", {
        className: y.headerText,
        children: [(0, a.jsx)(R.default, {
          user: l
        }), void 0 !== s ? (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: s
        }) : null]
      })]
    })
  },
  P = () => {
    let e = (0, p.useUserForLinkStatus)(M.UserLinkStatus.ACTIVE),
      t = (0, r.useStateFromStores)([_.default], () => _.default.getSelectedTeenId()),
      {
        selectTeenUser: s
      } = (0, C.useFamilyCenterActions)({}),
      l = e.map(e => ({
        label: e.id,
        value: e.id
      })),
      i = n.useCallback(e => (0, a.jsx)(U, {
        userId: e.value,
        avatarSize: o.AvatarSizes.SIZE_24
      }), []);
    return (0, a.jsx)(o.Select, {
      className: y.select,
      renderOptionLabel: i,
      renderOptionValue: e => {
        let [t] = e;
        return i(t)
      },
      serialize: e => e,
      select: e => {
        s(e), c.default.track(L.AnalyticEvents.FAMILY_CENTER_ACTION, {
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
    } = e, s = (0, A.default)(), n = (0, p.useUserForLinkStatus)(M.UserLinkStatus.ACTIVE), l = (0, f.getActivityWindowTimestampFormatter)(!!s), i = (0, p.useActivityWindowTimeStamp)(l);
    return s && 1 !== n.length ? (0, a.jsx)(P, {}) : (0, a.jsx)(U, {
      userId: t,
      subText: i
    })
  };
t.default = e => {
  let {
    user: t
  } = e, s = Array.from(M.ACTION_TO_TEXT.entries()), n = (0, T.useHasActionForAnyDisplayType)(), l = (0, f.getEmptyActivityFormatter)(), i = (0, p.useActivityWindowTimeStamp)(l);
  return (0, a.jsxs)("div", {
    className: y.container,
    children: [(0, a.jsxs)("div", {
      className: y.connectedCounter,
      children: [(0, a.jsx)(j, {}), (0, a.jsx)(D, {})]
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
            return (0, a.jsx)(N.default, {
              displayType: t,
              header: s.tooltipHeader()
            }, "counter-".concat(t))
          })
        }), (0, a.jsx)("div", {
          className: y.activityOverview,
          children: n ? s.map(e => {
            let [t] = e;
            return (0, a.jsx)(b, {
              displayType: t
            }, "".concat(t, "-list"))
          }) : (0, a.jsx)(v.default, {
            className: y.emptyActivity,
            text: null != i ? i : ""
          })
        })]
      })]
    })]
  })
}