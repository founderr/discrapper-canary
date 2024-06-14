"use strict";
s.r(t), s("47120");
var n = s("735250"),
  a = s("470079"),
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
  C = s("785681"),
  m = s("985002"),
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
  O = s("292352"),
  M = s("981631"),
  L = s("689938"),
  y = s("334611");

function b() {
  let e = a.useCallback(() => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("66462")]).then(s.bind(s, "756226"));
      return t => (0, n.jsx)(e, {
        ...t
      })
    })
  }, []);
  return (0, n.jsx)(o.Clickable, {
    className: y.tooltip,
    onClick: e,
    children: (0, n.jsx)(d.default, {
      className: y.icon,
      width: 15,
      height: 15
    })
  })
}

function D(e) {
  let {
    displayType: t
  } = e, s = a.useCallback(() => {
    (0, o.showToast)((0, o.createToast)(L.default.Messages.FAMILY_CENTER_ERROR_GENERIC_TOAST, o.ToastType.FAILURE))
  }, []), l = (0, A.default)(), r = (0, T.useActionsForDisplayType)(t), u = (0, T.useActionTotalsForDisplayType)(t), {
    loadMore: d,
    isMoreLoading: c
  } = (0, m.useFamilyCenterActions)({
    onError: s
  }), _ = O.ACTION_TO_TEXT.get(t), [C, g] = a.useState(O.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS), p = (0, h.useIsEligibleForFamilyCenterVCJoin)({
    location: "family_center_activity_section_web"
  }), N = a.useCallback(() => {
    g(e => e + O.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS), d(t)
  }, [t, d]);
  i()(_, "No text for action type");
  let x = _.sectionHeader(u),
    R = a.useCallback(e => {
      let {
        row: t
      } = e, s = r[t];
      return (0, f.isUserAction)(s) ? (0, n.jsx)(I.default, {
        userId: s.entity_id,
        timestamp: E.default.extractTimestamp(s.event_id),
        timestampFormatter: _.timestampFormatter
      }, s.event_id) : (0, f.isGuildAction)(s) ? (0, n.jsx)(S.default, {
        guildId: s.entity_id
      }, s.event_id) : void 0
    }, [r, _.timestampFormatter]),
    v = a.useCallback(() => (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(o.Text, {
        className: y.sectionHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: x
      }), void 0 !== _.sectionDescription ? (0, n.jsx)(o.Text, {
        className: y.sectionDescription,
        variant: "text-md/medium",
        color: "text-muted",
        children: _.sectionDescription(null != l && l, p)
      }) : null]
    }), [x, _, l, p]);
  if (0 === r.length) return null;
  let M = r.slice(0, C);
  return (0, n.jsxs)("div", {
    className: y.actionSection,
    children: [v(), (0, n.jsx)("div", {
      className: y.actions,
      style: {
        maxHeight: 65 * M.length
      },
      children: M.map((e, t) => R({
        row: t
      }))
    }), M.length !== u ? (0, n.jsx)(o.Clickable, {
      className: y.loadMoreBar,
      onClick: N,
      role: "button",
      children: c ? (0, n.jsx)(o.Spinner, {
        type: o.Spinner.Type.PULSING_ELLIPSIS,
        className: y.spinner
      }) : (0, n.jsx)(o.Text, {
        className: y.loadMore,
        variant: "text-sm/bold",
        children: L.default.Messages.FAMILY_CENTER_ACTIVITY_MORE.format({
          pageSize: Math.min(u - M.length, O.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS)
        })
      })
    }) : null]
  })
}
let j = () => {
    let e = (0, A.default)(),
      t = (0, p.useUserForLinkStatus)(O.UserLinkStatus.ACTIVE),
      s = (0, C.useAgeSpecificText)(L.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_TEEN.format({
        activeLinks: t.length
      }), L.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_PARENT),
      a = (0, f.getActivityWindowTimestampFormatter)(!!e),
      l = (0, p.useActivityWindowTimeStamp)(a);
    return e && t.length > 1 ? (0, n.jsx)(o.Text, {
      variant: "eyebrow",
      children: l
    }) : (0, n.jsxs)(n.Fragment, {
      children: [e ? null : (0, n.jsx)(u.default, {
        className: y.icon
      }), (0, n.jsx)(o.Text, {
        variant: "eyebrow",
        children: s
      })]
    })
  },
  U = e => {
    let {
      userId: t,
      subText: s,
      avatarSize: a = o.AvatarSizes.SIZE_40
    } = e, l = (0, g.useTeenUserForId)(t);
    return void 0 === l ? null : (0, n.jsxs)("div", {
      className: y.accountRow,
      children: [(0, n.jsx)(x.FamilyCenterAvatar, {
        user: l,
        avatarSize: a
      }), (0, n.jsxs)("div", {
        className: y.headerText,
        children: [(0, n.jsx)(R.default, {
          user: l
        }), void 0 !== s ? (0, n.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: s
        }) : null]
      })]
    })
  },
  P = () => {
    let e = (0, p.useUserForLinkStatus)(O.UserLinkStatus.ACTIVE),
      t = (0, r.useStateFromStores)([_.default], () => _.default.getSelectedTeenId()),
      {
        selectTeenUser: s
      } = (0, m.useFamilyCenterActions)({}),
      l = e.map(e => ({
        label: e.id,
        value: e.id
      })),
      i = a.useCallback(e => (0, n.jsx)(U, {
        userId: e.value,
        avatarSize: o.AvatarSizes.SIZE_24
      }), []);
    return (0, n.jsx)(o.Select, {
      className: y.select,
      renderOptionLabel: i,
      renderOptionValue: e => {
        let [t] = e;
        return i(t)
      },
      serialize: e => e,
      select: e => {
        s(e), c.default.track(M.AnalyticEvents.FAMILY_CENTER_ACTION, {
          action: O.FamilyCenterAction.SelectTeen
        })
      },
      isSelected: e => e === t,
      options: l
    })
  },
  B = e => {
    let {
      userId: t
    } = e, s = (0, A.default)(), a = (0, p.useUserForLinkStatus)(O.UserLinkStatus.ACTIVE), l = (0, f.getActivityWindowTimestampFormatter)(!!s), i = (0, p.useActivityWindowTimeStamp)(l);
    return s && 1 !== a.length ? (0, n.jsx)(P, {}) : (0, n.jsx)(U, {
      userId: t,
      subText: i
    })
  };
