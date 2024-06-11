"use strict";
a.r(t), a.d(t, {
  default: function() {
    return W
  }
}), a("47120"), a("653041");
var s = a("735250"),
  l = a("470079"),
  i = a("120356"),
  n = a.n(i),
  r = a("218887"),
  d = a.n(r),
  o = a("990547"),
  u = a("442837"),
  c = a("481060"),
  f = a("493683"),
  m = a("247272"),
  p = a("166459"),
  T = a("966390"),
  g = a("476326"),
  E = a("213609"),
  I = a("835473"),
  S = a("43267"),
  h = a("933557"),
  y = a("957730"),
  _ = a("592125"),
  C = a("703558"),
  N = a("430824"),
  A = a("751771"),
  M = a("496675"),
  v = a("699516"),
  w = a("117530"),
  R = a("594174"),
  D = a("441674"),
  x = a("757206"),
  j = a("626135"),
  b = a("768581"),
  U = a("971130"),
  O = a("358085"),
  k = a("624138"),
  L = a("591759"),
  P = a("51144"),
  F = a("998502"),
  B = a("317381"),
  G = a("964517"),
  H = a("981631"),
  V = a("245335"),
  z = a("689938"),
  Y = a("395641");
async function K(e) {
  return e.type === U.RowTypes.DM || e.type === U.RowTypes.FRIEND ? await f.default.ensurePrivateChannel(e.item.id) : e.item.id
}

