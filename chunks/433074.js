n.d(t, {
  Z: function() {
    return g
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(873546),
  a = n(399606),
  r = n(481060),
  o = n(434650),
  c = n(706454),
  u = n(973616),
  d = n(914010),
  E = n(594174),
  _ = n(197409),
  I = n(626135),
  T = n(135431),
  N = n(674588),
  m = n(264043),
  h = n(132871),
  C = n(147890),
  S = n(981631),
  A = n(689938),
  p = n(938979);

function g(e) {
  var t, n;
  let {
    code: g,
    message: f
  } = e, [O, R, M] = (0, a.Wu)([m.Z], () => [m.Z.getApplication(g), m.Z.isInvalidApplication(g), m.Z.getApplicationFetchState(g)], [g]), x = (0, a.e7)([c.default], () => c.default.locale), v = (0, a.e7)([d.Z], () => {
    var e;
    return null !== (e = d.Z.getGuildId()) && void 0 !== e ? e : void 0
  }), L = (0, a.e7)([E.default], () => E.default.getCurrentUser()), [Z, P] = i.useState(!1), D = i.useCallback(e => {
    e && P(!0)
  }, []), j = (0, o.O)(D);
  i.useEffect(() => {
    (0, N.gZ)(g)
  }, [g]), i.useEffect(() => {
    Z && M === m.M.FETCHED && I.default.track(S.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
      application_id: g,
      device_platform: l.tq ? "mobile_web" : "desktop_web",
      sender_user_id: f.author.id,
      guild_id: v,
      channel_id: f.channel_id
    })
  }, [Z, g, null == L ? void 0 : L.id, f.channel_id, v, f.author.id, M]), i.useEffect(() => {
    Z && R && I.default.track(S.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
      device_platform: l.tq ? "mobile_web" : "desktop_web",
      sender_user_id: f.author.id,
      guild_id: v,
      channel_id: f.channel_id
    })
  }, [Z, v, R, f.author.id, f.channel_id]);
  let U = e => {
    I.default.track(S.rMx.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
      application_id: g,
      device_platform: l.tq ? "mobile_web" : "desktop_web",
      clicked_section: e,
      guild_id: v,
      channel_id: f.channel_id
    }), (0, C.goToAppDirectory)({
      view: h.ApplicationDirectoryViews.APPLICATION,
      guildId: v,
      applicationId: g,
      entrypoint: {
        name: h.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_PROFILE_EMBED
      }
    })
  };
  if (R) return (0, s.jsxs)(_.Z, {
    containerRef: j,
    children: [(0, s.jsx)(_.Z.Header, {
      text: A.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_HEADER
    }), (0, s.jsx)(_.Z.Body, {
      children: (0, s.jsxs)("div", {
        className: p.invalidBody,
        children: [(0, s.jsx)(_.Z.Icon, {
          expired: !0
        }), (0, s.jsx)(_.Z.Info, {
          expired: !0,
          title: A.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_TITLE,
          children: A.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_BODY
        })]
      })
    })]
  });
  if (null == O || M === m.M.FETCHING) return (0, s.jsxs)(_.Z, {
    containerRef: j,
    children: [(0, s.jsx)(_.Z.Header, {
      text: A.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_RESOLVING_HEADER
    }), (0, s.jsx)(_.Z.Body, {
      resolving: !0
    })]
  });
  let b = new Intl.NumberFormat(x, {
    notation: "compact",
    compactDisplay: "short"
  }).format(null !== (n = null === (t = O.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0);
  return (0, s.jsxs)(_.Z, {
    containerRef: j,
    children: [(0, s.jsx)(_.Z.Header, {
      text: A.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_HEADER
    }), (0, s.jsxs)(_.Z.Body, {
      children: [(0, s.jsxs)("div", {
        className: p.applicationInfoContainer,
        children: [(0, s.jsx)(_.Z.Icon, {
          application: u.Z.createFromServer(O),
          className: p.applicationIcon,
          onClick: () => U("application_icon")
        }), (0, s.jsx)(_.Z.Info, {
          title: (0, s.jsx)(r.Clickable, {
            onClick: () => U("application_name"),
            children: O.name
          }),
          children: (0, s.jsxs)(r.Clickable, {
            className: p.guildCountContainer,
            onClick: () => U("application_guild_count"),
            children: [(0, s.jsx)(r.CompassIcon, {
              size: "custom",
              color: "currentColor",
              width: 16,
              height: 16,
              className: p.guildCountIcon
            }), A.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_GUILD_COUNT.format({
              guildCount: b
            })]
          })
        })]
      }), (0, s.jsx)(_.Z.Button, {
        onClick: () => {
          if (null != O)(0, T.L)({
            applicationId: g,
            customInstallUrl: O.custom_install_url,
            installParams: O.install_params,
            integrationTypesConfig: O.integration_types_config,
            guildId: v,
            source: "app_directory_profile_embed"
          })
        },
        color: _.Z.Button.Colors.GREEN,
        children: A.Z.Messages.APPLICATION_ADD_BUTTON
      })]
    })]
  })
}