t.default = e => {
  let {
    user: t
  } = e, s = Array.from(O.ACTION_TO_TEXT.entries()), a = (0, T.useHasActionForAnyDisplayType)(), l = (0, f.getEmptyActivityFormatter)(), i = (0, p.useActivityWindowTimeStamp)(l);
  return (0, n.jsxs)("div", {
    className: y.container,
    children: [(0, n.jsxs)("div", {
      className: y.connectedCounter,
      children: [(0, n.jsx)(j, {}), (0, n.jsx)(b, {})]
    }), (0, n.jsxs)("div", {
      className: y.card,
      children: [(0, n.jsx)("div", {
        className: y.header,
        children: (0, n.jsx)(B, {
          userId: t.id
        })
      }), (0, n.jsxs)("div", {
        className: y.content,
        children: [(0, n.jsx)("div", {
          className: y.activityCounterRow,
          children: s.map(e => {
            let [t, s] = e;
            return (0, n.jsx)(N.default, {
              displayType: t,
              header: s.tooltipHeader()
            }, "counter-".concat(t))
          })
        }), (0, n.jsx)("div", {
          className: y.activityOverview,
          children: a ? s.map(e => {
            let [t] = e;
            return (0, n.jsx)(D, {
              displayType: t
            }, "".concat(t, "-list"))
          }) : (0, n.jsx)(v.default, {
            className: y.emptyActivity,
            text: null != i ? i : ""
          })
        })]
      })]
    })]
  })
}