function W(e) {
  let {
    applicationId: t,
    mediaUrl: a,
    channelId: i,
    onClose: n,
    transitionState: r,
    ...f
  } = e, S = (0, u.useStateFromStores)([B.default], () => B.default.getSelfEmbeddedActivityForChannel(i));
  (0, E.default)({
    type: o.ImpressionTypes.MODAL,
    name: o.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
    properties: {
      application_id: t,
      activity_session_id: (0, G.default)(S)
    }
  });
  let [h] = (0, I.default)([t]), N = (0, u.useStateFromStores)([R.default], () => R.default.getCurrentUser()), [v, D] = l.useState(""), [x, b] = l.useState([]), [O, k] = l.useState(null), [P, F] = l.useState(null);
  l.useEffect(() => {
    (async () => {
      let e = L.default.toURLSafe(a);
      if (null == e) return;
      let t = d().basename(e.pathname),
        s = await fetch(a),
        l = await s.arrayBuffer(),
        i = new File([l], t);
      k(i);
      let n = new FileReader;
      n.onload = () => {
        var e;
        return F(null == n ? void 0 : null === (e = n.result) || void 0 === e ? void 0 : e.toString())
      }, n.readAsDataURL(i)
    })()
  }, [a, k]);
  let W = (0, u.useStateFromStoresArray)([A.default, M.default], () => A.default.getInviteSuggestionRows().filter(e => e.type === U.RowTypes.FRIEND || e.type === U.RowTypes.DM || M.default.can(H.Permissions.ATTACH_FILES, e.item)));
  l.useEffect(() => {
    (0, m.loadInviteSuggestions)({
      omitUserIds: new Set,
      applicationId: t,
      inviteTargetType: V.InviteTargetTypes.EMBEDDED_APPLICATION
    })
  }, [t]), l.useEffect(() => (0, m.searchInviteSuggestions)(v), [v]);
  let X = l.useCallback(async () => {
    await Promise.all(x.map(async e => {
      let t = W.find(t => t.item.id === e);
      if (null != t) {
        let e = await K(t);
        p.default.clearAll(e, C.DraftType.ChannelMessage)
      }
    }))
  }, [x, W]);
  l.useEffect(() => {
    r === c.ModalTransitionState.EXITING && X()
  }, [X, r]);
  let J = l.useCallback(async () => {
      await X(), n()
    }, [n, X]),
    q = l.useCallback(async () => {
      let e = 0,
        a = 0,
        s = 0;
      async function l(l) {
        switch (l.type) {
          case U.RowTypes.DM:
          case U.RowTypes.FRIEND:
            e++;
            break;
          case U.RowTypes.GROUP_DM:
            a++;
            break;
          case U.RowTypes.CHANNEL:
            s++
        }
        let i = await K(l),
          n = w.default.getUploads(i, C.DraftType.ChannelMessage),
          r = _.default.getChannel(i);
        T.default.uploadFiles({
          channelId: i,
          uploads: n,
          parsedMessage: null != h ? y.default.parse(r, z.default.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_FROM_APP.format({
            applicationName: "**".concat(h.name, "**")
          })) : void 0,
          draftType: C.DraftType.ChannelMessage,
          options: {
            applicationId: t
          }
        }), p.default.clearAll(i, C.DraftType.ChannelMessage)
      }
      let i = A.default.getInviteSuggestionRows().filter(e => x.includes(e.item.id)).map(e => l(e));
      j.default.track(H.AnalyticEvents.ACTIVITY_SHARE_MOMENT_SEND, {
        user_id: null == N ? void 0 : N.id,
        application_id: t,
        activity_session_id: (0, G.default)(S),
        n_users: e,
        n_gdms: a,
        n_channels: s
      });
      try {
        await Promise.all(i), null != h && (0, c.showToast)((0, c.createToast)(z.default.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_FROM_APP.format({
          applicationName: h.name
        }), c.ToastType.SUCCESS))
      } catch (e) {
        throw (0, c.showToast)((0, c.createToast)(z.default.Messages.UPLOAD_ERROR_TITLE, c.ToastType.FAILURE)), e
      }
      J()
    }, [S, h, t, x, J, N]),
    $ = e => {
      let t = async () => {
        let t = await K(e),
          a = [...x];
        if (a.includes(e.item.id)) p.default.clearAll(t, C.DraftType.ChannelMessage), a = a.filter(t => t !== e.item.id);
        else {
          if (a.length >= 10) return;
          null != O && (p.default.addFile({
            file: {
              file: O,
              platform: g.UploadPlatform.WEB
            },
            channelId: t,
            draftType: C.DraftType.ChannelMessage
          }), a.push(e.item.id))
        }
        b(a)
      };
      return () => t()
    };
  return null == P ? (0, s.jsx)(c.Spinner, {}) : (0, s.jsxs)(c.ModalRoot, {
    transitionState: r,
    ...f,
    className: Y.modalRoot,
    children: [(0, s.jsxs)(c.ModalHeader, {
      className: Y.header,
      children: [(0, s.jsxs)("div", {
        className: Y.headerTitle,
        children: [(0, s.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: z.default.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_HEADING
        }), (0, s.jsx)(c.ModalCloseButton, {
          onClick: J
        })]
      }), (0, s.jsx)("div", {
        children: (0, s.jsx)("img", {
          alt: a,
          className: Y.img,
          src: P
        })
      })]
    }), (0, s.jsxs)(c.ModalContent, {
      className: Y.modalContent,
      children: [(0, s.jsx)(c.SearchBox, {
        className: Y.searchBar,
        placeholder: z.default.Messages.SEARCH,
        label: z.default.Messages.SEARCH,
        searchTerm: v,
        onChange: e => D(e),
        onClear: () => D("")
      }), W.map((e, t) => (0, s.jsxs)(l.Fragment, {
        children: [0 === t ? null : (0, s.jsx)("div", {
          className: Y.rowDivider
        }), (0, s.jsx)(Z, {
          row: e,
          onClick: $(e),
          checked: x.includes(e.item.id),
          disabled: !x.includes(e.item.id) && x.length >= 10
        })]
      }, e.item.id))]
    }), (0, s.jsx)(c.ModalFooter, {
      className: Y.footer,
      children: (0, s.jsxs)("div", {
        className: Y.copySendBar,
        children: [(0, s.jsx)(Q, {
          applicationId: t,
          activitySessionId: (0, G.default)(S),
          mediaUrl: a
        }), x.length >= 10 ? (0, s.jsx)(c.Text, {
          variant: "text-xs/normal",
          children: z.default.Messages.EMBEDDED_ACTIVITIES_SHARE_LIMIT_WARNING.format({
            maxShares: 10
          })
        }) : null, (0, s.jsx)(c.Button, {
          onClick: q,
          disabled: x.length <= 0,
          children: z.default.Messages.SEND
        })]
      })
    })]
  })
}

