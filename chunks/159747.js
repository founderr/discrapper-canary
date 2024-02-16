"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007"), n("424973");
var i = n("37983"),
  a = n("884691"),
  l = n("759843"),
  s = n("446674"),
  r = n("77078"),
  o = n("450911"),
  u = n("685073"),
  c = n("819689"),
  d = n("812204"),
  f = n("685665"),
  p = n("428958"),
  m = n("843962"),
  h = n("679653"),
  I = n("305961"),
  g = n("705955"),
  v = n("27618"),
  C = n("697218"),
  A = n("466857"),
  y = n("578706"),
  T = n("83900"),
  S = n("599110"),
  E = n("315102"),
  x = n("306160"),
  R = n("354023"),
  N = n("159885"),
  _ = n("158998"),
  w = n("969380"),
  L = n("49111"),
  U = n("91366"),
  j = n("782340"),
  D = n("838352");

function M(e) {
  let {
    activityItem: t,
    analyticsLocations: n,
    ...m
  } = e, h = (0, s.useStateFromStores)([C.default], () => C.default.getCurrentUser()), {
    analyticsLocations: I
  } = (0, f.default)(n);
  (0, p.default)({
    type: l.ImpressionTypes.MODAL,
    name: l.ImpressionNames.ACTIVITY_BOOKMARK_SHARE_MODAL,
    properties: {
      application_id: t.application.id,
      location_stack: I
    }
  });
  let [v, y] = a.useState(""), [T, E] = a.useState([]), x = (0, w.default)({
    applicationId: t.application.id,
    size: 256
  }), N = "".concat(window.location.origin).concat(L.Routes.ACTIVITY_DETAILS(t.application.id)), _ = (0, s.useStateFromStoresArray)([g.default], () => g.default.getInviteSuggestionRows());
  a.useEffect(() => {
    (0, u.loadInviteSuggestions)({
      omitUserIds: new Set,
      applicationId: t.application.id,
      inviteTargetType: U.InviteTargetTypes.EMBEDDED_APPLICATION
    })
  }, [t.application.id]), a.useEffect(() => (0, u.searchInviteSuggestions)(v), [v]);
  let M = a.useCallback(async () => {
    let e = 0,
      n = 0,
      i = 0,
      a = g.default.getInviteSuggestionRows().filter(e => T.includes(e.item.id)).map(t => (function(t, a) {
        switch (t.type) {
          case R.RowTypes.DM:
          case R.RowTypes.FRIEND:
            e++;
            break;
          case R.RowTypes.GROUP_DM:
            n++;
            break;
          case R.RowTypes.CHANNEL:
            i++
        }
        return t.type === R.RowTypes.GROUP_DM || t.type === R.RowTypes.CHANNEL ? c.default.sendActivityBookmark(t.item.id, a, d.default.ACTIVITY_DETAIL_PAGE, null) : t.type === R.RowTypes.DM || t.type === R.RowTypes.FRIEND ? o.default.ensurePrivateChannel(t.item.id).then(e => c.default.sendActivityBookmark(e, N, d.default.ACTIVITY_DETAIL_PAGE, null)) : Promise.resolve()
      })(t, N));
    await a, S.default.track(L.AnalyticEvents.ACTIVITY_BOOKMARK_SHARED, {
      user_id: null == h ? void 0 : h.id,
      application_id: t.application.id,
      n_users: e,
      n_gdms: n,
      n_channels: i
    }), m.onClose()
  }, [t, T, m, N, h]);
  return (0, i.jsxs)(r.ModalRoot, {
    ...m,
    className: D.modalRoot,
    children: [(0, i.jsxs)(r.ModalHeader, {
      className: D.header,
      children: [(0, i.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        children: j.default.Messages.EMBEDDED_ACTIVITIES_SHARE_ACTIVITY_WITH.format({
          activityName: t.application.name
        })
      }), (0, i.jsx)(r.ModalCloseButton, {
        onClick: m.onClose
      })]
    }), (0, i.jsxs)(r.ModalContent, {
      className: D.modalContent,
      children: [(0, i.jsx)(A.default, {
        className: D.searchBar,
        placeholder: j.default.Messages.SEARCH,
        label: j.default.Messages.SEARCH,
        searchTerm: v,
        onChange: e => y(e),
        onClear: () => y("")
      }), _.map((e, t) => (0, i.jsxs)(a.Fragment, {
        children: [0 === t ? null : (0, i.jsx)("div", {
          className: D.rowDivider
        }), (0, i.jsx)(O, {
          row: e,
          onClick: () => {
            let t = [...T];
            t.includes(e.item.id) ? t = t.filter(t => t !== e.item.id) : t.push(e.item.id), E(t)
          },
          checked: T.includes(e.item.id)
        })]
      }, e.item.id))]
    }), (0, i.jsxs)(r.ModalFooter, {
      className: D.footer,
      children: [(0, i.jsx)("div", {
        className: D.activityInfoOuterContainer,
        children: (0, i.jsxs)("div", {
          className: D.activityInfoInnerContainer,
          children: [(0, i.jsx)("img", {
            src: x.url,
            className: D.activityInfoImage,
            alt: t.application.name
          }), (0, i.jsxs)("div", {
            className: D.activityInfoText,
            children: [(0, i.jsx)(r.Text, {
              variant: "text-md/semibold",
              className: D.ellipsis,
              children: t.application.name
            }), (0, i.jsx)(r.Text, {
              variant: "text-sm/medium",
              className: D.ellipsis,
              children: t.application.description
            }), (0, i.jsx)(r.Text, {
              variant: "text-xs/medium",
              className: D.ellipsis,
              children: (0, i.jsx)(r.Anchor, {
                href: N,
                children: N
              })
            })]
          })]
        })
      }), (0, i.jsx)("div", {
        className: D.footerDivider
      }), (0, i.jsxs)("div", {
        className: D.copySendBar,
        children: [(0, i.jsx)(k, {
          link: N,
          applicationId: t.application.id
        }), (0, i.jsx)(r.Button, {
          onClick: M,
          disabled: T.length <= 0,
          children: j.default.Messages.SEND
        })]
      })]
    })]
  })
}

