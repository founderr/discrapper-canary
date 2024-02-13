"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("627445"),
  i = n.n(l),
  r = n("65597"),
  o = n("77078"),
  u = n("462579"),
  d = n("266926"),
  c = n("599110"),
  f = n("299039"),
  E = n("822825"),
  h = n("117933"),
  _ = n("368874"),
  C = n("648750"),
  I = n("710514"),
  S = n("339853"),
  p = n("775032"),
  m = n("25132"),
  T = n("453479"),
  g = n("975344"),
  A = n("57"),
  N = n("863972"),
  R = n("884706"),
  v = n("424373"),
  O = n("922832"),
  L = n("49111"),
  M = n("782340"),
  P = n("354591");

function D() {
  let e = s.useCallback(() => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("538969").then(n.bind(n, "538969"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    })
  }, []);
  return (0, a.jsx)(o.Clickable, {
    className: P.tooltip,
    onClick: e,
    children: (0, a.jsx)(d.default, {
      className: P.icon,
      width: 15,
      height: 15
    })
  })
}

function y(e) {
  let {
    displayType: t
  } = e, n = s.useCallback(() => {
    (0, o.showToast)((0, o.createToast)(M.default.Messages.FAMILY_CENTER_ERROR_GENERIC_TOAST, o.ToastType.FAILURE))
  }, []), l = (0, p.default)(), r = (0, I.useActionsForDisplayType)(t), u = (0, I.useActionTotalsForDisplayType)(t), {
    loadMore: d,
    isMoreLoading: c
  } = (0, C.useFamilyCenterActions)({
    onError: n
  }), E = O.ACTION_TO_TEXT.get(t), [_, S] = s.useState(O.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS), m = s.useCallback(() => {
    S(e => e + O.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS), d(t)
  }, [t, d]);
  i(E, "No text for action type");
  let T = E.sectionHeader(u),
    N = s.useCallback(e => {
      let {
        row: t
      } = e, n = r[t];
      return (0, h.isUserAction)(n) ? (0, a.jsx)(A.default, {
        userId: n.entity_id,
        timestamp: f.default.extractTimestamp(n.event_id),
        timestampFormatter: E.timestampFormatter
      }, n.event_id) : (0, h.isGuildAction)(n) ? (0, a.jsx)(g.default, {
        guildId: n.entity_id
      }, n.event_id) : void 0
    }, [r, E.timestampFormatter]),
    R = s.useCallback(() => (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.Text, {
        className: P.sectionHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: T
      }), void 0 !== E.sectionDescription ? (0, a.jsx)(o.Text, {
        className: P.sectionDescription,
        variant: "text-md/medium",
        color: "text-muted",
        children: E.sectionDescription(null != l && l)
      }) : null]
    }), [T, E, l]);
  if (0 === r.length) return null;
  let v = r.slice(0, _);
  return (0, a.jsxs)("div", {
    className: P.actionSection,
    children: [R(), (0, a.jsx)("div", {
      className: P.actions,
      style: {
        maxHeight: 65 * v.length
      },
      children: v.map((e, t) => N({
        row: t
      }))
    }), v.length !== u ? (0, a.jsx)(o.Clickable, {
      className: P.loadMoreBar,
      onClick: m,
      role: "button",
      children: c ? (0, a.jsx)(o.Spinner, {
        type: o.Spinner.Type.PULSING_ELLIPSIS,
        className: P.spinner
      }) : (0, a.jsx)(o.Text, {
        className: P.loadMore,
        variant: "text-sm/bold",
        children: M.default.Messages.FAMILY_CENTER_ACTIVITY_MORE.format({
          pageSize: Math.min(u - v.length, O.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS)
        })
      })
    }) : null]
  })
}
let x = () => {
    let e = (0, p.default)(),
      t = (0, m.useUserForLinkStatus)(O.UserLinkStatus.ACTIVE),
      n = (0, _.useAgeSpecificText)(M.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_TEEN.format({
        activeLinks: t.length
      }), M.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_PARENT),
      s = (0, h.getActivityWindowTimestampFormatter)(!!e),
      l = (0, m.useActivityWindowTimeStamp)(s);
    return e && t.length > 1 ? (0, a.jsx)(o.Text, {
      variant: "eyebrow",
      children: l
    }) : (0, a.jsxs)(a.Fragment, {
      children: [e ? null : (0, a.jsx)(u.default, {
        className: P.icon
      }), (0, a.jsx)(o.Text, {
        variant: "eyebrow",
        children: n
      })]
    })
  },
  b = e => {
    let {
      userId: t,
      subText: n,
      avatarSize: s = o.AvatarSizes.SIZE_40
    } = e, l = (0, S.useTeenUserForId)(t);
    return void 0 === l ? null : (0, a.jsxs)("div", {
      className: P.accountRow,
      children: [(0, a.jsx)(N.FamilyCenterAvatar, {
        user: l,
        avatarSize: s
      }), (0, a.jsxs)("div", {
        className: P.headerText,
        children: [(0, a.jsx)(R.default, {
          user: l
        }), void 0 !== n ? (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: n
        }) : null]
      })]
    })
  },
  U = () => {
    let e = (0, m.useUserForLinkStatus)(O.UserLinkStatus.ACTIVE),
      t = (0, r.default)([E.default], () => E.default.getSelectedTeenId()),
      {
        selectTeenUser: n
      } = (0, C.useFamilyCenterActions)({}),
      l = e.map(e => ({
        label: e.id,
        value: e.id
      })),
      i = s.useCallback(e => (0, a.jsx)(b, {
        userId: e.value,
        avatarSize: o.AvatarSizes.SIZE_24
      }), []);
    return (0, a.jsx)(o.Select, {
      className: P.select,
      renderOptionLabel: i,
      renderOptionValue: e => {
        let [t] = e;
        return i(t)
      },
      serialize: e => e,
      select: e => {
        n(e), c.default.track(L.AnalyticEvents.FAMILY_CENTER_ACTION, {
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
    } = e, n = (0, p.default)(), s = (0, m.useUserForLinkStatus)(O.UserLinkStatus.ACTIVE), l = (0, h.getActivityWindowTimestampFormatter)(!!n), i = (0, m.useActivityWindowTimeStamp)(l);
    return n && 1 !== s.length ? (0, a.jsx)(U, {}) : (0, a.jsx)(b, {
      userId: t,
      subText: i
    })
  };
var j = e => {
  let {
    user: t
  } = e, n = Array.from(O.ACTION_TO_TEXT.entries()), s = (0, I.useHasActionForAnyDisplayType)(), l = (0, h.getEmptyActivityFormatter)(), i = (0, m.useActivityWindowTimeStamp)(l);
  return (0, a.jsxs)("div", {
    className: P.container,
    children: [(0, a.jsxs)("div", {
      className: P.connectedCounter,
      children: [(0, a.jsx)(x, {}), (0, a.jsx)(D, {})]
    }), (0, a.jsxs)("div", {
      className: P.card,
      children: [(0, a.jsx)("div", {
        className: P.header,
        children: (0, a.jsx)(G, {
          userId: t.id
        })
      }), (0, a.jsxs)("div", {
        className: P.content,
        children: [(0, a.jsx)("div", {
          className: P.activityCounterRow,
          children: n.map(e => {
            let [t, n] = e;
            return (0, a.jsx)(T.default, {
              displayType: t,
              header: n.tooltipHeader()
            }, "counter-".concat(t))
          })
        }), (0, a.jsx)("div", {
          className: P.activityOverview,
          children: s ? n.map(e => {
            let [t] = e;
            return (0, a.jsx)(y, {
              displayType: t
            }, "".concat(t, "-list"))
          }) : (0, a.jsx)(v.default, {
            className: P.emptyActivity,
            text: null != i ? i : ""
          })
        })]
      })]
    })]
  })
}