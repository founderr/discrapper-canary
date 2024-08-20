var n = t(570140),
    a = t(668781),
    i = t(287734),
    r = t(881052),
    o = t(314897),
    l = t(592125),
    c = t(979651),
    d = t(352954),
    _ = t(630759),
    E = t(760373),
    u = t(981631),
    I = t(689938);
async function T(e, s) {
    if (e) {
        n.Z.dispatch({
            type: 'SECURE_FRAMES_SETTINGS_UPDATE',
            persistentCodesEnabled: e
        });
        try {
            await (0, _.om)(E.GB), null == s || s();
        } catch (s) {
            var t;
            let e = new r.Hx(s);
            n.Z.dispatch({
                type: 'SECURE_FRAMES_SETTINGS_UPDATE',
                persistentCodesEnabled: !1
            }),
                a.Z.show({
                    title: I.Z.Messages.ERROR_GENERIC_TITLE,
                    body: null !== (t = e.getAnyErrorMessage()) && void 0 !== t ? t : I.Z.Messages.GENERIC_ERROR_BODY
                });
        }
    } else
        n.Z.dispatch({
            type: 'SECURE_FRAMES_SETTINGS_UPDATE',
            persistentCodesEnabled: e
        }),
            null == s || s();
}
async function S(e) {
    let s = (function () {
        let e = c.Z.getVoiceStateForUser(o.default.getId()),
            s = l.Z.getChannel(null == e ? void 0 : e.channelId);
        return o.default.getSessionId() === (null == e ? void 0 : e.sessionId) && null != s && s.type !== u.d4z.GUILD_STAGE_VOICE ? s.id : null;
    })();
    null != s
        ? d.Z.openSecureFramesUpdateConfirmation({
              title: e ? I.Z.Messages.E2EE_ENABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_TITLE : I.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_TITLE,
              subtitle: e ? I.Z.Messages.E2EE_ENABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_SUBTITLE : I.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_SUBTITLE,
              confirmText: I.Z.Messages.E2EE_PERSISTENT_KEYS_RECONNECT_CONFIRM,
              onConfirm: async () => {
                  await T(e, () => {
                      i.default.disconnect(), i.default.selectVoiceChannel(s);
                  });
              }
          })
        : await T(e);
}
s.Z = {
    updatePersistentCodesEnabled: S,
    addCurrentUserUploadedKeyVersionCached: function (e) {
        n.Z.dispatch({
            type: 'SECURE_FRAMES_UPLOAD_PUBLIC_KEY_SUCCESS',
            keyVersion: e
        });
    },
    createSecureFramesVerifiedKey: function (e, s) {
        n.Z.dispatch({
            type: 'SECURE_FRAMES_VERIFIED_KEY_CREATE',
            userId: e,
            key: s
        });
    },
    deleteSecureFramesVerifiedKey: function (e, s) {
        n.Z.dispatch({
            type: 'SECURE_FRAMES_VERIFIED_KEY_DELETE',
            userId: e,
            serializedKey: s
        });
    },
    deleteSecureFramesUserVerifiedKeys: function (e) {
        n.Z.dispatch({
            type: 'SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE',
            userId: e
        });
    },
    createSecureFramesTransientKey: function (e, s) {
        n.Z.dispatch({
            type: 'SECURE_FRAMES_TRANSIENT_KEY_CREATE',
            userId: e,
            key: s
        });
    },
    deleteSecureFramesTransientKey: function (e) {
        n.Z.dispatch({
            type: 'SECURE_FRAMES_TRANSIENT_KEY_DELETE',
            userId: e
        });
    }
};