function Z(e) {
  let {
    row: t,
    onClick: a,
    checked: l,
    disabled: i
  } = e, r = null, d = null, o = null;
  switch (t.type) {
    case U.RowTypes.DM:
    case U.RowTypes.FRIEND:
      r = (0, s.jsx)(c.Avatar, {
        size: c.AvatarSizes.SIZE_40,
        src: t.item.getAvatarURL(null, 128, !1),
        "aria-label": t.item.username
      }), d = P.default.getName(t.item), o = P.default.getUserTag(t.item);
      break;
    case U.RowTypes.GROUP_DM: {
      let e = (0, S.getChannelIconURL)(t.item),
        a = (0, h.computeChannelName)(t.item, R.default, v.default);
      r = (0, s.jsx)(c.Avatar, {
        src: e,
        "aria-label": a,
        size: c.AvatarSizes.SIZE_40
      }), d = (0, h.computeChannelName)(t.item, R.default, v.default);
      break
    }
    case U.RowTypes.CHANNEL: {
      let e = t.item,
        a = N.default.getGuild(e.guild_id);
      if (null == a) return null;
      if (d = "#".concat((0, h.computeChannelName)(e, R.default, v.default)), o = a.name, null != a.icon) {
        let t = b.default.getGuildIconURL({
          id: e.guild_id,
          icon: a.icon,
          size: 40
        });
        r = (0, s.jsx)(c.Avatar, {
          src: t,
          "aria-label": d,
          size: c.AvatarSizes.SIZE_40
        })
      } else {
        let e = (0, k.getAcronym)(a.name);
        r = (0, s.jsx)("div", {
          className: Y.acronym,
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
    className: n()(Y.rowContainer, {
      [Y.disabled]: i
    }),
    children: [(0, s.jsxs)("div", {
      className: Y.rowLeft,
      children: [(0, s.jsx)("div", {
        className: Y.rowAvatar,
        children: r
      }), (0, s.jsxs)("div", {
        className: Y.rowNameContainer,
        children: [(0, s.jsx)(c.Text, {
          variant: "text-md/semibold",
          className: n()(Y.rowName, {
            [Y.disabled]: i
          }),
          children: d
        }), (0, s.jsx)(c.Text, {
          variant: "text-xs/medium",
          className: n()(Y.rowSubName, {
            [Y.disabled]: i
          }),
          children: o
        })]
      })]
    }), (0, s.jsx)(c.Checkbox, {
      disabled: i,
      value: l,
      type: c.Checkbox.Types.INVERTED,
      displayOnly: !0,
      className: Y.rowRight
    })]
  })
}

function Q(e) {
  let {
    applicationId: t,
    mediaUrl: a,
    activitySessionId: i
  } = e, [n, r] = l.useState(!1), d = (0, u.useStateFromStores)([R.default], () => R.default.getCurrentUser());
  async function o() {
    j.default.track(H.AnalyticEvents.ACTIVITY_SHARE_MOMENT_COPY, {
      user_id: null == d ? void 0 : d.id,
      application_id: t,
      activity_session_id: i
    }), await F.default.copyImage(a), r(!0)
  }
  return (l.useEffect(() => {
    let e;
    return n && (e = setTimeout(() => {
      r(!1)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [n]), O.isPlatformEmbedded && F.default.canCopyImage(a)) ? (0, s.jsxs)(c.Button, {
    look: c.Button.Looks.LINK,
    color: c.Button.Colors.LINK,
    onClick: o,
    innerClassName: Y.copyButton,
    children: [n ? (0, s.jsx)(D.default, {}) : (0, s.jsx)(x.default, {}), n ? z.default.Messages.COPIED : z.default.Messages.COPY_IMAGE_MENU_ITEM]
  }) : (0, s.jsx)("div", {})
}