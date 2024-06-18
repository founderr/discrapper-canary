"use strict";
t.d(s, {
  Z: function() {
    return G
  }
}), t(47120), t(724458);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(525654),
  o = t.n(r),
  c = t(442837),
  d = t(846519),
  u = t(481060),
  E = t(232567),
  _ = t(596454),
  I = t(410030),
  T = t(623624),
  N = t(889161),
  m = t(208049),
  S = t(763296),
  h = t(22382),
  g = t(747071),
  C = t(171368),
  x = t(430824),
  R = t(594174),
  L = t(15385),
  O = t(768581),
  A = t(267642),
  p = t(358085),
  M = t(999382),
  f = t(70409),
  D = t(981631),
  v = t(710111),
  j = t(689938),
  Z = t(34639);
let U = p.isPlatformEmbedded || "Safari" !== o().name && "Firefox" !== o().name;

function G() {
  let e = (0, c.e7)([M.Z], () => M.Z.getProps().guild);
  return null == e ? null : (0, n.jsx)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: j.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
    children: (0, n.jsx)(F, {
      guild: e
    })
  })
}

function P(e) {
  let {
    children: s
  } = e;
  return (0, n.jsx)(u.Heading, {
    className: Z.tableHeader,
    variant: "heading-sm/semibold",
    color: "header-secondary",
    children: s
  })
}

function b(e) {
  let {
    currentTier: s,
    availableSounds: t,
    guildId: i
  } = e, l = x.Z.getGuild(i), a = (0, A.U2)(s, l);
  return 0 === s ? (0, n.jsx)(n.Fragment, {
    children: j.Z.Messages.GUILD_SETTINGS_SOUND_LIST_SOUNDS_AVAILABLE.format({
      slots: t,
      totalSlots: a
    })
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(u.Tooltip, {
      text: j.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_BOOST_LEVEL.format({
        currentBoostLevel: s
      }),
      children: e => (0, n.jsx)(u.Clickable, {
        className: Z.boostingIconWrapper,
        onClick: () => {
          var e;
          return e = i, void(0, T.f)({
            guildId: e,
            location: {
              section: D.jXE.GUILD_SETTINGS_SOUNDBOARD,
              object: D.qAy.BOOST_GEM_ICON
            }
          })
        },
        tabIndex: -1,
        children: (0, n.jsx)(L.Z, {
          ...e
        })
      })
    }), j.Z.Messages.GUILD_SETTINGS_SOUND_LIST_SOUNDS_AVAILABLE_BOOST_LEVEL.format({
      slots: t,
      totalSlots: a,
      boostLevel: s
    })]
  })
}
let B = e => {
    let {
      renderPopoutBody: s,
      renderPopoutChildren: t,
      ...l
    } = e, [a, r] = i.useState(!1), o = i.useMemo(() => new d.V7, []), c = i.useCallback(() => {
      o.stop(), r(!0)
    }, [o]), E = i.useCallback(() => {
      o.start(200, () => r(!1))
    }, [o]);
    return (0, n.jsx)(u.Popout, {
      shouldShow: a,
      renderPopout: e => (0, n.jsx)(u.Dialog, {
        className: Z.browserUnsupportedDialog,
        onMouseEnter: c,
        onMouseLeave: E,
        children: s(e)
      }),
      ...l,
      children: e => t(e)
    })
  },
  y = () => (0, n.jsx)(B, {
    renderPopoutBody: () => (0, n.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: j.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND_NOT_SUPPORTED.format()
    }),
    renderPopoutChildren: e => (0, n.jsx)(u.Button, {
      ...e,
      disabled: !0,
      children: j.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND
    })
  });

function F(e) {
  let {
    guild: s
  } = e, [l, a] = (0, c.Wu)([S.Z], () => {
    var e;
    return [null !== (e = S.Z.getSoundsForGuild(s.id)) && void 0 !== e ? e : v.Hy, S.Z.isFetchingSounds() || S.Z.isFetchingDefaultSounds()]
  }), {
    canCreateExpressions: r
  } = (0, N.XJ)(s), o = i.useRef(null), d = (0, I.ZP)(), E = s.premiumTier, _ = (0, A.yw)(s, l, E);
  i.useEffect(() => {
    (0, m.w)()
  }, []);
  let T = i.useMemo(() => l.reduce((e, s) => (e[s.soundId] = new Audio((0, h.Z)(s.soundId)), e), {}), [l]),
    C = 0 === l.length && !a;

  function x(e) {
    var s;
    null === (s = o.current) || void 0 === s || s.pause();
    let t = T[e.soundId];
    null != t && (o.current = t, t.currentTime = 0, t.volume = (0, g.Z)(e.volume), t.play())
  }
  i.useEffect(() => () => {
    var e;
    null === (e = o.current) || void 0 === e || e.pause()
  }, []);
  if (a) return (0, n.jsx)(u.Spinner, {});
  let R = U ? (0, n.jsx)(u.Button, {
    onClick: function() {
      (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("49237"), t.e("99387"), t.e("56035")]).then(t.bind(t, 758961));
        return t => (0, n.jsx)(e, {
          ...t,
          guildId: s.id
        })
      })
    },
    disabled: _ <= 0 || !r,
    children: j.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND
  }) : (0, n.jsx)(y, {});
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      children: [(0, n.jsx)(u.Text, {
        className: Z.helpText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: j.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_DESCRIPTION
      }), (0, n.jsx)("div", {
        className: Z.buttons,
        children: !C && R
      })]
    }), C ? (0, n.jsxs)(u.EmptyState, {
      theme: d,
      className: Z.empty,
      children: [(0, n.jsx)(u.EmptyStateImage, {
        darkSrc: t(458601),
        lightSrc: t(673557),
        width: 272,
        height: 212
      }), (0, n.jsx)(u.EmptyStateText, {
        note: j.Z.Messages.NO_SOUNDS,
        noteClassName: Z.emptyText,
        children: j.Z.Messages.NO_SOUNDS_TITLE
      }), R]
    }) : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(u.FormDivider, {
        className: Z.divider
      }), (0, n.jsx)(u.Heading, {
        className: Z.tableTitle,
        variant: "heading-md/bold",
        color: "header-primary",
        children: (0, n.jsx)(b, {
          guildId: s.id,
          currentTier: E,
          availableSounds: _
        })
      }), (0, n.jsx)(f.Z, {
        guild: s,
        numSounds: l.length,
        isOutOfSlots: 0 === _
      }), (0, n.jsxs)("div", {
        className: Z.soundTable,
        children: [(0, n.jsxs)("div", {
          className: Z.tableHeaders,
          children: [(0, n.jsx)(P, {
            children: j.Z.Messages.EMOJI
          }), (0, n.jsx)(P, {
            children: j.Z.Messages.GUILD_SETTINGS_SOUND_NAME_COLUMN
          }), (0, n.jsx)(P, {
            children: j.Z.Messages.GUILD_SETTINGS_SOUND_UPLOADER_COLUMN
          })]
        }), l.map(e => (0, n.jsx)(k, {
          sound: e,
          isPlaying: !1,
          guild: s,
          onPlaySound: x
        }, e.soundId))]
      })]
    })]
  })
}