function O(e) {
  let {
    row: t,
    onClick: n,
    checked: a
  } = e, l = null, s = null, o = null;
  switch (t.type) {
    case R.RowTypes.DM:
    case R.RowTypes.FRIEND:
      l = (0, i.jsx)(r.Avatar, {
        size: r.AvatarSizes.SIZE_40,
        src: t.item.getAvatarURL(null, 128, !1),
        "aria-label": t.item.username
      }), s = _.default.getName(t.item), o = _.default.getUserTag(t.item);
      break;
    case R.RowTypes.GROUP_DM: {
      let e = (0, m.getChannelIconURL)(t.item),
        n = (0, h.computeChannelName)(t.item, C.default, v.default);
      l = (0, i.jsx)(r.Avatar, {
        src: e,
        "aria-label": n,
        size: r.AvatarSizes.SIZE_40
      }), s = (0, h.computeChannelName)(t.item, C.default, v.default);
      break
    }
    case R.RowTypes.CHANNEL: {
      let e = t.item,
        n = I.default.getGuild(e.guild_id);
      if (null == n) return null;
      if (s = "#".concat((0, h.computeChannelName)(e, C.default, v.default)), o = n.name, null != n.icon) {
        let t = E.default.getGuildIconURL({
          id: e.guild_id,
          icon: n.icon,
          size: 40
        });
        l = (0, i.jsx)(r.Avatar, {
          src: t,
          "aria-label": s,
          size: r.AvatarSizes.SIZE_40
        })
      } else {
        let e = (0, N.getAcronym)(n.name);
        l = (0, i.jsx)("div", {
          className: D.acronym,
          "aria-hidden": !0,
          children: e
        })
      }
    }
  }
  return (0, i.jsxs)(r.Clickable, {
    onClick: n,
    className: D.rowContainer,
    children: [(0, i.jsxs)("div", {
      className: D.rowLeft,
      children: [(0, i.jsx)("div", {
        className: D.rowAvatar,
        children: l
      }), (0, i.jsxs)("div", {
        className: D.rowNameContainer,
        children: [(0, i.jsx)(r.Text, {
          variant: "text-md/semibold",
          className: D.rowName,
          children: s
        }), (0, i.jsx)(r.Text, {
          variant: "text-xs/medium",
          className: D.rowSubName,
          children: o
        })]
      })]
    }), (0, i.jsx)(r.Checkbox, {
      value: a,
      type: r.Checkbox.Types.INVERTED,
      displayOnly: !0,
      className: D.rowRight
    })]
  })
}

function k(e) {
  let {
    applicationId: t,
    link: n
  } = e, l = (0, s.useStateFromStores)([C.default], () => C.default.getCurrentUser()), [o, u] = a.useState(!1);
  return a.useEffect(() => {
    let e;
    return o && (e = setTimeout(() => {
      u(!1)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [o]), (0, i.jsxs)(r.Button, {
    look: r.Button.Looks.LINK,
    color: r.Button.Colors.LINK,
    onClick: function() {
      S.default.track(L.AnalyticEvents.ACTIVITY_BOOKMARK_COPY_URL, {
        user_id: null == l ? void 0 : l.id,
        application_id: t
      }), (0, x.copy)(n), u(!0)
    },
    innerClassName: D.copyButton,
    children: [o ? (0, i.jsx)(y.default, {}) : (0, i.jsx)(T.default, {}), o ? j.default.Messages.COPIED : j.default.Messages.COPY_LINK]
  })
}