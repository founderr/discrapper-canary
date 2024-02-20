"use strict";
a.r(t), a.d(t, {
  default: function() {
    return K
  }
}), a("222007"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660"), a("424973");
var s = a("37983"),
  l = a("884691"),
  i = a("414456"),
  n = a.n(i),
  d = a("87682"),
  r = a.n(d),
  o = a("759843"),
  u = a("446674"),
  c = a("77078"),
  f = a("450911"),
  m = a("685073"),
  p = a("81594"),
  g = a("783480"),
  T = a("966724"),
  E = a("428958"),
  I = a("442939"),
  h = a("843962"),
  S = a("679653"),
  y = a("884351"),
  C = a("42203"),
  _ = a("474643"),
  N = a("305961"),
  A = a("705955"),
  M = a("27618"),
  v = a("585722"),
  w = a("697218"),
  R = a("466857"),
  x = a("578706"),
  D = a("413709"),
  j = a("599110"),
  U = a("315102"),
  b = a("354023"),
  O = a("773336"),
  k = a("159885"),
  L = a("158998"),
  P = a("50885"),
  B = a("191225"),
  F = a("837707"),
  G = a("49111"),
  H = a("91366"),
  V = a("782340"),
  z = a("863435");
async function Y(e) {
  return e.type === b.RowTypes.DM || e.type === b.RowTypes.FRIEND ? await f.default.ensurePrivateChannel(e.item.id) : e.item.id
}

function K(e) {
  let {
    applicationId: t,
    mediaUrl: a,
    channelId: i,
    onClose: n,
    transitionState: d,
    ...f
  } = e, h = (0, u.useStateFromStores)([B.default], () => B.default.getSelfEmbeddedActivityForChannel(i));
  (0, E.default)({
    type: o.ImpressionTypes.MODAL,
    name: o.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
    properties: {
      application_id: t,
      activity_session_id: (0, F.default)(h)
    }
  });
  let [S] = (0, I.default)([t]), N = (0, u.useStateFromStores)([w.default], () => w.default.getCurrentUser()), [M, x] = l.useState(""), [D, U] = l.useState([]), [O, k] = l.useState(null), [L, P] = l.useState(null);
  l.useEffect(() => {
    let e = async () => {
      let e = r.basename(new URL(a).pathname),
        t = await fetch(a),
        s = await t.arrayBuffer(),
        l = new File([s], e);
      k(l);
      let i = new FileReader;
      i.onload = () => {
        var e;
        return P(null == i ? void 0 : null === (e = i.result) || void 0 === e ? void 0 : e.toString())
      }, i.readAsDataURL(l)
    };
    e()
  }, [a, k]);
  let K = (0, u.useStateFromStoresArray)([A.default], () => A.default.getInviteSuggestionRows());
  l.useEffect(() => {
    (0, m.loadInviteSuggestions)({
      omitUserIds: new Set,
      applicationId: t,
      inviteTargetType: H.InviteTargetTypes.EMBEDDED_APPLICATION
    })
  }, [t]), l.useEffect(() => (0, m.searchInviteSuggestions)(M), [M]);
  let Q = l.useCallback(async () => {
    await Promise.all(D.map(async e => {
      let t = K.find(t => t.item.id === e);
      if (null != t) {
        let e = await Y(t);
        p.default.clearAll(e, _.DraftType.ChannelMessage)
      }
    }))
  }, [D, K]);
  l.useEffect(() => {
    d === c.ModalTransitionState.EXITING && Q()
  }, [Q, d]);
  let X = l.useCallback(async () => {
      await Q(), n()
    }, [n, Q]),
    J = l.useCallback(async () => {
      let e = 0,
        a = 0,
        s = 0;
      async function l(l) {
        switch (l.type) {
          case b.RowTypes.DM:
          case b.RowTypes.FRIEND:
            e++;
            break;
          case b.RowTypes.GROUP_DM:
            a++;
            break;
          case b.RowTypes.CHANNEL:
            s++
        }
        let i = await Y(l),
          n = v.default.getUploads(i, _.DraftType.ChannelMessage),
          d = C.default.getChannel(i);
        g.default.uploadFiles({
          channelId: i,
          uploads: n,
          parsedMessage: null != S ? y.default.parse(d, V.default.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_FROM_APP.format({
            applicationName: "**".concat(S.name, "**")
          })) : void 0,
          draftType: _.DraftType.ChannelMessage,
          options: {
            applicationId: t
          }
        }), p.default.clearAll(i, _.DraftType.ChannelMessage)
      }
      let i = A.default.getInviteSuggestionRows().filter(e => D.includes(e.item.id)).map(e => l(e));
      j.default.track(G.AnalyticEvents.ACTIVITY_SHARE_MOMENT_SEND, {
        user_id: null == N ? void 0 : N.id,
        application_id: t,
        activity_session_id: (0, F.default)(h),
        n_users: e,
        n_gdms: a,
        n_channels: s
      });
      try {
        await Promise.all(i), null != S && (0, c.showToast)((0, c.createToast)(V.default.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_FROM_APP.format({
          applicationName: S.name
        }), c.ToastType.SUCCESS))
      } catch (e) {
        throw (0, c.showToast)((0, c.createToast)(V.default.Messages.UPLOAD_ERROR_TITLE, c.ToastType.FAILURE)), e
      }
      X()
    }, [h, S, t, D, X, N]),
    q = e => {
      let t = async () => {
        let t = await Y(e),
          a = [...D];
        if (a.includes(e.item.id)) p.default.clearAll(t, _.DraftType.ChannelMessage), a = a.filter(t => t !== e.item.id);
        else {
          if (a.length >= 10) return;
          null != O && (p.default.addFile({
            file: {
              file: O,
              platform: T.UploadPlatform.WEB
            },
            channelId: t,
            draftType: _.DraftType.ChannelMessage
          }), a.push(e.item.id))
        }
        U(a)
      };
      return () => t()
    };
  return null == L ? (0, s.jsx)(c.Spinner, {}) : (0, s.jsxs)(c.ModalRoot, {
    transitionState: d,
    ...f,
    className: z.modalRoot,
    children: [(0, s.jsxs)(c.ModalHeader, {
      className: z.header,
      children: [(0, s.jsxs)("div", {
        className: z.headerTitle,
        children: [(0, s.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: V.default.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_HEADING
        }), (0, s.jsx)(c.ModalCloseButton, {
          onClick: X
        })]
      }), (0, s.jsx)("div", {
        children: (0, s.jsx)("img", {
          alt: a,
          className: z.img,
          src: L
        })
      })]
    }), (0, s.jsxs)(c.ModalContent, {
      className: z.modalContent,
      children: [(0, s.jsx)(R.default, {
        className: z.searchBar,
        placeholder: V.default.Messages.SEARCH,
        label: V.default.Messages.SEARCH,
        searchTerm: M,
        onChange: e => x(e),
        onClear: () => x("")
      }), K.map((e, t) => (0, s.jsxs)(l.Fragment, {
        children: [0 === t ? null : (0, s.jsx)("div", {
          className: z.rowDivider
        }), (0, s.jsx)(W, {
          row: e,
          onClick: q(e),
          checked: D.includes(e.item.id),
          disabled: !D.includes(e.item.id) && D.length >= 10
        })]
      }, e.item.id))]
    }), (0, s.jsx)(c.ModalFooter, {
      className: z.footer,
      children: (0, s.jsxs)("div", {
        className: z.copySendBar,
        children: [(0, s.jsx)(Z, {
          applicationId: t,
          activitySessionId: (0, F.default)(h),
          mediaUrl: a
        }), D.length >= 10 ? (0, s.jsx)(c.Text, {
          variant: "text-xs/normal",
          children: V.default.Messages.EMBEDDED_ACTIVITIES_SHARE_LIMIT_WARNING.format({
            maxShares: 10
          })
        }) : null, (0, s.jsx)(c.Button, {
          onClick: J,
          disabled: D.length <= 0,
          children: V.default.Messages.SEND
        })]
      })
    })]
  })
}