function k(e) {
  let {
    sound: s,
    isPlaying: l,
    onPlaySound: r,
    guild: o
  } = e, {
    soundId: d,
    name: I,
    user: T,
    userId: S,
    emojiId: h,
    emojiName: g
  } = s, x = (0, c.e7)([R.default], () => null != T ? T : R.default.getUser(S), [S, T]), {
    canManageGuildExpression: L
  } = (0, N.XJ)(o), A = i.useMemo(() => L(s), [s, L]), p = null != h || null != g, [M, f] = i.useState(!1);
  async function v() {
    if (!M) {
      f(!0);
      try {
        await (0, m.AA)(o.id, d)
      } catch {
        f(!1)
      }
    }
  }
  i.useEffect(() => {
    null == x && e();
    async function e() {
      await (0, E.PR)(S)
    }
  }, [x, S]);
  let U = i.useCallback(() => {
    null != x && (0, C.openUserProfileModal)({
      userId: x.id,
      guildId: o.id,
      analyticsLocation: {
        section: D.jXE.GUILD_SETTINGS_SOUNDBOARD
      }
    })
  }, [x, o.id]);
  return (0, n.jsxs)("div", {
    className: a()(Z.row, {
      [Z.active]: l
    }),
    children: [p ? (0, n.jsx)(_.Z, {
      emojiId: h,
      emojiName: g,
      className: Z.emoji
    }) : (0, n.jsx)(u.ImageIcon, {
      size: "md",
      color: "currentColor",
      className: Z.emoji
    }), (0, n.jsx)(u.Clickable, {
      onClick: () => {
        !M && r(s)
      },
      className: Z.soundName,
      children: (0, n.jsxs)(u.Text, {
        variant: "text-sm/normal",
        className: Z.soundName,
        children: [I, " ", (0, n.jsx)(u.VoiceNormalIcon, {
          size: "md",
          color: "currentColor",
          className: Z.soundPreviewIcon
        })]
      })
    }), null != x && (0, n.jsxs)(u.Clickable, {
      className: Z.uploader,
      onClick: U,
      children: [(0, n.jsx)(u.Avatar, {
        "aria-label": null == x ? void 0 : x.username,
        size: u.AvatarSizes.SIZE_24,
        className: Z.uploaderAvatar,
        src: (0, O.ov)(x, !1, 24)
      }), (0, n.jsx)(u.Text, {
        variant: "text-sm/normal",
        lineClamp: 1,
        children: null == x ? void 0 : x.username
      })]
    }), A ? (0, n.jsxs)("div", {
      className: Z.soundEditContainer,
      children: [(0, n.jsx)(u.Clickable, {
        className: Z.soundUpdate,
        onClick: function(e) {
          e.stopPropagation(), (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([t.e("49237"), t.e("99387"), t.e("56035")]).then(t.bind(t, 758961));
            return t => (0, n.jsx)(e, {
              ...t,
              guildId: o.id,
              existingSound: s
            })
          })
        },
        "aria-label": j.Z.Messages.EDIT,
        children: (0, n.jsx)(u.PencilIcon, {
          size: "xs",
          color: "currentColor",
          className: Z.soundEditIcon
        })
      }), (0, n.jsx)(u.Clickable, {
        className: Z.soundRemove,
        onClick: function(e) {
          e.stopPropagation(), (0, u.openModal)(e => (0, n.jsx)(u.ConfirmModal, {
            header: j.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_DELETE_SOUND_TITLE.format({
              soundName: I
            }),
            confirmText: j.Z.Messages.DELETE,
            cancelText: j.Z.Messages.CANCEL,
            onConfirm: v,
            ...e,
            children: (0, n.jsx)(u.Text, {
              variant: "text-md/normal",
              children: j.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_DELETE_SOUND_BODY.format({
                soundName: I
              })
            })
          }))
        },
        "aria-label": j.Z.Messages.REMOVE,
        children: (0, n.jsx)(u.CloseSmallIcon, {
          size: "md",
          color: "currentColor",
          className: Z.soundEditIcon
        })
      })]
    }) : null]
  })
}