function W(e) {
  let {
    row: t,
    onClick: a,
    checked: l,
    disabled: i
  } = e, d = null, r = null, o = null;
  switch (t.type) {
    case b.RowTypes.DM:
    case b.RowTypes.FRIEND:
      d = (0, s.jsx)(c.Avatar, {
        size: c.AvatarSizes.SIZE_40,
        src: t.item.getAvatarURL(null, 128, !1),
        "aria-label": t.item.username
      }), r = L.default.getName(t.item), o = L.default.getUserTag(t.item);
      break;
    case b.RowTypes.GROUP_DM: {
      let e = (0, h.getChannelIconURL)(t.item),
        a = (0, S.computeChannelName)(t.item, w.default, M.default);
      d = (0, s.jsx)(c.Avatar, {
        src: e,
        "aria-label": a,
        size: c.AvatarSizes.SIZE_40
      }), r = (0, S.computeChannelName)(t.item, w.default, M.default);
      break
    }
    case b.RowTypes.CHANNEL: {
      let e = t.item,
        a = N.default.getGuild(e.guild_id);
      if (null == a) return null;
      if (r = "#".concat((0, S.computeChannelName)(e, w.default, M.default)), o = a.name, null != a.icon) {
        let t = U.default.getGuildIconURL({
          id: e.guild_id,
          icon: a.icon,
          size: 40
        });
        d = (0, s.jsx)(c.Avatar, {
          src: t,
          "aria-label": r,
          size: c.AvatarSizes.SIZE_40
        })
      } else {
        let e = (0, k.getAcronym)(a.name);
        d = (0, s.jsx)("div", {
          className: z.acronym,
          "aria-hidden": !0,
          children: (0, s.jsx)(c.Text, {
            variant: "text-md/semibold",
            children: e
          })
        })
      }
    }
  }
  return (0, s.jsxs)(c.Clickable, {
    onClick: a,
    className: n(z.rowContainer, {
      [z.disabled]: i
    }),
    children: [(0, s.jsxs)("div", {
      className: z.rowLeft,
      children: [(0, s.jsx)("div", {
        className: z.rowAvatar,
        children: d
      }), (0, s.jsxs)("div", {
        className: z.rowNameContainer,
        children: [(0, s.jsx)(c.Text, {
          variant: "text-md/semibold",
          className: n(z.rowName, {
            [z.disabled]: i
          }),
          children: r
        }), (0, s.jsx)(c.Text, {
          variant: "text-xs/medium",
          className: n(z.rowSubName, {
            [z.disabled]: i
          }),
          children: o
        })]
      })]
    }), (0, s.jsx)(c.Checkbox, {
      disabled: i,
      value: l,
      type: c.Checkbox.Types.INVERTED,
      displayOnly: !0,
      className: z.rowRight
    })]
  })
}

function Z(e) {
  let {
    applicationId: t,
    mediaUrl: a,
    activitySessionId: i
  } = e, [n, d] = l.useState(!1), r = (0, u.useStateFromStores)([w.default], () => w.default.getCurrentUser());
  async function o() {
    j.default.track(G.AnalyticEvents.ACTIVITY_SHARE_MOMENT_COPY, {
      user_id: null == r ? void 0 : r.id,
      application_id: t,
      activity_session_id: i
    }), await P.default.copyImage(a), d(!0)
  }
  return (l.useEffect(() => {
    let e;
    return n && (e = setTimeout(() => {
      d(!1)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [n]), O.isPlatformEmbedded && P.default.canCopyImage(a)) ? (0, s.jsxs)(c.Button, {
    look: c.Button.Looks.LINK,
    color: c.Button.Colors.LINK,
    onClick: o,
    innerClassName: z.copyButton,
    children: [n ? (0, s.jsx)(x.default, {}) : (0, s.jsx)(D.default, {}), n ? V.default.Messages.COPIED : V.default.Messages.COPY_IMAGE_MENU_ITEM]
  }) : (0, s.jsx)("div", {})
}